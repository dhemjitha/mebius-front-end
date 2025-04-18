import "./Hero.css";
import { Button } from "@/components/ui/button";

function Hero() {
  return (
    <section className="px-4 sm:px-8 py-4 sm:py-8">
      <div className="hero-container">
        <div className="hero-content">
          <span className="discount-badge">WEEKLY DISCOUNT</span>
          <h1 className="hero-title">Premium Product Online Shop</h1>
          <p className="text-sm sm:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quos
            suscipit est autem quia? Voluptatem?
          </p>
          <Button className="w-fit mt-2 sm:mt-4" asChild>
            <a to="/shop">Shop Now</a>
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
