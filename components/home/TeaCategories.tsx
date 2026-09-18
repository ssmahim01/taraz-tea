"use client";

import Container from "@/components/ui/Container";
import { categories } from "@/lib/data";
import { useGsapContext, gsap, ScrollTrigger } from "@/components/animations/useGsapAnimation";

export default function TeaCategories() {
  const sectionRef = useGsapContext<HTMLDivElement>((ctx, el) => {
    gsap.from(el.querySelectorAll(".category-item"), {
      opacity: 0,
      y: 20,
      duration: 0.5,
      stagger: 0.08,
      ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top 85%" },
    });
  }, []);

  return (
    <section ref={sectionRef} className="py-10 sm:py-12">
      <Container>
        <div className="no-scrollbar flex gap-6 overflow-x-auto sm:justify-center sm:gap-10 sm:overflow-visible">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className="category-item flex shrink-0 flex-col items-center gap-2 text-center transition-transform hover:-translate-y-1"
            >
              <span className="grid h-16 w-16 place-items-center rounded-full bg-brand-light text-2xl shadow-sm sm:h-20 sm:w-20 sm:text-3xl">
                {cat.emoji}
              </span>
              <span className="text-xs font-medium text-brand-dark sm:text-sm">
                {cat.name}
              </span>
            </button>
          ))}
        </div>
      </Container>
    </section>
  );
}
