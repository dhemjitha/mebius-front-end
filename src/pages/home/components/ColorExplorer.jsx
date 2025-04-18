import { useNavigate } from 'react-router';

function ColorExplorer() {

  const { colors } = {
    colors: [
      { _id: "1", slug: "resin", name: "Resin", hex: "#6C7C59", hexcode: "#6C7C59" },
      { _id: "2", slug: "pimento", name: "Pimento", hex: "#BF3B2F", hexcode: "#BF3B2F" },
      { _id: "3", slug: "bright_ceramic", name: "Bright Ceramic", hex: "#FFA500", hexcode: "#FFA500" },
      { _id: "4", slug: "black", name: "Black", hex: "#000000", hexcode: "#000000" },
      { _id: "5", slug: "white", name: "White", hex: "#FFFFFF", hexcode: "#FFFFFF" }
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