import { Separator } from "@/components/ui/separator";
import { useGetCategories, useGetProducts } from "@/lib/hooks";
import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import ProductCards from "./ProductCards";
import Tab from "./Tab";

function Products(props) {
  const {
    data: products,
    isLoading: isProductsLoading,
    error: productsError,
  } = useGetProducts();

  const {
    data: categories,
    isLoading: isCategoriesLoading,
    error: categoriesError,
  } = useGetCategories();

  const [selectedCategoryId, setSelectedCategoryId] = useState("ALL");
  const filteredProducts =
    selectedCategoryId === "ALL"
      ? products
      : products?.filter((product) => product.categoryId === selectedCategoryId);

  const handleTabClick = (_id) => {
    setSelectedCategoryId(_id);
  };

  if (isProductsLoading || isCategoriesLoading) {
    return (
      <section className="px-8 py-8">
        <h2 className="text-4xl font-bold">Our Top Products</h2>

        <Separator className="mt-2" />
        <div className="mt-4 flex items-center gap-4">
          <Skeleton className="h-16" />
        </div>
        <div className="grid grid-cols-4 gap-4 mt-4">
          <Skeleton className="h-80" />
          <Skeleton className="h-80" />
          <Skeleton className="h-80" />
          <Skeleton className="h-80" />
        </div>
      </section>
    );
  }

  if (productsError || categoriesError) {
    return (
      <section className="px-8 py-8">
        <h2 className="text-4xl font-bold">Our Top Products</h2>

        <Separator className="mt-2" />
        <div className="mt-4 flex items-center gap-4"></div>
        <div className="mt-4">
          <p className="text-red-500">{`Error fetching products or categories`}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="px-8 py-8">
      <h2 className="text-4xl font-bold">Our Top Products</h2>
      <Separator className="mt-2" />
      <div className="mt-4 flex items-center gap-4">
        {[...categories, { _id: "ALL", name: "All" }].map((category) => (
          <Tab
            key={category._id}
            _id={category._id}
            selectedCategoryId={selectedCategoryId}
            name={category.name}
            onTabClick={handleTabClick}
          />
        ))}
      </div>
      <ProductCards products={filteredProducts} />
    </section>
  );
}

export default Products;
