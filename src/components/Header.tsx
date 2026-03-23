import { useState, useEffect } from "react";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = ["Home", "Shop", "Attar", "Oud", "Gift Sets", "Contact"];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-6 md:px-12 lg:px-20 h-20">
        {/* Logo */}
        <a href="/" className="flex-shrink-0">
          <img 
            src="/logo.jpg" 
            alt="Kaleemiya Perfumes Logo" 
            className="h-10 md:h-14 w-auto object-contain brightness-110"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-foreground/80 text-sm font-sans tracking-[0.15em] uppercase hover:text-primary transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-primary after:transition-all after:duration-500 hover:after:w-full"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Right icons */}
        <div className="flex items-center gap-5">
          <button className="text-foreground/70 hover:text-primary transition-colors duration-300" aria-label="Search">
            <Search className="w-5 h-5" />
          </button>
          <button className="text-foreground/70 hover:text-primary transition-colors duration-300 relative" aria-label="Cart">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full gold-gradient-bg text-[10px] flex items-center justify-center text-primary-foreground font-semibold">
              0
            </span>
          </button>
          <button
            className="lg:hidden text-foreground/70 hover:text-primary transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden bg-background/98 backdrop-blur-lg border-t border-border/30 overflow-hidden"
          >
            <nav className="flex flex-col items-center py-8 gap-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link}
                  href="#"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.4 }}
                  className="text-foreground/80 text-sm font-sans tracking-[0.2em] uppercase hover:text-primary transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
