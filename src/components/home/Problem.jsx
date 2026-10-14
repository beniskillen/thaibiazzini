import { asset } from "@/lib/asset";
import { Reveal } from "../Reveal";
import { Eyebrow } from "../Section";
import { ProofFunnel } from "../ProofFunnel";

export const Problem = () => (
  <section className="theme-dark px-6 lg:px-14 py-28 md:py-40 relative overflow-hidden" data-testid="problem-section">
    <img src={asset("/images/chrome-wave.jpg")} alt="" className="absolute -left-40 bottom-0 w-[900px] opacity-30 mix-blend-screen pointer-events-none select-none" />
    <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
      <div className="lg:col-span-5">
        <Reveal><Eyebrow>From reply to revenue</Eyebrow></Reveal>
        <Reveal as="h2" delay={1} className="font-display text-4xl sm:text-5xl lg:text-6xl mt-8">
          More posts will not fix a message people <span className="font-serif-i font-normal tracking-normal chrome-text">ignore.</span>
        </Reveal>
        <Reveal delay={2} className="mt-10 text-white/60 text-base md:text-lg leading-relaxed space-y-5 max-w-lg">
          <p>We check the message with people close to a purchase first.</p>
          <p className="text-white">What they reply to, book, or buy is what the public brand is built from.</p>
        </Reveal>
      </div>
      <div className="lg:col-span-7 lg:pl-10">
        <Reveal className="mb-8 flex items-center justify-between">
          <span className="label text-white/50">How a reply becomes revenue</span>
          <span className="label text-white/30">[ FIG. 01 ]</span>
        </Reveal>
        <ProofFunnel />
      </div>
    </div>
  </section>
);
