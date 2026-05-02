"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const items = [
  { en: "Subscription management", ar: "إدارة الاشتراكات" },
  { en: "Customer control", ar: "إدارة العملاء" },
  { en: "Automated ordering", ar: "أتمتة الطلبات" },
  { en: "Flexible meal plans", ar: "خطط وجبات مرنة" },
  { en: "Recurring revenue", ar: "إيرادات متكررة" },
  { en: "Pause & resume subscriptions", ar: "إيقاف واستئناف الاشتراك" },
  { en: "Smart scheduling", ar: "جدولة ذكية" },
  { en: "Multi-restaurant support", ar: "دعم عدة مطاعم" },
  { en: "Branded customer links", ar: "روابط مخصصة للعلامة التجارية" },
  { en: "Order automation", ar: "أتمتة إدارة الطلبات" },
  { en: "Subscription analytics", ar: "تحليلات الاشتراكات" },
  { en: "Revenue insights", ar: "رؤى الإيرادات" },
  { en: "Delivery coordination", ar: "تنسيق التوصيل" },
  { en: "Menu management tools", ar: "أدوات إدارة القوائم" },
  { en: "Customer retention tools", ar: "أدوات الاحتفاظ بالعملاء" },
  { en: "Scalable operations", ar: "عمليات قابلة للتوسع" },
  { en: "Simplified workflows", ar: "تبسيط العمليات" },
  { en: "Subscription checkout flow", ar: "تجربة دفع للاشتراكات" },
  { en: "Multi-plan support", ar: "دعم خطط متعددة" },
  { en: "Restaurant dashboard", ar: "لوحة تحكم للمطاعم" },
  { en: "Centralized management", ar: "إدارة مركزية" },
  { en: "Reduced operational load", ar: "تقليل العبء التشغيلي" },
  { en: "Customer subscription links", ar: "روابط اشتراك مخصصة للعملاء" },
  { en: "Business growth tools", ar: "أدوات نمو الأعمال" },
  { en: "Subscription-first system", ar: "نظام مبني على الاشتراكات" }
];

export default function Ticker({ isRTL }: { isRTL: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    if (!containerRef.current) return;
    const el = containerRef.current;

    setDistance(el.scrollWidth / 2);
  }, []);

  const displayItems = isRTL
    ? [...items].reverse().map((i) => i.ar)
    : items.map((i) => i.en);

  return (
    <div
      className="overflow-hidden w-full border-y py-3 border-primary mt-10 md:mt-70 xl:mt-35"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <motion.div
        className="flex w-max"
        animate={{
          x: isRTL ? distance : -distance,
        }}
        transition={{
          ease: "linear",
          duration: 20,
          repeat: Infinity,
        }}
      >
        {/* FIRST COPY */}
        <div ref={containerRef} className="flex">
          {displayItems.map((text, i) => (
            <div key={`a-${i}`} className="flex items-center shrink-0 px-6">
              <span className="text-sm font-medium text-primary-foreground dark:text-foreground">
                {text}
              </span>
              <span className="text-primary ms-6">✦</span>
            </div>
          ))}
        </div>

        {/* SECOND COPY */}
        <div className="flex">
          {displayItems.map((text, i) => (
            <div key={`b-${i}`} className="flex items-center shrink-0 px-6">
              <span className="text-sm font-medium text-primary-foreground dark:text-foreground">
                {text}
              </span>
              <span className="text-primary ms-6">✦</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}