import { Award, Heart, Leaf, Users } from "lucide-react";
import shopInterior from "@/assets/coffee-shop-interior.jpg";
import heroImage from "@/assets/hero-coffee.jpg";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Passion for Quality",
      description:
        "Every bean is hand-selected and expertly roasted to bring out the best flavors.",
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description:
        "We partner with farmers who practice sustainable, eco-friendly coffee cultivation.",
    },
    {
      icon: Users,
      title: "Community First",
      description:
        "Fair trade practices ensure our farmers receive fair compensation for their hard work.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "Award-winning roasting techniques perfected over years of dedication and craft.",
    },
  ];

  return (
    <main className="min-h-screen pt-24 pb-12">
      {/* Hero Section */}
      <section className="relative h-96 mb-16">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        >
          <div className="absolute inset-0 gradient-hero opacity-80" />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center container mx-auto px-4">
          <div className="text-center text-white animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Story</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Crafting exceptional coffee experiences since 2020
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4">
        {/* Story Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-4xl font-bold mb-6">From Bean to Cup</h2>
              <div className="space-y-4 text-muted-foreground text-lg">
                <p>
                  Artisan Coffee Co. was born from a simple passion: the love of a perfect cup
                  of coffee. Founded in 2020 by coffee enthusiasts who believed that exceptional
                  coffee should be accessible to everyone, we've grown into a community of
                  thousands of satisfied customers.
                </p>
                <p>
                  Our journey takes us to the finest coffee-growing regions around the world. We
                  work directly with farmers who share our commitment to quality and
                  sustainability. Each bean is carefully selected, ensuring only the best make it
                  to your cup.
                </p>
                <p>
                  Our master roasters bring decades of experience, roasting in small batches to
                  preserve the unique characteristics of each origin. The result? Coffee that's
                  fresh, flavorful, and unforgettable.
                </p>
              </div>
            </div>
            <div className="animate-slide-up rounded-2xl overflow-hidden shadow-medium">
              <img
                src={shopInterior}
                alt="Our coffee shop"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-20">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-card rounded-xl p-6 shadow-soft text-center animate-fade-in hover:shadow-medium transition-smooth"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-accent flex items-center justify-center">
                    <Icon className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Mission Section */}
        <section className="bg-muted/30 rounded-2xl p-12 animate-fade-in">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-muted-foreground text-lg mb-6">
              To bring the world's finest coffee to your home while supporting sustainable
              farming practices and fair trade. We believe every cup should be an experience—one
              that connects you to the farmers, the land, and the craft behind exceptional
              coffee.
            </p>
            <p className="text-muted-foreground text-lg">
              Join us in our journey to make the world a better place, one cup at a time.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;
