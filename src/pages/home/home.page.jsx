import HeroGrid from "./components/HeroGrid";
import CasualInspirations from "./components/CasualInspirations";
import TrendingSection from "./components/TrendingSection";
import ColorExplorer from "./components/ColorExplorer";
import Hero from "./components/Hero";
function HomePage() {

  return (
    <main className="flex flex-col gap-8 md:gap-12 pb-8">
      <HeroGrid />
      <CasualInspirations />
      <TrendingSection />
      <ColorExplorer />
      <Hero />
    </main>
  );
}

export default HomePage;
