import { useNavigate, useLocation, useParams } from "react-router";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

function ShopFilters({ categories, colors }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { category } = useParams();
  const queryParams = new URLSearchParams(location.search);
  const selectedColor = queryParams.get("color");

  const handleCategoryClick = (categorySlug) => {
    if (category === categorySlug) {
      navigate("/shop");
    } else {
      navigate(`/shop/${categorySlug}${location.search}`);
    }
  };

  const handleColorClick = (colorSlug) => {
    const params = new URLSearchParams(location.search);

    if (selectedColor === colorSlug) {
      params.delete("color");
    } else {
      params.set("color", colorSlug);
    }

    const queryString = params.toString();
    const path = category ? `/shop/${category}` : "/shop";
    navigate(`${path}${queryString ? `?${queryString}` : ""}`);
  };

  const clearAllFilters = () => {
    navigate("/shop");
  };

  const hasActiveFilters = category || selectedColor;

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium mb-3">Categories</h3>
        <div className="space-y-2">
          {categories.map((cat) => (
            <Button
              key={cat._id}
              variant={category === cat.slug ? "default" : "ghost"}
              className="justify-start w-full"
              onClick={() => handleCategoryClick(cat.slug)}
            >
              {cat.name}
            </Button>
          ))}
        </div>
      </div>

      <Separator />

      <div>
        <h3 className="text-lg font-medium mb-3">Colors</h3>
        <div className="flex flex-wrap gap-2">
          {colors.map((color) => (
            <div
              key={color.slug}
              onClick={() => handleColorClick(color.slug)}
              className={`cursor-pointer w-8 h-8 rounded-full border-2 ${selectedColor === color.slug
                ? "ring-2 ring-black ring-offset-2"
                : "ring-1 ring-gray-300"
                }`}
              style={{ backgroundColor: color.hex }}
              title={color.name}
            />
          ))}
        </div>
      </div>

      {hasActiveFilters && (
        <div className="pt-4">
          <Button variant="outline" onClick={clearAllFilters} className="w-full">
            Clear All Filters
          </Button>
        </div>
      )}
    </div>
  );
}

export default ShopFilters;
