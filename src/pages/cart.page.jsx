import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/CartContext";
import { Link } from "react-router";
import CartItem from "@/components/shared/CartItem";
import { Separator } from "@/components/ui/separator";
import { ShoppingBag, ArrowLeft } from "lucide-react";

function CartPage() {
  const { cart } = useCart();

  const subtotal = cart.reduce((total, item) => {
    return total + (item.product.discountPrice || item.product.price) * item.quantity;
  }, 0);

  const shipping = subtotal > 0 ? 10 : 0;
  const total = subtotal + shipping;

  return (
    <main className="container mx-auto px-4 lg:px-16 py-8">
      <div className="flex items-center gap-2 mb-6">
        <Link to="/shop" className="text-muted-foreground hover:text-black">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <h1 className="text-3xl font-bold">Shopping Cart</h1>
      </div>

      {cart.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item, index) => (
              <CartItem key={item.product._id + item.product.selectedSize} item={item} />
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-lg p-6 space-y-4">
              <h2 className="text-xl font-semibold">Order Summary</h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <Button asChild className="w-full mt-4">
                <Link to="/checkout">
                  Proceed to Checkout
                </Link>
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py- min-h-screen md:min-h-[80vh] flex flex-col items-center justify-center">
          <ShoppingBag className="w-12 h-12 mx-auto text-gray-400 mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Your cart is empty</h2>
          <p className="text-muted-foreground mb-6">Looks like you haven't added any items to your cart yet.</p>
          <Button asChild>
            <Link to="/shop">Continue Shopping</Link>
          </Button>
        </div>
      )}
    </main>
  );
}

export default CartPage;
