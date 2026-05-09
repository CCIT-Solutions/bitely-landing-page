"use client";
import React from "react";
import { ArrowLeft } from "lucide-react";
import { useLang } from "@/hooks/useLang";
import Container from "@/components/shared/Container";
import CheckoutForm from "./CheckoutForm";
import OrderSummery from "./OrderSummery";
import { cn } from "@/lib/utils";
import Animate from "@/components/animation/Animate";
import { fade } from "@/lib/animation";
import WaveLines from "@/components/animation/WaveLines";
import Link from "next/link";

const CheckoutPage = () => {
  const { t, isRTL } = useLang();

  return (
    <div className="min-h-screen p-6 pb-12 pt-30 sm:pt-40">
      {/* Animation wrapper */}
      <div className="absolute -z-1 inset-0 overflow-hidden">
        <WaveLines
          className="absolute -z-10 opacity-60 rotate-45 -inset-s-250 top-200 
                       sm:rotate-30 sm:-inset-s-200 sm:top-150 
                       xl:-rotate-20 xl:-inset-s-100 xl:top-50"
          svgClassName="w-[130%] h-100 xl:w-[130%] xl:h-full"
        />
      </div>
      <Container className="lg:max-w-5xl">
        {/* Header */}
        <Animate
          variants={fade}
          className="flex items-center gap-4 mb-8 relative"
        >
          <Link
            href="/plans"
            className="w-12 h-12 rounded-full border shadow-sm flex items-center justify-center hover:shadow-md transition-shadow"
          >
            <ArrowLeft
              className={cn("size-5 cursor-pointer", isRTL ? "rotate-180" : "")}
            />
          </Link>
          <h1 className="text-4xl font-bold">{t("checkout.title")}</h1>
        </Animate>

        <div className="flex flex-col lg:flex-row justify-between gap-8 w-full">
          <CheckoutForm />
          <OrderSummery />
        </div>
      </Container>
    </div>
  );
};

export default CheckoutPage;
