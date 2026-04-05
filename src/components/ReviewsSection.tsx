import { Star } from "lucide-react";

const reviews = [
  { name: "Rachu Aravind", text: "Excellent dental clinic in Basaveshwaranagar. I am happy clinic opens full time morning 10 to late night, excellent service for dental implants. I loved the ambience and smiling dentist team!" },
  { name: "Venki Hulikal", text: "I know Dr. Jayanth from 18 years. Happy with clinic environment and staffs. Whole day doctors available. Dr. Jayanth always comforts us. Painless treatment — we are very happy." },
  { name: "Ravindar Gonela", text: "Exceptional experience with Dr. Purnima Singh and their team. The office is clean, modern, and well-organized. I highly recommend this clinic to anyone looking for a trustworthy dental professional." },
  { name: "Manjula G", text: "Always doctors and staff are patient friendly and welcoming. Kids are made comfortable before, during and after treatment. Highly recommend for all dental treatment!" },
];

const ReviewsSection = () => (
  <section id="reviews" className="section-padding">
    <div className="container-narrow">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-2">Patient Reviews</p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">Loved by 700+ Patients</h2>
        <div className="flex items-center justify-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-accent text-accent" />)}
        </div>
        <p className="text-muted-foreground">4.9 out of 5 based on 700+ Google reviews</p>
      </div>
      <div className="grid sm:grid-cols-2 gap-6">
        {reviews.map((r) => (
          <div key={r.name} className="bg-card rounded-xl border border-border p-6">
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-accent text-accent" />)}
            </div>
            <p className="text-foreground leading-relaxed mb-4">"{r.text}"</p>
            <p className="text-sm font-semibold text-muted-foreground">— {r.name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ReviewsSection;
