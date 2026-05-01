import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Clock, Send } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    departureCity: "",
    travelDate: "",
    numberOfDays: "",
    adults: "",
    kids: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappMessage = `
*New Enquiry from Sajhaa Safar Website*

Name: ${formData.name}
Contact: ${formData.contact}
Email: ${formData.email}
Departure City: ${formData.departureCity}
Travel Date: ${formData.travelDate}
Number of Days: ${formData.numberOfDays}
Adults: ${formData.adults}
Kids: ${formData.kids}
Message: ${formData.message}
    `.trim();

    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/919473009712?text=${encodedMessage}`, "_blank");

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        contact: "",
        email: "",
        departureCity: "",
        travelDate: "",
        numberOfDays: "",
        adults: "",
        kids: "",
        message: "",
      });
    }, 3000);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1645974459912-43beab59eebf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="Kerala backwaters boat"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-600/60"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl">We're Here to Help Plan Your Perfect Journey</p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Call Us</h3>
              <a href="tel:9473009712" className="text-blue-600 hover:text-blue-700 text-lg font-semibold">
                9473009712
              </a>
              <p className="text-sm text-gray-600 mt-2">Available 9 AM - 9 PM</p>
            </div>

            <div className="text-center p-6 bg-green-50 rounded-xl">
              <div className="w-14 h-14 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
              <a
                href="https://wa.me/919473009712"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:text-green-700 text-lg font-semibold"
              >
                Chat with Us
              </a>
              <p className="text-sm text-gray-600 mt-2">Quick responses guaranteed</p>
            </div>

            <div className="text-center p-6 bg-orange-50 rounded-xl">
              <div className="w-14 h-14 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Email Us</h3>
              <a
                href="mailto:sajhaasafar@gmail.com"
                className="text-orange-600 hover:text-orange-700 text-lg font-semibold break-all"
              >sajhasafar@gmail.com</a>
              <p className="text-sm text-gray-600 mt-2">We'll respond within 24 hours</p>
            </div>
          </div>

          {/* Main Contact Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Enquiry Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Send Us an Enquiry</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact" className="block text-sm font-semibold mb-2">
                      Contact Number *
                    </label>
                    <input
                      type="tel"
                      id="contact"
                      name="contact"
                      required
                      value={formData.contact}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                      placeholder="10-digit mobile"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="departureCity" className="block text-sm font-semibold mb-2">
                      Departure City *
                    </label>
                    <input
                      type="text"
                      id="departureCity"
                      name="departureCity"
                      required
                      value={formData.departureCity}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                      placeholder="e.g., Ranchi"
                    />
                  </div>

                  <div>
                    <label htmlFor="travelDate" className="block text-sm font-semibold mb-2">
                      Travel Date *
                    </label>
                    <input
                      type="date"
                      id="travelDate"
                      name="travelDate"
                      required
                      value={formData.travelDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="numberOfDays" className="block text-sm font-semibold mb-2">
                      Number of Days
                    </label>
                    <input
                      type="number"
                      id="numberOfDays"
                      name="numberOfDays"
                      min="1"
                      value={formData.numberOfDays}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                      placeholder="e.g., 5"
                    />
                  </div>

                  <div>
                    <label htmlFor="adults" className="block text-sm font-semibold mb-2">
                      Adults *
                    </label>
                    <input
                      type="number"
                      id="adults"
                      name="adults"
                      min="1"
                      required
                      value={formData.adults}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                      placeholder="2"
                    />
                  </div>

                  <div>
                    <label htmlFor="kids" className="block text-sm font-semibold mb-2">
                      Kids
                    </label>
                    <input
                      type="number"
                      id="kids"
                      name="kids"
                      min="0"
                      value={formData.kids}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                      placeholder="0"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2">
                    Message / Special Requirements
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
                    placeholder="Tell us about your travel preferences, budget, or any special requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg font-semibold text-lg transition flex items-center justify-center gap-2"
                >
                  {submitted ? (
                    "Enquiry Sent!"
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Submit Enquiry
                    </>
                  )}
                </button>

                <p className="text-sm text-gray-600 text-center">
                  By submitting, you'll be redirected to WhatsApp to complete your enquiry
                </p>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Office Address</h3>
                    <p className="text-gray-700">
                      Gauri Shankar Nagar, Doranda<br />
                      Ranchi, Jharkhand - 834002<br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Office Hours</h3>
                    <p className="text-gray-700">
                      Monday - Saturday: 9:00 AM - 8:00 PM<br />
                      Sunday: 10:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Contact Details</h3>
                    <p className="text-gray-700">
                      Phone: <a href="tel:9473009712" className="text-blue-600 hover:underline">9473009712</a><br />
                      Email: <a href="mailto:sajhaasafar@gmail.com" className="text-blue-600 hover:underline">sajhasafar@gmail.com</a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>Expert travel consultants with years of experience</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>Competitive pricing with transparent quotes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>24/7 customer support during your journey</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>Customized packages tailored to your needs</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
