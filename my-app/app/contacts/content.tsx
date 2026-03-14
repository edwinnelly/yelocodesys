"use client";

import { useState } from 'react'
import { 
  MapPin, Phone, Mail, Clock, Send, Check, X,
  Users, Award, Star, Briefcase, Calendar, MessageSquare,
  ChevronDown, ChevronRight, Globe, Facebook, Twitter, Linkedin, Instagram,
  Github, Heart, Target, Zap, Rocket, BookOpen, GraduationCap,
  Headphones, HelpCircle, MessageCircle, Video, UserPlus,
  ArrowRight, Copy, CheckCheck, AlertCircle
} from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [copied, setCopied] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState('message')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
    console.log('Form submitted:', formData)
    setTimeout(() => {
      setFormSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
    }, 3000)
  }

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text)
    setCopied(type)
    setTimeout(() => setCopied(null), 2000)
  }

  const contactMethods = [
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Round-the-clock assistance for urgent inquiries',
      action: 'Chat Now',
      link: '#',
      color: 'from-yellow-600 to-yellow-400'
    },
    {
      icon: Video,
      title: 'Virtual Tour',
      description: 'Schedule a video tour of our campus',
      action: 'Schedule',
      link: '#',
      color: 'from-purple-600 to-pink-600'
    },
    {
      icon: UserPlus,
      title: 'Meet an Advisor',
      description: 'One-on-one career counseling session',
      action: 'Book Now',
      link: '#',
      color: 'from-green-600 to-emerald-600'
    },
    {
      icon: HelpCircle,
      title: 'FAQ',
      description: 'Find quick answers to common questions',
      action: 'View FAQs',
      link: '#faq',
      color: 'from-orange-600 to-amber-600'
    }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      
      {/* HERO SECTION - With Cover Image */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2070&q=80" 
            alt="Team collaboration in modern office" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-yellow-500/20 backdrop-blur-sm text-yellow-400 text-sm font-medium px-4 py-2 rounded-full mb-6 border border-yellow-500/30">
              <MessageCircle className="w-4 h-4" />
              Let's Talk
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Get in{' '}
              <span className="text-yellow-400">Touch</span>
            </h1>
            
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Have questions? We'd love to hear from you. Our team is always ready to help.
            </p>
          </div>
        </div>
      </section>

      {/* QUICK CONTACT METHODS */}
      <section className="py-12 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactMethods.map((method, index) => {
              const Icon = method.icon
              return (
                <a
                  key={index}
                  href={method.link}
                  className="group relative bg-gray-50 dark:bg-gray-900 rounded-xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-800 overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${method.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  <div className="relative">
                    <div className={`w-12 h-12 bg-gradient-to-r ${method.color} rounded-lg flex items-center justify-center mb-4`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{method.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{method.description}</p>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-yellow-600 dark:text-yellow-400 group-hover:gap-2 transition-all">
                      {method.action}
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* MAIN CONTACT SECTION - Split Layout */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Left Column - Contact Info Cards */}
            <div className="space-y-6">
              <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Visit Us</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">No11 Elekahia, Port Harcourt, Rivers State, Nigeria</p>
                      <button 
                        onClick={() => handleCopy('No11 Elekahia, Port Harcourt, Rivers State, Nigeria', 'address')}
                        className="text-xs text-yellow-600 dark:text-yellow-400 hover:text-yellow-700 flex items-center gap-1"
                      >
                        {copied === 'address' ? (
                          <>
                            <CheckCheck className="w-3 h-3" />
                            Copied!
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            Copy address
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Call Us</h4>
                      <div className="space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600 dark:text-gray-400 text-sm">+234 (0) 9162865693</span>
                          <button 
                            onClick={() => handleCopy('+2349162865693', 'phone1')}
                            className="text-xs text-yellow-600 dark:text-yellow-400 hover:text-yellow-700"
                          >
                            {copied === 'phone1' ? 'Copied!' : 'Copy'}
                          </button>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600 dark:text-gray-400 text-sm">+234 (0) 8036255713</span>
                          <button 
                            onClick={() => handleCopy('+2348036255713', 'phone2')}
                            className="text-xs text-yellow-600 dark:text-yellow-400 hover:text-yellow-700"
                          >
                            {copied === 'phone2' ? 'Copied!' : 'Copy'}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Email Us</h4>
                      <div className="space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600 dark:text-gray-400 text-sm">info@yelocodesys.com</span>
                          <button 
                            onClick={() => handleCopy('info@yelocodesys.com', 'email1')}
                            className="text-xs text-yellow-600 dark:text-yellow-400 hover:text-yellow-700"
                          >
                            {copied === 'email1' ? 'Copied!' : 'Copy'}
                          </button>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600 dark:text-gray-400 text-sm">admissions@yelocodesys.com</span>
                          <button 
                            onClick={() => handleCopy('admissions@yelocodesys.com', 'email2')}
                            className="text-xs text-yellow-600 dark:text-yellow-400 hover:text-yellow-700"
                          >
                            {copied === 'email2' ? 'Copied!' : 'Copy'}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Office Hours</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Monday - Friday: 9am - 6pm</p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Saturday: 10am - 4pm</p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Sunday: Closed</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Follow Us</h4>
                  <div className="flex gap-3">
                    {[
                      { icon: Facebook, href: '#', color: 'hover:bg-yellow-600' },
                      { icon: Twitter, href: '#', color: 'hover:bg-sky-500' },
                      { icon: Linkedin, href: '#', color: 'hover:bg-yellow-700' },
                      { icon: Instagram, href: '#', color: 'hover:bg-pink-600' },
                      { icon: Github, href: '#', color: 'hover:bg-gray-800' }
                    ].map((social, i) => {
                      const Icon = social.icon
                      return (
                        <a
                          key={i}
                          href={social.href}
                          className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center hover:scale-110 transition-all duration-300 text-gray-600 dark:text-gray-400 hover:text-white hover:bg-yellow-600"
                        >
                          <Icon className="w-5 h-5" />
                        </a>
                      )
                    })}
                  </div>
                </div>
              </div>

              {/* Map Preview */}
              <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-4 border border-gray-200 dark:border-gray-800">
                <div className="aspect-video rounded-xl overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.485123456789!2d7.123456!3d4.789012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwNDcnMjAuNCJOIDfCsDA3JzI0LjUiRQ!5e0!3m2!1sen!2sng!4v1234567890!5m2!1sen!2sng"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    className="rounded-xl"
                  />
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
              {/* Form Tabs */}
              <div className="flex gap-2 mb-6 border-b border-gray-200 dark:border-gray-800 pb-4">
                <button
                  onClick={() => setActiveTab('message')}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    activeTab === 'message'
                      ? 'bg-yellow-600 text-white'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  Send Message
                </button>
                <button
                  onClick={() => setActiveTab('callback')}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    activeTab === 'callback'
                      ? 'bg-yellow-600 text-white'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  Request Callback
                </button>
              </div>

              {formSubmitted ? (
                <div className="bg-green-100 dark:bg-green-900/30 border border-green-500 text-green-700 dark:text-green-400 rounded-xl p-8 text-center">
                  <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-gray-600 dark:text-gray-400">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {activeTab === 'message' ? (
                    <>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
                          placeholder="John Doe"
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Email <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
                            placeholder="john@example.com"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Phone
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
                            placeholder="+234 800 000 0000"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Subject <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
                        >
                          <option value="">Select a subject</option>
                          <option value="enrollment">Enrollment Inquiry</option>
                          <option value="program">Program Information</option>
                          <option value="payment">Payment Options</option>
                          <option value="visit">Schedule Visit</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Message <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
                          placeholder="How can we help you?"
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
                          placeholder="John Doe"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
                          placeholder="+234 800 000 0000"
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Preferred Date
                          </label>
                          <input
                            type="date"
                            name="date"
                            className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Preferred Time
                          </label>
                          <select
                            name="time"
                            className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
                          >
                            <option value="">Select time</option>
                            <option value="morning">Morning (9am - 12pm)</option>
                            <option value="afternoon">Afternoon (1pm - 4pm)</option>
                            <option value="evening">Evening (5pm - 7pm)</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Reason for Callback
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={4}
                          className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
                          placeholder="Briefly tell us what you'd like to discuss..."
                        />
                      </div>
                    </>
                  )}

                  <button
                    type="submit"
                    className="w-full px-6 py-4 bg-gradient-to-r from-yellow-600 to-yellow-400 text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-yellow-500/25 transition-all flex items-center justify-center gap-2 group"
                  >
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    {activeTab === 'message' ? 'Send Message' : 'Request Callback'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ PREVIEW */}
      <section id="faq" className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 text-sm font-medium px-4 py-2 rounded-full mb-6">
              <HelpCircle className="w-4 h-4" />
              Quick Answers
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Frequently Asked{' '}
              <span className="text-yellow-600 dark:text-yellow-400">Questions</span>
            </h2>
          </div>

          <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
            <div className="space-y-4">
              {[
                {
                  q: 'How do I enroll in a bootcamp?',
                  a: 'Visit our Programs page, select your desired course, and click "Enroll Now". Our admissions team will contact you within 24 hours.'
                },
                {
                  q: 'What payment options are available?',
                  a: 'We offer flexible payment plans including installment options and discounts for full upfront payment.'
                },
                {
                  q: 'Can I visit your campus?',
                  a: 'Yes! We welcome visits. Please schedule an appointment through our contact form or call us.'
                }
              ].map((item, i) => (
                <div key={i} className="border-b border-gray-200 dark:border-gray-700 last:border-0 pb-4 last:pb-0">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{item.q}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{item.a}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-6">
              <a 
                href="/faq" 
                className="inline-flex items-center gap-2 text-sm font-medium text-yellow-600 dark:text-yellow-400 hover:text-yellow-700 transition-colors"
              >
                View all FAQs
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-16 bg-gradient-to-r from-yellow-600 to-yellow-400 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl text-yellow-100 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have transformed their careers with Yelocode Systems.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="/coursecatalog" 
              className="px-8 py-4 bg-white text-yellow-600 font-semibold rounded-lg hover:bg-gray-100 transition-all hover:shadow-xl inline-flex items-center gap-2"
            >
              <GraduationCap className="w-5 h-5" />
              Browse Programs
            </a>
            <a 
              href="/contacts" 
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all inline-flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}