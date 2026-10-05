import Link from "next/link";
import Image from "next/image";
import { FileText } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { getBlogPosts } from "@/lib/content";

/**
 * Últimos artigos, antes do rodapé.
 *
 * Três cartões com capa e título, e um botão para o blog inteiro — o fecho da
 * home da referência. Cartão de canto arredondado e sem borda, preenchido um
 * degrau acima do fundo da seção: a separação vem do preenchimento, não de uma
 * linha, que é o que mantém a fileira leve.
 *
 * Sem post publicado, a seção aparece assim mesmo, com três lugares vazios
 * marcados. A decisão é do cliente, e tem lógica: o espaço fica visível desde
 * já e vai sendo preenchido conforme os artigos saem, em vez de a página mudar
 * de tamanho no dia do primeiro post.
 *
 * O lugar vazio não finge conteúdo. Não há título falso nem imagem de
 * exemplo: é uma moldura com a palavra "Em breve", e quem olha entende que ali
 * ainda não tem nada em vez de achar que algo não carregou.
 */
export async function UltimosPosts() {
  const { posts } = await getBlogPosts({ page: 1, pageSize: 3 });
  const vazios = Math.max(0, 3 - posts.length);

  return (
    <Section tom="claro-alt">
      <h2 className="text-center font-sans text-headline-md-mobile font-bold leading-tight t-forte md:text-headline-md">
        Últimos artigos sobre tráfego, dados e e-commerce
      </h2>

      <ul className="mt-space-xl grid grid-cols-1 gap-gutter-desktop md:grid-cols-3">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-[1.25rem] bg-painel transition-shadow duration-300 hover:shadow-md"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-surface-container">
                {post.cover?.url ? (
                  <Image
                    src={post.cover.url}
                    alt={post.cover.alternativeText ?? ""}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                ) : null}
              </div>
              <p className="p-space-md font-sans text-body-default leading-relaxed t-texto transition-colors group-hover:t-acento">
                {post.title}
              </p>
            </Link>
          </li>
        ))}

        {Array.from({ length: vazios }, (_, i) => (
          <li key={`vazio-${i}`} aria-hidden="true">
            <div className="flex h-full flex-col overflow-hidden rounded-[1.25rem] border border-dashed border-regua">
              <div className="flex aspect-[16/10] items-center justify-center bg-surface-container/50">
                <FileText className="h-7 w-7 t-apagado opacity-50" />
              </div>
              <p className="p-space-md font-label-meta text-label-meta uppercase tracking-widest t-apagado">
                Em breve
              </p>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-space-xl flex justify-center">
        <Link
          href="/blog"
          className="inline-flex items-center justify-center rounded-full bg-primary px-space-lg py-space-sm font-sans text-body-default font-semibold uppercase tracking-[0.08em] text-on-primary transition-all duration-300 hover:brightness-125"
        >
          Confira o blog completo
        </Link>
      </div>
    </Section>
  );
}
