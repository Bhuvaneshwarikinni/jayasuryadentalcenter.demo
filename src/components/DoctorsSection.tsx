import doctorJayanth from "@/assets/doctor-jayanth.png";
import doctorPurnima from "@/assets/doctor-purnima.png";
import doctorSowmya from "@/assets/doctor-sowmya.jpg";

const doctors = [
  {
    name: "Dr. Jayanth",
    credentials: "BDS, FAGE, PGDRM",
    role: "Dental Surgeon, FICOI, MS(USA)",
    specialization: "Certified Implantologist",
    desc: "Highly experienced Dental Surgeon with international credentials. Specializes in advanced implant procedures and restorative treatments with utmost care and precision.",
    image: doctorJayanth,
  },
  {
    name: "Dr. Purnima Singh",
    credentials: "BDS",
    role: "Dental Surgeon, Laser Dentist",
    specialization: "Laser Dentistry",
    desc: "Dedicated Dental Surgeon specializing in laser dentistry. Her gentle techniques and modern approach ensure minimally invasive treatments with quick recovery.",
    image: doctorPurnima,
  },
  {
    name: "Dr. Sowmya K.V",
    credentials: "BDS, MBA",
    role: "Dental Surgeon, Cosmetic Dentist",
    specialization: "Cosmetic Dentistry",
    desc: "Skilled Dental Surgeon known for aesthetic precision and patient-friendly approach. Focuses on smile makeovers and cosmetic restorations.",
    image: doctorSowmya,
  },
];

const DoctorsSection = () => (
  <section id="doctors" className="section-padding bg-section-alt">
    <div className="container-narrow">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-2">Our Team</p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">Meet Our Expert Dental Team</h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {doctors.map((d) => (
          <div key={d.name} className="bg-card rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-shadow">
            <img src={d.image} alt={d.name} className="w-full h-72 object-cover object-top" loading="lazy" width={512} height={640} />
            <div className="p-6 text-center">
              <h3 className="font-display text-xl font-bold text-foreground">{d.name}</h3>
              <p className="text-primary font-medium text-sm mt-1">{d.role}</p>
              <p className="text-muted-foreground text-sm mt-3">{d.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default DoctorsSection;
