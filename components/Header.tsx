import { Phone, Mail } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-teal-600 to-teal-700 text-white">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span>training@platform.org</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>+1 (555) 123-4567</span>
            </div>
          </div>
          <nav className="flex gap-4 text-sm">
            <a href="#" className="hover:text-teal-200 transition">العربية</a>
            <a href="#" className="hover:text-teal-200 transition">Français</a>
            <a href="#" className="hover:text-teal-200 transition">English</a>
          </nav>
        </div>
      </div>
    </header>
  )
}
