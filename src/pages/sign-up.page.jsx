import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link } from "react-router"

export default function SignUpPage() {
  return (
    <div className="flex justify-center items-center min-h-screen p-4 bg-white">
      <div className="w-full max-w-md p-8 border border-gray-100 rounded-lg bg-white shadow-sm">
        <h1 className="text-2xl font-semibold text-center text-black mb-6">Sign Up</h1>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium text-black">
              Name
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="John Doe"
              className="h-10 border-gray-200 rounded-md focus:border-black focus:ring-black"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium text-black">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="name@example.com"
              className="h-10 border-gray-200 rounded-md focus:border-black focus:ring-black"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-sm font-medium text-black">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              className="h-10 border-gray-200 rounded-md focus:border-black focus:ring-black"
            />
          </div>

          <Button className="w-full h-10 mt-2 bg-black hover:bg-gray-800 text-white rounded-md">Sign Up</Button>
        </div>

        <div className="mt-6 text-center text-sm">
          Already have an account?{" "}
          <Link to="/sign-in" className="text-black font-medium underline">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  )
}