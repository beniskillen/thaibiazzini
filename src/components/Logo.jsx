import { Link } from "react-router-dom";

export const Logo = ({ light = true }) => (
  <Link
    to="/"
    aria-label="NARA Studio"
    data-testid="logo-home-link"
    className={`font-display wordmark text-[22px] leading-none ${light ? "text-white" : "text-ink"}`}
  >
    NARA
  </Link>
);
