'use client'

import { useState } from 'react'
import { 
  Star, Award, MapPin, Calendar, ExternalLink,
  ChevronRight, Quote, Briefcase, GraduationCap
} from 'lucide-react'

const topStudents = [
  {
    name: 'Alex Chen',
    role: 'Full Stack Developer',
    company: 'Google',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&h=200&fit=crop',
    achievement: 'Placed at Google within 3 months of graduation',
    testimonial: 'The bootcamp transformed my career. Landed my dream job at Google.',
    year: '2024',
    location: 'San Francisco, CA',
    badge: 'Top Performer',
    highlight: 'Secured $165k package'
  },
  {
    name: 'Sarah Johnson',
    role: 'AI/ML Engineer',
    company: 'OpenAI',
    image: 'https://images.unsplash.com/photo-1494790108755-27193f48e1a6?w=200&h=200&fit=crop',
    achievement: 'Co-authored research paper accepted at NeurIPS',
    testimonial: 'Published my first research paper with mentors from the program.',
    year: '2024',
    location: 'Seattle, WA',
    badge: 'Research Excellence',
    highlight: 'Paper cited 50+ times'
  },
  {
    name: 'Michael Park',
    role: 'Cloud Architect',
    company: 'AWS',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
    achievement: 'Earned 5 AWS certifications in 6 months',
    testimonial: 'From beginner to cloud architect. The structured learning path was perfect.',
    year: '2023',
    location: 'Austin, TX',
    badge: 'Certification Pro',
    highlight: 'Now leading cloud team'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Product Designer',
    company: 'Airbnb',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&h=200&fit=crop',
    achievement: 'Designed feature used by 10M+ users',
    testimonial: 'My portfolio project caught Airbnb\'s attention. Now designing at scale.',
    year: '2024',
    location: 'Los Angeles, CA',
    badge: 'Design Star',
    highlight: 'Featured in Design Weekly'
  }
]

export default function TopStudents() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="top-students" className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium px-4 py-2 rounded-full mb-6">
            <Award className="w-4 h-4" />
            Success Stories
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Top performing{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              students
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Meet our graduates who are making waves in the tech industry
          </p>
        </div>

        {/* Students List */}
        <div className="space-y-4">
          {topStudents.map((student, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Main Card */}
              <div className="relative bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  {/* Left - Profile Image */}
                  <div className="relative flex-shrink-0">
                    <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden ring-4 ring-white dark:ring-gray-800 shadow-lg">
                      <img
                        src={student.image}
                        alt={student.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Badge */}
                    <div className="absolute -top-2 -right-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-xs font-medium px-2 py-1 rounded-full whitespace-nowrap shadow-lg">
                      {student.badge}
                    </div>
                  </div>

                  {/* Middle - Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {student.name}
                      </h3>
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-medium rounded-full">
                          {student.role}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                          <Briefcase className="w-3 h-3" />
                          {student.company}
                        </span>
                      </div>
                    </div>

                    {/* Achievement - This is the main "write top" part */}
                    <div className="mb-3">
                      <p className="text-base font-medium text-gray-900 dark:text-white mb-1">
                        🏆 {student.achievement}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                        "{student.testimonial}"
                      </p>
                    </div>

                    {/* Meta info */}
                    <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {student.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        Class of {student.year}
                      </span>
                      <span className="flex items-center gap-1 text-green-600 dark:text-green-400 font-medium">
                        <GraduationCap className="w-3 h-3" />
                        {student.highlight}
                      </span>
                    </div>
                  </div>

                  {/* Right - CTA */}
                  <div className="flex-shrink-0 flex items-center gap-3">
                    <button className="p-2 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </button>
                    <button className="group/btn inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full hover:border-blue-300 dark:hover:border-blue-600 transition-all">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">View story</span>
                      <ChevronRight className="w-4 h-4 text-gray-400 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>

                {/* Quote icon decoration */}
                <Quote className="absolute top-4 right-4 w-8 h-8 text-gray-200 dark:text-gray-800 opacity-50" />
              </div>

              {/* Glow effect on hover */}
              {hoveredIndex === index && (
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-2xl blur-xl -z-10" />
              )}
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-10">
          <button className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors group">
            <span className="text-sm font-medium">View all success stories</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  )
}