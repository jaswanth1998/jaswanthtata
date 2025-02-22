import { ArrowRight } from "lucide-react";

import profilePic from "../assests/profilePhoto.png";

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
              Crafting Digital
              <span className="text-blue-600"> Experiences</span>
            </h1>
            <p className="text-xl text-gray-600">
              Full-stack developer specializing in creating beautiful,
              functional, and user-centered digital experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#projects">
                <button className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors flex items-center space-x-2">
                  <span>View Projects</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </a>
              <a href="#contact">
                <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition-colors">
                  Contact Me
                </button>
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 opacity-10 absolute -inset-4" />
            <img
              src={profilePic}
              alt="Profile"
              className="rounded-3xl shadow-2xl relative z-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
