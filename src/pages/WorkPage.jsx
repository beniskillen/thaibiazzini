import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { CASES } from "@/lib/content";
import { viewport, EASE } from "@/lib/motion";

export default function WorkPage() {
  return (
    <main data-testid="work-page">
      <PageHero
        eyebrow="Selected prior work"
        lines={[<>Creative direction,</>, <>social management,</>, <>and the <span className="font-serif-i font-normal tracking-normal chrome-text">outreach.</span></>]}
        lead="These cases show how Thai blended the look, the ongoing social presence, and contact with people who already knew the work. Red Dust carries one approximate total. Sean Bell and Shiv Nair describe the work. They are not NARA Studio client engagements."
      />
      <section className="theme-light px-6 lg:px-14 py-20 md:py-28" data-testid="work-grid">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {CASES.map((c, i) => (
            <motion.div
              key={c.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 1, delay: i * 0.1, ease: EASE }}
              className={i === 0 ? "md:col-span-12" : "md:col-span-6"}
            >
              <Link to={`/work/${c.slug}`} data-testid={`work-card-${c.slug}`} className="group block">
                <div className={`img-frame ${i === 0 ? "aspect-[16/8]" : "aspect-[4/3]"}`}>
                  <img src={c.image} alt={c.client} className="grayscale group-hover:grayscale-0" style={{ objectPosition: c.slug === "sean-bell" ? "center 20%" : "center" }} />
                  <div className="absolute top-5 left-5 flex items-center gap-3">
                    <span className="label bg-[#050505] text-white px-3 py-2">{c.tag}</span>
                  </div>
                  <div className="absolute bottom-5 right-5 bg-bone text-ink px-4 py-3">
                    <div className="font-display text-3xl md:text-4xl">{c.stat}</div>
                    <div className="label text-ink-3 !tracking-[0.1em]">{c.statLabel}</div>
                  </div>
                </div>
                <div className="flex justify-between items-start gap-6 pt-6 border-b border-ink/15 pb-6">
                  <div>
                    <span className="label text-ink-3">{c.client}</span>
                    <p className="mt-2 text-ink-3 text-sm max-w-xl">{c.attribution}</p>
                    <h2 className={`font-display mt-2 ${i === 0 ? "text-3xl md:text-5xl" : "text-2xl md:text-3xl"}`}>{c.title}</h2>
                    <p className="mt-3 text-ink-2 text-sm md:text-base max-w-xl">{c.short}</p>
                    {c.proof ? <p className="mt-3 label text-ink-3 !tracking-[0.08em]">{c.proof}</p> : null}
                  </div>
                  <ArrowUpRight className="service-arrow shrink-0 mt-2 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
      <CtaBand title="Start with the people|already close to a sale." secondary={null} />
    </main>
  );
}
