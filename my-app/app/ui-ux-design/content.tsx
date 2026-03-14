"use client";

import { useState } from 'react'
import { 
  PenTool, GraduationCap, Search, MessageSquare, Check, X,
  Clock, Users, Award, Calendar, Laptop, BookOpen,
  PlayCircle, ChevronDown, ExternalLink, Star,
  Briefcase, Target, Zap, Globe, Mail, Phone,
  FileText, Video, Coffee, Rocket,
  GitBranch, Terminal, Database, Layout, Server,
  Layers, Cpu, Gauge, Shield, Users2, Workflow,
  FolderCode, TestTube, Cloud, Palette,
  TrendingUp, DollarSign, Home, Smartphone,
  ShoppingCart, Newspaper, Youtube, Camera,
  Music, Gamepad, Plane, Car, Heart,
  Building2, Map, Sun, Moon, Activity,
  Wallet, Trophy, Gift, Truck, Dog, Leaf, Bike, Ticket, GlassWater, Shirt, Watch,
  Pen, PenLine, Pencil, Brush, Eraser, Scissors, 
  Paintbrush, PaintBucket, Pipette, Ruler, Compass,
  Layers as LayersIcon, Grid, Box, Circle, Square,
  Type, Bold, Italic, Underline, AlignLeft,
  Image, Video as VideoIcon, Figma, Smartphone as SmartphoneIcon,
  Tablet, Monitor, Mouse, Pointer, Hand,
  Eye, EyeOff, Move, ZoomIn, Mic,
  Download, Upload, Share, Settings, Brain
} from 'lucide-react'
import Link from 'next/link'

export default function UiUxPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  // 16-Week Curriculum with 30 projects
  const weeklyCurriculum = [
    {
      week: 1,
      title: 'Design Fundamentals',
      description: 'Master the core principles of visual design and user experience.',
      topics: [
        'Elements of Design - line, shape, color, texture, space, form',
        'Principles of Design - balance, contrast, emphasis, movement, pattern',
        'Color Theory - color wheel, harmonies, psychology, accessibility',
        'Typography Fundamentals - typefaces, hierarchy, readability, pairing',
        'Grid Systems - layout, alignment, spacing, composition',
        'Design Thinking Process - empathize, define, ideate, prototype, test'
      ],
      project: {
        title: 'Project 1: Design Principles Poster',
        description: 'Create a poster demonstrating key design principles',
        features: ['Visual hierarchy', 'Color theory application', 'Typography pairing', 'Grid layout']
      }
    },
    {
      week: 2,
      title: 'User Research & Psychology',
      description: 'Understand user behavior and how to conduct effective research.',
      topics: [
        'User Psychology - cognitive load, mental models, decision making',
        'User Research Methods - interviews, surveys, observation, diary studies',
        'Creating User Personas - demographics, goals, pain points, behaviors',
        'Empathy Mapping - says, thinks, does, feels',
        'User Journey Mapping - touchpoints, emotions, opportunities',
        'Competitive Analysis - SWOT analysis, feature comparison'
      ],
      project: {
        title: 'Project 2: E-commerce User Research',
        description: 'Conduct user research and create personas for an e-commerce app',
        features: ['User interviews', 'Persona creation', 'Journey map', 'Research findings']
      }
    },
    {
      week: 3,
      title: 'Information Architecture',
      description: 'Organize content and structure for optimal user experience.',
      topics: [
        'Content Inventory - auditing existing content',
        'Card Sorting - open, closed, hybrid approaches',
        'Site Mapping - hierarchy, navigation structure',
        'User Flows - task flows, wireflows, sitemaps',
        'Taxonomy and Labeling - categories, tags, naming conventions',
        'Search and Wayfinding - search patterns, breadcrumbs'
      ],
      project: {
        title: 'Project 3: News Website IA',
        description: 'Design information architecture for a news portal',
        features: ['Content audit', 'Card sorting', 'Site map', 'User flows']
      }
    },
    {
      week: 4,
      title: 'Wireframing & Prototyping',
      description: 'Create low to high-fidelity prototypes for testing and communication.',
      topics: [
        'Sketching Techniques - rapid ideation, thumbnail sketches',
        'Low-Fidelity Wireframes - paper prototypes, digital wireframes',
        'Mid-Fidelity Wireframes - gray scale, proper spacing, content placement',
        'High-Fidelity Mockups - pixel perfect, visual design applied',
        'Interactive Prototyping - clickable prototypes, micro-interactions',
        'Prototyping Tools - Figma basics, components, auto-layout'
      ],
      project: {
        title: 'Project 4: Food Delivery App Wireframes',
        description: 'Create wireframes and prototype for a food delivery app',
        features: ['Low-fi sketches', 'Digital wireframes', 'Interactive prototype', 'User testing']
      }
    },
    {
      week: 5,
      title: 'Visual Design Mastery',
      description: 'Develop advanced visual design skills for stunning interfaces.',
      topics: [
        'Visual Hierarchy - size, color, position, contrast',
        'Composition Techniques - rule of thirds, golden ratio',
        'Icon Design - custom icons, icon systems, consistency',
        'Imagery and Illustration - photo selection, custom illustrations',
        'Micro-interactions - animation principles, feedback',
        'Design Systems - consistency, components, documentation'
      ],
      project: {
        title: 'Project 5: Banking App Visual Design',
        description: 'Apply visual design to a banking app interface',
        features: ['Custom icons', 'Illustration style', 'Micro-interactions', 'Design system']
      }
    },
    {
      week: 6,
      title: 'Figma Masterclass',
      description: 'Become an expert in Figma for professional UI/UX design.',
      topics: [
        'Figma Advanced Features - components, variants, auto-layout',
        'Design Systems in Figma - styles, variables, libraries',
        'Collaboration Tools - commenting, version history, sharing',
        'Plugins and Widgets - productivity tools, assets',
        'Prototyping Advanced - conditional logic, variables',
        'Developer Handoff - inspect mode, specs, assets export'
      ],
      project: {
        title: 'Project 6: Design System Library',
        description: 'Create a comprehensive design system in Figma',
        features: ['Color styles', 'Typography styles', 'Component library', 'Documentation']
      }
    },
    {
      week: 7,
      title: 'User Testing & Validation',
      description: 'Test designs with real users and iterate based on feedback.',
      topics: [
        'Usability Testing - moderated, unmoderated, remote',
        'Test Planning - objectives, tasks, recruitment',
        'Conducting Tests - facilitation, observation, note-taking',
        'Analyzing Results - affinity mapping, prioritization',
        'A/B Testing - hypothesis, variants, statistical significance',
        'Iterative Design - incorporating feedback, version control'
      ],
      project: {
        title: 'Project 7: Usability Test Report',
        description: 'Conduct usability testing on an existing app and report findings',
        features: ['Test plan', 'Session recordings', 'Findings analysis', 'Recommendations']
      }
    },
    {
      week: 8,
      title: 'Mobile Design',
      description: 'Design for iOS and Android platforms with platform-specific guidelines.',
      topics: [
        'Mobile Design Principles - thumb zone, one-handed use',
        'iOS Human Interface Guidelines - navigation, patterns, components',
        'Material Design Guidelines - Android patterns, components',
        'Responsive vs Adaptive Design - approaches and techniques',
        'Mobile Navigation - tabs, drawers, gestures',
        'Mobile Forms - input methods, validation, keyboards'
      ],
      project: {
        title: 'Project 8: Travel App for iOS/Android',
        description: 'Design a travel app following platform guidelines',
        features: ['iOS version', 'Android version', 'Consistent experience', 'Platform-specific patterns']
      }
    },
    {
      week: 9,
      title: 'Web Design',
      description: 'Create responsive websites that work beautifully across devices.',
      topics: [
        'Responsive Web Design - fluid grids, flexible images, media queries',
        'Desktop Design Principles - multi-column layouts, hover states',
        'Navigation Patterns - mega menus, hamburger, sticky headers',
        'Landing Page Design - conversion optimization, storytelling',
        'Dashboard Design - data visualization, KPIs, widgets',
        'Form Design - best practices, validation, error states'
      ],
      project: {
        title: 'Project 9: SaaS Landing Page',
        description: 'Design a responsive landing page for a SaaS product',
        features: ['Desktop design', 'Mobile design', 'Tablet design', 'Conversion-focused']
      }
    },
    {
      week: 10,
      title: 'UX Writing & Content Strategy',
      description: 'Craft clear, concise copy that enhances user experience.',
      topics: [
        'UX Writing Principles - clarity, conciseness, usefulness',
        'Microcopy - buttons, error messages, tooltips, empty states',
        'Voice and Tone - brand personality, consistency',
        'Content Strategy - content types, governance, maintenance',
        'Localization - adapting for different cultures, languages',
        'Accessible Writing - plain language, reading levels'
      ],
      project: {
        title: 'Project 10: App Copy Audit',
        description: 'Audit and improve copy for an existing application',
        features: ['Copy inventory', 'Voice guidelines', 'Improved microcopy', 'Style guide']
      }
    },
    {
      week: 11,
      title: 'Accessibility Design',
      description: 'Create inclusive designs that work for everyone.',
      topics: [
        'WCAG Guidelines - perceivable, operable, understandable, robust',
        'Color Contrast - requirements, tools, testing',
        'Screen Reader Compatibility - semantic HTML, ARIA labels',
        'Keyboard Navigation - focus states, tab order',
        'Accessible Forms - labels, errors, instructions',
        'Inclusive Design Principles - flexibility, simplicity, equity'
      ],
      project: {
        title: 'Project 11: Accessibility Audit',
        description: 'Audit a website for accessibility and create improvement plan',
        features: ['WCAG checklist', 'Contrast testing', 'Keyboard testing', 'Recommendations']
      }
    },
    {
      week: 12,
      title: 'Design for Emerging Technologies',
      description: 'Explore designing for AR/VR, voice, and AI interfaces.',
      topics: [
        'Voice User Interface Design - conversation design, prompts',
        'AR/VR Design - spatial interfaces, 3D elements, immersion',
        'AI and Machine Learning in Design - personalization, predictions',
        'Wearable Design - watch faces, notifications, glanceability',
        'IoT Design - smart home, device interfaces',
        'Ethical Design - privacy, dark patterns, responsibility'
      ],
      project: {
        title: 'Project 12: Smart Home Voice Interface',
        description: 'Design a voice interface for smart home control',
        features: ['Conversation flows', 'Voice prompts', 'Error handling', 'Multi-device scenarios']
      }
    },
    {
      week: 13,
      title: 'Portfolio Development',
      description: 'Build a professional portfolio to showcase your work.',
      topics: [
        'Case Study Structure - problem, process, solution, results',
        'Storytelling in Portfolios - narrative, context, impact',
        'Visual Presentation - mockups, prototypes, screenshots',
        'Portfolio Website Design - personal branding, showcase',
        'Behance/Dribbble Best Practices - platform optimization',
        'Process Documentation - sketches, iterations, rationale'
      ],
      project: {
        title: 'Project 13: Portfolio Case Study',
        description: 'Create a comprehensive case study for a past project',
        features: ['Problem statement', 'Design process', 'Final designs', 'Results/metrics']
      }
    },
    {
      week: 14,
      title: 'Design Leadership & Collaboration',
      description: 'Learn to work effectively with developers, product managers, and stakeholders.',
      topics: [
        'Working with Developers - handoff, collaboration, feasibility',
        'Design Critique - giving and receiving feedback',
        'Presenting to Stakeholders - storytelling, rationale, buy-in',
        'Product Strategy - business goals, user needs, technical feasibility',
        'Design Ops - workflows, tools, processes',
        'Mentoring and Leadership - growing as a senior designer'
      ],
      project: {
        title: 'Project 14: Product Strategy Deck',
        description: 'Create a product strategy presentation for stakeholders',
        features: ['User research', 'Business goals', 'Design solution', 'Success metrics']
      }
    },
    {
      week: 15,
      title: 'Freelancing & Business Skills',
      description: 'Start your own design business or freelance career.',
      topics: [
        'Freelance Fundamentals - pricing, contracts, invoicing',
        'Client Management - communication, expectations, revisions',
        'Personal Branding - website, social media, networking',
        'Proposal Writing - scope, timeline, deliverables',
        'Portfolio Marketing - promoting your work',
        'Business Finances - taxes, expenses, savings'
      ],
      project: {
        title: 'Project 15: Freelance Business Plan',
        description: 'Create a business plan for your design freelance career',
        features: ['Service offerings', 'Pricing structure', 'Marketing plan', 'Financial projections']
      }
    },
    {
      week: 16,
      title: 'Capstone Project & Career Preparation',
      description: 'Build a comprehensive portfolio project and prepare for job interviews.',
      topics: [
        'End-to-End Project - from research to high-fidelity design',
        'Portfolio Polish - refining your best work',
        'Resume Writing - highlighting design skills',
        'Interview Preparation - portfolio presentation, design challenges',
        'Job Search Strategy - targeting companies, networking',
        'Industry Trends - staying current in design'
      ],
      project: {
        title: 'Project 16-30: Capstone Projects (Choose 15)',
        description: 'Select and build 15 additional projects from the list below',
        features: ['End-to-end process', 'Real-world problems', 'Portfolio ready', 'Industry feedback']
      }
    }
  ];

  // 30 Additional Projects
  const additionalProjects = [
    { icon: SmartphoneIcon, title: 'Ride-Sharing App Redesign', description: 'Redesign Uber/Bolt with improved UX', difficulty: 'Intermediate' },
    { icon: ShoppingCart, title: 'E-commerce Checkout Flow', description: 'Optimize checkout conversion', difficulty: 'Intermediate' },
    { icon: Newspaper, title: 'News App with Personalization', description: 'Design personalized news feed', difficulty: 'Advanced' },
    { icon: VideoIcon, title: 'Streaming Service Interface', description: 'Netflix/YouTube redesign', difficulty: 'Advanced' },
    { icon: Camera, title: 'Photo Editing App', description: 'Design mobile photo editor', difficulty: 'Advanced' },
    { icon: Music, title: 'Music Player App', description: 'Spotify-inspired player design', difficulty: 'Intermediate' },
    { icon: Gamepad, title: 'Mobile Game UI', description: 'Design game interface and HUD', difficulty: 'Advanced' },
    { icon: Plane, title: 'Flight Booking Experience', description: 'Streamline flight booking', difficulty: 'Intermediate' },
    { icon: Car, title: 'Car Rental App', description: 'Design car rental platform', difficulty: 'Intermediate' },
    { icon: Heart, title: 'Fitness Tracker App', description: 'Workout and health tracking', difficulty: 'Intermediate' },
    { icon: Building2, title: 'Hotel Booking Website', description: 'Hotel search and booking', difficulty: 'Intermediate' },
    { icon: Map, title: 'Event Discovery App', description: 'Find local events and tickets', difficulty: 'Intermediate' },
    { icon: Sun, title: 'Weather App Design', description: 'Beautiful weather interface', difficulty: 'Beginner' },
    { icon: Moon, title: 'Sleep Tracking App', description: 'Sleep cycle and alarm design', difficulty: 'Beginner' },
    { icon: Activity, title: 'Analytics Dashboard', description: 'Data visualization dashboard', difficulty: 'Advanced' },
    { icon: Users2, title: 'Social Media App', description: 'Design social platform', difficulty: 'Advanced' },
    { icon: Wallet, title: 'Personal Finance App', description: 'Budget tracking design', difficulty: 'Intermediate' },
    { icon: Calendar, title: 'Scheduling App', description: 'Calendar and appointments', difficulty: 'Intermediate' },
    { icon: BookOpen, title: 'E-Learning Platform', description: 'Online course interface', difficulty: 'Advanced' },
    { icon: Trophy, title: 'Sports App', description: 'Scores and team tracking', difficulty: 'Intermediate' },
    { icon: Coffee, title: 'Restaurant Menu App', description: 'Digital menu and ordering', difficulty: 'Beginner' },
    { icon: Gift, title: 'Gift Registry App', description: 'Wedding/baby registry', difficulty: 'Beginner' },
    { icon: Truck, title: 'Package Tracker', description: 'Delivery tracking interface', difficulty: 'Beginner' },
    { icon: Dog, title: 'Pet Care App', description: 'Pet sitting and services', difficulty: 'Intermediate' },
    { icon: Leaf, title: 'Recipe App', description: 'Cooking and meal planning', difficulty: 'Intermediate' },
    { icon: Bike, title: 'Bike Sharing App', description: 'Find and rent bikes', difficulty: 'Intermediate' },
    { icon: Ticket, title: 'Movie Ticket App', description: 'Cinema booking design', difficulty: 'Intermediate' },
    { icon: GlassWater, title: 'Cocktail Recipe App', description: 'Drink recipes and guides', difficulty: 'Beginner' },
    { icon: Shirt, title: 'Fashion Lookbook', description: 'Clothing catalog design', difficulty: 'Intermediate' },
    { icon: Watch, title: 'Smart Watch Faces', description: 'Custom watch face designs', difficulty: 'Beginner' }
  ];

  const faqs = [
    {
      question: "What is UI/UX Design?",
      answer: "UI (User Interface) Design focuses on the look and feel of a product - the visual elements like colors, typography, buttons, and layouts. UX (User Experience) Design focuses on the overall experience - how users interact with the product, how easy it is to use, and how it makes them feel. Together, UI/UX design creates products that are both beautiful and functional. This field combines creativity with psychology, research, and problem-solving to design digital experiences that users love."
    },
    {
      question: "Why should I learn UI/UX Design?",
      answer: "Learning UI/UX design offers numerous benefits: 1) High Demand - Every digital product needs good design. 2) Competitive Salaries - Skilled designers are well-compensated. 3) Creative Expression - Combine art with functionality. 4) Problem Solving - Make complex tasks simple and enjoyable. 5) User Advocacy - Be the voice of the user. 6) Versatility - Work in tech, finance, healthcare, or any industry. 7) Remote Work - Many design roles offer flexibility. 8) Continuous Learning - New tools and trends keep it exciting. 9) Impact - Your designs affect millions of users. 10) Career Growth - Path to product design, design leadership, or specialization."
    },
    {
      question: "What can I do with UI/UX Design skills?",
      answer: "With UI/UX design skills, you can: 1) Become a UI/UX Designer at tech companies. 2) Specialize as a Product Designer. 3) Work as a UX Researcher focusing on user insights. 4) Become a UI Developer with coding skills. 5) Work as a Design Consultant. 6) Start a freelance design business. 7) Join design agencies. 8) Work in-house for product companies. 9) Specialize in mobile design, web design, or emerging tech. 10) Become a Design Lead or Manager. 11) Teach design or create content. 12) Design for social impact and non-profits."
    },
    {
      question: "What is the best roadmap to become a UI/UX Designer?",
      answer: "The complete UI/UX design roadmap: 1) Master design fundamentals (color, typography, composition). 2) Learn user research methods and psychology. 3) Understand information architecture. 4) Practice wireframing and prototyping. 5) Master Figma and design tools. 6) Study platform guidelines (iOS, Android, Web). 7) Learn visual design and branding. 8) Understand accessibility and inclusive design. 9) Build a portfolio with real projects. 10) Learn to present and communicate design decisions. 11) Study basic frontend development (HTML/CSS). 12) Prepare for interviews with design challenges. This 16-week course covers exactly this roadmap with 30+ hands-on projects."
    },
    {
      question: "Do I need artistic talent or drawing skills?",
      answer: "No! While creativity helps, you don't need to be an artist. UI/UX design is more about problem-solving, empathy, and understanding users than artistic ability. Many successful designers can't draw well - they use digital tools, wireframes, and existing components. What matters most is your ability to understand user needs, think critically about solutions, and communicate your ideas effectively. The artistic polish comes from practice and learning the tools."
    },
    {
      question: "What is the time commitment for this 16-week course?",
      answer: "We recommend dedicating 15-20 hours per week. This includes 6 hours of live/recorded sessions and 9-14 hours of hands-on design work, research, and projects. With 30+ projects, you'll get extensive practical experience building your portfolio. The flexible schedule allows working professionals to participate by dedicating evenings and weekends."
    },
    {
      question: "What kind of projects will I build?",
      answer: "You'll build 30+ real-world projects including: Design Principles Poster, User Research Portfolio, E-commerce App Wireframes, Banking App Visual Design, Design System Library, Travel App for iOS/Android, SaaS Landing Page, Smart Home Voice Interface, Portfolio Case Studies, and many more. Projects range from beginner to advanced, covering web, mobile, voice, and emerging technologies. By the end, you'll have a comprehensive portfolio demonstrating your skills to employers."
    },
    {
      question: "What tools and technologies will I master?",
      answer: "You'll master: Figma (primary design tool), Adobe XD, Sketch, Miro for wireframing, Notion for documentation, Protopie for advanced prototyping, Maze for user testing, Illustrator basics, Photoshop basics, Webflow for no-code design, and collaboration tools like Zeplin and Abstract. You'll also learn HTML/CSS fundamentals to communicate better with developers. Most importantly, you'll master the design process - research, ideation, prototyping, testing, and iteration."
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      
      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1920&h=1080&fit=crop"
            alt="UI/UX Design"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/90 to-yellow-900/80" />
        </div>
        
        {/* Gradient orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl animate-pulse animation-delay-2000" />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 text-white">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium px-4 py-2 rounded-full mb-6">
              <PenTool className="w-4 h-4" />
              Complete 16-Week UI/UX Design Bootcamp
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Become a Professional{' '}
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-400 bg-clip-text text-transparent">
                UI/UX Designer
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
              Master user interface and experience design with 30+ hands-on projects. 
              Learn design thinking, Figma, user research, prototyping, and portfolio development. 
              No prior design experience required.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link href="/Careers">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-yellow-600 to-yellow-600 text-white font-semibold rounded-xl overflow-hidden transition-all hover:shadow-xl hover:shadow-yellow-500/25 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5" />
                  Enroll Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>

            <div className="flex flex-wrap gap-8 mt-12">
              <div>
                <div className="text-3xl font-bold">16</div>
                <div className="text-sm text-gray-400">Weeks</div>
              </div>
              <div>
                <div className="text-3xl font-bold">30+</div>
                <div className="text-sm text-gray-400">Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold">100+</div>
                <div className="text-sm text-gray-400">Hours</div>
              </div>
              <div>
                <div className="text-3xl font-bold">8+</div>
                <div className="text-sm text-gray-400">Tools</div>
              </div>
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

      {/* What is UI/UX Design Section */}
      <section className="py-16 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                What is <span className="text-yellow-600 dark:text-yellow-400">UI/UX Design</span>?
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                UI/UX Design is the art and science of creating digital products that are both beautiful and functional. It combines visual design, psychology, research, and technology to craft experiences that users love and find intuitive.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                UI/UX Design encompasses:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="p-1 bg-yellow-100 dark:bg-yellow-900/30 rounded mt-1">
                    <Palette className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900 dark:text-white">UI Design:</span>
                    <span className="text-gray-600 dark:text-gray-400"> The visual interface - colors, typography, buttons, icons, and layout that users see and interact with.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1 bg-yellow-100 dark:bg-yellow-900/30 rounded mt-1">
                    <Users className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900 dark:text-white">UX Design:</span>
                    <span className="text-gray-600 dark:text-gray-400"> The overall experience - how users feel, how easy it is to accomplish tasks, and the journey they take.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1 bg-yellow-100 dark:bg-yellow-900/30 rounded mt-1">
                    <LayersIcon className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900 dark:text-white">Interaction Design:</span>
                    <span className="text-gray-600 dark:text-gray-400"> How users interact with the product - animations, transitions, feedback, and micro-interactions.</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { number: '87%', label: 'Users prioritize design' },
                { number: '$90k+', label: 'Average designer salary' },
                { number: '20%', label: 'Industry growth rate' },
                { number: '100%', label: 'Creative satisfaction' }
              ].map((stat, i) => (
                <div key={i} className="p-4 bg-gray-50 dark:bg-gray-900 rounded-xl text-center">
                  <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">{stat.number}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Learn UI/UX Design */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
              Why Learn <span className="text-yellow-600 dark:text-yellow-400">UI/UX Design</span>?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              10 compelling reasons to start your design journey today
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: TrendingUp, title: 'High Demand', description: 'Every company needs designers. From startups to Fortune 500s, design skills are in high demand.' },
              { icon: DollarSign, title: 'Excellent Salary', description: 'UI/UX designers command competitive salaries with great growth potential.' },
              { icon: Globe, title: 'Work Anywhere', description: 'Design is a remote-friendly career. Work from anywhere with just a laptop and internet.' },
              { icon: Rocket, title: 'Quick Entry', description: 'Start your career in months, not years. Our 16-week bootcamp gets you job-ready.' },
              { icon: Brain, title: 'Creative Problem Solving', description: 'Combine creativity with logic to solve real user problems.' },
              { icon: Heart, title: 'User Advocacy', description: 'Be the voice of the user and make products that truly help people.' },
              { icon: Users, title: 'Collaborative Role', description: 'Work with developers, product managers, and stakeholders daily.' },
              { icon: Award, title: 'Continuous Learning', description: 'New tools, trends, and technologies keep design exciting and fresh.' },
              { icon: Briefcase, title: 'Freelance Freedom', description: 'Build your own business, choose your clients, and set your own schedule.' }
            ].map((reason, i) => {
              const Icon = reason.icon
              return (
                <div key={i} className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition">
                  <Icon className="w-8 h-8 text-yellow-600 dark:text-yellow-400 mb-3" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{reason.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{reason.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* What You Can Design */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
              What You Can <span className="text-yellow-600 dark:text-yellow-400">Design</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              With UI/UX design skills, you can create beautiful experiences across platforms
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: SmartphoneIcon, label: 'Mobile Apps' },
              { icon: Monitor, label: 'Websites' },
              { icon: Tablet, label: 'Tablet Apps' },
              { icon: Watch, label: 'Wearables' },
              { icon: Tv, label: 'TV Interfaces' },
              { icon: Car, label: 'Car Dashboards' },
              { icon: Mic, label: 'Voice Interfaces' },
              { icon: Eye, label: 'AR/VR Experiences' },
              { icon: Layout, label: 'Dashboards' },
              { icon: ShoppingCart, label: 'E-commerce' },
              { icon: Gamepad, label: 'Games' },
              { icon: BookOpen, label: 'E-learning' },
              { icon: Activity, label: 'Data Visualizations' },
              { icon: Building2, label: 'Enterprise Software' },
              { icon: Heart, label: 'Health Apps' },
              { icon: Map, label: 'Map Interfaces' }
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <div key={i} className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg text-center hover:bg-yellow-50 dark:hover:bg-yellow-900/20 transition-colors">
                  <Icon className="w-6 h-6 text-yellow-600 dark:text-yellow-400 mx-auto mb-2" />
                  <span className="text-sm font-medium text-gray-900 dark:text-white">{item.label}</span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* The Complete Roadmap */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
              The Complete <span className="text-yellow-600 dark:text-yellow-400">Roadmap</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Follow this proven path to become a professional UI/UX designer
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-500 to-yellow-500 hidden md:block" />

            <div className="space-y-8">
              {[
                { phase: 'Phase 1', title: 'Design Fundamentals', weeks: 'Weeks 1-4', color: 'yellow', topics: ['Design Principles', 'Color Theory', 'Typography', 'User Research'] },
                { phase: 'Phase 2', title: 'UX Process & Tools', weeks: 'Weeks 5-8', color: 'yellow', topics: ['Information Architecture', 'Wireframing', 'Figma', 'Prototyping'] },
                { phase: 'Phase 3', title: 'Visual Design Mastery', weeks: 'Weeks 9-12', color: 'yellow', topics: ['Visual Design', 'Design Systems', 'Mobile Design', 'Web Design'] },
                { phase: 'Phase 4', title: 'Portfolio & Career', weeks: 'Weeks 13-16', color: 'yellow', topics: ['Portfolio Development', 'UX Writing', 'Accessibility', 'Career Prep'] }
              ].map((phase, idx) => (
                <div key={idx} className="relative md:ml-16">
                  <div className={`absolute left-0 top-2 w-8 h-8 rounded-full bg-${phase.color}-500 hidden md:flex items-center justify-center text-white font-bold`}>
                    {idx + 1}
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className={`px-3 py-1 bg-${phase.color}-100 dark:bg-${phase.color}-900/30 text-${phase.color}-600 dark:text-${phase.color}-400 text-sm font-medium rounded-full`}>
                        {phase.phase}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{phase.weeks}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{phase.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {phase.topics.map((topic, i) => (
                        <span key={i} className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 16-Week Curriculum */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
              16-Week <span className="text-yellow-600 dark:text-yellow-400">Curriculum</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
              Week-by-week breakdown of your learning journey with 30+ projects
            </p>
            <div className="inline-flex items-center gap-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 px-4 py-2 rounded-full">
              <Rocket className="w-4 h-4" />
              <span className="font-medium">{weeklyCurriculum.length} Weeks • 30+ Projects</span>
            </div>
          </div>

          <div className="space-y-4">
            {weeklyCurriculum.map((week) => (
              <div key={week.week} className="border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden">
                <div className="bg-gray-50 dark:bg-gray-900 p-4 border-b border-gray-200 dark:border-gray-800">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 bg-yellow-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                        {week.week}
                      </span>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">{week.title}</h3>
                    </div>
                    <span className="text-sm px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 rounded-full">
                      Project: {week.project.title}
                    </span>
                  </div>
                </div>
                
                <div className="p-4 bg-white dark:bg-gray-800">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{week.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-yellow-600" />
                        Topics Covered
                      </h4>
                      <ul className="space-y-1">
                        {week.topics.map((topic, i) => (
                          <li key={i} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                            <span className="text-yellow-600 mt-1">•</span>
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                        <Rocket className="w-4 h-4 text-yellow-600" />
                        Project: {week.project.title}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{week.project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {week.project.features.map((feature, i) => (
                          <span key={i} className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 30+ Projects Showcase */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
              30+ <span className="text-yellow-600 dark:text-yellow-400">Real-World Projects</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Build an impressive portfolio with projects of all difficulty levels
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {additionalProjects.map((project, i) => {
              const Icon = project.icon
              const difficultyColor = 
                project.difficulty === 'Beginner' ? 'text-green-600 bg-green-100 dark:bg-green-900/30 dark:text-green-400' :
                project.difficulty === 'Intermediate' ? 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900/30 dark:text-yellow-400' :
                'text-red-600 bg-red-100 dark:bg-red-900/30 dark:text-red-400'
              
              return (
                <div key={i} className="p-4 bg-white dark:bg-gray-800 rounded-lg hover:shadow-md transition">
                  <div className="flex items-start gap-3 mb-2">
                    <div className="p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg">
                      <Icon className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white text-sm">{project.title}</h3>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${difficultyColor}`}>
                        {project.difficulty}
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-2">{project.description}</p>
                </div>
              )
            })}
          </div>

          <div className="text-center mt-8">
            <div className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-6 py-3 rounded-full">
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              <span className="text-gray-900 dark:text-white font-medium">Plus 16 weekly projects = 30+ total projects</span>
            </div>
          </div>
        </div>
      </section>

      {/* Tools You'll Master */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
              Tools You'll <span className="text-yellow-600 dark:text-yellow-400">Master</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Industry-standard design tools and software
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { icon: Figma, name: 'Figma' },
              { icon: PenTool, name: 'Adobe XD' },
              { icon: Brush, name: 'Sketch' },
              { icon: LayersIcon, name: 'Miro' },
              { icon: VideoIcon, name: 'Protopie' },
              { icon: Layout, name: 'Webflow' },
              { icon: Image, name: 'Photoshop' },
              { icon: Pen, name: 'Illustrator' },
              { icon: Type, name: 'Notion' },
              { icon: Grid, name: 'Zeplin' },
              { icon: Eye, name: 'Maze' },
              { icon: Move, name: 'InVision' }
            ].map((tool, i) => {
              const Icon = tool.icon
              return (
                <div key={i} className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg text-center hover:shadow-md transition">
                  <Icon className="w-6 h-6 text-yellow-600 dark:text-yellow-400 mx-auto mb-2" />
                  <span className="text-sm font-medium text-gray-900 dark:text-white">{tool.name}</span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Career Paths Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-600 to-yellow-600 text-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Launch Your Design Career?</h2>
          <p className="text-xl text-yellow-100 mb-8 max-w-2xl mx-auto">
            Join our UI/UX Design bootcamp and get access to our career support team. We'll help you build your portfolio, prepare for interviews, and connect with top companies hiring designers.
          </p>
          <Link href="/Careers">
            <button className="px-8 py-4 bg-white text-yellow-600 font-semibold rounded-xl hover:bg-gray-100 transition-all hover:shadow-xl inline-flex items-center gap-2 group">
              <Briefcase className="w-5 h-5" />
              Explore Career Opportunities
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
              Frequently Asked <span className="text-yellow-600 dark:text-yellow-400">Questions</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Everything you need to know about our UI/UX design course
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  <span className="font-medium text-gray-900 dark:text-white">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === index && (
                  <div className="px-6 py-4 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-200 dark:border-gray-800">
                    <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-600 to-yellow-600 text-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h2 className="text-3xl font-bold mb-2">Ready to Start Your Design Journey?</h2>
              <p className="text-yellow-100">Join 2,500+ students who have transformed their careers with Yelocode.</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="/Careers">
                <button className="px-6 py-3 bg-white text-yellow-600 font-medium rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-2">
                  <GraduationCap className="w-5 h-5" />
                  Enroll Now
                </button>
              </Link>
              <a href="/contacts">
              <button className="px-6 py-3 border border-white/30 text-white font-medium rounded-lg hover:bg-white/10 transition-colors flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Schedule Consultation
              </button></a>
            </div>
          </div>
        </div>
      </section>

      {/* Animation styles */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
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
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animate-scroll {
          animation: scroll 1.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}

// ArrowRight component
const ArrowRight = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
)

// Missing icon imports
const Tv = Monitor // Using Monitor as TV alternative