import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, ArrowLeft } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const GyrocraftNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { label: "Home", href: "/gyrocraft" },
    { label: "About", href: "/gyrocraft/about" },
  ];

  const companyLinks = [
    { label: "Licensing Tiers", href: "/gyrocraft/licensing" },
    { label: "Technical Specs", href: "/gyrocraft/licensing#specs" },
  ];

  const investorLinks = [
    { label: "Investment Thesis", href: "/gyrocraft/investors" },
    { label: "Financial Projections", href: "/gyrocraft/investors#financials" },
    { label: "Patent Acquisition", href: "/gyrocraft/acquisition" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gyrocraft-dark/95 backdrop-blur-md border-b border-gyrocraft-text/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/gyrocraft" className="flex items-center gap-2">
            <span className="text-xl md:text-2xl font-display font-bold text-gyrocraft-text">
              GYROCRAFT
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              to="/"
              className="flex items-center gap-1 text-gyrocraft-text/70 hover:text-gyrocraft-text font-medium transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Ravolution
            </Link>
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={`font-medium transition-colors ${
                  isActive(link.href)
                    ? "text-gyrocraft-teal"
                    : "text-gyrocraft-text/70 hover:text-gyrocraft-text"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* For Companies Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-gyrocraft-text/70 hover:text-gyrocraft-text font-medium transition-colors">
                For Companies <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-gyrocraft-dark border-gyrocraft-text/20">
                {companyLinks.map((link) => (
                  <DropdownMenuItem key={link.label} asChild>
                    <Link to={link.href} className="text-gyrocraft-text hover:text-gyrocraft-teal cursor-pointer">
                      {link.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* For Investors Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-gyrocraft-text/70 hover:text-gyrocraft-text font-medium transition-colors">
                For Investors <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-gyrocraft-dark border-gyrocraft-text/20">
                {investorLinks.map((link) => (
                  <DropdownMenuItem key={link.label} asChild>
                    <Link to={link.href} className="text-gyrocraft-text hover:text-gyrocraft-teal cursor-pointer">
                      {link.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" className="text-gyrocraft-text hover:bg-gyrocraft-text/10" asChild>
              <Link to="/gyrocraft/about#contact">Contact</Link>
            </Button>
            <Button className="bg-gyrocraft-teal hover:bg-gyrocraft-teal/90 text-gyrocraft-dark font-semibold" asChild>
              <a href="https://meetings-eu1.hubspot.com/daza" target="_blank" rel="noopener noreferrer">
                Schedule Demo
              </a>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gyrocraft-text p-2"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gyrocraft-text/10 animate-fade-in">
            <div className="flex flex-col gap-4">
              <Link
                to="/"
                className="flex items-center gap-1 font-medium py-2 text-gyrocraft-text/70"
                onClick={() => setIsOpen(false)}
              >
                <ArrowLeft className="w-4 h-4" /> Back to Ravolution
              </Link>
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`font-medium py-2 ${
                    isActive(link.href) ? "text-gyrocraft-teal" : "text-gyrocraft-text/70"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              
              <div className="py-2">
                <p className="text-gyrocraft-text/50 text-sm mb-2">For Companies</p>
                {companyLinks.map((link) => (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="block text-gyrocraft-text/70 py-1 pl-3"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="py-2">
                <p className="text-gyrocraft-text/50 text-sm mb-2">For Investors</p>
                {investorLinks.map((link) => (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="block text-gyrocraft-text/70 py-1 pl-3"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="flex flex-col gap-2 pt-4 border-t border-gyrocraft-text/10">
                <Button variant="ghost" className="text-gyrocraft-text hover:bg-gyrocraft-text/10 justify-start" asChild>
                  <Link to="/gyrocraft/about#contact" onClick={() => setIsOpen(false)}>Contact</Link>
                </Button>
                <Button className="bg-gyrocraft-teal hover:bg-gyrocraft-teal/90 text-gyrocraft-dark font-semibold" asChild>
                  <a href="https://meetings-eu1.hubspot.com/daza" target="_blank" rel="noopener noreferrer">
                    Schedule Demo
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

export default GyrocraftNavbar;
