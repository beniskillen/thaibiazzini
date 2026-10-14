import { Reveal, Lines } from "./Reveal";
import { Eyebrow } from "./Section";

export const PageHero = ({ eyebrow, lines, lead, aside, testId }) => (
  <section className="theme-dark relative pt-40 pb-20 md:pt-48 md:pb-28 px-6 lg:px-14 overflow-hidden" data-testid={testId}>
    <div className="absolute inset-x-0 top-[72px] h-px bg-white/10" />
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
      <div className="lg:col-span-8">
        <Reveal><Eyebrow>{eyebrow}</Eyebrow></Reveal>
        <Lines lines={lines} delay={0.15} className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl mt-8" />
        {lead && (
          <Reveal delay={4} className="mt-10 text-white/60 text-base md:text-lg max-w-2xl leading-relaxed">
            {lead}
          </Reveal>
        )}
      </div>
      {aside && <Reveal delay={5} className="lg:col-span-4 lg:pt-24">{aside}</Reveal>}
    </div>
  </section>
);
