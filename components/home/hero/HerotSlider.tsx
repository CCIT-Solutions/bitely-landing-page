"use client";

import Animate from "@/components/animation/Animate";
import { heroSlides } from "@/data/heroslider";
import { fadeDu4 } from "@/lib/animation";
import Image from "next/image";

type HeroSliderProps = {
  currentSlide: number;
};

const HeroSlider = ({ currentSlide }: HeroSliderProps) => {
  return (
    <Animate
      variants={fadeDu4}
      className="flex items-center justify-center w-full md:w-200 sm:max-w-130 mx-auto"
    >
        <div
    
    className="relative w-full h-100 overflow-hidden rounded-2xl border border-primary/50">
        {heroSlides.map((item, idx) => (
          <Image
            key={item.id}
            src={item.image}
            alt={item.title.en}
            fill
            priority={idx === 0}
            fetchPriority="high"
            className="object-cover object-right absolute top-0 left-0 transition-opacity duration-1000"
            style={{
              opacity: idx === currentSlide ? 1 : 0,
            }}
          />
        ))}
      </div>
    </Animate>
  );
};

export default HeroSlider;