import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  productionBrowserSourceMaps: false,
  images: {
    // O motivo original disto era o Cloudflare Pages/Workers, que não roda o
    // otimizador do Next — mas o deploy hoje é VPS com standalone e Vercel,
    // que rodam. Continua ligado por outro motivo: `sharp` não é dependência
    // declarada aqui (só vem carona do Next), e o build standalone pode não
    // traçá-lo, quebrando as imagens em produção. Pra desligar, declare
    // `sharp` em dependencies primeiro e valide na VPS.
    unoptimized: true,
    remotePatterns: [
      // Placeholder photography from the Stitch export (aida-public bucket).
      // Replace with real brand photography before shipping to production.
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "/**",
      },
      // Capas de blog no Supabase Storage. Não faz efeito enquanto
      // `unoptimized` estiver ligado, mas sem isto elas quebram no exato
      // momento em que a otimização for ativada.
      {
        protocol: "https",
        hostname: "*.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
    ],
  },
};

export default nextConfig;
