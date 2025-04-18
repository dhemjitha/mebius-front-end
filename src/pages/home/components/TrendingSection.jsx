import { useState, useMemo } from "react";
import SimpleProductCard from "./SimpleProductCard";
import CategoryButton from "./CategoryButton";
import { useMediaQuery } from "@uidotdev/usehooks";

function TrendingSection() {

  const products = [
    {
      _id: "1",
      name: "Casual Shoe",
      price: 225,
      discountPrice: 99.95,
      imageUrl: "https://fed-2-frontend-pre.vercel.app/assets/images/2507976b1988e6d9a08599fcba5247bd.png",
      categoryId: "1", // SHOES
      featured: true
    },
    {
      _id: "2",
      name: "Skateboard Shoe",
      price: 235,
      discountPrice: 99.95,
      imageUrl: "https://fed-2-frontend-pre.vercel.app/assets/images/5c482fd10ff96fad137ae5ca5aa7a561.png",
      categoryId: "1", // SHOES
      featured: true
    },
    {
      _id: "3",
      name: "Air Skateboard Shoe",
      price: 125,
      discountPrice: 99.95,
      imageUrl: "https://fed-2-frontend-pre.vercel.app/assets/images/02536ab1a554d315fc11f4ef6f9c1302.png",
      categoryId: "1", // SHOES
      featured: true
    },
    {
      _id: "4",
      name: "High Sole Skateboard Shoe",
      price: 235,
      discountPrice: 99.95,
      imageUrl: "https://fed-2-frontend-pre.vercel.app/assets/images/10fd34a19ed897401decf4c2dd4806d5.png",
      categoryId: "1", // SHOES
      featured: true
    },
    {
      _id: "5",
      name: "Basket Shoe",
      price: 135,
      discountPrice: 99.95,
      imageUrl: "https://fed-2-frontend-pre.vercel.app/assets/images/df950869c406241f2f48f416d0807241.png",
      categoryId: "1", // SHOES
      featured: true
    },
    {
      _id: "6",
      name: "Sportwear Shoe",
      price: 125,
      discountPrice: 99.95,
      imageUrl: "https://fed-2-frontend-pre.vercel.app/assets/images/476b2a224ae85cd40fd6b1c7d34bc9ae.png",
      categoryId: "1", // SHOES
      featured: true
    },
    {
      _id: "7",
      name: "Nike Dri-FIT Training Shorts",
      price: 40,
      discountPrice: 99.95,
      imageUrl: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f93fec70-da18-44f9-a18d-27a5edd24037/M+NK+DF+FORM+7IN+UL+SHORT.png",
      categoryId: "2", // SHORTS
      featured: true
    },
    {
      _id: "8",
      name: "Nike Sportswear Woven Shorts",
      price: 50,
      discountPrice: 99.95,
      imageUrl: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4d2bc9f3-6a55-4cd0-81f1-f1bd9bdb9723/M+NK+CLUB+FLOW+SHORT.png",
      categoryId: "2", // SHORTS
      featured: true
    },
    {
      _id: "9",
      name: "Nike Basketball Dri-FIT Shorts",
      price: 45,
      discountPrice: 99.95,
      imageUrl: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0588a1a7-f96c-4983-b10e-50e0dc505e45/M+NK+DF+WVN+ICON+6IN+SHORT+STF.png",
      categoryId: "2", // SHORTS
      featured: true
    },
    {
      _id: "10",
      name: "Nike Dri-FIT Training T-Shirt",
      price: 35,
      discountPrice: 99.95,
      imageUrl: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/674515e1-3d58-4635-a701-7d7e6c37b4c0/M+NK+DF+PRIMARY+STMT+SS.png",
      categoryId: "3", // T-SHIRTS
      featured: true
    },
    {
      _id: "11",
      name: "Nike Air Max Graphic T-Shirt",
      price: 30,
      discountPrice: 99.95,
      imageUrl: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/553a3029-81d3-48c5-a176-6a98c9392e41/M+NSW+TEE+M90+OC+HBR+PK4.png",
      categoryId: "3", // T-SHIRTS
      featured: true
    },
    {
      _id: "12",
      name: "Nike Sportswear Swoosh T-Shirt",
      price: 28,
      discountPrice: 99.95,
      imageUrl: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0e41a9d9-029d-4ec5-af19-182ee2b5721e/M+NSW+TEE+ICON+SWOOSH.png",
      categoryId: "3", // T-SHIRTS
      featured: true
    },
    {
      _id: "13",
      name: "Nike Sportswear Club Joggers",
      price: 60,
      discountPrice: 99.95,
      imageUrl: "https://static.nike.com/a/images/t_prod/w_1920,c_limit,f_auto,q_auto/ebaf91e3-8e79-4dac-8947-169111f38fff/image.jpg",
      categoryId: "4", // PANTS
      featured: true
    },
    {
      _id: "14",
      name: "Nike ACG Trail Pants",
      price: 120,
      discountPrice: 99.95,
      imageUrl: "https://static.nike.com/a/images/t_prod/w_1920,c_limit,f_auto,q_auto/c25018a6-af5e-4f02-afff-aef9c5f1ae2c/pdp.jpg",
      categoryId: "4", // PANTS
      featured: true
    },
    {
      _id: "15",
      name: "Nike Training Essentials Pants",
      price: 70,
      discountPrice: 99.95,
      imageUrl: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8e169e49-e6dc-4f84-9468-4d8b0864b997/M+NK+DF+PHENOM+ELITE+KNIT+PANT.png",
      categoryId: "4", // PANTS
      featured: true
    },
    {
      _id: "16",
      name: "Nike Everyday Plus Cushioned Socks",
      price: 18,
      discountPrice: 99.95,
      imageUrl: "https://i8.amplience.net/i/jpl/sz_506453_a?qlt=92&w=600&h=464&v=1&fmt=auto",
      categoryId: "5", // SOCKS
      featured: true
    },
    {
      _id: "17",
      name: "Nike Dri-FIT Running Socks",
      price: 20,
      discountPrice: 99.95,
      imageUrl: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/78e7ff88-6ef9-49e1-bdaf-336d4f40e08a/U+NK+UNICORN+CSH+AKL+1PR+-+160.png",
      categoryId: "5", // SOCKS
      featured: true
    },
    {
      _id: "18",
      name: "Nike Performance Crew Socks",
      price: 18,
      discountPrice: 99.95,
      imageUrl: "https://cdn.media.amplience.net/i/pgatss/2000000002501-57-01_pc?$large$&fmt=auto",
      categoryId: "5", // SOCKS
      featured: true
    },
  ];

  const categories = [
    {
      _id: "1",
      name: "Shoes"
    },
    {
      _id: "2",
      name: "Shorts"
    },
    {
      _id: "3",
      name: "T-Shirts"
    },
    {
      _id: "4",
      name: "Pants"
    },
    {
      _id: "5",
      name: "Socks"
    },
  ];

  const isMediumDevice = useMediaQuery(
    "only screen and (min-width : 768px)"
  );

  const [selectedCategoryId, setSelectedCategoryId] = useState(
    "1"
  );

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