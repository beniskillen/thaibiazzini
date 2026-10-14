import { motion } from "framer-motion";
import { FUNNEL } from "@/lib/content";
import { viewport } from "@/lib/motion";

export const ProofFunnel = ({ light = false }) => (
  <div className="flex flex-col gap-3" data-testid="proof-funnel">
    {[...FUNNEL].reverse().map((t, i) => (
      <motion.div
        key={t.level}
        initial={{ opacity: 0, scaleX: 0.6 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={viewport}
        transition={{ duration: 1, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
        style={{ width: `${t.width}%`, transformOrigin: "left" }}
        className={`group relative border px-5 py-4 md:px-6 md:py-5 flex items-start justify-between gap-6 min-w-[260px] transition-colors duration-500 ${
          light ? "border-ink/15 hover:bg-ink hover:text-bone" : "border-white/15 hover:bg-white hover:text-ink"
        }`}
        data-testid={`funnel-tier-${t.level}`}
      >
        <div className="min-w-0">
          <div className="flex items-center gap-3">
            <span className="label opacity-50">{t.level}</span>
            <span className="font-display-wide text-lg md:text-2xl">{t.title}</span>
          </div>
          <p className="label mt-2 opacity-50 !tracking-[0.08em] !normal-case hidden sm:block truncate">{t.detail}</p>
        </div>
        <span className="crosshair relative !w-3 !h-3 opacity-40 mt-2 shrink-0" style={{ position: "relative" }} />
      </motion.div>
    ))}
    <div className="flex items-center gap-3 mt-4">
      <span className="h-px flex-1 bg-current opacity-20" />
      <span className="label opacity-60">Posts come after a sale</span>
    </div>
  </div>
);
