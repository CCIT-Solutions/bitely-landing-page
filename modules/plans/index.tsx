"use client";
import React, { useState } from "react";
import Image from "next/image";
import Container from "@/components/shared/Container";
// import PlanTapSwitcher from "@/components/plans/PlanTapSwitcher";
import Plans from "../../components/plans/Plans";
import PlansForm from "../checkout/PlansForm";
import { Separator } from "@/components/ui/separator";
import { useLang } from "@/hooks/useLang";
import Animate from "@/components/animation/Animate";
import { fade } from "@/lib/animation";
import Heading from "@/components/shared/Heading";
import PlanTapSwitcher from "@/components/plans/PlanTapSwitcher";

export default function YachtPlansPage() {
  const [billing, setBilling] = useState<"yearly" | "monthly">("monthly");
  const { t } = useLang();

  const unitLabel =
    billing === "yearly" ? t("plans.unit.yearly") : t("plans.unit.monthly");

  return (
    <div className="min-h-screen px-4 py-44">
      <Container>
        {/* Heading */}

        <div className="text-center">
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
        <div className="my-16">
          <PlanTapSwitcher billing={billing} setBilling={setBilling} />
        </div>

        <div className="grid lg:grid-cols-[1fr_360px] gap-8">
          <Plans billing={billing}/>
          <PlansForm />
        </div>
      </Container>
    </div>
  );
}
