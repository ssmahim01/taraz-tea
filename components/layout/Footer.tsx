import { Leaf, Facebook, Instagram, Youtube, MapPin, Phone, Mail } from "lucide-react";
import Container from "@/components/ui/Container";

const usefulLinks = ["হোম", "আমাদের সম্পর্কে", "যোগাযোগ", "ব্লগ", "প্রাইভেসি পলিসি"];
const supportLinks = ["FAQ", "শিপিং পলিসি", "রিটার্ন পলিসি", "টার্মস অ্যান্ড কন্ডিশন"];
const productLinks = ["Green Tea", "Black Tea", "Orthodox Tea", "White Tea", "Herbal Tea"];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand-darker text-white/80">
      <Leaf
        size={220}
        className="pointer-events-none absolute -right-10 -top-10 rotate-12 text-white/5"
      />
      <Container className="relative grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="mb-3 flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-brand text-white">
              <Leaf size={18} />
            </span>
            <span className="text-lg font-bold text-white">Taraz Tea</span>
          </div>
          <p className="mb-4 text-sm leading-relaxed">
            সরাসরি চা বাগান থেকে সংগৃহীত মানসম্মত চা, আপনার দোরগোড়ায় পৌঁছে দিচ্ছি আমরা।
          </p>
          <div className="space-y-2 text-sm">
            <p className="flex items-center gap-2"><MapPin size={16} /> সিলেট, বাংলাদেশ</p>
            <p className="flex items-center gap-2"><Phone size={16} /> ০১৭xxxxxxxx</p>
            <p className="flex items-center gap-2"><Mail size={16} /> tarazteabd@gmail.com</p>
          </div>
        </div>

        <div>
          <h4 className="mb-4 font-semibold text-white">দরকারি লিংক</h4>
          <ul className="space-y-2 text-sm">
            {usefulLinks.map((l) => (
              <li key={l}><a href="#" className="hover:text-white">{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-semibold text-white">গ্রাহক সেবা</h4>
          <ul className="space-y-2 text-sm">
            {supportLinks.map((l) => (
              <li key={l}><a href="#" className="hover:text-white">{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-semibold text-white">প্রোডাক্ট</h4>
          <ul className="space-y-2 text-sm">
            {productLinks.map((l) => (
              <li key={l}><a href="#products" className="hover:text-white">{l}</a></li>
            ))}
          </ul>
          <div className="mt-4 flex gap-3">
            <a href="#" aria-label="Facebook" className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-white/20"><Facebook size={16} /></a>
            <a href="#" aria-label="Instagram" className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-white/20"><Instagram size={16} /></a>
            <a href="#" aria-label="Youtube" className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-white/20"><Youtube size={16} /></a>
          </div>
        </div>
      </Container>

      <div className="relative border-t border-white/10 py-4 text-center text-xs text-white/60">
        © {new Date().getFullYear()} Taraz Tea. All rights reserved.
      </div>
    </footer>
  );
}
