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
        <div
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 md:grid md:grid-cols-3 md:items-stretch md:overflow-visible md:pb-0"
          aria-label="البطاقات المتاحة"
          dir="rtl"
        >
          {cards.map((card) => (
            <div key={card.id} className="min-w-[min(86vw,21rem)] snap-center md:min-w-0">
              <PaymentCard card={card} onSelect={onSelectCard} />
            </div>
          ))}
        </div>
        <p className="mt-3 text-center text-xs text-muted-foreground md:hidden" aria-hidden="true">
          اسحب جانبياً لاستعراض البطاقات
        </p>
      </div>
    </section>
  );
}
