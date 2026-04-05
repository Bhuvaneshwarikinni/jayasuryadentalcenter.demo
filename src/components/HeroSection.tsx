import { Phone, MapPin, Clock } from "lucide-react";
import heroImage from "@/assets/hero-dental.jpg";

const HeroSection = () => (
  <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
    <img src={heroImage} alt="Modern dental clinic interior" width={1920} height={1080} className="absolute inset-0 w-full h-full object-cover" />
    <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, hsla(174, 58%, 25%, 0.88), hsla(200, 20%, 10%, 0.85))" }} />

    <div className="relative z-10 container-narrow px-4 sm:px-6 lg:px-8 pt-20">
      <div className="max-w-2xl animate-fade-up">
        <p className="text-primary-foreground/80 text-sm font-medium tracking-widest uppercase mb-4">Your Trusted Dental Clinic in Bangalore</p>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
          Advanced Dental Care<br />for Every Smile!
        </h1>
        <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8 max-w-lg">
          Welcome to JAYA SURYA Dental and Advanced Implant Center — expert dental care with the latest technology. Tooth replacement possible in ~72 hours.
        </p>
        <div className="flex flex-wrap gap-4 mb-12">
          <a href="https://wa.me/919945275357?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
            <Phone className="w-5 h-5" /> Book Appointment
          </a>
          <a href="#services" className="inline-flex items-center gap-2 border-2 border-primary-foreground/30 text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary-foreground/10 transition-colors">
            Our Services
          </a>
        </div>

        <div className="flex flex-wrap gap-6 text-primary-foreground/70 text-sm">
          <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Basaveshwar Nagar, Bengaluru</span>
          <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> Mon–Sat: 10 AM – 8 PM</span>
          <span className="flex items-center gap-2"><Phone className="w-4 h-4" /> +91 99452 75357</span>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
