import HeroGrid from "./components/HeroGrid";
import CasualInspirations from "./components/CasualInspirations";
import TrendingSection from "./components/TrendingSection";
import ColorExplorer from "./components/ColorExplorer";

function HomePage() {

  return (
    <main className="flex flex-col gap-8 md:gap-12 pb-8">
      <HeroGrid />
      <CasualInspirations />
      <TrendingSection />
      <ColorExplorer />
    </main>
  );
}

export default HomePage;
