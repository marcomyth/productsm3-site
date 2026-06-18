import Link from "next/link";
import Image from "next/image";
import { mediaUrl } from "@/lib/media";
import { cn } from "@/lib/utils";
import type { BlogBlock, BlogInlineChild } from "@/lib/types";

/** Renderiza blocks do Strapi v5 (formato do campo `content` do blog-post). */
export function BlocksRenderer({ blocks }: { blocks: BlogBlock[] | undefined }) {
  if (!blocks || blocks.length === 0) return null;
  return (
    <div className="prose-blog">
      {blocks.map((block, i) => (
        <Block key={i} block={block} />
      ))}
    </div>
  );
}

function Block({ block }: { block: BlogBlock }) {
  switch (block.type) {
    case "paragraph":
      return (
        <p className="my-4 text-base leading-relaxed text-foreground/90">
          <Inline children={block.children} />
        </p>
      );
    case "heading": {
      const cls = headingClass(block.level);
      const inner = <Inline children={block.children} />;
      if (block.level === 1) return <h1 className={cls}>{inner}</h1>;
      if (block.level === 2) return <h2 className={cls}>{inner}</h2>;
      if (block.level === 3) return <h3 className={cls}>{inner}</h3>;
      if (block.level === 4) return <h4 className={cls}>{inner}</h4>;
      if (block.level === 5) return <h5 className={cls}>{inner}</h5>;
      return <h6 className={cls}>{inner}</h6>;
    }
    case "list": {
      const Tag = block.format === "ordered" ? "ol" : "ul";
      return (
        <Tag
          className={cn(
            "my-4 ml-6 space-y-1.5 text-base text-foreground/90",
            block.format === "ordered" ? "list-decimal" : "list-disc",
          )}
        >
          {block.children.map((li, i) => (
            <li key={i}>
              <Inline children={li.children} />
            </li>
          ))}
        </Tag>
      );
    }
    case "quote":
      return (
        <blockquote className="my-6 border-l-4 border-primary/40 bg-muted/30 py-3 pl-4 italic text-foreground/80">
          <Inline children={block.children} />
        </blockquote>
      );
    case "code":
      return (
        <pre className="my-4 overflow-x-auto rounded-lg bg-muted/60 p-4 text-sm">
          <code>{block.children.map((c) => c.text).join("")}</code>
        </pre>
      );
    case "image": {
      const url = mediaUrl(block.image.url);
      if (!url) return null;
      const w = block.image.width ?? 1280;
      const h = block.image.height ?? 720;
      return (
        <figure className="my-6">
          <Image
            src={url}
            alt={block.image.alternativeText ?? ""}
            width={w}
            height={h}
            className="h-auto w-full rounded-xl"
          />
          {block.image.alternativeText && (
            <figcaption className="mt-2 text-center text-xs text-muted-foreground">
              {block.image.alternativeText}
            </figcaption>
          )}
        </figure>
      );
    }
    default:
      return null;
  }
}

function Inline({ children }: { children: BlogInlineChild[] }) {
  return (
    <>
      {children.map((child, i) => {
        if (child.type === "link") {
          const isExternal = /^https?:\/\//.test(child.url);
          return (
            <Link
              key={i}
              href={child.url}
              className="text-primary underline-offset-4 hover:underline"
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
            >
              {child.children.map((c) => c.text).join("")}
            </Link>
          );
        }
        let el: React.ReactNode = child.text;
        if (child.code) el = <code className="rounded bg-muted px-1.5 py-0.5 text-sm">{el}</code>;
        if (child.bold) el = <strong>{el}</strong>;
        if (child.italic) el = <em>{el}</em>;
        if (child.underline) el = <span className="underline">{el}</span>;
        if (child.strikethrough) el = <span className="line-through">{el}</span>;
        return <span key={i}>{el}</span>;
      })}
    </>
  );
}

function headingClass(level: 1 | 2 | 3 | 4 | 5 | 6): string {
  const base = "font-display font-bold tracking-tight";
  switch (level) {
    case 1:
      return cn(base, "mt-8 mb-4 text-4xl md:text-5xl");
    case 2:
      return cn(base, "mt-8 mb-3 text-2xl md:text-3xl");
    case 3:
      return cn(base, "mt-6 mb-2 text-xl md:text-2xl");
    case 4:
      return cn(base, "mt-5 mb-2 text-lg md:text-xl");
    case 5:
      return cn(base, "mt-4 mb-2 text-base font-semibold");
    case 6:
      return cn(base, "mt-4 mb-2 text-sm font-semibold uppercase tracking-wider");
  }
}
