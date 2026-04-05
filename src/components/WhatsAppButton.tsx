import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/919945275357?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[hsl(142,70%,45%)] hover:bg-[hsl(142,70%,40%)] text-primary-foreground shadow-lg hover:shadow-xl transition-all flex items-center justify-center animate-fade-in"
  >
    <MessageCircle className="w-7 h-7" />
  </a>
);

export default WhatsAppButton;
