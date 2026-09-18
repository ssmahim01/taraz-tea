
"use client";

import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import {
  useGsapContext,
  gsap,
} from "@/components/animations/useGsapAnimation";

export default function HeroSection() {
  const sectionRef = useGsapContext<HTMLDivElement>((ctx, el) => {
    const timeline = gsap.timeline({
      defaults: {
        ease: "power2.out",
      },
    });

    const title = el.querySelector(".hero-title");
    const subtitle = el.querySelector(".hero-sub");
    const buttons = el.querySelectorAll(".hero-cta");
    const visual = el.querySelector(".hero-visual");

    if (title) {
      timeline.from(title, {
        opacity: 0,
        y: 24,
        duration: 0.6,
      });
    }

    if (subtitle) {
      timeline.from(
        subtitle,
        {
          opacity: 0,
          y: 16,
          duration: 0.45,
        },
        "-=0.3"
      );
    }

    if (buttons.length) {
      timeline.from(
        buttons,
        {
          opacity: 0,
          y: 14,
          duration: 0.4,
          stagger: 0.08,
        },
        "-=0.2"
      );
    }

    if (visual) {
      timeline.from(
        visual,
        {
          opacity: 0,
          scale: 1.03,
          duration: 0.8,
        },
        "-=0.6"
      );
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden bg-brand-darker"
    >
      {/* Hero Background Image */}
      <Image
        src="/images/tea-hero-banner.png"
        alt="Premium tea garden with fresh tea leaves and tea cup"
        fill
        priority
        quality={90}
        sizes="100vw"
        className="absolute inset-0 -z-20 object-cover object-center"
      />

      {/* Dark Green Overlay — Stronger on the Left */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-darker/95 via-brand-dark/75 to-brand-dark/20" />

      {/* Additional Mobile Overlay */}
      <div className="absolute inset-0 -z-10 bg-brand-darker/20 sm:hidden" />

      <Container className="relative">
        <div className="grid min-h-[390px] items-center py-12 sm:min-h-[440px] sm:py-14 md:min-h-[490px] lg:min-h-[510px] lg:grid-cols-[1fr_0.8fr]">
          {/* Hero Content */}
          <div className="relative z-10 max-w-[620px] text-white">
            <h1 className="hero-title text-[2rem] font-extrabold leading-[1.2] tracking-tight sm:text-4xl md:text-[2.75rem] lg:text-5xl">
              সরাসরি চা বাগান থেকে
              <br />
              <span className="text-brand-accent">
                মানসম্মত চা
              </span>
            </h1>

            <p className="hero-sub mt-4 max-w-md text-sm leading-7 text-white/90 sm:text-base md:text-lg">
              প্রকৃতির স্বাদ, আপনার প্রতিদিনের প্রশান্তি
            </p>

            {/* CTA Buttons */}
            <div className="mt-6 flex flex-wrap gap-3 sm:mt-8 sm:gap-4">
              <Button
                size="md"
                className="hero-cta rounded-lg bg-brand text-white shadow-lg transition-colors hover:bg-brand-dark"
              >
                এখনই কিনুন
                <span aria-hidden="true" className="ml-2">
                  →
                </span>
              </Button>

              <Button
                size="md"
                variant="outline"
                className="hero-cta rounded-lg border-white/80 bg-white text-brand-darker shadow-lg transition-colors hover:bg-brand-accent hover:text-brand-darker"
              >
                কালেকশন দেখুন
                <span aria-hidden="true" className="ml-2">
                  →
                </span>
              </Button>
            </div>
          </div>

          {/* Visual Space for Tea Cup / Leaves in Background */}
          <div
            aria-hidden="true"
            className="hero-visual pointer-events-none absolute inset-y-0 right-0 hidden w-[58%] lg:block"
          />
        </div>
      </Container>

      {/* Subtle Bottom Gradient for Seamless Section Transition */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-brand-darker/20 to-transparent" />
    </section>
  );
}