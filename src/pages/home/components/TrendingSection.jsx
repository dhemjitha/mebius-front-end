import { useState, useMemo } from "react";
import SimpleProductCard from "./SimpleProductCard";
import CategoryButton from "./CategoryButton";
import { useMediaQuery } from "@uidotdev/usehooks";

function TrendingSection() {
  // Mock data moved inside the component
  const products = [
    {
      _id: "1",
      name: "Air Jordan 1 Mid",
      price: 120.00,
      discountPrice: 99.95,
      imageUrl: "https://fed-2-frontend-pre.vercel.app/assets/images/2507976b1988e6d9a08599fcba5247bd.png",
      categoryId: "67dee99f12d36efdd1027b40", // SHOES
      featured: true
    },
    {
      _id: "2",
      name: "Nike Dri-FIT T-Shirt",
      price: 35.00,
      discountPrice: null,
      imageUrl: "https://cdn11.bigcommerce.com/s-5e8c3uvulz/images/stencil/original/products/6504/28079/nike-academy-spurs-nike-men-dri-fit-academy-t-shirt-2023__39001.1704888052.jpg?c=1",
      categoryId: "67dee99f12d36efdd1027b41", // APPAREL
      featured: true
    },
    {
      _id: "3",
      name: "Adidas Ultraboost",
      price: 180.00,
      discountPrice: 150.00,
      imageUrl: "https://www.sportspar.de/media/image/42/36/3e/GZ0449-1_600x600.jpg",
      categoryId: "67dee99f12d36efdd1027b40", // SHOES
      featured: true
    },
    {
      _id: "4",
      name: "Under Armour Shorts",
      price: 40.00,
      discountPrice: null,
      imageUrl: "https://i8.amplience.net/i/jpl/jd_612650_a",
      categoryId: "67dee99f12d36efdd1027b41", // APPAREL
      featured: true
    },
    {
      _id: "5",
      name: "Nike Basketball",
      price: 29.99,
      discountPrice: null,
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfi1rzfy0rLBGXNy886z11Q8MngGOsgs76SQ&s",
      categoryId: "67dee99f12d36efdd1027b42", // EQUIPMENT
      featured: true
    },
    {
      _id: "6",
      name: "Puma RS-X Sneakers",
      price: 110.00,
      discountPrice: 85.00,
      imageUrl: "https://images-na.ssl-images-amazon.com/images/I/81i3tRQSWSL._SS400_.jpg",
      categoryId: "67dee99f12d36efdd1027b40", // SHOES
      featured: true
    }
  ];

  const categories = [
    {
      _id: "67dee99f12d36efdd1027b40",
      name: "Shoes"
    },
    {
      _id: "67dee99f12d36efdd1027b41",
      name: "Apparel"
    },
    {
      _id: "67dee99f12d36efdd1027b42",
      name: "Equipment"
    }
  ];

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
    <section className="px-4 lg:px-16 py-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
        <h2 className="text-2xl sm:text-3xl">Trending</h2>
        <div className="flex flex-wrap items-center gap-2 sm:gap-x-4 max-w-full overflow-x-auto pb-2">
          {categories?.map((category) => (
            <CategoryButton
              key={category._id}
              category={category}
              isSelected={category._id === selectedCategoryId}
              onClick={handleCategoryClick}
            />
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4 gap-4 md:gap-x-4 md:gap-y-8">
        {filteredProducts?.map((product, index) => (
          <SimpleProductCard
            key={product._id}
            imageUrl={product.imageUrl}
            name={product.name}
            price={product.price}
            colSpan={isMediumDevice ? getColSpan(index) : 1}
          />
        ))}
      </div>
    </section>
  );
}

export default TrendingSection;