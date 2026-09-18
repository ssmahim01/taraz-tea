"use client";

import Container from "@/components/ui/Container";
import ProductCard from "@/components/products/ProductCard";
import { products } from "@/lib/data";
import { useGsapContext, gsap, ScrollTrigger } from "@/components/animations/useGsapAnimation";

export default function BestSellingProducts() {
  const sectionRef = useGsapContext<HTMLDivElement>((ctx, el) => {
    gsap.from(el.querySelectorAll(".product-card"), {
      opacity: 0,
      y: 24,
      duration: 0.5,
      stagger: 0.08,
      ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top 80%" },
    });
  }, []);

  return (
    <section id="products" ref={sectionRef} className="bg-brand-light/40 py-12 sm:py-16">
      <Container>
        <h2 className="mb-8 text-center text-2xl font-bold text-brand-dark sm:text-3xl">
          বেস্ট সেলার
        </h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}
