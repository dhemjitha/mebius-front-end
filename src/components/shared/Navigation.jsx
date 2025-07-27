import { useState } from "react";
import { Link } from "react-router";
import { Menu, X, ShoppingBag, Search, User, LogOut, Settings } from "lucide-react";
import { Button } from "../ui/button";
import { useCart } from "@/lib/CartContext";
import { useAuth } from "../../hooks/use-auth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { cart } = useCart();
  const { isAuthenticated, login, logout, user } = useAuth();
  const cartItemCount = cart.length > 0 ? cart.reduce((total, item) => total + (item?.quantity || 0), 0) : 0;

  const closeMobileMenu = () => setIsMenuOpen(false);

  return (
    <header className="bg-white border-b border-gray-200 px-4 lg:px-16">
      <div>
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="font-bold text-2xl">
            Mebius
          </Link>

          <div className="hidden md:flex space-x-8 flex-1 justify-start ml-8">
            <Link to="/" className="text-black hover:text-gray-600 font-medium text-sm">
              Home
            </Link>
            <Link to="/shop" className="text-black hover:text-gray-600 transition-colors font-medium text-sm">
              Shop
            </Link>
          </div>

          <div className="flex items-center space-x-6">
            <button className="h-10 w-10 flex items-center justify-center rounded-full hover:bg-gray-100">
              <Search className="h-5 w-5" />
            </button>

            <Link
              to="/shop/cart"
              className="h-10 w-10 flex items-center justify-center rounded-full hover:bg-gray-100 relative"
            >
              <ShoppingBag className="h-5 w-5" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center rounded-full bg-black text-white text-xs">
                  {cartItemCount}
                </span>
              )}
            </Link>

            <div className="hidden md:flex items-center space-x-4">
              {isAuthenticated ? (
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center space-x-2 focus:outline-none">
                    {user?.picture ? (
                      <img
                        src={user.picture}
                        alt={user.name}
                        className="h-8 w-8 rounded-full object-cover"
                      />
                    ) : (
                      <div className="h-8 w-8 rounded-full bg-orange-500 flex items-center justify-center text-white font-medium">
                        {user?.name?.[0]?.toUpperCase() || ""}
                      </div>
                    )}
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-64 px-4 py-2">
                    <div className="flex items-center space-x-3 py-2">
                      {user?.picture ? (
                        <img
                          src={user.picture}
                          alt={user.name}
                          className="h-10 w-10 rounded-full object-cover"
                        />
                      ) : (
                        <div className="h-10 w-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-medium">
                          {user?.name?.[0]?.toUpperCase() || ""}
                        </div>
                      )}
                      <div className="text-left">
                        <p className="text-sm font-medium">{user?.name}</p>
                        <p className="text-xs text-gray-500">{user?.email}</p>
                      </div>
                    </div>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link to="/account" className="flex items-center cursor-pointer">
                        <Settings className="h-4 w-4 mr-2" />
                        Manage account
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={logout} className="text-red-600 focus:text-red-600">
                      <LogOut className="h-4 w-4 mr-2" />
                      Sign out
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <div className="px-4 py-2 text-xs text-gray-500">
                      Secured by Mebius
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Button variant="ghost" onClick={login}>
                  Log In
                </Button>
              )}
            </div>


            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-6">
            <Link to="/" className="text-black hover:text-gray-600 font-medium flex items-center justify-center py-3">
              Home
            </Link>
            <Link to="/shop" className="text-black hover:text-gray-600 flex items-center justify-center py-3">
              Shop
            </Link>

            <div className="px-4">
              {isAuthenticated ? (
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center space-x-2 focus:outline-none">
                    {user?.picture ? (
                      <img
                        src={user.picture}
                        alt={user.name}
                        className="h-8 w-8 rounded-full object-cover"
                      />
                    ) : (
                      <div className="h-8 w-8 rounded-full bg-orange-500 flex items-center justify-center text-white font-medium">
                        {user?.name?.[0]?.toUpperCase() || ""}
                      </div>
                    )}
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-full mt-2">
                    <div className="flex items-center space-x-3 py-2">
                      {user?.picture ? (
                        <img
                          src={user.picture}
                          alt={user.name}
                          className="h-10 w-10 rounded-full object-cover"
                        />
                      ) : (
                        <div className="h-10 w-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-medium">
                          {user?.name?.[0]?.toUpperCase() || ""}
                        </div>
                      )}
                      <div className="text-left">
                        <p className="text-sm font-medium">{user?.name}</p>
                        <p className="text-xs text-gray-500">{user?.email}</p>
                      </div>
                    </div>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link to="/account" className="flex items-center cursor-pointer">
                        <Settings className="h-4 w-4 mr-2" />
                        Manage account
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={logout} className="text-red-600 focus:text-red-600">
                      <LogOut className="h-4 w-4 mr-2" />
                      Sign out
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <div className="px-4 py-2 text-xs text-gray-500">
                      Secured by Mebius
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Button variant="ghost" onClick={login} className="w-full">
                  Log In
                </Button>
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
