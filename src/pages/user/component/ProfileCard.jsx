import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UserCircle, Pencil } from "lucide-react";
import { useState } from "react";

function ProfileCard() {
  const data = {
    f_name: "John",
    l_name: "Doe",
    email: "john.doe@example.com",
    password: "",
    roleId: "user123",
    address: {
      line_1: "123 Main St",
      line_2: "Apt 4B",
      city: "New York",
      state: "NY",
      zip_code: "10001",
      phone: "+1 (555) 123-4567"
    }
  };

  const [open, setOpen] = useState(false);
  const [userProfile, setUserProfile] = useState(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("address.")) {
      const addressField = name.split(".")[1];
      setUserProfile(prev => ({
        ...prev,
        address: {
          ...prev.address,
          [addressField]: value
        }
      }));
    } else {
      setUserProfile(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  return (
    <Card className="transition-all hover:shadow-md">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div className="flex items-center gap-3">
          <UserCircle className="h-6 w-6 text-black" />
          <div>
            <CardTitle className="text-lg">Profile Information</CardTitle>
            <CardDescription>Manage your personal information</CardDescription>
          </div>
        </div>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button variant="ghost" size="icon" aria-label="Edit profile">
              <Pencil className="h-4 w-4" />
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit Profile</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4 pt-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="f_name">First Name</Label>
                  <Input
                    id="f_name"
                    name="f_name"
                    value={userProfile.f_name}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="l_name">Last Name</Label>
                  <Input
                    id="l_name"
                    name="l_name"
                    value={userProfile.l_name}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={userProfile.email}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  value={userProfile.password}
                  onChange={handleChange}
                  placeholder="Enter new password"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="roleId">Role ID</Label>
                <Input
                  id="roleId"
                  name="roleId"
                  value={userProfile.roleId}
                  disabled
                />
              </div>
              <div className="space-y-2">
                <Label>Address (Optional)</Label>
                <div className="space-y-4">
                  <Input
                    name="address.line_1"
                    value={userProfile.address.line_1}
                    onChange={handleChange}
                    placeholder="Address Line 1"
                  />
                  <Input
                    name="address.line_2"
                    value={userProfile.address.line_2}
                    onChange={handleChange}
                    placeholder="Address Line 2"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      name="address.city"
                      value={userProfile.address.city}
                      onChange={handleChange}
                      placeholder="City"
                    />
                    <Input
                      name="address.state"
                      value={userProfile.address.state}
                      onChange={handleChange}
                      placeholder="State"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      name="address.zip_code"
                      value={userProfile.address.zip_code}
                      onChange={handleChange}
                      placeholder="ZIP Code"
                    />
                    <Input
                      name="address.phone"
                      value={userProfile.address.phone}
                      onChange={handleChange}
                      placeholder="Phone Number"
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-end space-x-2 pt-4">
                <Button variant="outline" type="button" onClick={() => setOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit">Save Changes</Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </CardHeader>
      <CardContent className="pt-4">
        <dl className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-1">
            <dt className="text-sm text-muted-foreground">Full Name</dt>
            <dd className="font-medium">{`${userProfile.f_name} ${userProfile.l_name}`}</dd>
          </div>
          <div className="space-y-1">
            <dt className="text-sm text-muted-foreground">Email</dt>
            <dd className="font-medium">{userProfile.email}</dd>
          </div>
          <div className="space-y-1">
            <dt className="text-sm text-muted-foreground">Role ID</dt>
            <dd className="font-medium">{userProfile.roleId}</dd>
          </div>
          <div className="space-y-1">
            <dt className="text-sm text-muted-foreground">Phone</dt>
            <dd className="font-medium">{userProfile.address.phone || "Not provided"}</dd>
          </div>
          <div className="col-span-2 space-y-1">
            <dt className="text-sm text-muted-foreground">Address</dt>
            <dd className="font-medium">
              {userProfile.address.line_1 ? (
                <>
                  {userProfile.address.line_1}
                  {userProfile.address.line_2 && <>, {userProfile.address.line_2}</>}
                  <br />
                  {userProfile.address.city}, {userProfile.address.state} {userProfile.address.zip_code}
                </>
              ) : (
                "Not provided"
              )}
            </dd>
          </div>
        </dl>
      </CardContent>
    </Card>
  );
}

export default ProfileCard;