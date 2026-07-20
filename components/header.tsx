"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-white p-1.5 shadow-sm border border-border/30 flex items-center justify-center overflow-hidden">
              <Image
                src={process.env.NEXT_PUBLIC_LOGO_URL || "/images/logo.png"}
                alt="بريد الجزائر"
                width={28}
                height={28}
                className="object-contain w-auto h-auto"
              />
            </div>
            <span className="text-base font-bold text-foreground">بريد الجزائر</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              الرئيسية
            </button>
            <button
              onClick={() => scrollToSection("cards")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              البطاقات
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border/50">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors text-right"
              >
                الرئيسية
              </button>
              <button
                onClick={() => scrollToSection("cards")}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors text-right"
              >
                البطاقات
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
