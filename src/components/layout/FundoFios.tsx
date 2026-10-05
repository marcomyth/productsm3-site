"use client";

import * as React from "react";

/**
 * Fundo animado de fios luminosos.
 *
 * Desenhado em canvas, à mão, sem biblioteca: são senoides somadas e um
 * envelope de amplitude que aperta as curvas até quase zero num ponto de
 * convergência. É esse aperto que produz o nó de luz — sem ele o desenho vira
 * um mar de ondas paralelas, que é bonito e não é o mesmo efeito.
 *
 * O brilho não usa `shadowBlur`, que custa caro por traço e derruba a taxa de
 * quadros com dez curvas: cada fio é desenhado três vezes, da mais larga e
 * apagada para a mais fina e acesa. O resultado lê como halo e custa três
 * traços simples.
 *
 * O ponteiro desloca o ponto de convergência, com amortecimento, em vez de
 * grudar nele. Seguir o cursor na razão de 1:1 denuncia que é um efeito;
 * perseguir devagar lê como reação.
 */
type Props = {
  /** Cores dos fios. Recebe tokens resolvidos, não nomes de classe: o canvas
      pinta com valor, não com CSS. */
  cores?: string[];
  className?: string;
};

const PADRAO = ["#5fc9bd", "#25d366", "#9fb2c1"];

type Fio = {
  amplitude: number;
  frequencia: number;
  fase: number;
  velocidade: number;
  deslocamento: number;
  cor: string;
  espessura: number;
};

export function FundoFios({ cores = PADRAO, className }: Props) {
  const refCanvas = React.useRef<HTMLCanvasElement | null>(null);

  React.useEffect(() => {
    const canvas = refCanvas.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const semMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let L = 0;
    let A = 0;
    let quadro = 0;
    let vivo = true;

    // Alvo do ponteiro e posição amortecida que o persegue.
    const alvo = { x: 0.42, y: 0.5 };
    const foco = { x: 0.42, y: 0.5 };

    const fios: Fio[] = Array.from({ length: 11 }, (_, i) => {
      const t = i / 10;
      return {
        amplitude: 0.1 + 0.26 * Math.abs(Math.sin(i * 1.7)),
        frequencia: 1.1 + 1.9 * ((i * 0.37) % 1),
        fase: i * 1.21,
        velocidade: 0.08 + 0.16 * ((i * 0.53) % 1),
        deslocamento: (t - 0.5) * 0.7,
        cor: cores[i % cores.length],
        espessura: i % 3 === 0 ? 1.5 : 1,
      };
    });

    function dimensionar() {
      const r = canvas!.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      L = Math.max(1, Math.floor(r.width));
      A = Math.max(1, Math.floor(r.height));
      canvas!.width = Math.floor(L * dpr);
      canvas!.height = Math.floor(A * dpr);
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function desenhar(tempo: number) {
      const t = tempo / 1000;

      // Amortecimento: 8% do caminho por quadro.
      foco.x += (alvo.x - foco.x) * 0.08;
      foco.y += (alvo.y - foco.y) * 0.08;

      ctx!.clearRect(0, 0, L, A);
      ctx!.globalCompositeOperation = "lighter";

      const fx = foco.x * L;
      const fy = foco.y * A;
      // ~120 pontos por fio. Com 220 o desenho não fica visivelmente melhor,
      // porque `quadraticCurveTo` já suaviza entre eles, e dobra o trabalho:
      // são 11 fios vezes 3 passadas de brilho em cada quadro.
      const passo = Math.max(8, Math.floor(L / 120));

      for (const fio of fios) {
        const pontos: Array<[number, number]> = [];
        for (let x = -passo; x <= L + passo; x += passo) {
          // Envelope: zero no foco, cresce para as bordas. É o que amarra
          // todas as curvas num nó só.
          const env = Math.min(1, Math.abs(x - fx) / (L * 0.55));
          const onda =
            Math.sin((x / L) * fio.frequencia * Math.PI * 2 + fio.fase + t * fio.velocidade) * 0.6 +
            Math.sin((x / L) * fio.frequencia * Math.PI * 1.3 - fio.fase + t * fio.velocidade * 0.7) *
              0.4;
          const y = fy + fio.deslocamento * A * env + onda * fio.amplitude * A * env;
          pontos.push([x, y]);
        }

        // Três passadas: halo largo e apagado, meio, e o fio aceso.
        const passadas: Array<[number, number]> = [
          [fio.espessura * 5, 0.045],
          [fio.espessura * 2, 0.1],
          [fio.espessura, 0.5],
        ];
        for (const [largura, alfa] of passadas) {
          ctx!.beginPath();
          ctx!.moveTo(pontos[0][0], pontos[0][1]);
          for (let i = 1; i < pontos.length - 1; i++) {
            const [x0, y0] = pontos[i];
            const [x1, y1] = pontos[i + 1];
            ctx!.quadraticCurveTo(x0, y0, (x0 + x1) / 2, (y0 + y1) / 2);
          }
          ctx!.strokeStyle = fio.cor;
          ctx!.globalAlpha = alfa;
          ctx!.lineWidth = largura;
          ctx!.lineCap = "round";
          ctx!.stroke();
        }
      }

      ctx!.globalAlpha = 1;
      ctx!.globalCompositeOperation = "source-over";
    }

    function laco(tempo: number) {
      if (!vivo) return;
      desenhar(tempo);
      quadro = requestAnimationFrame(laco);
    }

    function aoMover(e: PointerEvent) {
      const r = canvas!.getBoundingClientRect();
      alvo.x = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width));
      alvo.y = Math.min(1, Math.max(0, (e.clientY - r.top) / r.height));
    }

    dimensionar();

    const ro = new ResizeObserver(() => {
      dimensionar();
      if (semMovimento) desenhar(0);
    });
    ro.observe(canvas);

    if (semMovimento) {
      // Um quadro só: quem pediu menos movimento continua vendo o desenho.
      desenhar(0);
    } else {
      // Só anima enquanto o hero está na tela — rolar a página não deve
      // deixar um requestAnimationFrame rodando atrás de nada.
      const io = new IntersectionObserver(
        ([entrada]) => {
          if (entrada.isIntersecting && !quadro) {
            vivo = true;
            quadro = requestAnimationFrame(laco);
          } else if (!entrada.isIntersecting && quadro) {
            vivo = false;
            cancelAnimationFrame(quadro);
            quadro = 0;
          }
        },
        { threshold: 0 },
      );
      io.observe(canvas);
      window.addEventListener("pointermove", aoMover, { passive: true });

      return () => {
        vivo = false;
        if (quadro) cancelAnimationFrame(quadro);
        io.disconnect();
        ro.disconnect();
        window.removeEventListener("pointermove", aoMover);
      };
    }

    return () => {
      ro.disconnect();
    };
  }, [cores]);

  return (
    <canvas
      ref={refCanvas}
      aria-hidden="true"
      className={className}
      // O canvas é decorativo: nada de conteúdo vive aqui, e leitor de tela
      // não tem o que anunciar.
    />
  );
}
