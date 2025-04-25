import React, { useState } from 'react';
import { Star, StarOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";

const TrendingProducts = () => {
  // Sample product data - replace this with your actual data from backend
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Sample Product 1",
      price: 29.99,
      image: "https://fed-2-frontend-pre.vercel.app/assets/images/2507976b1988e6d9a08599fcba5247bd.png",
      isTrending: false
    },
    {
      id: 2,
      name: "Sample Product 2",
      price: 39.99,
      image: "https://fed-2-frontend-pre.vercel.app/assets/images/5c482fd10ff96fad137ae5ca5aa7a561.png",
      isTrending: true
    },
    // Add more sample products as needed
  ]);

  const handleToggleTrending = (productId) => {
    setProducts(products.map(product => {
      if (product.id === productId) {
        const newTrendingStatus = !product.isTrending;
        toast(newTrendingStatus ? "Marked as Trending" : "Removed from Trending", {
          description: `${product.name} has been ${newTrendingStatus ? 'added to' : 'removed from'} trending products.`
        });
        return { ...product, isTrending: newTrendingStatus };
      }
      return product;
    }));
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Manage Trending Products</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="relative group hover:shadow-lg transition-all">
            <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
              <img
                src={product.image}
                alt={product.name}
                className="object-cover w-full h-full transition-transform group-hover:scale-105"
              />
            </div>
            <CardHeader>
              <CardTitle>{product.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <p className="text-lg font-semibold">
                  ${product.price.toFixed(2)}
                </p>
                <div className="flex items-center gap-2">
                  <Badge variant={product.isTrending ? "default" : "secondary"}>
                    {product.isTrending ? 'Trending' : 'Not Trending'}
                  </Badge>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleToggleTrending(product.id)}
                    className={`${product.isTrending ? 'text-yellow-500' : 'text-gray-400'} hover:text-yellow-500`}
                  >
                    {product.isTrending ? (
                      <Star className="h-5 w-5" />
                    ) : (
                      <StarOff className="h-5 w-5" />
                    )}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TrendingProducts;
