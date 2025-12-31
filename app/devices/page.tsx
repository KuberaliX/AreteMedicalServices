import Image from "next/image";
import Link from "next/link";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function Devices() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-red-50 via-white to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6">
                PortableConnect®
              </h1>
              <p className="text-2xl text-red-600 mb-6 font-semibold">
                The Modern Technology of Medical Rehabilitation®
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                A clinician-controlled physical therapy device that delivers personalized rehabilitation sessions directly to your home. Recover faster with adaptive technology that begins working immediately after surgery.
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
            <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-xl">
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-gray-50">
                <Image
                  src="/resources/images/portableconnect-device.jpg"
                  alt="PortableConnect® - Medical rehabilitation device"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
      </section>

      {/* Key Technology Features */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">
              Advanced Technology Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge technology designed to support your recovery from day one
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Adaptive Pedal Technology */}
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-red-300 transition-all duration-300 hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Adaptive Pedal Technology</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                The device automatically adjusts the pedal radius to match your current range of motion, enabling therapy to commence immediately after surgery, even with limited mobility.
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
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-red-300 transition-all duration-300 hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AccuAngle® Wearable Tracker</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                This wearable device monitors knee flexion and extension during therapy sessions, providing precise data on your range of motion for accurate progress tracking.
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

          {/* Additional Features Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 border-2 border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">4 Therapy Modes</h4>
              <p className="text-gray-600 text-sm">Passive, Assisted, Active, and Resistance modes that progress with your recovery</p>
            </div>
            <div className="bg-white rounded-xl p-6 border-2 border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Video Communication</h4>
              <p className="text-gray-600 text-sm">Built-in video calling for direct communication with your healthcare provider</p>
            </div>
            <div className="bg-white rounded-xl p-6 border-2 border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Touchscreen Interface</h4>
              <p className="text-gray-600 text-sm">Intuitive touchscreen display for easy navigation and progress monitoring</p>
            </div>
          </div>
        </div>
      </section>

      {/* Faster Recovery, Better Results Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12 shadow-xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">
                Faster recovery, better results
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Clinical studies show PortableConnect patients achieve superior outcomes compared to standard care
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
              {/* Left: Text Content */}
              <div>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  In pilot studies, patients using the PortableConnect adaptive telemed technology regained range of motion faster, experienced less pain, and achieved better outcomes, with significantly lower cost of care.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  On average, PortableConnect patients meet or exceed their pre-operative range of motion by just 2 weeks after knee surgery.
                </p>
              </div>

              {/* Right: Comparison Image */}
              <div className="bg-white rounded-2xl p-6 border-2 border-gray-200">
                <Image
                  src="/resources/images/deviceangle.png"
                  alt="Range of Motion Comparison - ROMTech vs Standard Care"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>

            {/* Comparison Data Grid */}
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              {/* ROMTech Column */}
              <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">ROMTech®</h3>
                <div className="space-y-6">
                  <div>
                    <div className="text-5xl font-extrabold mb-2">112°</div>
                    <div className="text-lg text-red-100">Range of Motion After 2 Weeks</div>
                  </div>
                  <div>
                    <div className="text-5xl font-extrabold mb-2">50%</div>
                    <div className="text-lg text-red-100">patients recovered range of motion 2 weeks post-op</div>
                  </div>
                </div>
              </div>

              {/* Standard Care Column */}
              <div className="bg-gray-200 rounded-2xl p-8 text-gray-900">
                <h3 className="text-2xl font-bold mb-6">Standard Care</h3>
                <div className="space-y-6">
                  <div>
                    <div className="text-5xl font-extrabold mb-2">99°</div>
                    <div className="text-lg text-gray-700">Range of Motion After 2 Weeks</div>
                  </div>
                  <div>
                    <div className="text-5xl font-extrabold mb-2">13%</div>
                    <div className="text-lg text-gray-700">patients recovered range of motion 2 weeks post-op</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cutting Costs of Care Section */}
      <section className="py-20 bg-gradient-to-br from-teal-600 to-teal-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-12 shadow-2xl">
            <div className="mb-10">
              <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">
                Cutting costs of care
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed max-w-4xl">
                Quicker discharges, faster recoveries, and better outcomes lead to significantly lower cost of care. ROMTech has been shown to drastically cut the cost of care when used immediately following knee or hip surgery.
              </p>
            </div>

            {/* Total Savings */}
            <div className="text-center mb-10 pb-10 border-b-2 border-gray-200">
              <div className="text-6xl lg:text-7xl font-extrabold text-teal-600 mb-3">
                $2,000-$6,250
              </div>
              <div className="text-2xl font-semibold text-gray-700">
                Total savings per patient
              </div>
            </div>

            {/* Savings Breakdown Table */}
            <div className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200">
              <div className="grid md:grid-cols-4 gap-6">
                {/* Column 1: Hospital/Clinic */}
                <div className="text-center">
                  <div className="text-lg font-bold text-gray-900 mb-4">1-5 Days Hospital / Clinic</div>
                  <div className="bg-white rounded-xl p-4 border-2 border-gray-200">
                    <div className="text-sm text-gray-600 mb-2">Earlier Discharge</div>
                    <div className="text-2xl font-extrabold text-teal-600">$0-$4,000</div>
                  </div>
                </div>

                {/* Column 2: Acute Rehab */}
                <div className="text-center">
                  <div className="text-lg font-bold text-gray-900 mb-4">5-10 Days Acute Rehab</div>
                  <div className="bg-white rounded-xl p-4 border-2 border-gray-200">
                    <div className="text-sm text-gray-600 mb-2">Skip Acute Rehab</div>
                    <div className="text-2xl font-extrabold text-teal-600">$0-$6,000</div>
                  </div>
                </div>

                {/* Column 3: Home Health Therapist */}
                <div className="text-center">
                  <div className="text-lg font-bold text-gray-900 mb-4">6-12 Visits Home Health Therapist</div>
                  <div className="bg-white rounded-xl p-4 border-2 border-gray-200">
                    <div className="text-sm text-gray-600 mb-2">Save 3-10 Visits</div>
                    <div className="text-2xl font-extrabold text-teal-600">$750-$2,500</div>
                  </div>
                </div>

                {/* Column 4: Outpatient Therapy */}
                <div className="text-center">
                  <div className="text-lg font-bold text-gray-900 mb-4">10-20 Visits Outpatient Therapy</div>
                  <div className="bg-white rounded-xl p-4 border-2 border-gray-200">
                    <div className="text-sm text-gray-600 mb-2">Save 5-15 Visits</div>
                    <div className="text-2xl font-extrabold text-teal-600">$1,250-$3,750</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Summary */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">
              Why Choose PortableConnect®?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the benefits of advanced rehabilitation technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-2 border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">50% Faster Recovery</h3>
                  <p className="text-gray-600 leading-relaxed">Recover in half the time compared to traditional physical therapy. The adaptive pedal technology allows you to begin therapeutic motion as early as the day of surgery.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-2 border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">At-Home Convenience</h3>
                  <p className="text-gray-600 leading-relaxed">Complete multiple therapy sessions per day from the comfort and privacy of your home, without the hassle of frequent clinic visits.</p>
                </div>
              </div>
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
              <p className="text-gray-700 text-lg leading-relaxed">
                Our devices are covered by most insurance payers, making advanced rehabilitation technology accessible to patients.
              </p>
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
