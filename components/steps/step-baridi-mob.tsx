"use client";

import { useState } from "react";
import { Eye, EyeOff, User, Lock, Check } from "lucide-react";

interface StepBaridiMobProps {
  onNext: (identifier: string, password: string) => void;
  currentStep: number;
}

export function StepBaridiMob({ onNext, currentStep }: StepBaridiMobProps) {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [focused, setFocused] = useState<"identifier" | "password" | null>(null);
  const [touched, setTouched] = useState<{ identifier: boolean; password: boolean }>({ identifier: false, password: false });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!identifier.trim() || !password.trim()) {
      setTouched({ identifier: true, password: true });
      return;
    }

    setIsLoading(true);
    
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      onNext(identifier, password);
    } finally {
      setIsLoading(false);
    }
  };

  const isIdentifierValid = identifier.trim().length > 0;
  const isPasswordValid = password.trim().length > 0;
  const isFormValid = isIdentifierValid && isPasswordValid;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center justify-center p-4">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse-subtle {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out;
        }

        .animate-slideInDown {
          animation: slideInDown 0.4s ease-out;
        }

        .input-focus-ring {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .input-focus-ring:focus {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(29, 78, 216, 0.15);
        }

        .success-check {
          animation: pulse-subtle 1s ease-in-out infinite;
        }
      `}</style>

      <div className="w-full max-w-md">
        {/* Step indicator */}
        <div className="mb-8 animate-slideInDown">
          <div className="flex items-center justify-between mb-3">
            <div className="flex-1">
              <div className="h-1.5 bg-gradient-to-r from-blue-200 to-blue-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-blue-600 to-blue-500 rounded-full transition-all duration-500"
                  style={{ width: `${(currentStep / 4) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
          <p className="text-xs font-medium text-blue-600">Étape {currentStep} de 4</p>
        </div>

        {/* Card container */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden animate-fadeInUp">
          {/* Decorative top bar */}
          <div className="h-1 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600"></div>

          <div className="p-8 space-y-8">
            {/* Header */}
            <div className="text-center space-y-3">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                BIENVENUE SUR BARIDIMOB
              </h1>
              <p className="text-sm text-gray-500">Connectez-vous à votre compte</p>
            </div>

            {/* Logo */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full blur-xl opacity-50"></div>
                <img 
                  src="/images/baridimob-logo.png"
                  alt="Baridi Mob Logo"
                  className="h-28 w-auto relative"
                />
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Identifier Field */}
              <div className="relative">
                <div className="relative">
                  <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-all duration-300 ${
                    focused === "identifier" ? "text-blue-600 scale-110" : "text-gray-400"
                  }`}>
                    <User size={20} />
                  </div>
                  <input
                    type="text"
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                    onFocus={() => {
                      setFocused("identifier");
                      setTouched({ ...touched, identifier: true });
                    }}
                    onBlur={() => setFocused(null)}
                    placeholder="Nom d'utilisateur ou email"
                    disabled={isLoading}
                    className="input-focus-ring w-full pl-12 pr-12 py-4 bg-gradient-to-r from-gray-50 to-gray-100 border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 disabled:opacity-50 disabled:cursor-not-allowed focus:border-blue-500 focus:bg-white"
                  />
                  {isIdentifierValid && (
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-green-500 success-check">
                      <Check size={20} />
                    </div>
                  )}
                </div>
              </div>

              {/* Password Field */}
              <div className="relative">
                <div className="relative">
                  <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-all duration-300 ${
                    focused === "password" ? "text-blue-600 scale-110" : "text-gray-400"
                  }`}>
                    <Lock size={20} />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onFocus={() => {
                      setFocused("password");
                      setTouched({ ...touched, password: true });
                    }}
                    onBlur={() => setFocused(null)}
                    placeholder="Votre mot de passe"
                    disabled={isLoading}
                    className="input-focus-ring w-full pl-12 pr-12 py-4 bg-gradient-to-r from-gray-50 to-gray-100 border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 disabled:opacity-50 disabled:cursor-not-allowed focus:border-blue-500 focus:bg-white"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    disabled={isLoading || !password}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 disabled:opacity-30 transition-colors"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {/* Forget password link */}
              <div className="text-center pt-2">
                <button
                  type="button"
                  className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors hover:underline"
                >
                  Mot de passe oublié ?
                </button>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading || !isFormValid}
                className="w-full mt-8 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin">
                      <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
                    </div>
                    <span>Connexion en cours...</span>
                  </>
                ) : (
                  <>
                    <span>Continuer</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </>
                )}
              </button>
            </form>

            {/* Terms */}
            <div className="text-center text-xs text-gray-600 space-y-2 pt-4">
              <p>En entrant dans l'application, vous confirmez votre accord aux</p>
              <a href="#" className="text-blue-600 hover:text-blue-700 font-medium transition-colors">
                conditions d'accès
              </a>
            </div>
          </div>

          {/* Registration link */}
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-8 py-6 text-center border-t border-gray-200">
            <p className="text-sm text-gray-600">
              Vous n'avez pas de compte ? 
              <a href="#" className="ml-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors">
                S'inscrire
              </a>
            </p>
          </div>
        </div>

        {/* Security info */}
        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-gray-500">
          <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 111.414 1.414L7.414 8l3.293 3.293a1 1 0 11-1.414 1.414l-4-4z" clipRule="evenodd" />
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 010-1.414l4-4a1 1 0 111.414 1.414L14.414 8l3.293 3.293a1 1 0 11-1.414 1.414l-4-4z" clipRule="evenodd" />
          </svg>
          <span>Connexion sécurisée</span>
        </div>
      </div>
    </div>
  );
}
