import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Minus, Plus, X } from "lucide-react";
import { useCart } from "@/lib/CartContext";

function CartItem({ item }) {
  const { addToCart, removeFromCart, decreaseQuantity } = useCart();

  const handleIncrease = () => {
    addToCart(item.product);
  };

  const handleDecrease = () => {
    decreaseQuantity(item.product._id, item.product.selectedSize);
  };

  const handleRemove = () => {
    removeFromCart(item.product._id, item.product.selectedSize);
  };

  return (
    <Card className="p-4">
      <div className="flex gap-4">
        <div className="relative w-24 h-24">
          <img
            src={item.product.imageUrl || "/placeholder.svg"}
            alt={item.product.name}
            className="w-full h-full object-cover rounded"
          />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-medium truncate">{item.product.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Size: {item.product.selectedSize}
              </p>
            </div>
            <Button variant="ghost" size="icon" onClick={handleRemove} className="text-muted-foreground hover:text-black">
              <X className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex justify-between items-end mt-4">
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8"
                onClick={handleDecrease}
                disabled={item.quantity <= 1}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-8 text-center">{item.quantity}</span>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8"
                onClick={handleIncrease}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <div className="text-right">
              <p className="font-medium">
                ${((item.product.discountPrice || item.product.price) * item.quantity).toFixed(2)}
              </p>
              {item.product.discountPrice && (
                <p className="text-sm text-muted-foreground line-through">
                  ${(item.product.price * item.quantity).toFixed(2)}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default CartItem;
