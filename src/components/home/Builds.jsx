import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "../Reveal";
import { SectionHead } from "../Section";
import { BUILDS } from "@/lib/content";

export const Builds = () => (
  <section className="theme-light px-6 lg:px-14 py-28 md:py-40" data-testid="builds-section">
    <SectionHead light eyebrow="What you leave with" title={<>The list, the message, and a <span className="font-serif-i font-normal tracking-normal">record.</span></>} />
    <div className="mt-20 ruled border-t border-b border-ink/15">
      {BUILDS.map((b, i) => (
        <Reveal key={b.n} delay={i} className="service-row grid grid-cols-12 gap-4 py-7 md:py-9 items-baseline group cursor-default" data-testid={`build-row-${b.n}`}>
          <span className="col-span-2 md:col-span-1 label text-ink-3">{b.n}</span>
          <h3 className="col-span-10 md:col-span-4 font-display-wide text-2xl md:text-3xl">{b.title}</h3>
          <p className="col-span-10 col-start-3 md:col-span-6 md:col-start-6 text-ink-2 text-sm md:text-base leading-relaxed">{b.desc}</p>
          <ArrowUpRight className="service-arrow hidden md:block col-span-1 justify-self-end text-ink-3 group-hover:text-ink" size={20} />
        </Reveal>
      ))}
    </div>
    <Reveal className="mt-14">
      <Link to="/services" data-testid="builds-services-link" className="btn btn-ink-ghost">
        View services <ArrowUpRight size={14} className="arrow" />
      </Link>
    </Reveal>
  </section>
);
