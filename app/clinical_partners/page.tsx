import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Link from "next/link";

export default function ClinicalPartners() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Interested in Partnering with Us?
            </h2>
            <p className="text-lg text-gray-600">
              Contact Us Today!
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Email Section */}
            <div className="lg:col-span-3 mb-8">
              <div className="max-w-2xl mx-auto">
                <h3 className="text-5xl font-bold text-gray-900 mb-6">Email</h3>
                <p className="text-base text-gray-600 mb-2">Send us a Message!</p>
                <p className="text-sm text-gray-500 mb-8">Please Include Email and Clinic Name</p>
                <form className="space-y-4 mb-8">
                  <div>
                    <input
                      type="text"
                      placeholder="Please Include Email and Clinic Name"
                      className="w-full px-4 py-3 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-gray-800"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gray-800 text-white py-3 rounded font-semibold hover:bg-gray-900 transition-colors"
                  >
                    Send
                  </button>
                </form>
                <p className="text-sm font-semibold text-gray-900 mb-1">Give us your information to get started!</p>
                <p className="text-sm text-gray-700">orders@aretemediealservices.com</p>
              </div>
            </div>

            {/* Phone Section */}
            <div className="flex flex-col items-center justify-center text-center">
              <h3 className="text-5xl font-bold text-gray-900 mb-4">Phone</h3>
              <p className="text-lg font-bold text-gray-900 mb-2">Call Us!</p>
              <p className="text-2xl font-bold text-gray-900">713.832.9971</p>
            </div>

            {/* Office Section */}
            <div className="flex flex-col items-center justify-center text-center">
              <h3 className="text-5xl font-bold text-gray-900 mb-4">Office</h3>
              <p className="text-lg font-bold text-gray-900 mb-2">Visit Our Office!</p>
              <p className="text-sm text-gray-700">
                2121 Brittmoore Road, #8400, Houston, Texas 77043, United States
              </p>
            </div>
          </div>
        </div>
      </section>

    {/* Hero Section */}
      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Hear it from our Clinical Partners
          </h1>
          <p className="text-lg text-gray-600">
            Trusted by local clinical partners in Houston.
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "My clients are back to their routine in half the time I expected. These devices made all the difference.",
                name: "Dr. Vaughn Chenn",
                title: "Orthopaedic Surgeon",
                image: "/media/images/pexels-alex-dos-santos-305643819-35175002.jpg",
              },
              {
                quote: "My patients report less pain and better mobility. I recommend ROmtech and OnLux to everyone now.",
                name: "Dr. James Chen",
                title: "Orthopedic Surgeon",
                image: "/media/images/pexels-shkrabaanthony-6749773.jpg",
              },
              {
                quote: "These devices are the fastest ways to recover as soon as possible. Highly recommend!",
                name: "Dr. Michael Torres",
                title: "Physician",
                image: "/media/images/pexels-tima-miroshnichenko-8376277.jpg",
              },
            ].map((testimonial, index) => (
              <div key={index} className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{testimonial.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{testimonial.title}</p>
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
                />
                <blockquote className="text-base text-gray-800 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
