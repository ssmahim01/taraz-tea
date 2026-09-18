import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import TeaCategories from "@/components/home/TeaCategories";
import BestSellingProducts from "@/components/home/BestSellingProducts";
import ServiceFeatures from "@/components/home/ServiceFeatures";
import AffiliateBanner from "@/components/home/AffiliateBanner";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <TeaCategories />
        <BestSellingProducts />
        <ServiceFeatures />
        <AffiliateBanner />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
