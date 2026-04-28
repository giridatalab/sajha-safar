import { useState } from "react";
import { Link } from "react-router";
import { MapPin, Calendar, Users as UsersIcon, MessageCircle } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Packages() {
  const [activeTab, setActiveTab] = useState<"domestic" | "international">("domestic");

  const domesticPackages = [
    {
      name: "Goa Beach Escape",
      image: "https://images.unsplash.com/photo-1594801001182-99ee8f8d5db9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      duration: "4 Days / 3 Nights",
      price: "₹12,999",
      highlights: ["North & South Goa beaches", "Water sports", "Fort Aguada", "Dudhsagar Falls"],
      itinerary: "Day 1: Arrival & North Goa beaches | Day 2: Water sports & Candolim | Day 3: South Goa tour | Day 4: Departure",
    },
    {
      name: "Kashmir - Paradise on Earth",
      image: "https://images.unsplash.com/photo-1575143367176-df82a0d4ff48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      duration: "5 Days / 4 Nights",
      price: "₹18,999",
      highlights: ["Dal Lake shikara ride", "Gulmarg cable car", "Pahalgam valley", "Mughal Gardens"],
      itinerary: "Day 1: Srinagar arrival & Dal Lake | Day 2: Gulmarg excursion | Day 3: Pahalgam day trip | Day 4: Srinagar local | Day 5: Departure",
    },
    {
      name: "Kerala Backwaters & Hills",
      image: "https://images.unsplash.com/photo-1694783079572-eaeff4bee78b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      duration: "5 Days / 4 Nights",
      price: "₹15,999",
      highlights: ["Houseboat stay", "Munnar tea gardens", "Alleppey backwaters", "Cochin sightseeing"],
      itinerary: "Day 1: Cochin arrival | Day 2-3: Munnar hill station | Day 4: Alleppey houseboat | Day 5: Departure",
    },
    {
      name: "Darjeeling Himalayan Retreat",
      image: "https://images.unsplash.com/photo-1762662313299-9cc7d3e297be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      duration: "4 Days / 3 Nights",
      price: "₹11,999",
      highlights: ["Tiger Hill sunrise", "Toy train ride", "Tea garden tour", "Peace Pagoda"],
      itinerary: "Day 1: Arrival & local sightseeing | Day 2: Tiger Hill & toy train | Day 3: Tea estates | Day 4: Departure",
    },
    {
      name: "Rajasthan Royal Heritage",
      image: "https://images.unsplash.com/photo-1768449414649-f70b2b7fac0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      duration: "6 Days / 5 Nights",
      price: "₹21,999",
      highlights: ["Jaipur palaces", "Udaipur lake palace", "Jaisalmer desert safari", "Cultural performances"],
      itinerary: "Day 1-2: Jaipur | Day 3-4: Udaipur | Day 5: Jaisalmer | Day 6: Departure",
    },
    {
      name: "Pan India Golden Triangle",
      image: "https://images.unsplash.com/photo-1660315247626-12267f8d68db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      duration: "7 Days / 6 Nights",
      price: "₹24,999",
      highlights: ["Delhi monuments", "Agra Taj Mahal", "Jaipur forts", "Heritage walks"],
      itinerary: "Day 1-2: Delhi | Day 3-4: Agra | Day 5-6: Jaipur | Day 7: Departure",
    },
  ];

  const internationalPackages = [
    {
      name: "Dubai Luxury Experience",
      image: "https://images.unsplash.com/photo-1714412192114-61dca8f15f68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      duration: "5 Days / 4 Nights",
      price: "₹45,999",
      highlights: ["Burj Khalifa", "Desert safari", "Dubai Mall", "Marina cruise"],
      itinerary: "E-Visa assistance provided. Day 1: Arrival & city tour | Day 2: Desert safari | Day 3: Burj Khalifa | Day 4: Shopping | Day 5: Departure",
    },
    {
      name: "Thailand Beach Paradise",
      image: "https://images.unsplash.com/photo-1660315249137-29c09bd829a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      duration: "6 Days / 5 Nights",
      price: "₹38,999",
      highlights: ["Bangkok temples", "Pattaya beaches", "Coral Island", "Night markets"],
      itinerary: "E-Visa support included. Day 1-2: Bangkok | Day 3-5: Pattaya | Day 6: Departure",
    },
    {
      name: "Singapore Getaway",
      image: "https://images.unsplash.com/photo-1660289647786-bfa5e9e8ba16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      duration: "4 Days / 3 Nights",
      price: "₹42,999",
      highlights: ["Gardens by the Bay", "Universal Studios", "Sentosa Island", "Marina Bay Sands"],
      itinerary: "E-Visa processing available. Day 1: Arrival & city tour | Day 2: Universal Studios | Day 3: Sentosa | Day 4: Departure",
    },
    {
      name: "Bali Island Retreat",
      image: "https://images.unsplash.com/photo-1660207766758-a2e5985005ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      duration: "5 Days / 4 Nights",
      price: "₹36,999",
      highlights: ["Ubud rice terraces", "Temple tours", "Beach clubs", "Balinese culture"],
      itinerary: "E-Visa on arrival support. Day 1: Arrival & Seminyak | Day 2-3: Ubud | Day 4: Beach day | Day 5: Departure",
    },
  ];

  const activePackages = activeTab === "domestic" ? domesticPackages : internationalPackages;

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1753482772229-6d1c199e01ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="Beach paradise"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-600/60"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">Tour Packages</h1>
          <p className="text-xl">Discover Your Perfect Getaway</p>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-8 px-4 bg-white border-b">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setActiveTab("domestic")}
              className={`px-8 py-3 rounded-lg font-semibold transition ${
                activeTab === "domestic"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Domestic Tours
            </button>
            <button
              onClick={() => setActiveTab("international")}
              className={`px-8 py-3 rounded-lg font-semibold transition ${
                activeTab === "international"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              International Tours (E-Visa)
            </button>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activePackages.map((pkg, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
                <div className="relative h-56">
                  <ImageWithFallback
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full font-semibold">
                    {pkg.price}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{pkg.name}</h3>

                  <div className="flex items-center gap-2 text-gray-600 mb-3">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{pkg.duration}</span>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Highlights:</h4>
                    <ul className="space-y-1">
                      {pkg.highlights.map((highlight, i) => (
                        <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                          <MapPin className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Quick Itinerary:</h4>
                    <p className="text-sm text-gray-600">{pkg.itinerary}</p>
                  </div>

                  <div className="flex gap-2">
                    <Link
                      to="/contact"
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-3 rounded-lg font-semibold transition"
                    >
                      Book Now
                    </Link>
                    <a
                      href="https://wa.me/919473009712"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-lg transition"
                    >
                      <MessageCircle className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <UsersIcon className="w-16 h-16 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Need a Custom Package?</h2>
          <p className="text-lg mb-8">
            We specialize in creating personalized itineraries tailored to your preferences, budget, and group size.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition"
          >
            Request Custom Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
