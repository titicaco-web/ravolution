import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Founder", href: "/founder" },
    { label: "Patents", href: "/#patents" },
    { label: "Products", href: "/#products" },
    { label: "Concepts", href: "/#concepts" },
    { label: "Investors", href: "/#investors" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <span className="text-xl md:text-2xl font-display font-bold text-white">
              Ravolution
            </span>
            <span className="text-xs font-medium text-gold bg-gold/20 px-2 py-0.5 rounded">
              AB
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white/80 hover:text-white font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" className="text-white hover:bg-white/10" asChild>
              <a href="#contact">Contact</a>
            </Button>
            <Button className="bg-accent hover:bg-accent-light text-white" asChild>
              <a href="https://meetings-eu1.hubspot.com/daza" target="_blank" rel="noopener noreferrer">
                Licensing Inquiry
              </a>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-white/10 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-white/80 hover:text-white font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-2 pt-4 border-t border-white/10">
                <Button variant="ghost" className="text-white hover:bg-white/10 justify-start" asChild>
                  <a href="#contact">Contact</a>
                </Button>
                <Button className="bg-accent hover:bg-accent-light text-white" asChild>
                  <a href="https://meetings-eu1.hubspot.com/daza" target="_blank" rel="noopener noreferrer">
                    Licensing Inquiry
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
