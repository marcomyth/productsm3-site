import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button, type ButtonProps } from "@/components/ui/button";
import type { StrapiButton } from "@/lib/types";
import { cn } from "@/lib/utils";

type Props = {
  cta?: StrapiButton | null;
  size?: ButtonProps["size"];
  showArrow?: boolean;
  className?: string;
};

export function CtaButton({ cta, size = "lg", showArrow = false, className }: Props) {
  if (!cta) return null;
  const variant = cta.variant ?? "primary";
  return (
    <Button asChild variant={variant} size={size} className={cn(className)}>
      <Link
        href={cta.url || "#"}
        target={cta.external ? "_blank" : undefined}
        rel={cta.external ? "noopener noreferrer" : undefined}
      >
        {cta.label}
        {showArrow && <ArrowUpRight className="ml-1 h-4 w-4" />}
      </Link>
    </Button>
  );
}
