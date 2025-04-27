import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UserCircle, ChevronRight } from "lucide-react";

function ProfileCard() {
  const userProfile = {
    name: "John Doe",
    email: "john.doe@example.com"
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
        <Button variant="ghost" size="icon" aria-label="Edit profile">
          <ChevronRight className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent className="pt-4">
        <dl className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-1">
            <dt className="text-sm text-muted-foreground">Full Name</dt>
            <dd className="font-medium">{userProfile.name}</dd>
          </div>
          <div className="space-y-1">
            <dt className="text-sm text-muted-foreground">Email</dt>
            <dd className="font-medium">{userProfile.email}</dd>
          </div>
        </dl>
      </CardContent>
    </Card>
  );
}

export default ProfileCard;