"use client";

import { cards } from "@/lib/cards-data";
import { PaymentCard } from "./payment-card";

interface CardsSectionProps {
  onSelectCard: (cardId: string) => void;
}

export function CardsSection({ onSelectCard }: CardsSectionProps) {
  return (
    <section id="cards" className="py-8">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            اختر بطاقتك الجديدة
          </h2>
          <p className="text-muted-foreground">
            ثلاث بطاقات جديدة تناسب كل احتياجاتك
          </p>
        </div>

        {/* Cards List */}
        <div className="flex flex-col gap-5 max-w-md mx-auto">
          {cards.map((card) => (
            <PaymentCard key={card.id} card={card} onSelect={onSelectCard} />
          ))}
        </div>
      </div>
    </section>
  );
}
