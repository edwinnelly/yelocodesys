"use client";

import { useState, useEffect, useRef } from 'react'
import { 
  Code, GraduationCap, Users, Award, Clock, Calendar, MapPin, Phone, Mail,
  Check, ArrowRight, Star, Briefcase, Target, Zap, Globe, MessageCircle,
  BookOpen, Laptop, Coffee, Heart, Sparkles, Rocket, Layers, Eye, Palette,
  Shield, Cloud, Smartphone, BarChart3, Cpu, TrendingUp, Database,
  ChevronRight, Play, Quote, ThumbsUp, Download, Bookmark, Filter,
  MoveRight, ArrowUpRight, PlayCircle, Video, Headphones, Monitor,
  UserCheck, Building2, Network, Gift, Coffee as CoffeeIcon
} from 'lucide-react'
import Link from 'next/link'

export default function EducationPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null)
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({})
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [mounted, setMounted] = useState(false)
  
  const sectionRefs = useRef<{
    hero: HTMLElement | null;
    programs: HTMLElement | null;
    experience: HTMLElement | null;
    success: HTMLElement | null;
    why: HTMLElement | null;
    process: HTMLElement | null;
    cohorts: HTMLElement | null;
    faq: HTMLElement | null;
  }>({
    hero: null,
    programs: null,
    experience: null,
    success: null,
    why: null,
    process: null,
    cohorts: null,
    faq: null,
  })

  // Set mounted state after hydration
  useEffect(() => {
    setMounted(true)
  }, [])

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }))
        })
      },
      { threshold: 0.2, rootMargin: '0px 0px -100px 0px' }
    )

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  // Auto-play testimonials
  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
      }, 5000)
    }
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const setSectionRef = (key: keyof typeof sectionRefs.current) => (el: HTMLElement | null) => {
    sectionRefs.current[key] = el;
  }

  const programs = [
    {
      title: 'Web Development Bootcamp',
      icon: Code,
      duration: '12-16 weeks',
      level: 'Beginner to Advanced',
      skills: ['HTML/CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB'],
      description: 'Master full-stack development and build complete web applications from scratch.',
      outcomes: ['Full-stack developer', '$45k - $80k starting salary'],
      gradient: 'from-yellow-600 to-indigo-600',
      popular: true,
      link: '/webdevelopment'
    },
    {
      title: 'Data Science & AI',
      icon: BarChart3,
      duration: '14 weeks',
      level: 'Intermediate',
      skills: ['Python', 'Pandas', 'Machine Learning', 'TensorFlow', 'SQL'],
      description: 'Learn to extract insights from data and build AI-powered applications.',
      outcomes: ['Data Analyst', 'ML Engineer', '$50k - $90k starting salary'],
      gradient: 'from-purple-600 to-pink-600',
      popular: false,
      link: '/programs/data-science'
    },
    {
      title: 'UI/UX Design',
      icon: Palette,
      duration: '10 weeks',
      level: 'Beginner-friendly',
      skills: ['Figma', 'User Research', 'Prototyping', 'Wireframing', 'Design Systems'],
      description: 'Create beautiful, intuitive user experiences for web and mobile apps.',
      outcomes: ['UI/UX Designer', 'Product Designer', '$40k - $75k starting salary'],
      gradient: 'from-pink-600 to-rose-600',
      popular: false,
      link: '/programs/ui-ux-design'
    },
    {
      title: 'Mobile App Development',
      icon: Smartphone,
      duration: '12 weeks',
      level: 'Intermediate',
      skills: ['Flutter', 'React Native', 'Firebase', 'API Integration', 'App Store'],
      description: 'Build cross-platform mobile apps for iOS and Android.',
      outcomes: ['Mobile Developer', 'Flutter Developer', '$45k - $85k starting salary'],
      gradient: 'from-white-600 to-emerald-600',
      popular: false,
      link: '/programs/mobile-development'
    },
    {
      title: 'Cybersecurity',
      icon: Shield,
      duration: '14 weeks',
      level: 'Intermediate',
      skills: ['Network Security', 'Ethical Hacking', 'Pen Testing', 'Security Audits', 'Compliance'],
      description: 'Learn to protect systems and networks from cyber threats.',
      outcomes: ['Security Analyst', 'Penetration Tester', '$50k - $95k starting salary'],
      gradient: 'from-red-600 to-orange-600',
      popular: true,
      link: '/programs/cybersecurity'
    },
    {
      title: 'Cloud Computing',
      icon: Cloud,
      duration: '12 weeks',
      level: 'Intermediate',
      skills: ['AWS', 'Azure', 'DevOps', 'Docker', 'Kubernetes'],
      description: 'Master cloud platforms and modern infrastructure management.',
      outcomes: ['Cloud Engineer', 'DevOps Specialist', '$55k - $100k starting salary'],
      gradient: 'from-cyan-600 to-yellow-600',
      popular: false,
      link: '/programs/cloud-computing'
    },
    {
      title: 'Python Programming',
      icon: Cpu,
      duration: '8 weeks',
      level: 'Beginner-friendly',
      skills: ['Python Basics', 'OOP', 'APIs', 'Data Structures', 'Automation'],
      description: 'Start your coding journey with the world\'s most versatile language.',
      outcomes: ['Python Developer', 'Automation Engineer', '$40k - $70k starting salary'],
      gradient: 'from-yellow-600 to-amber-600',
      popular: false,
      link: '/python'
    },
    {
      title: 'Digital Marketing',
      icon: TrendingUp,
      duration: '8 weeks',
      level: 'Beginner-friendly',
      skills: ['SEO', 'Social Media', 'Content Marketing', 'Google Ads', 'Analytics'],
      description: 'Master digital marketing strategies to grow businesses online.',
      outcomes: ['Digital Marketer', 'SEO Specialist', '$35k - $60k starting salary'],
      gradient: 'from-orange-600 to-red-600',
      popular: false,
      link: '/digitalmarketing'
    }
  ]

  const testimonials = [
    {
      name: 'Eze Chidi.',
      role: 'Web Developer at Reaput',
      program: 'Web Development Bootcamp',
      quote: 'Yelocode transformed my career. From a complete beginner to landing my dream job at PayStack in just 6 months. The mentors really care about your success.',
      image: 'pics/xxc.png',
      before: 'Student',
      after: 'Frontend Developer',
      rating: 5,
      change: '+34% salary increase'
    },
    {
      name: 'Emeka Nwachukwu',
      role: 'Security Analyst at Interswitch',
      program: 'Cybersecurity',
      quote: 'The hands-on projects and real-world scenarios prepared me for the challenges I face daily at work. The instructors are industry experts with practical knowledge.',
      image: 'pics/avatar.avif',
      before: 'IT Support',
      after: 'Security Analyst',
      rating: 5,
      change: '+80% salary increase'
    },
    {
      name: 'Aisha Bello',
      role: 'Data Analyst at KPMG',
      program: 'Data Science & AI',
      quote: 'The curriculum is perfectly structured for beginners. Within 3 months of graduating, I got a job at KPMG. The career support was invaluable.',
      image: 'pics/avatar.avif',
      before: 'Bank Teller',
      after: 'Data Analyst',
      rating: 5,
      change: '+40% salary increase'
    },
    {
      name: 'Michael Obi',
      role: 'Product Designer at Terragon',
      program: 'UI/UX Design',
      quote: 'The portfolio I built during the program got me multiple job offers. The design critiques and feedback helped me grow tremendously.',
      image: 'pics/avatar.avif',
      before: 'Graphic Designer',
      after: 'Product Designer',
      rating: 5,
      change: '+100% salary increase'
    }
  ]

  const learningFeatures = [
    {
      icon: PlayCircle,
      title: 'Live Online Classes',
      description: 'Interactive sessions with instructors in real-time'
    },
    {
      icon: Video,
      title: 'Recorded Content',
      description: 'Access lessons anytime, anywhere'
    },
    {
      icon: UserCheck,
      title: 'Project Reviews',
      description: 'Personalized feedback on your work'
    },
    {
      icon: Users,
      title: 'Peer Collaboration',
      description: 'Group projects and discussions'
    },
    {
      icon: Briefcase,
      title: 'Career Support',
      description: 'Resume help, interview prep, job placement'
    },
    {
      icon: Award,
      title: 'Certification',
      description: 'Industry-recognized certificates'
    }
  ]

  const whyChooseFeatures = [
    {
      icon: Award,
      title: 'Industry Experts',
      description: 'Learn from professionals with 8+ years experience'
    },
    {
      icon: Users,
      title: 'Small Classes',
      description: 'Max 15 students per cohort for personalized attention'
    },
    {
      icon: Laptop,
      title: 'Flexible Learning',
      description: 'Online, hybrid, or in-person options'
    },
    {
      icon: Heart,
      title: 'Affordable Tuition',
      description: 'Payment plans and scholarships available'
    },
    {
      icon: MapPin,
      title: 'Local Presence',
      description: 'Based in Port Harcourt at No. 11 Elekahia'
    },
    {
      icon: Network,
      title: 'Strong Alumni Network',
      description: 'Connect with 500+ graduates in tech'
    }
  ]

  const processSteps = [
    {
      step: 1,
      title: 'Choose Your Program',
      description: 'Browse our courses and find the right fit for your goals'
    },
    {
      step: 2,
      title: 'Submit Application',
      description: 'Fill out our simple online application form'
    },
    {
      step: 3,
      title: 'Skills Assessment',
      description: 'Quick interview to understand your level'
    },
    {
      step: 4,
      title: 'Secure Your Spot',
      description: 'Complete payment to reserve your seat'
    },
    {
      step: 5,
      title: 'Start Learning',
      description: 'Begin your transformation journey with us'
    }
  ]

  const cohorts = [
    {
      season: 'Spring Cohort',
      date: 'April 15, 2025',
      spots: '12 spots left',
      deadline: 'Apply by Mar 30'
    },
    {
      season: 'Summer Cohort',
      date: 'July 10, 2025',
      spots: '18 spots left',
      deadline: 'Apply by Jun 25'
    },
    {
      season: 'Fall Cohort',
      date: 'October 5, 2025',
      spots: '25 spots left',
      deadline: 'Apply by Sep 20'
    }
  ]

  const faqs = [
    {
      question: 'Do I need any prior experience to enroll?',
      answer: 'No! Our beginner-friendly programs are designed for complete beginners. We start from the fundamentals and gradually build up to advanced concepts. Some intermediate programs may require basic knowledge or completion of prerequisite courses.'
    },
    {
      question: 'What is the time commitment per week?',
      answer: 'We recommend 15-20 hours per week for part-time programs and 30-40 hours for full-time bootcamps. This includes live sessions, self-study, and project work. You can adjust based on your schedule.'
    },
    {
      question: 'Will I receive a certificate upon completion?',
      answer: 'Yes! All graduates receive an industry-recognized certificate from Yelocode Systems. Many programs also prepare you for professional certifications like AWS, Google, Microsoft, and CompTIA.'
    },
    {
      question: 'Do you offer payment plans or scholarships?',
      answer: 'Absolutely! We offer flexible payment plans (3-6 months installments) and have limited scholarships available for women in tech and underrepresented groups. Contact admissions for more information.'
    },
    {
      question: 'What job placement assistance do you provide?',
      answer: 'We provide comprehensive career support including resume reviews, LinkedIn optimization, mock interviews, and access to our exclusive job board with 40+ partner companies.'
    },
    {
      question: 'Can I attend online or in-person?',
      answer: 'Both! We offer fully online, hybrid, and in-person options at our Port Harcourt campus (No. 11 Elekahia). Choose what works best for you.'
    }
  ]

  const stats = [
    { icon: Users, value: '500+', label: 'Students Trained' },
    { icon: Award, value: '92%', label: 'Placement Rate' },
    { icon: Building2, value: '40+', label: 'Industry Partners' },
    { icon: Clock, value: '8+', label: 'Years Experience' }
  ]

  const handlePrevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const handleNextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  // Generate stable particle positions that won't change between server and client
  const particlePositions = Array.from({ length: 20 }, (_, i) => ({
    top: `${(i * 7) % 100}%`,
    left: `${(i * 13) % 100}%`,
    animationDelay: `${i * 0.3}s`,
    animationDuration: `${15 + (i % 10)}s`
  }))

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      
      {/* HERO SECTION - Full Width Image */}
      <section 
        id="hero"
        ref={setSectionRef('hero')}
        className={`relative h-screen flex items-center overflow-hidden transition-all duration-1000 ${
          isVisible['hero'] ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src="pics/200.jpg"
            alt="Students learning"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/90 to-yellow-900/80" />
        </div>

        {/* Animated particles with stable positions */}
        <div className="absolute inset-0 overflow-hidden">
          {particlePositions.map((pos, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-yellow-400/30 rounded-full animate-float"
              style={{
                top: pos.top,
                left: pos.left,
                animationDelay: pos.animationDelay,
                animationDuration: pos.animationDuration
              }}
            />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 text-white">
          <div className="max-w-3xl">
          
            <div className="hidden sm:inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium px-4 py-2 rounded-full mb-6 group hover:bg-white/20 transition-all">
  <GraduationCap className="w-4 h-4 group-hover:rotate-12 transition-transform" />
  Education That Transforms
</div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Transform Your{' '}
              <span className="relative">
                <span className="bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">
                  Future
                </span>
                <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 300 12" fill="none">
                  <path d="M2 6C76 1.5 150 1.5 298 6" stroke="#60A5FA" strokeWidth="4" strokeLinecap="round"/>
                </svg>
              </span>
              <br />with Tech Education
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
              Join Yelocode Systems in Port Harcourt and gain the skills you need to launch a successful 
              career in technology. Project-based learning, expert mentorship, and job placement support.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#programs" 
                className="group relative px-8 py-4 bg-gradient-to-r from-yellow-600 to-yellow-500 text-white font-semibold rounded-xl overflow-hidden transition-all hover:shadow-xl hover:shadow-yellow-500/25"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Explore Programs
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-700 to-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              
              <a 
                href="#success" 
                className="group px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-xl hover:bg-white/20 transition-all inline-flex items-center gap-2"
              >
                <Star className="w-5 h-5" />
                Success Stories
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-yellow-500 rounded-full mt-2 animate-scroll" />
          </div>
        </div>
      </section>

      {/* LEARNING PHILOSOPHY */}
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 text-sm font-medium px-4 py-2 rounded-full mb-4">
              <Sparkles className="w-4 h-4" />
              Our Approach
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Learning Philosophy
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              We believe in practical, project-based learning that prepares you for real-world challenges
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Code,
                title: 'Hands-on Learning',
                description: 'Project-based curriculum with real-world applications',
                color: 'from-yellow-600 to-yellow-400'
              },
              {
                icon: Users,
                title: 'Expert Mentorship',
                description: 'Learn from industry professionals with 8+ years experience',
                color: 'from-purple-600 to-pink-600'
              },
              {
                icon: Target,
                title: 'Career-Focused',
                description: 'Skills that lead to jobs and freelance opportunities',
                color: 'from-white-600 to-emerald-600'
              },
              {
                icon: Heart,
                title: 'Community Support',
                description: 'Collaborative learning environment with peers',
                color: 'from-orange-600 to-red-600'
              }
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <div 
                  key={index} 
                  className="group bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all hover:-translate-y-2"
                >
                  <div className={`w-14 h-14 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* PROGRAMS OFFERED */}
      <section 
        id="programs"
        ref={setSectionRef('programs')}
        className={`py-24 bg-gray-50 dark:bg-gray-900 transition-all duration-1000 ${
          isVisible['programs'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 text-sm font-medium px-4 py-2 rounded-full mb-4">
              <BookOpen className="w-4 h-4" />
              Our Programs
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Courses Designed for{' '}
              <span className="text-yellow-600 dark:text-yellow-400">Your Future</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Choose from our comprehensive range of tech programs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, index) => {
              const Icon = program.icon
              return (
                <Link href={program.link} key={index}>
                  <div 
                    className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                  >
                    {/* Popular badge */}
                    {program.popular && (
                      <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-600 to-yellow-400 text-white text-xs font-medium px-3 py-1 rounded-full z-10">
                        Most Popular
                      </div>
                    )}

                    {/* Gradient overlay on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${program.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                    
                    <div className="p-6">
                      <div className={`w-14 h-14 bg-gradient-to-r ${program.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-yellow-600 transition-colors">
                        {program.title}
                      </h3>
                      
                      <div className="flex items-center gap-2 mb-3">
                        <Clock className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">{program.duration}</span>
                      </div>
                      
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">{program.description}</p>
                      
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {program.skills.slice(0, 3).map((skill, i) => (
                          <span key={i} className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full">
                            {skill}
                          </span>
                        ))}
                        {program.skills.length > 3 && (
                          <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full">
                            +{program.skills.length - 3}
                          </span>
                        )}
                      </div>
                      
                      <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                        <span className="text-xs text-white-600 dark:text-white-400">
                          {program.outcomes[0]}
                        </span>
                        <div className="inline-flex items-center gap-1 text-sm font-medium text-yellow-600 dark:text-yellow-400 group/link">
                          Learn more
                          <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>

          {/* View All Courses Link */}
          <div className="text-center mt-12">
            <Link 
              href="/coursecatalog" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-yellow-600 to-yellow-400 text-white font-semibold rounded-xl hover:shadow-lg transition-all group"
            >
              <BookOpen className="w-5 h-5" />
              View Full Course Catalog
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* LEARNING EXPERIENCE */}
      <section 
        id="experience"
        ref={setSectionRef('experience')}
        className={`py-24 bg-white dark:bg-gray-950 transition-all duration-1000 ${
          isVisible['experience'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 text-sm font-medium px-4 py-2 rounded-full mb-6">
                <Laptop className="w-4 h-4" />
                Student Experience
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Learn in an{' '}
                <span className="text-yellow-600 dark:text-yellow-400">Engaging Environment</span>
              </h2>
              
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                Our learning experience combines live instruction, recorded content, and hands-on projects 
                to ensure you master every concept.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {learningFeatures.map((feature, index) => {
                  const Icon = feature.icon
                  return (
                    <div key={index} className="flex items-start gap-3 group">
                      <div className="w-10 h-10 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">{feature.title}</h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{feature.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Image collage */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-3xl blur-2xl opacity-20 animate-pulse" />
              <div className="relative grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img 
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop"
                    alt="Students learning"
                    className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=300&fit=crop"
                    alt="Coding session"
                    className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="space-y-4 mt-8">
                  <img 
                    src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=300&fit=crop"
                    alt="Classroom"
                    className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=300&fit=crop"
                    alt="Mentorship"
                    className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SUCCESS STORIES */}
      <section 
        id="success"
        ref={setSectionRef('success')}
        className={`py-24 bg-gray-50 dark:bg-gray-900 transition-all duration-1000 ${
          isVisible['success'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 text-sm font-medium px-4 py-2 rounded-full mb-4">
              <Star className="w-4 h-4" />
              Student Success Stories
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              From Beginners to{' '}
              <span className="text-yellow-600 dark:text-yellow-400">Tech Professionals</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Real stories from our graduates who transformed their careers
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Main testimonial card */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <Quote className="w-12 h-12 text-yellow-600/20 mb-4" />
              
              <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                "{testimonials[activeTestimonial].quote}"
              </p>
              
              <div className="flex items-center gap-4">
                <img 
                  src={testimonials[activeTestimonial].image} 
                  alt={testimonials[activeTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover ring-4 ring-yellow-100 dark:ring-yellow-900/30"
                />
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                    {testimonials[activeTestimonial].name}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">{testimonials[activeTestimonial].role}</p>
                  <p className="text-sm text-yellow-600 dark:text-yellow-400">{testimonials[activeTestimonial].program}</p>
                </div>
              </div>

              {/* Before/After comparison */}
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <div className="text-center">
                    <p className="text-xs text-gray-500 dark:text-gray-400">Before</p>
                    <p className="font-medium text-gray-900 dark:text-white">{testimonials[activeTestimonial].before}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-yellow-600" />
                  <div className="text-center">
                    <p className="text-xs text-gray-500 dark:text-gray-400">After</p>
                    <p className="font-medium text-gray-900 dark:text-white">{testimonials[activeTestimonial].after}</p>
                  </div>
                  <div className="bg-white-100 dark:bg-white-900/30 px-3 py-1 rounded-full">
                    <span className="text-xs font-semibold text-white-600 dark:text-white-400">
                      {testimonials[activeTestimonial].change}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation controls */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={handlePrevTestimonial}
                className="w-12 h-12 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-600 hover:text-white transition-colors group shadow-lg"
              >
                <ChevronRight className="w-5 h-5 rotate-180 group-hover:-translate-x-1 transition-transform" />
              </button>
              
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === activeTestimonial
                        ? 'w-8 bg-yellow-600'
                        : 'bg-gray-300 dark:bg-gray-600 hover:bg-yellow-400'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={handleNextTestimonial}
                className="w-12 h-12 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-600 hover:text-white transition-colors group shadow-lg"
              >
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE YELOCODE */}
      <section 
        id="why"
        ref={setSectionRef('why')}
        className={`py-24 bg-white dark:bg-gray-950 transition-all duration-1000 ${
          isVisible['why'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 text-sm font-medium px-4 py-2 rounded-full mb-4">
              <Heart className="w-4 h-4" />
              Why Choose Yelocode
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              The Best Place to{' '}
              <span className="text-yellow-600 dark:text-yellow-400">Start Your Tech Journey</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseFeatures.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div 
                  key={index} 
                  className="group bg-gray-50 dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all hover:-translate-y-2"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                </div>
              )
            })}
          </div>

          {/* Campus Address Card */}
          <div className="mt-12 bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-2xl p-8 text-white">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <MapPin className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-1">Visit Our Campus</h3>
                  <p className="text-white/80">No. 11 Elekahia, Port Harcourt, Nigeria</p>
                </div>
              </div>
              <div className="flex gap-4">
                <a href="tel:09162865693" className="flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-xl hover:bg-white/30 transition-all">
                  <Phone className="w-4 h-4" />
                  <span>09162865693</span>
                </a>
                <a href="mailto:admissions@yelocodesys.com" className="flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-xl hover:bg-white/30 transition-all">
                  <Mail className="w-4 h-4" />
                  <span>admissions@yelocodesys.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UPCOMING COHORTS */}
      <section 
        id="cohorts"
        ref={setSectionRef('cohorts')}
        className={`py-24 bg-white dark:bg-gray-950 transition-all duration-1000 ${
          isVisible['cohorts'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 text-sm font-medium px-4 py-2 rounded-full mb-4">
              <Calendar className="w-4 h-4" />
              Upcoming Cohorts
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Start Your Journey{' '}
              <span className="text-yellow-600 dark:text-yellow-400">This Year</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {cohorts.map((cohort, index) => (
              <div 
                key={index} 
                className="group bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all hover:-translate-y-2"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{cohort.season}</h3>
                <p className="text-2xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">{cohort.date}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-white-600 dark:text-white-400 bg-white-100 dark:bg-white-900/30 px-3 py-1 rounded-full">
                    {cohort.spots}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{cohort.deadline}</span>
                </div>
                <Link href="/bootcampsapply">
                  <button className="w-full px-4 py-3 bg-gradient-to-r from-yellow-600 to-yellow-400 text-white rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-2">
                    Apply Now
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </div>
            ))}
          </div>

          {/* View All Cohorts Link */}
          <div className="text-center mt-8">
            <Link 
              href="/bootcampsapply" 
              className="inline-flex items-center gap-2 text-yellow-600 dark:text-yellow-400 font-medium hover:gap-3 transition-all"
            >
              View all upcoming cohorts
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section 
        id="faq"
        ref={setSectionRef('faq')}
        className={`py-24 bg-gray-50 dark:bg-gray-900 transition-all duration-1000 ${
          isVisible['faq'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 text-sm font-medium px-4 py-2 rounded-full mb-4">
              <MessageCircle className="w-4 h-4" />
              Got Questions?
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Frequently Asked{' '}
              <span className="text-yellow-600 dark:text-yellow-400">Questions</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <span className="font-medium text-gray-900 dark:text-white">{faq.question}</span>
                  <ChevronRight className={`w-5 h-5 text-gray-500 transition-transform ${activeFaq === index ? 'rotate-90' : ''}`} />
                </button>
                
                {activeFaq === index && (
                  <div className="px-4 pb-4 pt-0 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact Support Link */}
          <div className="text-center mt-8">
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 text-yellow-600 dark:text-yellow-400 font-medium hover:gap-3 transition-all"
            >
              Still have questions? Contact us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-gradient-to-r from-yellow-600 to-yellow-400 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of students who have transformed their careers with Yelocode Systems.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/coursecatalog" 
              className="px-8 py-4 bg-white text-yellow-600 font-semibold rounded-xl hover:bg-gray-100 transition-all hover:shadow-xl inline-flex items-center gap-2 group"
            >
              <GraduationCap className="w-5 h-5" />
              Explore Programs
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/contact" 
              className="px-8 py-4 bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-xl hover:bg-white/30 transition-all inline-flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Schedule Consultation
            </Link>
          </div>
          <p className="text-sm text-white/80 mt-6">
            📍 No. 11 Elekahia, Port Harcourt | 📞 09162865693 | ✉️ admissions@yelocodesys.com
          </p>
        </div>
      </section>

      {/* Animation styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-10px) translateX(-10px);
          }
          75% {
            transform: translateY(10px) translateX(5px);
          }
        }
        
        @keyframes scroll {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(15px);
            opacity: 0;
          }
        }
        
        .animate-float {
          animation: float linear infinite;
        }
        
        .animate-scroll {
          animation: scroll 1.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}