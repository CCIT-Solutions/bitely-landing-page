"use client";

import Image from "next/image";
import React from "react";
import Heading from "../shared/Heading";
import Translate from "../shared/Translate";
import { useLang } from "@/hooks/useLang";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

/* ─── Vertical Connector SVGs ───────────────────────────────── */
function ConnectorDown({ toRight = true }) {
  return toRight ? (
    // Arc curves from left-side step down and to the right
    <svg
      viewBox="0 0 80 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: "absolute",
        bottom: -16,
        left: "calc(50% - 40px)",
        width: 80,
        height: 64,
        overflow: "visible",
        pointerEvents: "none",
        zIndex: 10,
      }}
    >
      <path
        d="M 40 0 C 40 32, 80 32, 80 64"
        stroke="#6ef843"
        strokeWidth="1.6"
        strokeDasharray="5 4"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M 72 56 L 80 64 L 87 55"
        stroke="#6ef843"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  ) : (
    // Arc curves from right-side step down and to the left
    <svg
      viewBox="0 0 80 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: "absolute",
        bottom: -16,
        left: "calc(50% - 40px)",
        width: 80,
        height: 64,
        overflow: "visible",
        pointerEvents: "none",
        zIndex: 10,
      }}
    >
      <path
        d="M 40 0 C 40 32, 0 32, 0 64"
        stroke="#6ef843"
        strokeWidth="1.6"
        strokeDasharray="5 4"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M -7 55 L 0 64 L 8 56"
        stroke="#93C5FD"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

/* ─── Steps ──────────────────────────────────────────────────── */
const steps = [
  {
    id: 1,
    label: {
      en: "Create your merchant dashboard",
      ar: "أنشئ لوحة تحكم التاجر",
    },
    description: {
      en: "Sign up on Bitely and access your dedicated dashboard to manage your subscription business from one place.",
      ar: "سجل في Bitely واحصل على لوحة تحكم خاصة لإدارة نظام الاشتراكات من مكان واحد.",
    },
    image: "/media/images/how-it-works/how-merchant-1.jpg",
    side: "left",
  },
  {
    id: 2,
    label: {
      en: "Design your branded subscription page",
      ar: "صمم صفحة اشتراكات بعلامتك التجارية",
    },
    description: {
      en: "Your public page (bitely.com/merchant-id) is automatically generated with your branding, colors, menu, and subscription plans.",
      ar: "يتم إنشاء صفحة خاصة بك (bitely.com/merchant-id) تلقائيًا بتصميمك، ألوانك، قوائمك وخطط الاشتراك الخاصة بك.",
    },
    image: "/media/images/how-it-works/how-merchant-2.jpg",
    side: "right",
  },
  {
    id: 3,
    label: {
      en: "Customers subscribe through your page",
      ar: "العملاء يشتركون عبر صفحتك",
    },
    description: {
      en: "Customers visit your dedicated page, choose their meal plans, and subscribe directly with a seamless checkout experience.",
      ar: "يقوم العملاء بزيارة صفحتك الخاصة، اختيار خطط الوجبات، والاشتراك بسهولة من خلال تجربة دفع سلسة.",
    },
    image: "/media/images/how-it-works/how-merchant-3.jpg",
    side: "left",
  },
  {
    id: 4,
    label: {
      en: "Manage & grow your subscriptions",
      ar: "إدارة وتنمية الاشتراكات",
    },
    description: {
      en: "Control everything from your dashboard, customers, menus, schedules, and analytics, and scale your recurring revenue.",
      ar: "تحكم بكل شيء من لوحة التحكم ، العملاء، القوائم، الجداول، والتحليلات ، ووسّع إيراداتك المتكررة بسهولة.",
    },
    image: "/media/images/how-it-works/how-merchant-4.jpg",
    side: "right",
  },
];

/* ─── Main Component ─────────────────────────────────────────── */
export default function HowItWorks() {
  const { lang, isRTL } = useLang();

  return (
    <section className="w-full pb-16 pt-24 px-6 " id="howItWork">
      {/* Heading */}
      <div className="text-center mb-12">
        <Heading
          i18nKey={"home.howItWorks.title"}
          components={{
            custom: <span className="text-primary" />,
          }}
        />

        <p className="text-foreground/50 text-base max-w-2xl mx-auto leading-relaxed">
          <Translate text="home.howItWorks.subtitle" />
        </p>
      </div>

      {/* Steps — single column on mobile, zigzag on md+ */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="flex-col mx-auto sm:px-6 lg:px-8 max-w-[90vw] lg:w-300 flex items-center justify-between"
      >
        {steps.map((step, index) => {
          const toRight = step.side === "right";
          const connectorSide = isRTL ? toRight : !toRight;
          return (
            <div
              key={step.id}
              className={`relative flex pb-16 last:pb-0 w-full ${
                step.side === "left"
                  ? "justify-start md:justify-start"
                  : "justify-start md:justify-end"
              }`}
            >
              {/* Card — full width on mobile, half width on md+ */}
              <div className="w-full md:w-1/2 flex flex-col">
                {/* Image card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  whileHover={{ scale: 1.02 }}
                  className="w-full aspect-video relative overflow-hidden border border-dashed border-primary rounded-2xl"
                >
                  <Image
                    src={step.image}
                    alt={step.label[lang]}
                    fill
                    className="object-cover object-top-left"
                  />
                </motion.div>

                {/* Label and Description */}
                <div className="mt-4">
                  <p className="text-xs font-bold text-primary tracking-widest mb-1">
                    {String(step.id).padStart(2, "0")}
                  </p>
                  <p className="text-2xl font-bold text-foreground/80 mb-1">
                    {step.label[lang]}
                  </p>
                  <p className="text-sm text-foreground/50 leading-relaxed">
                    {step.description[lang]}
                  </p>
                </div>
              </div>

              {/* Connector arc — only on md+ and not on last step */}
              {index < steps.length - 1 && (
                <div className="hidden md:block">
                  <ConnectorDown toRight={connectorSide} />
                </div>
              )}
            </div>
          );
        })}
      </motion.div>
    </section>
  );
}
