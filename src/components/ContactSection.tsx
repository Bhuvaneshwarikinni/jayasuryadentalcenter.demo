import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="section-padding bg-section-alt">
    <div className="container-narrow">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-2">Contact Us</p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">Visit Our Clinic</h2>
      </div>
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          {[
            { icon: MapPin, label: "Address", value: "3rd Block, 5, 1st Main Rd, near Canara Bank,\n2nd Stage, Basaveshwar Nagar, Bengaluru 560079" },
            { icon: Phone, label: "Phone", value: "+91 99452 75357", href: "tel:+919945275357" },
            { icon: Mail, label: "Email", value: "dentalclinicjayasurya@gmail.com", href: "mailto:dentalclinicjayasurya@gmail.com" },
            { icon: Clock, label: "Timings", value: "Mon – Sat: 10:00 AM – 8:00 PM\nSunday: Closed" },
          ].map((item) => (
            <div key={item.label} className="flex gap-4">
              <div className="w-11 h-11 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{item.label}</p>
                {item.href ? (
                  <a href={item.href} className="text-muted-foreground text-sm hover:text-primary transition-colors whitespace-pre-line">{item.value}</a>
                ) : (
                  <p className="text-muted-foreground text-sm whitespace-pre-line">{item.value}</p>
                )}
              </div>
            </div>
          ))}

          <div className="pt-4">
            <a
              href="https://wa.me/919945275357?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              <Phone className="w-5 h-5" /> Book via WhatsApp
            </a>
          </div>
        </div>
        <div className="rounded-xl overflow-hidden border border-border h-80 lg:h-auto">
          <iframe
            title="Clinic Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.5!2d77.5356!3d12.9907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBasaveshwar+Nagar+Bengaluru!5e0!3m2!1sen!2sin!4v1"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: "320px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
