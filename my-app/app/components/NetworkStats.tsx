'use client'

import { useEffect, useRef, useState } from 'react'
import { Globe, Server, Database, Activity, Zap, TrendingUp } from 'lucide-react'

const stats = [
  { 
    icon: Globe, 
    label: 'Global Regions', 
    value: 12, 
    suffix: '+', 
    description: 'Across 6 continents',
    trend: '+2 this year',
    color: 'from-blue-500 to-cyan-500'
  },
  { 
    icon: Server, 
    label: 'Active Servers', 
    value: 1500, 
    suffix: '+', 
    description: '100% SSD storage',
    trend: '+200 last month',
    color: 'from-purple-500 to-pink-500'
  },
  { 
    icon: Database, 
    label: 'Data Processed', 
    value: 50, 
    suffix: 'PB', 
    description: 'And growing daily',
    trend: '+5.2 PB this week',
    color: 'from-orange-500 to-red-500'
  },
  { 
    icon: Activity, 
    label: 'Daily Requests', 
    value: 1.2, 
    suffix: 'B', 
    description: 'Peak: 2.1B',
    trend: '+15% vs last month',
    color: 'from-green-500 to-emerald-500'
  }
]

export default function NetworkStats() {
  const [counts, setCounts] = useState(stats.map(() => 0))
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          stats.forEach((stat, index) => {
            let start = 0
            const end = stat.value
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
      id="network" 
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
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Live Network Status
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Global{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Network Infrastructure
            </span>
          </h2>
          
          <p className="text-lg text-gray-300">
            Our distributed network ensures lightning-fast performance anywhere in the world 
            with 99.99% uptime SLA.
          </p>
        </div>
        
        {/* Stats grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            const isHovered = hoveredIndex === index
            
            return (
              <div
                key={index}
                className="group relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Glow effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${stat.color} rounded-2xl opacity-0 group-hover:opacity-30 blur transition-all duration-500`} />
                
                {/* Card */}
                <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:bg-gray-800/80 transition-all duration-300">
                  {/* Icon with gradient */}
                  <div className={`relative mb-6 w-16 h-16 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                    
                    {/* Small status indicator */}
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 border-2 border-gray-900 rounded-full" />
                  </div>
                  
                  {/* Stats */}
                  <div className="mb-3">
                    <div className="text-4xl font-bold text-white mb-1">
                      {counts[index]}{stat.suffix}
                    </div>
                    <div className="text-sm font-medium text-gray-300">
                      {stat.label}
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-sm text-gray-400 mb-4">
                    {stat.description}
                  </p>
                  
                  {/* Trend indicator */}
                  <div className="flex items-center gap-1 text-xs">
                    <TrendingUp className="w-3 h-3 text-green-400" />
                    <span className="text-green-400">{stat.trend}</span>
                  </div>
                  
                  {/* Progress bar (appears on hover) */}
                  <div className={`absolute bottom-6 left-8 right-8 h-1 bg-gray-700 rounded-full overflow-hidden transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                    <div 
                      className={`h-full bg-gradient-to-r ${stat.color} rounded-full transition-all duration-1000`}
                      style={{ width: `${(counts[index] / (stat.value * 1.2)) * 100}%` }}
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
            { label: 'Average Latency', value: '23ms' },
            { label: 'Global POPs', value: '47' },
            { label: 'Bandwidth', value: '100 Tbps' },
            { label: 'DDoS Protection', value: 'Always On' }
          ].map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-sm text-gray-400 mb-1">{metric.label}</div>
              <div className="text-lg font-semibold text-white">{metric.value}</div>
            </div>
          ))}
        </div>
        
        {/* Network visualization */}
        <div className="relative mt-20 h-32 max-w-4xl mx-auto">
          <svg className="w-full h-full" viewBox="0 0 800 100" preserveAspectRatio="none">
            {/* Connection lines */}
            <line x1="100" y1="50" x2="300" y2="50" stroke="#3B82F6" strokeWidth="2" strokeDasharray="4 4" className="opacity-30" />
            <line x1="300" y1="50" x2="500" y2="50" stroke="#3B82F6" strokeWidth="2" strokeDasharray="4 4" className="opacity-30" />
            <line x1="500" y1="50" x2="700" y2="50" stroke="#3B82F6" strokeWidth="2" strokeDasharray="4 4" className="opacity-30" />
            
            {/* Nodes */}
            <circle cx="100" cy="50" r="8" fill="#3B82F6" className="animate-pulse" />
            <circle cx="300" cy="50" r="8" fill="#8B5CF6" className="animate-pulse animation-delay-1000" />
            <circle cx="500" cy="50" r="8" fill="#EC4899" className="animate-pulse animation-delay-2000" />
            <circle cx="700" cy="50" r="8" fill="#10B981" className="animate-pulse animation-delay-3000" />
            
            {/* Data pulses */}
            <circle cx="100" cy="50" r="12" fill="none" stroke="#3B82F6" strokeWidth="2" className="animate-ping" />
          </svg>
        </div>
      </div>
    </section>
  )
}