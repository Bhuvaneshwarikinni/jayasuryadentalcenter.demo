import { useState, useRef, useCallback } from "react";
import beforeAfter1 from "@/assets/before-after-1.jpg";
import beforeAfter2 from "@/assets/before-after-2.jpg";
import beforeAfter3 from "@/assets/before-after-3.jpg";

const cases = [
  { image: beforeAfter1, title: "Smile Correction", treatment: "Aligners & Braces" },
  { image: beforeAfter2, title: "Dental Implant", treatment: "Implant Restoration" },
  { image: beforeAfter3, title: "Teeth Whitening", treatment: "Cosmetic Dentistry" },
];

const ComparisonSlider = ({ image, title, treatment }: { image: string; title: string; treatment: string }) => {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
  }, []);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    dragging.current = true;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  }, [updatePosition]);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!dragging.current) return;
    updatePosition(e.clientX);
  }, [updatePosition]);

  const handlePointerUp = useCallback(() => {
    dragging.current = false;
  }, []);

  return (
    <div className="group">
      <div
        ref={containerRef}
        className="relative w-full aspect-[800/512] rounded-xl overflow-hidden cursor-col-resize select-none border border-border shadow-md"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
      >
        {/* After (full image background) */}
        <img src={image} alt={`${title} - After`} className="absolute inset-0 w-full h-full object-cover" loading="lazy" width={800} height={512} />

        {/* Before (clipped) */}
        <div className="absolute inset-0 overflow-hidden" style={{ width: `${position}%` }}>
          <img
            src={image}
            alt={`${title} - Before`}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ width: `${100 / (position / 100)}%`, maxWidth: "none" }}
            loading="lazy"
            width={800}
            height={512}
          />
          {/* Since these are single before/after images, the clip reveals the left "before" half */}
        </div>

        {/* Slider line */}
        <div className="absolute top-0 bottom-0 z-10" style={{ left: `${position}%` }}>
          <div className="absolute top-0 bottom-0 -translate-x-1/2 w-0.5 bg-primary-foreground shadow-lg" />
          <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primary border-2 border-primary-foreground shadow-lg flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-primary-foreground">
              <path d="M4 3L1 7L4 11M10 3L13 7L10 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        {/* Labels */}
        <span className="absolute top-3 left-3 z-10 bg-foreground/70 text-primary-foreground text-xs font-semibold px-2 py-1 rounded">Before</span>
        <span className="absolute top-3 right-3 z-10 bg-primary/90 text-primary-foreground text-xs font-semibold px-2 py-1 rounded">After</span>
      </div>
      <div className="mt-3 text-center">
        <h3 className="font-display text-lg font-semibold text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground">{treatment}</p>
      </div>
    </div>
  );
};

const BeforeAfterGallery = () => (
  <section id="gallery" className="section-padding bg-[hsl(var(--section-alt))]">
    <div className="container-narrow">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-2">Transformations</p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">Before &amp; After Gallery</h2>
        <p className="text-muted-foreground leading-relaxed">
          Drag the slider to see real treatment results from our patients.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cases.map((c) => (
          <ComparisonSlider key={c.title} {...c} />
        ))}
      </div>
    </div>
  </section>
);

export default BeforeAfterGallery;
