"use client";

import { useState } from "react";

import { useLang } from "@/hooks/useLang";
import { plans} from "@/data/plans";
import PlanTapSwitcher from "../plans/PlanTapSwitcher";
import Heading from "../shared/Heading";
import Animate from "../animation/Animate";
import {  fadeDu4 } from "@/lib/animation";
import HomePlanCard from "../plans/HomePlanCard";


export default function Plans() {
  const { t, lang } = useLang();
  const [billing, setBilling] = useState<"yearly" | "monthly">("monthly");

  const unitLabel =
    billing === "yearly" ? t("plans.unit.yearly") : t("plans.unit.monthly");

  return (
    <section className="min-h-screen px-4 py-24 overflow-hidden" id="plans">
      <div className="mx-auto max-w-5xl">
        {/* Heading */}

        <div className="mb-14 text-center">
          <Heading
            i18nKey={"plans.title"}
            components={{
              custom: <span className="text-primary" />,
            }}
          />
          <p className="mx-auto max-w-lg text-foreground/60 text-base leading-relaxed">
            {t("plans.subtitle")}
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="mb-16 md:mb-26">
          <PlanTapSwitcher billing={billing} setBilling={setBilling} />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 items-stretch relative">
          <h1 className="absolute inset-0 w-full text-center text-[8rem] md:text-[15rem] font-bold text-primary leading-2.5 ">
            Pricing
          </h1>

          {plans.map((plan, i) => (
            <Animate
              key={i}
              transition={{
                duration: 0.6,
                delay: 0.6 + i * 0.1,
                ease: "easeInOut",
              }}
            
              variants={fadeDu4}
            >
              <HomePlanCard
                plan={plan}
                billing={billing}
                lang={lang}
                unitLabel={unitLabel}
              />
            </Animate>
          ))}
        </div>

        {/* Footer note */}
        <p className="mt-10 text-center text-xs text-foreground/60 tracking-wide">
          {t("plans.footer")}
        </p>
      </div>
    </section>
  );
}
