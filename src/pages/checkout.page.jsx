import { useCart } from "@/lib/CartContext";
import { Link, Navigate } from "react-router";
import CheckOutItem from "@/components/shared/CheckOutItem";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { ArrowLeft } from "lucide-react";
import ShippingAddressForm from "@/components/shared/ShippingAddressForm";

function CheckoutPage() {
    const { cart } = useCart();

    const subtotal = cart.reduce((total, item) => {
        return total + (item.product.discountPrice || item.product.price) * item.quantity;
    }, 0);

    const shipping = subtotal > 0 ? 10 : 0;
    const total = subtotal + shipping;

    if (cart.length === 0) {
        return <Navigate to="/shop" />
    }

    return (
        <main className="container mx-auto px-4 lg:px-16 py-8 min-h-screen">
            <div className="flex items-center gap-2 mb-8">
                <Link to="/shop/cart" className="text-muted-foreground hover:text-black">
                    <ArrowLeft className="w-5 h-5" />
                </Link>
                <h1 className="text-3xl font-bold">Checkout</h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Cart Items and Shipping Form */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Cart Items */}
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold">Order Items</h2>
                        {cart.map((item, index) => (
                            <CheckOutItem key={item.product._id + item.product.selectedSize} item={item} />
                        ))}
                    </div>

                    {/* Shipping Address Form */}
                    <div className="bg-gray-50 rounded-lg">
                        <h2 className="text-xl font-semibold mb-6">Shipping Address</h2>
                        <ShippingAddressForm />
                    </div>
                </div>

                {/* Order Summary */}
                <div className="">
                    <div className="bg-gray-50 rounded-lg p-6 space-y-4 sticky top-4">
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
                    </div>
                </div>
            </div>
        </main>
    );
}

export default CheckoutPage;
