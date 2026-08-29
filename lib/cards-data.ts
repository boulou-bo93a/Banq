export interface CardType {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  features?: string[];
  badge?: string;
  image: string;
}

// Card images - stored in environment variables
const BUSINESS_CARD_IMG = process.env.NEXT_PUBLIC_BUSINESS_CARD_IMG || "";
const EMPLOYEE_CARD_IMG = process.env.NEXT_PUBLIC_EMPLOYEE_CARD_IMG || "";
const VISITOR_CARD_IMG = process.env.NEXT_PUBLIC_VISITOR_CARD_IMG || "";

export const cards: CardType[] = [
  {
    id: "business",
    name: "بطاقة الأعمال / Cashless",
    nameEn: "BUSINESS CARD",
    description: "مخصصة للمحترفين والتجار، للتحكم في النفقات وتقليل التعامل بالنقد",
    features: ["🔄 التحويل البنكي", "سقف السحب: 200.000,00 دج يومياً"],
    image: BUSINESS_CARD_IMG
  },
  {
    id: "visitor",
    name: "بطاقة الزوار",
    nameEn: "PREPAID VISITOR",
    description: "للسياح والزوار الأجانب، صالحة من شهر إلى 3 أشهر",
    features: ["🔄 التحويل البنكي", "سقف السحب: 200.000,00 دج يومياً"],
    image: VISITOR_CARD_IMG
  },
  {
    id: "employee",
    name: "بطاقة الموظفين",
    nameEn: "PREPAID EMPLOYEE CARD",
    description: "للموظفين في القطاعين العام والخاص، لإدارة مصاريف المهمات والخدمات الاجتماعية",
    features: ["🔄 التحويل البنكي", "سقف السحب: 200.000,00 دج يومياً"],
    image: EMPLOYEE_CARD_IMG
  }
];

export const heroImage = process.env.NEXT_PUBLIC_HERO_IMAGE || "/images/hero-algerie-poste.jpg";
