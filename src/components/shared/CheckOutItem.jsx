import { Card } from "@/components/ui/card";

function CheckOutItem({ item }) {

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
          </div>

          <div className="flex justify-between items-end mt-4">
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

export default CheckOutItem;
