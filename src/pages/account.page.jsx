import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useNavigate } from "react-router";
import { UserCircle, Package, Settings, LogOut, ChevronRight, MapPin, KeyRound, Store } from "lucide-react";

function AccountPage() {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto py-8 lg:px-16 px-4 min-h-screen">
      <div className="space-y-8">
        {/* Header Section */}
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-bold">My Account</h1>
          <Button variant="outline" onClick={() => navigate("/")}>
            <LogOut className="mr-2 h-4 w-4" />
            Sign Out
          </Button>
        </div>

        <Separator />

        {/* Profile Card */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div className="flex items-center space-x-4">
              <UserCircle className="h-8 w-8 text-muted-foreground" />
              <div>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>Manage your personal information</CardDescription>
              </div>
            </div>
            <Button variant="ghost" size="icon">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Full Name</p>
                <p className="font-medium">John Doe</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium">john.doe@example.com</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Orders Card */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div className="flex items-center space-x-4">
              <Package className="h-8 w-8 text-muted-foreground" />
              <div>
                <CardTitle>Order History</CardTitle>
                <CardDescription>View your past orders and track current ones</CardDescription>
              </div>
            </div>
            <Button variant="ghost" size="icon">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="text-center py-8">
              <p className="text-muted-foreground">You haven't placed any orders yet.</p>
              <Button onClick={() => navigate("/shop")} className="mt-4">
                Start Shopping
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Become a Seller Card */}
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
              onClick={() => navigate("/become-a-seller")}
              className="w-full md:w-auto"
            >
              Apply Now
            </Button>
          </CardContent>
        </Card>

        {/* Settings Card */}
        <Card>
          <CardHeader>
            <div className="flex items-center space-x-4">
              <Settings className="h-8 w-8 text-muted-foreground" />
              <div>
                <CardTitle>Account Settings</CardTitle>
                <CardDescription>Manage your account preferences and security</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid gap-4">
              <Button variant="outline" className="justify-start h-auto py-4">
                <KeyRound className="mr-2 h-4 w-4" />
                <div className="flex flex-col items-start">
                  <span>Change Password</span>
                  <span className="text-xs text-muted-foreground">Update your password regularly for security</span>
                </div>
              </Button>
              <Button variant="outline" className="justify-start h-auto py-4">
                <MapPin className="mr-2 h-4 w-4" />
                <div className="flex flex-col items-start">
                  <span>Manage Addresses</span>
                  <span className="text-xs text-muted-foreground">Add or edit your delivery addresses</span>
                </div>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default AccountPage;