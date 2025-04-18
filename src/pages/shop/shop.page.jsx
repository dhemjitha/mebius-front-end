import { useParams, useLocation } from "react-router";
import { products, categories } from "@/lib/mockData";
import ProductCard from "@/pages/home/components/ProductCard";
import { Skeleton } from "@/components/ui/skeleton";
import ShopFilters from "./components/ShopFilters";
import { useMemo } from "react";

function ShopPage() {
  const { category } = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const color = queryParams.get("color");

  // Filter products based on category and color
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by category if specified
    if (category) {
      const selectedCategory = categories.find(c => c.slug === category);
      if (selectedCategory) {
        result = result.filter(product => product.categoryId === selectedCategory._id);
      }
    }

    // Filter by color if specified (not implemented for demo)

    return result;
  }, [category, color]);

  // Create loading skeleton placeholders for products
  const ProductSkeleton = () => (
    <div className="space-y-3">
      <Skeleton className="h-96 w-full rounded-2xl" />
      <Skeleton className="h-5 w-2/3" />
      <Skeleton className="h-4 w-1/3" />
    </div>
  );

  return (
    <div className="px-4 sm:px-6 lg:px-16 py-8 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Filters */}
        <div className="col-span-1">
          <ShopFilters />
        </div>

        {/* Products Grid */}
        <div className="col-span-1 md:col-span-3">
          <h1 className="text-2xl font-bold mb-6">
            {category ? `${category.charAt(0).toUpperCase() + category.slice(1)}` : "All Products"}
          </h1>

          {filteredProducts.length === 0 ? (
            <div>No products found</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product._id} {...product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ShopPage;
