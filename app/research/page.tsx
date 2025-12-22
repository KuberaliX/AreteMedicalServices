import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Link from "next/link";
import Image from "next/image";

export default function Research() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-blue-100 text-blue-700 border border-blue-200">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                </svg>
                Published Research
              </span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6">
              Clinical Evidence
            </h1>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Peer-reviewed research demonstrates the superior outcomes of PortableConnect® compared to 
              standard physical therapy for rehabilitation after total knee arthroplasty.
            </p>
          </div>
        </div>
      </section>

      {/* Study Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-8 lg:p-12 text-white shadow-2xl mb-16">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-extrabold mb-6">
                  Journal of Arthroplasty Study
                </h2>
                <p className="text-xl text-blue-100 mb-6 leading-relaxed">
                  A recent study published in the <strong>Journal of Arthroplasty</strong> has provided 
                  groundbreaking new data to support the use of PortableConnect® for outpatient rehabilitation 
                  after knee replacement surgery.
                </p>
                <p className="text-lg text-blue-50 leading-relaxed mb-6">
                  The retrospective review compared outcomes between patient groups assigned to postop rehab 
                  with either in-home, remote physical therapy (PT) using the PortableConnect system, or 
                  outpatient standard therapy protocol (STP).
                </p>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/30">
                  <p className="font-semibold text-lg mb-2">Published:</p>
                  <p className="text-blue-100">October 14, 2022</p>
                  <p className="font-semibold text-lg mt-4 mb-2">Authors:</p>
                  <p className="text-blue-100">Spencer Summers, MD; Ryan Nunley, MD; Eric Slotkin, DO</p>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="bg-white rounded-xl p-8 text-center">
                  <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center">
                    <svg className="w-12 h-12 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                      <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-600 text-sm">Journal Cover Image</p>
                  <p className="text-xs text-gray-500 mt-2">THE JOURNAL OF ARTHROPLASTY</p>
                </div>
              </div>
            </div>
          </div>

          {/* Study Methodology */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-extrabold mb-6">270 Consecutive TKA Patients</h3>
              <ul className="space-y-3 text-red-100">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>No statistically significant differences at baseline between groups</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Same implant, approach, and surgical protocol for all patients</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Same prehabilitation for all patients</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Progress evaluated at 2, 6, and 12 weeks</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-extrabold mb-6">PortableConnect®: 135 Patients</h3>
              <ul className="space-y-3 text-red-100">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>2-5 structured sessions per day</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>No additional PT prescribed</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Data monitored remotely by physical therapist</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Patients contacted if data falls outside expected parameters</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-100 rounded-2xl p-8 text-gray-900">
              <h3 className="text-2xl font-extrabold mb-6">Standard Therapy: 135 Patients</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 flex-shrink-0 mt-0.5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>4 weeks (minimum) of in-person, outpatient therapy sessions</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 flex-shrink-0 mt-0.5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>2-3 times per week</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 flex-shrink-0 mt-0.5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Multifaceted standard of care program</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 flex-shrink-0 mt-0.5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Included stretching, strength training, gait training, and therapeutic equipment</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">
              Study Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              PortableConnect® demonstrated superior outcomes across all measured parameters
            </p>
          </div>

          {/* Therapy Sessions Comparison */}
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl mb-12 border-2 border-gray-100">
            <h3 className="text-3xl font-extrabold text-gray-900 mb-2 text-center">
              Patients Are More Compliant With PortableConnect®
            </h3>
            <p className="text-center text-gray-600 mb-8">Total Therapy Sessions Over 12 Weeks</p>
            
            <div className="max-w-2xl mx-auto">
              {/* Visual Bar Chart Representation */}
              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-gray-900">PortableConnect®</span>
                    <span className="text-2xl font-extrabold text-red-600">84</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-16 relative overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-red-600 to-red-700 h-full rounded-full flex items-center justify-end pr-4 transition-all duration-1000"
                      style={{ width: '100%' }}
                    >
                      <span className="text-white font-bold text-lg">84 sessions</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-gray-700">Standard Therapy Protocol</span>
                    <span className="text-2xl font-extrabold text-gray-500">19</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-16 relative overflow-hidden">
                    <div 
                      className="bg-gray-500 h-full rounded-full flex items-center justify-end pr-4 transition-all duration-1000"
                      style={{ width: '22.6%' }}
                    >
                      <span className="text-white font-bold text-lg">19 sessions</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <div className="inline-block bg-orange-100 border-2 border-orange-300 rounded-xl px-6 py-3">
                  <span className="text-2xl font-extrabold text-orange-700">4x MORE SESSIONS</span>
                </div>
                <p className="text-gray-700 mt-6 text-lg leading-relaxed">
                  Patients using the PortableConnect system completed an average of <strong>65 more sessions</strong> compared 
                  to patients participating in physical therapy.
                </p>
                <blockquote className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-xl text-left">
                  <p className="text-gray-800 italic text-lg">
                    "This frequency and quantity of sessions is believed to be one of the major causes of superior results 
                    from the [PortableConnect] protocol. It is nonreplicable, for practical purposes, with standard outpatient therapy."
                  </p>
                </blockquote>
              </div>
            </div>
          </div>

          {/* Key Outcome Measures */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* 31% Less Pain */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-gray-100">
              <h3 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">
                31% LESS PAIN
              </h3>
              <p className="text-center text-gray-600 mb-6">P&lt;0.0001 - Statistically Significant</p>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-semibold text-gray-700">6 Weeks</span>
                  </div>
                  <div className="flex gap-4 items-end">
                    <div className="flex-1">
                      <div className="text-xs text-gray-600 mb-1">PortableConnect®</div>
                      <div className="bg-red-600 h-12 rounded-t flex items-center justify-center">
                        <span className="text-white font-bold">3.6</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="text-xs text-gray-600 mb-1">STP</div>
                      <div className="bg-gray-500 h-16 rounded-t flex items-center justify-center">
                        <span className="text-white font-bold">5.2</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-semibold text-gray-700">12 Weeks</span>
                  </div>
                  <div className="flex gap-4 items-end">
                    <div className="flex-1">
                      <div className="bg-red-600 h-8 rounded-t flex items-center justify-center">
                        <span className="text-white font-bold text-sm">1.4</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="bg-gray-500 h-12 rounded-t flex items-center justify-center">
                        <span className="text-white font-bold text-sm">2.9</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <div className="inline-block bg-orange-100 border-2 border-orange-300 rounded-lg px-4 py-2">
                  <span className="text-lg font-bold text-orange-700">↓31% Overall Reduction</span>
                </div>
              </div>
            </div>

            {/* Improved Range of Motion */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-gray-100">
              <h3 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">
                IMPROVED RANGE OF MOTION
              </h3>
              <p className="text-center text-gray-600 mb-6">6 Weeks Post-Procedure: P&lt;0.0001</p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-extrabold text-red-600 mb-2">116.7°</div>
                  <div className="text-sm font-semibold text-gray-700 mb-1">PortableConnect®</div>
                  <div className="text-xs text-gray-600">Flexion</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-extrabold text-gray-500 mb-2">101.8°</div>
                  <div className="text-sm font-semibold text-gray-700 mb-1">STP</div>
                  <div className="text-xs text-gray-600">Flexion</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-extrabold text-red-600 mb-2">-1.8°</div>
                  <div className="text-sm font-semibold text-gray-700 mb-1">PortableConnect®</div>
                  <div className="text-xs text-gray-600">Extension</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-extrabold text-gray-500 mb-2">-3.7°</div>
                  <div className="text-sm font-semibold text-gray-700 mb-1">STP</div>
                  <div className="text-xs text-gray-600">Extension</div>
                </div>
              </div>
              
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="bg-orange-100 border-2 border-orange-300 rounded-lg px-3 py-2 text-center">
                  <span className="text-sm font-bold text-orange-700">↑15% FLEXION</span>
                </div>
                <div className="bg-orange-100 border-2 border-orange-300 rounded-lg px-3 py-2 text-center">
                  <span className="text-sm font-bold text-orange-700">↑51% EXTENSION</span>
                </div>
              </div>
            </div>

            {/* 30% Higher KOOS JR */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-gray-100">
              <h3 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">
                30% HIGHER KOOS JR*
              </h3>
              <p className="text-center text-gray-600 mb-2">P&lt;0.0001</p>
              <p className="text-center text-sm text-gray-500 mb-6">*Knee Injury and Osteoarthritis Outcome Score, Joint Replacement</p>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-semibold text-gray-700">6 Weeks</span>
                  </div>
                  <div className="flex gap-4 items-end">
                    <div className="flex-1">
                      <div className="bg-red-600 h-16 rounded-t flex items-center justify-center">
                        <span className="text-white font-bold">60.8</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="bg-gray-500 h-12 rounded-t flex items-center justify-center">
                        <span className="text-white font-bold">46.6</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-semibold text-gray-700">12 Weeks</span>
                  </div>
                  <div className="flex gap-4 items-end">
                    <div className="flex-1">
                      <div className="bg-red-600 h-20 rounded-t flex items-center justify-center">
                        <span className="text-white font-bold">84.0</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="bg-gray-500 h-16 rounded-t flex items-center justify-center">
                        <span className="text-white font-bold">74.3</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <div className="inline-block bg-orange-100 border-2 border-orange-300 rounded-lg px-4 py-2">
                  <span className="text-lg font-bold text-orange-700">↑30% Overall Increase</span>
                </div>
              </div>
            </div>

            {/* 3x Fewer MUA */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-gray-100">
              <h3 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">
                3X FEWER MUA*
              </h3>
              <p className="text-center text-gray-600 mb-2">P=0.28</p>
              <p className="text-center text-sm text-gray-500 mb-6">*Manipulation Under Anesthesia</p>
              
              <div className="space-y-6">
                <div className="flex gap-6 items-end justify-center">
                  <div className="text-center">
                    <div className="bg-red-600 h-12 w-24 rounded-t flex items-center justify-center mb-2">
                      <span className="text-white font-bold text-xl">2</span>
                    </div>
                    <div className="text-sm font-semibold text-gray-700">PortableConnect®</div>
                  </div>
                  <div className="text-center">
                    <div className="bg-gray-500 h-20 w-24 rounded-t flex items-center justify-center mb-2">
                      <span className="text-white font-bold text-xl">6</span>
                    </div>
                    <div className="text-sm font-semibold text-gray-700">STP</div>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="inline-block bg-orange-100 border-2 border-orange-300 rounded-lg px-6 py-3">
                    <span className="text-2xl font-extrabold text-orange-700">3x FEWER</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Positive Cascade of Effects */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-10 mb-12">
            <h3 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">
              A Positive Cascade of Effects
            </h3>
            <p className="text-center text-gray-700 mb-8 text-lg">
              The study's authors also noted the clinically established connections between the measured outcomes and further benefits:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                <svg className="w-12 h-12 text-green-600 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h4 className="font-bold text-gray-900 mb-2">Reduced Narcotic Usage</h4>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                <svg className="w-12 h-12 text-green-600 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <h4 className="font-bold text-gray-900 mb-2">Accelerated Quadriceps Strength</h4>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                <svg className="w-12 h-12 text-green-600 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                <h4 className="font-bold text-gray-900 mb-2">Reduced Joint Swelling & Stiffness</h4>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                <svg className="w-12 h-12 text-green-600 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                <h4 className="font-bold text-gray-900 mb-2">Increased Patient Mobility</h4>
              </div>
            </div>
          </div>

          {/* Conclusions */}
          <div className="bg-gradient-to-br from-teal-700 to-teal-800 rounded-3xl p-10 lg:p-12 text-white shadow-2xl">
            <h3 className="text-3xl lg:text-4xl font-extrabold mb-8 text-center">Conclusions</h3>
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <p className="text-xl font-bold mb-4">✓ PortableConnect® was superior to standard physical therapy protocol following TKA</p>
                <p className="text-lg text-teal-100">
                  Statistically significant differences were found at all time points (2, 6, and 12 weeks) for all outcome measures 
                  in favor of PortableConnect®.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reference Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-2xl p-8 lg:p-10 border-2 border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Full Study Reference</h3>
            <p className="text-gray-700 mb-6 leading-relaxed text-center">
              <strong>Summers S, Nunley R, Slotkin E.</strong> A home-based, remote-clinician-controlled, physical therapy device 
              leads to superior outcomes when compared to standard physical therapy for rehabilitation after total knee arthroplasty. 
              <em>J Arthroplasty.</em> 2022;50883-5403(22):00929-9. doi:10.1016/j.arth.2022.10.009
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://romtech.com/wp-content/uploads/2025/10/PC-JOA-Study.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-red-700 transition-all duration-300 text-center shadow-lg hover:shadow-xl"
              >
                Download Full Study PDF
              </a>
              <Link
                href="/devices"
                className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-red-50 transition-all duration-300 text-center"
              >
                Learn About PortableConnect®
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

