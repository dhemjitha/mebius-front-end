import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link } from "react-router"
import { Separator } from "@/components/ui/separator"

export default function SignInPage() {
  return (
    <div className="flex min-h-screen">
      {/* Left Panel - Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md space-y-8">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold tracking-tight">Welcome back</h1>
            <p className="text-gray-500">Enter your credentials to access your account</p>
          </div>

          <div className="space-y-6">
            {/* Social Login Buttons */}
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="w-full">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Google
              </Button>
              <Button variant="outline" className="w-full">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"/>
                </svg>
                Facebook
              </Button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-gray-500">Or continue with</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">
                  Email
                </Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="name@example.com" 
                  className="h-11"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="text-sm font-medium">
                    Password
                  </Label>
                  <Link to="/forgot-password" className="text-sm text-gray-500 hover:text-black">
                    Forgot password?
                  </Link>
                </div>
                <Input 
                  id="password" 
                  type="password" 
                  placeholder="••••••••" 
                  className="h-11"
                />
              </div>

              <Button className="w-full h-11 bg-black hover:bg-gray-800 text-white">
                Sign In
              </Button>
            </div>
          </div>

          <div className="text-center text-sm text-gray-500">
            Don't have an account?{" "}
            <Link to="/sign-up" className="text-black font-medium hover:underline">
              Sign Up
            </Link>
          </div>
        </div>
      </div>

      {/* Right Panel - Image/Branding */}
      <div className="hidden lg:flex flex-1 bg-black items-center justify-center p-12">
        <div className="max-w-lg text-center space-y-8">
          <div className="text-4xl font-bold text-white">MEBIUS</div>
          <p className="text-gray-400 text-lg">
            Your one-stop destination for premium fashion and lifestyle products.
          </p>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="text-left">
              <div className="text-3xl font-bold text-white">2M+</div>
              <div className="text-gray-400">Active Users</div>
            </div>
            <div className="text-left">
              <div className="text-3xl font-bold text-white">10k+</div>
              <div className="text-gray-400">Premium Products</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
