import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section - Optimized for Elderly Patients */}
      <section className="relative pt-32 overflow-hidden min-h-screen flex items-center">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video 
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster="/resources/images/video-poster.jpg"
          >
            <source src="/resources/videos/romtech.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/60"></div>
          {/* Additional overlay for text contrast */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-transparent to-red-900/20"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 lg:py-24 w-full">
          {/* Centered Content */}
          <div className="text-center mb-12">
            {/* Fast Company Recognition Banner */}
            <div className="inline-block mb-4">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full text-base font-semibold bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 border-2 border-yellow-600 shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="font-bold">Fast Company's Most Innovative Companies 2025</span>
              </div>
            </div>
            <div className="inline-block mb-6">
              <span className="inline-flex items-center px-6 py-3 rounded-full text-lg font-semibold bg-white/90 backdrop-blur-sm text-red-700 border-2 border-white/50 shadow-lg">
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                FDA Approved Medical Device
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-tight mb-6 drop-shadow-2xl">
              The Modern Technology of
              <span className="block text-red-400 mt-3">
                Medical Rehabilitation®�
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl lg:text-3xl text-white leading-relaxed max-w-5xl mx-auto mb-10 font-medium drop-shadow-lg">
              The <span className="font-bold">PortableConnect®�</span> is a medical device that delivers 
              <span className="font-bold"> clinician-controlled physical therapy sessions</span> to patients 
              in their homes. Recover from knee replacement, hip replacement, ACL, and other surgeries in 
              <span className="font-bold text-red-400"> half the time</span> with faster outcomes and better pain management.
            </p>
            <p className="text-lg sm:text-xl lg:text-2xl text-white/90 leading-relaxed max-w-4xl mx-auto font-medium drop-shadow-lg">
              Designed for older adults: start gentle motion at home, reduce clinic trips, and keep care Medicare-friendly with coverage by most insurance plans.
            </p>
          </div>

        </div>
      </section>

      {/* Video Showcase Section - Enhanced */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-red-50/30 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-20 -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-20 -ml-48 -mb-48"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-red-100 text-red-700 border border-red-200">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                </svg>
                Watch & Learn
              </span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-extrabold text-gray-900 mb-6">
              See How PortableConnect®�
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-700 mt-3">
                Transforms Recovery
              </span>
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Watch real patients demonstrate how PortableConnect®� delivers clinician-controlled therapy sessions 
              in the comfort of their homes. Experience the device in action and see how it accelerates recovery.
            </p>
          </div>

          {/* Large Video Container */}
          <div className="relative max-w-6xl mx-auto">
            {/* Glow effect behind video */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-400 via-red-500 to-red-600 rounded-3xl blur-2xl opacity-30 transform scale-105"></div>
            
            {/* Video Frame with enhanced styling */}
            <div className="relative group">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-red-500/50">
                {/* Decorative corner accents */}
                <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-red-500 rounded-tl-3xl z-10"></div>
                <div className="absolute top-0 right-0 w-20 h-20 border-t-4 border-r-4 border-red-500 rounded-tr-3xl z-10"></div>
                <div className="absolute bottom-0 left-0 w-20 h-20 border-b-4 border-l-4 border-red-500 rounded-bl-3xl z-10"></div>
                <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-red-500 rounded-br-3xl z-10"></div>
                
                {/* Video container - larger aspect ratio */}
                <div className="relative aspect-[16/9] bg-gradient-to-br from-gray-900 to-gray-800">
                  <video 
                    className="w-full h-full object-cover"
                    controls
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster="/resources/images/video-poster.jpg"
                  >
                    <source src="/resources/videos/romtech.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  
                  {/* Overlay gradient for better text visibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
                  
                  {/* Play button overlay (shows when paused) */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-4 border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-12 h-12 text-white ml-2" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* Bottom info bar */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent p-6 lg:p-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white text-lg lg:text-xl font-bold mb-1">
                        PortableConnect®� in Action
                      </p>
                      <p className="text-white/80 text-sm lg:text-base">
                        Real patient demonstrations and device features
                      </p>
                    </div>
                    <div className="hidden lg:flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                      </svg>
                      <span className="text-white text-sm font-medium">HD Video</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature highlights below video */}
          <div className="mt-16 grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Real Patients</h4>
              <p className="text-sm text-gray-600">Authentic recovery stories</p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Device Features</h4>
              <p className="text-sm text-gray-600">See technology in action</p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Clinician Control</h4>
              <p className="text-sm text-gray-600">Remote therapy sessions</p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Proven Results</h4>
              <p className="text-sm text-gray-600">Success stories & outcomes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Device Features Section - Enhanced */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold text-red-600 uppercase tracking-wider">Key Features</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">
              The Power of
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-700 mt-2">
                PortableConnect®�
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Clinician-controlled therapy delivered to your home. Experience faster recovery, better outcomes, 
              and significant cost savings with our patented telemedicine technology.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {/* Accelerated Recovery At Home - Clock with rotating curved arrows */}
            <div className="group relative bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-red-200 transition-all duration-300 hover:shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-full -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto shadow-lg relative">
                  {/* Clock face with hands at 10:10 */}
                  <svg className="w-14 h-14 text-white absolute z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                    <circle cx="12" cy="12" r="9" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l3 3" />
                  </svg>
                  {/* Rotating curved arrows around clock */}
                  <svg className="w-20 h-20 text-white absolute animate-clock-arrows" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" opacity="0.9">
                    <path d="M12 2 Q16 4 20 6 Q22 8 22 12 Q22 16 20 18 Q16 20 12 22 Q8 20 4 18 Q2 16 2 12 Q2 8 4 6 Q8 4 12 2" strokeLinecap="round" />
                    <path d="M12 22 Q16 20 20 18 Q22 16 22 12 Q22 8 20 6 Q16 4 12 2 Q8 4 4 6 Q2 8 2 12 Q2 16 4 18 Q8 20 12 22" strokeLinecap="round" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Accelerated Recovery At Home:</h3>
                <p className="text-gray-600 leading-relaxed mb-6 text-center">
                  At-home rehabilitation enables knee and hip patients to begin therapeutic motion as early as the day of surgery, helping patients regain range of motion in half the time of traditional physical therapy.
                </p>
              </div>
            </div>
            
            {/* Superior Clinical Outcomes - Award badge with flowing ribbons */}
            <div className="group relative bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-red-200 transition-all duration-300 hover:shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-full -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto shadow-lg relative animate-award-shine">
                  {/* Award badge */}
                  <svg className="w-14 h-14 text-white relative z-10 animate-award-pulse" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                  {/* Flowing ribbons below badge */}
                  <svg className="w-16 h-16 text-white absolute -bottom-3 left-1/2 transform -translate-x-1/2 animate-ribbon-flow" fill="currentColor" viewBox="0 0 24 24" opacity="0.85">
                    <path d="M8 18 L10 20 L12 18 L14 20 L16 18" stroke="currentColor" strokeWidth="1.5" fill="none" />
                    <path d="M9 18 L9 24 M15 18 L15 24" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Superior Clinical Outcomes:</h3>
                <p className="text-gray-600 leading-relaxed mb-6 text-center">
                  On average, patients meet or exceed their pre-operative range of motion by 2 weeks after surgery, report significant reduction in pain and narcotic usage, and regain full activity and mobility weeks earlier compared to traditional therapy.
                </p>
              </div>
            </div>
            
            {/* Lower Cost of Medical Care - Piggy bank with coin drop */}
            <div className="group relative bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-red-200 transition-all duration-300 hover:shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-full -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto shadow-lg relative animate-piggy-bounce">
                  {/* Piggy bank */}
                  <svg className="w-14 h-14 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                    {/* Piggy bank body */}
                    <ellipse cx="12" cy="14" rx="7" ry="5.5" />
                    {/* Coin slot on top */}
                    <rect x="11" y="7" width="2" height="3.5" rx="0.5" />
                    {/* Legs */}
                    <ellipse cx="8" cy="19" rx="1.2" ry="1.8" />
                    <ellipse cx="16" cy="19" rx="1.2" ry="1.8" />
                    {/* Snout */}
                    <ellipse cx="12" cy="11.5" rx="1.8" ry="1.3" />
                    {/* Eye */}
                    <circle cx="10.2" cy="10.8" r="0.7" fill="currentColor" />
                  </svg>
                  {/* Coin dropping into slot */}
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 animate-coin-drop">
                    <div className="w-2.5 h-2.5 bg-yellow-400 rounded-full border border-yellow-500 shadow-sm"></div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Lower Cost of Medical Care:</h3>
                <p className="text-gray-600 leading-relaxed mb-6 text-center">
                  With coverage by most insurance payers, faster recovery times, fewer readmissions, and a reduction in physical therapy visits, ROMTech dramatically cuts the cost of care for patients and providers alike.
                </p>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-3xl p-12 mb-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">FDA Approved</h4>
                <p className="text-gray-600 text-sm">Meets all medical device standards</p>
              </div>
              <div>
                <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Clinically Proven</h4>
                <p className="text-gray-600 text-sm">Backed by extensive research</p>
              </div>
              <div>
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-10 h-10 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Most Innovative 2025</h4>
                <p className="text-gray-600 text-sm">Fast Company's prestigious list</p>
              </div>
              <div>
                <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Patient-Centered</h4>
                <p className="text-gray-600 text-sm">Designed with patient input</p>
              </div>
            </div>
          </div>

          {/* CTA Section - Enhanced */}
          <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-12 lg:p-16 text-center text-white overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(220,38,38,0.2),transparent_70%)]"></div>
            <div className="relative z-10">
              <h2 className="text-4xl lg:text-5xl font-extrabold mb-6">
                Faster Recovery, Better Results
              </h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                Join thousands of patients who have completed millions of therapy sessions with PortableConnect®�. 
                Recover in half the time with clinician-controlled therapy delivered to your home.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/devices"
                  className="group relative bg-red-600 text-white px-10 py-5 rounded-xl font-semibold text-lg hover:bg-red-700 transition-all duration-300 shadow-2xl hover:shadow-red-500/50 hover:scale-105 transform"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Learn More About Our Devices
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
                <Link
                  href="/contact"
                  className="group relative bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white px-10 py-5 rounded-xl font-semibold text-lg hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 transform"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Request a Device
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
                {/* <Link
                  href="/testimonials"
                  className="group bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white px-10 py-5 rounded-xl font-semibold text-lg hover:bg-white/20 hover:border-white/40 transition-all duration-300"
                >
                  <span className="flex items-center justify-center gap-2">
                    Read Success Stories
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
