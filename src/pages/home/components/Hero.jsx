import { Badge } from "@/components/ui/badge";
import "./Hero.css";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

function Hero() {
  return (
    <section className="px-4 lg:px-16 py-4 sm:py-8">
      <div className="hero-container">
        <div className="hero-content">
          <Badge className="bg-[#febc26] hover:bg-[#febc26] text-black w-fit px-2 py-1 text-xs font-normal mb-2">WEEKLY DISCOUNT</Badge>
          <h1 className="hero-title">Premium Product Online Shop</h1>
          <p className="text-sm sm:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quos
            suscipit est autem quia? Voluptatem?
          </p>
          <Button className="w-fit mt-2 sm:mt-4" asChild>
            <Link to="/shop">Shop Now</Link>
          </Button>
        </div>
        <div className="hero-image-container">
          <img
            src="https://fee-storefront.vercel.app/assets/hero/hero.jpg"
            alt="Premium products showcase"
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
