import { Button } from "@/components/ui/button";
import { Link } from "react-router";

function CompletePage() {
  // Static mock data for the completed order
  const orderDetails = {
    orderId: 'mock-order-123',
    orderStatus: 'confirmed',
    paymentStatus: 'paid',
    customerEmail: 'customer@example.com'
  };

  return (
    <section className="max-w-2xl mx-auto p-6 mt-10 flex flex-col justify-center bg-white rounded-lg shadow-md min-h-screen">
      <h2 className="text-2xl font-bold mb-4 text-green-600">Order Completed Successfully!</h2>
      <p className="mb-4">
        We appreciate your business! A confirmation email will be sent to{" "}
        <span className="font-semibold">{orderDetails.customerEmail}</span>.
      </p>

      <div className="mt-6 border-t pt-4">
        <h3 className="text-lg font-semibold mb-2">Order Details:</h3>
        <p className="mb-2">Order ID: <span className="font-medium">{orderDetails.orderId}</span></p>
        <p className="mb-2">Order Status: <span className="font-medium">{orderDetails.orderStatus}</span></p>
        <p className="mb-2">Payment Status: <span className="font-medium">{orderDetails.paymentStatus}</span></p>
      </div>

      <div className="mt-6">
        <p>
          If you have any questions, please email{" "}
          <a href="mailto:orders@example.com" className="text-blue-600 hover:underline">
            orders@example.com
          </a>.
        </p>
      </div>

      <Button asChild className="mt-6">
        <Link to="/">Return to Home</Link>
      </Button>
    </section>
  );
}

export default CompletePage;
