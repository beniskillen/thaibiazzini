import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Reveal, Lines } from "@/components/Reveal";
import { Eyebrow } from "@/components/Section";
import { CtaBand } from "@/components/CtaBand";
import { CASES } from "@/lib/content";
import { EASE } from "@/lib/motion";

export default function CaseStudyPage() {
  const { slug } = useParams();
  const c = CASES.find((x) => x.slug === slug);
  if (!c) return <Navigate to="/work" replace />;
  const next = CASES[(CASES.indexOf(c) + 1) % CASES.length];

  return (
    <main data-testid={`case-page-${c.slug}`}>
      <section className="theme-dark pt-40 md:pt-48 pb-16 px-6 lg:px-14">
        <Reveal>
          <Link to="/work" data-testid="case-back-link" className="label text-white/50 hover:text-white inline-flex items-center gap-2 transition-colors"><ArrowLeft size={12} /> All work</Link>
        </Reveal>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12">
          <div className="lg:col-span-7">
            <Reveal><Eyebrow>Selected prior work · {c.tag}</Eyebrow></Reveal>
            <Lines as="h1" delay={0.1} className="font-display text-5xl sm:text-6xl lg:text-7xl mt-8" lines={[<>{c.client}</>, <><span className="font-serif-i font-normal tracking-normal chrome-text">{c.title}</span></>]} />
            <Reveal delay={2} className="mt-8 text-white/50 text-sm md:text-base max-w-xl">{c.attribution}</Reveal>
            <Reveal delay={3} className="mt-6 text-white/75 leading-relaxed text-sm md:text-base max-w-xl">{c.lead}</Reveal>
          </div>
          <div className="lg:col-span-5 grid grid-cols-2 gap-px bg-white/10 border border-white/10 h-fit lg:mt-16" data-testid="case-stats">
            {c.stats.map((s) => (
              <div key={s.l} className="bg-[#050505] p-6">
                <div className="font-display text-3xl md:text-4xl chrome-text">{s.v}</div>
                <div className="label text-white/40 mt-2 !tracking-[0.1em]">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
        <motion.div initial={{ clipPath: "inset(0 0 100% 0)" }} animate={{ clipPath: "inset(0 0 0% 0)" }} transition={{ duration: 1.5, ease: EASE, delay: 0.4 }} className="img-frame spotlight aspect-[16/8] mt-16">
          <img src={c.image} alt={c.client} className="grayscale" style={{ objectPosition: c.slug === "sean-bell" ? "center 20%" : "center" }} />
        </motion.div>
      </section>

      <section className="theme-light px-6 lg:px-14 py-24 md:py-32" data-testid="case-body">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal><Eyebrow>Constraint</Eyebrow></Reveal>
            <Reveal delay={1} className="mt-6 text-ink-2 leading-relaxed text-sm md:text-base">{c.constraint}</Reveal>
          </div>
          <div className="lg:col-span-8">
            <Reveal><Eyebrow>Mechanism</Eyebrow></Reveal>
            <Reveal as="h2" delay={1} className="font-display text-3xl md:text-5xl mt-6">{c.mechanismTitle}</Reveal>
            <div className="mt-8 max-w-2xl space-y-5">
              {(Array.isArray(c.mechanism) ? c.mechanism : [c.mechanism]).map((paragraph) => (
                <Reveal key={paragraph} delay={2} className="text-ink-2 leading-relaxed text-sm md:text-base">{paragraph}</Reveal>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4"><Reveal><Eyebrow>What made it work</Eyebrow></Reveal></div>
          <ol className="lg:col-span-8 ruled border-t border-b border-ink/15">
            {c.work.map(([t, d], i) => (
              <Reveal as="li" key={t} delay={i} className="grid grid-cols-12 gap-4 py-7" data-testid={`case-work-${i}`}>
                <span className="col-span-2 md:col-span-1 font-condensed text-4xl num-outline">0{i + 1}</span>
                <div className="col-span-10 md:col-span-11">
                  <h3 className="font-display-wide text-xl md:text-2xl">{t}</h3>
                  <p className="mt-2 text-ink-2 text-sm md:text-base">{d}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>

        {c.results?.length ? (
          <div className="mt-24 grid grid-cols-1 lg:grid-cols-12 gap-12" data-testid="case-results">
            <div className="lg:col-span-4"><Reveal><Eyebrow>What it produced</Eyebrow></Reveal></div>
            <ul className="lg:col-span-8 space-y-4">
              {c.results.map((item) => (
                <Reveal as="li" key={item} className="text-ink text-base md:text-lg border-t border-ink/15 pt-4">{item}</Reveal>
              ))}
            </ul>
          </div>
        ) : null}

        {c.programmeProof ? (
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12" data-testid="case-programme">
            <div className="lg:col-span-4">
              <Reveal><Eyebrow>Broader programme proof</Eyebrow></Reveal>
              <Reveal delay={1} className="mt-4 text-ink-3 text-sm leading-relaxed">{c.programmeProof.note}</Reveal>
            </div>
            <ul className="lg:col-span-8 space-y-4">
              {c.programmeProof.items.map((item) => (
                <Reveal as="li" key={item} className="text-ink-2 text-sm md:text-base border-t border-ink/15 pt-4">{item}</Reveal>
              ))}
            </ul>
          </div>
        ) : null}

        <Reveal className="mt-24 bg-ink text-bone p-8 md:p-14 grid grid-cols-1 lg:grid-cols-12 gap-8">
          <span className="label text-bone/50 lg:col-span-3">Why it worked</span>
          <p className="font-display-wide text-xl md:text-3xl lg:col-span-9 leading-snug">{c.why}</p>
        </Reveal>
      </section>

      <section className="theme-dark px-6 lg:px-14 py-24 md:py-32" data-testid="case-gallery">
        <Reveal className="flex items-center justify-between mb-10">
          <Eyebrow>Proof gallery</Eyebrow>
          <span className="label text-white/30">[ PUBLIC ASSETS ]</span>
        </Reveal>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {c.gallery.map((g, i) => (
            <Reveal key={g.src} delay={i} className="group">
              <div className="img-frame aspect-[4/5]"><img src={g.src} alt={g.t} className="grayscale group-hover:grayscale-0" /></div>
              <div className="mt-3 text-sm">{g.t}</div>
              {g.caption ? <p className="mt-1 text-white/55 text-sm leading-relaxed">{g.caption}</p> : null}
              <div className="label text-white/35 mt-1 !tracking-[0.08em] !normal-case">{g.c}</div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-16 border-t border-white/10 pt-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <span className="label text-white/40">Services this maps to now</span>
            <p className="mt-2 text-sm md:text-base">{c.services}</p>
          </div>
          <Link to={`/work/${next.slug}`} data-testid="case-next-link" className="btn btn-ghost w-fit">Next · {next.client} <ArrowUpRight size={14} className="arrow" /></Link>
        </Reveal>
      </section>

      <CtaBand title={c.closing} secondary={{ label: "All work", to: "/work" }} />
    </main>
  );
}
