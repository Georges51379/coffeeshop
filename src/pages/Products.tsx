import { useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import productBeans1 from "@/assets/product-beans-1.jpg";
import productBeans2 from "@/assets/product-beans-2.jpg";
import productFrenchPress from "@/assets/product-french-press.jpg";
import productBrewKit from "@/assets/product-brew-kit.jpg";
import productMug from "@/assets/product-mug.jpg";
import productGrinder from "@/assets/product-grinder.jpg";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const products = [
    {
      id: "1",
      name: "Ethiopian Dark Roast",
      description: "Rich, bold flavor with hints of dark chocolate and berries. Perfect for espresso.",
      price: 24.99,
      image: productBeans1,
      category: "beans",
    },
    {
      id: "2",
      name: "Colombian Medium Roast",
      description: "Smooth, balanced taste with caramel undertones. Great for any brewing method.",
      price: 22.99,
      image: productBeans2,
      category: "beans",
    },
    {
      id: "3",
      name: "French Press Set",
      description: "Premium stainless steel French press for perfect full-bodied coffee.",
      price: 49.99,
      image: productFrenchPress,
      category: "equipment",
    },
    {
      id: "4",
      name: "Pour Over Brew Kit",
      description: "Complete pour over set with ceramic dripper, server, and filters.",
      price: 39.99,
      image: productBrewKit,
      category: "equipment",
    },
    {
      id: "5",
      name: "Artisan Coffee Mug",
      description: "Handcrafted ceramic mug with double-wall insulation. Keeps coffee hot longer.",
      price: 18.99,
      image: productMug,
      category: "merchandise",
    },
    {
      id: "6",
      name: "Burr Coffee Grinder",
      description: "Precision burr grinder with 15 grind settings for perfect consistency.",
      price: 89.99,
      image: productGrinder,
      category: "equipment",
    },
  ];

  const categories = [
    { id: "all", name: "All Products" },
    { id: "beans", name: "Coffee Beans" },
    { id: "equipment", name: "Brew Equipment" },
    { id: "merchandise", name: "Merchandise" },
  ];

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <main className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our carefully curated selection of premium coffee and brewing essentials
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className={
                selectedCategory === category.id
                  ? "gradient-accent text-accent-foreground"
                  : ""
              }
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <div key={product.id} style={{ animationDelay: `${index * 0.1}s` }}>
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No products found in this category.
            </p>
          </div>
        )}
      </div>
    </main>
  );
};

export default Products;
