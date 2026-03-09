'use client'
import { 
  Github, Linkedin, Twitter, Mail, MapPin, Phone, 
  ArrowRight, Heart, Globe, Facebook, Instagram,
  Send, ChevronDown
} from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-gray-950 text-white pt-20 pb-8 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      {/* Gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        {/* Main Footer Content - Multi-column layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12 mb-16">
          
          {/* Column 1: About & Social */}
          <div className="col-span-2 md:col-span-1">
            <div className="mb-6">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                Yelocode
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Empowering the next generation of tech leaders through innovative learning.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-2 mb-6">
              {[
                { icon: Twitter, href: '#', label: 'Twitter' },
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: Github, href: '#', label: 'GitHub' },
                { icon: Facebook, href: '#', label: 'Facebook' },
                { icon: Instagram, href: '#', label: 'Instagram' }
              ].map((social, i) => {
                const Icon = social.icon
                return (
                  <a
                    key={i}
                    href={social.href}
                    className="w-8 h-8 bg-gray-800/50 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-all hover:scale-110 group"
                    aria-label={social.label}
                  >
                    <Icon className="w-4 h-4 text-gray-400 group-hover:text-white" />
                  </a>
                )
              })}
            </div>

            {/* Contact Info */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin className="w-4 h-4 text-gray-600" />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Mail className="w-4 h-4 text-gray-600" />
                <span>hello@yelocode.com</span>
              </div>
            </div>
          </div>

          {/* Column 2: About Us Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
              About Us
            </h4>
            <ul className="space-y-2">
              {[
                'About Us',
                'Why Yelocode?',
                'Blog',
                'In the News',
                'Jobs at Udacity',
                'Become a Mentor',
                'Partner with Udacity'
              ].map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
              Resources
            </h4>
            <ul className="space-y-2">
              {[
                'Catalog',
                'Career Outcomes',
                'Help and FAQ',
                'Scholarships',
                'Resource Center'
              ].map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Schools */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
              Yelocode Schools
            </h4>
            <ul className="space-y-2">
              {[
                'School of Animation and Game Development',
                'School of Artificial Intelligence',
                'School of Autonomous Systems',
                'School of Business',
                'Career Resources',
                'School of Cloud Computing',
                'School of Cybersecurity',
                'School of Data Science',
                'School of DevOps',
                'School of Executive Leadership',
                'School of Product Management',
                'School of Programming and Development'
              ].map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors line-clamp-1">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Featured Programs */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
              Featured Programs
            </h4>
            <ul className="space-y-2">
              {[
                'Business Analytics',
                'SQL',
                'AWS Cloud Architect',
                'Data Analyst',
                'Intro to Programming',
                'Digital Marketing',
                'Self Driving Car Engineer'
              ].map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            {/* Only at Yelocode Section */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
                Only at Yelocode
              </h4>
              <ul className="space-y-2">
                {[
                  'Artificial Intelligence',
                  'Deep Learning',
                  'Digital Marketing',
                  'Flying Car and Autonomous Flight Engineer',
                  'Intro to Self-Driving Cars',
                  'Machine Learning Engineer'
                ].map((item, i) => (
                  <li key={i}>
                    <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-800 pt-12 pb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="max-w-md">
              <h5 className="text-lg font-semibold text-white mb-2">
                Stay in the loop
              </h5>
              <p className="text-sm text-gray-400">
                Get the latest updates on new courses, events, and tech insights.
              </p>
            </div>
            
            <div className="flex-1 max-w-md">
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                  <Mail className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                </div>
                <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all flex items-center gap-2">
                  <Send className="w-4 h-4" />
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                By subscribing, you agree to our Privacy Policy and consent to receive updates.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="text-sm text-gray-400">
              © {currentYear} Yelocode. All rights reserved.
            </div>
            
            <div className="flex items-center gap-6">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item, i) => (
                <a 
                  key={i}
                  href="#" 
                  className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
            
            <div className="flex items-center gap-1 text-xs text-gray-500">
              <span>Made with</span>
              <Heart className="w-3 h-3 text-red-500 fill-red-500" />
              <span>for learners</span>
            </div>
          </div>
        </div>

        {/* Back to top button */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="absolute right-8 bottom-8 w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors group"
          aria-label="Back to top"
        >
          <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-white -rotate-90" />
        </button>
      </div>
    </footer>
  )
}