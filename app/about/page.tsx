import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-red-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">About ROMTech</h1>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              ROMTech is improving patient outcomes through cutting-edge rehabilitation technologies, enabling patients to quickly 
              regain range of motion, ambulation, and strength following injury or surgery. Our patented telemedicine technology 
              makes structured rehabilitation accessible anywhere.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-3xl p-12 lg:p-16 text-white mb-16">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-extrabold mb-6">Our Mission</h2>
              <p className="text-xl text-red-100 leading-relaxed mb-6">
                ROMTech is dedicated to revolutionizing post-operative orthopedic rehabilitation through innovative adaptive telemedicine technology. 
                We believe that every patient deserves access to the most advanced rehabilitation solutions, delivered in the comfort and 
                safety of their own home, enabling them to begin therapeutic motion as early as the day of surgery.
              </p>
              <p className="text-xl text-red-100 leading-relaxed">
                Our mission is to make structured rehabilitation accessible anywhere through adaptive telemedicine, helping patients 
                achieve faster recovery, better outcomes, and improved quality of life. We're committed to transforming healthcare 
                through technology that leads to faster outcomes, unparalleled pain management, and a faster return to quality of life.
              </p>
            </div>
          </div>

          {/* What We Do */}
          <div className="mb-16">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 text-center mb-12">
              What We Do
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-white rounded-2xl border-2 border-gray-100 hover:border-red-200 transition-all duration-300 hover:shadow-xl">
                <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Innovative Technology</h3>
                <p className="text-gray-600 leading-relaxed">
                  We develop and manufacture the PortableConnect®, a patented adaptive telemedicine device that delivers 
                  clinician-controlled physical therapy sessions to patients in their homes. Our technology enables patients 
                  to recover in half the time compared to traditional physical therapy.
                </p>
              </div>
              
              <div className="text-center p-8 bg-white rounded-2xl border-2 border-gray-100 hover:border-red-200 transition-all duration-300 hover:shadow-xl">
                <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Patient-Centered Care</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our technology enables patients to begin therapeutic motion as early as the day of surgery, 
                  accelerating recovery and reducing pain while maintaining the highest standards of care. Patients 
                  can complete multiple therapy sessions per day from the comfort of their home.
                </p>
              </div>
              
              <div className="text-center p-8 bg-white rounded-2xl border-2 border-gray-100 hover:border-red-200 transition-all duration-300 hover:shadow-xl">
                <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Clinical Excellence</h3>
                <p className="text-gray-600 leading-relaxed">
                  We partner with healthcare providers to deliver superior clinical outcomes, reduce healthcare costs, 
                  and improve patient satisfaction through evidence-based rehabilitation solutions. Our patients have 
                  completed millions of daily therapy sessions with proven results.
                </p>
              </div>
            </div>
          </div>

          {/* Impact Section */}
          <div className="bg-red-50 rounded-3xl p-12 mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 text-center mb-8">
                Our Impact
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <div className="text-4xl font-extrabold text-red-600 mb-3">9M+</div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Therapy Sessions</h4>
                  <p className="text-gray-600">
                    Millions of daily therapy sessions completed by patients using PortableConnect® technology
                  </p>
                </div>
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <div className="text-4xl font-extrabold text-red-600 mb-3">50%</div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Faster Recovery</h4>
                  <p className="text-gray-600">
                    Patients recover in half the time compared to traditional physical therapy methods
                  </p>
                </div>
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <div className="text-4xl font-extrabold text-red-600 mb-3">2 Weeks</div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">To Full ROM</h4>
                  <p className="text-gray-600">
                    Average time for patients to meet or exceed pre-operative range of motion
                  </p>
                </div>
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <div className="text-4xl font-extrabold text-red-600 mb-3">$2K-$6K</div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Cost Savings</h4>
                  <p className="text-gray-600">
                    Average savings per patient through reduced hospital stays and therapy visits
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-16">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 text-center mb-12">
              Our Core Values
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 border-l-4 border-red-600 bg-red-50 rounded-r-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Innovation</h3>
                <p className="text-gray-700 leading-relaxed">
                  We continuously push the boundaries of rehabilitation technology, developing cutting-edge solutions 
                  that transform patient care and outcomes.
                </p>
              </div>
              <div className="p-8 border-l-4 border-red-600 bg-red-50 rounded-r-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Evidence-Based</h3>
                <p className="text-gray-700 leading-relaxed">
                  Our solutions are backed by extensive clinical research and real-world data, ensuring proven 
                  effectiveness and measurable outcomes.
                </p>
              </div>
              <div className="p-8 border-l-4 border-red-600 bg-red-50 rounded-r-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Accessibility</h3>
                <p className="text-gray-700 leading-relaxed">
                  We believe advanced rehabilitation should be accessible to all patients, regardless of location, 
                  through telemedicine technology.
                </p>
              </div>
              <div className="p-8 border-l-4 border-red-600 bg-red-50 rounded-r-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Partnership</h3>
                <p className="text-gray-700 leading-relaxed">
                  We work closely with healthcare providers, patients, and payers to create solutions that benefit 
                  everyone in the healthcare ecosystem.
                </p>
              </div>
            </div>
          </div>

          {/* Recognition Section */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 text-white mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl lg:text-4xl font-extrabold mb-6">Industry Recognition</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                ROMTech has been recognized as one of the world's most innovative companies, 
                demonstrating our commitment to transforming healthcare through technology. This prestigious recognition 
                highlights our leadership in advanced orthopedic rehabilitation technology.
              </p>
            </div>
            
            {/* Fast Company Award */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20">
              <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
                <div className="flex-shrink-0">
                  <svg className="w-16 h-16 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl lg:text-3xl font-extrabold mb-2">Fast Company's Most Innovative Companies 2025</h3>
                  <p className="text-gray-300 mb-4">
                    Named to Fast Company's prestigious annual list of the World's Most Innovative Companies of 2025. 
                    This honor recognizes businesses setting new industry standards and achieving groundbreaking advancements across sectors.
                  </p>
                  <p className="text-sm text-gray-400">
                    Alongside the World's 50 Most Innovative Companies, Fast Company recognizes 609 organizations across 58 industries and regions.
                  </p>
                </div>
              </div>
              
              {/* Key Highlights */}
              <div className="grid md:grid-cols-2 gap-6 mt-8 pt-8 border-t border-white/20">
                <div className="bg-white/5 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-2">VA Partnerships</h4>
                      <p className="text-gray-300 text-sm">
                        Number of <strong>VA Medical Centers</strong> utilizing PortableConnect® <strong>tripled in 2024</strong>, 
                        expanding high-quality remote rehabilitation for veterans.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/5 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-2">AI-Driven Innovation</h4>
                      <p className="text-gray-300 text-sm">
                        Developed a <strong>dedicated AI team</strong> to harness data-driven insights that predict outcomes, 
                        optimize recovery, and personalize treatment.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Quote */}
              <div className="mt-8 pt-8 border-t border-white/20">
                <blockquote className="text-lg italic text-gray-200 text-center max-w-3xl mx-auto">
                  "Innovation is at the heart of everything we do at ROMTech. Being recognized as one of Fast Company's Most Innovative Companies of 2025 
                  is a testament to our relentless pursuit of redefining rehabilitation. Our technology is not just about faster recovery; 
                  it's transforming healthcare accessibility, reducing costs, and improving patient outcomes on a scale never seen before."
                </blockquote>
                <p className="text-center text-gray-400 mt-4 text-sm">— Peter Arn, CEO of ROMTech</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-6">
              Join Us in Transforming Rehabilitation
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Whether you're a patient seeking faster recovery or a clinician looking to improve outcomes, 
              we're here to help you achieve your goals.
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
                className="border-2 border-red-600 text-red-600 px-10 py-5 rounded-xl font-semibold text-lg hover:bg-red-50 transition-all duration-300"
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
