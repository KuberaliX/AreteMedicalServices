import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Link from "next/link";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Becky Manion",
      location: "PortableConnect® Patient",
      surgery: "Knee Replacement",
      quote: "The thing I liked the most was that I didn't have to leave my house and I could rehab five times a day.",
      rating: 5,
      image: "👩"
    },
    {
      name: "James Mitchell",
      age: 58,
      location: "Chicago, IL",
      surgery: "Total Knee Replacement",
      quote: "I was back to walking normally in just 3 weeks. The device adjusted to my range of motion automatically, and I could see my progress improving every day. Best decision I made for my recovery.",
      rating: 5,
      image: "👨"
    },
    {
      name: "Patricia Chen",
      age: 62,
      location: "San Francisco, CA",
      surgery: "Total Hip Replacement",
      quote: "Being able to do therapy at home was a game-changer. I didn't have to worry about transportation or scheduling appointments. The clinician could monitor my progress remotely, which gave me confidence.",
      rating: 5,
      image: "👩‍🦰"
    },
    {
      name: "Robert Martinez",
      age: 45,
      location: "Miami, FL",
      surgery: "ACL Reconstruction",
      quote: "As an athlete, I needed to get back to my sport quickly. PortableConnect helped me regain my range of motion in half the time compared to my previous injury. The four therapy modes let me progress at my own pace.",
      rating: 5,
      image: "👨‍💼"
    },
    {
      name: "Linda Thompson",
      age: 55,
      location: "Boston, MA",
      surgery: "Knee Replacement",
      quote: "The AccuAngle tracker showed me exactly how much I was improving. My doctor was amazed at my progress at the 2-week checkup. I met my pre-surgery range of motion goals ahead of schedule.",
      rating: 5,
      image: "👩‍💼"
    },
    {
      name: "David Williams",
      age: 50,
      location: "Austin, TX",
      surgery: "Hip Replacement",
      quote: "I started therapy the day after surgery, which I never could have done with traditional PT. The adaptive pedal technology meant I could begin even with very limited movement. Recovery was faster and less painful.",
      rating: 5,
      image: "👨‍🦱"
    },
    {
      name: "Sarah Johnson",
      age: 48,
      location: "Seattle, WA",
      surgery: "Knee Replacement",
      quote: "The touchscreen interface was so easy to use, and having video calls with my therapist from home was incredibly convenient. I completed all my sessions without missing a single one.",
      rating: 5,
      image: "👩"
    },
    {
      name: "Michael Rodriguez",
      age: 52,
      location: "Denver, CO",
      surgery: "ACL Repair",
      quote: "What impressed me most was how the device adapted to my recovery stage. As I got stronger, it automatically increased resistance. My physical therapist said my outcomes were exceptional.",
      rating: 5,
      image: "👨"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-red-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6">Patient Success Stories</h1>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Real stories from real patients who have transformed their recovery journey with PortableConnect®. 
              Discover how our telemedicine technology has helped thousands regain their mobility, reduce pain, and return to their active lives faster.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="flex items-start mb-4">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center text-3xl mr-4 flex-shrink-0">
                    {testimonial.image}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{testimonial.name}</h3>
                    {testimonial.age && (
                      <p className="text-sm text-gray-600 mb-2">{testimonial.age} years old • {testimonial.location}</p>
                    )}
                    {!testimonial.age && (
                      <p className="text-sm text-gray-600 mb-2">{testimonial.location}</p>
                    )}
                    <p className="text-sm font-semibold text-red-600 mb-3">{testimonial.surgery}</p>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-12 text-white mb-16">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl lg:text-5xl font-extrabold mb-2">9M+</div>
                <div className="text-red-100 text-lg">Therapy Sessions</div>
                <div className="text-red-200 text-sm mt-1">Completed by patients</div>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-extrabold mb-2">50%</div>
                <div className="text-red-100 text-lg">Faster Recovery</div>
                <div className="text-red-200 text-sm mt-1">Than traditional PT</div>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-extrabold mb-2">2 Weeks</div>
                <div className="text-red-100 text-lg">To Full ROM</div>
                <div className="text-red-200 text-sm mt-1">Average time frame</div>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-extrabold mb-2">98%</div>
                <div className="text-red-100 text-lg">Satisfaction</div>
                <div className="text-red-200 text-sm mt-1">Patient-reported</div>
              </div>
            </div>
          </div>

          {/* Key Benefits from Testimonials */}
          <div className="mb-16">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 text-center mb-12">
              What Patients Love About PortableConnect®
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-red-200 transition-all duration-300 hover:shadow-xl">
                <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Therapy at Home</h3>
                <p className="text-gray-600 leading-relaxed">
                  Complete multiple therapy sessions per day from the comfort and privacy of your home, without the 
                  hassle of frequent clinic visits or transportation challenges.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-red-200 transition-all duration-300 hover:shadow-xl">
                <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Faster Recovery</h3>
                <p className="text-gray-600 leading-relaxed">
                  Recover in half the time with accelerated healing. Many patients meet or exceed their pre-operative 
                  range of motion goals by just 2 weeks after surgery.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-red-200 transition-all duration-300 hover:shadow-xl">
                <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">AccuAngle Progress Tracking</h3>
                <p className="text-gray-600 leading-relaxed">
                  See your range of motion improve in real-time with the AccuAngle tracker. The intuitive touchscreen 
                  interface keeps you motivated and engaged throughout your recovery.
                </p>
              </div>
            </div>
          </div>

          {/* Video Testimonial Section */}
          <div className="mb-16">
            <div className="bg-gray-50 rounded-2xl p-12 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Watch Patient Stories</h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                See and hear directly from patients about their recovery journey with PortableConnect®.
              </p>
              <div className="bg-gray-200 rounded-xl aspect-video flex items-center justify-center max-w-4xl mx-auto overflow-hidden">
                {/* Replace this placeholder with your video from /resources/videos/ */}
                {/* Example: <video src="/resources/videos/testimonial.mp4" controls className="w-full h-full object-cover" /> */}
                <div className="text-center">
                  <svg className="w-20 h-20 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-gray-600">Add your video to /public/resources/videos/</p>
                  <p className="text-sm text-gray-500 mt-2">Then use: &lt;video src="/resources/videos/your-video.mp4" controls /&gt;</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 lg:p-16 text-white">
            <h2 className="text-3xl lg:text-4xl font-extrabold mb-6">
              Ready to Start Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Join thousands of patients who have experienced faster, more comfortable recovery with PortableConnect®. 
              Recover in half the time with clinician-controlled therapy delivered to your home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/devices"
                className="bg-red-600 text-white px-10 py-5 rounded-xl font-semibold text-lg hover:bg-red-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 transform"
              >
                Learn About PortableConnect®
              </Link>
              <Link
                href="/contact"
                className="bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white px-10 py-5 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all duration-300"
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
