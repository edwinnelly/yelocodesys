"use client";

import { useState, useEffect, useRef } from "react";
import {
  Code,
  GraduationCap,
  Users,
  Award,
  Clock,
  Calendar,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Star,
  Briefcase,
  Target,
  Heart,
  MessageCircle,
  BookOpen,
  Laptop,
  BarChart3,
  Cpu,
  TrendingUp,
  Palette,
  Shield,
  Cloud,
  Smartphone,
  ChevronRight,
  Quote,
  ArrowUpRight,
  PlayCircle,
  Video,
  UserCheck,
  Building2,
  Network,
} from "lucide-react";
import Link from "next/link";

export default function EducationPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [mounted, setMounted] = useState(false);

  const sectionRefs = useRef<{
    hero: HTMLElement | null;
    programs: HTMLElement | null;
    experience: HTMLElement | null;
    success: HTMLElement | null;
    why: HTMLElement | null;
    cohorts: HTMLElement | null;
    faq: HTMLElement | null;
  }>({
    hero: null,
    programs: null,
    experience: null,
    success: null,
    why: null,
    cohorts: null,
    faq: null,
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlaying && mounted) {
      interval = setInterval(() => {
        setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, mounted]);

  const setSectionRef =
    (key: keyof typeof sectionRefs.current) => (el: HTMLElement | null) => {
      sectionRefs.current[key] = el;
    };

  const programs = [
    {
      title: "Web Development Bootcamp",
      icon: Code,
      duration: "12-32 weeks",
      level: "Beginner to Advanced",
      skills: ["HTML/CSS", "JavaScript", "React", "Node.js", "MongoDB"],
      description: "Master full-stack development at our software engineering academy in Port Harcourt with job placement support.",
      outcomes: ["Full-stack developer", "$45k - $80k starting salary"],
      popular: true,
      link: "/webdevelopment",
    },
    {
      title: "Data Science & AI",
      icon: BarChart3,
      duration: "16-21 weeks",
      level: "Intermediate",
      skills: ["Python", "Pandas", "Machine Learning", "TensorFlow", "SQL"],
      description: "Learn to extract insights from data and build AI-powered applications with hands-on projects.",
      outcomes: ["Data Scientist", "ML Engineer", "$50k - $90k starting salary"],
      popular: false,
      link: "/datascience",
    },
    {
      title: "Data Analysis & AI",
      icon: BarChart3,
      duration: "12-16 weeks",
      level: "Beginner to Intermediate",
      skills: ["Python", "SQL", "Data Visualization", "Machine Learning"],
      description: "Master data analytics training in Port Harcourt by learning to clean, analyze, and visualize data, then build intelligent models for real-world decision-making.",
      outcomes: ["Data Analyst", "Junior ML Engineer", "BI Analyst", "$50k - $75k starting salary"],
      popular: true,
      link: "/data-analysis-ai",
    },
    {
      title: "UI/UX Design",
      icon: Palette,
      duration: "10 weeks",
      level: "Beginner-friendly",
      skills: ["Figma", "User Research", "Prototyping", "Wireframing", "Design Systems"],
      description: "Learn professional UI/UX design training in Port Harcourt with Figma. Create beautiful, intuitive user experiences for web and mobile apps.",
      outcomes: ["UI/UX Designer", "Product Designer", "$40k - $75k starting salary"],
      popular: false,
      link: "/ui-ux-design",
    },
    {
      title: "Mobile App Development",
      icon: Smartphone,
      duration: "16 weeks",
      level: "Intermediate",
      skills: ["Flutter", "React Native", "Firebase", "API Integration", "App Store"],
      description: "Build cross-platform mobile apps for iOS and Android at our IT training center in Port Harcourt.",
      outcomes: ["Mobile Developer", "Flutter Developer", "$45k - $85k starting salary"],
      popular: false,
      link: "/mobile-development",
    },
    {
      title: "Cybersecurity",
      icon: Shield,
      duration: "26 weeks",
      level: "Intermediate",
      skills: ["Network Security", "Ethical Hacking", "Pen Testing", "Security Audits", "Compliance"],
      description: "Get cybersecurity training in Port Harcourt. Learn to protect systems and networks from cyber threats with hands-on labs.",
      outcomes: ["Security Analyst", "Penetration Tester", "$50k - $95k starting salary"],
      popular: true,
      link: "/cybersecurity",
    },
    {
      title: "Cloud Computing",
      icon: Cloud,
      duration: "12 weeks",
      level: "Intermediate",
      skills: ["AWS", "Azure", "DevOps", "Docker", "Kubernetes"],
      description: "Master cloud platforms and modern infrastructure management with AWS, Docker, and Kubernetes.",
      outcomes: ["Cloud Engineer", "DevOps Specialist", "$55k - $100k starting salary"],
      popular: false,
      link: "/cloud-computing",
    },
    {
      title: "Python Programming",
      icon: Cpu,
      duration: "16 weeks",
      level: "Beginner-friendly",
      skills: ["Python Basics", "OOP", "APIs", "Data Structures", "Automation"],
      description: "Start your coding journey with Python at the best computer training school in Port Harcourt.",
      outcomes: ["Python Developer", "Automation Engineer", "$40k - $70k starting salary"],
      popular: false,
      link: "/python",
    },
    {
      title: "Digital Marketing",
      icon: TrendingUp,
      duration: "12 weeks",
      level: "Beginner-friendly",
      skills: ["SEO", "Social Media", "Content Marketing", "Google Ads", "Analytics"],
      description: "Master digital marketing strategies to grow businesses online.",
      outcomes: ["Digital Marketer", "SEO Specialist", "$35k - $60k starting salary"],
      popular: false,
      link: "/digitalmarketing",
    },
  ];

  const testimonials = [
    {
      name: "Eze Chidi",
      role: "Web Developer at Reaput",
      program: "Web Development Bootcamp",
      quote: "Yelocode transformed my career. From a complete beginner to landing my dream job in just 6 months. The mentors really care about your success.",
      image: "/pics/xxc.png",
      before: "Student",
      after: "Frontend Developer",
      rating: 5,
    },
    {
      name: "Emeka Nwachukwu",
      role: "Security Analyst at Interswitch",
      program: "Cybersecurity",
      quote: "The hands-on projects and real-world scenarios prepared me for the challenges I face daily at work. Best tech school in Port Harcourt.",
      image: "/pics/avatar.avif",
      before: "IT Support",
      after: "Security Analyst",
      rating: 5,
    },
    {
      name: "Aisha Bello",
      role: "Data Analyst at KPMG",
      program: "Data Analysis & AI",
      quote: "The curriculum is perfectly structured for beginners. Within 3 months of graduating, I got a job. Affordable computer training in PH that delivers.",
      image: "/pics/avatar.avif",
      before: "Bank Teller",
      after: "Data Analyst",
      rating: 5,
    },
    {
      name: "Michael Obi",
      role: "Product Designer at Terragon",
      program: "UI/UX Design",
      quote: "The portfolio I built got me multiple job offers. Great IT training center in Port Harcourt with excellent mentorship.",
      image: "/pics/avatar.avif",
      before: "Graphic Designer",
      after: "Product Designer",
      rating: 5,
    },
  ];

  const learningFeatures = [
    { icon: PlayCircle, title: "Live Online Classes", description: "Interactive sessions with instructors in real-time" },
    { icon: Video, title: "Recorded Content", description: "Access lessons anytime, anywhere" },
    { icon: UserCheck, title: "Project Reviews", description: "Personalized feedback on your work" },
    { icon: Users, title: "Peer Collaboration", description: "Group projects and discussions" },
    { icon: Briefcase, title: "Career Support", description: "Resume help, interview prep, job placement" },
    { icon: Award, title: "Certification", description: "Industry-recognized certificates" },
  ];

  const whyChooseFeatures = [
    { icon: Award, title: "Industry Experts", description: "Learn from professionals with 8+ years experience" },
    { icon: Users, title: "Small Classes", description: "Max 15 students per cohort for personalized attention" },
    { icon: Laptop, title: "Flexible Learning", description: "Online, hybrid, or in-person options" },
    { icon: Heart, title: "Affordable Tuition", description: "Most affordable computer training center in PH" },
    { icon: MapPin, title: "Local Presence", description: "Based in Port Harcourt at No. 11 Elekahia" },
    { icon: Network, title: "Strong Alumni Network", description: "Connect with 1,675+ graduates in tech" },
  ];

  const cohorts = [
    { season: "Spring Cohort", date: "April 15, 2026", spots: "12 spots left", deadline: "Apply by Mar 30, 2026" },
    { season: "Summer Cohort", date: "July 10, 2026", spots: "18 spots left", deadline: "Apply by Jun 25, 2026" },
    { season: "Fall Cohort", date: "October 5, 2026", spots: "25 spots left", deadline: "Apply by Sep 20, 2026" },
  ];

  const faqs = [
    {
      question: "Do I need any prior experience to enroll?",
      answer: "No! Our beginner-friendly programs are designed for complete beginners. We start from the fundamentals at our coding bootcamp in Port Harcourt and gradually build up to advanced concepts.",
    },
    {
      question: "What is the time commitment per week?",
      answer: "We recommend 15-20 hours per week for part-time programs and 30-40 hours for full-time bootcamps. This includes live sessions, self-study, and project work.",
    },
    {
      question: "Will I receive a certificate upon completion?",
      answer: "Yes! All graduates receive an industry-recognized certificate from Yelocode Systems, the best tech school in Port Harcourt.",
    },
    {
      question: "Do you offer payment plans or scholarships?",
      answer: "Absolutely! We offer flexible payment plans and have scholarships available. We're the most affordable computer training center in PH.",
    },
    {
      question: "What job placement assistance do you provide?",
      answer: "We provide tech training in Port Harcourt with job placement including resume reviews, LinkedIn optimization, mock interviews, and access to our job board with partner companies.",
    },
    {
      question: "Can I attend online or in-person?",
      answer: "Both! We offer online, hybrid, and in-person options at our IT training center in Port Harcourt (No. 11 Elekahia).",
    },
  ];

  const stats = [
    { icon: Users, value: "1,675+", label: "Students Trained" },
    { icon: Award, value: "85%", label: "Placement Rate" },
    { icon: Building2, value: "23+", label: "Industry Partners" },
    { icon: Clock, value: "10+", label: "Years Experience" },
  ];

  const handlePrevTestimonial = () => {
    setIsAutoPlaying(false);
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNextTestimonial = () => {
    setIsAutoPlaying(false);
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  if (!mounted) {
    return (
      <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-black dark:border-white border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* HERO SECTION */}
      <section
        id="hero"
        ref={setSectionRef("hero")}
        className="relative h-screen flex items-center overflow-hidden"
        aria-label="Yelocode Systems - Best tech school and coding bootcamp in Port Harcourt Nigeria"
      >
        <div className="absolute inset-0">
          <img
            src="/pics/b1.jpeg"
            alt="Students learning at Yelocode Systems - best tech school and coding bootcamp in Port Harcourt Nigeria with job placement"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 text-white">
          <div className="max-w-3xl">
            <br />
            <br />
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white">
              Transform Your Future at the{" "}
              <span className="relative inline-block">
                Best Tech School
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
              <br />
              in Port Harcourt
            </h1>

            <p className="text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
              Join the{" "}
              <strong className="text-white font-semibold">best tech school and coding bootcamp in Port Harcourt</strong>{" "}
              and gain the skills you need to launch a successful career in technology. 
              Project-based learning, expert mentorship, and{" "}
              <strong className="text-white font-semibold">job placement support</strong> at No. 11 Elekahia.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#programs"
                className="group relative px-8 py-4 bg-white text-black font-semibold hover:bg-gray-200 transition-all duration-300 inline-flex items-center gap-2"
              >
                <span>Explore Programs</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#success"
                className="group px-8 py-4 border-2 border-white text-white font-semibold hover:bg-white/10 transition-all duration-300 inline-flex items-center gap-2"
              >
                <Star className="w-5 h-5" />
                Success Stories
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <Icon className="w-8 h-8 mx-auto mb-2 text-yellow-400" />
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-gray-300">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-scroll" />
          </div>
        </div>
      </section>

      {/* LEARNING PHILOSOPHY */}
      <section className="py-24 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-black dark:text-white text-sm font-medium mb-6">
              Our Approach
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
              Our Learning Philosophy at the Best Tech School in Port Harcourt
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              We believe in practical, project-based learning that prepares you for real-world challenges
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Code, title: "Hands-on Learning", description: "Project-based curriculum with real-world applications" },
              { icon: Users, title: "Expert Mentorship", description: "Learn from industry professionals with 10+ years experience" },
              { icon: Target, title: "Career-Focused", description: "Skills that lead to jobs and freelance opportunities" },
              { icon: Heart, title: "Community Support", description: "Collaborative learning environment with peers" },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="group bg-gray-50 dark:bg-gray-950 p-6 border border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-all duration-300">
                  <div className="w-14 h-14 bg-black dark:bg-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-white dark:text-black" />
                  </div>
                  <h3 className="text-lg font-bold text-black dark:text-white mb-2">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROGRAMS OFFERED */}
      <section id="programs" ref={setSectionRef("programs")} className="py-24 bg-gray-50 dark:bg-gray-950 border-y border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-black dark:text-white text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4" />
              Our Programs
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
              Tech Courses Designed for Your Future
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Choose from 9 comprehensive tech programs at the best computer training school in Port Harcourt
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <Link href={program.link} key={index}>
                  <div className="group relative bg-white dark:bg-black border border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-all duration-500 cursor-pointer h-full">
                    {program.popular && (
                      <div className="absolute top-4 right-4 bg-black dark:bg-white text-white dark:text-black text-xs font-medium px-3 py-1 z-10">
                        Popular
                      </div>
                    )}
                    <div className="p-6 flex flex-col h-full">
                      <div className="w-14 h-14 bg-black dark:bg-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Icon className="w-7 h-7 text-white dark:text-black" />
                      </div>
                      <h3 className="text-lg font-bold text-black dark:text-white mb-2">{program.title}</h3>
                      <div className="flex items-center gap-2 mb-3">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm text-gray-500">{program.duration}</span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2 flex-grow">{program.description}</p>
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {program.skills.slice(0, 3).map((skill, i) => (
                          <span key={i} className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400">
                            {skill}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-800 mt-auto">
                        <span className="text-xs text-gray-500">{program.outcomes[0]}</span>
                        <span className="inline-flex items-center gap-1 text-sm font-medium text-black dark:text-white group/link">
                          Learn more
                          <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/coursecatalog"
              className="inline-flex items-center gap-2 px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 group"
            >
              <BookOpen className="w-5 h-5" />
              View Full Course Catalog
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* LEARNING EXPERIENCE - LOCAL IMAGES REPLACED */}
      <section id="experience" ref={setSectionRef("experience")} className="py-24 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-black dark:text-white text-sm font-medium mb-6">
                <Laptop className="w-4 h-4" />
                Student Experience
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6">
                Learn in an Engaging Environment at Our IT Training Center
              </h2>

              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                Our learning experience combines live instruction, recorded content, and hands-on projects to ensure you master every concept at the best tech school in Port Harcourt.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {learningFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="flex items-start gap-3 group">
                      <div className="w-10 h-10 bg-black dark:bg-white flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5 text-white dark:text-black" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-black dark:text-white">{feature.title}</h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{feature.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* REPLACED: Local images instead of Unsplash */}
            <div className="relative">
              <div className="relative grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img 
                    src="/pics/b2.jpeg" 
                    alt="Students learning web development at coding bootcamp in Port Harcourt Nigeria - Yelocode Systems training center" 
                    className="grayscale hover:grayscale-0 transition-all duration-500 rounded w-full h-48 object-cover" 
                    loading="lazy" 
                  />
                  <img 
                    src="/pics/b3.jpeg" 
                    alt="Collaborative coding session at IT training center in Port Harcourt - Yelocode Systems students working on projects" 
                    className="grayscale hover:grayscale-0 transition-all duration-500 rounded w-full h-48 object-cover" 
                    loading="lazy" 
                  />
                </div>
                <div className="space-y-4 mt-8">
                  <img 
                    src="/pics/b4.jpeg" 
                    alt="Modern classroom at best tech school in Port Harcourt Nigeria - Yelocode Systems campus" 
                    className="grayscale hover:grayscale-0 transition-all duration-500 rounded w-full h-48 object-cover" 
                    loading="lazy" 
                  />
                  <img 
                    src="/pics/b5.jpeg" 
                    alt="Expert mentorship session at Yelocode Systems Port Harcourt - Instructor guiding students through coding exercises" 
                    className="grayscale hover:grayscale-0 transition-all duration-500 rounded w-full h-48 object-cover" 
                    loading="lazy" 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SUCCESS STORIES */}
      <section id="success" ref={setSectionRef("success")} className="py-24 bg-gray-50 dark:bg-gray-950 border-y border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-black dark:text-white text-sm font-medium mb-6">
              <Star className="w-4 h-4" />
              Student Success Stories
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
              From Beginners to Tech Professionals
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Real stories from graduates of our coding bootcamp in Port Harcourt
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white dark:bg-black p-8 md:p-12 border border-gray-200 dark:border-gray-800">
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-black dark:fill-white stroke-black dark:stroke-white" />
                ))}
              </div>
              <Quote className="w-12 h-12 text-gray-300 dark:text-gray-700 mb-4" />
              <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                &ldquo;{testimonials[activeTestimonial].quote}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src={testimonials[activeTestimonial].image} 
                  alt={`${testimonials[activeTestimonial].name} - ${testimonials[activeTestimonial].program} graduate at Yelocode Systems Port Harcourt`} 
                  className="w-16 h-16 object-cover rounded" 
                />
                <div>
                  <h4 className="text-lg font-bold text-black dark:text-white">{testimonials[activeTestimonial].name}</h4>
                  <p className="text-gray-600 dark:text-gray-400">{testimonials[activeTestimonial].role}</p>
                  <p className="text-sm text-black dark:text-white font-medium">{testimonials[activeTestimonial].program}</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 mt-8">
              <button onClick={handlePrevTestimonial} className="w-12 h-12 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 flex items-center justify-center hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors">
                <ChevronRight className="w-5 h-5 rotate-180" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => { setActiveTestimonial(index); setIsAutoPlaying(false); }}
                    className={`w-2 h-2 rounded-full transition-all ${index === activeTestimonial ? "w-8 bg-black dark:bg-white" : "bg-gray-300 dark:bg-gray-600"}`}
                    aria-label={`View testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <button onClick={handleNextTestimonial} className="w-12 h-12 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 flex items-center justify-center hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE YELOCODE */}
      <section id="why" ref={setSectionRef("why")} className="py-24 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-black dark:text-white text-sm font-medium mb-6">
              <Heart className="w-4 h-4" />
              Why Choose Yelocode
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
              The Best Place to Start Your Tech Journey in Port Harcourt
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              As the best tech school in Port Harcourt, we offer affordable training with job placement at our coding bootcamp
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="group bg-gray-50 dark:bg-gray-950 p-6 border border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-all duration-300">
                  <div className="w-12 h-12 bg-black dark:bg-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-white dark:text-black" />
                  </div>
                  <h3 className="text-lg font-bold text-black dark:text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-12 bg-black dark:bg-white text-white dark:text-black p-8 text-center">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white/20 dark:bg-black/20 flex items-center justify-center">
                  <MapPin className="w-8 h-8" />
                </div>
                <div className="text-left">
                  <h3 className="text-2xl font-bold mb-1">Visit Our Campus</h3>
                  <p className="text-gray-300 dark:text-gray-700">No. 11 Elekahia, Port Harcourt, Nigeria</p>
                </div>
              </div>
              <div className="flex gap-4">
                <a href="tel:+2349162865693" className="flex items-center gap-2 px-6 py-3 bg-white/20 dark:bg-black/20 hover:bg-white/30 dark:hover:bg-black/30 transition-all">
                  <Phone className="w-4 h-4" />
                  <span>+234 916 286 5693</span>
                </a>
                <a href="mailto:info@yelocodesys.com" className="flex items-center gap-2 px-6 py-3 bg-white/20 dark:bg-black/20 hover:bg-white/30 dark:hover:bg-black/30 transition-all">
                  <Mail className="w-4 h-4" />
                  <span>info@yelocodesys.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UPCOMING COHORTS */}
      <section id="cohorts" ref={setSectionRef("cohorts")} className="py-24 bg-gray-50 dark:bg-gray-950 border-y border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-black dark:text-white text-sm font-medium mb-6">
              <Calendar className="w-4 h-4" />
              Upcoming Cohorts
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
              Start Your Tech Journey in 2026
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {cohorts.map((cohort, index) => (
              <div key={index} className="group bg-white dark:bg-black p-6 border border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-all duration-300">
                <div className="w-12 h-12 bg-black dark:bg-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Calendar className="w-6 h-6 text-white dark:text-black" />
                </div>
                <h3 className="text-xl font-bold text-black dark:text-white mb-2">{cohort.season}</h3>
                <p className="text-2xl font-bold text-black dark:text-white mb-2">{cohort.date}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm bg-gray-100 dark:bg-gray-900 px-3 py-1">{cohort.spots}</span>
                  <span className="text-sm text-gray-500">{cohort.deadline}</span>
                </div>
                <Link href="/bootcampsapply">
                  <button className="w-full px-4 py-3 bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 transition-all flex items-center justify-center gap-2 font-medium">
                    Apply Now
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/bootcampsapply" className="inline-flex items-center gap-2 text-black dark:text-white font-medium hover:gap-3 transition-all">
              View all upcoming cohorts
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" ref={setSectionRef("faq")} className="py-24 bg-white dark:bg-black">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-black dark:text-white text-sm font-medium mb-6">
              <MessageCircle className="w-4 h-4" />
              Got Questions?
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
              Frequently Asked Questions About Our Coding Bootcamp
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800">
                <button
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 dark:hover:bg-gray-950 transition-colors"
                >
                  <span className="font-medium text-black dark:text-white">{faq.question}</span>
                  <ChevronRight className={`w-5 h-5 transition-transform ${activeFaq === index ? "rotate-90" : ""}`} />
                </button>
                {activeFaq === index && (
                  <div className="px-4 pb-4 pt-0 border-t border-gray-200 dark:border-gray-800">
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/contact" className="inline-flex items-center gap-2 text-black dark:text-white font-medium hover:gap-3 transition-all">
              Still have questions? Contact us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-black dark:bg-white text-white dark:text-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Tech Journey at the Best Tech School in Port Harcourt?
          </h2>
          <p className="text-xl text-gray-300 dark:text-gray-700 mb-8 max-w-2xl mx-auto">
            Join 1,675+ graduates who transformed their careers with job placement support at Yelocode Systems.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/coursecatalog"
              className="px-8 py-4 bg-white dark:bg-black text-black dark:text-white font-semibold hover:bg-gray-200 dark:hover:bg-gray-900 transition-all duration-300 inline-flex items-center gap-2 group"
            >
              <GraduationCap className="w-5 h-5" />
              Explore Programs
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 border-2 border-white dark:border-black text-white dark:text-black font-semibold hover:bg-white/10 dark:hover:bg-black/10 transition-all duration-300 inline-flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Schedule Consultation
            </Link>
          </div>
          <p className="text-sm text-gray-400 dark:text-gray-600 mt-6">
            No. 11 Elekahia, Port Harcourt, Nigeria | +234 916 286 5693 | info@yelocodesys.com
          </p>
        </div>
      </section>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(15px); opacity: 0; }
        }
        .animate-scroll {
          animation: scroll 1.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}