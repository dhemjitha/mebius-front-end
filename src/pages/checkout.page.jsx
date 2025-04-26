import { useCart } from "@/lib/CartContext";
import { Link, Navigate } from "react-router";
import CheckOutItem from "@/components/shared/CheckOutItem";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { ArrowLeft } from "lucide-react";
import ShippingAddressForm from "@/components/shared/ShippingAddressForm";
import { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";

function CheckoutPage() {
    const { cart } = useCart();
    const [userAddress, setUserAddress] = useState(null);
    const [isLoadingAddress, setIsLoadingAddress] = useState(true);

    const subtotal = cart.reduce((total, item) => {
        return total + (item.product.discountPrice || item.product.price) * item.quantity;
    }, 0);

    const shipping = subtotal > 0 ? 10 : 0;
    const total = subtotal + shipping;

    useEffect(() => {
        // Here you would fetch the user's address from your backend
        // For now, we'll simulate an API call with a timeout
        const fetchUserAddress = async () => {
            try {
                // Simulate API call delay
                await new Promise(resolve => setTimeout(resolve, 500));
                
                // Mock response - replace this with actual API call
                const response = {
                    line_1: "123 Main Street",
                    line_2: "Apt 4B",
                    city: "New York",
                    state: "NY",
                    zip_code: "10001",
                    phone: "+12125550123"
                };
                
                setUserAddress(response);
            } catch (error) {
                console.error("Error fetching user address:", error);
                setUserAddress(null);
            } finally {
                setIsLoadingAddress(false);
            }
        };

        fetchUserAddress();
    }, []);

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
                <div className="lg:col-span-2 space-y-8">
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold">Order Items</h2>
                        {cart.map((item, index) => (
                            <CheckOutItem key={item.product._id + item.product.selectedSize} item={item} />
                        ))}
                    </div>

                    <div className="bg-gray-50 rounded-lg p-6">
                        <h2 className="text-xl font-semibold mb-6">Shipping Address</h2>
                        {isLoadingAddress ? (
                            <div className="space-y-4">
                                <Skeleton className="h-10 w-full" />
                                <Skeleton className="h-10 w-full" />
                                <Skeleton className="h-10 w-full" />
                            </div>
                        ) : (
                            <ShippingAddressForm existingAddress={userAddress} />
                        )}
                    </div>
                </div>

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
