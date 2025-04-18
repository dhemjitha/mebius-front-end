import { useNavigate } from 'react-router';

function ColorExplorer() {
  
  const { colors } = {
    colors: [
      { _id: "1", name: "RED PASTEL", hexcode: "#e86464", slug: "red-pastel" },
      { _id: "2", name: "LIME GREEN", hexcode: "#c2e359", slug: "lime-green" },
      { _id: "3", name: "NAVY BLUE", hexcode: "#2d3b6c", slug: "navy-blue" },
      { _id: "4", name: "CLEAN WHITE", hexcode: "#f5f5f5", slug: "clean-white" },
      { _id: "5", name: "BLUE SKY", hexcode: "#6bb5e8", slug: "blue-sky" },
      { _id: "6", name: "PURPLE", hexcode: "#9c59e3", slug: "purple" },
      { _id: "7", name: "PINK", hexcode: "#e85986", slug: "pink" },
      { _id: "8", name: "YELLOW", hexcode: "#f7ca4d", slug: "yellow" },
      { _id: "9", name: "DARK GREEN", hexcode: "#2a7d5f", slug: "dark-green" }
    ]
  };
  const navigate = useNavigate();
  
  const handleColorClick = (colorSlug) => {
    navigate(`/shop?color=${colorSlug}`, { preventScrollReset: false });
  };
  
  return (
    <section className="px-4 lg:px-16 pt-8 md:pt-16 lg:pt-20 pb-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-full md:w-96">
          Explore <br />
          by Colors
        </h1>
        <div className="flex flex-wrap gap-2">
          {colors?.map((option) => (
            <button
              key={option._id}
              className={`flex items-center gap-2 px-3 sm:px-4 border-black bg-gray-100 py-1.5 sm:py-2 rounded-full border transition-all hover:bg-gray-200 text-sm sm:text-base`}
              onClick={() => handleColorClick(option.slug)}
            >
              <span
                className="w-4 sm:w-5 h-4 sm:h-5 rounded-full inline-block border border-gray-200"
                style={{ backgroundColor: option.hexcode }}
                aria-hidden="true"
              ></span>
              <span className="font-medium">{option.name}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ColorExplorer; 