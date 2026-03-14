"use client";

import { useState } from 'react'
import { 
  Code, GraduationCap, Search, MessageSquare, Check, X,
  Clock, Users, Award, Calendar, Laptop, BookOpen,
  PlayCircle, ChevronDown, ExternalLink, Star,
  Briefcase, Target, Zap, Globe, Mail, Phone,
  FileText, Video, Coffee, Brain, Rocket,
  GitBranch, Terminal, Database, Layout, Server,
  Layers, Cpu, Gauge, Shield, Users2, Workflow,
  FolderCode, TestTube, Cloud, Palette, Figma,
  TrendingUp, DollarSign, Home, Smartphone,
  ShoppingCart, Newspaper, Youtube, Camera,
  Music, Gamepad, Plane, Car, Heart, Printer,
  Building2, Map, Sun, Moon, Activity, QrCode,
  Wallet, Trophy, Gift, Truck, Dog, Leaf, Bike, Ticket, GlassWater, Shirt, Watch,
  Bot, Network, BarChart3, LineChart, PieChart, Box, Binary, Cpu as CpuIcon,
  Lock, Share2, Instagram, Facebook, Twitter, Linkedin, Youtube as YoutubeIcon,
  Sparkles, Megaphone, PenTool, BarChart, LineChart as LineChartIcon,
  PieChart as PieChartIcon, Settings, Globe as GlobeIcon, Download,
  Upload, Copy, Trash2, Edit, Filter, RefreshCw, Eye, EyeOff,
  ChevronUp, ChevronLeft, ChevronRight, Menu, X as XIcon,
  ImageIcon, Lightbulb, Target as TargetIcon, Eye as EyeIcon, Heart as HeartIcon,
  Shield as ShieldIcon, Users as UsersIcon, Trophy as TrophyIcon,
  ArrowRight, ChevronRight as ChevronRightIcon
} from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Hero Section - No Cover Image */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-br from-gray-900 to-gray-950 text-white">
        <div className="absolute inset-0 opacity-10">
          
        </div>
        
        <div className="absolute top-20 left-10 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-yellow-600 to-gray-100 bg-clip-text text-transparent">
                “Our Legacy: Shaping the Next Era of IT Innovation”
              </span>
            </h1>
            
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Fueled by innovation, Yelocode Systems helps businesses and individuals thrive in the digital era, shaping the future of technology with every solution we deliver.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-yellow-50 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 text-sm font-medium px-4 py-2 rounded-full mb-6">
                <Sparkles className="w-4 h-4" />
                Our Driving Force
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                “Driven by innovation, Yelocode Systems empowers businesses and individuals to thrive in the digital age, Shaping the future of IT with every solution.”
              </h2>
              
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                At Yelocode Systems, we are more than just a tech company, We are innovators, educators, and problem solvers dedicated to building the future with cutting edge technology. By merging creativity with the power of artificial intelligence, we design and develop smart, scalable solutions that empower businesses and enrich lives. Through our training programs, we also empower individuals and teams to unlock their full potential in the ever-evolving world of technology.
              </p>

              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Our expert trainers offer 1-on-1 mentoring and support to ensure you get the most out of your course and reach your goals.
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-cyan-500 rounded-2xl blur-2xl opacity-20" />
              <div className="relative bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Promise</h3>
                <ul className="space-y-4">
                  {[
                    { icon: Lightbulb, text: 'Innovation at every step' },
                    { icon: Shield, text: 'Enterprise-grade solutions' },
                    { icon: Users, text: 'Personalized mentoring' },
                    { icon: Rocket, text: 'Future-ready training' }
                  ].map((item, i) => {
                    const Icon = item.icon
                    return (
                      <li key={i} className="flex items-center gap-3">
                        <div className="p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg">
                          <Icon className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                        </div>
                        <span className="text-gray-700 dark:text-gray-300">{item.text}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {[
              { number: '10+', label: 'Years' },
              { number: '27', label: 'Developers' },
              { number: '376', label: 'Satisfied Customers' },
              { number: '104+', label: 'Completed Projects' },
              { icon: Star, label: 'We strive to work with the best.' }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                {'number' in stat ? (
                  <>
                    <div className="text-4xl md:text-5xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                  </>
                ) : (
                  <>
                    <Star className="w-10 h-10 text-yellow-400 fill-yellow-400 mx-auto mb-2" />
                    <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Port Harcourt Feature */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-yellow-50 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 text-sm font-medium px-4 py-2 rounded-full mb-6">
                <Building2 className="w-4 h-4" />
                Port Harcourt's Leading Tech Partner
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Yelocode Systems | Best Tech Company in Port Harcourt for IT Solutions & Training.
              </h2>
              
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                At Yelocode Systems, we stand as Port Harcourt's top technology partner driving innovation, education, and digital transformation. We go beyond being just a tech firm by combining creativity with artificial intelligence to deliver smart, scalable IT solutions that fuel business growth and improve everyday lives.
              </p>

              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Through our specialized training programs, we equip individuals and teams in Port Harcourt with the practical skills needed to stay ahead in today's fast-paced digital era. With expert trainers providing personalized 1-on-1 mentoring and hands-on support, we ensure every learner maximizes their potential and achieves real success.
              </p>

              <div className="mt-6 flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-700 border-2 border-white dark:border-gray-950" />
                  ))}
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">Join 376+ satisfied clients</span>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-cyan-500 rounded-2xl blur-2xl opacity-20" />
              <img 
                src="pics/200.jpg" 
                alt="Yelocode Systems Innovation" 
                className="relative rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
              Who <span className="text-yellow-600 dark:text-yellow-400">We Are</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-cyan-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity" />
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 h-full border border-gray-200 dark:border-gray-700 hover:border-yellow-300 dark:hover:border-yellow-700 transition-all">
                <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900/30 rounded-2xl flex items-center justify-center mb-6">
                  <TargetIcon className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Mission</h3>
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                  To be a global leader in technology innovation and education, enabling businesses and individuals to thrive in an increasingly digital world.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-cyan-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity" />
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 h-full border border-gray-200 dark:border-gray-700 hover:border-yellow-300 dark:hover:border-yellow-700 transition-all">
                <div className="w-16 h-16 bg-cyan-100 dark:bg-cyan-900/30 rounded-2xl flex items-center justify-center mb-6">
                  <EyeIcon className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Vision</h3>
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                  To design and deliver transformative solutions and training programs that align human potential with the limitless possibilities of technology.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-xl text-gray-700 dark:text-gray-300 italic">
              "Innovate. Educate. Elevate."
            </p>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-yellow-50 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 text-sm font-medium px-4 py-2 rounded-full mb-4">
              <HeartIcon className="w-4 h-4" />
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
                <div className="inline-flex items-center gap-2 bg-yellow-50 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 text-sm font-medium px-4 py-2 rounded-full mb-4">
                  <Lightbulb className="w-4 h-4" />
                  Principle 1
                </div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Innovation First</h3>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  We embrace creativity and cutting-edge technology to design future-ready solutions.
                </p>
              </div>
              <div className="order-1 md:order-2">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-cyan-500 rounded-2xl blur-2xl opacity-20" />
                  <img 
                    src="pics/db.jpg" 
                    alt="Innovation First"
                    className="relative rounded-2xl shadow-2xl w-full h-64 object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Principle 2 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-cyan-500 rounded-2xl blur-2xl opacity-20" />
                  <img 
                   src="pics/40606.jpg" 
                    alt="Excellence Always"
                    className="relative rounded-2xl shadow-2xl w-full h-64 object-cover"
                  />
                </div>
              </div>
              <div>
                <div className="inline-flex items-center gap-2 bg-yellow-50 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 text-sm font-medium px-4 py-2 rounded-full mb-4">
                  <Award className="w-4 h-4" />
                  Principle 2
                </div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Excellence Always</h3>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  We uphold the highest standards in everything we build, teach, and deliver.
                </p>
              </div>
            </div>

            {/* Principle 3 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <div className="inline-flex items-center gap-2 bg-yellow-50 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 text-sm font-medium px-4 py-2 rounded-full mb-4">
                  <ShieldIcon className="w-4 h-4" />
                  Principle 3
                </div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Integrity & Trust</h3>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  We operate with transparency and honesty, building long-lasting relationships.
                </p>
              </div>
              <div className="order-1 md:order-2">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-cyan-500 rounded-2xl blur-2xl opacity-20" />
                  <img 
                    src="pics/37243.jpg"  
                    alt="Integrity & Trust"
                    className="relative rounded-2xl shadow-2xl w-full h-64 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Connect with our team for personalized guidance and solutions.
          </h2>
          
          <p className="text-yellow-100 mb-8 max-w-2xl mx-auto text-lg">
            Curious about how Yelocode Systems can help you or your business? Whether you're looking for innovative IT solutions, expert training, or guidance on digital transformation, we're here to support your journey.
          </p>

          <button className="inline-flex items-center gap-2 bg-white text-yellow-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all hover:shadow-xl transform hover:-translate-y-1">
            Get In Touch
            <ArrowRight className="w-5 h-5" />
          </button>
          
        </div>
      </section>
    </div>
  )
}