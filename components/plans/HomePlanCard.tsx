"use client";
import { CheckCircle2 } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { type Plan } from "@/data/plans";
import { Language } from "@/types/shared";
import Link from "next/link";
import Currency from "../icons/Currency";
import { memo } from "react";

interface HomePlanCardProps {
  plan: Plan;
  billing: "yearly" | "monthly";
  lang: Language;
  unitLabel: string;
}


function HomePlanCard({ plan, billing, lang, unitLabel }: HomePlanCardProps) {
  const price = billing === "yearly" ? plan.price_yearly : plan.price_monthly;

  return (
    <div
      className={cn(
        "relative flex flex-col rounded-2xl border p-7 transition-all duration-300 hover:scale-103 hover:z-2 h-full",
        "bg-background/50 backdrop-blur-xs",
        plan.featured
          ? "border-primary-foreground shadow-xl scale-105 hover:scale-107 z-1"
          : "border-primary/20 shadow-sm hover:shadow-md hover:border-primary/50",
      )}
    >
      {/* Badge */}
      {plan.badge && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <Badge className="bg-primary-foreground text-white text-[11px] font-semibold tracking-wide px-3 py-1 rounded-full">
            {plan.badge[lang]}
          </Badge>
        </div>
      )}

      {/* Header */}
      <div className="mb-6">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-foreground/40 mb-1">
          {plan.tagline[lang]}
        </p>
        <p
          className={cn(
            "text-2xl font-bold tracking-tight",
            plan.featured
              ? "text-primbg-primary-foreground"
              : "text-foreground/80",
          )}
        >
          {plan.name[lang]}
        </p>
      </div>

      {/* Price */}
      <div className="mb-7 flex items-end gap-1">
        <span className="text-[3.25rem] font-extrabold leading-none tracking-tight text-primbg-primary-foreground flex items-center gap-2">
          {price} <Currency className="size-8"/>
        </span>
        <span className="mb-2 text-foreground/40 text-sm font-medium">
          / {unitLabel}
        </span>
      </div>

      {/* Divider */}
      <div className="mb-6 h-px bg-foreground/5" />

      {/* Features */}
      <ul className="flex-1 space-y-3 mb-8">
        {plan.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2.5">
            <CheckCircle2
              className={cn(
                "mt-0.5 h-4 w-4 shrink-0",
                plan.featured ? "text-primary" : "text-foreground/40",
              )}
              strokeWidth={2.2}
            />
            <span className="text-sm text-foreground/80 leading-snug">
              {feature[lang]}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Link
      href={"/checkout"}
        className={cn(
          "flex justify-center items-center w-full rounded-xl font-semibold tracking-wide text-sm h-12 transition-all duration-200",
          plan.featured
            ? "bg-primary-foreground text-white hover:bg-primary-foreground/90 shadow-md"
            : "bg-foreground/2 text-primbg-primary-foreground hover:bg-foreground/5 border border-fobg-foreground/5",
        )}
      >
        {plan.cta[lang]}
      </Link>
    </div>
  );
}

export default memo(HomePlanCard)