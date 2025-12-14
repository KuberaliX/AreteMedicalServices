import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative w-full h-screen text-white overflow-hidden pt-20">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/media/videos/Jogging_Person.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Centered Content */}
        <div className="relative h-full flex items-center justify-center z-10">
          <div className="text-center px-4 max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Recovery starts the moment you decide to heal
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-4">
              One vision. One path. Back to living well.
            </p>
            <p className="text-base md:text-lg text-gray-300 mb-8 leading-relaxed">
              Whether you're recovering from surgery or helping patients find their way back, we've built the tools that work.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-gray-900 px-8 py-3 rounded font-semibold hover:bg-gray-100 transition-colors"
            >
              Explore
            </Link>
          </div>
        </div>
      </section>

      {/* Real Stories Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Real stories</h2>
            <p className="text-xl text-gray-600">
              Hear from patients who've experienced remarkable recoveries with ARETE
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Mitchell",
                title: "Post-Surgical Success",
                quote: "I was hesitant about my ACL recovery, but ARETE's products and guidance made all the difference. I'm back to my active lifestyle.",
                badge: "Satisfied",
              },
              {
                name: "Dr. James Chen",
                title: "Recommended by Specialists",
                quote: "I confidently recommend ARETE products to my patients. The quality and effectiveness have been consistently impressive.",
                badge: "Verified",
              },
              {
                name: "Michael Torres",
                title: "Athlete's Recovery",
                badge: "Verified",
                quote: "As an athlete, getting back in the game was crucial. ARETE got me there with the right equipment and support.",
              },
            ].map((story, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{story.name}</h3>
                    <p className="text-sm text-gray-600">{story.title}</p>
                  </div>
                  <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-semibold">
                    {story.badge}
                  </span>
                </div>
                <p className="text-gray-600 italic">"{story.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Section 1: Take Control */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Take control of your recovery</h2>
              <p className="text-lg text-gray-600 mb-6">
                With ARETE's comprehensive product line and expert guidance, you have the tools to actively participate in your recovery. Monitor your progress, set goals, and achieve remarkable results.
              </p>
              <Link
                href="/devices"
                className="inline-block text-red-600 font-semibold hover:underline"
              >
                View Devices →
              </Link>
            </div>
            <div className="bg-gray-300 rounded-lg aspect-square flex items-center justify-center">
              <svg className="w-24 h-24 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section 2: Patient Advantage */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-300 rounded-lg aspect-square flex items-center justify-center order-2 lg:order-1">
              <svg className="w-24 h-24 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Give your patients a real advantage</h2>
              <p className="text-lg text-gray-600 mb-6">
                Healthcare professionals choose ARETE for proven, clinically-validated solutions that deliver measurable patient outcomes and satisfaction.
              </p>
              <Link
                href="/about_us"
                className="inline-block text-red-600 font-semibold hover:underline"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section 3: Get Back */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Get back to what matters</h2>
              <p className="text-lg text-gray-600 mb-6">
                Every day, thousands use ARETE products to reclaim their mobility, independence, and joy. From daily activities to competitive sports, we support your goals.
              </p>
              <Link
                href="/about_us"
                className="inline-block text-red-600 font-semibold hover:underline"
              >
                Explore Benefits →
              </Link>
            </div>
            <div className="bg-gray-300 rounded-lg aspect-square flex items-center justify-center">
              <svg className="w-24 h-24 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section 4: Manage Discomfort */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-300 rounded-lg aspect-square flex items-center justify-center order-2 lg:order-1">
              <svg className="w-24 h-24 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Manage discomfort without dependency</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our innovative approach combines physical therapy support with cutting-edge technology, reducing the need for prolonged medication while improving outcomes.
              </p>
              <Link
                href="/devices"
                className="inline-block text-red-600 font-semibold hover:underline"
              >
                Discover Solutions →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section 5: Measurable Results */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Doctors see measurable improvement</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our clinical evidence demonstrates significant improvements in recovery timeline, mobility restoration, and patient satisfaction rates across multiple rehabilitation disciplines.
              </p>
              <Link
                href="/about_us"
                className="inline-block text-red-600 font-semibold hover:underline"
              >
                View Clinical Data →
              </Link>
            </div>
            <div className="bg-gray-300 rounded-lg aspect-square flex items-center justify-center">
              <svg className="w-24 h-24 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Start Healing</h2>
          <p className="text-xl text-gray-600 mb-8">
            Take the first step toward recovery. Get expert guidance, access our proven products, and join thousands of successful recoveries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/devices"
              className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-red-50 transition-colors"
            >
              Explore Devices
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
