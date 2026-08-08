import dynamic from "next/dynamic";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";

// Lazy load below-the-fold components to reduce initial bundle size
const AboutSection = dynamic(() => import("@/components/AboutSection"));
const ProductsSection = dynamic(() => import("@/components/ProductsSection"));
const ServicesSection = dynamic(() => import("@/components/ServicesSection"));
const TestimonialsSection = dynamic(
  () => import("@/components/TestimonialsSection")
);
const ContactSection = dynamic(() => import("@/components/ContactSection"), {
  loading: () => <ContactSectionSkeleton />,
});

function ContactSectionSkeleton() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="h-8 bg-gray-200 rounded w-64 mb-4 animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded w-96 mb-8 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ProductsSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
