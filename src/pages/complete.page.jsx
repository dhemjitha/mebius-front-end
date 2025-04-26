import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { CheckCircle2 } from "lucide-react";
import { ConfettiFireworks } from "@/components/magicui/ConfettiFireworks";

function CompletePage() {
  // Mock data for the completed order
  const orderDetails = {
    orderId: 'mock-order-123',
    orderStatus: 'confirmed',
    paymentStatus: 'paid',
    customerName: 'John Doe',
    customerEmail: 'customer@example.com',
    shippingAddress: {
      street: '123 Main St',
      city: 'Anytown',
      state: 'State',
      country: 'USA',
      zipCode: '12345',
    },
    phone: '123-456-7890',
    orderDate: new Date().toLocaleDateString(),
    items: [
      { name: 'Product 1', quantity: 2, price: 29.99 },
      { name: 'Product 2', quantity: 1, price: 49.99 },
    ],
    subtotal: 109.97,
    shipping: 5.99,
    tax: 9.50,
    total: 125.46,
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4">
        {/* Success Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6 text-center">
          <div className="flex items-center justify-center mb-4">
            <CheckCircle2 className="h-12 w-12 text-green-500" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Thank You for Your Order!</h1>
          <p className="text-gray-600 mt-2">Order #{orderDetails.orderId}</p>
        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Customer Details */}
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-2">Customer Information</h3>
              <p className="text-gray-900">{orderDetails.customerName}</p>
              <p className="text-gray-900">{orderDetails.customerEmail}</p>
              <p className="text-gray-900">{orderDetails.phone}</p>
            </div>
            
            {/* Shipping Details */}
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-2">Shipping Address</h3>
              <p className="text-gray-900">{orderDetails.shippingAddress.street}</p>
              <p className="text-gray-900">
                {orderDetails.shippingAddress.city}, {orderDetails.shippingAddress.state}
              </p>
              <p className="text-gray-900">
                {orderDetails.shippingAddress.country} {orderDetails.shippingAddress.zipCode}
              </p>
            </div>
          </div>
        </div>

        {/* Order Items */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Order Items</h2>
          <div className="divide-y divide-gray-200">
            {orderDetails.items.map((item, index) => (
              <div key={index} className="py-3 flex justify-between">
                <div>
                  <p className="text-gray-900">{item.name}</p>
                  <p className="text-gray-500">Qty: {item.quantity}</p>
                </div>
                <p className="text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            ))}
          </div>
          
          {/* Order Totals */}
          <div className="mt-6 border-t pt-6">
            <div className="flex justify-between mb-2">
              <p className="text-gray-600">Subtotal</p>
              <p className="text-gray-900">${orderDetails.subtotal}</p>
            </div>
            <div className="flex justify-between mb-2">
              <p className="text-gray-600">Shipping</p>
              <p className="text-gray-900">${orderDetails.shipping}</p>
            </div>
            <div className="flex justify-between mb-4">
              <p className="text-gray-600">Tax</p>
              <p className="text-gray-900">${orderDetails.tax}</p>
            </div>
            <div className="flex justify-between border-t pt-4">
              <p className="text-lg font-semibold">Total</p>
              <p className="text-lg font-semibold">${orderDetails.total}</p>
            </div>
          </div>
        </div>

        {/* Support Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Need Help?</h2>
          <p className="text-gray-600 mb-4">
            If you have any questions about your order, please contact our support team:
          </p>
          <div className="flex flex-col space-y-2">
            <a href="mailto:support@example.com" className="text-blue-600 hover:text-blue-800">
              support@example.com
            </a>
            <p className="text-gray-600">Phone: 1-800-123-4567</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild variant="outline" className="flex-1">
            <Link to="/orders">View Orders</Link>
          </Button>
          <Button asChild className="flex-1">
            <Link to="/">Continue Shopping</Link>
          </Button>
        </div>
      </div>
      <ConfettiFireworks />
    </div>
  );
}

export default CompletePage;
