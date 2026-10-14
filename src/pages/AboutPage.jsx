import { asset } from "@/lib/asset";
import { motion } from "framer-motion";
import { Reveal, Lines } from "@/components/Reveal";
import { Eyebrow } from "@/components/Section";
import { CtaBand } from "@/components/CtaBand";
import { EASE } from "@/lib/motion";

const BRINGS = ["Brand and campaign direction", "Direct audience activation", "Founder interviewing and story extraction", "Proof-led content systems", "Cross-channel execution", "English, Portuguese and Spanish communication"];

export default function AboutPage() {
  return (
    <main data-testid="about-page">
      <section className="theme-dark pt-40 md:pt-48 pb-24 px-6 lg:px-14 relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <Reveal><Eyebrow>About Thai Biazzini</Eyebrow></Reveal>
            <Lines delay={0.15} className="font-display text-5xl sm:text-6xl lg:text-8xl mt-8" lines={[<>Personal brand</>, <>is not a</>, <><span className="font-serif-i font-normal tracking-normal chrome-text">vanity layer.</span></>]} />
            <Reveal delay={4} className="mt-10 text-white/60 text-base md:text-lg max-w-xl leading-relaxed space-y-5">
              <p>For founder-led businesses, it is the trust layer that helps the market understand the offer, believe the proof and feel comfortable starting a conversation.</p>
              <p className="text-white">The work should still be measured commercially.</p>
            </Reveal>
          </div>
          <div className="lg:col-span-5 lg:pt-10">
            <motion.div initial={{ clipPath: "inset(100% 0 0 0)" }} animate={{ clipPath: "inset(0% 0 0 0)" }} transition={{ duration: 1.5, ease: EASE, delay: 0.3 }} className="img-frame spotlight aspect-[4/5]">
              <img src={asset("/images/nara-portrait.jpg")} alt="Thai Biazzini" className="grayscale" />
            </motion.div>
            <Reveal delay={5} className="mt-4 flex justify-between label text-white/40">
              <span>Thai Biazzini · Founder</span>
              <span>[ 6 YRS · AGENCY / CAMPAIGN / GROWTH ]</span>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="theme-light px-6 lg:px-14 py-24 md:py-36" data-testid="about-brings">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <Reveal><Eyebrow>What Thai brings</Eyebrow></Reveal>
            <Reveal as="h2" delay={1} className="font-display text-4xl sm:text-5xl mt-8">Strategy, activation and proof in one <span className="font-serif-i font-normal tracking-normal">system.</span></Reveal>
            <Reveal delay={2} className="mt-8 text-ink-2 leading-relaxed text-sm md:text-base max-w-lg">
              Thai has spent six years across agency, campaign, content, account-growth and purpose-led marketing roles. NARA Studio packages that experience into one focused system.
            </Reveal>
          </div>
          <ul className="lg:col-span-7 ruled border-t border-b border-ink/15">
            {BRINGS.map((b, i) => (
              <Reveal as="li" key={b} delay={i} className="flex items-baseline gap-6 py-5" data-testid={`about-bring-${i}`}>
                <span className="label text-ink-3">0{i + 1}</span>
                <span className="font-display-wide text-xl md:text-2xl">{b}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="theme-dark px-6 lg:px-14 py-24 md:py-36" data-testid="about-how">
        <Reveal><Eyebrow>How NARA Studio works</Eyebrow></Reveal>
        <Reveal as="h2" delay={1} className="font-display text-4xl sm:text-5xl lg:text-6xl mt-8 max-w-3xl">The founder stays in the commercial conversation.</Reveal>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {[
            ["Thai", "Owns strategy, voice, creative direction and the quality of the market interaction."],
            ["Ben", "Supports offer architecture, systems, CRM and commercial measurement where required."],
            ["The client", "Brings the expertise, proof, relationships and sales conversations."],
          ].map(([who, what], i) => (
            <Reveal key={who} delay={i} className="bg-[#050505] p-8">
              <span className="label text-white/40">0{i + 1}</span>
              <h3 className="font-display text-3xl mt-4">{who}</h3>
              <p className="mt-4 text-white/60 text-sm md:text-base leading-relaxed">{what}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand title="If your work is stronger than your|market presence, start with the|people already closest to it." secondary={{ label: "See selected work", to: "/work" }} />
    </main>
  );
}
