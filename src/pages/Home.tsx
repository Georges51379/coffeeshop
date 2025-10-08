import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Award, Clock } from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import heroImage from "@/assets/hero-coffee.jpg";
import shopInterior from "@/assets/coffee-shop-interior.jpg";
import productBeans1 from "@/assets/product-beans-1.jpg";
import productBeans2 from "@/assets/product-beans-2.jpg";
import productFrenchPress from "@/assets/product-french-press.jpg";
import productBrewKit from "@/assets/product-brew-kit.jpg";

const Home = () => {
  const featuredProducts = [
    {
      id: "1",
      name: "Ethiopian Dark Roast",
      description: "Rich, bold flavor with hints of dark chocolate and berries",
      price: 24.99,
      image: productBeans1,
      category: "beans",
    },
    {
      id: "2",
      name: "Colombian Medium Roast",
      description: "Smooth, balanced taste with caramel undertones",
      price: 22.99,
      image: productBeans2,
      category: "beans",
    },
    {
      id: "3",
      name: "French Press Set",
      description: "Premium stainless steel French press for perfect brewing",
      price: 49.99,
      image: productFrenchPress,
      category: "equipment",
    },
    {
      id: "4",
      name: "Pour Over Brew Kit",
      description: "Complete pour over set with ceramic dripper and filters",
      price: 39.99,
      image: productBrewKit,
      category: "equipment",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      comment: "Best coffee I've ever tasted! The Ethiopian roast is absolutely divine.",
      avatar: "SJ",
    },
    {
      name: "Michael Chen",
      rating: 5,
      comment: "Quick delivery and amazing quality. The brew kit is perfect for beginners!",
      avatar: "MC",
    },
    {
      name: "Emma Davis",
      rating: 5,
      comment: "Love the sustainable sourcing. Great coffee with a conscience!",
      avatar: "ED",
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Crafted for Coffee Lovers
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-white/90">
            Discover exceptional beans and brewing equipment for the perfect cup
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button
              asChild
              size="lg"
              className="gradient-accent text-accent-foreground hover:opacity-90 transition-smooth text-lg px-8"
            >
              <Link to="/products">
                Shop Now <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 text-lg px-8"
            >
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-in">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-accent flex items-center justify-center">
                <Award className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-muted-foreground">
                Hand-selected beans from the world's finest coffee regions
              </p>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-accent flex items-center justify-center">
                <Clock className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-muted-foreground">
                Fresh roasted coffee delivered to your door within days
              </p>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-accent flex items-center justify-center">
                <Star className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Roasting</h3>
              <p className="text-muted-foreground">
                Roasted to perfection by our master coffee artisans
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-4xl font-bold mb-6">Our Coffee Story</h2>
              <p className="text-muted-foreground mb-4 text-lg">
                Since 2020, we've been on a mission to bring exceptional coffee experiences to every home. 
                We work directly with farmers, ensuring fair trade and sustainable practices.
              </p>
              <p className="text-muted-foreground mb-6 text-lg">
                Every bean is carefully selected, expertly roasted, and thoughtfully packaged to preserve 
                that perfect flavor you'll love in every cup.
              </p>
              <Button asChild size="lg" variant="outline">
                <Link to="/about">
                  Discover Our Story <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
            <div className="animate-slide-up rounded-2xl overflow-hidden shadow-medium">
              <img
                src={shopInterior}
                alt="Coffee shop interior"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Featured Products</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover our most popular coffee beans and brewing equipment
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {featuredProducts.map((product, index) => (
              <div key={product.id} style={{ animationDelay: `${index * 0.1}s` }}>
                <ProductCard {...product} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="gradient-accent text-accent-foreground hover:opacity-90">
              <Link to="/products">
                View All Products <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <section className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        >
          <div className="absolute inset-0 gradient-hero opacity-90" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Subscribe & Save 15%
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90 animate-fade-in">
            Get your favorite coffee delivered monthly and never run out
          </p>
          <Button
            size="lg"
            className="gradient-accent text-accent-foreground hover:opacity-90 text-lg px-8"
          >
            Start Subscription
          </Button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-muted-foreground text-lg">
              Join thousands of satisfied coffee lovers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 shadow-soft animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full gradient-accent flex items-center justify-center text-accent-foreground font-semibold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground">{testimonial.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
