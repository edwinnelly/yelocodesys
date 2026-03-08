'use client'

import { useEffect, useRef, useState } from 'react'
import { 
  Clock, 
  Users, 
  Target, 
  BookOpen, 
  Code, 
  Zap, 
  Award, 
  TrendingUp, 
  Star, 
  Calendar, 
  CheckCircle, 
  GraduationCap,
  Database,
  Cloud,
  Palette,
  Sparkles,
  Shield,
  ChevronRight
} from 'lucide-react'

const bootcamps = [
  { 
    icon: Code,
    title: 'Full Stack Development',
    duration: '40 hours',
    durationDetail: '8 weeks · 5 hrs/week',
    students: 234,
    rating: 4.9,
    level: 'Beginner to Advanced',
    color: 'from-blue-500 to-cyan-500',
    courses: [
      'HTML/CSS Fundamentals',
      'JavaScript Mastery',
      'React.js Development',
      'Node.js API Design',
      'Database Management',
      'Deployment & DevOps'
    ],
    skills: ['React', 'Node.js', 'MongoDB', 'AWS'],
    certificate: 'Industry-recognized',
    nextStart: 'Starts June 15',
    price: '$499',
    features: ['Live mentoring', 'Project-based', 'Career support']
  },
  { 
    icon: Database,
    title: 'Data Science & AI',
    duration: '45 hours',
    durationDetail: '9 weeks · 5 hrs/week',
    students: 156,
    rating: 4.8,
    level: 'Intermediate',
    color: 'from-cyan-500 to-blue-500',
    courses: [
      'Python Programming',
      'Data Analysis with Pandas',
      'Machine Learning Basics',
      'Neural Networks',
      'NLP Fundamentals',
      'AI Ethics & Deployment'
    ],
    skills: ['Python', 'TensorFlow', 'Pandas', 'Scikit-learn'],
    certificate: 'IBM-accredited',
    nextStart: 'Starts June 22',
    price: '$599',
    features: ['Industry projects', 'Research papers', 'AI lab access']
  },
  { 
    icon: Cloud,
    title: 'Cloud Architecture',
    duration: '35 hours',
    durationDetail: '7 weeks · 5 hrs/week',
    students: 98,
    rating: 4.7,
    level: 'Advanced',
    color: 'from-blue-600 to-cyan-600',
    courses: [
      'AWS Fundamentals',
      'Serverless Computing',
      'Kubernetes Management',
      'DevOps Practices',
      'Infrastructure as Code',
      'Cloud Security'
    ],
    skills: ['AWS', 'Docker', 'K8s', 'Terraform'],
    certificate: 'AWS-aligned',
    nextStart: 'Starts July 1',
    price: '$549',
    features: ['Cloud sandbox', 'Cert prep', 'Real-world scenarios']
  },
  { 
    icon: Palette,
    title: 'UI/UX Design',
    duration: '30 hours',
    durationDetail: '6 weeks · 5 hrs/week',
    students: 187,
    rating: 4.9,
    level: 'Beginner-friendly',
    color: 'from-teal-500 to-blue-500',
    courses: [
      'Design Fundamentals',
      'User Research Methods',
      'Wireframing & Prototyping',
      'Visual Design Principles',
      'Usability Testing',
      'Design Systems'
    ],
    skills: ['Figma', 'Sketch', 'Adobe XD', 'Prototyping'],
    certificate: 'Google-certified',
    nextStart: 'Starts June 18',
    price: '$449',
    features: ['Portfolio review', 'Design critiques', 'Client project']
  }
]

export default function BootcampPrograms() {
  const [counts, setCounts] = useState(bootcamps.map(() => 0))
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          bootcamps.forEach((bootcamp, index) => {
            let start = 0
            const end = bootcamp.students
            const duration = 2000
            const increment = end / (duration / 16)
            
            const timer = setInterval(() => {
              start += increment
              if (start >= end) {
                setCounts(prev => {
                  const newCounts = [...prev]
                  newCounts[index] = end
                  return newCounts
                })
                clearInterval(timer)
              } else {
                setCounts(prev => {
                  const newCounts = [...prev]
                  newCounts[index] = Math.floor(start)
                  return newCounts
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
      id="bootcamps" 
      ref={sectionRef} 
      className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-br from-gray-50 to-white"
    >
      {/* Clean background with subtle pattern */}
      <div className="absolute inset-0 opacity-[0.02]" 
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #2563eb 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Soft gradient orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl" />
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Minimal badge */}
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4" />
            Intensive Programs
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Professional{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Bootcamps
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Accelerate your career with our intensive, mentor-led programs designed to make you job-ready
          </p>
        </div>
        
        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-12">
          {[
            { label: 'Programs', value: '4', icon: BookOpen },
            { label: 'Graduates', value: '675+', icon: Users },
            { label: 'Placement Rate', value: '92%', icon: Target },
            { label: 'Avg Salary Boost', value: '$25k', icon: TrendingUp }
          ].map((metric, index) => {
            const Icon = metric.icon
            return (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
                <div className="flex items-center justify-center gap-1 text-xs text-gray-500">
                  <Icon className="w-3 h-3" />
                  {metric.label}
                </div>
              </div>
            )
          })}
        </div>
        
        {/* Bootcamps grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {bootcamps.map((bootcamp, index) => {
            const Icon = bootcamp.icon
            const isHovered = hoveredIndex === index
            const isExpanded = expandedIndex === index
            
            return (
              <div
                key={index}
                className="group relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Card */}
                <div className="relative bg-white border border-gray-200 rounded-2xl p-6 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300">
                  {/* Popular badge */}
                  {index === 0 && (
                    <div className="absolute -top-3 -right-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-xs font-medium px-3 py-1.5 rounded-full shadow-lg z-10">
                      Most Popular
                    </div>
                  )}
                  
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    {/* Icon */}
                    <div className={`w-12 h-12 bg-gradient-to-br ${bootcamp.color} rounded-xl flex items-center justify-center shadow-md`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    
                    {/* Rating */}
                    <div className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded-lg">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs font-semibold text-gray-900">{bootcamp.rating}</span>
                    </div>
                  </div>
                  
                  {/* Title and meta */}
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{bootcamp.title}</h3>
                    
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center gap-1 text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-md">
                        <Clock className="w-3 h-3" />
                        {bootcamp.duration}
                      </div>
                      <div className="text-xs text-gray-400">
                        {bootcamp.durationDetail}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-md">
                        {bootcamp.level}
                      </span>
                      <span className="text-xs text-gray-500 flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        {counts[index]} enrolled
                      </span>
                    </div>
                  </div>
                  
                  {/* Price and start date */}
                  <div className="bg-gray-50 rounded-xl p-3 mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-gray-500">Program fee</span>
                      <span className="text-xl font-bold text-gray-900">{bootcamp.price}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-600">
                      <Calendar className="w-3 h-3 text-blue-600" />
                      <span>{bootcamp.nextStart}</span>
                    </div>
                  </div>
                  
                  {/* Key features */}
                  <div className="mb-3">
                    <div className="flex flex-wrap gap-1.5">
                      {bootcamp.features.map((feature, i) => (
                        <span 
                          key={i}
                          className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-md"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Skills */}
                  <div className="mb-3">
                    <div className="flex flex-wrap gap-1.5">
                      {bootcamp.skills.map((skill, i) => (
                        <span 
                          key={i}
                          className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Certificate */}
                  <div className="flex items-center gap-1 mb-4 text-xs text-gray-500">
                    <Shield className="w-3 h-3" />
                    {bootcamp.certificate}
                  </div>
                  
                  {/* CTA */}
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <button 
                      onClick={() => setExpandedIndex(isExpanded ? null : index)}
                      className="text-xs text-gray-500 hover:text-gray-700 transition-colors flex items-center gap-1"
                    >
                      <BookOpen className="w-3 h-3" />
                      Curriculum
                    </button>
                    <button className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors flex items-center gap-1">
                      Enroll
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                
                {/* Expanded curriculum */}
                {isExpanded && (
                  <div className="absolute left-0 right-0 mt-2 p-4 bg-white border border-gray-200 rounded-xl shadow-xl z-20">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-sm font-semibold text-gray-900">Curriculum</h4>
                      <button 
                        onClick={() => setExpandedIndex(null)}
                        className="text-xs text-gray-400 hover:text-gray-600"
                      >
                        Close
                      </button>
                    </div>
                    <div className="space-y-2 max-h-60 overflow-y-auto">
                      {bootcamp.courses.map((course, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs">
                          <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">{course}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
        
        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <button className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-full font-medium hover:shadow-xl hover:shadow-blue-200/50 transition-all">
            <span>Download Program Guide</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="text-sm text-gray-400 mt-4">
            Next cohort starts June 15 · Limited to 25 students per program
          </p>
        </div>

        {/* Decorative element */}
        <div className="mt-20 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      </div>
    </section>
  )
}