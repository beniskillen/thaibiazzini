import { motion } from "framer-motion";
import { fadeUp, viewport, EASE } from "@/lib/motion";

export const Reveal = ({ children, className, delay = 0, as = "div", ...rest }) => {
  const Tag = motion[as];
  return (
    <Tag className={className} variants={fadeUp} custom={delay} initial="hidden" whileInView="show" viewport={viewport} {...rest}>
      {children}
    </Tag>
  );
};

const lineVariants = (delay, i) => ({
  hidden: { y: "115%" },
  show: { y: 0, transition: { duration: 1.1, delay: delay + i * 0.13, ease: EASE } },
});

export const Lines = ({ lines, className, delay = 0, as = "h1", inView = false, ...rest }) => {
  const Tag = motion[as];
  const trigger = inView ? { whileInView: "show", viewport } : { animate: "show" };
  return (
    <Tag className={className} initial="hidden" {...trigger} {...rest}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.08em] -mb-[0.08em]">
          <motion.span className="block" variants={lineVariants(delay, i)}>
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
};
