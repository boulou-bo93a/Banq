export default function Hero() {
  return (
    <section className="bg-white py-12 border-b">
      <div className="max-w-7xl mx-auto px-4">
        <nav className="flex gap-8 mb-12 justify-center flex-wrap">
          <a href="#" className="text-teal-700 hover:text-teal-900 font-medium transition">🏠 Home</a>
          <a href="#" className="text-gray-700 hover:text-teal-700 font-medium transition">📖 User Guide</a>
          <a href="#" className="text-gray-700 hover:text-teal-700 font-medium transition">📚 Training</a>
          <a href="#" className="text-gray-700 hover:text-teal-700 font-medium transition">🔄 Reissue</a>
          <a href="#" className="text-gray-700 hover:text-teal-700 font-medium transition">🔍 Verify</a>
          <a href="#" className="text-gray-700 hover:text-teal-700 font-medium transition">📞 Contact Us</a>
        </nav>

        <div className="text-center py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to the Training Platform 2026
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            This platform provides comprehensive step-by-step training and guidance available 24/7. 
            Access our services at any time from anywhere, safely and securely, without needing to visit in person.
          </p>
        </div>
      </div>
    </section>
  )
}
