import { Hero } from "@/components/home/Hero";
import { Marquee } from "@/components/Marquee";
import { Shift } from "@/components/home/Shift";
import { Problem } from "@/components/home/Problem";
import { Method } from "@/components/home/Method";
import { CaseFeature } from "@/components/home/CaseFeature";
import { Builds } from "@/components/home/Builds";
import { Founder } from "@/components/home/Founder";
import { CtaBand } from "@/components/CtaBand";

export default function Home() {
  return (
    <main data-testid="home-page">
      <Hero />
      <Marquee />
      <Method />
      <Shift />
      <Problem />
      <CaseFeature />
      <Builds />
      <Founder />
      <CtaBand title="Start with the people|already close to a sale." />
    </main>
  );
}
