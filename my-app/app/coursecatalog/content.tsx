"use client";

import { useState } from 'react'
import { 
  Code, Palette, PieChart, Database, TrendingUp, Shield, Cloud,
  Check, X, Clock, Users, Award, Calendar, BookOpen, Rocket,
  Star, Briefcase, Target, Zap, Globe, Mail, Phone, GraduationCap,
  ChevronDown, ChevronRight, MessageSquare, ExternalLink, Github,
  Linkedin, Twitter, Figma, PenTool, BarChart, LineChart, 
  Smartphone, Monitor, Laptop, Server, Download, Upload, Copy, 
  Trash2, Edit, Filter, RefreshCw, Eye, EyeOff, ChevronUp, ChevronLeft, 
  Menu, X as XIcon, Home, ShoppingCart, Newspaper, Youtube, Camera, 
  Music, Gamepad, Plane, Car, Heart, Building2, Map, Sun, Moon, Activity, 
  Wallet, Trophy, Gift, Truck, Dog, Leaf, Bike, Ticket, GlassWater, 
  Shirt, Watch, Bot, Network, BarChart3, LineChart as LineChartIcon, 
  PieChart as PieChartIcon, Box, Binary, Cpu as CpuIcon, Sparkles, 
  Megaphone, FileText, Layers, Layout, Users as UsersIcon, 
  Settings, Shield as ShieldIcon, Cloud as CloudIcon, Star as StarIcon,
  ArrowRight, Play, Award as AwardIcon, Target as TargetIcon,
  Briefcase as BriefcaseIcon, Calendar as CalendarIcon
} from 'lucide-react'

// All courses data with detailed information (pricing removed)
const allCourses = [
  {
    id: 1,
    name: 'Web Development',
    icon: Code,
    color: 'yellow',
    badgeColor: 'from-yellow-500 to-amber-500',
    gradient: 'from-yellow-500/20 to-amber-500/20',
    borderColor: 'border-yellow-500/30',
    textColor: 'text-yellow-600',
    description: 'Master frontend and backend development to build modern, responsive websites and web applications.',
    longDescription: 'Learn HTML, CSS, JavaScript, React, Node.js, and databases. Build full-stack applications from scratch.',
    programs: [
      { name: 'NOVA PRIME', duration: '3 months', projects: '15 Live Projects', level: 'Beginner' },
      { name: 'AXIS IGNITE', duration: '5 months', projects: '40 Live Projects', level: 'Intermediate' },
      { name: 'QUANTA ELITE', duration: '7 months', projects: '60 Live Projects', level: 'Advanced' }
    ],
    skills: ['HTML/CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB', 'Git'],
    outcomes: [
      'Build responsive websites and web applications',
      'Develop full-stack applications from scratch',
      'Work with databases and APIs',
      'Deploy applications to cloud platforms'
    ],
    careers: [
      { title: 'Frontend Developer', salary: '₦4-8M/year', companies: ['Google', 'Meta', 'Startups'] },
      { title: 'Backend Developer', salary: '₦5-10M/year', companies: ['Amazon', 'Microsoft', 'Fintech'] },
      { title: 'Full Stack Developer', salary: '₦6-12M/year', companies: ['Tech Companies', 'Agencies'] },
      { title: 'Freelance Developer', salary: '₦Variable', companies: ['Upwork', 'Toptal', 'Fiverr'] }
    ],
    jobPortals: ['LinkedIn', 'Indeed', 'Stack Overflow Jobs', 'AngelList', 'RemoteOK'],
    portfolioSetup: [
      'Build 3-5 full-stack projects',
      'Create GitHub profile with clean code',
      'Deploy projects to Vercel/Netlify',
      'Build personal portfolio website',
      'Document your projects thoroughly'
    ]
  },
  {
    id: 2,
    name: 'Graphics Design / UI-UX Design',
    icon: Palette,
    color: 'yellow',
    badgeColor: 'from-yellow-500 to-amber-500',
    gradient: 'from-yellow-500/20 to-amber-500/20',
    borderColor: 'border-yellow-500/30',
    textColor: 'text-yellow-600',
    description: 'Create stunning visuals and intuitive user experiences for web and mobile applications.',
    longDescription: 'Master design tools, user research, wireframing, prototyping, and visual design principles.',
    programs: [
      { name: 'NOVA PRIME', duration: '2 months', projects: '10 Live Projects', level: 'Beginner' },
      { name: 'AXIS IGNITE', duration: '4 months', projects: '20 Live Projects', level: 'Intermediate' }
    ],
    skills: ['Photoshop', 'Illustrator', 'Figma', 'Adobe XD', 'User Research', 'Prototyping'],
    outcomes: [
      'Create professional graphics and branding',
      'Design user-friendly interfaces',
      'Conduct user research and usability testing',
      'Build interactive prototypes'
    ],
    careers: [
      { title: 'Graphic Designer', salary: '₦3-6M/year', companies: ['Agencies', 'Media Houses', 'Startups'] },
      { title: 'UI/UX Designer', salary: '₦5-9M/year', companies: ['Tech Companies', 'Fintech', 'E-commerce'] },
      { title: 'Product Designer', salary: '₦7-12M/year', companies: ['Product Companies', 'SaaS'] },
      { title: 'Freelance Designer', salary: '₦Variable', companies: ['Upwork', 'Fiverr', '99designs'] }
    ],
    jobPortals: ['Behance', 'Dribbble', 'LinkedIn', 'Indeed', 'UX Design Institute'],
    portfolioSetup: [
      'Create Behance and Dribbble profiles',
      'Showcase 5-7 design projects',
      'Include case studies for each project',
      'Show design process from research to final',
      'Build personal portfolio website'
    ]
  },
  {
    id: 3,
    name: 'Data Analysis',
    icon: PieChart,
    color: 'yellow',
    badgeColor: 'from-yellow-500 to-amber-500',
    gradient: 'from-yellow-500/20 to-amber-500/20',
    borderColor: 'border-yellow-500/30',
    textColor: 'text-yellow-600',
    description: 'Transform raw data into actionable insights for business decision-making.',
    longDescription: 'Master Excel, SQL, Python, Pandas, Tableau, and Power BI for comprehensive data analysis.',
    programs: [
      { name: 'NOVA PRIME', duration: '3 months', projects: '5 Live Projects', level: 'Beginner' },
      { name: 'AXIS IGNITE', duration: '5 months', projects: '20 Live Projects', level: 'Intermediate' },
      { name: 'QUANTA ELITE', duration: '7 months', projects: '30 Live Projects', level: 'Advanced' }
    ],
    skills: ['Excel', 'SQL', 'Python', 'Pandas', 'Tableau', 'Power BI'],
    outcomes: [
      'Analyze complex datasets for insights',
      'Create interactive dashboards and reports',
      'Communicate findings to stakeholders',
      'Drive data-driven decision making'
    ],
    careers: [
      { title: 'Data Analyst', salary: '₦4-8M/year', companies: ['Banks', 'Telcos', 'E-commerce'] },
      { title: 'Business Intelligence Analyst', salary: '₦5-9M/year', companies: ['Consulting', 'Tech'] },
      { title: 'Marketing Analyst', salary: '₦4-7M/year', companies: ['Agencies', 'Product Companies'] },
      { title: 'Financial Analyst', salary: '₦5-10M/year', companies: ['Investment Banks', 'Fintech'] }
    ],
    jobPortals: ['LinkedIn', 'Indeed', 'Glassdoor', 'Analytics Jobs', 'Kaggle'],
    portfolioSetup: [
      'Create Kaggle profile with notebooks',
      'Build 5-7 analysis projects on GitHub',
      'Create interactive Tableau Public profile',
      'Write case studies for each project',
      'Build portfolio with clear visualizations'
    ]
  },
  {
    id: 4,
    name: 'Python Program',
    icon: Database,
    color: 'yellow',
    badgeColor: 'from-yellow-500 to-amber-500',
    gradient: 'from-yellow-500/20 to-amber-500/20',
    borderColor: 'border-yellow-500/30',
    textColor: 'text-yellow-600',
    description: 'Master Python programming for web development, automation, data science, and more.',
    longDescription: 'Learn Python fundamentals, OOP, web frameworks, data analysis, and machine learning basics.',
    programs: [
      { name: 'NOVA PRIME', duration: '2 months', projects: '10 Live Projects', level: 'Beginner' },
      { name: 'AXIS IGNITE', duration: '4 months', projects: '20 Live Projects', level: 'Intermediate' },
      { name: 'QUANTA ELITE', duration: '8 months', projects: '30 Live Projects', level: 'Advanced' }
    ],
    skills: ['Python', 'Django/Flask', 'Pandas', 'NumPy', 'APIs', 'SQL'],
    outcomes: [
      'Build web applications with Django/Flask',
      'Automate tasks with Python scripts',
      'Analyze data with Pandas and NumPy',
      'Work with databases and APIs'
    ],
    careers: [
      { title: 'Python Developer', salary: '₦5-10M/year', companies: ['Tech Companies', 'Fintech'] },
      { title: 'Backend Developer', salary: '₦6-11M/year', companies: ['Startups', 'Enterprises'] },
      { title: 'Data Scientist', salary: '₦8-15M/year', companies: ['AI Labs', 'Research'] },
      { title: 'Automation Engineer', salary: '₦4-8M/year', companies: ['Manufacturing', 'Tech'] }
    ],
    jobPortals: ['LinkedIn', 'Python Jobs', 'Stack Overflow', 'Remote Python', 'Django Jobs'],
    portfolioSetup: [
      'Build 5-7 Python projects on GitHub',
      'Create Django/Flask web applications',
      'Deploy projects to PythonAnywhere/Heroku',
      'Contribute to open source',
      'Document code thoroughly'
    ]
  },
  {
    id: 5,
    name: 'Digital Marketing',
    icon: TrendingUp,
    color: 'yellow',
    badgeColor: 'from-yellow-500 to-amber-500',
    gradient: 'from-yellow-500/20 to-amber-500/20',
    borderColor: 'border-yellow-500/30',
    textColor: 'text-yellow-600',
    description: 'Master digital marketing strategies with AI automation tools for business growth.',
    longDescription: 'Learn SEO, social media, email marketing, paid ads, content marketing, and analytics.',
    programs: [
      { name: 'NOVA PRIME', duration: '2 months', projects: '5 live campaigns', level: 'Beginner' },
      { name: 'AXIS IGNITE', duration: '3 months', projects: '15 client projects', level: 'Intermediate' }
    ],
    skills: ['SEO', 'Social Media', 'Email Marketing', 'Google Ads', 'Analytics', 'Content Strategy'],
    outcomes: [
      'Create and execute digital marketing campaigns',
      'Optimize websites for search engines',
      'Manage social media presence',
      'Analyze campaign performance and ROI'
    ],
    careers: [
      { title: 'Digital Marketing Specialist', salary: '₦3-6M/year', companies: ['Agencies', 'Brands'] },
      { title: 'SEO Specialist', salary: '₦4-7M/year', companies: ['Digital Agencies', 'E-commerce'] },
      { title: 'Social Media Manager', salary: '₦3-5M/year', companies: ['Media', 'Brands'] },
      { title: 'Content Marketing Manager', salary: '₦4-8M/year', companies: ['Tech', 'Publishing'] }
    ],
    jobPortals: ['LinkedIn', 'Indeed', 'Marketing Jobs', 'We Work Remotely', 'FlexJobs'],
    portfolioSetup: [
      'Document campaign results with case studies',
      'Create sample social media calendars',
      'Build mock ad campaigns in Google Ads',
      'Show analytics reports and insights',
      'Create personal brand on LinkedIn'
    ]
  },
  {
    id: 6,
    name: 'Mobile App Development',
    icon: Smartphone,
    color: 'yellow',
    badgeColor: 'from-yellow-500 to-amber-500',
    gradient: 'from-yellow-500/20 to-amber-500/20',
    borderColor: 'border-yellow-500/30',
    textColor: 'text-yellow-600',
    description: 'Build cross-platform and native mobile applications for iOS and Android.',
    longDescription: 'Master Flutter, React Native, and native development with Kotlin/Swift.',
    programs: [
      { name: 'NOVA PRIME', duration: '3 months', projects: '6 basic apps', level: 'Beginner' },
      { name: 'AXIS IGNITE', duration: '10 months', projects: '25+ apps', level: 'Intermediate' }
    ],
    skills: ['Flutter', 'React Native', 'Firebase', 'APIs', 'UI Design', 'App Store Publishing'],
    outcomes: [
      'Build cross-platform mobile apps',
      'Publish apps to App Store and Play Store',
      'Integrate APIs and databases',
      'Implement authentication and push notifications'
    ],
    careers: [
      { title: 'Mobile Developer', salary: '₦5-10M/year', companies: ['Tech Companies', 'Startups'] },
      { title: 'Flutter Developer', salary: '₦6-11M/year', companies: ['Cross-platform Shops'] },
      { title: 'React Native Developer', salary: '₦6-10M/year', companies: ['Tech Startups'] },
      { title: 'Freelance App Developer', salary: '₦Variable', companies: ['Upwork', 'Toptal'] }
    ],
    jobPortals: ['LinkedIn', 'Android Jobs', 'iOS Jobs', 'Flutter Community', 'React Native Jobs'],
    portfolioSetup: [
      'Publish 2-3 apps on App Store/Play Store',
      'Create GitHub repositories with clean code',
      'Showcase app screenshots and features',
      'Document development process',
      'Include user reviews and ratings'
    ]
  },
  {
    id: 7,
    name: 'Cybersecurity',
    icon: Shield,
    color: 'yellow',
    badgeColor: 'from-yellow-500 to-amber-500',
    gradient: 'from-yellow-500/20 to-amber-500/20',
    borderColor: 'border-yellow-500/30',
    textColor: 'text-yellow-600',
    description: 'Protect systems, networks, and data from cyber threats and attacks.',
    longDescription: 'Master network security, ethical hacking, penetration testing, and security operations.',
    programs: [
      { name: 'NOVA PRIME', duration: '3 months', projects: '50+ environments', level: 'Beginner' },
      { name: 'AXIS IGNITE', duration: '5 months', projects: '100+ simulations', level: 'Intermediate' },
      { name: 'QUANTA ELITE', duration: '12 months', projects: '200+ pentests', level: 'Advanced' }
    ],
    skills: ['Network Security', 'Ethical Hacking', 'Penetration Testing', 'SIEM', 'Cryptography'],
    outcomes: [
      'Identify and fix security vulnerabilities',
      'Conduct penetration testing',
      'Implement security best practices',
      'Respond to security incidents'
    ],
    careers: [
      { title: 'Security Analyst', salary: '₦5-9M/year', companies: ['Banks', 'Tech', 'Government'] },
      { title: 'Penetration Tester', salary: '₦7-12M/year', companies: ['Security Firms', 'Consulting'] },
      { title: 'Security Engineer', salary: '₦8-14M/year', companies: ['Tech Giants', 'Fintech'] },
      { title: 'SOC Analyst', salary: '₦4-8M/year', companies: ['MSSPs', 'Enterprises'] }
    ],
    jobPortals: ['LinkedIn', 'CyberSec Jobs', 'Indeed', 'ClearanceJobs', 'Infosec Jobs'],
    portfolioSetup: [
      'Document penetration testing methodologies',
      'Create write-ups of CTF challenges',
      'Build security tools on GitHub',
      'Earn certifications (CompTIA, CEH, OSCP)',
      'Contribute to bug bounty programs'
    ]
  },
  {
    id: 8,
    name: 'Cloud Computing',
    icon: Cloud,
    color: 'yellow',
    badgeColor: 'from-yellow-500 to-amber-500',
    gradient: 'from-yellow-500/20 to-amber-500/20',
    borderColor: 'border-yellow-500/30',
    textColor: 'text-yellow-600',
    description: 'Master cloud platforms for scalable, reliable, and cost-effective infrastructure.',
    longDescription: 'Learn AWS, Azure, Google Cloud, DevOps practices, and cloud architecture.',
    programs: [
      { name: 'NOVA PRIME', duration: '3 months', projects: '50+ environments', level: 'Beginner' },
      { name: 'AXIS IGNITE', duration: '6 months', projects: '15 deployments', level: 'Intermediate' },
      { name: 'QUANTA ELITE', duration: '8 months', projects: '30+ builds', level: 'Advanced' }
    ],
    skills: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform'],
    outcomes: [
      'Deploy and manage cloud infrastructure',
      'Implement CI/CD pipelines',
      'Design scalable cloud architectures',
      'Optimize cloud costs and performance'
    ],
    careers: [
      { title: 'Cloud Engineer', salary: '₦6-11M/year', companies: ['Tech', 'Consulting'] },
      { title: 'DevOps Engineer', salary: '₦7-13M/year', companies: ['Startups', 'Enterprises'] },
      { title: 'Cloud Architect', salary: '₦10-18M/year', companies: ['FAANG', 'Enterprises'] },
      { title: 'Site Reliability Engineer', salary: '₦8-15M/year', companies: ['Tech Giants'] }
    ],
    jobPortals: ['LinkedIn', 'AWS Jobs', 'DevOps Jobs', 'Cloud Careers', 'Kube Careers'],
    portfolioSetup: [
      'Deploy projects on AWS/Azure/GCP',
      'Create infrastructure as code with Terraform',
      'Build CI/CD pipelines with GitHub Actions',
      'Document architecture diagrams',
      'Earn cloud certifications'
    ]
  },
  {
    id: 9,
    name: 'Database Management',
    icon: Database,
    color: 'yellow',
    badgeColor: 'from-yellow-500 to-amber-500',
    gradient: 'from-yellow-500/20 to-amber-500/20',
    borderColor: 'border-yellow-500/30',
    textColor: 'text-yellow-600',
    description: 'Master database design, administration, and optimization for modern applications.',
    longDescription: 'Learn SQL, NoSQL, database design, performance tuning, and data modeling.',
    programs: [
      { name: 'NOVA PRIME', duration: '2 months', projects: '5 live Projects', level: 'Beginner' },
      { name: 'AXIS IGNITE', duration: '5 months', projects: '20+ schemas', level: 'Intermediate' },
      { name: 'QUANTA ELITE', duration: '8 months', projects: '50+ schemas', level: 'Advanced' }
    ],
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Database Design', 'Query Optimization', 'Data Modeling'],
    outcomes: [
      'Design efficient database schemas',
      'Write complex optimized queries',
      'Manage and maintain databases',
      'Implement data security and backups'
    ],
    careers: [
      { title: 'Database Administrator', salary: '₦5-9M/year', companies: ['Enterprises', 'Banks'] },
      { title: 'Data Engineer', salary: '₦7-13M/year', companies: ['Tech', 'Data Companies'] },
      { title: 'Database Developer', salary: '₦5-10M/year', companies: ['Software Houses'] },
      { title: 'Data Architect', salary: '₦9-16M/year', companies: ['Large Enterprises'] }
    ],
    jobPortals: ['LinkedIn', 'DBA Jobs', 'Data Engineering Jobs', 'Indeed', 'Stack Overflow'],
    portfolioSetup: [
      'Showcase database designs on GitHub',
      'Build sample databases for different domains',
      'Write complex queries and optimization examples',
      'Create data models for real-world scenarios',
      'Document database architectures'
    ]
  }
]

// FAQ data
const faqs = [
  {
    question: 'How do I choose the right course for me?',
    answer: 'Consider your interests, current skills, and career goals. Beginners should start with NOVA PRIME programs. If you have some experience, AXIS IGNITE offers deeper learning. For expert-level mastery, QUANTA ELITE prepares you for leadership roles.'
  },
  {
    question: 'Do you offer job placement assistance?',
    answer: 'Yes! We provide career coaching, resume reviews, interview preparation, and access to our exclusive job board with partner companies. AXIS IGNITE and QUANTA ELITE programs include enhanced career support.'
  },
  {
    question: 'How do I build a portfolio after completing a course?',
    answer: 'Each course includes portfolio-building projects. We guide you on showcasing your work on platforms like GitHub, Behance, Tableau Public, or your personal website. Our career coaches help you present your projects effectively.'
  },
  {
    question: 'Where can I find jobs after completing the program?',
    answer: 'Graduates find opportunities on LinkedIn, Indeed, Glassdoor, and specialized job boards for each field. We also have partnerships with hiring companies and an internal job board for graduates.'
  },
  {
    question: 'What salary can I expect after completing a course?',
    answer: 'Salaries vary by role, location, and experience. Entry-level positions (NOVA PRIME) typically start at ₦3-5M/year. Mid-level roles (AXIS IGNITE) range from ₦5-8M/year. Senior/Expert roles (QUANTA ELITE) can earn ₦8-15M+/year.'
  },
  {
    question: 'Do I need prior experience to enroll?',
    answer: 'No. NOVA PRIME programs are designed for beginners with no prior experience. AXIS IGNITE and QUANTA ELITE build upon skills from earlier levels or equivalent experience.'
  },
  {
    question: 'How long does it take to complete each program?',
    answer: 'NOVA PRIME: 2-3 months, AXIS IGNITE: 4-6 months, QUANTA ELITE: 7-12 months. All programs are flexible with self-paced learning options.'
  }
]

export default function AllCoursesPage() {
  const [openCourse, setOpenCourse] = useState<number | null>(null)
  const [openFaqs, setOpenFaqs] = useState<number[]>([])

  const toggleCourse = (courseId: number) => {
    setOpenCourse(openCourse === courseId ? null : courseId)
  }

  const toggleFaq = (index: number) => {
    setOpenFaqs(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/50 to-white">
      {/* HERO SECTION WITH IMAGE */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src="pics/200.jpg" 
            alt="Students learning" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/90 via-yellow-800/85 to-amber-900/90"></div>
        </div>
        
        {/* Animated Decorative Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-10" 
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="text-left">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-amber-400 text-white text-sm font-medium px-4 py-2 rounded-full mb-6 shadow-lg shadow-yellow-500/30">
                {/* <Sparkles className="w-4 h-4" /> */}
                Explore All Programs
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
                Choose Your{' '}
                <span className="bg-gradient-to-r from-yellow-300 to-amber-300 bg-clip-text text-transparent">
                  Learning Path
                </span>
              </h1>
              
              <p className="text-xl text-gray-200 max-w-3xl leading-relaxed mb-8">
                Discover our comprehensive courses designed to transform your career. 
                Each program includes hands-on projects, career support, and portfolio development.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <a href="#courses">
                  <button className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-amber-400 text-white font-semibold rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-3 group">
                    <BookOpen className="w-5 h-5" />
                    Browse Courses
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </a>
                <a href="contacts">
                  <button className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-white/30 transition-all duration-300 flex items-center gap-3 border border-white/30">
                    <Calendar className="w-5 h-5" />
                    Schedule Consultation
                  </button>
                </a>
              </div>

              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20">
                    <Award className="w-6 h-6 text-yellow-300" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">1675+</div>
                    <div className="text-sm text-gray-300">Graduates</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20">
                    <Briefcase className="w-6 h-6 text-yellow-300" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">34+</div>
                    <div className="text-sm text-gray-300">Hiring Partners</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20">
                    <Users className="w-6 h-6 text-yellow-300" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">23+</div>
                    <div className="text-sm text-gray-300">Expert Instructors</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Image/Illustration */}
            <div className="relative hidden lg:block">
              <div className="relative">
                {/* Main Image */}
                <img 
                  src="pics/201.jpg" 
                  alt="Students learning online" 
                  className="rounded-2xl shadow-2xl border-4 border-white/20"
                />
                
                {/* Floating Stats Card 1 */}
                <div className="absolute -left-8 top-1/4 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-xl animate-bounce" style={{ animationDuration: '3s' }}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-amber-400 rounded-lg flex items-center justify-center">
                      <GraduationCap className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">Live Projects</div>
                      <div className="text-xs text-gray-600">Hands-on experience</div>
                    </div>
                  </div>
                </div>

                {/* Floating Stats Card 2 */}
                <div className="absolute -right-8 bottom-1/4 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-xl animate-bounce" style={{ animationDuration: '4s' }}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-amber-400 rounded-lg flex items-center justify-center">
                      <Award className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">Certification</div>
                      <div className="text-xs text-gray-600">Industry recognized</div>
                    </div>
                  </div>
                </div>

                {/* Floating Stats Card 3 */}
                <div className="absolute left-1/2 -bottom-6 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-xl animate-bounce" style={{ animationDuration: '3.5s' }}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-amber-400 rounded-lg flex items-center justify-center">
                      <Target className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">Job Placement</div>
                      <div className="text-xs text-gray-600">90% success rate</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COURSES SECTION - MODERN ACCORDION */}
      <section id="courses" className="py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="space-y-4">
            {allCourses.map((course) => {
              const Icon = course.icon
              const isOpen = openCourse === course.id
              
              return (
                <div 
                  key={course.id} 
                  className={`group rounded-2xl overflow-hidden transition-all duration-300 ${
                    isOpen 
                      ? 'bg-white shadow-xl border-2 border-yellow-400' 
                      : 'bg-white/80 backdrop-blur-sm border border-gray-200 hover:border-yellow-300 hover:shadow-lg'
                  }`}
                >
                  <button
                    onClick={() => toggleCourse(course.id)}
                    className="w-full flex items-center justify-between p-6 lg:p-8 hover:bg-gradient-to-r hover:from-yellow-50/50 hover:to-amber-50/50 transition-all"
                  >
                    <div className="flex items-center gap-5">
                      <div className={`relative w-14 h-14 bg-gradient-to-br ${course.badgeColor} rounded-2xl flex items-center justify-center shadow-lg shadow-yellow-200/50 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="text-left">
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">{course.name}</h3>
                        <p className="text-gray-600">{course.description}</p>
                        
                        {/* Program Level Tags */}
                        <div className="flex flex-wrap gap-2 mt-3">
                          {course.programs.map((program, idx) => (
                            <span 
                              key={idx} 
                              className={`text-xs px-3 py-1 rounded-full font-medium ${
                                program.level === 'Beginner' ? 'bg-green-100 text-green-700' :
                                program.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                                'bg-red-100 text-red-700'
                              }`}
                            >
                              {program.name} • {program.level}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="hidden md:flex items-center gap-2 text-sm text-gray-500">
                        <Clock className="w-4 h-4" />
                        <span>{course.programs[0].duration}</span>
                      </div>
                      <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${course.badgeColor} flex items-center justify-center transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                        <ChevronDown className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </button>
                  
                  {isOpen && (
                    <div className="border-t border-gray-200 bg-gray-50/50">
                      <div className="p-6 lg:p-8">
                        {/* Quick Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                          <div className="bg-white rounded-xl p-4 border border-gray-200">
                            <div className="text-2xl font-bold text-gray-900 mb-1">{course.programs.length}</div>
                            <div className="text-sm text-gray-600">Program Tiers</div>
                          </div>
                          <div className="bg-white rounded-xl p-4 border border-gray-200">
                            <div className="text-2xl font-bold text-gray-900 mb-1">{course.skills.length}+</div>
                            <div className="text-sm text-gray-600">Core Skills</div>
                          </div>
                          <div className="bg-white rounded-xl p-4 border border-gray-200">
                            <div className="text-2xl font-bold text-gray-900 mb-1">{course.careers.length}</div>
                            <div className="text-sm text-gray-600">Career Paths</div>
                          </div>
                          <div className="bg-white rounded-xl p-4 border border-gray-200">
                            <div className="text-2xl font-bold text-gray-900 mb-1">{course.programs[0].projects}</div>
                            <div className="text-sm text-gray-600">Hands-on Projects</div>
                          </div>
                        </div>

                        {/* Main Content Grid */}
                        <div className="grid lg:grid-cols-3 gap-6">
                          {/* Left Column - Programs */}
                          <div className="space-y-4">
                            <div className="bg-white rounded-xl p-5 border border-gray-200">
                              <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                <GraduationCap className="w-5 h-5 text-yellow-600" />
                                Program Tracks
                              </h4>
                              <div className="space-y-3">
                                {course.programs.map((program, idx) => (
                                  <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                    <div>
                                      <div className="font-medium text-gray-900">{program.name}</div>
                                      <div className="text-xs text-gray-500 mt-1">{program.projects}</div>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm">
                                      <Clock className="w-3 h-3 text-gray-400" />
                                      <span className="text-gray-600">{program.duration}</span>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div className="bg-white rounded-xl p-5 border border-gray-200">
                              <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                <Zap className="w-5 h-5 text-yellow-600" />
                                Skills You'll Master
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {course.skills.map((skill, idx) => (
                                  <span key={idx} className="px-3 py-1.5 bg-gradient-to-r from-yellow-50 to-amber-50 text-yellow-700 text-sm rounded-lg border border-yellow-200">
                                    {skill}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* Middle Column - Outcomes & Careers */}
                          <div className="space-y-4">
                            <div className="bg-white rounded-xl p-5 border border-gray-200">
                              <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                <Target className="w-5 h-5 text-yellow-600" />
                                Learning Outcomes
                              </h4>
                              <ul className="space-y-3">
                                {course.outcomes.map((outcome, idx) => (
                                  <li key={idx} className="flex items-start gap-3">
                                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-yellow-400 to-amber-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                                      <Check className="w-3 h-3 text-white" />
                                    </div>
                                    <span className="text-sm text-gray-700">{outcome}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className="bg-white rounded-xl p-5 border border-gray-200">
                              <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                <Briefcase className="w-5 h-5 text-yellow-600" />
                                Career Opportunities
                              </h4>
                              <div className="space-y-4">
                                {course.careers.map((career, idx) => (
                                  <div key={idx} className="border-b border-gray-100 last:border-0 pb-3 last:pb-0">
                                    <div className="flex items-center justify-between mb-2">
                                      <span className="font-medium text-gray-900">{career.title}</span>
                                      <span className="text-sm font-semibold text-yellow-600">{career.salary}</span>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                      {career.companies.map((company, cIdx) => (
                                        <span key={cIdx} className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded">
                                          {company}
                                        </span>
                                      ))}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* Right Column - Job Portals & Portfolio */}
                          <div className="space-y-4">
                            <div className="bg-white rounded-xl p-5 border border-gray-200">
                              <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                <Globe className="w-5 h-5 text-yellow-600" />
                                Where to Find Jobs
                              </h4>
                              <div className="grid grid-cols-2 gap-2">
                                {course.jobPortals.map((portal, idx) => (
                                  <div key={idx} className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                                    <ExternalLink className="w-3 h-3 text-yellow-600 flex-shrink-0" />
                                    <span className="text-xs text-gray-700 truncate">{portal}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div className="bg-white rounded-xl p-5 border border-gray-200">
                              <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                <Rocket className="w-5 h-5 text-yellow-600" />
                                Portfolio Building
                              </h4>
                              <div className="space-y-3">
                                {course.portfolioSetup.map((step, idx) => (
                                  <div key={idx} className="flex items-start gap-3">
                                    <div className="w-5 h-5 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center flex-shrink-0 text-xs font-bold">
                                      {idx + 1}
                                    </div>
                                    <span className="text-sm text-gray-700">{step}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* CTA Button */}
                        <div className="mt-8 flex justify-center">
                          <a href="education">
                            <button className="px-10 py-4 bg-gradient-to-r from-yellow-500 to-amber-500 text-white font-semibold rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-3 group">
                              <GraduationCap className="w-5 h-5" />
                              Enroll in {course.name}
                              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* PORTFOLIO BUILDING GUIDE - MODERN CARDS */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-amber-400 text-white text-sm font-medium px-4 py-2 rounded-full mb-6 shadow-lg">
              <Rocket className="w-4 h-4" />
              Portfolio Building Guide
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Build a{' '}
              <span className="bg-gradient-to-r from-yellow-500 to-amber-500 bg-clip-text text-transparent">
                Standout Portfolio
              </span>
            </h2>
            
            <p className="text-xl text-gray-600">
              A strong portfolio is your ticket to landing your dream job. Follow these steps to create one that impresses employers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: 1,
                title: 'Choose Your Platform',
                description: 'Select the right platform for your field: GitHub (developers), Behance (designers), Tableau Public (data analysts), or your own website.',
                icon: Globe,
                color: 'from-yellow-400 to-amber-400'
              },
              {
                step: 2,
                title: 'Build Real Projects',
                description: 'Complete 3-5 substantial projects that demonstrate your skills. Focus on quality over quantity.',
                icon: Code,
                color: 'from-yellow-500 to-amber-500'
              },
              {
                step: 3,
                title: 'Document Everything',
                description: 'Include project descriptions, your process, challenges faced, and solutions. Show your thinking.',
                icon: FileText,
                color: 'from-yellow-600 to-amber-600'
              },
              {
                step: 4,
                title: 'Showcase Results',
                description: 'Highlight outcomes and impact. Use metrics, testimonials, or case studies to prove your value.',
                icon: TrendingUp,
                color: 'from-yellow-700 to-amber-700'
              }
            ].map((item) => {
              const Icon = item.icon
              return (
                <div key={item.step} className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity`} />
                  
                  <div className={`w-14 h-14 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center text-white text-2xl font-bold mb-6 shadow-lg`}>
                    {item.step}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  
                  <div className="mt-6 flex items-center text-sm text-yellow-600 font-medium">
                    Learn more
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* JOB SEARCH RESOURCES - MODERN GRID */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-amber-400 text-white text-sm font-medium px-4 py-2 rounded-full mb-6 shadow-lg">
              <Briefcase className="w-4 h-4" />
              Job Search Resources
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Where to Find{' '}
              <span className="bg-gradient-to-r from-yellow-500 to-amber-500 bg-clip-text text-transparent">
                Tech Jobs
              </span>
            </h2>
            
            <p className="text-xl text-gray-600">
              Top platforms and resources to find your next opportunity
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'LinkedIn', url: 'linkedin.com', icon: Linkedin, type: 'Professional Network', color: 'from-blue-500 to-blue-600' },
              { name: 'Indeed', url: 'indeed.com', icon: Globe, type: 'Job Board', color: 'from-blue-600 to-blue-700' },
              { name: 'Stack Overflow', url: 'stackoverflow.com/jobs', icon: Code, type: 'Developer Jobs', color: 'from-orange-500 to-orange-600' },
              { name: 'Glassdoor', url: 'glassdoor.com', icon: Award, type: 'Company Reviews', color: 'from-green-500 to-green-600' },
              { name: 'AngelList', url: 'angellist.com', icon: Rocket, type: 'Startup Jobs', color: 'from-purple-500 to-purple-600' },
              { name: 'Remote OK', url: 'remoteok.com', icon: Globe, type: 'Remote Jobs', color: 'from-teal-500 to-teal-600' },
              { name: 'Wellfound', url: 'wellfound.com', icon: Target, type: 'Tech Startups', color: 'from-red-500 to-red-600' },
              { name: 'Built In', url: 'builtin.com', icon: Building2, type: 'Tech Hubs', color: 'from-indigo-500 to-indigo-600' }
            ].map((site, i) => {
              const Icon = site.icon
              return (
                <div key={i} className="group relative bg-white rounded-xl p-6 border-2 border-transparent hover:border-yellow-400 shadow-md hover:shadow-xl transition-all duration-300">
                  <div className={`absolute inset-0 bg-gradient-to-r ${site.color} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity`} />
                  
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${site.color} rounded-xl flex items-center justify-center shadow-lg`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <ExternalLink className="w-5 h-5 text-gray-300 group-hover:text-yellow-500 transition-colors" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{site.name}</h3>
                  <p className="text-sm text-gray-500 mb-3">{site.type}</p>
                  <p className="text-sm text-yellow-600 font-medium">{site.url}</p>
                </div>
              )
            })}
          </div>

          <div className="mt-12 p-8 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-2xl text-white shadow-xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Access Our Exclusive Job Board</h3>
                  <p className="text-yellow-100">Get access to job openings from our 300+ partner companies.</p>
                </div>
              </div>
              <button className="px-8 py-4 bg-white text-yellow-600 font-semibold rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300 whitespace-nowrap">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION - MODERN ACCORDION */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-amber-50">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-amber-400 text-white text-sm font-medium px-4 py-2 rounded-full mb-6 shadow-lg">
              <MessageSquare className="w-4 h-4" />
              Got Questions?
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked{' '}
              <span className="bg-gradient-to-r from-yellow-500 to-amber-500 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="group bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <p className="text-lg font-semibold text-gray-900 group-hover:text-yellow-600 transition-colors pr-8">
                    {faq.question}
                  </p>
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-r from-yellow-400 to-amber-400 flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${openFaqs.includes(index) ? 'rotate-180' : ''}`}>
                    <ChevronDown className="w-4 h-4 text-white" />
                  </div>
                </button>
                
                {openFaqs.includes(index) && (
                  <div className="px-6 pb-6 pt-2 border-t border-gray-100">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION - MODERN GRADIENT */}
      <section className="py-20 bg-gradient-to-r from-yellow-500 to-amber-500 text-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Start Your Journey?</h2>
              <p className="text-xl text-yellow-100">Choose your course and begin building your future today.</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a href="education">
                <button className="px-8 py-4 bg-white text-yellow-600 font-semibold rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-3 group">
                  <BookOpen className="w-5 h-5" />
                  Browse All Courses
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </a>
              <a href="contacts">
                <button className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-white/30 transition-all duration-300 flex items-center gap-3 border border-white/30">
                  <Calendar className="w-5 h-5" />
                  Schedule Consultation
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}