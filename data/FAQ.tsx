import {
  HiOutlineQuestionMarkCircle,
  HiOutlineRefresh,
  HiOutlineDocumentText,
  HiOutlineViewGrid,
  HiOutlineCreditCard,
  HiBell,
} from "react-icons/hi";

export type FAQItem = {
  en: { q: string; a: string };
  ar: { q: string; a: string };
};

export type FAQCategory = {
  id: string;
  icon: React.ReactNode;
  label: { en: string; ar: string };
  faqs: FAQItem[];
};

export const faqCategories: FAQCategory[] = [
  {
    id: "general",
    icon: <HiOutlineQuestionMarkCircle className="size-3 sm:size-6" />,
    label: { en: "General", ar: "عام" },
    faqs: [
      {
        en: {
          q: "What is Bitely?",
          a: "Bitely is a subscription-based meal delivery platform that connects food businesses with their customers. Merchants manage plans, menus, and subscribers from a single dashboard, while customers enjoy flexible, fresh meal deliveries on a schedule they control.",
        },
        ar: {
          q: "ما هو Bitely؟",
          a: "Bitely منصة توصيل وجبات بالاشتراك تربط الشركات الغذائية بعملائها. يدير التجار الخطط والقوائم والمشتركين من لوحة تحكم واحدة، بينما يستمتع العملاء بوجبات طازجة وجداول مرنة.",
        },
      },
      {
        en: {
          q: "How fresh is the food?",
          a: "Every meal is prepared fresh in our partner kitchens and delivered the same morning between 6–9 am. Nothing is frozen or pre-stored — every dish arrives ready to eat warm or cold.",
        },
        ar: {
          q: "ما مدى طزاجة الطعام؟",
          a: "تُحضَّر كل وجبة طازجة في مطابخ شركائنا وتُوصَّل في نفس الصباح بين الساعة 6–9. لا يوجد تجميد أو تخزين مسبق — كل طبق يصل جاهزًا للأكل.",
        },
      },
      {
        en: {
          q: "Where do you deliver?",
          a: "We currently deliver across 14 cities in the GCC and Europe, with more cities coming soon. Enter your ZIP code at checkout to confirm availability in your area.",
        },
        ar: {
          q: "إلى أين تقومون بالتوصيل؟",
          a: "نوصل حاليًا إلى 14 مدينة في الخليج وأوروبا مع التوسع قريبًا. أدخل الرمز البريدي عند الدفع لتأكيد توفر الخدمة في منطقتك.",
        },
      },
      {
        en: {
          q: "How do I get started?",
          a: "Simply visit your merchant's branded page at bitely.com/merchant-id, choose a subscription plan that fits your needs, complete checkout, and your deliveries begin on the next available schedule.",
        },
        ar: {
          q: "كيف أبدأ؟",
          a: "زر صفحة التاجر على bitely.com/merchant-id، اختر خطة اشتراك تناسبك، أكمل عملية الدفع، وستبدأ توصيلاتك في الجدول المتاح التالي.",
        },
      },
    ],
  },
  {
    id: "subscriptions",
    icon: <HiOutlineRefresh className="size-3 sm:size-6" />,
    label: { en: "Subscriptions", ar: "الاشتراكات" },
    faqs: [
      {
        en: {
          q: "Can I pause, skip, or cancel my subscription?",
          a: "Yes, full flexibility is yours. You can pause, skip individual days, or cancel your subscription anytime directly from the app — no forms, no contracts, no hidden conditions.",
        },
        ar: {
          q: "هل يمكنني الإيقاف أو التخطي أو الإلغاء؟",
          a: "نعم، الخيار بيدك. يمكنك الإيقاف أو تخطي أيام بعينها أو إلغاء اشتراكك في أي وقت من التطبيق — بلا نماذج أو عقود أو شروط مخفية.",
        },
      },
      {
        en: {
          q: "Can I swap my meal for a different one?",
          a: "Yes. You can swap any scheduled meal from your delivery calendar before the daily cutoff time. Your updated selection reflects automatically in the kitchen prep schedule.",
        },
        ar: {
          q: "هل يمكنني تبديل وجبتي؟",
          a: "نعم. يمكنك تبديل أي وجبة مجدولة من تقويم التوصيل قبل وقت الإغلاق اليومي. يتحدث اختيارك تلقائيًا في جدول تحضير المطبخ.",
        },
      },
      {
        en: {
          q: "What subscription plans are available?",
          a: "Plans vary by merchant. Most offer lite, standard, and premium tiers with different meal counts, delivery frequencies, and price points — from 3-day light plans to 7-day full programs.",
        },
        ar: {
          q: "ما خطط الاشتراك المتاحة؟",
          a: "تختلف الخطط حسب التاجر. تقدم معظمهم مستويات خفيفة وقياسية ومميزة بعدد وجبات مختلف وتردد توصيل وأسعار متفاوتة — من خطط 3 أيام خفيفة إلى برامج 7 أيام كاملة.",
        },
      },
      {
        en: {
          q: "Will I be notified before my subscription renews?",
          a: "Yes. Smart notifications alert you ahead of every renewal so you can make changes, skip, or cancel before the next billing cycle starts.",
        },
        ar: {
          q: "هل سأُنبَّه قبل تجديد اشتراكي؟",
          a: "نعم. تُنبهك الإشعارات الذكية قبل كل تجديد حتى تتمكن من التعديل أو التخطي أو الإلغاء قبل بدء دورة الفوترة التالية.",
        },
      },
    ],
  },
  {
    id: "menus",
    icon: <HiOutlineDocumentText className="size-3 sm:size-6" />,
    label: { en: "Menus & Meals", ar: "القوائم والوجبات" },
    faqs: [
      {
        en: {
          q: "How often does the menu change?",
          a: "Menus are updated weekly by each merchant. You'll see new options every week in your schedule, keeping meals varied and aligned with seasonal ingredients.",
        },
        ar: {
          q: "كم مرة تتغير القائمة؟",
          a: "يحدّث كل تاجر قائمته أسبوعيًا. ستجد خيارات جديدة كل أسبوع في جدولك، مما يجعل الوجبات متنوعة ومتوافقة مع المكونات الموسمية.",
        },
      },
      {
        en: {
          q: "What if I have allergies or dietary restrictions?",
          a: "We filter for 14 common allergens and 30+ dietary preferences. Set your profile once and the menu automatically adjusts every week to show only what suits your needs.",
        },
        ar: {
          q: "ماذا لو كان لدي حساسية أو قيود غذائية؟",
          a: "نُصفّي 14 نوعًا من مسببات الحساسية وأكثر من 30 تفضيلًا غذائيًا. حدّد ملفك الشخصي مرة واحدة وستتعدّل القائمة تلقائيًا كل أسبوع.",
        },
      },
      {
        en: {
          q: "Can I see nutritional information for each meal?",
          a: "Yes. Each meal card shows a full nutritional breakdown including calories, protein, carbs, and fat. You can also log meals in one tap and sync data with Apple Health or Google Fit.",
        },
        ar: {
          q: "هل يمكنني رؤية المعلومات الغذائية لكل وجبة؟",
          a: "نعم. تعرض كل بطاقة وجبة تفاصيل غذائية كاملة تشمل السعرات والبروتين والكربوهيدرات والدهون. يمكنك أيضًا تسجيل الوجبات بنقرة ومزامنة البيانات مع Apple Health أو Google Fit.",
        },
      },
      {
        en: {
          q: "Do merchants control which meals are available?",
          a: "Yes. Merchants build and manage their menus entirely from the dashboard — creating meal items, organizing them into plans, and scheduling which options appear each week.",
        },
        ar: {
          q: "هل يتحكم التجار في الوجبات المتاحة؟",
          a: "نعم. يبني التجار قوائمهم ويديرونها بالكامل من لوحة التحكم — إنشاء الوجبات وتنظيمها ضمن الخطط وجدولة الخيارات التي تظهر كل أسبوع.",
        },
      },
    ],
  },
  {
    id: "dashboard",
    icon: <HiOutlineViewGrid className="size-3 sm:size-6" />,
    label: { en: "Dashboard", ar: "لوحة التحكم" },
    faqs: [
      {
        en: {
          q: "What can I manage from the merchant dashboard?",
          a: "Everything. Your dashboard is a central hub for managing customers, subscription plans, menus, delivery schedules, branding, and analytics — all from one place with no extra tools needed.",
        },
        ar: {
          q: "ماذا يمكنني إدارته من لوحة التحكم؟",
          a: "كل شيء. لوحة التحكم مركز واحد لإدارة العملاء وخطط الاشتراك والقوائم وجداول التوصيل والعلامة التجارية والتحليلات.",
        },
      },
      {
        en: {
          q: "Can I see analytics for my subscriptions?",
          a: "Yes. The analytics panel shows active subscribers, churn rate, revenue trends, meal preferences, and delivery patterns — giving you data-driven insights to optimize your plans and grow your business.",
        },
        ar: {
          q: "هل يمكنني الاطلاع على تحليلات اشتراكاتي؟",
          a: "نعم. تعرض لوحة التحليلات المشتركين النشطين ومعدل الإلغاء واتجاهات الإيرادات وتفضيلات الوجبات وأنماط التوصيل.",
        },
      },
      {
        en: {
          q: "How do I customize my branded public page?",
          a: "From the dashboard, set your brand colors, upload your logo, and configure design preferences. Your public page at bitely.com/merchant-id updates instantly — no code required.",
        },
        ar: {
          q: "كيف أخصّص صفحتي العامة؟",
          a: "من لوحة التحكم، حدّد ألوانك وارفع شعارك وخصّص تفضيلات التصميم. تتحدث صفحتك على bitely.com/merchant-id فورًا دون الحاجة لأي كود.",
        },
      },
      {
        en: {
          q: "Can I create multiple subscription plans?",
          a: "Yes. The multi-plan builder lets you create as many plans as you need, each with its own pricing, meal count, delivery frequency, and menu — from a lite 3-day plan to a full premium program.",
        },
        ar: {
          q: "هل يمكنني إنشاء خطط اشتراك متعددة؟",
          a: "نعم. يتيح منشئ الخطط المتعددة إنشاء أي عدد من الخطط، لكل منها تسعيرها وعدد الوجبات وتردد التوصيل والقائمة.",
        },
      },
    ],
  },
  {
    id: "billing",
    icon: <HiOutlineCreditCard className="size-3 sm:size-6" />,
    label: { en: "Billing & Payments", ar: "الفوترة والمدفوعات" },
    faqs: [
      {
        en: {
          q: "When am I charged for my subscription?",
          a: "You're charged at the start of each billing cycle, before deliveries begin. You'll always receive a notification before any charge is processed.",
        },
        ar: {
          q: "متى أُحاسَب على اشتراكي؟",
          a: "تُحاسَب في بداية كل دورة فوترة قبل بدء التوصيلات. ستتلقى دائمًا إشعارًا قبل معالجة أي رسوم.",
        },
      },
      {
        en: {
          q: "What payment methods are accepted?",
          a: "We support major credit and debit cards, Apple Pay, and Google Pay. Available methods may vary slightly depending on your region and the merchant's settings.",
        },
        ar: {
          q: "ما طرق الدفع المقبولة؟",
          a: "ندعم بطاقات الائتمان والخصم الرئيسية وApple Pay وGoogle Pay. قد تختلف الطرق المتاحة قليلًا حسب منطقتك وإعدادات التاجر.",
        },
      },
      {
        en: {
          q: "Can I get a refund if I cancel?",
          a: "Refund policies are set by each merchant. Cancellations made before the next billing cycle will stop future charges. For meal-specific refunds, contact your merchant directly from the app.",
        },
        ar: {
          q: "هل يمكنني الحصول على استرداد عند الإلغاء؟",
          a: "تحدد سياسات الاسترداد من قِبل كل تاجر. الإلغاء قبل دورة الفوترة التالية يوقف الرسوم المستقبلية. للاسترداد الخاص بوجبة، تواصل مع تاجرك من التطبيق.",
        },
      },
      {
        en: {
          q: "Is there a setup or cancellation fee?",
          a: "No. There are no setup fees, cancellation fees, or hidden charges. You only pay for the plan you choose, and you can cancel anytime without penalty.",
        },
        ar: {
          q: "هل هناك رسوم إعداد أو إلغاء؟",
          a: "لا. لا توجد رسوم إعداد أو إلغاء أو تكاليف مخفية. تدفع فقط مقابل الخطة التي تختارها ويمكنك الإلغاء في أي وقت.",
        },
      },
    ],
  },
  {
    id: "notifications",
    icon: <HiBell className="size-3 sm:size-6" />,
    label: { en: "Notifications", ar: "الإشعارات" },
    faqs: [
      {
        en: {
          q: "What kinds of notifications will I receive?",
          a: "You'll receive alerts for upcoming renewals, deliveries, menu updates, and subscription changes. Merchants get their own operational alerts for new subscribers, plan changes, and revenue milestones.",
        },
        ar: {
          q: "ما أنواع الإشعارات التي سأتلقاها؟",
          a: "ستتلقى تنبيهات للتجديدات والتوصيلات وتحديثات القائمة وتغييرات الاشتراك. يتلقى التجار تنبيهاتهم الخاصة للمشتركين الجدد وتغييرات الخطط وأهداف الإيرادات.",
        },
      },
      {
        en: {
          q: "Can I turn off notifications?",
          a: "Yes. Manage notification preferences from your account settings — choose which alerts to receive and through which channel: in-app, email, or push notification.",
        },
        ar: {
          q: "هل يمكنني إيقاف الإشعارات؟",
          a: "نعم. أدر تفضيلات الإشعارات من إعدادات حسابك — اختر التنبيهات التي تريدها والقناة التي تفضلها: داخل التطبيق أو البريد الإلكتروني أو الإشعارات الفورية.",
        },
      },
    ],
  },
];