import { useState } from "react";
import { Link } from "react-router";
import { Menu, X, ShoppingBag, Search, User } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Calculate total quantity of items in cart
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  const cartItemCount = cartItems.reduce((total, item) => {
    return total + (item.quantity || 1);
  }, 0);

  // Function to close mobile menu
  const closeMobileMenu = () => setIsMenuOpen(false);

  return (
    <header className="bg-white border-b border-gray-200 px-4 lg:px-16">
      <div>
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="font-bold text-2xl">
            Mebius
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {[
              { path: "/shop/shoes", label: "Shoes" },
              { path: "/shop/tshirts", label: "T-Shirt" },
              { path: "/shop/shorts", label: "Shorts" },
              { path: "/shop/pants", label: "Pants" },
              { path: "/shop/socks", label: "Socks" },
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="font-medium hover:text-gray-600"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-6">
            {/* Search Icon */}
            <button className="h-10 w-10 flex items-center justify-center rounded-full hover:bg-gray-100">
              <Search className="h-5 w-5" />
            </button>

            {/* Cart Icon */}
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

            {/* User Icon / Account Menu - simplified without Clerk */}
            <Link
              to="/account"
              className="h-10 w-10 flex items-center justify-center rounded-full hover:bg-gray-100"
            >
              <User className="h-5 w-5" />
            </Link>

            {/* Mobile Menu Button */}
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

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-6">
            <div className="flex flex-col space-y-4">
              {[
                { path: "/shop/shoes", label: "Shoes" },
                { path: "/shop/tshirts", label: "T-Shirt" },
                { path: "/shop/shorts", label: "Shorts" },
                { path: "/shop/pants", label: "Pants" },
                { path: "/shop/socks", label: "Socks" },
              ].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="font-medium hover:text-gray-600"
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
