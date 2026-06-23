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
  Bot, Network, BarChart3, LineChart, PieChart, Box, Binary,
  Lock, Share2, Instagram, Facebook, Twitter, Linkedin,
  Sparkles, Megaphone, PenTool, Settings,
  Download, Upload, Copy, Trash2, Edit, Filter, RefreshCw, Eye, EyeOff,
  ChevronUp, ChevronLeft, ChevronRight, Menu,
  ImageIcon, Lightbulb, ArrowUpRight,
} from 'lucide-react'
import Link from 'next/link'

export default function AboutPage() {
  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Yelocode Systems - Best Tech School in Port Harcourt",
    "description": "Yelocode Systems is the best tech school and IT training center in Port Harcourt, Nigeria offering coding bootcamps, software engineering, cybersecurity, data analytics, and UI/UX design training with job placement.",
    "about": {
      "@type": "EducationalOrganization",
      "name": "Yelocode Systems",
      "url": "https://yelocodesys.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "No. 11 Elekahia",
        "addressLocality": "Port Harcourt",
        "addressRegion": "Rivers State",
        "addressCountry": "NG"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+2349162865693",
        "contactType": "customer service",
        "email": "info@yelocodesys.com"
      }
    }
  };

  return (
    <>
      <div className="min-h-screen bg-white dark:bg-black">
        {/* Hero Section */}
        {/* Hero Section */}
<section className="relative py-24 md:py-32 overflow-hidden text-white">
  {/* Background Image - Fully Visible */}
  <div className="absolute inset-0">
    <img 
      src="pics/ad.jpeg" 
      alt="Yelocode Systems - Best tech school and IT training center in Port Harcourt, Nigeria"
      className="w-full h-full object-cover"
      loading="eager"
    />
    {/* Subtle dark overlay for text readability while keeping image visible */}
    <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
  </div>

  {/* Subtle pattern overlay */}
  <div className="absolute inset-0 opacity-10" aria-hidden="true">
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
        backgroundSize: "40px 40px",
      }}
    />
  </div>

  <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
    <div className="max-w-4xl mx-auto text-center">
      {/* Label */}
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/30 backdrop-blur-md text-sm font-medium mb-8 text-white">
        <Building2 className="w-4 h-4" />
        About Yelocode Systems
      </div>

      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1] text-white">
        Shaping the Next Era of{" "}
        <span className="relative inline-block text-white">
          IT Innovation
          <svg
            className="absolute -bottom-2 left-0 w-full"
            viewBox="0 0 200 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M2 6C44 2.66667 132 0 198 6"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              className="opacity-50"
            />
          </svg>
        </span>
      </h1>
      
      <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
        Fueled by innovation, the{" "}
        <strong className="text-white font-semibold">best tech school in Port Harcourt</strong>{" "}
        helps businesses and individuals thrive in the digital era, shaping the future of technology with every solution we deliver.
      </p>
    </div>
  </div>
</section>

        {/* Mission Statement */}
        <section className="py-20 md:py-24 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-black dark:text-white text-sm font-medium mb-6">
                  {/* <Sparkles className="w-4 h-4" /> */}
                  Our Driving Force
                </div>
                
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black dark:text-white mb-6 leading-[1.2]">
                  Empowering businesses and individuals to thrive in the digital age.
                </h2>
                
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  At Yelocode Systems, we are more than just a tech company. We are innovators, educators, and problem solvers dedicated to building the future with cutting-edge technology at our{" "}
                  <strong className="text-black dark:text-white font-semibold">IT training center in Port Harcourt</strong>.
                </p>

                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Our expert trainers offer 1-on-1 mentoring and support to ensure you get the most out of your course and reach your goals. We provide{" "}
                  <strong className="text-black dark:text-white font-semibold">tech training in Port Harcourt with job placement</strong>{" "}
                  at the most{" "}
                  <strong className="text-black dark:text-white font-semibold">affordable computer training center in PH</strong>.
                </p>
              </div>
              
              <div className="relative">
                <div className="relative bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 p-8">
                  <h3 className="text-2xl font-bold text-black dark:text-white mb-6">Our Promise</h3>
                  <ul className="space-y-5">
                    {[
                      { icon: Lightbulb, text: 'Innovation at every step' },
                      { icon: Shield, text: 'Enterprise-grade solutions' },
                      { icon: Users, text: 'Personalized mentoring' },
                      { icon: Rocket, text: 'Future-ready training' }
                    ].map((item, i) => {
                      const Icon = item.icon
                      return (
                        <li key={i} className="flex items-center gap-4 group">
                          <div className="p-2.5 bg-black dark:bg-white group-hover:scale-110 transition-transform duration-300">
                            <Icon className="w-5 h-5 text-white dark:text-black" />
                          </div>
                          <span className="text-gray-700 dark:text-gray-300 font-medium">{item.text}</span>
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
        <section className="py-16 bg-gray-50 dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
              {[
                { number: '10+', label: 'Years Excellence' },
                { number: '27', label: 'Expert Developers' },
                { number: '376', label: 'Satisfied Clients' },
                { number: '104+', label: 'Completed Projects' },
                { icon: Star, label: 'Top Rated in PH' }
              ].map((stat, i) => (
                <div key={i} className="text-center group">
                  {'number' in stat ? (
                    <>
                      <div className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                        {stat.number}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
                    </>
                  ) : (
                    <>
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-black dark:bg-white mb-3 group-hover:scale-110 transition-transform duration-300">
                        <Star className="w-8 h-8 text-white dark:text-black fill-white dark:fill-black" />
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Port Harcourt Feature */}
        <section className="py-20 md:py-24 bg-white dark:bg-black">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-black dark:text-white text-sm font-medium mb-6">
                  <Building2 className="w-4 h-4" />
                  Based in Port Harcourt
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-6">
                  Port Harcourt's Leading Tech Partner for IT Solutions & Training.
                </h2>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  As the{" "}
                  <strong className="text-black dark:text-white font-semibold">best tech school in Port Harcourt</strong>
                  , we drive innovation, education, and digital transformation. We combine creativity with artificial intelligence to deliver smart, scalable IT solutions.
                </p>

                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  Through our{" "}
                  <strong className="text-black dark:text-white font-semibold">coding bootcamp in Port Harcourt</strong>
                  , we equip individuals with practical skills for today's fast-paced digital era.
                </p>

                <div className="flex items-center gap-4">
                  <div className="flex -space-x-2">
                    {[1,2,3,4].map((i) => (
                      <div key={i} className="w-10 h-10 bg-gray-300 dark:bg-gray-700 border-2 border-white dark:border-black flex items-center justify-center text-xs font-bold text-gray-500" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">Join 376+ satisfied clients</span>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src="pics/200.jpg" 
                  alt="Yelocode Systems - IT training center and coding bootcamp in Port Harcourt"
                  className="relative w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 md:py-24 bg-gray-50 dark:bg-gray-950 border-y border-gray-200 dark:border-gray-800">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-black dark:text-white text-sm font-medium mb-6">
                Who We Are
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black dark:text-white">
                Our Purpose
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Mission */}
              <div className="relative group">
                <div className="relative bg-white dark:bg-black p-8 h-full border border-gray-200 dark:border-gray-800 group-hover:border-black dark:group-hover:border-white transition-all duration-500">
                  <div className="w-14 h-14 bg-black dark:bg-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-7 h-7 text-white dark:text-black" />
                  </div>
                  <h3 className="text-2xl font-bold text-black dark:text-white mb-4">Mission</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    To be a global leader in technology innovation and education, enabling businesses and individuals to thrive in an increasingly digital world.
                  </p>
                </div>
              </div>

              {/* Vision */}
              <div className="relative group">
                <div className="relative bg-white dark:bg-black p-8 h-full border border-gray-200 dark:border-gray-800 group-hover:border-black dark:group-hover:border-white transition-all duration-500">
                  <div className="w-14 h-14 bg-black dark:bg-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Eye className="w-7 h-7 text-white dark:text-black" />
                  </div>
                  <h3 className="text-2xl font-bold text-black dark:text-white mb-4">Vision</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    To design and deliver transformative solutions and training programs that align human potential with the limitless possibilities of technology.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-xl text-gray-500 dark:text-gray-400 italic font-light">
                "Innovate. Educate. Elevate."
              </p>
            </div>
          </div>
        </section>

        {/* Core Principles */}
        <section className="py-20 md:py-24 bg-white dark:bg-black">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-black dark:text-white text-sm font-medium mb-6">
                <Heart className="w-4 h-4" />
                Core Principles
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black dark:text-white">
                Empowerment Through{" "}
                <span className="relative inline-block">
                  Knowledge
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    viewBox="0 0 200 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M2 6C44 2.66667 132 0 198 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      className="text-gray-300 dark:text-gray-700"
                    />
                  </svg>
                </span>
              </h2>
            </div>

            <div className="space-y-20 md:space-y-24">
              {[
                {
                  icon: Lightbulb,
                  num: "01",
                  title: "Innovation First",
                  description: "We embrace creativity and cutting-edge technology to design future-ready solutions at our computer training school in Port Harcourt.",
                  image: "pics/db.jpg",
                  alt: "Innovation at Yelocode Systems - best tech school in Port Harcourt"
                },
                {
                  icon: Award,
                  num: "02",
                  title: "Excellence Always",
                  description: "We uphold the highest standards in everything we build, teach, and deliver at our IT training center in Port Harcourt.",
                  image: "pics/40606.jpg",
                  alt: "Excellence at Yelocode Systems coding bootcamp in Port Harcourt"
                },
                {
                  icon: Shield,
                  num: "03",
                  title: "Integrity & Trust",
                  description: "We operate with transparency and honesty, building long-lasting relationships with students across Rivers State, Nigeria.",
                  image: "pics/37243.jpg",
                  alt: "Integrity at Yelocode Systems affordable computer training center in PH"
                },
              ].map((principle, index) => {
                const Icon = principle.icon
                const isEven = index % 2 === 1
                return (
                  <div key={index} className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center group">
                    {/* Image */}
                    <div className={`${isEven ? "md:order-2" : "md:order-1"} relative`}>
                      <div className="relative overflow-hidden">
                        <img 
                          src={principle.image} 
                          alt={principle.alt}
                          className="w-full h-72 md:h-80 object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                          loading="lazy"
                        />
                        <div className="absolute bottom-6 left-6 text-7xl font-bold text-white/60 group-hover:text-white transition-colors duration-500">
                          {principle.num}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className={isEven ? "md:order-1" : "md:order-2"}>
                      <div className="text-sm text-gray-400 dark:text-gray-600 mb-3 font-mono">
                        Principle {principle.num}
                      </div>
                      <div className="w-14 h-14 bg-black dark:bg-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-7 h-7 text-white dark:text-black" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-black dark:text-white mb-4 group-hover:translate-x-2 transition-transform duration-300">
                        {principle.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* SEO Keywords */}
        <div className="bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 py-8">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
            <p className="text-xs text-gray-400 dark:text-gray-600 max-w-4xl mx-auto leading-relaxed">
              <strong className="text-gray-500 dark:text-gray-500 font-medium">About Yelocode Systems:</strong>{" "}
              Best Tech School in Port Harcourt • Coding Bootcamp Port Harcourt • IT Training Center in Port Harcourt • 
              Computer Training School in Port Harcourt • Software Engineering Academy in Port Harcourt • 
              Cybersecurity Training in Port Harcourt • Data Analytics Training in Port Harcourt • 
              UI/UX Design Training in Port Harcourt • Tech Training with Job Placement • 
              Affordable Computer Training Centers in PH
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <section className="py-20 bg-black dark:bg-white text-white dark:text-black">
          <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-[1.2]">
              Ready to start your tech journey?
            </h2>
            
            <p className="text-gray-400 dark:text-gray-600 mb-10 max-w-2xl mx-auto text-lg">
              Connect with our team at the{" "}
              <strong className="text-white dark:text-black">best tech school in Port Harcourt</strong>{" "}
              for personalized guidance and training solutions.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white dark:bg-black text-black dark:text-white px-8 py-4 font-semibold hover:bg-gray-200 dark:hover:bg-gray-900 transition-all duration-300 group"
              >
                <span>Get In Touch</span>
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
              <Link
                href="/education"
                className="inline-flex items-center gap-2 border-2 border-white dark:border-black text-white dark:text-black px-8 py-4 font-semibold hover:bg-white/10 dark:hover:bg-black/10 transition-all duration-300"
              >
                Explore Programs
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  )
}