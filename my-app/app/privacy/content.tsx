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
  ArrowRight, ChevronRight as ChevronRightIcon, Cookie, Fingerprint,
  FileJson, AlertCircle, Bell, Ban, Clock as ClockIcon, RefreshCcw,
  MapPin, Headphones, HelpCircle, MessageCircle, UserPlus, Github,
  CheckCheck, Copy as CopyIcon
} from 'lucide-react'

export default function PrivacyPage() {
  const [activeSection, setActiveSection] = useState('overview')
  const [copied, setCopied] = useState<string | null>(null)
  const [cookiePreferences, setCookiePreferences] = useState({
    necessary: true,
    functional: false,
    analytics: false,
    marketing: false
  })

  const sections = [
    { id: 'overview', label: 'Overview', icon: FileText },
    { id: 'collection', label: 'Information Collection', icon: Database },
    { id: 'usage', label: 'How We Use Data', icon: Gauge },
    { id: 'sharing', label: 'Information Sharing', icon: Share2 },
    { id: 'security', label: 'Security Measures', icon: Lock },
    { id: 'rights', label: 'Your Rights', icon: Shield },
    { id: 'cookies', label: 'Cookie Policy', icon: Cookie },
    { id: 'contact', label: 'Contact Us', icon: Mail }
  ]

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text)
    setCopied(type)
    setTimeout(() => setCopied(null), 2000)
  }

  const handleCookieChange = (type) => {
    setCookiePreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }))
  }

  const quickLinks = [
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Privacy-related inquiries',
      action: 'Chat Now',
      link: '#',
      color: 'from-yellow-600 to-yellow-400'
    },
    {
      icon: UserPlus,
      title: 'DPO Contact',
      description: 'Direct line to Data Protection Officer',
      action: 'Contact DPO',
      link: '#',
      color: 'from-yellow-600 to-emerald-600'
    },
    {
      icon: HelpCircle,
      title: 'FAQ',
      description: 'Common privacy questions',
      action: 'View FAQs',
      link: '#faq',
      color: 'from-orange-600 to-amber-600'
    }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        {/* Background Image with Overlay - matching contact page style */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/pics/40606.jpg" 
            alt="Data security concept" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-yellow-500/20 backdrop-blur-sm text-yellow-400 text-sm font-medium px-4 py-2 rounded-full mb-6 border border-yellow-500/30">
              <Lock className="w-4 h-4" />
              Your Privacy Matters
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Privacy{' '}
              <span className="text-yellow-400">Policy</span>
            </h1>
            
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              At Yelocode Systems, we are committed to protecting your privacy and ensuring the security of your personal information.
            </p>

            <div className="flex items-center justify-center gap-4 text-sm text-gray-400 mt-8">
              <span>Last Updated: January 15, 2024</span>
              <span className="w-1 h-1 bg-gray-600 rounded-full" />
              <span>Version 2.0</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links - matching contact page style */}
      <section className="py-12 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {quickLinks.map((link, index) => {
              const Icon = link.icon
              return (
                <a
                  key={index}
                  href={link.link}
                  className="group relative bg-gray-50 dark:bg-gray-900 rounded-xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-800 overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${link.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  <div className="relative">
                    <div className={`w-12 h-12 bg-gradient-to-r ${link.color} rounded-lg flex items-center justify-center mb-4`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{link.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{link.description}</p>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-yellow-600 dark:text-yellow-400 group-hover:gap-2 transition-all">
                      {link.action}
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* Navigation Pills */}
      <section className="sticky top-0 z-10 bg-white/80 dark:bg-gray-950/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex items-center overflow-x-auto py-4 gap-2 scrollbar-hide">
            {sections.map((section) => {
              const Icon = section.icon
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                    activeSection === section.id
                      ? 'bg-yellow-600 text-white shadow-lg shadow-yellow-600/25'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {section.label}
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-4">
                <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Quick Summary</h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                      <Check className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                      <span>We never sell your personal data</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                      <Check className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                      <span>Industry-standard encryption</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                      <Check className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                      <span>Full control over your data</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                      <Check className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                      <span>GDPR compliant</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-900/30 rounded-2xl p-6 border border-yellow-200 dark:border-yellow-800">
                  <div className="flex items-center gap-3 mb-3">
                    <ShieldIcon className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                    <h3 className="font-semibold text-yellow-800 dark:text-yellow-300">Your Trust Matters</h3>
                  </div>
                  <p className="text-sm text-yellow-700 dark:text-yellow-400 mb-4">
                    We're committed to transparency and giving you control over your personal information.
                  </p>
                  <button className="w-full bg-yellow-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-yellow-700 transition-colors">
                    Download Privacy Policy (PDF)
                  </button>
                </div>
              </div>
            </div>

            {/* Content Area */}
            <div className="lg:col-span-3 space-y-12">
              {/* Overview */}
              <div id="overview" className="scroll-mt-32">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg">
                    <FileText className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Overview</h2>
                </div>
                
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Yelocode Systems ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
                  </p>
                  
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-4">
                    We reserve the right to make changes to this Privacy Policy at any time and for any reason. We will alert you about any changes by updating the "Last Updated" date of this Privacy Policy. Any changes or modifications will be effective immediately upon posting the updated Privacy Policy on the Site, and you waive the right to receive specific notice of each such change or modification.
                  </p>
                </div>

                <div className="mt-8 grid sm:grid-cols-2 gap-4">
                  {[
                    { label: 'Effective Date', value: 'January 1, 2024', icon: Calendar },
                    { label: 'Jurisdiction', value: 'Nigeria', icon: Globe },
                    { label: 'Data Controller', value: 'Yelocode Systems', icon: Building2 },
                    { label: 'DPO Contact', value: 'dpo@yelocodesys.com', icon: Mail }
                  ].map((item, i) => {
                    const Icon = item.icon
                    return (
                      <div key={i} className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4 border border-gray-200 dark:border-gray-800">
                        <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm mb-1">
                          <Icon className="w-4 h-4" />
                          {item.label}
                        </div>
                        <div className="font-medium text-gray-900 dark:text-white">{item.value}</div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Information Collection */}
              <div id="collection" className="scroll-mt-32">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg">
                    <Database className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Information We Collect</h2>
                </div>

                <div className="space-y-6">
                  <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Personal Data</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      We may collect personal identification information in various ways, including:
                    </p>
                    <ul className="space-y-3">
                      {[
                        'Name and contact information (email, phone number)',
                        'Demographic information (age, location, preferences)',
                        'Professional information (job title, company, industry)',
                        'Payment information (processed securely through third-party providers)'
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                          <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Technical Data</h3>
                    <ul className="space-y-3">
                      {[
                        'IP address and browser information',
                        'Device type and operating system',
                        'Usage data and interaction with our services',
                        'Cookies and similar tracking technologies'
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                          <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* How We Use Data */}
              <div id="usage" className="scroll-mt-32">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg">
                    <Gauge className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">How We Use Your Data</h2>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    {
                      title: 'Service Delivery',
                      description: 'To provide and maintain our services, including training programs and IT solutions',
                      icon: Rocket
                    },
                    {
                      title: 'Communication',
                      description: 'To respond to inquiries, send updates, and provide customer support',
                      icon: MessageSquare
                    },
                    {
                      title: 'Improvement',
                      description: 'To analyze usage patterns and enhance user experience',
                      icon: TrendingUp
                    },
                    {
                      title: 'Security',
                      description: 'To protect against unauthorized access and maintain system security',
                      icon: Shield
                    },
                    {
                      title: 'Legal Compliance',
                      description: 'To comply with applicable laws and regulations',
                      icon: FileJson
                    },
                    {
                      title: 'Marketing',
                      description: 'To send promotional materials (with your consent where required)',
                      icon: Megaphone
                    }
                  ].map((item, i) => {
                    const Icon = item.icon
                    return (
                      <div key={i} className="bg-gray-50 dark:bg-gray-900 rounded-xl p-5 border border-gray-200 dark:border-gray-800 hover:border-yellow-300 dark:hover:border-yellow-700 transition-colors">
                        <div className="p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg w-fit mb-3">
                          <Icon className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />
                        </div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Information Sharing */}
              <div id="sharing" className="scroll-mt-32">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                    <Share2 className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Information Sharing</h2>
                </div>

                <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    We may share your information with:
                  </p>
                  
                  <div className="space-y-4">
                    {[
                      {
                        type: 'Service Providers',
                        description: 'Third-party vendors who assist in operating our business (payment processing, analytics, hosting)',
                        icon: Server
                      },
                      {
                        type: 'Business Partners',
                        description: 'Trusted partners who offer complementary services (with your consent)',
                        icon: Users
                      },
                      {
                        type: 'Legal Requirements',
                        description: 'When required by law or to protect our rights and safety',
                        icon: AlertCircle
                      },
                      {
                        type: 'Business Transfers',
                        description: 'In connection with a merger, acquisition, or sale of assets',
                        icon: TrendingUp
                      }
                    ].map((item, i) => {
                      const Icon = item.icon
                      return (
                        <div key={i} className="flex items-start gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg">
                          <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                            <Icon className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900 dark:text-white">{item.type}</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                  
                  <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg border border-yellow-200 dark:border-yellow-800">
                    <p className="text-sm text-yellow-700 dark:text-yellow-400 flex items-start gap-2">
                      <Shield className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span>We do NOT sell your personal information to third parties for marketing purposes.</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Security Measures */}
              <div id="security" className="scroll-mt-32">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg">
                    <Lock className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Security Measures</h2>
                </div>

                <div className="grid gap-4">
                  {[
                    {
                      title: 'Encryption',
                      description: 'All data transmitted is encrypted using SSL/TLS protocols',
                      icon: Lock
                    },
                    {
                      title: 'Access Controls',
                      description: 'Strict authentication and authorization measures',
                      icon: Fingerprint
                    },
                    {
                      title: 'Regular Audits',
                      description: 'Periodic security assessments and penetration testing',
                      icon: RefreshCcw
                    },
                    {
                      title: 'Data Minimization',
                      description: 'We collect only necessary information',
                      icon: Database
                    }
                  ].map((item, i) => {
                    const Icon = item.icon
                    return (
                      <div key={i} className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800">
                        <div className="p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg">
                          <Icon className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{item.title}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Your Rights */}
              <div id="rights" className="scroll-mt-32">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg">
                    <Shield className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Your Rights</h2>
                </div>

                <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Depending on your location, you may have the following rights regarding your personal data:
                  </p>

                  <div className="space-y-4">
                    {[
                      'Right to access your personal data',
                      'Right to rectify inaccurate data',
                      'Right to erasure ("right to be forgotten")',
                      'Right to restrict processing',
                      'Right to data portability',
                      'Right to object to processing',
                      'Right to withdraw consent',
                      'Right to lodge a complaint with a supervisory authority'
                    ].map((right, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg">
                        <Check className="w-4 h-4 text-yellow-500" />
                        <span className="text-gray-700 dark:text-gray-300">{right}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg">
                    <p className="text-sm text-yellow-700 dark:text-yellow-400">
                      To exercise any of these rights, please contact us at privacy@yelocodesys.com. We will respond to your request within 30 days.
                    </p>
                  </div>
                </div>
              </div>

              {/* Cookie Policy */}
              <div id="cookies" className="scroll-mt-32">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg">
                    <Cookie className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Cookie Policy</h2>
                </div>

                <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    We use cookies and similar tracking technologies to enhance your experience on our website. You can control your cookie preferences below:
                  </p>

                  <div className="space-y-4 mb-6">
                    {[
                      {
                        type: 'Necessary Cookies',
                        description: 'Essential for website functionality and cannot be disabled',
                        key: 'necessary',
                        required: true
                      },
                      {
                        type: 'Functional Cookies',
                        description: 'Remember your preferences and enhance usability',
                        key: 'functional'
                      },
                      {
                        type: 'Analytics Cookies',
                        description: 'Help us understand how visitors interact with our site',
                        key: 'analytics'
                      },
                      {
                        type: 'Marketing Cookies',
                        description: 'Used to deliver relevant advertisements',
                        key: 'marketing'
                      }
                    ].map((cookie) => (
                      <div key={cookie.key} className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-lg">
                        <div>
                          <h4 className="font-medium text-gray-900 dark:text-white">{cookie.type}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{cookie.description}</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input 
                            type="checkbox" 
                            className="sr-only peer"
                            checked={cookiePreferences[cookie.key]}
                            onChange={() => handleCookieChange(cookie.key)}
                            disabled={cookie.required}
                          />
                          <div className={`w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all ${
                            cookiePreferences[cookie.key] ? 'bg-yellow-600' : 'bg-gray-300'
                          } ${cookie.required ? 'opacity-50 cursor-not-allowed' : ''}`}></div>
                        </label>
                      </div>
                    ))}
                  </div>

                  <button className="w-full bg-yellow-600 text-white px-4 py-3 rounded-lg font-medium hover:bg-yellow-700 transition-colors">
                    Save Cookie Preferences
                  </button>
                </div>
              </div>

              {/* Contact Us - Using contact page info */}
              <div id="contact" className="scroll-mt-32">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg">
                    <Mail className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Contact Us</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Privacy Inquiries</h3>
                    
                    <div className="space-y-4">
                      {/* Address */}
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg">
                          <MapPin className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm text-gray-500 dark:text-gray-400">Visit Us</div>
                          <div className="text-gray-900 dark:text-white text-sm mb-1">No11 Elekahia, Port Harcourt, Rivers State, Nigeria</div>
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
                                <CopyIcon className="w-3 h-3" />
                                Copy address
                              </>
                            )}
                          </button>
                        </div>
                      </div>

                      {/* Phone */}
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg">
                          <Phone className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm text-gray-500 dark:text-gray-400">Call Us</div>
                          <div className="space-y-1">
                            <div className="flex items-center justify-between">
                              <span className="text-gray-900 dark:text-white text-sm">+234 (0) 9162865693</span>
                              <button 
                                onClick={() => handleCopy('+2349162865693', 'phone1')}
                                className="text-xs text-yellow-600 dark:text-yellow-400 hover:text-yellow-700"
                              >
                                {copied === 'phone1' ? 'Copied!' : 'Copy'}
                              </button>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-gray-900 dark:text-white text-sm">+234 (0) 8036255713</span>
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
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg">
                          <Mail className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm text-gray-500 dark:text-gray-400">Email Us</div>
                          <div className="space-y-1">
                            <div className="flex items-center justify-between">
                              <span className="text-gray-900 dark:text-white text-sm">info@yelocodesys.com</span>
                              <button 
                                onClick={() => handleCopy('info@yelocodesys.com', 'email1')}
                                className="text-xs text-yellow-600 dark:text-yellow-400 hover:text-yellow-700"
                              >
                                {copied === 'email1' ? 'Copied!' : 'Copy'}
                              </button>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-gray-900 dark:text-white text-sm">admissions@yelocodesys.com</span>
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
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg">
                          <Clock className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />
                        </div>
                        <div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">Office Hours</div>
                          <p className="text-gray-900 dark:text-white text-sm">Monday - Friday: 9am - 6pm</p>
                          <p className="text-gray-900 dark:text-white text-sm">Saturday: 10am - 4pm</p>
                          <p className="text-gray-900 dark:text-white text-sm">Sunday: Closed</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-800">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Follow Us</h4>
                      <div className="flex gap-3">
                        {[
                          { icon: Facebook, href: '#', color: 'hover:bg-yellow-600' },
                          { icon: Twitter, href: '#', color: 'hover:bg-sky-500' },
                          { icon: Linkedin, href: '#', color: 'hover:bg-yellow-700' },
                          { icon: Instagram, href: '#', color: 'hover:bg-yellow-600' },
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

                  <div className="bg-gradient-to-br from-yellow-600 to-yellow-400 rounded-xl p-6 text-white">
                    <h3 className="font-semibold text-xl mb-3">Data Protection Officer</h3>
                    <p className="text-yellow-100 mb-4">
                      For privacy-specific inquiries, you can contact our Data Protection Officer directly:
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        <span>dpo@yelocodesys.com</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        <span>+234 (0) 9162865693</span>
                      </div>
                      <button 
                        onClick={() => handleCopy('dpo@yelocodesys.com', 'dpo')}
                        className="text-xs bg-white/20 px-3 py-1 rounded-full hover:bg-white/30 transition-colors inline-flex items-center gap-1"
                      >
                        {copied === 'dpo' ? (
                          <>
                            <CheckCheck className="w-3 h-3" />
                            Copied!
                          </>
                        ) : (
                          <>
                            <CopyIcon className="w-3 h-3" />
                            Copy DPO email
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 text-sm font-medium px-4 py-2 rounded-full mb-6">
              <HelpCircle className="w-4 h-4" />
              Privacy FAQs
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
                  q: 'How do you protect my personal data?',
                  a: 'We use industry-standard encryption, access controls, and regular security audits to protect your information.'
                },
                {
                  q: 'Do you sell my data to third parties?',
                  a: 'No, we never sell your personal information to third parties for marketing purposes.'
                },
                {
                  q: 'How can I request deletion of my data?',
                  a: 'You can request data deletion by contacting our privacy team at privacy@yelocodesys.com.'
                },
                {
                  q: 'What cookies do you use on your website?',
                  a: 'We use necessary, functional, analytics, and marketing cookies. You can manage your preferences in our Cookie Policy section.'
                }
              ].map((item, i) => (
                <div key={i} className="border-b border-gray-200 dark:border-gray-700 last:border-0 pb-4 last:pb-0">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{item.q}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA - matching contact page style */}
      <section className="py-16 bg-gradient-to-r from-yellow-600 to-yellow-400 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Questions About Your Privacy?</h2>
          <p className="text-xl text-yellow-100 mb-8 max-w-2xl mx-auto">
            Our privacy team is here to help. Reach out to us with any concerns about your data.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="#contact" 
              className="px-8 py-4 bg-white text-yellow-600 font-semibold rounded-lg hover:bg-gray-100 transition-all hover:shadow-xl inline-flex items-center gap-2"
              onClick={(e) => {
                e.preventDefault()
                setActiveSection('contact')
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              <Mail className="w-5 h-5" />
              Contact Privacy Team
            </a>
            <a 
              href="#" 
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all inline-flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download Policy
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}