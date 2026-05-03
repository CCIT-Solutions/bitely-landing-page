"use client";

import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MessageSquare } from "lucide-react";
import { CustomField } from "@/components/form/FormField";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLang } from "@/hooks/useLang";
import SpinnerButton from "@/components/shared/SpinnerButton";
import { PhoneField } from "@/components/form/PhoneField";
import DecorativeParticles from "@/components/animation/DecorativeParticles";
import Container from "@/components/shared/Container";
import Location from "@/components/icons/Location";
import Phone from "@/components/icons/Phone";
import Email from "@/components/icons/Email";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaSnapchat } from "react-icons/fa6";
import { AiOutlineYoutube } from "react-icons/ai";
import Animate from "@/components/animation/Animate";
import { fade, fadeD1 } from "@/lib/animation";
import WaveLines from "@/components/shared/WaveLines";

export const ContactSchema = (t: any) =>
  z.object({
    firstName: z.string().min(2, t("support.validation.firstNameMin")),
    lastName: z.string().min(2, t("support.validation.lastNameMin")),
    phone_number: z
      .number(t("support.validation.phoneNumberValid"))
      .min(9, t("support.validation.phoneNumberMin")),
    email: z
      .string()
      .email(t("support.validation.emailValid"))
      .min(5, t("support.validation.emailMin")),
    message: z.string().min(10, t("support.validation.messageMin")),
  });

type ContactFormType = z.infer<ReturnType<typeof ContactSchema>>;

function ContactPage() {
  const { t } = useLang();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormType>({
    resolver: zodResolver(ContactSchema(t)),
    defaultValues: {
      firstName: "",
      lastName: "",
      phone_number: undefined,
      email: "",
      message: "",
    },
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = form;

  const onSubmit = async (data: ContactFormType) => {
    setIsSubmitting(true);

    await new Promise((res) => setTimeout(res, 1500));
    console.log("Contact Data:", data);

    setIsSubmitting(false);
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-center px-4 pt-24 lg:pt-0 overflow-hidden">
      {/* Animation wrapper */}
      <div className="absolute inset-0 overflow-hidden">
        <WaveLines
          className="absolute -z-10 opacity-60 rotate-45 -inset-s-250 top-200 
                 sm:rotate-30 sm:-inset-s-200 sm:top-150 
                 xl:-rotate-20 xl:-inset-s-100 xl:top-50"
          svgClassName="w-[130%] h-100 xl:w-[130%] xl:h-full"
        />
      </div>
      <Container>
        <div className="grid  lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Contact Info */}
          <div className="space-y-12 relative">
            {/* Header */}
            <Animate variants={fade} className=" ">
              <h1 className="text-[56px] font-bold leading-tight mb-4 ">
                {t("support.title")}
              </h1>
              <p className="text-neutral-500 dark:text-neutral-400 text-lg max-w-md leading-relaxed">
                {t("support.subtitle")}
              </p>
            </Animate>

            {/* Contact Details */}
            <Animate variants={fadeD1} className="space-y-4">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white dark:bg-neutral-800 cursor-pointer flex items-center justify-center shrink-0 shadow-sm">
                  <Location className="w-5 h-5 text-neutral-600 dark:text-white" />
                </div>
                <div className="pt-2">
                  <p className="text-neutral-500 dark:text-white text-lg font-medium">
                    45 st King Fahd, Riyadh SA
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white dark:bg-neutral-800 cursor-pointer flex items-center justify-center shrink-0 shadow-sm">
                  <Phone className="w-5 h-5 text-neutral-600 dark:text-white" />
                </div>
                <div className="pt-2">
                  <p className="text-neutral-500 dark:text-white text-lg font-medium">
                    +966 0123 456 789
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white dark:bg-neutral-800 cursor-pointer flex items-center justify-center shrink-0 shadow-sm">
                  <Email className="w-5 h-5 text-neutral-600 dark:text-white" />
                </div>
                <div className="pt-2">
                  <p className="text-neutral-500 dark:text-white text-lg font-medium">
                    info@company.com
                  </p>
                </div>
              </div>
            </Animate>

            {/* Social Media */}
            <Animate variants={fadeD1} className="flex items-center gap-4 pt-4">
              <button className="w-12 h-12 rounded-full bg-white dark:bg-neutral-800 cursor-pointer flex items-center justify-center hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors shadow-sm">
                <FaInstagram className="w-5 h-5 text-neutral-600 dark:text-white" />
              </button>
              <button className="w-12 h-12 rounded-full bg-white dark:bg-neutral-800 cursor-pointer flex items-center justify-center hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors shadow-sm">
                <FaXTwitter />
              </button>
              <button className="w-12 h-12 rounded-full bg-white dark:bg-neutral-800 cursor-pointer flex items-center justify-center hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors shadow-sm">
                <FaSnapchat />
              </button>
              <button className="w-12 h-12 rounded-full bg-white dark:bg-neutral-800 cursor-pointer flex items-center justify-center hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors shadow-sm">
                <AiOutlineYoutube />
              </button>
            </Animate>
          </div>

          {/* Right Side - Contact Form */}
          <Animate variants={fadeD1} className=" rounded-3xl p-8">
            <FormProvider {...form}>
              <div className="space-y-6 ">
                {/* First Name & Last Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                  <CustomField name="firstName" label={t("support.firstName")}>
                    {(field) => (
                      <Input
                        placeholder={t("support.firstNamePlaceholder")}
                        {...field}
                        className=" bg-background/20! backdrop-blur-xs"
                      />
                    )}
                  </CustomField>

                  <CustomField name="lastName" label={t("support.lastName")}>
                    {(field) => (
                      <Input
                        placeholder={t("support.lastNamePlaceholder")}
                        {...field}
                        className=" bg-background/20! backdrop-blur-xs"
                      />
                    )}
                  </CustomField>
                </div>

                {/* Phone Number & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                  <PhoneField
                    label={t("auth.phone")}
                    name="phone_number"
                    register={register}
                    error={errors.phone_number}
                  />

                  <CustomField name="email" label={t("support.email")}>
                    {(field) => (
                      <Input
                        placeholder={t("support.emailPlaceholder")}
                        {...field}
                        className=" bg-background/20! backdrop-blur-xs"
                      />
                    )}
                  </CustomField>
                </div>

                {/* Message */}
                <CustomField name="message" label={t("support.message")}>
                  {(field) => (
                    <Textarea
                      placeholder={t("support.messagePlaceholder")}
                      {...field}
                      className="min-h-[140px] resize-none rounded-3xl bg-background/20! backdrop-blur-xs"
                    />
                  )}
                </CustomField>

                {/* Submit Button */}
                <div className="flex flex-col items-end">
                  <SpinnerButton
                    onClick={handleSubmit(onSubmit)}
                    disabled={isSubmitting}
                    className=" py-6 px-10 text-sm bg-primary hover:bg-primary/80 rounded-full"
                    isSubmitting={isSubmitting}
                    text="support.sendMessage"
                    isSubmittingText="support.sending"
                  />
                </div>
              </div>
            </FormProvider>
          </Animate>
        </div>
      </Container>
    </div>
  );
}

export default ContactPage;
