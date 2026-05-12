import * as LucideIcons from "lucide-react";
import { Sparkles, type LucideProps } from "lucide-react";
import { cn } from "@/lib/utils";

type IconRegistry = Record<string, React.ComponentType<LucideProps>>;

function toPascalCase(input: string): string {
  return input
    .split(/[-_\s]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
}

function resolveIcon(name: string | undefined): React.ComponentType<LucideProps> {
  if (!name) return Sparkles;
  const cleaned = name.startsWith("lucide:") ? name.slice("lucide:".length) : name;
  const pascal = toPascalCase(cleaned);
  const registry = LucideIcons as unknown as IconRegistry;
  return registry[pascal] ?? Sparkles;
}

type IconProps = LucideProps & { name: string | undefined };

export function Icon({ name, className, ...rest }: IconProps) {
  const Component = resolveIcon(name);
  return <Component className={cn("h-5 w-5", className)} aria-hidden="true" {...rest} />;
}
