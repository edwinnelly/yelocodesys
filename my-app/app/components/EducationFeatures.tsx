'use client'

import { useState } from 'react'
import { 
  Star, Award, MapPin, Calendar, ExternalLink,
  ChevronRight, Quote, Briefcase, GraduationCap,
  Heart, Lightbulb, Shield
} from 'lucide-react'

export default function TopStudents() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-1 bg-white dark:bg-black">
      <br></br>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-yellow-50 dark:bg-yellow-900/30 text-gray-600 dark:text-white text-sm font-medium px-4 py-2 rounded-full mb-4">
            <Heart className="w-4 h-4" />
            Core Principles
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Empowerment Through <span className="text-yellow-600 dark:text-yellow-400">Knowledge</span>
          </h2>
        </div>

        <div className="space-y-12">
          {/* Principle 1 */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-flex items-center gap-2 bg-yellow-50 dark:bg-yellow-800 text-gray-600 dark:text-white text-sm font-medium px-4 py-2 rounded-full mb-4">
                <Lightbulb className="w-4 h-4" />
                Principle 1
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Innovation First</h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                We embrace creativity and cutting-edge technology to design future ready solutions. 
                Our curriculum evolves with industry trends to ensure you learn the most relevant skills.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur-2xl opacity-20" />
                <img 
                  src="pics/db.jpg" 
                  alt="Innovation First"
                  className="relative rounded-2xl shadow-2xl w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>

          {/* Principle 2 */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur-2xl opacity-20" />
                <img 
                  src="pics/40606.jpg" 
                  alt="Excellence Always"
                  className="relative rounded-2xl shadow-2xl w-full h-80 object-cover"
                />
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 bg-yellow-50 dark:bg-yellow-800 text-gray-600 dark:text-white text-sm font-medium px-4 py-2 rounded-full mb-4">
                <Award className="w-4 h-4" />
                Principle 2
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Excellence Always</h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                We uphold the highest standards in everything we build, teach, and deliver. 
                Our commitment to quality ensures you receive the best education possible.
              </p>
            </div>
          </div>

          {/* Principle 3 */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-flex items-center gap-2 bg-yellow-50 dark:bg-yellow-700 text-gray-600 dark:text-white text-sm font-medium px-4 py-2 rounded-full mb-4">
                <Shield className="w-4 h-4" />
                Principle 3
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Integrity & Trust</h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                We operate with transparency and honesty, building long lasting relationships. 
                Your success is our success, and we're committed to your growth.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur-2xl opacity-20" />
                <img 
                  src="pics/37243.jpg"  
                  alt="Integrity & Trust"
                  className="relative rounded-2xl shadow-2xl w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}