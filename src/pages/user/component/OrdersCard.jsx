import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Package, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router";

function OrdersCard() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/shop");
  };

  const orders = [];

  return (
    <Card className="transition-all">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div className="flex items-center gap-3">
          <Package className="h-6 w-6 text-black" />
          <div>
            <CardTitle className="text-lg">Order History</CardTitle>
            <CardDescription>View your past orders and track current ones</CardDescription>
          </div>
        </div>
        {orders.length > 0 && (
          <Button variant="ghost" size="icon" aria-label="View all orders">
            <ChevronRight className="h-4 w-4" />
          </Button>
        )}
      </CardHeader>
      <CardContent className="pt-4">
        {orders.length > 0 ? (
          <div className="space-y-4">
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-muted-foreground mb-4">You haven't placed any orders yet.</p>
            <Button onClick={handleClick}>
              Start Shopping
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default OrdersCard;