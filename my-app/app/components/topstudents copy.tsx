'use client'

import { useEffect, useRef, useState } from 'react'
import { Award, Star, TrendingUp, Users, BookOpen, Code, Zap } from 'lucide-react'
import Image from 'next/image'


const students = [
  { 
    name: 'Alex Chen',
    role: 'Full Stack Developer',
    achievement: 'Completed 15+ projects',
    score: 98,
    rank: '#1',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop',
    color: 'from-blue-500 to-cyan-500',
    skills: ['React', 'Node.js', 'Python'],
    feedback: 'Exceptional problem solver and team player'
  },
  { 
    name: 'Sarah Johnson',
    role: 'AI/ML Engineer',
    achievement: 'Published 3 research papers',
    score: 96,
    rank: '#2',
    image: 'https://images.unsplash.com/photo-1494790108755-27193f48e1a6?w=400&h=400&fit=crop',
    color: 'from-purple-500 to-pink-500',
    skills: ['TensorFlow', 'PyTorch', 'Computer Vision'],
    feedback: 'Brilliant researcher with innovative ideas'
  },
  { 
    name: 'Michael Park',
    role: 'Cloud Architect',
    achievement: 'AWS Certified Expert',
    score: 95,
    rank: '#3',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    color: 'from-orange-500 to-red-500',
    skills: ['AWS', 'Kubernetes', 'Terraform'],
    feedback: 'Architected solutions for 10+ enterprises'
  },
  { 
    name: 'Emily Rodriguez',
    role: 'UX/UI Designer',
    achievement: '5x Design Award Winner',
    score: 94,
    rank: '#4',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop',
    color: 'from-green-500 to-emerald-500',
    skills: ['Figma', 'User Research', 'Prototyping'],
    feedback: 'Creates intuitive and beautiful experiences'
  }
]

export default function TopStudents() {
  const [scores, setScores] = useState(students.map(() => 0))
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          students.forEach((student, index) => {
            let start = 0
            const end = student.score
            const duration = 2000
            const increment = end / (duration / 16)
            
            const timer = setInterval(() => {
              start += increment
              if (start >= end) {
                setScores(prev => {
                  const newScores = [...prev]
                  newScores[index] = end
                  return newScores
                })
                clearInterval(timer)
              } else {
                setScores(prev => {
                  const newScores = [...prev]
                  newScores[index] = Math.floor(start)
                  return newScores
                })
              }
            }, 16)
          })
        }
      },
      { threshold: 0.3 }
    )
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }
    
    return () => observer.disconnect()
  }, [])
  
  return (
    <section 
      id="top-students" 
      ref={sectionRef} 
      className="relative py-20 md:py-28 overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-blue-950" />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      
      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse animation-delay-2000" />
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Live indicator */}
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 text-blue-300 text-sm font-medium px-4 py-2 rounded-full mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
            </span>
            Top Performing Students
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Meet Our{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Star Performers
            </span>
          </h2>
          
          <p className="text-lg text-gray-300">
            These exceptional students have demonstrated outstanding skills and achieved remarkable results 
            in their respective fields.
          </p>
        </div>
        
        {/* Students grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {students.map((student, index) => {
            const isHovered = hoveredIndex === index
            
            return (
              <div
                key={index}
                className="group relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Glow effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${student.color} rounded-2xl opacity-0 group-hover:opacity-30 blur transition-all duration-500`} />
                
                {/* Card */}
                <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:bg-gray-800/80 transition-all duration-300">
                  {/* Rank badge */}
                  <div className={`absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br ${student.color} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg z-10`}>
                    {student.rank}
                  </div>
                  
                  {/* Profile image */}
                  <div className="relative mb-4 flex justify-center">
                    <div className="relative w-24 h-24 rounded-full overflow-hidden ring-4 ring-white/10 group-hover:ring-white/20 transition-all">
                      <img 
                        src={student.image} 
                        alt={student.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Small status indicator */}
                    <div className="absolute bottom-1 right-1/2 transform translate-x-12 w-4 h-4 bg-green-500 border-2 border-gray-900 rounded-full" />
                  </div>
                  
                  {/* Student info */}
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold text-white mb-1">{student.name}</h3>
                    <p className="text-sm text-gray-300 mb-2">{student.role}</p>
                    
                    {/* Score */}
                    <div className="inline-flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      <span className="text-lg font-bold text-white">{scores[index]}%</span>
                    </div>
                  </div>
                  
                  {/* Achievement */}
                  <div className="bg-white/5 rounded-lg p-3 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Award className="w-4 h-4 text-yellow-400" />
                      <span className="text-gray-300">{student.achievement}</span>
                    </div>
                  </div>
                  
                  {/* Skills */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2 justify-center">
                      {student.skills.map((skill, i) => (
                        <span 
                          key={i}
                          className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Feedback */}
                  <p className="text-sm text-gray-400 italic border-t border-gray-700/50 pt-4">
                    "{student.feedback}"
                  </p>
                  
                  {/* Progress bar (appears on hover) */}
                  <div className={`absolute bottom-4 left-6 right-6 h-1 bg-gray-700 rounded-full overflow-hidden transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                    <div 
                      className={`h-full bg-gradient-to-r ${student.color} rounded-full transition-all duration-1000`}
                      style={{ width: `${scores[index]}%` }}
                    />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        
        {/* Bottom metrics - class statistics */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {[
            { label: 'Average Score', value: '96%', icon: Star },
            { label: 'Projects Completed', value: '150+', icon: Code },
            { label: 'Job Placements', value: '45', icon: Users },
            { label: 'Tech Certifications', value: '89', icon: Award }
          ].map((metric, index) => {
            const Icon = metric.icon
            return (
              <div key={index} className="text-center group">
                <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:bg-white/10 transition-colors">
                  <Icon className="w-5 h-5 text-blue-400" />
                </div>
                <div className="text-lg font-semibold text-white">{metric.value}</div>
                <div className="text-xs text-gray-400">{metric.label}</div>
              </div>
            )
          })}
        </div>
        
        {/* Achievement visualization */}
        <div className="relative mt-20 max-w-4xl mx-auto">
          <div className="flex items-center justify-between">
            {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'].map((month, i) => (
              <div key={i} className="text-center">
                <div className="text-xs text-gray-400 mb-2">{month}</div>
                <div className="relative">
                  <div 
                    className="w-8 bg-gradient-to-t from-blue-500 to-purple-500 rounded-t-lg transition-all duration-1000"
                    style={{ height: `${60 + Math.random() * 30}px` }}
                  />
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-xs text-blue-300">
                    {Math.floor(70 + Math.random() * 25)}%
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-400 mt-6">
            Class performance trend - 30% improvement over last semester
          </p>
        </div>
      </div>
    </section>
  )
}