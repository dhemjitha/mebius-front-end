import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Store } from "lucide-react";
import { useNavigate } from "react-router";

function SellerCard() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/become-a-seller");
  };

  return (
    <Card className="bg-primary/5 border-primary/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div className="flex items-center space-x-4">
              <Store className="h-8 w-8 text-primary" />
              <div>
                <CardTitle>Become a Seller</CardTitle>
                <CardDescription>Start your business on our platform</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground mb-4">
              Turn your passion into a business. Join our marketplace and start selling your products to customers worldwide.
            </p>
            <Button 
              onClick={handleClick}
              className="w-full md:w-auto"
            >
              Apply Now
            </Button>
          </CardContent>
        </Card>
  );
}

export default SellerCard;