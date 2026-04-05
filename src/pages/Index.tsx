import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import DoctorsSection from "@/components/DoctorsSection";
import BeforeAfterGallery from "@/components/BeforeAfterGallery";
import ReviewsSection from "@/components/ReviewsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => (
  <>
    <Navbar />
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <DoctorsSection />
    <BeforeAfterGallery />
    <ReviewsSection />
    <ContactSection />
    <Footer />
    <WhatsAppButton />
  </>
);

export default Index;
