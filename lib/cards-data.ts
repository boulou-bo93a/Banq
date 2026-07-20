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
const PREMIUM_CARD_IMG = process.env.NEXT_PUBLIC_PREMIUM_CARD_IMG || "/images/premium-signature-card.jpg";
const CLASSIC_CARD_IMG = process.env.NEXT_PUBLIC_CLASSIC_CARD_IMG || "";
const BUSINESS_CARD_IMG = process.env.NEXT_PUBLIC_BUSINESS_CARD_IMG || "";
const EMPLOYEE_CARD_IMG = process.env.NEXT_PUBLIC_EMPLOYEE_CARD_IMG || "";
const GIFT_CARD_IMG = process.env.NEXT_PUBLIC_GIFT_CARD_IMG || "";
const VISITOR_CARD_IMG = process.env.NEXT_PUBLIC_VISITOR_CARD_IMG || "";
const JOURNALIST_CARD_IMG = process.env.NEXT_PUBLIC_JOURNALIST_CARD_IMG || "";

export const cards: CardType[] = [
  {
    id: "premium",
    name: "البطاقة الذهبية VIP",
    nameEn: "PREMIUM SIGNATURE",
    description: "مخصصة للعملاء الذين يبحثون عن خدمة مميزة وأعلى حدود للمعاملات",
    features: ["🔄 التحويل البنكي", "سقف السحب: 200.000,00 دج يومياً"],
    badge: "Premium VIP",
    image: PREMIUM_CARD_IMG
  },
  {
    id: "classic",
    name: "البطاقة الكلاسيكية",
    nameEn: "CLASSIC CARD",
    description: "البطاقة الأساسية للعموم، تجمع بين البساطة والأمان",
    features: ["🔄 التحويل البنكي", "سقف السحب: 200.000,00 دج يومياً"],
    image: CLASSIC_CARD_IMG
  },
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
    id: "gift",
    name: "بطاقة الهدايا",
    nameEn: "GIFT CARD",
    description: "بطاقة مسبقة الدفع، هدية عصرية مثالية للمناسبات",
    features: ["🔄 التحويل البنكي", "سقف السحب: 200.000,00 دج يومياً", "قيم محددة: 5.000 / 10.000 / 20.000 دج"],
    image: GIFT_CARD_IMG
  },
  {
    id: "employee",
    name: "بطاقة الموظفين",
    nameEn: "PREPAID EMPLOYEE CARD",
    description: "للموظفين في القطاعين العام والخاص، لإدارة مصاريف المهمات والخدمات الاجتماعية",
    features: ["🔄 التحويل البنكي", "سقف السحب: 200.000,00 دج يومياً"],
    image: EMPLOYEE_CARD_IMG
  },
  {
    id: "journalist",
    name: "بطاقة الصحفيين - Hourra",
    nameEn: "JOURNALIST CARD",
    description: "تكريماً لحرية التعبير، مخصصة للصحفيين المحترفين مع مزايا حصرية",
    features: ["🔄 التحويل البنكي", "سقف السحب: 200.000,00 دج يومياً"],
    badge: "للصحفيين",
    image: JOURNALIST_CARD_IMG
  }
];

export const heroImage = process.env.NEXT_PUBLIC_HERO_IMAGE || "/images/hero-algerie-poste.jpg";
