"use client";

import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { heroImage } from "@/lib/cards-data";

interface HeroProps {
  onStartNow: () => void;
}

export function Hero({ onStartNow }: HeroProps) {
  return (
    <section id="home" className="flex flex-col bg-background">
      <div className="container mx-auto px-4 py-6 flex flex-col">
        {/* Main Heading */}
        <div className="text-center mb-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#c9a227] mb-3 leading-tight">
            وداعاً للبطاقة الذهبية!
          </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            احجز بطاقتك البريدية بكل سهولة
          </p>
        </div>

        {/* Hero Image - Full Width */}
        <div className="flex items-center justify-center mb-5">
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={heroImage}
              alt="وداعاً للبطاقة الذهبية! احجز بطاقتك البريدية بكل سهولة"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* CTA Button */}
        <div className="mb-4">
          <Button 
            size="lg" 
            onClick={onStartNow} 
            className="w-full bg-[#c9a227] hover:bg-[#b8922a] text-background font-bold text-lg py-5 rounded-xl"
          >
            ابدأ الآن
            <ArrowLeft className="w-5 h-5 mr-2" />
          </Button>
        </div>

        {/* Footer Note */}
        <p className="text-center text-muted-foreground text-sm">
          This site is for demonstration purposes only.
        </p>
      </div>
    </section>
  );
}
