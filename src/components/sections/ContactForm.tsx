"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import type { ContactFormSection } from "@/lib/types";

const BUDGET_OPTIONS = [
  { value: "", label: "Selecione…" },
  { value: "ate_5k", label: "Até R$ 5.000" },
  { value: "de_5k_a_15k", label: "R$ 5.000 – R$ 15.000" },
  { value: "de_15k_a_30k", label: "R$ 15.000 – R$ 30.000" },
  { value: "acima_30k", label: "Acima de R$ 30.000" },
  { value: "nao_definido", label: "Ainda não defini" },
] as const;

const BUDGET_VALUES = ["ate_5k", "de_5k_a_15k", "de_15k_a_30k", "acima_30k", "nao_definido"] as const;

const leadSchema = z.object({
  name: z.string().min(2, "Informe seu nome"),
  email: z.string().email("Email inválido"),
  phone: z.string().optional(),
  company: z.string().optional(),
  budget: z.enum(["", ...BUDGET_VALUES]).optional(),
  message: z.string().min(10, "Conte um pouco mais sobre o projeto"),
});

type LeadFormValues = z.infer<typeof leadSchema>;

export function ContactForm({ data }: { data: ContactFormSection }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<LeadFormValues>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      budget: "",
      message: "",
    },
  });

  const onSubmit = async (values: LeadFormValues) => {
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, source: "landing-page" }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.error || "Falha ao enviar");
      }
      toast.success(data.successMessage || "Recebemos sua mensagem. Em breve entraremos em contato.");
      reset();
    } catch (err) {
      const message = err instanceof Error ? err.message : "Erro inesperado";
      toast.error(`Não foi possível enviar: ${message}`);
    }
  };

  return (
    <section id="contato" className="scroll-mt-20 py-20 md:py-28 px-4 md:px-8 border-t border-border/30">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
        <div>
          {data.eyebrow && (
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
              {data.eyebrow}
            </p>
          )}
          <h2 className="mt-2 text-3xl md:text-5xl font-black tracking-tight">
            <span className="text-brand-gradient">{data.title}</span>
          </h2>
          {data.subtitle && (
            <p className="mt-4 max-w-md text-base md:text-lg text-muted-foreground">
              {data.subtitle}
            </p>
          )}
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="glass grid gap-5 rounded-3xl border border-border/50 p-6 md:p-8 shadow-premium"
          noValidate
        >
          <div className="grid gap-2">
            <Label htmlFor="name">Nome*</Label>
            <Input
              id="name"
              {...register("name")}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
              autoComplete="name"
            />
            {errors.name && (
              <p id="name-error" className="text-xs text-destructive">{errors.name.message}</p>
            )}
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="email">Email*</Label>
              <Input
                id="email"
                type="email"
                {...register("email")}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
                autoComplete="email"
              />
              {errors.email && (
                <p id="email-error" className="text-xs text-destructive">{errors.email.message}</p>
              )}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="phone">Telefone</Label>
              <Input id="phone" type="tel" {...register("phone")} autoComplete="tel" />
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="company">Empresa</Label>
              <Input id="company" {...register("company")} autoComplete="organization" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="budget">Orçamento</Label>
              <select
                id="budget"
                {...register("budget")}
                className="flex h-11 w-full rounded-md border border-border bg-background px-3 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50"
              >
                {BUDGET_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="message">Sobre o projeto*</Label>
            <Textarea
              id="message"
              rows={5}
              {...register("message")}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
            />
            {errors.message && (
              <p id="message-error" className="text-xs text-destructive">{errors.message.message}</p>
            )}
          </div>

          <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
            {isSubmitting && <Loader2 className="h-4 w-4 animate-spin" />}
            {data.submitLabel || "Enviar mensagem"}
          </Button>
        </form>
      </div>
    </section>
  );
}
