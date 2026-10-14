import { asset } from "@/lib/asset";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { Reveal } from "../Reveal";
import { Eyebrow } from "../Section";
import { FIT } from "@/lib/content";
import { viewport, EASE } from "@/lib/motion";

export const Founder = () => (
  <section className="theme-dark px-6 lg:px-14 py-28 md:py-40" data-testid="founder-section">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
      <div className="lg:col-span-5">
        <motion.div
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          whileInView={{ clipPath: "inset(0 0% 0 0)" }}
          viewport={viewport}
          transition={{ duration: 1.4, ease: EASE }}
          className="img-frame spotlight aspect-square lg:aspect-[4/5]"
        >
          <img src={asset("/images/nara-portrait.jpg")} alt="Thai Biazzini, founder of NARA Studio" className="grayscale" />
        </motion.div>
        <Reveal delay={2} className="mt-5 flex justify-between label text-white/40">
          <span>Thai Biazzini · Founder</span>
          <span>[ EN · PT · ES ]</span>
        </Reveal>
      </div>

      <div className="lg:col-span-7 flex flex-col gap-20">
        <div>
          <Reveal><Eyebrow>About Thai</Eyebrow></Reveal>
          <Reveal as="h2" delay={1} className="font-display text-4xl sm:text-5xl lg:text-6xl mt-8">
            Thai does the work in the <span className="font-serif-i font-normal tracking-normal chrome-text">account.</span>
          </Reveal>
          <Reveal delay={2} className="mt-8 text-white/60 leading-relaxed max-w-xl text-sm md:text-base">
            Six years in agency, campaign, content, and account roles. She contacts the people with you.
          </Reveal>
          <Reveal delay={3} className="mt-8">
            <Link to="/about" data-testid="founder-about-link" className="btn btn-ghost">About Thai <ArrowUpRight size={14} className="arrow" /></Link>
          </Reveal>
        </div>

        <div data-testid="fit-section">
          <Reveal><Eyebrow>Fit</Eyebrow></Reveal>
          <Reveal as="h3" delay={1} className="font-display-wide text-2xl md:text-4xl mt-6 max-w-lg">You stay in the work.</Reveal>
          <Reveal delay={2} className="mt-5 text-white/60 text-sm md:text-base max-w-xl leading-relaxed">
            NARA Studio can run the list, the messages, and the creative. You still bring the judgement, the stories, and the sales calls. It works best when:
          </Reveal>
          <ul className="mt-8 ruled border-t border-b border-white/10">
            {FIT.map((f, i) => (
              <Reveal as="li" key={f} delay={i} className="flex items-center gap-4 py-4 text-sm md:text-base" data-testid={`fit-item-${i}`}>
                <span className="w-6 h-6 border border-white/30 flex items-center justify-center shrink-0"><Check size={12} /></span>
                {f}
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);
