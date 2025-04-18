import { useState } from "react";
import { Link } from "react-router";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribing email:", email);
    // Reset form
    setEmail("");
    // You would typically send this to your API
  };

  return (
    <footer className="bg-black text-white py-8 pl-8 md:pl-16">
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand and Newsletter */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Mebius</h2>
            <p className="text-gray-400 text-sm">
              Mebius is a free UI Kit from Paperpillar that you can use for your
              personal or commercial project.
            </p>
            <form
              onSubmit={handleSubmit}
              className="mt-4 flex flex-col sm:flex-row gap-2"
            >
              <input
                type="email"
                placeholder="Type your email address"
                className="px-4 py-2 bg-transparent border border-gray-700 rounded-full text-sm flex-grow"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="px-6 py-2 bg-white text-black rounded-full text-sm font-medium"
              >
                Submit
              </button>
            </form>
          </div>

          <div></div>
          <div className="grid grid-cols-3 col-span-2 gap-4">
            {/* Popular Links */}
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider">
                Popular
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/category/shoes"
                    className="text-sm hover:text-gray-300"
                  >
                    Shoes
                  </Link>
                </li>
                <li>
                  <Link
                    to="/category/t-shirt"
                    className="text-sm hover:text-gray-300"
                  >
                    T-Shirt
                  </Link>
                </li>
                <li>
                  <Link
                    to="/category/jackets"
                    className="text-sm hover:text-gray-300"
                  >
                    Jackets
                  </Link>
                </li>
                <li>
                  <Link
                    to="/category/hat"
                    className="text-sm hover:text-gray-300"
                  >
                    Hat
                  </Link>
                </li>
                <li>
                  <Link
                    to="/category/accessories"
                    className="text-sm hover:text-gray-300"
                  >
                    Accessories
                  </Link>
                </li>
              </ul>
            </div>

            {/* Menu Links */}
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider">
                Menu
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/all-category"
                    className="text-sm hover:text-gray-300"
                  >
                    All Category
                  </Link>
                </li>
                <li>
                  <Link
                    to="/gift-cards"
                    className="text-sm hover:text-gray-300"
                  >
                    Gift Cards
                  </Link>
                </li>
                <li>
                  <Link
                    to="/special-events"
                    className="text-sm hover:text-gray-300"
                  >
                    Special Events
                  </Link>
                </li>
                <li>
                  <Link
                    to="/testimonial"
                    className="text-sm hover:text-gray-300"
                  >
                    Testimonial
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="text-sm hover:text-gray-300">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            {/* Other Links */}
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider">
                Other
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/tracking" className="text-sm hover:text-gray-300">
                    Tracking Package
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="text-sm hover:text-gray-300">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-sm hover:text-gray-300">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-sm hover:text-gray-300">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-sm hover:text-gray-300">
                    Terms and Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-xs text-gray-400">
          <p>&copy; {new Date().getFullYear()} Mebius. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
