import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Store, CreditCard, User2, Phone, ShoppingBag } from "lucide-react";

function BecomeASellerPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    displayName: "",
    phoneNumber: "",
    email: "",
    mainCategory: "",
    itemsToSell: "",
    paymentInfo: {
      accountHolder: "",
      bankName: "",
      accountNumber: "",
      routingNumber: "",
    },
    agreeToTerms: false
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: checked
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agreeToTerms) {
      alert("Please agree to the terms and conditions");
      return;
    }
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
  };

  return (
    <div className="container mx-auto py-8 lg:px-16 px-4 min-h-screen">
      <div className=" space-y-8">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold flex items-center justify-center gap-3">
            <Store className="h-8 w-8" />
            Start Selling Today
          </h1>
          <p className="text-muted-foreground">
            Join thousands of sellers and start earning money from your items
          </p>
        </div>

        <Separator />

        {/* Application Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-4">
                <User2 className="h-6 w-6 text-muted-foreground" />
                <div>
                  <CardTitle>Personal Information</CardTitle>
                  <CardDescription>Tell us about yourself</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="displayName">Shop Display Name</Label>
                  <Input
                    id="displayName"
                    name="displayName"
                    value={formData.displayName}
                    onChange={handleInputChange}
                    placeholder="Your shop name on the platform"
                    required
                  />
                  <p className="text-sm text-muted-foreground">This is how buyers will see you</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phoneNumber">Phone Number</Label>
                  <Input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    placeholder="Your phone number"
                    required
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Selling Information */}
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-4">
                <ShoppingBag className="h-6 w-6 text-muted-foreground" />
                <div>
                  <CardTitle>What You'll Be Selling</CardTitle>
                  <CardDescription>Tell us about the items you want to sell</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="mainCategory">Main Category</Label>
                <select
                  id="mainCategory"
                  name="mainCategory"
                  value={formData.mainCategory}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 rounded-md border border-input bg-background"
                  required
                >
                  <option value="">Select a category</option>
                  <option value="fashion">Fashion & Accessories</option>
                  <option value="electronics">Electronics</option>
                  <option value="home">Home & Garden</option>
                  <option value="sports">Sports & Outdoors</option>
                  <option value="collectibles">Collectibles</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="itemsToSell">What items will you be selling?</Label>
                <textarea
                  id="itemsToSell"
                  name="itemsToSell"
                  value={formData.itemsToSell}
                  onChange={handleInputChange}
                  placeholder="Describe the types of items you plan to sell..."
                  className="w-full min-h-[100px] px-3 py-2 rounded-md border border-input bg-background text-sm"
                  required
                />
              </div>
            </CardContent>
          </Card>

          {/* Payment Information */}
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-4">
                <CreditCard className="h-6 w-6 text-muted-foreground" />
                <div>
                  <CardTitle>Payment Information</CardTitle>
                  <CardDescription>Where should we send your earnings?</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="paymentInfo.accountHolder">Account Holder Name</Label>
                  <Input
                    id="paymentInfo.accountHolder"
                    name="paymentInfo.accountHolder"
                    value={formData.paymentInfo.accountHolder}
                    onChange={handleInputChange}
                    placeholder="Name on bank account"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="paymentInfo.bankName">Bank Name</Label>
                  <Input
                    id="paymentInfo.bankName"
                    name="paymentInfo.bankName"
                    value={formData.paymentInfo.bankName}
                    onChange={handleInputChange}
                    placeholder="Your bank name"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="paymentInfo.accountNumber">Account Number</Label>
                  <Input
                    id="paymentInfo.accountNumber"
                    name="paymentInfo.accountNumber"
                    type="text"
                    value={formData.paymentInfo.accountNumber}
                    onChange={handleInputChange}
                    placeholder="Your account number"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="paymentInfo.routingNumber">Routing Number</Label>
                  <Input
                    id="paymentInfo.routingNumber"
                    name="paymentInfo.routingNumber"
                    type="text"
                    value={formData.paymentInfo.routingNumber}
                    onChange={handleInputChange}
                    placeholder="Your routing number"
                    required
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Terms and Conditions */}
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="agreeToTerms"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleCheckboxChange}
                  className="mt-1"
                  required
                />
                <label htmlFor="agreeToTerms" className="text-sm text-muted-foreground">
                  I agree to the Terms of Service and understand that my account may be subject to review.
                  I confirm that all information provided is accurate and I will comply with the platform's selling policies.
                </label>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-end">
            <Button type="submit" size="lg" className="w-full md:w-auto">
              Start Selling
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BecomeASellerPage; 