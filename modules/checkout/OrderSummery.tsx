"use client";
import Animate from "@/components/animation/Animate";
import Currency from "@/components/icons/Currency";
import Translate from "@/components/shared/Translate";
import { Separator } from "@/components/ui/separator";
import { useLang } from "@/hooks/useLang";
import { fadeD1 } from "@/lib/animation";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import React, { useState } from "react";

function OrderSummery() {
  const { t, isRTL } = useLang();
  const [promoCode, setPromoCode] = useState("");

  const basePrice = 250;
  const vat = basePrice * 0.14;
  const discount = 50;
  const total = basePrice + vat - discount;

  const planName = isRTL ? "الباقة الأساسية" : "Growth Plan";

  return (
    <Animate
      variants={fadeD1}
      className=" flex justify-center lg:justify-end order-1 lg:order-2"
    >
      <div className="dark:bg-primary-foreground/20 backdrop-blur-xs  rounded-4xl p-6 border sticky top-8 w-88">
        {/* Premium Badge */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-primary-foreground bg-primary dark:bg-primary-foreground/80 dark:text-primary py-1 px-3 rounded-full text-xs font-medium">
              {t("plans.discount")}
            </span>
            <div className="text-2xl font-bold">{t("plans.premium")}</div>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-foreground/50 text-sm">
              {t("plans.perMonth")}
            </span>
            <div className="text-2xl font-bold flex items-center gap-2">
              {basePrice.toLocaleString()} <Currency className="size-5" />
            </div>
          </div>
        </div>

        <Separator className="my-6 dark:bg-primary/10" />

        {/* User Info */}
        <div className="space-y-4">
          <div>
            <div className="text-xs text-foreground/50 mb-1 font-semibold">
              {t("checkout.phoneNumber")}
            </div>
            <div className="text-sm font-medium">+966 0123 456 789</div>
          </div>
          <div>
            <div className="text-xs text-foreground/50 mb-1 font-semibold">
              {t("checkout.email")}
            </div>
            <div className="text-sm font-medium">
              merchant@bitely.com
            </div>
          </div>
          <div>
            <div className="text-xs text-foreground/50 mb-1 font-semibold">
              {t("checkout.country")}
            </div>
            <div className="text-sm font-medium">Saudi Arabia</div>
          </div>
        </div>

       <Separator className="my-6 dark:bg-primary/10" />

        {/* Promo Code */}
        <div className="mb-6">
          <div className="relative">
            <input
              type="text"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              placeholder={t("checkout.promoCode")}
              className="w-full pl-4 pr-12 py-3 border border-neutral-200 dark:border-foreground/10 rounded-full transition-all cursor-pointer"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-custom-green hover:bg-custom-green/80 text-white rounded-full flex items-center justify-center transition-colors">
              <ArrowRight
                className={cn("w-4 h-4 text-white", isRTL ? "rotate-180" : "")}
              />
            </button>
          </div>
        </div>

        {/* Price Breakdown */}
        <div className="space-y-2 mb-6 pb-4 border bg-background/50 px-4 py-4 rounded-2xl">
          <div className="flex justify-between text-sm">
            <span
              className={cn(
                "text-foreground/50 flex items-center gap-1",
                isRTL ? "flex-row-reverse" : "flex-row",
              )}
            >
              <span>{planName}</span>
              <Translate text="plans.subscription" />
            </span>
            <span className="font-medium flex items-center gap-1">
              {" "}
              {basePrice}
              <Currency className="size-4" />
            </span>
          </div>

          <div className="flex justify-between text-sm">
            <span className="text-foreground/50">{t("plans.vat")}</span>
            <span className="font-medium flex items-center gap-1">
              {" "}
              {vat}
              <Currency className="size-4" />
            </span>
          </div>

          <div className="flex justify-between text-sm">
            <span className="text-foreground/50">{t("plans.promo")}</span>
            <span className="font-medium flex items-center gap-1 text-primary">
              {discount} <Currency className="size-4" />
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span className="font-medium text-lg">{t("plans.total")}</span>
            <span className="font-medium text-xl flex items-center gap-1">
              {" "}
              {total} <Currency className="size-5" />
            </span>
          </div>
        </div>
      </div>
    </Animate>
  );
}

export default OrderSummery;
