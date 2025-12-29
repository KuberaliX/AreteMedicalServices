import Image from "next/image";
import Link from "next/link";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

// Device data structure
const device = {
  id: 'portableconnect',
  name: 'PortableConnect®',
  tagline: 'The Modern Technology of Medical Rehabilitation®',
  description: 'The PortableConnect® is a medical device that delivers clinician-controlled physical therapy sessions to patients in their homes. Our patented telemedicine technology enables patients recovering from total knee replacement, total hip replacement, joint manipulations, ACL, and other arthroscopic repairs to recover in half the time compared to traditional physical therapy.',
  features: [
    {
      title: 'Adaptive Telemedicine Technology',
      description: 'Patented technology that adapts to your recovery stage with clinician-controlled sessions'
    },
    {
      title: 'Multiple Therapy Modes',
      description: 'Four distinct therapy modes that progress with your recovery, from early motion to advanced strengthening'
    },
    {
      title: 'AccuAngle Range of Motion Tracking',
      description: 'Real-time measurement and tracking of your range of motion progress throughout recovery'
    },
    {
      title: 'Touchscreen Interface',
      description: 'Intuitive touchscreen display for easy navigation and progress monitoring'
    },
    {
      title: 'Video Communication',
      description: 'Built-in video calling capability for direct communication with your healthcare provider'
    }
  ],
  benefits: [
    {
      title: '50% Faster Recovery',
      description: 'Patients recover in half the time compared to traditional physical therapy. The adaptive pedal technology allows you to begin therapeutic motion as early as the day of surgery.'
    },
    {
      title: '2 Weeks to Full ROM',
      description: 'On average, 50% of PortableConnect patients meet or exceed their pre-operative range of motion by just 2 weeks after surgery (112° average), compared to only 13% with standard care.'
    },
    {
      title: '$2,000-$6,250 Savings',
      description: 'Total savings per patient through earlier discharge, skipping acute rehab, saving home health visits, and reducing outpatient therapy.'
    },
    {
      title: 'At-Home Convenience',
      description: 'Complete multiple therapy sessions per day from the comfort and privacy of your home, without the hassle of frequent clinic visits.'
    }
  ],
  specifications: [
    { label: 'FDA Status', value: 'FDA Approved Medical Device' },
    { label: 'Therapy Modes', value: '4 (Passive, Assisted, Active, Resistance)' },
    { label: 'Tracking', value: 'AccuAngle® Real-time ROM Measurement' },
    { label: 'Communication', value: 'Built-in Video Conferencing' }
  ]
};

export default function Devices() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-red-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold text-red-600 uppercase tracking-wider">Arete Medical Devices</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6">
              PortableConnect®
            </h1>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              The Modern Technology of Medical Rehabilitation® - Delivering clinician-controlled physical therapy 
              directly to your home for faster recovery and better outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">
                Revolutionary Rehabilitation Technology
              </h2>
              <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
            </div>
            
            <div className="prose prose-lg max-w-none space-y-6 text-gray-700 leading-relaxed">
              <p className="text-xl text-gray-800 font-medium">
                ROMTech® presents our patented and groundbreaking rehabilitation technology, designed to serve a variety of orthopedic indications. Our revolutionary technology is improving patient outcomes, cutting cost of care, and overhauling the way postoperative orthopedic care is delivered.
              </p>
              
              <p className="text-lg">
                Combining orthopedic innovation with cutting-edge telemedicine technology, ROMTech achieves unparalleled results. Our teletherapy technology empowers patients and care teams by providing customizable rehabilitation protocols, remote connectivity, and the ability to recover in the privacy, safety, and convenience of home, enabling them to return to a full quality of life.
              </p>
              
              <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 border-l-4 border-red-600 mt-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">The ROMTech Mission</h3>
                <p className="text-lg text-gray-800 leading-relaxed">
                  We innovate adaptive medical technologies that help connect clinicians and patients remotely, delivering enhanced diagnostics and recovery that leads to enriched quality of life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Device Overview Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
                <div>
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-100 text-red-700 mb-6">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-semibold">FDA Approved Medical Device</span>
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
                    {device.name}
                  </h2>
                  <p className="text-xl text-red-600 mb-6 leading-relaxed font-semibold">
                    {device.tagline}
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    {device.description}
                  </p>
                  
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-red-600 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:bg-red-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 transform"
                  >
                    Request PortableConnect®
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
                
                {/* Device Image */}
                <div className="bg-gray-50 rounded-2xl p-6 border-2 border-gray-200">
                  <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-white">
                    <Image
                      src="/resources/images/portableconnect-device.jpg"
                      alt={`${device.name} - Medical rehabilitation device`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">
              Key Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced technology designed to support your recovery journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {device.features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-red-200 transition-all duration-300 hover:shadow-xl">
                <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Advanced Technology Features */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
                Advanced Technology Features
              </h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our device integrates cutting-edge technology to deliver personalized, effective rehabilitation
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Adaptive Pedal Technology */}
              <div className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200 hover:border-red-300 transition-all duration-300 hover:shadow-xl">
                <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Adaptive Pedal Technology</h4>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The device automatically adjusts the pedal radius to match your current range of motion, enabling 
                  therapy to commence immediately after surgery, even with limited mobility.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Automatic adjustment to patient's ROM</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Begin therapy immediately post-surgery</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Progressive range expansion</span>
                  </li>
                </ul>
              </div>

              {/* AccuAngle Tracker */}
              <div className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200 hover:border-red-300 transition-all duration-300 hover:shadow-xl">
                <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">AccuAngle® Wearable Tracker</h4>
                <p className="text-gray-600 leading-relaxed mb-4">
                  This wearable device monitors knee flexion and extension during therapy sessions, providing precise 
                  data on your range of motion for accurate progress tracking.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Real-time ROM measurement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Precise flexion and extension tracking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Data synced to clinician portal</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">
              Patient Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience faster recovery and better outcomes with PortableConnect®
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {device.benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-2 border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 text-white">
            <div className="text-center mb-10">
              <h2 className="text-4xl lg:text-5xl font-extrabold mb-6">Device Specifications</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Technical details and capabilities of PortableConnect®
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {device.specifications.map((spec, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-sm text-gray-300 mb-2">{spec.label}</div>
                  <div className="text-xl font-bold text-white">{spec.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Coverage */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 rounded-2xl p-10 text-center border-2 border-blue-100">
            <div className="max-w-3xl mx-auto">
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Covered by Most Insurance Payers</h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Our devices are covered by most insurance payers, making advanced rehabilitation technology 
                accessible to patients. Contact us to verify your coverage and get started on your recovery journey.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Verify Your Coverage
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6">
              Ready to Start Your Recovery?
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Request PortableConnect® and begin your journey to faster recovery from the comfort of your home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-red-600 text-white px-10 py-5 rounded-xl font-semibold text-lg hover:bg-red-700 transition-all duration-300 shadow-2xl hover:shadow-red-500/50 hover:scale-105 transform"
              >
                Request a Device
              </Link>
              <Link
                href="/research"
                className="bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white px-10 py-5 rounded-xl font-semibold text-lg hover:bg-white/20 hover:border-white/40 transition-all duration-300"
              >
                View Research & Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
