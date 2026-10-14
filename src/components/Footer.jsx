import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";
import { NAV, BOOKING_URL } from "@/lib/content";

export const Footer = () => (
  <footer className="theme-dark border-t border-white/10" data-testid="site-footer">
    <div className="px-6 lg:px-14 py-16 grid grid-cols-1 md:grid-cols-12 gap-12">
      <div className="md:col-span-5 flex flex-col gap-8">
        <div className="flex flex-col gap-3">
          <Logo />
          <p className="text-sm text-white/80">NARA Studio</p>
        </div>
        <p className="text-white/55 max-w-sm text-sm leading-relaxed">
          Personal branding that works for you. The mechanism is revenue-generating personal branding: evaluate, activate, iterate, then vision.
        </p>
      </div>
      <div className="md:col-span-3 flex flex-col gap-4">
        <span className="label text-white/40">Index</span>
        {NAV.map((n) => (
          <Link key={n.path} to={n.path} data-testid={`footer-${n.testId}`} className="text-white/75 hover:text-white link-line w-fit text-sm">
            {n.name}
          </Link>
        ))}
        <Link to="/work/red-dust" data-testid="footer-link-red-dust" className="text-white/75 hover:text-white link-line w-fit text-sm">Red Dust case</Link>
        <Link to="/privacy" data-testid="footer-link-privacy" className="text-white/75 hover:text-white link-line w-fit text-sm">Privacy policy</Link>
      </div>
      <div className="md:col-span-4 flex flex-col gap-6 md:items-end">
        <p className="font-display text-4xl md:text-5xl md:text-right">Evaluate.<br />Activate.<br />Iterate.<br />Vision.</p>
        <a href={BOOKING_URL} target="_blank" rel="noreferrer" data-testid="footer-cta-valuation" className="btn btn-chrome w-fit">
          Activate your brand <ArrowUpRight size={14} className="arrow" />
        </a>
        <span className="label text-white/40">Sydney · EN / PT / ES</span>
      </div>
    </div>
    <div className="px-6 lg:px-14 py-6 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-3 label text-white/35">
      <span>© {new Date().getFullYear()} NARA Studio · Thai Biazzini</span>
      <span>Sydney, Australia</span>
    </div>
  </footer>
);
