"use client";
import { MdSpaceDashboard } from "react-icons/md";
import { CiGlobe } from "react-icons/ci";
import { MdOutlinePalette } from "react-icons/md";
import { RiBarChartGroupedFill } from "react-icons/ri";
import { LuBell } from "react-icons/lu";
import { FiLayers } from "react-icons/fi";
import { LuZap } from "react-icons/lu";
import Heading from "../shared/Heading";
import Translate from "../shared/Translate";
import { useLang } from "@/hooks/useLang";
import { useInView } from "react-intersection-observer";
import WaveLines from "../animation/WaveLines";
import Calendar from "../icons/Calendar";
import { memo } from "react";

interface Feature {
  id: number;
  icon: React.ReactNode;
  title: { en: string; ar: string };
  description: { en: string; ar: string };
}

const features: Feature[] = [
  {
    id: 1,
    icon: (
      <MdSpaceDashboard className="w-5 h-5 text-primary-forground group-hover:text-background transition-colors" />
    ),
    title: { en: "Merchant Dashboard", ar: "لوحة تحكم التاجر" },
    description: {
      en: "Manage your entire subscription business from one powerful hub, customers, plans, menus, and revenue, all in one place.",
      ar: "أدر كامل عمليات اشتراكاتك من مكان واحد ، العملاء، الخطط، القوائم، والإيرادات.",
    },
  },
  {
    id: 2,
    icon: (
      <CiGlobe className="w-5 h-5 text-primary-forground group-hover:text-background transition-colors" />
    ),
    title: { en: "Branded Public Page", ar: "صفحة علامتك التجارية" },
    description: {
      en: "Your unique page at bitely.com/merchant-id is auto-generated with your branding, colors, and menus, no code needed.",
      ar: "صفحتك على bitely.com/merchant-id تُنشأ تلقائيًا بتصميمك وألوانك وقوائمك دون الحاجة لأي كود.",
    },
  },
  {
    id: 3,
    icon: (
      <Calendar className="w-5 h-5 text-primary-forground group-hover:text-background transition-colors" />
    ),
    title: { en: "Meal Schedule Management", ar: "إدارة جدول الوجبات" },
    description: {
      en: "Customers can manage their delivery days and meal schedules with full flexibility, pause, swap, or skip, anytime.",
      ar: "يتحكم العملاء في أيام التوصيل وجدول وجباتهم بمرونة تامة ، إيقاف، تبديل، أو تخطي في أي وقت.",
    },
  },
  {
    id: 4,
    icon: (
      <MdOutlinePalette className="w-5 h-5 text-primary-forground group-hover:text-background transition-colors" />
    ),
    title: { en: "Custom Branding & Themes", ar: "تخصيص الهوية البصرية" },
    description: {
      en: "Set your brand colors, logo, and design preferences from the dashboard, your page reflects your identity instantly.",
      ar: "حدّد ألوانك وشعارك وتفضيلات تصميمك من لوحة التحكم ، تنعكس هويتك على صفحتك فورًا.",
    },
  },
  {
    id: 5,
    icon: (
      <RiBarChartGroupedFill className="w-5 h-5 text-primary-forground group-hover:text-background transition-colors" />
    ),
    title: { en: "Subscription Analytics", ar: "تحليلات الاشتراكات" },
    description: {
      en: "Track active subscribers, churn, revenue trends, and meal preferences, data-driven insights to grow your business.",
      ar: "تابع المشتركين النشطين، معدل الإلغاء، الإيرادات، وتفضيلات الوجبات ، رؤى تساعدك على النمو.",
    },
  },
  {
    id: 6,
    icon: (
      <LuBell className="w-5 h-5 text-primary-forground group-hover:text-background transition-colors" />
    ),
    title: { en: "Smart Notifications", ar: "إشعارات ذكية" },
    description: {
      en: "Automated alerts keep both merchants and customers informed, renewals, changes, and updates happen without friction.",
      ar: "تنبيهات تلقائية تبقي التجار والعملاء على اطلاع دائم ، تجديدات، تعديلات، وتحديثات بلا عناء.",
    },
  },
  {
    id: 7,
    icon: (
      <FiLayers className="w-5 h-5 text-primary-forground group-hover:text-background transition-colors" />
    ),
    title: {
      en: "Multi-Plan & Menu Builder",
      ar: "منشئ الخطط والقوائم المتعددة",
    },
    description: {
      en: "Create flexible subscription plans and structured menus that suit every customer segment, from lite to premium.",
      ar: "أنشئ خطط اشتراك مرنة وقوائم منظمة تناسب كل شريحة عملاء ، من الخفيف إلى المميز.",
    },
  },
  {
    id: 8,
    icon: (
      <LuZap className="w-5 h-5 text-primary-forground group-hover:text-background transition-colors" />
    ),
    title: { en: "Seamless Checkout Experience", ar: "تجربة دفع سلسة" },
    description: {
      en: "A frictionless, modern checkout flow designed to convert visitors into long-term subscribers, inspired by the best.",
      ar: "تجربة دفع عصرية وسلسة مصممة لتحويل الزوار إلى مشتركين دائمين ، مستوحاة من أفضل التجارب.",
    },
  },
];

function FeatureCard({ feature }: { feature: Feature }) {
  const { lang } = useLang();
  return (
    <div className="group relative rounded-2xl overflow-hidden cursor-default transition-all duration-300 border border-foreground/10 bg-background/5 backdrop-blur-xs hover:bg-primary-foreground hover:dark:bg-primary hover:border-primary ">
      <div className="relative p-6">
        <div className="flex justify-between w-full">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl mb-5 border border-foreground/5 transition-all duration-300 group-hover:border-background/50">
            {feature.icon}
          </div>

          {/* Number */}
          <span className=" font-mono tracking-wide text-primary text-lg group-hover:text-background  transition-colors">
            {String(feature.id).padStart(2, "0")}
          </span>
        </div>

        {/* Title */}
        <p className="text-[14.5px] font-semibold mb-2.5 leading-snug tracking-tight text-foreground  group-hover:text-background transition-colors">
          {feature.title[lang]}
        </p>

        {/* Description */}
        <p className="text-[13px] leading-relaxed text-foreground/50  group-hover:text-background/80 transition-colors">
          {feature.description[lang]}
        </p>
      </div>
    </div>
  );
}

export function FeaturesSection() {
  const { ref, inView } = useInView({ triggerOnce: true, rootMargin: "200px" });

  return (
    <section
      ref={ref}
      className="relative min-h-screen py-24 font-sans overflow-hidden xl:overflow-visible"
      id="features"
    >
      <WaveLines
        className="absolute inset-0 -z-10 opacity-60 rotate-45 -inset-s-200 top-200 sm:rotate-45 sm:-inset-s-200 sm:top-100 md:-rotate-40 md:-inset-s-200 md:top-240 lg:-rotate-30 lg:-inset-s-200 lg:top-150 xl:-rotate-20 xl:-inset-s-100 xl:top-50"
        svgClassName="
        w-[130%] h-100
        xl:w-[130%] xl:h-full
        "
      />

      <div className=" z-10 max-w-6xl mx-auto px-4">
        {/* ── Header ── */}
        <div className="mb-16">
          {/* Heading */}
          <Heading
            i18nKey={"home.features.title"}
            components={{ custom: <span className="text-primary" /> }}
          />

          {/* Subtext */}
          <p className="text-foreground/50 text-lg font-normal max-w-lg text-center mx-auto">
            <Translate text="home.features.description" />
          </p>
        </div>

        {/* <h1 className="absolute bottom-80 inset-s-0 w-full text-center text-[8rem] md:text-[15rem] font-bold text-primary leading-2.5 ">
          Features
        </h1> */}

        {/* ── Features Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(FeaturesSection);
