"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { CardType, cards } from "@/lib/cards-data";
import { Button } from "@/components/ui/button";

interface CardDetailProps {
  card: CardType;
  onBack: () => void;
  onOrder: () => void;
  onSelectCard: (cardId: string) => void;
}

export function CardDetail({ card, onBack, onOrder, onSelectCard }: CardDetailProps) {
  const otherCards = cards.filter((c) => c.id !== card.id).slice(0, 2);

  return (
    <section className="py-6">
      <div className="container mx-auto px-4">
        <div className="max-w-lg mx-auto">
          {/* Card Image */}
          <div className="mb-6">
            <div className="relative aspect-[1.6/1] rounded-xl overflow-hidden shadow-lg">
              <Image
                src={card.image}
                alt={card.name}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 500px"
              />
            </div>
          </div>

          {/* Card Name */}
          <h1 className="text-2xl font-bold text-foreground text-center mb-4">
            {card.name}
          </h1>

          {/* Badge */}
          {card.badge && (
            <div className="bg-[#c9a227]/20 text-[#c9a227] px-4 py-3 rounded-xl text-center text-sm font-medium mb-4">
              {card.badge}
            </div>
          )}

          {/* Features */}
          {card.features && card.features.length > 0 && (
            <div className="bg-muted/50 rounded-xl p-4 mb-4 space-y-2">
              {card.features.map((feature, idx) => (
                <div key={idx} className="text-foreground text-sm font-medium">
                  {feature}
                </div>
              ))}
            </div>
          )}

          {/* Description */}
          <div className="rounded-xl border border-border bg-muted/30 p-4 mb-6 text-center" dir="rtl">
            <p className="text-sm font-semibold text-foreground mb-2">وصف البطاقة</p>
            <p className="text-muted-foreground leading-relaxed">
              {card.description}
            </p>
          </div>

          {/* Order Button */}
          <Button
            onClick={onOrder}
            size="lg"
            className="w-full bg-[#c9a227] hover:bg-[#b8922a] text-background font-bold text-lg py-6 rounded-xl mb-8"
          >
            طلب البطاقة
          </Button>

          {/* Other Cards Section */}
          <div>
            <h2 className="text-xl font-bold text-foreground text-center mb-6">
              بطاقات أخرى
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {otherCards.map((otherCard) => (
                <button
                  key={otherCard.id}
                  onClick={() => {
                    onSelectCard(otherCard.id);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="bg-card rounded-xl border border-border p-3 text-center hover:border-[#c9a227] transition-colors"
                >
                  <div className="relative aspect-[1.6/1] rounded-lg overflow-hidden mb-2">
                    <Image
                      src={otherCard.image}
                      alt={otherCard.name}
                      fill
                      className="object-contain"
                      sizes="200px"
                    />
                  </div>
                  <p className="text-sm font-medium text-foreground truncate">
                    {otherCard.name}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Back Button */}
          <button
            onClick={onBack}
            className="w-full mt-8 flex items-center justify-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowRight className="w-4 h-4" />
            العودة لجميع البطاقات
          </button>
        </div>
      </div>
    </section>
  );
}
