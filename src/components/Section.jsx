import { Reveal } from "./Reveal";

export const Eyebrow = ({ children, className = "", testId }) => (
  <div className={`flex items-center gap-3 ${className}`} data-testid={testId}>
    <span className="crosshair relative !w-3 !h-3 opacity-60" style={{ position: "relative" }} />
    <span className="label opacity-60">{children}</span>
  </div>
);

export const SectionHead = ({ eyebrow, title, lead, className = "", light = false, testId }) => (
  <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 ${className}`} data-testid={testId}>
    <Reveal className="lg:col-span-3">
      <Eyebrow>{eyebrow}</Eyebrow>
    </Reveal>
    <div className="lg:col-span-9">
      <Reveal as="h2" delay={1} className="font-display text-4xl sm:text-5xl lg:text-6xl max-w-4xl">
        {title}
      </Reveal>
      {lead && (
        <Reveal as="p" delay={2} className={`mt-8 text-base md:text-lg max-w-2xl leading-relaxed ${light ? "text-ink-2" : "text-white/60"}`}>
          {lead}
        </Reveal>
      )}
    </div>
  </div>
);
