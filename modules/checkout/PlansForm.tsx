"use client";

import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ChevronDown, ArrowRight } from "lucide-react";
import { CustomField } from "@/components/form/FormField";
import Email from "@/components/icons/Email";
import { Input } from "@/components/ui/input";
import { useLang } from "@/hooks/useLang";
import { PhoneField } from "@/components/form/PhoneField";
import SpinnerButton from "@/components/shared/SpinnerButton";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/custom/select";
import { cn } from "@/lib/utils";
import { fadeD1 } from "@/lib/animation";
import Animate from "@/components/animation/Animate";
import Currency from "@/components/icons/Currency";
import { useRouter } from "next/navigation";
import { Controller } from "react-hook-form";

export const PlansSchema = (t: any) =>
  z.object({
    email: z
      .string()
      .email(t("auth.validation.emailValid"))
      .min(5, t("auth.validation.emailMin")),
    phone_number: z
      .string(t("auth.validation.phoneNumberValid"))
      .min(9, t("auth.validation.phoneNumberMin")),
    country: z.string().min(1, "Please select a country"),
    promo_code: z.string().optional(),
  });

type PlansFormType = z.infer<ReturnType<typeof PlansSchema>>;

function PlansForm() {
  const { t, isRTL } = useLang();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [promoApplied, setPromoApplied] = useState(false);
  const router = useRouter();

  const form = useForm<PlansFormType>({
    resolver: zodResolver(PlansSchema(t)),
    defaultValues: {
      email: "",
      phone_number: undefined,
      country: "",
      promo_code: "",
    },
  });

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
    watch,
  } = form;

  const promoCode = watch("promo_code");

  const handlePromoApply = () => {
    if (promoCode && promoCode.trim() !== "") {
      setPromoApplied(true);
    }
  };

  const onSubmit = async (data: PlansFormType) => {
    setIsSubmitting(true);
    await new Promise((res) => setTimeout(res, 1500));
    console.log("Plans Data:", data);
    router.push("/checkout");
    setIsSubmitting(false);
  };

  const basePrice = 250;
  const vat = basePrice * 0.14;
  const discount = 50;
  const total = basePrice + vat - discount;

  return (
    <Animate
      variants={fadeD1}
      className="lg:sticky lg:top-24 h-fit mx-auto lg:mx-0 max-w-100 lg:w-full order-1 lg:order-2"
    >
      <div className="dark:bg-primary-foreground/20 backdrop-blur-xs rounded-3xl p-6 border">
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

        <FormProvider {...form}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <CustomField
              name="email"
              label={t("auth.email")}
              icon={<Email className="size-5" />}
            >
              {(field) => (
                <Input placeholder={t("auth.emailPlaceholder")} {...field} />
              )}
            </CustomField>

            <PhoneField
              label={t("auth.phone")}
              name="phone_number"
              register={register}
              error={errors.phone_number}
            />
            <Controller
              name="country"
              control={form.control}
              render={({ field }) => (
                <Select
                  onValueChange={field.onChange}
                  value={field.value}
                  dir={isRTL ? "rtl" : "ltr"}
                >
                  <SelectTrigger
                    className={`w-full px-4 py-6 border ${
                      errors.country
                        ? "border-red-500"
                        : "border-neutral-200 dark:border-neutral-600"
                    }`}
                  >
                    <SelectValue placeholder={t("plans.selectCountry")} />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectItem value="SA">{t("plans.saudi")}</SelectItem>
                    <SelectItem value="AE">{t("plans.uae")}</SelectItem>
                    <SelectItem value="KW">{t("plans.kuwait")}</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
            {errors.country && (
  <p className="text-red-500 text-sm mt-1">
    {errors.country.message}
  </p>
)}
            <Separator className="my-6 dark:bg-primary/10" />

            <div className="mb-5">
              <label className="block text-sm font-medium mb-2">
                {t("plans.promoCode")}
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder={t("plans.promoPlaceholder")}
                  {...register("promo_code")}
                  className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 bg-transparent px-3 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm  focus-visible:border-primary focus-visible:ring-primary/0 focus-visible:ring-[3px] py-6 rounded-full aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive
                  border-2   focus:outline-none focus:border-custom-green  pe-12"
                />
                <button
                  type="button"
                  onClick={handlePromoApply}
                  className="absolute end-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-custom-green rounded-full flex items-center justify-center hover:bg-cyan-500 transition-colors disabled:opacity-50"
                  disabled={!promoCode || promoCode.trim() === ""}
                  aria-label="Enter"
                >
                  <ArrowRight
                    className={cn(
                      "w-4 h-4 text-white",
                      isRTL ? "rotate-180" : "",
                    )}
                  />
                </button>
              </div>
            </div>

            <div className="space-y-2 mb-6 pb-4 border bg-background/50 px-4 py-4 rounded-2xl">
              <div className="flex justify-between text-sm">
                <span className="text-foreground/50">
                  {t("plans.yachtPremium")}
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

            <SpinnerButton
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary text-primary-foreground py-7 rounded-full font-semibold hover:bg-primary/80 transition-all shadow-lg"
              isSubmitting={isSubmitting}
              text={t("plans.checkout")}
              isSubmittingText={t("plans.processing")}
            />
          </form>
        </FormProvider>
      </div>
    </Animate>
  );
}

export default PlansForm;
