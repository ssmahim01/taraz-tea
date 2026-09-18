"use client";

import { Factory, PackageCheck, Handshake, Truck } from "lucide-react";
import Container from "@/components/ui/Container";
import { features } from "@/lib/data";
import { useGsapContext, gsap, ScrollTrigger } from "@/components/animations/useGsapAnimation";

const iconMap = {
  factory: Factory,
  package: PackageCheck,
  handshake: Handshake,
  truck: Truck,
};

export default function ServiceFeatures() {
  const sectionRef = useGsapContext<HTMLDivElement>((ctx, el) => {
    gsap.from(el.querySelectorAll(".feature-item"), {
      opacity: 0,
      y: 16,
      duration: 0.5,
      stagger: 0.08,
      ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top 85%" },
    });
  }, []);

  return (
    <section ref={sectionRef} className="py-10 sm:py-12">
      <Container className="grid grid-cols-2 gap-6 sm:grid-cols-4">
        {features.map((feature) => {
          const Icon = iconMap[feature.icon];
          return (
            <div key={feature.id} className="feature-item flex flex-col items-center gap-2 text-center">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-brand-light text-brand">
                <Icon size={22} />
              </span>
              <p className="text-sm font-semibold text-brand-dark">{feature.title}</p>
              <p className="text-xs text-brand-dark/60">{feature.subtitle}</p>
            </div>
          );
        })}
      </Container>
    </section>
  );
}
