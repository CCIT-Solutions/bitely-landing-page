"use client";

import { useEffect, useState } from "react";
import { useLang } from "@/hooks/useLang";
import { notify } from "@/lib/notify";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { z } from "zod";
import { HiOutlineCreditCard } from "react-icons/hi";

// Custom UI components (same from LoginForm)
import { CustomField } from "@/components/form/FormField";
import { Input } from "@/components/ui/input";
import SpinnerButton from "@/components/shared/SpinnerButton";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Apple from "@/components/icons/Apple";
import Animate from "@/components/animation/Animate";
import { fade } from "@/lib/animation";

const CheckoutSchema = (t: any) =>
  z.object({
    paymentMethod: z.enum(["credit", "apple", "stc"]),

    cardNumber: z
      .string()
      .min(19, t("checkout.validation.cardNumberInvalid")) // 16 digits + 3 spaces
      .regex(/^[0-9\s]+$/, t("checkout.validation.cardNumberDigitsOnly")),

    cardHolder: z
      .string()
      .min(3, t("checkout.validation.cardHolderMin"))
      .max(50, t("checkout.validation.cardHolderMax")),

    expDate: z
      .string()
      .regex(
        /^(0[1-9]|1[0-2])\/\d{2}$/,
        t("checkout.validation.expDateInvalid")
      ),

    cvc: z
      .string()
      .min(3, t("checkout.validation.cvcMin"))
      .max(3, t("checkout.validation.cvcMax"))
      .regex(/^\d{3}$/, t("checkout.validation.cvcDigitsOnly")),
  });

type CheckoutFormType = z.infer<ReturnType<typeof CheckoutSchema>>;

declare global {
  interface Window {
    ApplePaySession?: any;
  }

  var ApplePaySession: {
    canMakePayments?: () => boolean;
    new?: (...args: any[]) => any;
  };
}
export default function CheckoutForm() {
  const { t } = useLang();

  const [paymentMethod, setPaymentMethod] = useState<
    "credit" | "apple" | "stc"
  >("credit");
  const [supportsApplePay, setSupportsApplePay] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<ReturnType<typeof CheckoutSchema>>>({
    resolver: zodResolver(CheckoutSchema(t)),
    defaultValues: {
      paymentMethod: "credit",
      cardNumber: "",
      cardHolder: "",
      expDate: "",
      cvc: "",
    },
  });

  useEffect(() => {
    if (window.ApplePaySession?.canMakePayments) {
      setSupportsApplePay(window.ApplePaySession.canMakePayments());
    } else {
      setSupportsApplePay(false);
    }
  }, []);

  const handleApplePayClick = () => {
    if (!supportsApplePay) {
      notify(t("checkout.applePayNotSupported"), { type: "error" });
      return;
    }
    setPaymentMethod("apple");
  };

  const formatCardNumber = (value: string) => {
    const cleaned = value.replace(/\D/g, "");
    return (
      cleaned
        .match(/.{1,4}/g)
        ?.join(" ")
        .substring(0, 19) || cleaned
    );
  };

  const formatExpDate = (value: string) => {
    const cleaned = value.replace(/\D/g, "");
    return cleaned.length >= 2
      ? cleaned.substring(0, 2) + "/" + cleaned.substring(2, 4)
      : cleaned;
  };

  const onSubmit = async (data: CheckoutFormType) => {
    setIsSubmitting(true);

    console.log("Checkout data:", {
      ...data,
      paymentMethod,
    });

    await new Promise((res) => setTimeout(res, 2000));

    setIsSubmitting(false);
    form.reset();
  };

  console.log("paymentMethod", paymentMethod);
  

  return (
    <Animate
      variants={fade}
      className="space-y-6 mx-auto lg:mx-0 max-w-100 lg:w-full order-2 lg:order-1"
    >
      {/* Payment Method */}
      <div>
        <h2 className="text-base font-medium mb-4 text-foreground/40">
          {t("checkout.paymentMethod")}
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
          <button
            onClick={() => setPaymentMethod("credit")}
            className={`flex items-center justify-center gap-2 px-6 py-3 text-xs rounded-full font-medium transition-all cursor-pointer truncate ${
              paymentMethod === "credit"
                ? "bg-primary/90  text-primary-foreground hover:bg-primary border" 
                : "bg-primary-foreground text-primary border shadow-lg"
            }`}
          >
            <HiOutlineCreditCard className="w-4 h-4" />
            {t("checkout.creditCards")}
          </button>

          <button
            onClick={() => setPaymentMethod("stc")}
            className={`min-h-10 min-w-10 px-6 py-3 text-xs rounded-full font-medium transition-all cursor-pointer ${ 
              paymentMethod === "stc"
              ? "bg-primary/90  text-primary-foreground hover:bg-primary border" 
                : "bg-primary-foreground text-primary border shadow-lg"
            }`}
          >
            <div className=" flex justify-center">
              <Image
                src={`/media/icons/stc${
                  paymentMethod === "stc" ? "-light" : "-light"
                }.png`}
                alt="STC Pay"
                width={40}
                height={20}
              />
            </div>
          </button>

          <button
            onClick={handleApplePayClick}
            // disabled={!supportsApplePay}
            className={`flex items-center gap-1 justify-center px-6 py-3 text-xs rounded-full font-medium transition-all cursor-pointer ${
              paymentMethod === "apple"
              ? "bg-primary/90  text-primary-foreground hover:bg-primary border" 
                : supportsApplePay
                ?  "bg-primary/90  text-primary-foreground hover:bg-primary border" 
                : "bg-primary-foreground/10 dark:bg-primary-foreground/50 hover:bg-primary-foreground/20 dark:hover:bg-primary-foreground/60 opacity-50"
            }`}
          >
            <Apple className="w-4 h-4" />
            <span className="font-semibold">Pay</span>
          </button>
        </div>
      </div>

      {/* Form */}
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="bg-primary-white dark:bg-primary-foreground/20 backdrop-blur-xs rounded-2xl p-6 space-y-5 border ">
            <h2 className="text-base font-medium mb-2  text-foreground/40">
              {t("checkout.cardDetails")}
            </h2>

            {/* Card Number */}
            <CustomField name="cardNumber" label={t("checkout.cardNumber")}>
              {(field) => (
                <Input
                  {...field}
                  placeholder="XXXX XXXX XXXX XXXX"
                  maxLength={19}
                  onChange={(e) =>
                    field.onChange(formatCardNumber(e.target.value))
                  }
                />
              )}
            </CustomField>

            {/* Holder */}
            <CustomField name="cardHolder" label={t("checkout.cardholderName")}>
              {(field) => (
                <Input
                  {...field}
                  placeholder={t("checkout.cardholderNamePlace")}
                />
              )}
            </CustomField>

            <div className="grid grid-cols-2 gap-4">
              {/* Expiration */}
              <CustomField name="expDate" label={t("checkout.expirationDate")}>
                {(field) => (
                  <Input
                    {...field}
                    maxLength={5}
                    placeholder="MM/YY"
                    onChange={(e) =>
                      field.onChange(formatExpDate(e.target.value))
                    }
                  />
                )}
              </CustomField>

              {/* CVC */}
              <CustomField name="cvc" label="CVC">
                {(field) => (
                  <Input
                    {...field}
                    maxLength={3}
                    placeholder="XXX"
                    onChange={(e) =>
                      field.onChange(
                        e.target.value.replace(/\D/g, "").substring(0, 3)
                      )
                    }
                  />
                )}
              </CustomField>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-2 mt-4 items-center">
            {/* Terms */}
            <p className="text-xs text-foreground/50 mt-4 max-w-50">
              {t("checkout.acceptTerms")}
            </p>

            <div className="flex justify-end">
              {/* Submit */}
              <SpinnerButton
                type="submit"
                className="w-fit py-6 px-10 mt-2 text-xs"
                isSubmitting={isSubmitting}
                isSubmittingText="checkout.processing"
                text="checkout.confirmPay"
              />
            </div>
          </div>
        </form>
      </FormProvider>
    </Animate>
  );
}
