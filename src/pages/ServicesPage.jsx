import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { SERVICES, METHOD_STEPS, BOOKING_URL } from "@/lib/content";
import { Eyebrow } from "@/components/Section";

export default function ServicesPage() {
  return (
    <main data-testid="services-page">
      <PageHero
        eyebrow="The offer"
        lines={[<>Personal branding</>, <>that works</>, <><span className="font-serif-i font-normal tracking-normal chrome-text">for you.</span></>]}
        lead="A strong personal brand is about a lot more than looking pretty. NARA Studio is the intersection of both: the look, and revenue-generating personal branding. The steps below are the process."
      />

      <section className="theme-light px-6 lg:px-14 py-20 md:py-28 border-b border-ink/15" data-testid="offer-steps">
        <Reveal><Eyebrow>The steps</Eyebrow></Reveal>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {METHOD_STEPS.map((s, i) => (
            <Reveal key={s.step} delay={i}>
              <span className="font-condensed text-6xl num-outline">{s.step}</span>
              <h2 className="font-display text-3xl mt-4">{s.tag}</h2>
              <p className="mt-4 text-ink-2 text-sm md:text-base leading-relaxed">{s.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="theme-light px-6 lg:px-14 py-20 md:py-28" data-testid="services-list">
        <div className="ruled border-t border-b border-ink/15">
          {SERVICES.map((s) => (
            <Reveal key={s.n} delay={1} className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-14 md:py-20" data-testid={`service-${s.slug}`}>
              <div className="lg:col-span-4">
                <span className="font-condensed text-6xl md:text-8xl num-outline">{s.n}</span>
                <h2 className="font-display text-3xl md:text-5xl mt-4">{s.title}</h2>
                <p className="mt-6 text-ink-2 text-sm md:text-base leading-relaxed"><span className="label text-ink-3 block mb-2">For</span>{s.for}</p>
              </div>
              <div className="lg:col-span-4 lg:pt-20">
                <span className="label text-ink-3">{s.verb}</span>
                <ul className="mt-4 ruled border-t border-b border-ink/15">
                  {s.items.map((it) => (
                    <li key={it} className="py-3 text-sm md:text-base flex items-center gap-3">
                      <span className="w-1 h-1 bg-ink rounded-full" />{it}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:col-span-4 lg:pt-20 flex flex-col gap-8">
                <div className="bg-ink text-bone p-6">
                  <span className="label text-bone/50">Result</span>
                  <p className="mt-3 font-display-wide text-lg md:text-xl leading-snug">{s.result}</p>
                </div>
                <a href={`${BOOKING_URL}?start=${s.slug}`} target="_blank" rel="noreferrer" data-testid={`service-cta-${s.slug}`} className="btn btn-ink-ghost w-fit">
                  {s.cta} <ArrowUpRight size={14} className="arrow" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand title="Book the call.|We start with your list." secondary={{ label: "Read the method", to: "/method" }} />
    </main>
  );
}
