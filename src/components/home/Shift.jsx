import { asset } from "@/lib/asset";
import { motion } from "framer-motion";
import { Reveal, Lines } from "../Reveal";
import { Eyebrow } from "../Section";
import { viewport } from "@/lib/motion";

const COLS = [
  { k: "Posting first", steps: ["Post", "Wait", "Chase reach", "Guess"], dim: true },
  { k: "This work", steps: ["Evaluate", "Activate", "Iterate", "Vision"] },
];

export const Shift = () => (
  <section className="theme-light px-6 lg:px-14 py-28 md:py-40" data-testid="shift-section">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
      <div className="lg:col-span-7">
        <Reveal><Eyebrow>How it happens</Eyebrow></Reveal>
        <Lines
          as="h2"
          inView
          className="font-display text-4xl sm:text-5xl lg:text-7xl mt-8"
          lines={[<>The brand is published</>, <>from what already</>, <><span className="font-serif-i font-normal tracking-normal">works.</span></>]}
        />
        <Reveal delay={3} className="mt-10 max-w-xl text-ink-2 text-base md:text-lg leading-relaxed space-y-5">
          <p>You already have people who bought, followed, referred you, or asked a question.</p>
          <p>We contact them in order, and write down what gets a reply and what gets a sale. Posts, the offer line, and the next campaign are taken from that record. That is revenue-generating personal branding in practice.</p>
        </Reveal>
      </div>

      <div className="lg:col-span-5 lg:pt-20">
        <Reveal delay={2} className="img-frame aspect-[4/3] mb-10 hidden lg:block">
          <img src={asset("/images/chrome-sphere.jpg")} alt="Chrome sphere on bone paper" />
        </Reveal>
        <div className="grid grid-cols-2 gap-px bg-ink/15 border border-ink/15">
          {COLS.map((c, ci) => (
            <div key={c.k} className={`p-6 ${c.dim ? "bg-white" : "bg-ink text-bone"}`} data-testid={`shift-col-${ci}`}>
              <span className={`label ${c.dim ? "text-ink-3" : "text-bone/50"}`}>{c.k}</span>
              <ol className="mt-6 space-y-3">
                {c.steps.map((s, i) => (
                  <motion.li
                    key={s}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={viewport}
                    transition={{ delay: 0.3 + i * 0.1 + ci * 0.2, duration: 0.6 }}
                    className={`font-display-wide text-xl md:text-2xl flex items-center gap-3 ${c.dim ? "text-ink-3 line-through decoration-1" : ""}`}
                  >
                    <span className="label opacity-40 !tracking-normal">{String(i + 1).padStart(2, "0")}</span> {s}
                  </motion.li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
