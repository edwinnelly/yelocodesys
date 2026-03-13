"use client";

import { useState } from 'react'
import { 
  Code, Palette, PieChart, Database, TrendingUp, Cpu, Lock, Cloud,
  Check, X, Clock, Users, Award, Calendar, BookOpen, Rocket,
  Star, Briefcase, Target, Zap, Globe, Mail, Phone, GraduationCap,
  ChevronDown, ChevronRight, MessageSquare, ExternalLink, Github,
  Linkedin, Twitter, Figma, PenTool, BarChart, LineChart, Shield,
  Smartphone, Monitor, Laptop, Server, ExternalLink as LinkIcon,
  Download, Upload, Copy, Trash2, Edit, Filter, RefreshCw, Eye, EyeOff,
  ChevronUp, ChevronLeft, Menu, X as XIcon, Home, ShoppingCart,
  Newspaper, Youtube, Camera, Music, Gamepad, Plane, Car, Heart,
  Building2, Map, Sun, Moon, Activity, Wallet, Trophy, Gift, Truck, Dog,
  Leaf, Bike, Ticket, GlassWater, Shirt, Watch, Bot, Network,
  BarChart3, LineChart as LineChartIcon, PieChart as PieChartIcon,
  Box, Binary, Cpu as CpuIcon, Sparkles, Megaphone,FileText 
} from 'lucide-react'

// All courses data with detailed information
const allCourses = [
  {
    id: 1,
    name: 'Web Development',
    icon: Code,
    color: 'yellow',
    badgeColor: 'from-yellow-600 to-yellow-400',
    description: 'Master frontend and backend development to build modern, responsive websites and web applications.',
    longDescription: 'Learn HTML, CSS, JavaScript, React, Node.js, and databases. Build full-stack applications from scratch.',
    programs: [
      { name: 'NOVA PRIME', price: '₦250,000', duration: '3 months', projects: '15 Live Projects' },
      { name: 'AXIS IGNITE', price: '₦550,000', duration: '5 months', projects: '40 Live Projects' },
      { name: 'QUANTA ELITE', price: '₦850,000', duration: '7 months', projects: '60 Live Projects' }
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
    badgeColor: 'from-yellow-600 to-yellow-400',
    description: 'Create stunning visuals and intuitive user experiences for web and mobile applications.',
    longDescription: 'Master design tools, user research, wireframing, prototyping, and visual design principles.',
    programs: [
      { name: 'NOVA PRIME', price: '₦120,000', duration: '2 months', projects: '10 Live Projects' },
      { name: 'AXIS IGNITE', price: '₦250,000', duration: '4 months', projects: '20 Live Projects' }
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
    badgeColor: 'from-yellow-600 to-yellow-400',
    description: 'Transform raw data into actionable insights for business decision-making.',
    longDescription: 'Master Excel, SQL, Python, Pandas, Tableau, and Power BI for comprehensive data analysis.',
    programs: [
      { name: 'NOVA PRIME', price: '₦200,000', duration: '3 months', projects: '5 Live Projects' },
      { name: 'AXIS IGNITE', price: '₦450,000', duration: '5 months', projects: '20 Live Projects' },
      { name: 'QUANTA ELITE', price: '₦850,000', duration: '7 months', projects: '30 Live Projects' }
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
    badgeColor: 'from-yellow-600 to-yellow-400',
    description: 'Master Python programming for web development, automation, data science, and more.',
    longDescription: 'Learn Python fundamentals, OOP, web frameworks, data analysis, and machine learning basics.',
    programs: [
      { name: 'NOVA PRIME', price: '₦200,000', duration: '2 months', projects: '10 Live Projects' },
      { name: 'AXIS IGNITE', price: '₦550,000', duration: '4 months', projects: '20 Live Projects' },
      { name: 'QUANTA ELITE', price: '₦900,000', duration: '8 months', projects: '30 Live Projects' }
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
    badgeColor: 'from-yellow-600 to-yellow-400',
    description: 'Master digital marketing strategies with AI automation tools for business growth.',
    longDescription: 'Learn SEO, social media, email marketing, paid ads, content marketing, and analytics.',
    programs: [
      { name: 'NOVA PRIME', price: '₦180,000', duration: '2 months', projects: '5 live campaigns' },
      { name: 'AXIS IGNITE', price: '₦350,000', duration: '3 months', projects: '15 client projects' }
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
    badgeColor: 'from-yellow-600 to-yellow-400',
    description: 'Build cross-platform and native mobile applications for iOS and Android.',
    longDescription: 'Master Flutter, React Native, and native development with Kotlin/Swift.',
    programs: [
      { name: 'NOVA PRIME', price: '₦420,000', duration: '3 months', projects: '6 basic apps' },
      { name: 'AXIS IGNITE', price: '₦1.4M', duration: '10 months', projects: '25+ apps' }
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
    badgeColor: 'from-yellow-600 to-yellow-400',
    description: 'Protect systems, networks, and data from cyber threats and attacks.',
    longDescription: 'Master network security, ethical hacking, penetration testing, and security operations.',
    programs: [
      { name: 'NOVA PRIME', price: '₦250,000', duration: '3 months', projects: '50+ environments' },
      { name: 'AXIS IGNITE', price: '₦550,000', duration: '5 months', projects: '100+ simulations' },
      { name: 'QUANTA ELITE', price: '₦1.5M', duration: '12 months', projects: '200+ pentests' }
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
    badgeColor: 'from-yellow-600 to-yellow-400',
    description: 'Master cloud platforms for scalable, reliable, and cost-effective infrastructure.',
    longDescription: 'Learn AWS, Azure, Google Cloud, DevOps practices, and cloud architecture.',
    programs: [
      { name: 'NOVA PRIME', price: '₦300,000', duration: '3 months', projects: '50+ environments' },
      { name: 'AXIS IGNITE', price: '₦600,000', duration: '6 months', projects: '15 deployments' },
      { name: 'QUANTA ELITE', price: '₦950,000', duration: '8 months', projects: '30+ builds' }
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
    badgeColor: 'from-yellow-600 to-yellow-400',
    description: 'Master database design, administration, and optimization for modern applications.',
    longDescription: 'Learn SQL, NoSQL, database design, performance tuning, and data modeling.',
    programs: [
      { name: 'NOVA PRIME', price: '₦180,000', duration: '2 months', projects: '5 live Projects' },
      { name: 'AXIS IGNITE', price: '₦400,000', duration: '5 months', projects: '20+ schemas' },
      { name: 'QUANTA ELITE', price: '₦950,000', duration: '8 months', projects: '50+ schemas' }
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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      
      {/* HERO SECTION */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-br from-gray-900 to-gray-950 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        <div className="absolute top-20 left-10 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-300/20 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium px-4 py-2 rounded-full mb-6">
              <BookOpen className="w-4 h-4" />
              Explore All Programs
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Choose Your{' '}
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">
                Learning Path
              </span>
            </h1>
            
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Discover our comprehensive courses designed to transform your career. 
              Each program includes hands-on projects, career support, and portfolio development.
            </p>
          </div>
        </div>
      </section>

      {/* ALL COURSES SECTION */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="space-y-4">
            {allCourses.map((course) => {
              const Icon = course.icon
              const isOpen = openCourse === course.id
              
              return (
                <div key={course.id} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                  <button
                    onClick={() => toggleCourse(course.id)}
                    className="w-full flex items-center justify-between p-6 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${course.badgeColor} rounded-xl flex items-center justify-center`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-left">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{course.name}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{course.description}</p>
                      </div>
                    </div>
                    <ChevronDown className={`w-6 h-6 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {isOpen && (
                    <div className="p-6 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
                      {/* Course Details Grid */}
                      <div className="grid lg:grid-cols-3 gap-6">
                        {/* Left Column - Basic Info */}
                        <div className="lg:col-span-1 space-y-4">
                          <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                              <GraduationCap className="w-4 h-4 text-yellow-600" />
                              Programs Available
                            </h4>
                            <div className="space-y-2">
                              {course.programs.map((program, idx) => (
                                <div key={idx} className="flex items-center justify-between text-sm">
                                  <span className="font-medium text-gray-700 dark:text-gray-300">{program.name}</span>
                                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                                    <Clock className="w-3 h-3" />
                                    <span>{program.duration}</span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                              <Zap className="w-4 h-4 text-yellow-600" />
                              Skills You'll Learn
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {course.skills.map((skill, idx) => (
                                <span key={idx} className="text-xs px-2 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 rounded-full">
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Middle Column - Outcomes & Careers */}
                        <div className="lg:col-span-1 space-y-4">
                          <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                              <Target className="w-4 h-4 text-yellow-600" />
                              What You'll Achieve
                            </h4>
                            <ul className="space-y-2">
                              {course.outcomes.map((outcome, idx) => (
                                <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                                  <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                                  <span>{outcome}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                              <Briefcase className="w-4 h-4 text-yellow-600" />
                              Career Opportunities
                            </h4>
                            <div className="space-y-3">
                              {course.careers.map((career, idx) => (
                                <div key={idx} className="border-b border-gray-100 dark:border-gray-700 last:border-0 pb-2 last:pb-0">
                                  <div className="flex items-center justify-between mb-1">
                                    <span className="font-medium text-gray-900 dark:text-white text-sm">{career.title}</span>
                                    <span className="text-xs px-2 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full">
                                      {career.salary}
                                    </span>
                                  </div>
                                  <p className="text-xs text-gray-500 dark:text-gray-400">
                                    {career.companies.join(' • ')}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Right Column - Job Portals & Portfolio */}
                        <div className="lg:col-span-1 space-y-4">
                          <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                              <Globe className="w-4 h-4 text-yellow-600" />
                              Where to Find Jobs
                            </h4>
                            <div className="space-y-2">
                              {course.jobPortals.map((portal, idx) => (
                                <div key={idx} className="flex items-center gap-2 text-sm">
                                  <ExternalLink className="w-3 h-3 text-yellow-600" />
                                  <span className="text-gray-600 dark:text-gray-400">{portal}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                              <Rocket className="w-4 h-4 text-yellow-600" />
                              How to Build Your Portfolio
                            </h4>
                            <ul className="space-y-2">
                              {course.portfolioSetup.map((step, idx) => (
                                <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                                  <span className="text-yellow-600 font-bold mr-1">{idx + 1}.</span>
                                  <span>{step}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Program Tiers Summary */}
                      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                        {course.programs.map((program, idx) => (
                          <div key={idx} className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                            <div className="flex items-center justify-between mb-2">
                              <span className={`px-2 py-1 bg-gradient-to-r ${course.badgeColor} text-white text-xs font-semibold rounded-full`}>
                                {program.name}
                              </span>
                              <span className="text-xs text-gray-500 dark:text-gray-400">{program.projects}</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-gray-600 dark:text-gray-400">{program.duration}</span>
                              <span className="text-lg font-bold text-gray-900 dark:text-white">{program.price}</span>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <div className="mt-6 flex justify-center">
                        <button className="px-8 py-3 bg-gradient-to-r from-yellow-600 to-yellow-400 text-white font-medium rounded-lg hover:shadow-lg transition-all flex items-center gap-2">
                          <GraduationCap className="w-5 h-5" />
                          Enroll in {course.name}
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* GENERAL PORTFOLIO SETUP GUIDE */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 text-sm font-medium px-4 py-2 rounded-full mb-6">
              <Rocket className="w-4 h-4" />
              Portfolio Building Guide
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              How to Build a <span className="text-yellow-600 dark:text-yellow-400">Standout Portfolio</span>
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-400">
              A strong portfolio is your ticket to landing your dream job. Follow these steps to create one that impresses employers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: 1,
                title: 'Choose Your Platform',
                description: 'Select the right platform for your field: GitHub (developers), Behance (designers), Tableau Public (data analysts), or your own website.',
                icon: Globe
              },
              {
                step: 2,
                title: 'Build Real Projects',
                description: 'Complete 3-5 substantial projects that demonstrate your skills. Focus on quality over quantity.',
                icon: Code
              },
              {
                step: 3,
                title: 'Document Everything',
                description: 'Include project descriptions, your process, challenges faced, and solutions. Show your thinking.',
                icon: FileText
              },
              {
                step: 4,
                title: 'Showcase Results',
                description: 'Highlight outcomes and impact. Use metrics, testimonials, or case studies to prove your value.',
                icon: TrendingUp
              }
            ].map((item) => {
              const Icon = item.icon
              return (
                <div key={item.step} className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                  <div className="w-10 h-10 bg-yellow-600 rounded-lg flex items-center justify-center text-white font-bold text-lg mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* JOB SEARCH RESOURCES */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 text-sm font-medium px-4 py-2 rounded-full mb-6">
              <Briefcase className="w-4 h-4" />
              Job Search Resources
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Where to Find <span className="text-yellow-600 dark:text-yellow-400">Tech Jobs</span>
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Top platforms and resources to find your next opportunity
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: 'LinkedIn', url: 'linkedin.com', icon: Linkedin, type: 'Professional Network' },
              { name: 'Indeed', url: 'indeed.com', icon: Globe, type: 'Job Board' },
              { name: 'Stack Overflow', url: 'stackoverflow.com/jobs', icon: Code, type: 'Developer Jobs' },
              { name: 'Glassdoor', url: 'glassdoor.com', icon: Award, type: 'Company Reviews' },
              { name: 'AngelList', url: 'angellist.com', icon: Rocket, type: 'Startup Jobs' },
              { name: 'Remote OK', url: 'remoteok.com', icon: Globe, type: 'Remote Jobs' },
              { name: 'Wellfound', url: 'wellfound.com', icon: Target, type: 'Tech Startups' },
              { name: 'Built In', url: 'builtin.com', icon: Building2, type: 'Tech Hubs' }
            ].map((site, i) => {
              const Icon = site.icon
              return (
                <div key={i} className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:shadow-md transition cursor-pointer">
                  <div className="flex items-center gap-3 mb-2">
                    <Icon className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                    <span className="font-semibold text-gray-900 dark:text-white">{site.name}</span>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">{site.type}</p>
                  <p className="text-xs text-yellow-600 dark:text-yellow-400">{site.url}</p>
                </div>
              )
            })}
          </div>

          <div className="mt-8 p-6 bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-xl text-white">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold mb-2">Access Our Exclusive Job Board</h3>
                <p className="text-yellow-100">Get access to job openings from our 300+ partner companies.</p>
              </div>
              <button className="px-6 py-3 bg-white text-yellow-600 font-medium rounded-lg hover:bg-gray-100 transition-colors whitespace-nowrap">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 text-sm font-medium px-4 py-2 rounded-full mb-6">
              <MessageSquare className="w-4 h-4" />
              Got Questions?
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Frequently Asked <span className="text-yellow-600 dark:text-yellow-400">Questions</span>
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden bg-white dark:bg-gray-900">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  <p className="font-medium text-gray-900 dark:text-white">{faq.question}</p>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openFaqs.includes(index) ? 'rotate-180' : ''}`} />
                </button>
                
                {openFaqs.includes(index) && (
                  <div className="px-4 pb-4 pt-0 border-t border-gray-200 dark:border-gray-800">
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 bg-gradient-to-r from-yellow-600 to-yellow-400 text-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h2 className="text-3xl font-bold mb-2">Ready to Start Your Journey?</h2>
              <p className="text-yellow-100">Choose your course and begin building your future today.</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-white text-yellow-600 font-medium rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Browse All Courses
              </button>
              <button className="px-6 py-3 border border-white/30 text-white font-medium rounded-lg hover:bg-white/10 transition-colors flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}