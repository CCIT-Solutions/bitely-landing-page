export interface Plan {
  id: string;
  name: { en: string; ar: string };
  tagline: { en: string; ar: string };
  badge?: { en: string; ar: string };
  price_yearly: number;
  price_monthly: number;
  cta: { en: string; ar: string };
  featured: boolean;
  features: { en: string; ar: string }[];
}

export const plans: Plan[] = [
  {
    id: "starter",
    name: { en: "Starter", ar: "الأساسي" },
    tagline: { en: "Launch your subscription flow", ar: "ابدأ نظام الاشتراكات" },
    price_yearly: 1500,
    price_monthly: 148,
    cta: { en: "Start now", ar: "ابدأ الآن" },
    featured: false,
    features: [
      { en: "Merchant dashboard", ar: "لوحة تحكم التاجر" },
      { en: "Branded public page", ar: "صفحة علامتك التجارية" },
      { en: "Multi-plan & menu builder", ar: "منشئ الخطط والقوائم" },
      { en: "Seamless checkout experience", ar: "تجربة دفع سلسة" },
    ],
  },

  {
    id: "growth",
    name: { en: "Growth", ar: "النمو" },
    tagline: { en: "Manage and optimize operations", ar: "إدارة وتحسين العمليات" },
    badge: { en: "Most chosen", ar: "الأكثر اختياراً" },
    price_yearly: 3450,
    price_monthly: 345,
    cta: { en: "Start growing", ar: "ابدأ التوسع" },
    featured: true,
    features: [
      { en: "Everything in Starter", ar: "كل ما في الأساسي" },
      { en: "Meal schedule management", ar: "إدارة جدول الوجبات" },
      { en: "Customer self-service (pause, skip, swap)", ar: "تحكم العملاء (إيقاف، تخطي، تبديل)" },
      { en: "Smart notifications", ar: "إشعارات ذكية" },
      { en: "Subscription analytics", ar: "تحليلات الاشتراكات" },
      { en: "Basic revenue tracking", ar: "تتبع الإيرادات الأساسي" },
    ],
  },

  {
    id: "scale",
    name: { en: "Scale", ar: "الاحترافي" },
    tagline: { en: "Operate at full capacity", ar: "تشغيل كامل باحترافية" },
    price_yearly: 5000,
    price_monthly: 499,
    cta: { en: "Scale now", ar: "ابدأ الاحتراف" },
    featured: false,
    features: [
      { en: "Everything in Growth", ar: "كل ما في خطة النمو" },
      { en: "Custom branding & themes", ar: "تخصيص الهوية والتصميم" },
      { en: "Advanced analytics insights", ar: "تحليلات متقدمة" },
      { en: "Customer behavior insights", ar: "تحليل سلوك العملاء" },
      { en: "Priority support", ar: "دعم أولوية" },
      { en: "Performance optimization tools", ar: "أدوات تحسين الأداء" },
      { en: "Early access to new features", ar: "وصول مبكر للميزات الجديدة" },
      { en: "Advanced checkout optimization", ar: "تحسين متقدم لعملية الدفع" },
    ],
  },
];