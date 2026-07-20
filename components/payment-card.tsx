"use client";

import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { CardType } from "@/lib/cards-data";

interface PaymentCardProps {
  card: CardType;
  onSelect: (cardId: string) => void;
}

export function PaymentCard({ card, onSelect }: PaymentCardProps) {
  return (
    <div className="bg-card rounded-2xl border border-border overflow-hidden">
      {/* Card Image */}
      <div className="p-6 pb-2">
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

      {/* Card Info */}
      <div className="p-4 pt-3 text-center">
        <h3 className="text-xl font-bold text-foreground mb-2">{card.name}</h3>
        
        {/* Features */}
        {card.features && card.features.length > 0 && (
          <div className="bg-muted/30 rounded-lg p-2 mb-3 space-y-1">
            {card.features.slice(0, 2).map((feature, idx) => (
              <div key={idx} className="text-xs text-muted-foreground">
                {feature}
              </div>
            ))}
          </div>
        )}
        
        {/* Select Button */}
        <button
          onClick={() => onSelect(card.id)}
          className="inline-flex items-center gap-2 text-[#c9a227] hover:text-[#b8922a] font-semibold text-lg transition-colors"
        >
          اختيار
          <ArrowLeft className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
