import { LOGOS } from "@/lib/content";

const Items = () => (
  <>
    {LOGOS.map((l, i) => (
      <div key={`${l.name}-${i}`} className="flex items-center gap-14 pr-14">
        <img src={l.src} alt={l.name} className="h-7 md:h-8 w-auto object-contain brightness-0 invert opacity-55" loading="lazy" />
        <span className="w-1 h-1 rounded-full bg-white/25" />
      </div>
    ))}
  </>
);

export const Marquee = () => (
  <section className="theme-dark border-y border-white/10 py-8" data-testid="client-marquee">
    <div className="px-6 lg:px-14 mb-6 flex items-center gap-4">
      <span className="label text-white/40">We have worked with</span>
      <span className="flex-1 h-px bg-white/10" />
    </div>
    <div className="marquee">
      <div className="marquee-track">
        <Items />
        <Items />
      </div>
    </div>
  </section>
);
