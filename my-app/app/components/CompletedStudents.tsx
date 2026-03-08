'use client'

import { Award, ChevronRight, Star } from 'lucide-react'

const topStudents = [
  {
    name: 'Alex Chen',
    title: 'Now leading frontend at Google',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&h=200&fit=crop',
    achievement: 'Went from zero to Google in 6 months'
  },
  {
    name: 'Sarah Johnson',
    title: 'AI Researcher at OpenAI',
    image: 'https://images.unsplash.com/photo-1494790108755-27193f48e1a6?w=200&h=200&fit=crop',
    achievement: 'Published breakthrough ML paper'
  },
  {
    name: 'Michael Park',
    title: 'Cloud Architect at AWS',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
    achievement: 'Most certified cloud professional'
  }
]

export default function TopStudents() {
  return (
    <section className="py-24 bg-gradient-to-br from-white to-blue-50/30 dark:from-gray-950 dark:to-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-sm text-blue-600 mb-3">
              <Star className="w-4 h-4 fill-blue-600" />
              Hall of Fame
            </div>
            <h2 className="text-4xl font-light text-gray-900 dark:text-white">
              Where are they now?
            </h2>
          </div>
          <button className="hidden md:flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors">
            View all alumni
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {topStudents.map((student, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={student.image}
                  alt={student.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="w-4 h-4 text-yellow-400" />
                  <span className="text-xs font-medium text-white/90">{student.name}</span>
                </div>
                <p className="text-lg font-semibold mb-1">{student.title}</p>
                <p className="text-sm text-white/80">{student.achievement}</p>
              </div>

              <button className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/30">
                <ChevronRight className="w-4 h-4 text-white" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}