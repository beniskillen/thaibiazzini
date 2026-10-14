import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/Section";
import { ProofFunnel } from "@/components/ProofFunnel";
import { CtaBand } from "@/components/CtaBand";
import { METHOD_STEPS } from "@/lib/content";

export default function MethodPage() {
  return (
    <main data-testid="method-page">
      <PageHero
        eyebrow="The steps"
        lines={[<>List. Contact.</>, <>Score. <span className="font-serif-i font-normal tracking-normal chrome-text">Publish.</span></>]}
        lead="Personal branding that makes money. List the people close to a sale, contact them, keep what turns into revenue, and publish from that."
        aside={
          <div className="grid grid-cols-1 gap-px bg-white/10 border border-white/10">
            <div className="bg-[#0F1013] p-6">
              <span className="label text-white/40">The old sequence</span>
              <p className="font-display-wide text-lg md:text-xl mt-3 text-white/50 line-through decoration-1">Post, wait, chase reach, guess</p>
            </div>
            <div className="bg-white text-ink p-6">
              <span className="label text-ink-3">The NARA Studio sequence</span>
              <p className="font-display-wide text-lg md:text-xl mt-3">List, contact, score, publish</p>
            </div>
          </div>
        }
      />

      <section className="theme-light px-6 lg:px-14 py-28 md:py-36" data-testid="method-system-section">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <Reveal><Eyebrow>The system</Eyebrow></Reveal>
            <Reveal as="h2" delay={1} className="font-display text-4xl sm:text-5xl mt-8">People you know, then a sale, then the brand.</Reveal>
            <Reveal delay={2} className="mt-8 text-ink-2 leading-relaxed max-w-lg text-sm md:text-base">
              The wide end is people who already bought, followed, referred you, or asked a question. They answer faster than strangers.
            </Reveal>
          </div>
          <div className="lg:col-span-7 lg:pl-10"><ProofFunnel light /></div>
        </div>
      </section>

      <section className="theme-dark px-6 lg:px-14 py-28 md:py-36" data-testid="method-steps-section">
        <div className="ruled border-t border-b border-white/10">
          {METHOD_STEPS.map((s, i) => (
            <Reveal key={s.step} delay={1} className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-14 md:py-20" data-testid={`method-detail-${s.step}`}>
              <div className="lg:col-span-3 flex lg:flex-col gap-4 items-baseline lg:items-start">
                <span className="font-condensed text-7xl md:text-9xl chrome-text">{s.step}</span>
                <span className="label text-white/40">· {s.tag}</span>
              </div>
              <div className="lg:col-span-6">
                <h3 className="font-display text-3xl md:text-5xl">{s.name}</h3>
                <p className="mt-6 text-white/60 leading-relaxed text-sm md:text-base">{s.desc}</p>
              </div>
              <div className="lg:col-span-3 border border-white/15 p-5 h-fit">
                <span className="label text-white/40">Output</span>
                <p className="mt-3 text-sm leading-relaxed">{s.output}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="theme-light px-6 lg:px-14 py-28 md:py-36" data-testid="method-loop-section">
        <Reveal><Eyebrow>Then it repeats</Eyebrow></Reveal>
        <Reveal as="h2" delay={1} className="font-display text-4xl sm:text-5xl lg:text-7xl mt-8 max-w-4xl">
          The posts follow the <span className="font-serif-i font-normal tracking-normal">sales.</span>
        </Reveal>
        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-px bg-ink/15 border border-ink/15">
          {["Every new conversation improves the message.", "Every stronger message improves the content.", "Every better asset improves activation.", "Every commercial outcome creates more proof."].map((t, i) => (
            <Reveal key={t} delay={i} className="bg-bone p-6 md:p-8">
              <span className="label text-ink-3">0{i + 1}</span>
              <p className="font-display-wide text-lg md:text-2xl mt-4">{t}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand title="Start with the trust|you already have." secondary={{ label: "See the services", to: "/services" }} />
    </main>
  );
}
