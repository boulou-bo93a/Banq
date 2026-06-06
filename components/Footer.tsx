export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Training Platform</h3>
            <p className="text-sm text-gray-400">
              Ministry of Training & Development
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-teal-400 transition">Home</a></li>
              <li><a href="#" className="hover:text-teal-400 transition">User Guide</a></li>
              <li><a href="#" className="hover:text-teal-400 transition">Contact Support</a></li>
              <li><a href="#" className="hover:text-teal-400 transition">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact Information</h4>
            <p className="text-sm mb-2">📞 Phone: +1 (555) 123-4567</p>
            <p className="text-sm mb-2">📧 Email: training@platform.org</p>
            <p className="text-sm">📍 Building Ahmed Francis, Training District</p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-sm text-gray-400">
            Copyright © 2026. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
