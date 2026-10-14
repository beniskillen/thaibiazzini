import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/Section";
import { ApplyForm } from "@/components/ApplyForm";
import { BOOKING_URL } from "@/lib/content";

const STEPS = [
  ["Share the market", "Who you sell to, what you sell, which audience you already have and roughly how large it is."],
  ["Share the proof", "Results, case studies, testimonials and the commercial outcome that matters in the next 90 days."],
  ["Get the starting list", "We reply with who to contact first, and why."],
];

export default function ApplyPage() {
  return (
    <main data-testid="apply-page">
      <PageHero
        eyebrow="Brand Equity Valuation"
        lines={[<>Value the trust</>, <>you already <span className="font-serif-i font-normal tracking-normal chrome-text">have.</span></>]}
        lead="Tell us who already knows you, and what you sell. We come back with who to contact first."
        aside={
          <div className="flex flex-col gap-4">
            <a href={BOOKING_URL} target="_blank" rel="noreferrer" data-testid="apply-cta-primary" className="btn btn-chrome !h-14 !px-7 !text-[12px] w-full sm:w-auto text-center justify-center">
              Book a call directly <ArrowUpRight size={15} className="arrow" />
            </a>
            <span className="label text-white/40 text-center">or complete the questionnaire below</span>
          </div>
        }
      />

      <section className="theme-light px-6 lg:px-14 py-20 md:py-28" data-testid="apply-steps">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <Reveal><Eyebrow>What happens next</Eyebrow></Reveal>
            <Reveal as="h2" delay={1} className="font-display text-4xl sm:text-5xl mt-8">Three steps. One clear starting point.</Reveal>
            <Reveal delay={2} className="mt-8 text-ink-2 text-sm md:text-base leading-relaxed">
              If there is a clear fit, you receive the recommended starting point and a link to book the next conversation. We will not sell your information.
            </Reveal>
          </div>
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-px bg-ink/15 border border-ink/15">
            {STEPS.map(([t, d], i) => (
              <Reveal key={t} delay={i} className="bg-bone p-8" data-testid={`apply-step-${i}`}>
                <span className="font-condensed text-6xl num-outline">0{i + 1}</span>
                <h3 className="font-display-wide text-xl md:text-2xl mt-6">{t}</h3>
                <p className="mt-4 text-ink-2 text-sm leading-relaxed">{d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="theme-dark px-6 lg:px-14 py-24 md:py-36 border-t border-white/10" id="application-form">
        <div className="max-w-3xl mx-auto mb-14 text-center">
          <Reveal><Eyebrow className="justify-center">Application Form</Eyebrow></Reveal>
          <Reveal as="h2" delay={1} className="font-display text-4xl sm:text-5xl mt-6">
            Tell us about your market and proof.
          </Reveal>
          <Reveal delay={2} className="mt-4 text-white/60 text-sm md:text-base">
            Takes approximately 3 minutes. For founders, consultants and experts with real proof, a clear offer and an underused network.
          </Reveal>
        </div>
        <ApplyForm />
      </section>
    </main>
  );
}
