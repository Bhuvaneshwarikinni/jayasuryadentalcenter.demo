import { ShieldCheck, BookOpen, Heart, Sparkles } from "lucide-react";

const values = [
  { icon: BookOpen, title: "Patient Education", desc: "We take time to explain every treatment option clearly." },
  { icon: ShieldCheck, title: "Safe & Hygienic", desc: "Strict sterilization protocols and modern equipment." },
  { icon: Heart, title: "Comfort First", desc: "Stress-free, painless dental experiences for all ages." },
  { icon: Sparkles, title: "Transparent Planning", desc: "Honest treatment plans with no hidden costs." },
];

const stats = [
  { value: "4,145+", label: "Happy Clients" },
  { value: "1,554+", label: "Dental Implants" },
  { value: "24+", label: "Years of Service" },
  { value: "4.9★", label: "Google Rating" },
];

const AboutSection = () => (
  <section id="about" className="section-padding bg-section-alt">
    <div className="container-narrow">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-2">About Us</p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">Modern Dental Care You Can Trust</h2>
        <p className="text-muted-foreground leading-relaxed">
          Shree Jayasurya Dental & Orthodontic Clinic has been a trusted name in dental care for over 24 years, offering advanced, personalized treatments in a caring and hygienic environment. Our team of experienced dental surgeons is committed to restoring and enhancing smiles with a strong focus on patient comfort and long-term oral health.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
        {values.map((v) => (
          <div key={v.title} className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-shadow text-center">
            <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mx-auto mb-4">
              <v.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">{v.title}</h3>
            <p className="text-muted-foreground text-sm">{v.desc}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="font-display text-3xl sm:text-4xl font-bold text-primary mb-1">{s.value}</p>
            <p className="text-muted-foreground text-sm">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
