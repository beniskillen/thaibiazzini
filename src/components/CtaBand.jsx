import { asset } from "@/lib/asset";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal, Lines } from "./Reveal";
import { Eyebrow } from "./Section";
import { BOOKING_URL } from "@/lib/content";
import { viewport } from "@/lib/motion";

export const CtaBand = ({ title = "Before you buy more reach, activate the trust you already have.", secondary = { label: "View selected work", to: "/work" } }) => (
  <section className="theme-dark relative overflow-hidden" data-testid="cta-band">
    <motion.img
      src={asset("/images/chrome-orchid.jpg")}
      alt=""
      initial={{ opacity: 0, scale: 1.15, rotate: -6 }}
      whileInView={{ opacity: 0.9, scale: 1, rotate: 0 }}
      viewport={viewport}
      transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
      className="absolute -right-24 -top-24 w-[520px] md:w-[720px] pointer-events-none select-none mix-blend-screen"
    />
    <div className="relative px-6 lg:px-14 py-32 md:py-44 grid grid-cols-1 lg:grid-cols-12 gap-12">
      <div className="lg:col-span-8">
        <Reveal><Eyebrow>Start here</Eyebrow></Reveal>
        <Lines
          as="h2"
          inView
          lines={title.split("|")}
          className="font-display text-4xl sm:text-5xl lg:text-6xl mt-8 max-w-3xl"
        />
        <Reveal delay={2} className="mt-8 text-white/60 max-w-xl text-base md:text-lg leading-relaxed">
          On the call we look at who already knows you, and which of them is closest to buying. You leave with an order to contact them in.
        </Reveal>
        <Reveal delay={3} className="mt-12 flex flex-wrap gap-4">
          <a href={BOOKING_URL} target="_blank" rel="noreferrer" data-testid="cta-band-primary" className="btn btn-chrome">
            Activate your brand <ArrowUpRight size={14} className="arrow" />
          </a>
          {secondary && (
            <Link to={secondary.to} data-testid="cta-band-secondary" className="btn btn-ghost">
              {secondary.label}
            </Link>
          )}
        </Reveal>
      </div>
    </div>
  </section>
);
