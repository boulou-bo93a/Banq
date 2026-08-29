"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"

interface StepBaridiMobLoginProps {
  onNext: (data: LoginData) => void
  currentStep: number
}

export interface LoginData {
  username: string
  password: string
}

export function StepBaridiMobLogin({ onNext, currentStep }: StepBaridiMobLoginProps) {
  const [formData, setFormData] = useState<LoginData>({
    username: "",
    password: "",
  })

  const isValid = formData.username.length > 0 && formData.password.length > 0

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      {/* Header */}
      <div className="bg-white py-4 px-4 flex justify-between items-center text-sm text-gray-500">
        <span>9:41</span>
        <span>mobilis</span>
      </div>

      {/* Title */}
      <div className="text-center py-6">
        <h1 className="text-lg font-medium text-gray-700 tracking-[0.3em]">
          BIENVENUE SUR BARIDIMOB
        </h1>
      </div>

      {/* Logo */}
      <div className="flex justify-center mb-8">
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <Image
            src="/images/baridimob-logo.png"
            alt="بريدي موب"
            width={160}
            height={100}
            className="object-contain"
          />
        </div>
      </div>

      {/* Form */}
      <div className="bg-white mx-4 rounded-2xl p-6 shadow-sm">
        {/* Username */}
        <div className="mb-4">
          <label className="block text-gray-600 text-center mb-2">
            {"Entrer l'identifiant"}
          </label>
          <Input
            type="text"
            value={formData.username}
            onChange={(e) => setFormData((prev) => ({ ...prev, username: e.target.value }))}
            className="bg-gray-50 border-gray-200 text-gray-800 h-14 text-center text-lg"
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block text-gray-600 text-center mb-2">
            Entrer le mot de passe
          </label>
          <Input
            type="password"
            value={formData.password}
            onChange={(e) => setFormData((prev) => ({ ...prev, password: e.target.value }))}
            className="bg-gray-50 border-gray-200 text-gray-800 h-14 text-center text-lg"
          />
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          <Button
            onClick={() => onNext(formData)}
            disabled={!isValid}
            className="bg-[#5d6d7e] hover:bg-[#4a5a6a] text-white px-6 h-12"
          >
            Continuer
          </Button>
          <button className="text-[#2980b9] text-sm hover:underline">
            Réinitialiser le mot de passe
          </button>
        </div>
      </div>

      {/* Terms */}
      <div className="text-center px-6 py-4">
        <p className="text-gray-500 text-sm">
          {"En entrant dans l'application, vous confirmez votre accord aux "}
          <span className="text-[#2980b9] underline">{"conditions d'accès"}</span>.
        </p>
      </div>

      {/* Registration Link */}
      <div className="text-center py-4">
        <button className="text-[#2980b9] hover:underline">
          {"Aller à l'enregistrement"}
        </button>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#2c3e50] py-4">
        <div className="flex justify-around items-center text-white">
          <button className="flex flex-col items-center gap-1">
            <div className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center text-xs">i</div>
          </button>
          <button className="flex flex-col items-center gap-1">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </button>
          <button className="flex flex-col items-center gap-1">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </button>
          <button className="flex flex-col items-center gap-1">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>
          <button className="flex flex-col items-center gap-1">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
