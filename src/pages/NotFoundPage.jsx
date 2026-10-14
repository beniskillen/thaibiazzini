import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { BOOKING_URL } from "@/lib/content";

export default function NotFoundPage() {
  return (
    <main data-testid="not-found-page">
      <PageHero
        eyebrow="404 Error"
        lines={[<>Page not</>, <><span className="font-serif-i font-normal tracking-normal chrome-text">found.</span></>]}
        lead="The requested page could not be located. It may have moved or no longer exists."
        aside={
          <div className="flex flex-col gap-4">
            <Link to="/" className="btn btn-ghost w-fit">
              <ArrowLeft size={14} /> Return to homepage
            </Link>
            <a href={BOOKING_URL} target="_blank" rel="noreferrer" className="btn btn-chrome w-fit">
              Activate your brand <ArrowUpRight size={14} className="arrow" />
            </a>
          </div>
        }
      />
    </main>
  );
}
