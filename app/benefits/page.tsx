import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Link from "next/link";

export default function Benefits() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Benefits Section */}
      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Why Choose ARETE?</h1>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence ensures the best possible outcomes for your recovery.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="flex gap-6 p-6 rounded-lg hover:bg-red-50 transition-colors">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Faster Recovery Times</h3>
                <p className="text-gray-600">
                  Our evidence-based products and protocols are designed to accelerate healing and get you back to your active lifestyle sooner.
                </p>
              </div>
            </div>

            <div className="flex gap-6 p-6 rounded-lg hover:bg-red-50 transition-colors">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Reduced Pain & Discomfort</h3>
                <p className="text-gray-600">
                  Advanced pain management solutions help minimize discomfort throughout your recovery process.
                </p>
              </div>
            </div>

            <div className="flex gap-6 p-6 rounded-lg hover:bg-red-50 transition-colors">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Improved Mobility</h3>
                <p className="text-gray-600">
                  Progressive rehabilitation programs restore strength, flexibility, and range of motion.
                </p>
              </div>
            </div>

            <div className="flex gap-6 p-6 rounded-lg hover:bg-red-50 transition-colors">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Support</h3>
                <p className="text-gray-600">
                  Access to medical professionals and rehabilitation specialists whenever you need guidance.
                </p>
              </div>
            </div>

            <div className="flex gap-6 p-6 rounded-lg hover:bg-red-50 transition-colors">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">5</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Proven Results</h3>
                <p className="text-gray-600">
                  Thousands of successful recoveries with high patient satisfaction rates and positive outcomes.
                </p>
              </div>
            </div>

            <div className="flex gap-6 p-6 rounded-lg hover:bg-red-50 transition-colors">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">6</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Comprehensive Care</h3>
                <p className="text-gray-600">
                  From initial consultation to full recovery, we provide complete support throughout your journey.
                </p>
              </div>
            </div>
          </div>

          {/* Statistics Section */}
          <div className="bg-red-600 text-white rounded-2xl p-12 mb-16">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold mb-2">10,000+</div>
                <div className="text-xl text-red-100">Patients Served</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">95%</div>
                <div className="text-xl text-red-100">Satisfaction Rate</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">15+</div>
                <div className="text-xl text-red-100">Years of Experience</div>
              </div>
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">What Our Patients Say</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-red-600 font-bold">JD</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">John Doe</h4>
                    <p className="text-sm text-gray-600">Knee Replacement Patient</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "ARETE's products and support made my recovery so much smoother. I was back to my normal activities faster than expected!"
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-red-600 font-bold">SM</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Sarah Miller</h4>
                    <p className="text-sm text-gray-600">ACL Surgery Patient</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "The expert guidance and quality products from ARETE were essential to my successful rehabilitation. Highly recommend!"
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-red-600 font-bold">RW</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Robert Wilson</h4>
                    <p className="text-sm text-gray-600">Meniscus Repair Patient</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "Professional, caring, and effective. ARETE helped me through every step of my recovery journey."
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Experience the ARETE Difference</h2>
            <p className="text-xl text-gray-600 mb-8">Join thousands of satisfied patients on their path to recovery.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/products"
                className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-700 transition-colors text-center shadow-lg hover:shadow-xl"
              >
                Explore Products
              </Link>
              <Link
                href="/contact"
                className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-50 transition-colors text-center"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

