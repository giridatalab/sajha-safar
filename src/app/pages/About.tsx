import { MapPin, Target, Eye, Heart, Users, Globe } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1763480005793-501a0cbe1ac9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="Mountain landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-600/60"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">About Sajha Safar</h1>
          <p className="text-xl">Your Journey, Our Passion</p>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Who We Are</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Sajha Safar is a premier travel agency based in Ranchi, Jharkhand, dedicated to creating extraordinary
              travel experiences for our valued customers. Founded with a vision to make travel accessible, affordable,
              and memorable, we specialize in both domestic and international tour packages tailored to meet the unique
              needs of every traveler.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-blue-50 p-8 rounded-xl">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To provide exceptional travel experiences that create lasting memories, foster cultural understanding,
                and exceed customer expectations through personalized service, competitive pricing, and unwavering
                commitment to quality.
              </p>
            </div>

            <div className="bg-orange-50 p-8 rounded-xl">
              <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To become the most trusted and preferred travel partner in Eastern India, recognized for our integrity,
                innovation, and excellence in delivering world-class travel experiences that inspire and transform
                lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CEO Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-4xl font-bold">
                BJ
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Mrs. Bandana Jha</h2>
              <p className="text-xl text-blue-600 font-semibold">Founder </p>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              Under the visionary leadership of Mrs. Bandana Jha, Sajha Safar has grown to become a trusted name in the
              travel industry. With her passion for travel and commitment to customer satisfaction, she has built a team
              dedicated to making every journey special. Her hands-on approach and attention to detail ensure that each
              customer receives personalized care and the highest quality service.
            </p>
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Visit Our Office</h2>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 md:p-12">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Sajha Safar Head Office</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Gauri Shankar Nagar, Doranda<br />
                  Ranchi, Jharkhand - 834002<br />
                  India
                </p>
              </div>
            </div>
            <p className="text-gray-700 mt-6">
              Visit us to discuss your travel plans, explore our packages, and let our experienced team help you create
              the perfect itinerary for your next adventure.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Sajha Safar?</h2>
            <p className="text-lg text-gray-600">What sets us apart from the rest</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Heart className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Customer-Centric Approach</h3>
              <p className="text-gray-600">
                Your satisfaction is our priority. We listen to your needs and craft experiences that exceed
                expectations.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Users className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Expert Team</h3>
              <p className="text-gray-600">
                Our experienced travel consultants bring years of industry knowledge to help plan your perfect trip.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Globe className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Wide Network</h3>
              <p className="text-gray-600">
                From local getaways to international adventures, we have partnerships across India and worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
