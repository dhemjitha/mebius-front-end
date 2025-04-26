import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

function CheckOutItem({ item }) {
  return (
    <Card className="p-6 hover:shadow-md transition-shadow">
      <div className="flex gap-6">
        <div className="relative w-32 h-32 flex-shrink-0">
          <img
            src={item.product.imageUrl || "/placeholder.svg"}
            alt={item.product.name}
            className="w-full h-full object-cover rounded-lg shadow-sm"
          />
          <Badge className="absolute -top-2 -right-2 bg-primary text-primary-foreground">
            x{item.quantity}
          </Badge>
        </div>

        <div className="flex-1 min-w-0 flex flex-col justify-between">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold tracking-tight truncate">
              {item.product.name}
            </h3>

            <div className="flex items-center gap-2">
              <Badge variant="outline" className="text-xs">
                Size: {item.product.selectedSize}
              </Badge>
            </div>
          </div>

          <div className="flex items-end justify-end mt-4">
            <div className="text-right">
              <div className="flex items-center gap-2 justify-end">
                {item.product.discountPrice && (
                  <p className="text-sm text-muted-foreground line-through">
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </p>
                )}
                <p className="text-xl font-bold text-primary">
                  ${((item.product.discountPrice || item.product.price) * item.quantity).toFixed(2)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default CheckOutItem;
