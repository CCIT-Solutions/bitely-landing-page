export const heroSlides = [
  {
    id: 1,
    image: "/media/images/hero/merchant-1.jpg",
    title: {
      en: "To Grow Your Subscription Business",
      ar: "لتنمية أعمال الاشتراكات الخاصة بك",
    },
  },
  {
    id: 2,
    image: "/media/images/hero/merchant-2.jpg",
    title: {
      en: "To Simplify Orders & Customer Management",
      ar: "لتبسيط إدارة الطلبات والعملاء",
    },
  },
  {
    id: 3,
    image: "/media/images/hero/merchant-3.jpg",
    title: {
      en: "To Launch Your Own Branded Experience",
      ar: "لإطلاق تجربة طلب بعلامتك التجارية",
    },
  },
];

export const heroSlidesImages = heroSlides.map((slide) => ({
  image: slide.image,
  alt: slide.title.en,
}));
