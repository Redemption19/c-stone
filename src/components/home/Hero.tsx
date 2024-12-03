import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroSideImage from "@assets/video/hero-side.gif";

const Hero = () => {
  return (
    <div className="relative bg-white min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center bg-green-50 rounded-full px-4 py-2">
              <span className="text-green-600 font-semibold text-sm">News</span>
              <span className="ml-2 text-gray-600 text-sm">
                Expanding our services to new regions
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Empowering Rural Ghana Through{" "}
              <span className="text-green-600">Innovation</span>
            </h1>

            <p className="text-xl text-gray-600 max-w-2xl">
              We're building sustainable communities by providing accessible
              financial services, quality livestock supply, and reliable
              telecommunications infrastructure.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/services"
                className="bg-green-600 text-white px-8 py-4 rounded-lg flex items-center space-x-2 hover:bg-green-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                <span>Our Services</span>
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/contact"
                className="bg-white text-gray-900 px-8 py-4 rounded-lg border-2 border-gray-200 hover:border-green-600 hover:text-green-600 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="relative">
            {/* Mobile and Tablet Image */}
            <div className="relative lg:hidden mb-8">
              <img
                src={heroSideImage}
                alt="Rural Innovation"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>

            {/* Desktop Image with Floating Boxes */}
            <div className="relative hidden lg:block">
              <img
                src={heroSideImage}
                alt="Rural Innovation"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <svg
                      className="w-8 h-8 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Impact Growth</p>
                    <p className="text-2xl font-bold text-gray-900">+125%</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <svg
                      className="w-8 h-8 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Communities Served</p>
                    <p className="text-2xl font-bold text-gray-900">10,000+</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;