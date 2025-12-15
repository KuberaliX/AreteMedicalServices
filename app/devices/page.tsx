'use client';

import { useState } from 'react';
import Image from 'next/image';
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import DeviceModal from "../components/DeviceModal";

// Device data structure - easy to add more devices in the future
const devices = [
  {
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
  }
  // Add more devices here in the future - just add objects to this array
];

export default function Devices() {
  const [selectedDevice, setSelectedDevice] = useState<string | null>(null);
  const [expandedDevice, setExpandedDevice] = useState<string | null>(null);

  const openModal = (deviceId: string) => {
    setSelectedDevice(deviceId);
  };

  const closeModal = () => {
    setSelectedDevice(null);
  };

  const toggleExpand = (deviceId: string) => {
    setExpandedDevice(expandedDevice === deviceId ? null : deviceId);
  };

  const currentDevice = devices.find(d => d.id === selectedDevice);

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
              Our Medical Devices
            </h1>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Discover our range of <span className="font-semibold text-gray-900">clinician-controlled physical therapy devices</span> designed to 
              deliver faster recovery, better outcomes, and significant cost savings through adaptive telemedicine technology.
            </p>
          </div>
        </div>
      </section>

      {/* Devices Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 mb-16">
            {devices.map((device) => {
              const isExpanded = expandedDevice === device.id;
              return (
                <div
                  key={device.id}
                  className="bg-gradient-to-br from-red-600 to-red-700 rounded-3xl overflow-hidden text-white shadow-2xl hover:shadow-3xl transition-all duration-300"
                >
                  <div className="p-8 lg:p-12">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                      <div>
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm mb-6">
                          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-sm font-semibold">FDA Approved Medical Device</span>
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-extrabold mb-4">
                          {device.name}
                        </h2>
                        <p className="text-xl text-red-100 mb-6 leading-relaxed">
                          {device.tagline}
                        </p>
                        <p className="text-lg text-red-50 mb-8 leading-relaxed">
                          {device.description.substring(0, 200)}...
                        </p>
                        
                        {/* Quick Features Preview */}
                        <div className="grid grid-cols-2 gap-3 mb-8">
                          {device.features.slice(0, 4).map((feature, index) => (
                            <div key={index} className="flex items-start gap-2">
                              <svg className="w-5 h-5 text-white flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="text-sm text-red-100">{feature.title}</span>
                            </div>
                          ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                          <button
                            onClick={() => openModal(device.id)}
                            className="bg-white text-red-600 px-10 py-4 rounded-xl font-semibold text-lg hover:bg-red-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 transform"
                          >
                            Request {device.name}
                          </button>
                          <button
                            onClick={() => toggleExpand(device.id)}
                            className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 px-10 py-4 rounded-xl font-semibold text-lg hover:bg-white/30 transition-all duration-300 flex items-center justify-center gap-2"
                          >
                            {isExpanded ? (
                              <>
                                <span>Show Less</span>
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                                </svg>
                              </>
                            ) : (
                              <>
                                <span>Show More</span>
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                      
                      {/* Device Image */}
                      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 lg:p-6 border border-white/20 overflow-hidden">
                        <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-white">
                          <Image
                            src="/resources/images/portableconnect-device.jpg"
                            alt={`${device.name} - Medical rehabilitation device with clinician`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Expandable Content */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      isExpanded ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-8 lg:px-12 pb-8 lg:pb-12 bg-white text-gray-900">
                      {/* Advanced Technology Features */}
                      <div className="mb-12 pt-8 border-t-2 border-gray-200">
                        <div className="text-center mb-8">
                          <h3 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
                            Advanced Technology Features
                          </h3>
                          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Our devices integrate cutting-edge technology to deliver personalized, effective rehabilitation
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

                      {/* Insurance Coverage */}
                      <div className="bg-blue-50 rounded-2xl p-10 text-center">
                        <div className="max-w-3xl mx-auto">
                          <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                          </div>
                          <h4 className="text-2xl font-bold text-gray-900 mb-4">Covered by Most Insurance Payers</h4>
                          <p className="text-gray-700 text-lg leading-relaxed">
                            Our devices are covered by most insurance payers, making advanced rehabilitation technology 
                            accessible to patients. Contact us to verify your coverage and get started on your recovery journey.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />

      {/* Device Modal */}
      {currentDevice && (
        <DeviceModal
          device={currentDevice}
          isOpen={selectedDevice !== null}
          onClose={closeModal}
        />
      )}
    </div>
  );
}
