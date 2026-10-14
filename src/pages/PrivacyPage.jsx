import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/Section";
import { CtaBand } from "@/components/CtaBand";

export default function PrivacyPage() {
  return (
    <main data-testid="privacy-page">
      <PageHero
        eyebrow="Privacy Policy"
        lines={[<>How application</>, <>details are <span className="font-serif-i font-normal tracking-normal chrome-text">used.</span></>]}
        lead="NARA Studio collects the information submitted through this website exclusively to assess commercial fit, evaluate warm market equity, and reply regarding collaboration."
      />

      <section className="theme-light px-6 lg:px-14 py-20 md:py-28" data-testid="privacy-content">
        <div className="max-w-3xl mx-auto space-y-12">
          <div>
            <Reveal><Eyebrow>Data handling</Eyebrow></Reveal>
            <Reveal as="h2" delay={1} className="font-display text-3xl sm:text-4xl mt-6">
              Respect for your relationships and business intelligence.
            </Reveal>
            <Reveal delay={2} className="mt-8 space-y-6 text-ink-2 text-base md:text-lg leading-relaxed">
              <p>
                NARA Studio collects the information in the application form to assess whether the Warm Market Activation Method is a fit and to reply about next steps.
              </p>
              <p>
                We do not ask for payment details, passwords, bank account numbers, or unnecessary sensitive personal data through this website.
              </p>
              <p>
                Submitted applications are transmitted securely. Do not include confidential customer personally-identifiable data, private donor financial records, or anything you would not send in an introductory commercial email.
              </p>
              <p className="font-medium text-ink">
                We will not sell, rent, or distribute your information to third-party data brokers or marketing lists.
              </p>
              <p>
                If you ever wish to have your submitted details updated or removed from our records after submitting an inquiry, simply let us know via reply to any correspondence from Thai or the studio.
              </p>
            </Reveal>
          </div>

          <div className="border-t border-ink/15 pt-8 flex justify-between items-center text-sm label text-ink-3">
            <span>Last reviewed · 2026</span>
            <span>NARA Studio · Sydney, Australia</span>
          </div>
        </div>
      </section>

      <CtaBand
        title="Ready to value the equity|sitting in your market?"
        secondary={{ label: "Read the method", to: "/method" }}
      />
    </main>
  );
}
