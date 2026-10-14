import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "../Reveal";
import { Eyebrow } from "../Section";
import { METHOD_STEPS } from "@/lib/content";

export const Method = () => (
  <section className="theme-light px-6 lg:px-14 py-28 md:py-40" data-testid="method-section">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
      <div className="lg:col-span-4">
        <div className="lg:sticky lg:top-32">
          <Reveal><Eyebrow>The steps</Eyebrow></Reveal>
          <Reveal as="h2" delay={1} className="font-display text-4xl sm:text-5xl lg:text-6xl mt-8">
            List. Contact. Score. Then <span className="font-serif-i font-normal tracking-normal">publish.</span>
          </Reveal>
          <Reveal delay={2} className="mt-10">
            <Link to="/method" data-testid="method-explore-link" className="btn btn-ink">
              Explore the full method <ArrowUpRight size={14} className="arrow" />
            </Link>
          </Reveal>
        </div>
      </div>
      <div className="lg:col-span-8 ruled border-t border-b border-ink/15">
        {METHOD_STEPS.map((s, i) => (
          <Reveal key={s.step} delay={i} className="grid grid-cols-12 gap-6 py-10 group" data-testid={`method-step-${s.step}`}>
            <div className="col-span-3 md:col-span-2">
              <span className="font-condensed text-6xl md:text-8xl num-outline group-hover:text-ink transition-colors duration-700" style={{ WebkitTextStroke: undefined }}>{s.step}</span>
            </div>
            <div className="col-span-9 md:col-span-10">
              <span className="label text-ink-3">{s.tag}</span>
              <h3 className="font-display-wide text-2xl md:text-3xl mt-2">{s.name}</h3>
              <p className="mt-4 text-ink-2 leading-relaxed max-w-xl text-sm md:text-base">{s.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
