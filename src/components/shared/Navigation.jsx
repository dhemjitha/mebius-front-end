import { useState } from "react";
import { Link } from "react-router";
import { Menu, X, ShoppingBag, Search, User } from "lucide-react";
import { Button } from "../ui/button";
import { useCart } from "@/lib/CartContext";
export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { cart } = useCart();
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

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

            <Link
              to="/account"
              className="h-10 w-10 flex items-center justify-center rounded-full hover:bg-gray-100"
            >
              <User className="h-5 w-5" />
            </Link>

            <div className="hidden md:flex items-center space-x-4">
              <Button variant="ghost">
                <Link to="/sign-in">Log In</Link>
              </Button>
              <Button>
                <Link to="/sign-up">Sign Up</Link>
              </Button>

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

            <div className="flex flex-col space-y-4">
              <Button variant="ghost">
                <Link to="/sign-in">Log In</Link>
              </Button>
              <Button>
                <Link to="/sign-up">Sign Up</Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
