import { Outlet, Link, useLocation } from "react-router";
import { Phone, Mail, MessageCircle, Menu, X } from "lucide-react";
import { useState } from "react";
import logoImg from "../../imports/27e087ae-c481-4202-a531-d321f67cd4e3-removebg-preview.png";

export function RootLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Tour Packages", path: "/packages" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2 text-sm">
          <div className="flex items-center gap-4">
            <a href="tel:9473009712" className="flex items-center gap-1 hover:text-blue-200 transition">
              <Phone className="w-4 h-4" />
              <span>9473009712</span>
            </a>
            <a href="mailto:sajhasafar@gmail.com" className="hidden sm:flex items-center gap-1 hover:text-blue-200 transition">
              <Mail className="w-4 h-4" />
              <span>sajhasafar@gmail.com</span>
            </a>
          </div>
          <a
            href="https://wa.me/919473009712"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 bg-green-500 hover:bg-green-600 px-3 py-1 rounded-full transition"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp Now</span>
          </a>
        </div>
      </div>

      {/* Navigation */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center gap-3">
              <img src={logoImg} alt="Sajha Safar Logo" className="h-12 w-auto object-contain drop-shadow-sm" />
              <div className="hidden sm:block">
                <h1 className="text-2xl font-bold text-blue-800 tracking-tight">Sajha Safar</h1>
                <p className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold mt-0.5">Your Journey, Our Passion</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`transition ${
                    isActive(link.path)
                      ? "text-blue-600 font-semibold"
                      : "text-gray-700 hover:text-blue-600"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-blue-600"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-2 transition ${
                    isActive(link.path)
                      ? "text-blue-600 font-semibold"
                      : "text-gray-700 hover:text-blue-600"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-auto">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-white p-1 rounded-lg">
                  <img src={logoImg} alt="Sajha Safar Logo" className="h-10 w-auto object-contain" />
                </div>
                <h3 className="text-xl font-bold">Sajha Safar</h3>
              </div>
              <p className="text-gray-400">
                Your trusted travel partner for unforgettable journeys across India and beyond.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Info</h3>
              <div className="space-y-2 text-gray-400">
                <p>Gauri Shankar Nagar, Doranda</p>
                <p>Ranchi, Jharkhand - 834002</p>
                <p>Phone: 9473009712</p>
                <p>Email: sajhasafar@gmail.com</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <div className="space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="block text-gray-400 hover:text-white transition"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2026 Sajha Safar. All rights reserved. | CEO: Mrs. Bandana Jha</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919473009712"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#1ebd5a] transition-all hover:scale-110 z-50 flex items-center justify-center animate-bounce"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
      </a>
    </div>
  );
}
