"use client";

import { useState } from 'react'
import { 
  Code, Palette, PieChart, Database, TrendingUp, Cpu, Lock, Cloud,
  Check, X, Clock, Users, Award, Calendar, BookOpen, Rocket,
  Star, Briefcase, Target, Zap, Globe, Mail, Phone, GraduationCap,
  ChevronDown, ChevronRight, MessageSquare 
} from 'lucide-react'

// Tier data for hero section
const tiers = [
  {
    name: 'Foundational Tier',
    title: 'Build essential skills and gain the qualifications for entry-level positions',
    price: '₦180,000 - ₦350,000',
    duration: '2-3 months',
    projects: '5-10 projects',
    color: 'from-yellow-600 to-yellow-600',
    features: [
      'Essential Industry Knowledge',
      'Fundamental Technical Skills',
      'Introduction to Tools & Platforms',
      'Problem-Solving & Critical Thinking Basics',
      'Professional Communication Skills',
      'Career Readiness Workshops',
      'Industry-Specific Certifications (Optional)',
      'Access to Entry-Level Job Opportunities'
    ]
  },
  {
    name: 'Intermediate Tier',
    title: 'Deepen your expertise with more complex tools, technologies, and processes',
    price: '₦400,000 - ₦700,000',
    duration: '4-6 months',
    projects: '15-25 projects',
    color: 'from-yellow-600 to-yellow-600',
    features: [
      'Specialized Knowledge Areas',
      'Real-World Projects & Case Studies',
      'Problem-Solving for Complex Challenges',
      'Professional Collaboration & Teamwork',
      'Industry Certification Preparation',
      'Career Coaching & Mentorship Access',
      'Access to Mid-Level Job Opportunities'
    ]
  },
  {
    name: 'Advanced Tier',
    title: 'Achieve expert-level proficiency for leadership and expert roles',
    price: '₦850,000 - ₦1.5M',
    duration: '7-12 months',
    projects: '30-60 projects',
    color: 'from-yellow-600 to-yellow-600',
    features: [
      'Leadership & Strategic Thinking Development',
      'Complex Problem Solving & Innovation Projects',
      'Expert-Level Certifications & Credentials',
      'Executive Communication & Influence Skills',
      'Mentorship & Networking with Industry Leaders',
      'Career Advancement & High-Paying Role Preparation',
      'Priority Access to Exclusive Job Opportunities'
    ]
  }
]

// Course data organized by categorys
const courseCategories = [
  {
    name: 'Web Development',
    icon: Code,
    color: 'yellow',
    courses: [
      {
        name: 'NOVA PRIME',
        price: '₦250,000',
        duration: '3 months',
        projects: '15 Live Projects',
        description: 'Covering Frontend (Client-Side) Languages, Frontend is a great start',
        popular: false,
        features: [
          'HTML (HyperText Markup Language)',
          'CSS (Cascading Style Sheets)',
          'JavaScript (JS)',
          'JavaScript Frameworks/Libraries',
          'GitHub'
        ]
      },
      {
        name: 'AXIS IGNITE',
        price: '₦550,000',
        duration: '5 months',
        projects: '40 Live Projects',
        description: 'Covering both frontend and backend development, Best value for full-stack',
        popular: true,
        features: [
          'HTML, CSS, JavaScript',
          'JavaScript (Node.js), Python, PHP',
          'SQL (PostgreSQL, MySQL), NoSQL (MongoDB, Firebase)',
          'REST, GraphQL',
          'Bash, YAML, Docker',
          'JavaScript Frameworks/Libraries',
          'GitHub'
        ]
      },
      {
        name: 'QUANTA ELITE',
        price: '₦850,000',
        duration: '7 months',
        projects: '60 Live Projects',
        description: 'Covering both frontend and backend development, Prepares for high-paying roles',
        popular: false,
        features: [
          'HTML, CSS, JavaScript',
          'JavaScript (Node.js), Python, Java, PHP',
          'SQL (PostgreSQL, MySQL), NoSQL (MongoDB, Firebase)',
          'REST, GraphQL',
          'Bash, YAML, Docker',
          'JavaScript Frameworks/Libraries',
          'GitHub'
        ]
      }
    ]
  },
  {
    name: 'Graphics Design / UI-UX Design',
    icon: Palette,
    color: 'yellow',
    courses: [
      {
        name: 'NOVA PRIME',
        price: '₦120,000',
        duration: '2 months',
        projects: '10 Live Projects',
        description: 'Beginners needing graphic design skills (social media, flyers)',
        popular: false,
        features: [
          'Corel Draw',
          'Photoshop',
          'Canva',
          'Basic wireframing, Social media graphics',
          'Solo projects'
        ]
      },
      {
        name: 'AXIS IGNITE',
        price: '₦250,000',
        duration: '4 months',
        projects: '20 Live Projects',
        description: 'Aspiring UI/UX designers (transitioning from graphic design)',
        popular: true,
        features: [
          'Corel Draw',
          'Photoshop',
          'Adobe XD',
          'Figma',
          'Canva',
          'User research, Prototyping',
          'Team projects (Agile)',
          'Solo projects'
        ]
      }
    ]
  },
  {
    name: 'Data Analysis',
    icon: PieChart,
    color: 'yellow',
    courses: [
      {
        name: 'NOVA PRIME',
        price: '₦200,000',
        duration: '3 months',
        projects: '5 Live Projects',
        description: 'Career starters needing basic data skills',
        popular: false,
        features: [
          '10 basic datasets',
          'Excel',
          'Google Sheets',
          'Tableau',
          'Data cleaning',
          'Basic viz'
        ]
      },
      {
        name: 'AXIS IGNITE',
        price: '₦450,000',
        duration: '5 months',
        projects: '20 Live Projects',
        description: 'Professionals transitioning to data roles',
        popular: true,
        features: [
          '20 real-world projects',
          'Python (Pandas)',
          'SQL',
          'Power BI',
          'Statistical analysis',
          'Dashboarding',
          'Job placement assistance'
        ]
      },
      {
        name: 'QUANTA ELITE',
        price: '₦850,000',
        duration: '7 months',
        projects: '30 Live Projects',
        description: 'Analysts aiming for data scientist positions',
        popular: false,
        features: [
          '30+ projects + Capstone',
          'Python',
          'R',
          'SQL',
          'TensorFlow',
          'Machine Learning',
          'Predictive Modeling',
          '1:1 mentorship + LinkedIn optimization'
        ]
      }
    ]
  },
  {
    name: 'Python Program',
    icon: Database,
    color: 'yellow',
    courses: [
      {
        name: 'NOVA PRIME',
        price: '₦200,000',
        duration: '2 months',
        projects: '10 Live Projects',
        description: 'Absolute beginners or Excel users automating tasks',
        popular: false,
        features: [
          '10 mini-projects',
          'Python basics, Jupyter',
          'Syntax, loops, functions',
          'Python Fundamentals',
          'Data cleaning'
        ]
      },
      {
        name: 'AXIS IGNITE',
        price: '₦550,000',
        duration: '4 months',
        projects: '20 Live Projects',
        description: 'Career switchers targeting developer roles',
        popular: true,
        features: [
          '20 real-world apps',
          'Django/Flask',
          'Web dev',
          'automation scripts',
          'SQL',
          'APIs',
          'Job placement assistance'
        ]
      },
      {
        name: 'QUANTA ELITE',
        price: '₦900,000',
        duration: '8 months',
        projects: '30 Live Projects',
        description: 'Developers upskilling to AI/cloud specialties',
        popular: false,
        features: [
          '30+ projects + Capstone',
          'ML (TensorFlow)',
          'AI/ML',
          'Cloud deployment',
          'TensorFlow',
          'Async',
          'AWS',
          '1:1 mentorship + LinkedIn optimization'
        ]
      }
    ]
  },
  {
    name: 'Digital Marketing Program',
    icon: TrendingUp,
    color: 'yellow',
    courses: [
      {
        name: 'NOVA PRIME',
        price: '₦180,000',
        duration: '2 months',
        projects: '5 live campaigns',
        description: 'Focuses on low-budget strategies for small businesses',
        popular: false,
        features: [
          '5 live campaigns',
          'Social Media, SEO basics',
          'Canva, Google Analytics',
          'Digital Marketing Fundamentals',
          'Freelance setup'
        ]
      },
      {
        name: 'AXIS IGNITE',
        price: '₦350,000',
        duration: '3 months',
        projects: '15 client projects',
        description: 'Career switchers targeting developer roles',
        popular: true,
        features: [
          '15 client projects',
          'Paid ads (Meta/Google), Email Marketing',
          'Meta Ads Manager',
          'Google Ads, Microsoft, Meta, Tiktok',
          'Professional Digital Marketer',
          'Job placement assistance'
        ]
      }
    ]
  },
  {
    name: 'Mobile App Development',
    icon: Cpu,
    color: 'yellow',
    courses: [
      {
        name: 'NOVA PRIME',
        price: '₦420,000',
        duration: '3 months',
        projects: '6 basic apps',
        description: 'Those new to programming wanting quick results',
        popular: false,
        features: [
          '6 basic apps',
          'Flutter (Cross-platform)',
          'UI Design, Basic Logic',
          'Firebase',
          'App Developer Certificate',
          'Freelance preparation'
        ]
      },
      {
        name: 'AXIS IGNITE',
        price: '₦1.4M',
        duration: '10 months',
        projects: '25+ apps + App Store publish',
        description: 'Developers aiming for senior/tech lead positions',
        popular: true,
        features: [
          '25+ apps + App Store publish',
          'Flutter + Native (Kotlin/Swift)',
          'API Integration, State Management',
          'Node.js',
          'Firebase',
          'Performance Optimization',
          'Custom Backend (Go/Python)',
          'Native + React Native',
          'Job placement assistance'
        ]
      }
    ]
  },
  {
    name: 'Cybersecurity Program',
    icon: Lock,
    color: 'yellow',
    courses: [
      {
        name: 'NOVA PRIME',
        price: '₦250,000',
        duration: '3 months',
        projects: '50+ virtual environments',
        description: 'Start with CYBER SHIELD',
        popular: false,
        features: [
          '50+ virtual environments',
          'CompTIA Security+',
          'Wireshark',
          'Nmap',
          'Metasploit',
          'Network Security',
          'Entry-level job prep'
        ]
      },
      {
        name: 'AXIS IGNITE',
        price: '₦550,000',
        duration: '5 months',
        projects: '100+ real-world simulations',
        description: 'Jump to SECURITY ANALYST',
        popular: true,
        features: [
          '100+ real-world simulations',
          'CEH',
          'CySA+',
          'Burp Suite',
          'SIEM tools',
          'Threat Intelligence',
          'Job placement assistance'
        ]
      },
      {
        name: 'QUANTA ELITE',
        price: '₦1.5M',
        duration: '12 months',
        projects: '200+ advanced pentests',
        description: 'Direct to ETHICAL HACKER PRO',
        popular: false,
        features: [
          '200+ advanced pentests',
          'OSCP, CISSP',
          'Cobalt Strike',
          'Kali Linux',
          'Red Team Operations',
          'Threat Intelligence',
          'Executive mentorship'
        ]
      }
    ]
  },
  {
    name: 'Database Management',
    icon: Database,
    color: 'yellow',
    courses: [
      {
        name: 'NOVA PRIME',
        price: '₦180,000',
        duration: '2 months',
        projects: '5 live Projects',
        description: 'Excel users wanting automation',
        popular: false,
        features: [
          '35 basic queries',
          '5 live Projects',
          'MySQL',
          'MySQL, phpMyAdmin',
          'Freelance-ready'
        ]
      },
      {
        name: 'AXIS IGNITE',
        price: '₦400,000',
        duration: '5 months',
        projects: '20+ complex schemas',
        description: 'Developers shifting to data roles',
        popular: true,
        features: [
          '30 real-world datasets',
          'PostgreSQL Professional',
          'PostgreSQL, DBeaver',
          'AWS RDS, Google Cloud SQL',
          'Job placement assistance'
        ]
      },
      {
        name: 'QUANTA ELITE',
        price: '₦950,000',
        duration: '8 months',
        projects: '50+ complex schemas',
        description: 'Preparing for FAANG-level interviews',
        popular: false,
        features: [
          '50+ complex schemas',
          'Oracle Certified Master',
          'Oracle, NoSQL, Snowflake',
          'Multi-cloud deployments',
          'CTO mentorship'
        ]
      }
    ]
  },
  {
    name: 'Cloud Computing Program',
    icon: Cloud,
    color: 'yellow',
    courses: [
      {
        name: 'NOVA PRIME',
        price: '₦300,000',
        duration: '3 months',
        projects: '50+ sandbox environments',
        description: 'IT professionals transitioning to cloud',
        popular: false,
        features: [
          '50+ sandbox environments',
          'AWS CCP/Azure Fundamentals',
          'Single-cloud (Choose 1)',
          'Entry-level cloud roles'
        ]
      },
      {
        name: 'AXIS IGNITE',
        price: '₦600,000',
        duration: '6 months',
        projects: '15 real-world deployments',
        description: 'SysAdmins/Devs upskilling for DevOps',
        popular: true,
        features: [
          '15 real-world deployments',
          'AWS SAA/Azure Administrator',
          'Dual-cloud (AWS + Azure)',
          'Mid-level placement'
        ]
      },
      {
        name: 'QUANTA ELITE',
        price: '₦950,000',
        duration: '8 months',
        projects: '30+ production-grade builds',
        description: 'Preparing for FAANG cloud architect roles',
        popular: false,
        features: [
          '30+ production-grade builds',
          'AWS Pro/Azure Architect',
          'AWS + Azure + GCP',
          'Solutions Architect mentorship'
        ]
      }
    ]
  }
]

// FAQ data
const faqs = [
  {
    question: 'Who is this program designed for?',
    answer: 'Our programs are designed for beginners, career changers, and professionals looking to upgrade their skills and target higher-paying roles.'
  },
  {
    question: 'Do I need prior experience to enroll?',
    answer: 'No. The Foundational Tier requires no prior experience. Intermediate and Advanced Tiers build upon the skills learned in earlier levels.'
  },
  {
    question: 'How long does each tier take to complete?',
    answer: 'Duration varies by tier, but most learners complete each level in 4 to 12 weeks with flexible schedules.'
  },
  {
    question: 'Are your programs self-paced or instructor-led?',
    answer: 'We offer both self-paced learning options and instructor-led sessions to suit different learning styles.'
  },
  {
    question: 'Will I receive a certificate upon completion?',
    answer: 'Yes. Participants who complete each tier receive industry-recognized certificates to validate their skills.'
  },
  {
    question: 'Can I skip directly to the Intermediate or Advanced Tier?',
    answer: 'Yes, but only if you can demonstrate equivalent knowledge or pass a skills assessment.'
  },
  {
    question: 'What types of jobs can I apply for after completing the program?',
    answer: 'Depending on the tier, you can apply for entry-level, specialist, or leadership roles in your chosen industry.'
  },
  {
    question: 'Do you offer job placement support?',
    answer: 'Yes. We provide career coaching, job search resources, and access to exclusive job opportunities for all learners.'
  },
  {
    question: 'Are there any payment plans available?',
    answer: 'We offer flexible payment options, including installment plans and discounts for full upfront payment.'
  },
  {
    question: 'What industries do your programs cover?',
    answer: 'Our programs focus on high-demand fields such as technology, business, data science, cybersecurity, and more.'
  },
  {
    question: 'Will I have access to mentors or career advisors?',
    answer: 'Yes. Intermediate and Advanced Tiers include mentorship opportunities and career advisory sessions.'
  },
  {
    question: 'How do I get started?',
    answer: 'Simply sign up on our website, choose your preferred tier, and begin your journey toward higher-paying roles.'
  }
]

export default function PricingPage() {
  const [openCategories, setOpenCategories] = useState<string[]>([])
  const [openFaqs, setOpenFaqs] = useState<number[]>([])

  const toggleCategory = (categoryName: string) => {
    setOpenCategories(prev =>
      prev.includes(categoryName)
        ? prev.filter(name => name !== categoryName)
        : [...prev, categoryName]
    )
  }

  const toggleFaq = (index: number) => {
    setOpenFaqs(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  // Function to get color classes based on color name (now all yellow)
  const getColorClasses = (color: string) => {
    return 'from-yellow-600 to-yellow-400'
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      
      {/* HERO SECTION - Pricing Tiers with Cover Image */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Background Cover Image with Overlay */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("pics/db.jpg")', // Replace with your image path
          }}
        >
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/70" />
          {/* Gradient overlay for visual interest */}
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/30 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium px-4 py-2 rounded-full mb-6">
              {/* <GraduationCap className="w-4 h-4" /> */}
              Learning Paths for Every Level
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Choose Your{' '}
              <span className="text-yellow-400">
                Learning Journey
              </span>
            </h1>
            
            <p className="text-lg text-gray-200 max-w-3xl mx-auto">
              Each level prepares you for progressively higher-paying opportunities. 
              Our structured learning path is designed to do more than build your skills, 
              It propels your career forward.
            </p>
          </div>

          {/* Tiers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tiers.map((tier, index) => (
              <div key={index} className="group relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                {/* Gradient border on hover */}
                <div className={`absolute inset-0 bg-gradient-to-r ${tier.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                
                <div className="p-6">
                  <div className={`inline-block px-4 py-2 bg-gradient-to-r ${tier.color} rounded-full text-white font-semibold text-sm mb-4`}>
                    {tier.name}
                  </div>
                  
                  <h4 className="text-gray-200 text-sm mb-4">{tier.title}</h4>
                  
                  <div className="flex items-center gap-4 mb-4 text-sm">
                    <div className="flex items-center gap-1 text-gray-300">
                      <Clock className="w-4 h-4" />
                      {tier.duration}
                    </div>
                    <div className="flex items-center gap-1 text-gray-300">
                      <Rocket className="w-4 h-4" />
                      {tier.projects}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-white">{tier.price}</span>
                  </div>
                  
                  <button className="w-full mb-6 px-4 py-3 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-colors">
                    Get Started
                  </button>
                  
                  <div className="space-y-2">
                    {tier.features.slice(0, 5).map((feature, i) => (
                      <p key={i} className="text-gray-200 text-sm flex items-start gap-2">
                        <Check className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </p>
                    ))}
                    {tier.features.length > 5 && (
                      <p className="text-gray-300 text-sm mt-2">+{tier.features.length - 5} more features</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center max-w-3xl mx-auto mt-12 text-gray-200">
            <p>
              The Advanced Tier equips you with the expertise, confidence, 
              and recognition to thrive in top-tier roles and command higher earning potential.
            </p>
          </div>
        </div>
      </section>

      {/* SECOND SECTION - Value Proposition */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 text-sm font-medium px-4 py-2 rounded-full mb-6">
                <Star className="w-4 h-4" />
                Why Choose Us
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                At Yelocode Systems,{' '}
                <span className="bg-gradient-to-r from-yellow-600 to-yellow-400 bg-clip-text text-transparent">
                  your success is our priority
                </span>
              </h2>
              
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                Equip yourself with the skills that employers demand, 
                through courses that focus on practical outcomes and real-world application.
              </p>
              
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                Our expert trainers offer 1-on-1 mentoring and support to ensure you get 
                the most out of your course and reach your goals.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Users, value: '2000+', label: 'Students Trained' },
                  { icon: Award, value: '92%', label: 'Placement Rate' },
                  { icon: Briefcase, value: '40+', label: 'Partner Companies' },
                  { icon: Star, value: '4.8', label: 'Student Rating' }
                ].map((stat, i) => {
                  const Icon = stat.icon
                  return (
                    <div key={i} className="text-center">
                      <Icon className="w-6 h-6 text-yellow-600 dark:text-yellow-400 mx-auto mb-2" />
                      <div className="text-xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
                    </div>
                  )
                })}
              </div>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">What Our Students Say</h3>
              
              <div className="space-y-6">
                {[
                  {
                    quote: "The structured learning path helped me go from beginner to professional in just 6 months. I'm now working as a full-stack developer.",
                    name: "Michael Obi",
                    role: "Web Development Graduate"
                  },
                  {
                    quote: "The mentorship and career support were incredible. They helped me prepare for interviews and land my dream job.",
                    name: "Chioma Adebayo",
                    role: "Data Analyst"
                  }
                ].map((testimonial, i) => (
                  <div key={i} className="border-l-4 border-yellow-600 pl-4">
                    <p className="text-gray-600 dark:text-gray-400 italic mb-2">"{testimonial.quote}"</p>
                    <p className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COURSES - Price List */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 text-sm font-medium px-4 py-2 rounded-full mb-6">
              <BookOpen className="w-4 h-4" />
              Course Catalog
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Courses <span className="bg-gradient-to-r from-yellow-600 to-yellow-400 bg-clip-text text-transparent">Price List</span>
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Choose from our comprehensive range of programs designed for your career goals
            </p>
          </div>

          <div className="space-y-4">
            {courseCategories.map((category) => {
              const Icon = category.icon
              const isOpen = openCategories.includes(category.name)
              const gradientColor = getColorClasses(category.color)
              
              return (
                <div key={category.name} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                  <button
                    onClick={() => toggleCategory(category.name)}
                    className="w-full flex items-center justify-between p-6 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 bg-gradient-to-r ${gradientColor} rounded-lg flex items-center justify-center`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="font-semibold text-lg text-gray-900 dark:text-white">{category.name}</span>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {isOpen && (
                    <div className="p-6 border-t border-gray-200 dark:border-gray-700">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {category.courses.map((course, idx) => (
                          <div key={idx} className="relative bg-gray-50 dark:bg-gray-900 rounded-xl p-6 hover:shadow-lg transition-all border border-gray-200 dark:border-gray-800">
                            {course.popular && (
                              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-yellow-600 to-yellow-400 text-white text-xs font-medium px-3 py-1 rounded-full whitespace-nowrap">
                                Most Popular
                              </div>
                            )}
                            
                            <div className={`inline-block px-3 py-1 bg-gradient-to-r ${gradientColor} text-white text-xs font-semibold rounded-full mb-4`}>
                              {course.name}
                            </div>
                            
                            <div className="mb-4">
                              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                                {course.price}
                              </div>
                              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mt-1">
                                <Clock className="w-4 h-4" />
                                {course.duration}
                                <span className="mx-1">•</span>
                                <Rocket className="w-4 h-4" />
                                {course.projects}
                              </div>
                              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{course.description}</p>
                            </div>
                            
                            <button className="w-full mb-4 px-4 py-2 bg-gradient-to-r from-yellow-600 to-yellow-400 text-white rounded-lg hover:shadow-lg transition-all">
                              Get Started
                            </button>
                            
                            <div className="space-y-2">
                              {course.features.map((feature, i) => (
                                <p key={i} className="text-gray-600 dark:text-gray-400 text-xs flex items-start gap-2">
                                  <Check className="w-3 h-3 text-green-500 flex-shrink-0 mt-0.5" />
                                  <span>{feature}</span>
                                </p>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 text-sm font-medium px-4 py-2 rounded-full mb-6">
              <MessageSquare className="w-4 h-4" />
              Got Questions?
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Frequently Asked <span className="bg-gradient-to-r from-yellow-600 to-yellow-400 bg-clip-text text-transparent">Questions</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <div className="sticky top-24">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Have questions?</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Find answers to common questions about our programs, pricing, and enrollment process.
                </p>
                <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Still need help?</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Contact our admissions team for personalized assistance.</p>
                  <button className="w-full px-4 py-2 bg-gradient-to-r from-yellow-600 to-yellow-400 text-white rounded-lg hover:shadow-lg transition-all">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-2 space-y-3">
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-600 to-yellow-400 text-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h2 className="text-3xl font-bold mb-2">Ready to Start Your Learning Journey?</h2>
              <p className="text-yellow-100">Join thousands of students who have transformed their careers with Yelocode.</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-white text-yellow-600 font-medium rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-2">
                <GraduationCap className="w-5 h-5" />
                Browse Courses
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