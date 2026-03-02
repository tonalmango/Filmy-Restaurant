import dynamic from "next/dynamic";
import { Navbar } from "@/components/sections/navbar";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { MenuSection } from "@/components/sections/menu";
import { ReservationSection } from "@/components/sections/reservation";
import { GallerySection } from "@/components/sections/gallery";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { LocationSection } from "@/components/sections/location";
import { FooterSection } from "@/components/sections/footer";
import { WhatsAppOrderButton } from "@/components/sections/whatsapp-button";
import { MobileBookCTA } from "@/components/sections/mobile-book-cta";

const ChatbotWidget = dynamic(() => import("@/components/sections/chatbot").then((m) => m.ChatbotWidget), {
  ssr: false,
});

export function HomePage() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-clip pb-24 md:pb-0">
        <HeroSection />
        <AboutSection />
        <MenuSection />
        <ReservationSection />
        <GallerySection />
        <TestimonialsSection />
        <LocationSection />
        <FooterSection />
      </main>
      <MobileBookCTA />
      <ChatbotWidget />
      <WhatsAppOrderButton />
    </>
  );
}
