import { Link } from "react-router";
import { Phone, MessageCircle, MapPin, Users, Award, Clock } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { motion } from "motion/react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export function Home() {
  const featuredPackages = [
    {
      name: "Goa Beach Paradise",
      image: "https://images.unsplash.com/photo-1594801001182-99ee8f8d5db9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      duration: "4 Days / 3 Nights",
      price: "Starting ₹12,999",
      description: "Pristine beaches, vibrant nightlife, and Portuguese heritage",
    },
    {
      name: "Kashmir Valley Tour",
      image: "https://images.unsplash.com/photo-1575143367176-df82a0d4ff48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      duration: "5 Days / 4 Nights",
      price: "Starting ₹18,999",
      description: "Dal Lake, Gulmarg, and breathtaking mountain landscapes",
    },
    {
      name: "Kerala Backwaters",
      image: "https://images.unsplash.com/photo-1694783079572-eaeff4bee78b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      duration: "5 Days / 4 Nights",
      price: "Starting ₹15,999",
      description: "Houseboat cruises, hill stations, and serene backwaters",
    },
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Ranchi",
      text: "Amazing Goa trip! Sajha Safar handled everything perfectly. Mrs. Bandana was very supportive throughout.",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      location: "Jamshedpur",
      text: "Our Kashmir honeymoon was a dream come true. Excellent service and great packages!",
      rating: 5,
    },
    {
      name: "Amit Singh",
      location: "Dhanbad",
      text: "Professional service, great prices, and wonderful experience. Highly recommended for family tours!",
      rating: 5,
    },
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1704653942165-cab0de6bce51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMHZhbGxleSUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NzcyODc4NjR8MA&ixlib=rb-4.1.0&q=80&w=1080", // Green Valley
    "https://images.unsplash.com/photo-1708961370545-5f00499a1808?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2YXJhbmFzaSUyMGdoYXRzJTIwcml2ZXJ8ZW58MXx8fHwxNzc3Mjg3ODY0fDA&ixlib=rb-4.1.0&q=80&w=1080", // Varanasi Ghats
    "https://images.unsplash.com/photo-1732239808105-d2320100247c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbm93eSUyMG1vdW50YWluJTIwcGVhayUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NzcyODc4NjR8MA&ixlib=rb-4.1.0&q=80&w=1080", // Snowy Mountain
    "https://images.unsplash.com/photo-1672841828482-45faa4c70e50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm93eSUyMGJlYWNoJTIwc3Vuc2V0fGVufDF8fHx8MTc3NzI4Nzg2NHww&ixlib=rb-4.1.0&q=80&w=1080", // Tropical Beach
    "https://images.unsplash.com/photo-1627907022483-98477b83f92a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXN0b3JpYyUyMHRlbXBsZSUyMGluZGlhfGVufDF8fHx8MTc3NzI4Nzg3MHww&ixlib=rb-4.1.0&q=80&w=1080", // Historic Temple
    "https://images.unsplash.com/photo-1729799886592-42820707fe53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNlcnQlMjBkdW5lcyUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NzcyODc4NjR8MA&ixlib=rb-4.1.0&q=80&w=1080", // Desert Dunes
    "https://images.unsplash.com/photo-1574317667242-ef43df08ad40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjBmb3Jlc3QlMjBuYXR1cmV8ZW58MXx8fHwxNzc3Mjg3ODY0fDA&ixlib=rb-4.1.0&q=80&w=1080", // Beautiful Forest
    "https://images.unsplash.com/photo-1564586432351-980df1b473bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlcmZhbGwlMjB2ZXJ0aWNhbCUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NzcyODc4NzB8MA&ixlib=rb-4.1.0&q=80&w=1080", // Waterfall
    "https://images.unsplash.com/photo-1717518215194-5876343f3fe7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvY2VhbiUyMHdpZGUlMjBwYW5vcmFtaWN8ZW58MXx8fHwxNzc3Mjg3ODcwfDA&ixlib=rb-4.1.0&q=80&w=1080"  // Ocean Panoramic
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.img
            src="https://images.unsplash.com/photo-1598995525172-0cd520967ce6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzd2lzcyUyMGFscHMlMjBncmVlbiUyMHZhbGxleSUyMHNub3clMjBwZWFrfGVufDF8fHx8MTc3NzI3NDY4MHww&ixlib=rb-4.1.0&q=80&w=1920"
            alt="Snow covered mountains and greenery"
            className="w-full h-full object-cover"
            initial={{ scale: 1 }}
            animate={{ scale: 1.15 }}
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          <div className="absolute inset-0 bg-black/25"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-5xl">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight drop-shadow-xl">
            Your Adventure Starts Now
          </h1>
        </div>
      </section>

      {/* Hero Action Bar */}
      <section className="bg-blue-900 py-10 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <p className="text-xl md:text-2xl mb-8 font-medium">
            Explore India and the World with Sajha Safar - Your Trusted Travel Partner
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/packages"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition shadow-lg"
            >
              Explore Packages
            </Link>
            <a
              href="https://wa.me/919473009712"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition shadow-lg flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Now
            </a>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Welcome to Sajha Safar</h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
            At Sajha Safar, we believe every journey tells a story. Whether you're seeking adventure in the mountains,
            relaxation on pristine beaches, or cultural immersion in historic cities, we create personalized travel
            experiences that exceed your expectations. With years of expertise and a passion for travel, we're here to
            make your dream vacation a reality.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Trusted Expertise</h3>
              <p className="text-gray-600">Years of experience in creating memorable travel experiences</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Personalized Service</h3>
              <p className="text-gray-600">Customized tour packages tailored to your preferences</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock assistance for a worry-free journey</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Packages */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Tour Packages</h2>
            <p className="text-lg text-gray-600">Handpicked destinations for unforgettable experiences</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredPackages.map((pkg, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
                <div className="relative h-64">
                  <ImageWithFallback
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <p className="text-gray-600 mb-4">{pkg.description}</p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-gray-500">{pkg.duration}</span>
                    <span className="text-lg font-bold text-blue-600">{pkg.price}</span>
                  </div>
                  <Link
                    to="/contact"
                    className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-3 rounded-lg font-semibold transition"
                  >
                    Enquire Now
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/packages"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition"
            >
              View All Packages
            </Link>
          </div>
        </div>
      </section>

      {/* Scenic Gallery Section */}
      <section className="py-16 px-4 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">A Glimpse of the World</h2>
            <p className="text-lg text-gray-400">Amazing views of mountains, beaches, valleys, and more</p>
          </div>
          
          <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 1024: 3}}>
            <Masonry gutter="16px">
              {galleryImages.map((imgSrc, i) => (
                <div key={i} className="overflow-hidden rounded-xl group relative cursor-pointer">
                  <ImageWithFallback
                    src={imgSrc}
                    alt={`Scenic view ${i + 1}`}
                    className="w-full h-auto block transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-medium tracking-wider uppercase text-sm border border-white/50 px-4 py-2 rounded-full backdrop-blur-sm">
                      View Destination
                    </span>
                  </div>
                </div>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-lg text-gray-600">Real experiences from happy travelers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8">
            Contact us today and let's plan your perfect vacation together
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:9473009712"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call Now: 9473009712
            </a>
            <Link
              to="/contact"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition"
            >
              Send Enquiry
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
