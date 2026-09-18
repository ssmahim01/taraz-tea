"use client";

import { Star } from "lucide-react";
import Container from "@/components/ui/Container";
import { testimonials } from "@/lib/data";
import { useGsapContext, gsap, ScrollTrigger } from "@/components/animations/useGsapAnimation";

export default function Testimonials() {
  const sectionRef = useGsapContext<HTMLDivElement>((ctx, el) => {
    gsap.from(el.querySelectorAll(".testimonial-card"), {
      opacity: 0,
      y: 20,
      duration: 0.5,
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top 85%" },
    });
  }, []);

  return (
    <section ref={sectionRef} className="py-12 sm:py-16">
      <Container>
        <h2 className="mb-8 text-center text-2xl font-bold text-brand-dark sm:text-3xl">
          গ্রাহকদের অভিমত
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="testimonial-card rounded-2xl border border-brand-light bg-white p-5 shadow-sm"
            >
              <div className="mb-3 flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-brand-light font-semibold text-brand">
                  {t.name.charAt(0)}
                </span>
                <div>
                  <p className="text-sm font-semibold text-brand-dark">{t.name}</p>
                  <p className="text-xs text-brand-dark/60">{t.location}</p>
                </div>
              </div>
              <div className="mb-2 flex gap-0.5 text-brand-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < t.rating ? "fill-brand-accent" : "text-brand-light"}
                  />
                ))}
              </div>
              <p className="text-sm leading-relaxed text-brand-dark/80">{t.review}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
