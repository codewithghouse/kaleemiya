import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";
import ProductCard from "./ProductCard";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";

const tabs = ["Daily Wear", "Date Night", "Office", "Wedding"];

const products: Record<string, { image: string; name: string; price: string }[]> = {
  "Daily Wear": [
    { image: product1, name: "Royal Amber", price: "₹2,499" },
    { image: product6, name: "Fresh Musk", price: "₹1,899" },
    { image: product2, name: "White Oud Light", price: "₹2,799" },
  ],
  "Date Night": [
    { image: product5, name: "Rose Taifi Intense", price: "₹4,999" },
    { image: product3, name: "Oud Al Layl", price: "₹6,299" },
    { image: product1, name: "Amber Seduction", price: "₹3,799" },
  ],
  Office: [
    { image: product6, name: "Clean Musk", price: "₹2,199" },
    { image: product2, name: "Subtle Attar", price: "₹1,999" },
    { image: product1, name: "Light Amber", price: "₹2,299" },
  ],
  Wedding: [
    { image: product3, name: "Oud Mehar", price: "₹8,999" },
    { image: product5, name: "Bridal Rose Oud", price: "₹7,499" },
    { image: product2, name: "Sultan Special", price: "₹9,999" },
  ],
};

const ShopByOccasion = () => {
  const [active, setActive] = useState("Daily Wear");

  return (
    <section className="section-padding" style={{ background: "linear-gradient(180deg, hsl(0, 78%, 8%) 0%, hsl(0, 0%, 3.1%) 100%)" }}>
      <SectionHeading title="Shop by Occasion" subtitle="Find the perfect fragrance for every moment" />

      <div className="flex justify-center gap-3 mb-12 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`px-6 py-2.5 rounded-sm text-sm font-sans tracking-[0.1em] uppercase transition-all duration-300 ${
              active === tab
                ? "gold-gradient-bg text-primary-foreground"
                : "border border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex gap-8 justify-center flex-wrap"
        >
          {products[active].map((p) => (
            <ProductCard key={p.name} {...p} />
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default ShopByOccasion;
