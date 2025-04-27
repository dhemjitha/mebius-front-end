import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Settings, KeyRound, MapPin } from "lucide-react";

function SettingsCard() {
  const settingsOptions = [
    {
      id: "password",
      icon: <KeyRound className="h-4 w-4" />,
      title: "Change Password",
      description: "Update your password regularly for security",
      onClick: () => {}
    },
    {
      id: "addresses",
      icon: <MapPin className="h-4 w-4" />,
      title: "Manage Addresses",
      description: "Add or edit your delivery addresses",
      onClick: () => {}
    }
  ];

  return (
    <Card className="transition-all">
      <CardHeader className="flex flex-row items-center gap-3 pb-2">
        <Settings className="h-6 w-6 text-black" />
        <div>
          <CardTitle className="text-lg">Account Settings</CardTitle>
          <CardDescription>Manage your account preferences and security</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="grid gap-3">
          {settingsOptions.map(option => (
            <Button
              key={option.id}
              variant="outline"
              className="flex items-start justify-start gap-3 h-auto p-4 w-full text-left"
              onClick={option.onClick}
            >
              <span className="mt-1">{option.icon}</span>
              <div className="flex flex-col items-start">
                <span className="font-medium">{option.title}</span>
                <span className="text-xs text-muted-foreground">{option.description}</span>
              </div>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default SettingsCard;
