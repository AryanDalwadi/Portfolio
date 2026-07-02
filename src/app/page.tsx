import { PortfolioShell } from "./portfolio-shell";
import {
  HeroSection,
  ProcessSection,
  ServicesSection,
} from "./portfolio-sections";

export default function Home() {
  return (
    <PortfolioShell>
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
    </PortfolioShell>
  );
}
