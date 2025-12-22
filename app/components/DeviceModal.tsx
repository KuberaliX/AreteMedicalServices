'use client';

import { useEffect } from 'react';
import Link from 'next/link';

interface DeviceModalProps {
  device: {
    id: string;
    name: string;
    tagline: string;
    description: string;
    features: Array<{
      title: string;
      description: string;
    }>;
    benefits: Array<{
      title: string;
      description: string;
    }>;
    specifications?: Array<{
      label: string;
      value: string;
    }>;
    imageUrl?: string;
  };
  isOpen: boolean;
  onClose: () => void;
}

export default function DeviceModal({ device, isOpen, onClose }: DeviceModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-red-600 to-red-700 text-white p-6 lg:p-8 flex items-center justify-between z-10">
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm mb-3 text-sm">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              FDA Approved Medical Device
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold">{device.name}</h2>
            <p className="text-red-100 mt-2 text-lg">{device.tagline}</p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors flex-shrink-0"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 lg:p-8">
          {/* Description */}
          <div className="mb-8">
            <p className="text-lg text-gray-700 leading-relaxed">{device.description}</p>
          </div>

          {/* Features */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h3>
            <div className="space-y-4">
              {device.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-red-50 rounded-xl">
                  <svg className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="font-bold text-lg text-gray-900 mb-1">{feature.title}</h4>
                    <p className="text-gray-700">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Benefits</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {device.benefits.map((benefit, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200">
                  <h4 className="font-bold text-xl text-gray-900 mb-2">{benefit.title}</h4>
                  <p className="text-gray-700">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Specifications (if available) */}
          {device.specifications && device.specifications.length > 0 && (
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Specifications</h3>
              <div className="bg-gray-50 rounded-xl p-6">
                <dl className="grid md:grid-cols-2 gap-4">
                  {device.specifications.map((spec, index) => (
                    <div key={index}>
                      <dt className="font-semibold text-gray-900 mb-1">{spec.label}</dt>
                      <dd className="text-gray-700">{spec.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          )}

          {/* Clinical Study Evidence */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Clinical Evidence</h3>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-2 border-blue-200">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-lg text-gray-900 mb-1">Journal of Arthroplasty Study</h4>
                  <p className="text-sm text-gray-700 mb-3">
                    Published October 14, 2022 | 270 consecutive TKA patients
                  </p>
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-white rounded-lg p-3 text-center">
                      <div className="text-2xl font-extrabold text-red-600 mb-1">31%</div>
                      <div className="text-xs text-gray-600">Less Pain (P&lt;0.0001)</div>
                    </div>
                    <div className="bg-white rounded-lg p-3 text-center">
                      <div className="text-2xl font-extrabold text-red-600 mb-1">30%</div>
                      <div className="text-xs text-gray-600">Higher KOOS JR</div>
                    </div>
                    <div className="bg-white rounded-lg p-3 text-center">
                      <div className="text-2xl font-extrabold text-red-600 mb-1">3x</div>
                      <div className="text-xs text-gray-600">Fewer MUA</div>
                    </div>
                    <div className="bg-white rounded-lg p-3 text-center">
                      <div className="text-2xl font-extrabold text-red-600 mb-1">65+</div>
                      <div className="text-xs text-gray-600">More Sessions</div>
                    </div>
                  </div>
                  <a
                    href="https://romtech.com/wp-content/uploads/2025/10/PC-JOA-Study.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-700 font-semibold hover:text-blue-800 underline"
                  >
                    View Full Study →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
            <Link
              href="/contact"
              onClick={onClose}
              className="flex-1 bg-red-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-red-700 transition-all duration-300 text-center shadow-lg hover:shadow-xl"
            >
              Request {device.name}
            </Link>
            {/* <Link
              href="/testimonials"
              onClick={onClose}
              className="flex-1 border-2 border-red-600 text-red-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-red-50 transition-all duration-300 text-center"
            >
              View Patient Stories
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}

