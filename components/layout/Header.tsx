"use client";

import { useState } from "react";
import { Search, User, Heart, ShoppingCart, Menu, X, Leaf } from "lucide-react";
import Container from "@/components/ui/Container";
import { useGsapContext, gsap } from "@/components/animations/useGsapAnimation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const cartCount = 2;

  const headerRef = useGsapContext<HTMLElement>((ctx, el) => {
    gsap.from(el, {
      y: -16,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
    });
  }, []);

  return (
    <header ref={headerRef} className="sticky top-0 z-50 w-full border-b border-brand-light bg-white">
      {/* Top row */}
      <Container className="flex items-center justify-between gap-4 py-3">
        <a href="#" className="flex items-center gap-2 shrink-0">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-brand text-white">
            <Leaf size={18} />
          </span>
          <span className="text-lg font-bold text-brand-dark">Taraz Tea</span>
        </a>

        <div className="relative hidden flex-1 max-w-xl md:block">
          <input
            type="text"
            placeholder="Search Product"
            className="w-full rounded-full border border-brand-light bg-brand-light/40 px-4 py-2 pr-10 text-sm outline-none focus:border-brand"
          />
          <Search
            size={18}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-dark/60"
          />
        </div>

        <div className="flex items-center gap-4">
          <button aria-label="Account" className="hidden text-brand-dark hover:text-brand sm:block">
            <User size={20} />
          </button>
          <button aria-label="Wishlist" className="hidden text-brand-dark hover:text-brand sm:block">
            <Heart size={20} />
          </button>
          <button aria-label="Cart" className="relative text-brand-dark hover:text-brand">
            <ShoppingCart size={20} />
            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 grid h-4 w-4 place-items-center rounded-full bg-brand-accent text-[10px] font-bold text-white">
                {cartCount}
              </span>
            )}
          </button>
          <button
            aria-label="Menu"
            className="text-brand-dark md:hidden"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </Container>

      {/* Nav row */}
      <div className="hidden border-t border-brand-light bg-brand-light/30 md:block">
        <Container className="flex items-center gap-8 py-2 text-sm font-medium text-brand-dark">
          <span className="flex items-center gap-1 font-semibold text-brand">
            <Menu size={16} /> All Categories
          </span>
          <a href="#" className="hover:text-brand">Home</a>
          <a href="#products" className="hover:text-brand">Shop</a>
          <a href="#" className="hover:text-brand">About Us</a>
          <a href="#" className="hover:text-brand">Contact</a>
        </Container>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-brand-light bg-white px-4 py-3 md:hidden">
          <div className="relative mb-3">
            <input
              type="text"
              placeholder="Search Product"
              className="w-full rounded-full border border-brand-light bg-brand-light/40 px-4 py-2 pr-10 text-sm outline-none focus:border-brand"
            />
            <Search size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-dark/60" />
          </div>
          <nav className="flex flex-col gap-3 text-sm font-medium text-brand-dark">
            <a href="#">Home</a>
            <a href="#products">Shop</a>
            <a href="#">About Us</a>
            <a href="#">Contact</a>
            <div className="flex items-center gap-4 pt-2">
              <User size={18} /> <span>Account</span>
              <Heart size={18} className="ml-4" /> <span>Wishlist</span>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
