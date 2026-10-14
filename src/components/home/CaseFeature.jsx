import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "../Reveal";
import { Eyebrow } from "../Section";
import { CASES } from "@/lib/content";
import { viewport, EASE } from "@/lib/motion";

const rd = CASES[0];

export const CaseFeature = () => (
  <section className="theme-dark px-6 lg:px-14 py-28 md:py-40" data-testid="case-feature-section">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
      <div className="lg:col-span-6 order-2 lg:order-1">
        <Reveal><Eyebrow>Selected prior work · {rd.client}</Eyebrow></Reveal>
        <Reveal delay={1} className="mt-8">
          <span className="font-display text-[22vw] sm:text-[9rem] lg:text-[11rem] leading-[0.8] chrome-text block" data-testid="case-feature-stat">A$175k</span>
          <span className="label text-white/40 block mt-4">approximate total · A$40k stated target</span>
        </Reveal>
        <Reveal as="h2" delay={2} className="font-display-wide text-2xl md:text-4xl mt-12 max-w-xl">
          {rd.title}
        </Reveal>
        <Reveal delay={3} className="mt-6 text-white/45 text-sm max-w-xl">{rd.attribution}</Reveal>
        <Reveal delay={3} className="mt-6 text-white/60 leading-relaxed max-w-xl text-sm md:text-base">
          <p>{rd.short}</p>
          {rd.proof ? <p className="mt-3 text-white/45">{rd.proof}</p> : null}
        </Reveal>
        <Reveal delay={4} className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-white/10 pt-6">
          {rd.stats.map((s) => (
            <div key={s.l}>
              <div className="font-display-wide text-2xl md:text-3xl">{s.v}</div>
              <div className="label text-white/40 mt-2 !tracking-[0.1em]">{s.l}</div>
            </div>
          ))}
        </Reveal>
        <Reveal delay={5} className="mt-12">
          <Link to="/work/red-dust" data-testid="case-feature-link" className="btn btn-ghost">
            Read the Red Dust case <ArrowUpRight size={14} className="arrow" />
          </Link>
        </Reveal>
      </div>
      <div className="lg:col-span-6 order-1 lg:order-2 relative">
        <motion.div
          initial={{ clipPath: "inset(100% 0 0 0)" }}
          whileInView={{ clipPath: "inset(0% 0 0 0)" }}
          viewport={viewport}
          transition={{ duration: 1.4, ease: EASE }}
          className="img-frame spotlight aspect-[4/5] lg:aspect-[3/4] lg:ml-16"
        >
          <img src={rd.image} alt="Red Dust Role Models community" className="grayscale contrast-125" />
        </motion.div>
        <Reveal delay={3} className="absolute left-0 bottom-10 bg-[#050505] border border-white/15 px-5 py-4 hidden lg:block">
          <span className="label text-white/50">Stated target</span>
          <div className="font-display text-4xl mt-1">&gt;4.4×</div>
        </Reveal>
      </div>
    </div>
  </section>
);
