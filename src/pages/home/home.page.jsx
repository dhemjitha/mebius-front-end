import HeroGrid from "./components/HeroGrid";
import CasualInspirations from "./components/CasualInspirations";

function HomePage() {
  const colorOptions = [
    { id: "red-pastel", name: "RED PASTEL", color: "#e86464" },
    { id: "lime-green", name: "LIME GREEN", color: "#c2e359" },
    { id: "navy-blue", name: "NAVY BLUE", color: "#2d3b6c" },
    { id: "clean-white", name: "CLEAN WHITE", color: "#f5f5f5" },
    { id: "blue-sky", name: "BLUE SKY", color: "#6bb5e8" },
    { id: "purple", name: "PURPLE", color: "#9c59e3" },
    { id: "pink", name: "PINK", color: "#e85986" },
    { id: "yellow", name: "YELLOW", color: "#f7ca4d" },
    { id: "dark-green", name: "DARK GREEN", color: "#2a7d5f" },
  ];

  return (
    <main className="flex flex-col gap-8 md:gap-12 pb-8">
      <HeroGrid />
      <CasualInspirations />
      {/* <TrendingSection /> */}
      {/* <ColorExplorer /> */}
    </main>
  );
}

export default HomePage;
