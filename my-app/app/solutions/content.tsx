"use client";

import { useState } from 'react'
import { 
  Globe, Smartphone, Cloud, Shield, Users, Code, BarChart3, Cpu,
  Check, ArrowRight, Star, Briefcase, Target, Zap, Clock,
  ChevronRight, Mail, Phone, MapPin, GraduationCap, MessageCircle,
  Calendar, Award, TrendingUp, Database, Server, Lock, Palette,
  Github, Twitter, Linkedin, Facebook, Instagram, Sparkles,
  Rocket, Layers, Gauge, Network, Workflow, Eye, Settings
} from 'lucide-react'
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: {
    default: "Yelocode Systems | Software Development & Tech Solutions in Port Harcourt",
    template: "%s | Yelocode Systems",
  },

  description:
    "Yelocode Systems delivers custom software and technology solutions in Port Harcourt, Nigeria. Specializing in web development, mobile apps, cloud solutions, cybersecurity, and DevOps. Transform your business with expert consulting at No. 11 Elekahia.",

  keywords: [
    // Brand
    "Yelocode Systems",
    "yelocodesys.com",
    
    // Services
    "software development Port Harcourt",
    "web development Nigeria",
    "mobile app development",
    "cloud solutions",
    "cybersecurity services",
    "IT consulting Port Harcourt",
    "DevOps services",
    "custom software Nigeria",
    "data analytics",
    "enterprise software",
    "business automation",
    "API integration",
    
    // Location
    "tech company Port Harcourt",
    "software company Nigeria",
    "No. 11 Elekahia",
    "IT services Rivers State",
    
    // Business intent
    "digital transformation Nigeria",
    "software outsourcing",
    "cloud migration services",
    "business technology solutions",
  ],

  authors: [{ name: "Yelocode Systems", url: "https://yelocodesys.com/about" }],
  creator: "Yelocode Systems",
  publisher: "Yelocode Systems",

  metadataBase: new URL("https://yelocodesys.com"),

  openGraph: {
    title: "Yelocode Systems | Software Development & Tech Solutions",
    description:
      "Transform your business with Yelocode Systems' technology solutions. Custom web, mobile, cloud, and cybersecurity services in Port Harcourt, Nigeria.",
    url: "https://yelocodesys.com/solutions",
    siteName: "Yelocode Systems",
    images: [
      {
        url: "/og-solutions.png", // Use a descriptive name
        width: 1200,
        height: 630,
        alt: "Yelocode Systems - Software Development & Tech Solutions in Port Harcourt",
      },
    ],
    locale: "en_NG",
    type: "website",
    // Add these for richer sharing
    phoneNumbers: ["+2349162865693"],
    countryName: "Nigeria",
  },

  twitter: {
    card: "summary_large_image",
    title: "Yelocode Systems | Software & Tech Solutions",
    description:
      "Custom software, web, mobile, cloud, and cybersecurity solutions for businesses in Port Harcourt.",
    images: ["/twitter-solutions.png"], // Could use different image for Twitter
    site: "@yelocode", // If you have Twitter handle
    creator: "@yelocode",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest", // If you have one

  alternates: {
    canonical: "https://yelocodesys.com/solutions",
  },

  // If you have multiple language versions
  // languages: {
  //   'en-NG': 'https://yelocodesys.com/solutions',
  // },
}

export default function TechSolutionsPage() {
  const [activeFilter, setActiveFilter] = useState('all')

  const solutions = [
    {
      id: 1,
      title: 'Custom Web Development',
      description: 'Responsive websites, web applications, and e-commerce platforms tailored to your business needs.',
      longDescription: 'We build high-performance web solutions that engage users and drive conversions. From simple brochure sites to complex web applications.',
      icon: Globe,
      color: 'from-blue-600 to-blue-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      features: ['Responsive Design', 'E-commerce', 'Web Portals', 'CMS'],
      metrics: { projects: '45+', clients: '30+' }
    },
    {
      id: 2,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      longDescription: 'Create engaging mobile experiences that your customers will love. We build apps that are fast, intuitive, and scalable.',
      icon: Smartphone,
      color: 'from-blue-600 to-blue-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      features: ['iOS Apps', 'Android Apps', 'Cross-Platform', 'App Store'],
      metrics: { projects: '25+', clients: '20+' }
    },
    {
      id: 3,
      title: 'Cloud Solutions',
      description: 'Cloud migration, infrastructure setup, and management on AWS, Azure, and Google Cloud.',
      longDescription: 'Scale your business with cloud technology. We help you migrate, optimize, and manage your cloud infrastructure.',
      icon: Cloud,
      color: 'from-blue-600 to-blue-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      features: ['Cloud Migration', 'Infrastructure', 'Scalability', 'Cost Optimization'],
      metrics: { projects: '30+', clients: '25+' }
    },
    {
      id: 4,
      title: 'Cybersecurity Services',
      description: 'Comprehensive security audits, penetration testing, and network protection.',
      longDescription: 'Protect your business from cyber threats. We identify vulnerabilities and implement robust security measures.',
      icon: Shield,
      color: 'from-blue-600 to-blue-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      features: ['Security Audits', 'Pen Testing', 'Network Security', 'Compliance'],
      metrics: { projects: '20+', clients: '18+' }
    },
    {
      id: 5,
      title: 'IT Consulting',
      description: 'Strategic technology advisory to drive digital transformation and business growth.',
      longDescription: 'Get expert guidance on your technology strategy. We help you make informed decisions and avoid costly mistakes.',
      icon: Users,
      color: 'from-blue-600 to-blue-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      features: ['Tech Strategy', 'Digital Transformation', 'Roadmap', 'Advisory'],
      metrics: { projects: '35+', clients: '28+' }
    },
    {
      id: 6,
      title: 'Software Development',
      description: 'Custom software solutions, enterprise applications, and API integration.',
      longDescription: 'Streamline your operations with custom software built specifically for your business processes.',
      icon: Code,
      color: 'from-blue-600 to-blue-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      features: ['Custom Software', 'Enterprise Apps', 'API Integration', 'Legacy Modernization'],
      metrics: { projects: '40+', clients: '32+' }
    },
    {
      id: 7,
      title: 'Data Analytics',
      description: 'Business intelligence, data visualization, and predictive analytics.',
      longDescription: 'Turn your data into actionable insights. We help you understand your business better and make data-driven decisions.',
      icon: BarChart3,
      color: 'from-blue-600 to-blue-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      features: ['BI', 'Data Visualization', 'Predictive Analytics', 'Reporting'],
      metrics: { projects: '25+', clients: '22+' }
    },
    {
      id: 8,
      title: 'DevOps Services',
      description: 'CI/CD pipelines, containerization, and infrastructure automation.',
      longDescription: 'Accelerate your development and deployment with modern DevOps practices and tools.',
      icon: Cpu,
      color: 'from-blue-600 to-blue-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      features: ['CI/CD', 'Containerization', 'Automation', 'Monitoring'],
      metrics: { projects: '28+', clients: '24+' }
    }
  ]

  const stats = [
    { icon: Briefcase, value: '50+', label: 'Projects Delivered' },
    { icon: Users, value: '40+', label: 'Happy Clients' },
    { icon: Clock, value: '24/7', label: 'Support' },
    { icon: Award, value: '6+', label: 'Years Experience' }
  ]

  const process = [
    {
      step: '01',
      title: 'Discovery',
      description: 'We dive deep into your business, understanding your goals, challenges, and vision.',
      icon: Eye
    },
    {
      step: '02',
      title: 'Strategy',
      description: 'We craft a tailored roadmap that aligns technology with your business objectives.',
      icon: Target
    },
    {
      step: '03',
      title: 'Design',
      description: 'We create intuitive, beautiful designs that users love and that reflect your brand.',
      icon: Palette
    },
    {
      step: '04',
      title: 'Development',
      description: 'We build your solution using modern technologies and best practices.',
      icon: Code
    },
    {
      step: '05',
      title: 'Testing',
      description: 'We rigorously test every aspect to ensure quality, security, and performance.',
      icon: Shield
    },
    {
      step: '06',
      title: 'Launch & Support',
      description: 'We deploy your solution and provide ongoing support to ensure success.',
      icon: Rocket
    }
  ]

  const technologies = [
    {
      category: 'Frontend',
      icon: Globe,
      items: ['React', 'Next.js', 'Vue', 'Angular', 'TypeScript', 'Tailwind']
    },
    {
      category: 'Backend',
      icon: Server,
      items: ['Node.js', 'Python', 'PHP', 'Java', '.NET', 'Go']
    },
    {
      category: 'Mobile',
      icon: Smartphone,
      items: ['Flutter', 'React Native', 'Swift', 'Kotlin', 'Ionic']
    },
    {
      category: 'Database',
      icon: Database,
      items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase', 'Redis']
    },
    {
      category: 'Cloud',
      icon: Cloud,
      items: ['AWS', 'Azure', 'Google Cloud', 'DigitalOcean', 'Vercel']
    },
    {
      category: 'DevOps',
      icon: Settings,
      items: ['Docker', 'Kubernetes', 'Jenkins', 'GitHub Actions', 'Terraform']
    }
  ]

  const testimonials = [
    {
      quote: "Yelocode transformed our business with a custom e-commerce platform. Our online sales have increased by 150%.",
      author: "Chidi Okonkwo",
      role: "CEO, Chidi's Mart",
      rating: 5
    },
    {
      quote: "The team at Yelocode is professional, responsive, and technically excellent. They delivered our mobile app on time and under budget.",
      author: "Funmi Adebayo",
      role: "Founder, HealthTrack",
      rating: 5
    },
    {
      quote: "Their cybersecurity audit helped us identify critical vulnerabilities. We're now fully compliant and much more secure.",
      author: "Emeka Nwachukwu",
      role: "CTO, PayFlow",
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      
      {/* HERO SECTION - Modern Minimal */}
      <section className="relative pt-24 pb-32 overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-950 -z-10" />
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-blue-600/5 to-transparent -z-10" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl -z-10" />
        
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium px-4 py-2 rounded-full mb-6 animate-fade-in">
              {/* <Sparkles className="w-4 h-4" /> */}
              Technology Solutions
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight animate-fade-in-up">
              We Build{' '}
              <span className="text-blue-600 dark:text-blue-400 relative">
                Digital Excellence
                <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 300 8" fill="none">
                  <path d="M1 4C76 1.5 150 1.5 299 4" stroke="url(#gradient)" strokeWidth="3" strokeLinecap="round"/>
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="100%" stopColor="#60A5FA" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-10 animate-fade-in-up animation-delay-200">
              Yelocode Systems delivers cutting-edge technology solutions tailored to your business needs. 
              From web and mobile development to cloud solutions and cybersecurity.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up animation-delay-400">
              <a 
                href="#solutions" 
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-blue-500/25 transition-all inline-flex items-center gap-2"
              >
                Explore Solutions
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#contact" 
                className="px-8 py-4 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-all inline-flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-12 bg-white dark:bg-gray-950 border-y border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl mb-3">
                    <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* SOLUTIONS SECTION - Modern Cards */}
      <section id="solutions" className="py-24 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Solutions We Offer
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Comprehensive technology services to help your business thrive in the digital age
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((solution, index) => {
              const Icon = solution.icon
              return (
                <div 
                  key={index}
                  className="group relative bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 hover:border-blue-500 transition-all duration-300 hover:shadow-xl"
                >
                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative">
                    <div className={`w-14 h-14 ${solution.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{solution.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">{solution.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {solution.features.slice(0, 3).map((feature, i) => (
                        <span key={i} className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full">
                          {feature}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        <span className="font-semibold text-gray-900 dark:text-white">{solution.metrics.projects}</span> projects
                      </div>
                      <a href="#" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 transition-colors">
                        <ArrowRight className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US - Split Layout */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium px-4 py-2 rounded-full mb-6">
                <Star className="w-4 h-4" />
                Why Choose Us
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Your {' '}
                <span className="text-blue-600 dark:text-blue-400">Technology Partner</span>
              </h2>
              
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                Based at No. 11 Elekahia, Port Harcourt, we combine global expertise with local understanding 
                to deliver solutions that drive real business results.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  'Experienced team of certified professionals',
                  'Proven track record with 40+ successful projects',
                  'Customized solutions tailored to your business',
                  '24/7 ongoing support and maintenance',
                  'Competitive pricing with flexible engagement'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-green-600 dark:text-green-400" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 border-2 border-white dark:border-gray-800" />
                  ))}
                </div>
                <div>
                  <div className="font-bold text-gray-900 dark:text-white">40+ Happy Clients</div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">And growing every day</p>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 rounded-3xl blur-2xl opacity-20" />
              <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Visit Our Office</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">No. 11 Elekahia, Port Harcourt</p>
                  </div>
                </div>

                <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-xl mb-6 overflow-hidden">
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

                <div className="grid grid-cols-2 gap-4">
                  <a href="tel:09162865693" className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-900 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
                    <Phone className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">Call Us</div>
                      <div className="text-sm font-semibold text-gray-900 dark:text-white">09162865693</div>
                    </div>
                  </a>
                  <a href="mailto:solutions@yelocode.com" className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-900 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
                    <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">Email Us</div>
                      <div className="text-sm font-semibold text-gray-900 dark:text-white truncate">solutions@yelocode.com</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION - Timeline Style */}
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Process
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              A proven methodology that ensures successful project delivery
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-blue-300 hidden md:block" />

            <div className="space-y-12">
              {process.map((step, index) => {
                const Icon = step.icon
                return (
                  <div key={index} className="relative md:ml-16">
                    <div className="absolute left-0 top-2 w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full hidden md:flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">{step.step}</span>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{step.title}</h3>
                          </div>
                          <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES - Grid with Icons */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Technologies We Master
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Modern tools and frameworks for building robust solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => {
              const Icon = tech.icon
              return (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">{tech.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {tech.items.map((item, i) => (
                      <span key={i} className="px-3 py-1.5 bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 text-sm rounded-lg border border-gray-200 dark:border-gray-700">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Trusted by businesses in Port Harcourt and beyond
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">{testimonial.author}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION - Modern Form */}
      <section id="contact" className="py-24 bg-gradient-to-br from-blue-600 to-blue-500 text-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Let's discuss how our technology solutions can help you achieve your goals.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold">Visit Us</p>
                    <p className="text-blue-100">No. 11 Elekahia, Port Harcourt</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold">Call Us</p>
                    <p className="text-blue-100">09162865693</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold">Email Us</p>
                    <p className="text-blue-100">solutions@yelocode.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
              
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white"
                  />
                </div>
                
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white"
                />
                
                <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white">
                  <option value="" className="text-gray-900">Select a service</option>
                  <option value="web" className="text-gray-900">Web Development</option>
                  <option value="mobile" className="text-gray-900">Mobile App Development</option>
                  <option value="cloud" className="text-gray-900">Cloud Solutions</option>
                  <option value="cyber" className="text-gray-900">Cybersecurity</option>
                </select>
                
                <textarea
                  rows={4}
                  placeholder="Tell us about your project"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white"
                />
                
                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Animation styles */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }
        
        .animation-delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
        }
      `}</style>
    </div>
  )
}