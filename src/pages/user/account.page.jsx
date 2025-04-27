import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useNavigate } from "react-router";
import { LogOut } from "lucide-react";
import OrdersCard from "./component/OrdersCard";
import SellerCard from "./component/SellerCard";
import SettingsCard from "./component/SettingsCard";
import ProfileCard from "./component/ProfileCard";

function AccountPage() {
  const navigate = useNavigate();

  const handleSignOut = () => {
    navigate("/");
  };

  return (
    <div className="container mx-auto py-12 px-4 lg:px-16">
      <section className="space-y-8">
        <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <h1 className="text-3xl font-bold tracking-tight">My Account</h1>
          <Button variant="outline" onClick={handleSignOut} className="shrink-0">
            <LogOut className="mr-2 h-4 w-4" />
            Sign Out
          </Button>
        </header>

        <Separator />

        <div className="grid gap-8">
          <ProfileCard />
          <OrdersCard />
          <SellerCard />
          <SettingsCard />
        </div>
      </section>
    </div>
  );
}

export default AccountPage;