'use client'

import { useEffect, useRef, useState } from 'react'
import { Award, Star, TrendingUp, Users, BookOpen, Code, Zap, Target, Shield, Medal } from 'lucide-react'

const students = [
  { 
    name: 'Alex Chen',
    role: 'Full Stack Developer',
    achievement: 'Completed 15+ projects',
    score: 98,
    rank: '1',
    image: 'pics/picd.png',
    color: 'from-blue-600 to-blue-400',
    skills: ['React', 'Node.js', 'Python'],
    feedback: 'Exceptional problem solver and team player',
    projects: 15,
    certifications: 8
  },
  { 
    name: 'Sarah Johnson',
    role: 'AI/ML Engineer',
    achievement: 'Published 3 research papers',
    score: 96,
    rank: '2',
    image: 'pics/ayo.png',
    color: 'from-blue-700 to-blue-500',
    skills: ['TensorFlow', 'PyTorch', 'Computer Vision'],
    feedback: 'Brilliant researcher with innovative ideas',
    projects: 12,
    certifications: 6
  },
  { 
    name: 'Michael Park',
    role: 'Cloud Architect',
    achievement: 'AWS Certified Expert',
    score: 95,
    rank: '3',
    image: 'pics/xxc.png',
    color: 'from-blue-800 to-blue-600',
    skills: ['AWS', 'Kubernetes', 'Terraform'],
    feedback: 'Architected solutions for 10+ enterprises',
    projects: 20,
    certifications: 12
  },
  { 
    name: 'Emily Rodriguez',
    role: 'UX/UI Designer',
    achievement: '5x Design Award Winner',
    score: 94,
    rank: '4',
    image: 'pics/expensive.png',
    color: 'from-blue-600 to-blue-400',
    skills: ['Figma', 'User Research', 'Prototyping'],
    feedback: 'Creates intuitive and beautiful experiences',
    projects: 18,
    certifications: 5
  }
]

export default function TopStudents() {
  const [scores, setScores] = useState(students.map(() => 0))
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [activeFilter, setActiveFilter] = useState('all')
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
      className="relative py-20 md:py-28 overflow-hidden bg-white"
    >
      {/* Subtle blue pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]" 
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #1e3a8a 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Very light blue orbs for depth */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-blue-50 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-50 rounded-full blur-3xl" />
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Minimal badge */}
          <div className="inline-flex items-center gap-2 bg-white border border-blue-200 text-blue-700 text-sm font-medium px-4 py-2 rounded-full mb-6 shadow-sm">
            <Medal className="w-4 h-4 text-blue-600" />
            Excellence in Performance
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Top{' '}
            <span className="text-blue-600">
              Performing Students
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Recognizing outstanding achievement and dedication in technology and innovation.
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
                {/* Card */}
                <div className="relative bg-white border border-gray-200 rounded-2xl p-6 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-100 transition-all duration-300">
                  {/* Rank badge */}
                  <div className={`absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br ${student.color} rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
                    {student.rank}
                  </div>
                  
                  {/* Profile image */}
                  <div className="relative mb-5 flex justify-center">
                    <div className="relative w-24 h-24 rounded-2xl overflow-hidden ring-2 ring-gray-100 group-hover:ring-blue-200 transition-all">
                      <img 
                        src={student.image} 
                        alt={student.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Student info */}
                  <div className="text-center mb-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{student.name}</h3>
                    <p className="text-sm text-blue-600 mb-3">{student.role}</p>
                    
                    {/* Score */}
                    <div className="inline-flex items-center gap-1.5 bg-blue-50 px-3 py-1.5 rounded-lg">
                      <Target className="w-3.5 h-3.5 text-blue-600" />
                      <span className="text-base font-bold text-gray-900">{scores[index]}%</span>
                    </div>
                  </div>
                  
                  {/* Stats grid */}
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    <div className="bg-gray-50 rounded-lg p-2 text-center">
                      <div className="text-xs text-gray-500">Projects</div>
                      <div className="text-sm font-semibold text-gray-900">{student.projects}+</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-2 text-center">
                      <div className="text-xs text-gray-500">Certs</div>
                      <div className="text-sm font-semibold text-gray-900">{student.certifications}</div>
                    </div>
                  </div>
                  
                  {/* Achievement */}
                  <div className="bg-blue-50 rounded-lg p-2.5 mb-4">
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-blue-600 flex-shrink-0" />
                      <span className="text-xs text-gray-700 line-clamp-1">{student.achievement}</span>
                    </div>
                  </div>
                  
                  {/* Skills */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1.5">
                      {student.skills.map((skill, i) => (
                        <span 
                          key={i}
                          className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-md"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Feedback */}
                  <p className="text-xs text-gray-500 italic border-t border-gray-100 pt-3">
                    "{student.feedback}"
                  </p>
                  
                  {/* Progress indicator */}
                  <div className="absolute bottom-4 left-6 right-6 h-0.5 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${student.color} transition-all duration-1000`}
                      style={{ width: `${scores[index]}%` }}
                    />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        
        {/* Bottom metrics */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {[
            { label: 'Average Score', value: '96%', icon: Star, color: 'from-blue-600 to-blue-400' },
            { label: 'Projects', value: '150+', icon: Code, color: 'from-blue-700 to-blue-500' },
            { label: 'Placements', value: '45', icon: Users, color: 'from-blue-600 to-blue-400' },
            { label: 'Certifications', value: '89', icon: Shield, color: 'from-blue-800 to-blue-600' }
          ].map((metric, index) => {
            const Icon = metric.icon
            return (
              <div key={index} className="text-center group">
                <div className={`w-10 h-10 bg-gradient-to-br ${metric.color} rounded-xl flex items-center justify-center mx-auto mb-2 shadow-lg`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div className="text-lg font-semibold text-gray-900">{metric.value}</div>
                <div className="text-xs text-gray-500">{metric.label}</div>
              </div>
            )
          })}
        </div>
        
        {/* Trend indicator */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-white border border-gray-200 rounded-full px-6 py-3 shadow-sm">
            <TrendingUp className="w-5 h-5 text-blue-600" />
            <span className="text-sm text-gray-600">
              <span className="font-semibold text-gray-900">30% improvement</span> in overall performance
            </span>
            <Zap className="w-4 h-4 text-blue-500" />
          </div>
        </div>

        {/* Decorative wave */}
        <div className="mt-20 h-1 bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
      </div>
    </section>
  )
}