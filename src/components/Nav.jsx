import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { AccentToggle } from "./AccentToggle";
import { NAV, BOOKING_URL } from "@/lib/content";

export const Nav = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 glass" data-testid="site-nav">
      <div className="h-[72px] px-6 lg:px-14 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Logo />
          <span className="h-3.5 w-px bg-white/25" aria-hidden="true" />
          <span className="text-[13px] leading-none text-white/70 whitespace-nowrap">NARA Studio</span>
        </div>
        <nav className="hidden md:flex items-center gap-10">
          {NAV.map((n) => (
            <NavLink
              key={n.path}
              to={n.path}
              data-testid={n.testId}
              className={({ isActive }) => `label link-line transition-colors duration-300 ${isActive ? "text-white" : "text-white/55 hover:text-white"}`}
            >
              {n.name}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <AccentToggle />
          <a href={BOOKING_URL} target="_blank" rel="noreferrer" data-testid="nav-cta-valuation" className="btn btn-chrome !h-10 !px-5 hidden sm:inline-flex">
            Activate your brand <ArrowUpRight size={14} className="arrow" />
          </a>
          <button data-testid="nav-menu-toggle" onClick={() => setOpen(!open)} className="md:hidden text-white p-2" aria-label="Menu">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            data-testid="nav-mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden border-t border-white/10 bg-[#050505]"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {NAV.map((n) => (
                <Link key={n.path} to={n.path} onClick={() => setOpen(false)} data-testid={`${n.testId}-mobile`} className="font-display text-4xl text-white">
                  {n.name}
                </Link>
              ))}
              <a href={BOOKING_URL} target="_blank" rel="noreferrer" data-testid="nav-cta-valuation-mobile" className="btn btn-chrome w-fit">
                Activate your brand <ArrowUpRight size={14} className="arrow" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
