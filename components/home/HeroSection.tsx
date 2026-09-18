"use client";

import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { useGsapContext, gsap } from "@/components/animations/useGsapAnimation";

export default function HeroSection() {
  const sectionRef = useGsapContext<HTMLDivElement>((ctx, el) => {
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
    tl.from(el.querySelectorAll(".hero-eyebrow"), { opacity: 0, y: 16, duration: 0.5 })
      .from(el.querySelectorAll(".hero-title"), { opacity: 0, y: 24, duration: 0.6 }, "-=0.25")
      .from(el.querySelectorAll(".hero-sub"), { opacity: 0, y: 16, duration: 0.5 }, "-=0.3")
      .from(el.querySelectorAll(".hero-cta"), { opacity: 0, y: 16, duration: 0.5, stagger: 0.1 }, "-=0.25")
      .from(el.querySelectorAll(".hero-media"), { opacity: 0, scale: 0.96, duration: 0.7 }, "-=0.5");
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-br from-brand-dark via-brand to-brand-dark text-white"
    >
      <Container className="grid grid-cols-1 items-center gap-8 py-14 md:grid-cols-2 md:py-20">
        <div>
          <p className="hero-eyebrow mb-2 text-sm font-medium text-brand-accent">
            Taraz Tea — খাঁটি চায়ের ঠিকানা
          </p>
          <h1 className="hero-title mb-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            সরাসরি চা বাগান থেকে
            <br />
            মানসম্মত চা
          </h1>
          <p className="hero-sub mb-8 max-w-md text-base text-white/85 sm:text-lg">
            প্রকৃতির স্বাদ, আপনার প্রাঙ্গনে।
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="hero-cta bg-brand-accent text-brand-darker hover:bg-brand-accent/90">
              এখনই কিনুন
            </Button>
            <Button size="lg" variant="outline" className="hero-cta border-white text-white hover:bg-white/10">
              বিস্তারিত জানুন
            </Button>
          </div>
        </div>

        <div className="hero-media relative mx-auto aspect-square w-full max-w-md">
          <div className="absolute inset-0 rounded-full bg-white/10 blur-2xl" />
          <Image
            src="https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=800&auto=format&fit=crop"
            alt="Taraz Tea garden and fresh tea cup"
            fill
            priority
            sizes="(max-width: 768px) 90vw, 500px"
            className="relative rounded-3xl object-cover shadow-2xl"
          />
        </div>
      </Container>
    </section>
  );
}
