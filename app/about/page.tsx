import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* About Section */}
      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">About ARETE Medical Services</h1>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in providing comprehensive rehabilitation solutions for patients recovering from knee surgery.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Team</h3>
              <p className="text-gray-600">
                Our team of medical professionals and rehabilitation specialists are dedicated to your recovery.
              </p>
            </div>
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Innovative Products</h3>
              <p className="text-gray-600">
                State-of-the-art rehabilitation equipment designed to accelerate your recovery process.
              </p>
            </div>
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Patient-Centered</h3>
              <p className="text-gray-600">
                Your comfort and recovery are our top priorities. We tailor solutions to your unique needs.
              </p>
            </div>
          </div>

          {/* Mission Section */}
          <div className="bg-red-50 rounded-2xl p-12 mb-16">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                At ARETE Medical Services, we are committed to providing exceptional rehabilitation care and innovative products that empower patients to achieve optimal recovery outcomes after knee surgery. We believe in a holistic approach that combines cutting-edge medical technology with compassionate, personalized care.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our mission is to be the leading provider of post-surgical rehabilitation solutions, helping thousands of patients regain their mobility, strength, and confidence every year.
              </p>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Core Values</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 border-l-4 border-red-600">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Excellence</h3>
                <p className="text-gray-600">
                  We strive for excellence in every aspect of our service, from product quality to patient care.
                </p>
              </div>
              <div className="p-6 border-l-4 border-red-600">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation</h3>
                <p className="text-gray-600">
                  We continuously invest in research and development to bring you the latest rehabilitation technologies.
                </p>
              </div>
              <div className="p-6 border-l-4 border-red-600">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Compassion</h3>
                <p className="text-gray-600">
                  We understand the challenges of recovery and provide empathetic support throughout your journey.
                </p>
              </div>
              <div className="p-6 border-l-4 border-red-600">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Integrity</h3>
                <p className="text-gray-600">
                  We maintain the highest ethical standards in all our business practices and patient interactions.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Start Your Recovery Journey?</h2>
            <p className="text-xl text-gray-600 mb-8">Explore our products and services to find the right solution for you.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/products"
                className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-700 transition-colors text-center shadow-lg hover:shadow-xl"
              >
                View Our Products
              </Link>
              <Link
                href="/contact"
                className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-50 transition-colors text-center"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

