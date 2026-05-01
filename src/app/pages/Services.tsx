import { Link } from "react-router";
import { Hotel, Car, Plane, MapPin, Heart, Users, Briefcase, Globe } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Services() {
  const services = [
    {
      icon: <Hotel className="w-12 h-12" />,
      title: "Hotel Booking",
      description: "Wide selection of accommodations from budget stays to luxury resorts. We partner with top hotels across India and worldwide to offer you the best rates and comfortable stays.",
      features: [
        "Budget to luxury options",
        "Best price guarantee",
        "Verified properties",
        "24/7 booking support",
      ],
    },
    {
      icon: <Car className="w-12 h-12" />,
      title: "Cab Booking",
      description: "Reliable transportation services for all your travel needs. From airport transfers to full-day sightseeing, we provide comfortable vehicles with professional drivers.",
      features: [
        "Airport transfers",
        "Local sightseeing",
        "Outstation trips",
        "Professional drivers",
      ],
    },
    {
      icon: <Plane className="w-12 h-12" />,
      title: "Flight Booking",
      description: "Hassle-free flight reservations for domestic and international destinations. We help you find the best fares and convenient schedules for your journey.",
      features: [
        "Domestic & international",
        "Competitive fares",
        "Multiple airline options",
        "Easy rescheduling",
      ],
    },
    {
      icon: <MapPin className="w-12 h-12" />,
      title: "Customized Tours",
      description: "Tailor-made itineraries designed around your preferences, budget, and interests. Tell us your dream destination, and we'll craft the perfect journey for you.",
      features: [
        "Personalized itineraries",
        "Flexible schedules",
        "Special requests",
        "Expert guidance",
      ],
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: "Honeymoon Packages",
      description: "Romantic getaways crafted for newlyweds. From serene beaches to mountain retreats, we create unforgettable experiences for your special celebration.",
      features: [
        "Romantic destinations",
        "Special decorations",
        "Candlelight dinners",
        "Privacy & comfort",
      ],
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Group Packages",
      description: "Specialized packages for families, friends, and corporate groups. We handle all logistics so you can focus on creating memories together.",
      features: [
        "Family-friendly options",
        "Corporate outings",
        "School trips",
        "Group discounts",
      ],
    },
    {
      icon: <Briefcase className="w-12 h-12" />,
      title: "Corporate Travel",
      description: "Professional travel management for businesses. From conferences to team building trips, we provide efficient and cost-effective solutions.",
      features: [
        "Business conferences",
        "Team building events",
        "MICE services",
        "Corporate rates",
      ],
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "E-Visa Assistance",
      description: "Complete support for international travel documentation. We guide you through the visa application process and ensure all paperwork is in order.",
      features: [
        "E-visa processing",
        "Document guidance",
        "Application support",
        "Quick turnaround",
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1593417034675-3ed7eda1bee9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="Kerala backwaters"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-600/60"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl">Complete Travel Solutions for Every Need</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Everything You Need for a Perfect Trip</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            At Sajhaa Safar, we offer comprehensive travel services to make your journey seamless and enjoyable. From
            planning to execution, we handle every detail so you can focus on creating memories.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition group"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Book With Us */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Book With Sajhaa Safar?</h2>
            <p className="text-lg text-gray-600">Our commitment to excellence sets us apart</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
              <p className="text-gray-700">Happy Customers</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <p className="text-gray-700">Destinations Covered</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <p className="text-gray-700">Customer Support</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">5★</div>
              <p className="text-gray-700">Average Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Plan Your Journey?</h2>
          <p className="text-lg mb-8">
            Let our experts help you create the perfect travel experience
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition"
            >
              Get in Touch
            </Link>
            <Link
              to="/packages"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition"
            >
              View Packages
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
