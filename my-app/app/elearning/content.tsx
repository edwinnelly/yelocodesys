"use client";

import { useState } from 'react'
import { GraduationCap, Mail, Send, Clock, Bell } from 'lucide-react'

export default function ELearningComingSoon() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail('')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 flex items-center justify-center px-6">
      
      {/* Simple Card */}
      <div className="max-w-2xl w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12 text-center">
        
        {/* Logo */}
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl mb-8 mx-auto">
          <GraduationCap className="w-10 h-10 text-white" />
        </div>

        {/* Coming Soon Badge */}
        <div className="inline-flex items-center gap-2 bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
          <Clock className="w-4 h-4" />
          Coming Soon
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Yelocode E-Learning
        </h1>

        {/* Description */}
        <p className="text-lg text-gray-300 mb-8">
          We're building the future of tech education in Port Harcourt. 
          Be the first to know when we launch.
        </p>

        {/* Email Signup */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex items-center gap-2">
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-400 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all flex items-center gap-2"
              >
                <Send className="w-4 h-4" />
                Notify Me
              </button>
            </div>
          </form>
        ) : (
          <div className="bg-green-500/20 border border-green-500 rounded-xl p-4 max-w-md mx-auto">
            <p className="text-green-400">Thanks! We'll notify you at {email}</p>
          </div>
        )}

        {/* Simple Stats */}
        <div className="flex items-center justify-center gap-6 mt-8 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <Bell className="w-4 h-4" />
            <span>500+ waiting</span>
          </div>
          <div className="w-px h-4 bg-gray-700" />
          <div>📍 Port Harcourt</div>
        </div>

        {/* Contact */}
        <div className="mt-8 pt-8 border-t border-white/10 text-sm text-gray-400">
          <p>elearning@yelocode.com | 09162865693</p>
          <p className="mt-2">No. 11 Elekahia, Port Harcourt</p>
        </div>
      </div>
    </div>
  )
}