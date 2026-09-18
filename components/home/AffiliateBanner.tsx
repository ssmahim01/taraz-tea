"use client";

import { Leaf } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { useGsapContext, gsap, ScrollTrigger } from "@/components/animations/useGsapAnimation";

export default function AffiliateBanner() {
  const sectionRef = useGsapContext<HTMLDivElement>((ctx, el) => {
    gsap.from(el.querySelectorAll(".affiliate-content"), {
      opacity: 0,
      y: 16,
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top 85%" },
    });
  }, []);

  return (
    <section className="px-4 py-6 sm:px-6 lg:px-8">
      <div
        ref={sectionRef}
        className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 overflow-hidden rounded-2xl bg-gradient-to-r from-brand-dark to-brand px-6 py-8 text-white sm:flex-row sm:px-10"
      >
        <Leaf size={140} className="pointer-events-none absolute -left-6 -top-6 rotate-45 text-white/10" />
        <div className="affiliate-content relative text-center sm:text-left">
          <p className="text-sm text-brand-accent">বিক্রয় করে আয় করুন</p>
          <h3 className="text-xl font-bold sm:text-2xl">Taraz Tea Affiliate Program</h3>
        </div>
        <Button
          size="md"
          className="affiliate-content relative shrink-0 bg-brand-accent text-brand-darker hover:bg-brand-accent/90"
        >
          Open Now
        </Button>
      </div>
    </section>
  );
}
