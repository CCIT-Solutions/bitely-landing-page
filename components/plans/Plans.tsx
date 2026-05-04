import { Separator } from "@/components/ui/separator";
import { useLang } from "@/hooks/useLang";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import Currency from "../icons/Currency";
import Translate from "../shared/Translate";
import { LiaTimesSolid } from "react-icons/lia";


// ─── Types ────────────────────────────────────────────────────────────────────

export interface PlanFeature {
  id: string;
  en: string;
  ar: string;
}

export interface PlanFeatureSection {
  id: string;
  label: { en: string; ar: string };
  features: PlanFeature[];
}

export interface PlanFeatureValue {
  included: boolean;
  value?: { en: string; ar: string };
}

export interface PlanItem {
  id: string;
  title: { en: string; ar: string };
  tagline: { en: string; ar: string };
  price_monthly: number;
  price_yearly: number;
  cta: { en: string; ar: string };
  featureValues: Record<string, PlanFeatureValue>;
  badge?: { en: string; ar: string };
  recommended?: boolean;
}

// ─── Feature Sections ─────────────────────────────────────────────────────────

export const featureSections: PlanFeatureSection[] = [
  {
    id: "platform",
    label: { en: "Core Platform", ar: "المنصة الأساسية" },
    features: [
      { id: "dashboard", en: "Merchant dashboard", ar: "لوحة تحكم التاجر" },
      {
        id: "public_page",
        en: "Branded public page",
        ar: "صفحة عامة بعلامتك التجارية",
      },
      {
        id: "menu_builder",
        en: "Multi-plan & menu builder",
        ar: "منشئ الخطط والقوائم المتعددة",
      },
      {
        id: "checkout",
        en: "Seamless checkout experience",
        ar: "تجربة دفع سلسة",
      },
    ],
  },
  {
    id: "meals",
    label: { en: "Meal & Schedule Management", ar: "إدارة الوجبات والجداول" },
    features: [
      {
        id: "schedule",
        en: "Meal schedule management",
        ar: "إدارة جداول الوجبات",
      },
      {
        id: "self_service",
        en: "Customer self-service (pause, skip, swap)",
        ar: "تحكم العميل الذاتي (إيقاف، تخطي، تبديل)",
      },
      {
        id: "delivery",
        en: "Delivery day controls",
        ar: "التحكم في أيام التوصيل",
      },
    ],
  },
  {
    id: "notifications",
    label: { en: "Notifications & Marketing", ar: "الإشعارات والتسويق" },
    features: [
      {
        id: "smart_notif",
        en: "Smart notifications (push + email)",
        ar: "إشعارات ذكية (فورية + بريد إلكتروني)",
      },
      { id: "sms", en: "SMS notifications", ar: "إشعارات الرسائل النصية" },
      { id: "coupons", en: "Coupons & promotions", ar: "الكوبونات والعروض" },
    ],
  },
  {
    id: "analytics",
    label: { en: "Analytics & Insights", ar: "التحليلات والرؤى" },
    features: [
      { id: "revenue", en: "Revenue tracking", ar: "تتبع الإيرادات" },
      {
        id: "sub_analytics",
        en: "Subscription analytics",
        ar: "تحليلات الاشتراكات",
      },
      {
        id: "behavior",
        en: "Customer behavior insights",
        ar: "تحليلات سلوك العملاء",
      },
    ],
  },
  {
    id: "branding",
    label: { en: "Branding & Support", ar: "الهوية والدعم" },
    features: [
      {
        id: "custom_brand",
        en: "Custom branding & themes",
        ar: "تخصيص الهوية والتصاميم",
      },
      { id: "priority_support", en: "Priority support", ar: "دعم بأولوية" },
      {
        id: "early_access",
        en: "Early access to new features",
        ar: "وصول مبكر إلى الميزات الجديدة",
      },
    ],
  },
];

// ─── Plans ────────────────────────────────────────────────────────────────────

export const plans: PlanItem[] = [
  {
    id: "starter",
    title: { en: "Starter", ar: "الباقة الأساسية" },
    tagline: {
      en: "Launch your subscription flow",
      ar: "ابدأ نظام الاشتراكات الخاص بك",
    },
    price_monthly: 148,
    price_yearly: 1500,
    cta: { en: "Start now", ar: "ابدأ الآن" },
    featureValues: {
      dashboard: {
        included: true,
        value: { en: "Full access", ar: "وصول كامل" },
      },
      public_page: { included: true, value: { en: "Included", ar: "شامل" } },
      menu_builder: { included: true, value: { en: "Included", ar: "شامل" } },
      checkout: { included: true, value: { en: "Included", ar: "شامل" } },
      schedule: { included: false },
      self_service: { included: false },
      delivery: { included: false },
      smart_notif: { included: false },
      sms: { included: false },
      coupons: { included: false },
      revenue: { included: false },
      sub_analytics: { included: false },
      behavior: { included: false },
      custom_brand: { included: false },
      priority_support: { included: false },
      early_access: { included: false },
    },
  },
  {
    id: "growth",
    title: { en: "Growth", ar: "الباقة المميزة" },
    tagline: {
      en: "Manage and optimize operations",
      ar: "إدارة العمليات وتحسينها",
    },
    badge: { en: "Most chosen", ar: "الأكثر اختيارًا" },
    price_monthly: 345,
    price_yearly: 3450,
    cta: { en: "Start now", ar: "ابدأ الآن" },
    recommended: true,
    featureValues: {
      dashboard: {
        included: true,
        value: { en: "Full access", ar: "وصول كامل" },
      },
      public_page: { included: true, value: { en: "Included", ar: "شامل" } },
      menu_builder: { included: true, value: { en: "Included", ar: "شامل" } },
      checkout: { included: true, value: { en: "Included", ar: "شامل" } },
      schedule: {
        included: true,
        value: { en: "Full control", ar: "تحكم كامل" },
      },
      self_service: { included: true, value: { en: "Included", ar: "شامل" } },
      delivery: { included: true, value: { en: "Included", ar: "شامل" } },
      smart_notif: { included: true, value: { en: "Included", ar: "شامل" } },
      sms: { included: true, value: { en: "2,000 msgs", ar: "2000 رسالة" } },
      coupons: { included: true, value: { en: "Included", ar: "شامل" } },
      revenue: { included: true, value: { en: "Basic", ar: "أساسي" } },
      sub_analytics: { included: true, value: { en: "Included", ar: "شامل" } },
      behavior: { included: false },
      custom_brand: { included: false },
      priority_support: { included: false },
      early_access: { included: false },
    },
  },
  {
    id: "scale",
    title: { en: "Scale", ar: "باقة الاحتراف" },
    tagline: { en: "Operate at full capacity", ar: "تشغيل أعمالك بكامل طاقتها" },
    price_monthly: 499,
    price_yearly: 5000,
  cta: { en: "Start now", ar: "ابدأ الآن" },
    featureValues: {
      dashboard: {
        included: true,
        value: { en: "Full access", ar: "وصول كامل" },
      },
      public_page: { included: true, value: { en: "Included", ar: "شامل" } },
      menu_builder: { included: true, value: { en: "Included", ar: "شامل" } },
      checkout: { included: true, value: { en: "Advanced", ar: "متقدم" } },
      schedule: {
        included: true,
        value: { en: "Full control", ar: "تحكم كامل" },
      },
      self_service: { included: true, value: { en: "Included", ar: "شامل" } },
      delivery: { included: true, value: { en: "Included", ar: "شامل" } },
      smart_notif: { included: true, value: { en: "Included", ar: "شامل" } },
      sms: { included: true, value: { en: "Unlimited", ar: "غير محدود" } },
      coupons: { included: true, value: { en: "Included", ar: "شامل" } },
      revenue: { included: true, value: { en: "Advanced", ar: "متقدم" } },
      sub_analytics: {
        included: true,
        value: { en: "Advanced", ar: "متقدمة" },
      },
      behavior: { included: true, value: { en: "Included", ar: "شامل" } },
      custom_brand: { included: true, value: { en: "Included", ar: "شامل" } },
      priority_support: {
        included: true,
        value: { en: "Included", ar: "شامل" },
      },
      early_access: { included: true, value: { en: "Included", ar: "شامل" } },
    },
  },
];
// ─── Sub-components ───────────────────────────────────────────────────────────

interface FeatureRowProps {
  feature: PlanFeature;
  value: PlanFeatureValue;
  lang: "en" | "ar";
  isRecommended: boolean;
  featureIndex: number;
  cardIndex: number;
}

const FeatureRow: React.FC<FeatureRowProps> = ({
  feature,
  value,
  lang,
  isRecommended,
  featureIndex,
  cardIndex,
}) => (
  <motion.div
    initial={{ opacity: 0, x: -10 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{
      duration: 0.3,
      delay: cardIndex * 0.05 + featureIndex * 0.04,
    }}
    className="flex items-center gap-2"
  >
    {value.included ? (
      <div
        className={cn(
          "w-5 h-5 min-w-5 rounded-full flex items-center justify-center shrink-0",
          isRecommended
            ? "bg-primary text-primary-foreground"
            : "border border-foreground/50 text-foreground/50",
        )}
      >
        <Check className="size-3" />
      </div>
    ) : (
      <div className={cn("w-5 h-5 min-w-5 rounded-full flex items-center justify-center shrink-0 ", isRecommended ? "text-neutral-500" : "text-foreground/50")}>
        <LiaTimesSolid/>
      </div>
    )}

    <span
      className={cn(
        "text-xs flex-1",
        isRecommended ? "text-white" :"",
        !value.included &&
          !isRecommended &&
          "text-foreground/50",
        !value.included && isRecommended && "text-neutral-500",
      )}
    >
      {feature[lang]}
    </span>

    {value.included && value.value && (
      <span
        className={cn(
          "text-xs font-medium shrink-0 ml-auto",
          isRecommended
            ? "text-white/60"
            : "text-neutral-400 dark:text-neutral-400",
        )}
      >
        {value.value[lang]}
      </span>
    )}
  </motion.div>
);

// ─── PlanCard ─────────────────────────────────────────────────────────────────

interface PlanCardProps {
  plan: PlanItem;
  lang: "en" | "ar";
  isRTL: boolean;
  index: number;
  billing: "yearly" | "monthly";
}

export const PlanCard: React.FC<PlanCardProps> = ({
  plan,
  lang,
  isRTL,
  index,
  billing,
}) => {
  const isRec = !!plan.recommended;
  const price =
    billing === "monthly"
      ? plan.price_monthly
      : Math.round(plan.price_yearly / 12);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "rounded-3xl px-10 py-6 border",
        isRec
          ? "bg-primary-foreground shadow-xl text-background"
          : "hover:shadow-md  dark:bg-primary-foreground/20 backdrop-blur-xs ",
      )}
    >
      {/* ── Header ── */}
      <div className="flex flex-col md:flex-row justify-center items-center text-center md:text-start  md:items-end md:justify-between mb-1">
        <div>
          {plan.badge && (
            <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-bold inline-block mb-2">
              {plan.badge[lang]}
            </span>
          )}
          <p className="text-3xl font-bold dark:text-white">{plan.title[lang]}</p>
          <p
            className={cn(
              "text-xs mt-1",
              isRec ? "text-white/60" : "text-foreground/50",
            )}
          >
            {plan.tagline[lang]}
          </p>
        </div>

        <div className="flex flex-col items-end">
          <div className="flex gap-1 items-end">
            <div className="text-2xl md:text-4xl sm:text-5xl font-bold">
              <div className="flex gap-1 items-end dark:text-white">
                {price}
                <Currency className="me-1 size-5 md:size-8" />
              </div>
            </div>
            <div
              className={cn(
                "text-sm",
                isRec ? "text-primary" : "text-foreground/50",
              )}
            >
              /<Translate text="plans.toggle.monthly" />
            </div>
          </div>
          {/* ── Yearly note ── */}
          {billing === "yearly" && (
            <div
              className={cn(
                "text-xs mt-1 flex items-center gap-1",
                isRec ? "text-white/50" : "text-foreground/40",
              )}
            >
              <span className="text-xs mt-1 flex items-center gap-1">
                {plan.price_yearly.toLocaleString()}
                <Currency />
              </span>
              /<Translate text="plans.toggle.yearly" />
            </div>
          )}
        </div>
      </div>

      <Separator
        className={cn("my-6", isRec ? "bg-primary" : "bg-foreground/10")}
      />

      {/* ── Feature Sections ── */}
      <div className={isRTL ? "rtl" : "ltr"}>
        {featureSections.map((section) => (
          <div key={section.id} className="mb-5 last:mb-0">
            <p
              className={cn(
                "text-[11px] font-semibold uppercase tracking-widest mb-3",
                isRec ? "dark:text-white/60" : "text-foreground/50",
              )}
            >
              {section.label[lang]}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 gap-x-4 gap-y-3">
              {section.features.map((feature, fi) => {
                const value = plan.featureValues[feature.id] ?? {
                  included: false,
                };
                return (
                  <FeatureRow
                    key={feature.id}
                    feature={feature}
                    value={value}
                    lang={lang}
                    isRecommended={isRec}
                    featureIndex={fi}
                    cardIndex={index}
                  />
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <Separator
        className={cn("my-6", isRec ? "bg-primary" : "bg-foreground/10")}
      />

      {/* ── Footer ── */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div
          className={cn(
            "text-xs text-foreground/50",
            isRec ? "text-primary" : "",
          )}
        >
          <Translate text="plans.vatDescription"/>
        </div>

        <button
          className={cn(
            "text-black py-3 px-10 rounded-full font-semibold transition-colors cursor-pointer text-xs shrink-0 w-full md:w-fit",
            isRec
              ? "bg-primary text-primary-foreground hover:bg-primary/90"
              : "bg-neutral-200/50 hover:bg-neutral-200 dark:bg-neutral-100 dark:hover:bg-white",
          )}
        >
          {plan.cta[lang]}
        </button>
      </div>
    </motion.div>
  );
};

// ─── Plans (page section) ─────────────────────────────────────────────────────

export default function Plans({ billing }: { billing: "yearly" | "monthly" }) {
  const { lang, isRTL } = useLang();

  return (
    <div className="flex flex-col gap-4">
      {plans.map((plan, index) => (
        <PlanCard
          key={plan.id}
          plan={plan}
          lang={lang}
          isRTL={isRTL}
          index={index}
          billing={billing}
        />
      ))}
    </div>
  );
}
