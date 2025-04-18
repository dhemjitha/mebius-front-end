import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ShoppingBag } from "lucide-react";
import { useParams } from "react-router";
import { useCart } from "@/lib/CartContext";
import { toast } from "sonner";

function ProductPage() {
  const [selectedSize, setSelectedSize] = useState(null);
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = {
    _id: "3",
    name: "Air Skateboard Shoe",
    price: 125,
    discountPrice: 99.95,
    imageUrl: "https://fed-2-frontend-pre.vercel.app/assets/images/02536ab1a554d315fc11f4ef6f9c1302.png",
    categoryId: "1",
    featured: true,
    description: "Experience ultimate comfort and style with our Air Skateboard Shoe. Perfect for both skating and casual wear.",
    sizes: ["US 7", "US 8", "US 9", "US 10", "US 11"]
  };

  const handleClick = () => {
    if (!selectedSize) {
      toast.error("Please select a size before adding to cart");
      return;
    }
    
    const productWithSize = {
      ...product,
      selectedSize,
    };
    
    addToCart(productWithSize);
    toast.success("Added to cart successfully!");
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {/* Product Image */}
        <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col">
          <h1 className="text-4xl font-semibold">{product.name}</h1>
          
          <div className="mt-4 flex items-baseline gap-4">
            <span className="text-3xl font-semibold">${product.discountPrice}</span>
            {product.price > product.discountPrice && (
              <span className="text-xl text-muted-foreground line-through">
                ${product.price}
              </span>
            )}
          </div>

          <Separator className="my-6" />

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-2">Description</h3>
              <p className="text-muted-foreground">{product.description}</p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">Select Size</h3>
              <div className="grid grid-cols-3 gap-2">
                {product.sizes.map((size) => (
                  <Button
                    key={size}
                    variant={selectedSize === size ? "default" : "outline"}
                    onClick={() => setSelectedSize(size)}
                    className="h-12"
                  >
                    {size}
                  </Button>
                ))}
              </div>
              {!selectedSize && (
                <p className="text-sm text-red-500 mt-2">Please select a size</p>
              )}
            </div>
          </div>

          <div className="mt-8">
            <Button
              size="lg"
              className="w-full"
              onClick={handleClick}
            >
              <ShoppingBag className="mr-2" />
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProductPage;
