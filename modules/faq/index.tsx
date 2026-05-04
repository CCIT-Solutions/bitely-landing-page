"use client";
import React, { useState } from "react";
import { faqCategories, FAQCategory } from "@/data/FAQ";
import FAQItem from "@/components/faq/FAQItem";
import { useLang } from "@/hooks/useLang";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Animate from "@/components/animation/Animate";
import { fade } from "@/lib/animation";
import Heading from "@/components/shared/Heading";

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut", delay: index * 0.1 },
  }),
};

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState<string>("general");
  const [openIndex, setOpenIndex] = useState(-1);
  const { t, lang } = useLang();

  const currentCategory = faqCategories.find((c) => c.id === activeCategory)!;
  const faqData = currentCategory.faqs;

  const handleTabChange = (id: string) => {
    setActiveCategory(id);
    setOpenIndex(-1);
  };

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-30 pb-20">
      
      <div className="w-full max-w-3xl">
        {/* Header */}
        <Animate
          variants={fade}
          className="text-center my-16 relative flex flex-col items-center"
        >
          <Heading
            i18nKey={"faq.title"}
            components={{ custom: <span className="text-primary" /> }}
          />
          <p className="text-foreground/50 text-xl mt-4 max-w-md">
            {t("faq.subtitle")}
          </p>
        </Animate>

        {/* Category Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {faqCategories.map((category: FAQCategory) => {
            const isActive = category.id === activeCategory;
            return (
              <button
                key={category.id}
                onClick={() => handleTabChange(category.id)}
                className={`inline-flex items-center gap-1.5 px-4 py-6 rounded-xl text-xs sm:text-sm border transition-colors duration-150 cursor-pointer font-bold
                  ${
                    isActive
                      ? "bg-primary text-primary-foreground border-transparent"
                      : "bg-transparent border-border hover:border-primary/80 text-foreground/90 hover:text-foreground"
                  }`}
              >
                {category.icon}
                {category.label[lang]}
              </button>
            );
          })}
        </div>

        {/* FAQ Items */}
        <div className="space-y-3 mb-14">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="space-y-3"
            >
              {faqData.map((faq, index) => (
                <motion.div key={index} variants={itemVariants} custom={index}>
                  <FAQItem
                    faq={{ question: faq[lang].q, answer: faq[lang].a }}
                    index={index}
                    openIndex={openIndex}
                    toggleFAQ={toggleFAQ}
                  />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Section */}
        <Animate
          variants={fade}
          className="text-center flex flex-col items-center"
        >
          <p className="text-3xl mb-5">{t("faq.stillHaveQuestions")}</p>
          <p className="text-neutral-500 text-sm mb-5 max-w-lg">
            {t("faq.contactDescription")}
          </p>
          <Link
            href="/support"
            className="bg-primary hover:bg-primary/80 cursor-pointer text-primary-foreground font-medium text-sm px-8 py-3.5 rounded-full transition-colors duration-200 shadow-sm"
          >
            {t("faq.contactButton")}
          </Link>
        </Animate>
      </div>
    </div>
  );
}
