import { useState, useMemo } from "react";
import SimpleProductCard from "./SimpleProductCard";
import CategoryButton from "./CategoryButton";
import { products, categories } from "@/lib/mockData";
import { useMediaQuery } from "@uidotdev/usehooks";

function TrendingSection() {
  const isMediumDevice = useMediaQuery(
    "only screen and (min-width : 768px)"
  );

  const [selectedCategoryId, setSelectedCategoryId] = useState(
    "67dee99f12d36efdd1027b40"
  ); // Default to SHOES

  const handleCategoryClick = (categoryId) => {
    setSelectedCategoryId(categoryId);
  };

  // Get trending/featured products
  const trendingProducts = useMemo(() => {
    return products.filter(product => product.featured);
  }, []);

  // Filter products by selected category
  const filteredProducts = useMemo(() => {
    return trendingProducts.filter(
      (product) => product.categoryId === selectedCategoryId
    );
  }, [trendingProducts, selectedCategoryId]);

  /**
   * Helper function to determine colSpan based on index pattern
   * Every 3rd product (indices 2, 5, 8, etc.) will have colSpan=2
   */
  const getColSpan = (index) => {
    // For mobile, all items will be single column
    return index + 1 === 3 || index + 1 === 4 ? 2 : 1;
  };
  
  return (
    <section className="px-4 lg:px-16">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-0">Trending Now</h2>
        
        <div className="flex space-x-2 overflow-x-auto pb-2 md:pb-0">
          {categories.map((category) => (
            <CategoryButton
              key={category._id}
              active={selectedCategoryId === category._id}
              onClick={() => handleCategoryClick(category._id)}
            >
              {category.name}
            </CategoryButton>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {filteredProducts.map((product, index) => (
          <SimpleProductCard
            key={product._id}
            product={product}
            colSpan={isMediumDevice ? getColSpan(index) : 1}
          />
        ))}
      </div>
    </section>
  );
}

export default TrendingSection;
