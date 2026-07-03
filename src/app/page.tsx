import { PortfolioShell } from "./portfolio-shell";
import {
  HeroSection,
  ServicesSection,
  WhyMeSection,
} from "./portfolio-sections";

export default function Home() {
  return (
    <PortfolioShell>
      <HeroSection />
      <ServicesSection />
      <WhyMeSection />
    </PortfolioShell>
  );
}
