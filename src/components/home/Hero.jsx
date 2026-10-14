import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { Lines } from "../Reveal";
import { asset } from "@/lib/asset";
import { BOOKING_URL, METHOD_STEPS } from "@/lib/content";
import { EASE } from "@/lib/motion";

const fade = (d) => ({ initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { duration: 1, delay: d, ease: EASE } });

export const Hero = () => {
  const ref = useRef(null);
  const videoRef = useRef(null);
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const slow = () => { v.playbackRate = 0.45; };
    slow();
    v.addEventListener("loadedmetadata", slow);
    v.addEventListener("play", slow);
    return () => { v.removeEventListener("loadedmetadata", slow); v.removeEventListener("play", slow); };
  }, []);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const fadeOut = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 60, damping: 20 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), { stiffness: 60, damping: 20 });

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  return (
    <section ref={ref} onMouseMove={onMove} className="theme-dark relative min-h-screen overflow-hidden" data-testid="hero-section">
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)", backgroundSize: "120px 120px" }} />

      <motion.div style={{ y: imgY, rotateX: rx, rotateY: ry, transformPerspective: 1200 }} className="absolute right-0 top-0 h-full w-full md:w-[52%] will-change-transform">
        <motion.div initial={{ clipPath: "inset(0 0 100% 0)" }} animate={{ clipPath: "inset(0 0 0% 0)" }} transition={{ duration: 1.6, ease: EASE, delay: 0.2 }} className="relative h-full w-full">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            data-testid="hero-video"
            poster={asset("/images/hero-poster.jpg")}
            className="h-full w-full object-cover object-[center_32%] grayscale contrast-125"
          >
            <source src={asset("/hero.mp4?v=20261014")} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/50" />
        </motion.div>
      </motion.div>

      <motion.div style={{ y: textY, opacity: fadeOut }} className="relative z-10 px-6 lg:px-14 pt-40 md:pt-48 pb-40 min-h-screen flex flex-col justify-between">
        <div>
          <motion.div {...fade(0.1)} className="flex items-center gap-3 label text-white/55" data-testid="hero-eyebrow">
            <span className="w-8 h-px bg-white/40" />
            NARA Studio
          </motion.div>
          <Lines
            delay={0.3}
            data-testid="hero-headline"
            className="font-display text-[13vw] sm:text-7xl lg:text-8xl xl:text-[7.5rem] mt-10 max-w-5xl"
            lines={[
              <>Personal branding</>,
              <>that makes</>,
              <><span className="font-serif-i chrome-text font-normal normal-case tracking-normal">money.</span></>,
            ]}
          />
          <motion.p {...fade(0.9)} className="mt-10 text-white/60 text-base md:text-lg max-w-xl leading-relaxed" data-testid="hero-subcopy">
            NARA Studio builds a founder's public brand from the people already close to a purchase. Four steps. The writing comes after you can see what they reply to, book, or buy.
          </motion.p>
          <motion.div {...fade(1.05)} className="mt-12 flex flex-wrap gap-4">
            <a href={BOOKING_URL} target="_blank" rel="noreferrer" data-testid="hero-cta-primary" className="btn btn-chrome">
              Activate your brand <ArrowUpRight size={14} className="arrow" />
            </a>
            <Link to="/method" data-testid="hero-cta-secondary" className="btn btn-ghost">
              See the method
            </Link>
          </motion.div>
        </div>

        <motion.div {...fade(1.3)} className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl border-t border-white/10 pt-6" data-testid="hero-stats">
          {METHOD_STEPS.map((s) => (
            <div key={s.step}>
              <div className="font-display text-3xl md:text-5xl chrome-text">{s.step}</div>
              <div className="label text-white/40 mt-2 !tracking-[0.12em]">{s.tag}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div {...fade(2)} className="absolute bottom-8 left-6 lg:left-14 flex items-center gap-3 label text-white/40">
        <ArrowDown size={12} className="animate-bounce" /> Scroll
      </motion.div>
    </section>
  );
};
