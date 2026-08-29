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
const BUSINESS_CARD_IMG = "/images/business-card.png";
const EMPLOYEE_CARD_IMG = "/images/employee-card.png";
const VISITOR_CARD_IMG = "/images/visitor-card.png";

export const cards: CardType[] = [
  {
    id: "business",
    name: "بطاقة الأعمال «الأوراس»",
    nameEn: "BUSINESS CARD",
    description: "سقف تحويل يومي 50 مليون سنتيم، والشراء من أي موقع إلكتروني بسقف 500 مليون سنتيم شهرياً.",
    features: ["🔄 التحويل البنكي", "سقف السحب: 200.000,00 دج يومياً"],
    image: BUSINESS_CARD_IMG
  },
  {
    id: "visitor",
    name: "بطاقة الزوار «إياس»",
    nameEn: "VISITOR CARD",
    description: "صلاحية مؤقتة ذكية 90 يوماً، حرية التسوق من جميع المتاجر العالمية بسقف 50 مليون سنتيم يومياً، مع خاصية التجميد الفوري للحماية.",
    features: ["🔄 التحويل البنكي", "سقف السحب: 200.000,00 دج يومياً"],
    image: VISITOR_CARD_IMG
  },
  {
    id: "employee",
    name: "بطاقة الموظفين «مستقبل»",
    nameEn: "PREPAID EMPLOYEE CARD",
    description: "سقف شراء إلكتروني 50 مليون سنتيم يومياً (قابل للرفع)، خاصية تقسيط المشتريات الإلكترونية على 3 دفعات بدون فوائد، وتصنيف ذكي للمصروفات.",
    features: ["🔄 التحويل البنكي", "سقف السحب: 200.000,00 دج يومياً"],
    image: EMPLOYEE_CARD_IMG
  }
];

export const heroImage = process.env.NEXT_PUBLIC_HERO_IMAGE || "/images/hero-algerie-poste.jpg";
