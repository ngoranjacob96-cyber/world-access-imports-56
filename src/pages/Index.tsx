import Header from "@/components/Header";
import PremiumHero from "@/components/PremiumHero";
import PremiumAbout from "@/components/PremiumAbout";
import UltraModernServices from "@/components/UltraModernServices";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import FAQSection from "@/components/FAQSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ChatBot from "@/components/ChatBot";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PremiumHero />
        <PremiumAbout />
        <UltraModernServices />
        <WhyChooseUsSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
      <ChatBot />
    </div>
  );
};

export default Index;
