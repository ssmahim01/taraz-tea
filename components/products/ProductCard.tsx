"use client";

import Image from "next/image";
import { useState } from "react";
import { Heart } from "lucide-react";
import { Product } from "@/lib/data";
import Button from "@/components/ui/Button";

export default function ProductCard({ product }: { product: Product }) {
  const [inWishlist, setInWishlist] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="product-card group relative flex flex-col overflow-hidden rounded-2xl border border-brand-light bg-white p-3 shadow-sm transition-shadow hover:shadow-lg">
      <button
        aria-label="Toggle wishlist"
        onClick={() => setInWishlist((v) => !v)}
        className="absolute right-4 top-4 z-10 grid h-8 w-8 place-items-center rounded-full bg-white/90 shadow"
      >
        <Heart
          size={16}
          className={inWishlist ? "fill-brand-accent text-brand-accent" : "text-brand-dark/60"}
        />
      </button>

      <div className="relative mb-3 aspect-square w-full overflow-hidden rounded-xl bg-brand-light">
        <Image
          src={product.image}
          alt={`${product.name} ${product.weight}`}
          fill
          loading="lazy"
          sizes="(max-width: 640px) 45vw, 220px"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <h3 className="text-sm font-semibold text-brand-dark sm:text-base">
        {product.name} {product.weight}
      </h3>
      <p className="mb-2 line-clamp-1 text-xs text-brand-dark/60 sm:text-sm">
        {product.info}
      </p>
      <p className="mb-3 text-base font-bold text-brand sm:text-lg">
        ৳ {product.price}
      </p>

      <Button size="sm" onClick={handleAddToCart} className="mt-auto w-full">
        {added ? "যোগ হয়েছে ✓" : "Add to Cart"}
      </Button>
    </div>
  );
}
