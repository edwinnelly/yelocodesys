"use client";

import { useState } from 'react'
import { 
  Smartphone, GraduationCap, Search, MessageSquare, Check, X,
  Clock, Users, Award, Calendar, Laptop, BookOpen,
  PlayCircle, ChevronDown, ExternalLink, Star,
  Briefcase, Target, Zap, Globe, Mail, Phone,
  FileText, Video, Coffee, Rocket,
  GitBranch, Terminal, Database, Layout, Server,
  Layers, Cpu, Gauge, Shield, Users2, Workflow,
  FolderCode, TestTube, Cloud, Palette,
  TrendingUp, DollarSign, Home,
  ShoppingCart, Newspaper, Youtube, Camera,
  Music, Gamepad, Plane, Car, Heart,
  Building2, Map, Sun, Moon, Activity,
  Wallet, Trophy, Gift, Truck, Dog, Leaf, Bike, Ticket, GlassWater, Shirt, Watch,
  Code, Figma, Chrome, Brain, 
  Tablet, Monitor, Watch as WatchIcon,
  Bluetooth, Wifi, Battery, Navigation,
  Fingerprint, Scan, QrCode, 
  PenTool, Layers as LayersIcon, Box, 
  Apple as AppleIcon, Smartphone as SmartphoneIcon,
  Bot, Eye, Mic, 
  type Icon as LucideIcon
} from 'lucide-react'
import Link from 'next/link'

export default function MobileAppPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  // 16-Week Curriculum with 30 projects
  const weeklyCurriculum = [
    {
      week: 1,
      title: 'Mobile Development Fundamentals',
      description: 'Understand the mobile ecosystem and set up your development environment.',
      topics: [
        'Mobile Platforms Overview - iOS vs Android vs Cross-Platform',
        'Development Environment Setup - Android Studio, Xcode, VS Code',
        'Mobile UI/UX Principles - touch targets, gestures, navigation patterns',
        'Introduction to Programming Logic - variables, conditionals, loops',
        'Mobile App Architecture - MVC, MVVM patterns',
        'Version Control with Git - branching, commits, repositories'
      ],
      project: {
        title: 'Project 1: Calculator App',
        description: 'Build a basic calculator app to understand mobile app structure',
        features: ['Basic arithmetic operations', 'Clean UI design', 'Portrait/landscape support', 'Error handling']
      }
    },
    {
      week: 2,
      title: 'Kotlin for Android Development',
      description: 'Master Kotlin programming language for Android app development.',
      topics: [
        'Kotlin Basics - variables, data types, null safety',
        'Object-Oriented Programming - classes, inheritance, interfaces',
        'Functional Programming - lambdas, higher-order functions',
        'Coroutines - async programming, flows, channels',
        'Collections and Sequences - lists, maps, filtering',
        'Error Handling - try-catch, runCatching, custom exceptions'
      ],
      project: {
        title: 'Project 2: Todo List App',
        description: 'Create a feature-rich todo list app with Kotlin',
        features: ['Add/edit/delete tasks', 'Task categories', 'Due dates', 'Data persistence']
      }
    },
    {
      week: 3,
      title: 'Android UI Development',
      description: 'Create beautiful and responsive Android user interfaces.',
      topics: [
        'XML Layouts - ConstraintLayout, LinearLayout, RelativeLayout',
        'Material Design Components - buttons, cards, text fields',
        'RecyclerView - adapters, view holders, item animations',
        'View Binding and Data Binding - type-safe UI access',
        'Styles and Themes - consistent design, dark mode',
        'Custom Views - drawing, touch handling, animations'
      ],
      project: {
        title: 'Project 3: Weather App UI',
        description: 'Design a beautiful weather app interface',
        features: ['Current weather card', 'Hourly forecast', '7-day forecast', 'Animated transitions']
      }
    },
    {
      week: 4,
      title: 'Swift for iOS Development',
      description: 'Master Swift programming language for iOS app development.',
      topics: [
        'Swift Basics - variables, optionals, type inference',
        'Object-Oriented Swift - classes, structs, protocols',
        'Functional Swift - closures, map, filter, reduce',
        'Concurrency - async/await, actors, Task',
        'Memory Management - ARC, retain cycles, weak references',
        'Error Handling - do-catch, throws, Result type'
      ],
      project: {
        title: 'Project 4: Notes App',
        description: 'Build a notes app with rich text editing',
        features: ['Create/edit notes', 'Format text', 'Search notes', 'iCloud sync']
      }
    },
    {
      week: 5,
      title: 'iOS UI Development with SwiftUI',
      description: 'Create modern iOS interfaces with SwiftUI.',
      topics: [
        'SwiftUI Basics - Views, modifiers, layout system',
        'State Management - @State, @Binding, @ObservedObject',
        'Navigation - NavigationView, NavigationLink, sheets',
        'Lists and Forms - dynamic lists, sections, form inputs',
        'Animations - implicit/explicit animations, transitions',
        'Previews - multiple previews, device configurations'
      ],
      project: {
        title: 'Project 5: Fitness Tracker UI',
        description: 'Design a fitness tracking app interface',
        features: ['Activity rings', 'Step counter', 'Workout logs', 'Progress charts']
      }
    },
    {
      week: 6,
      title: 'Cross-Platform with React Native',
      description: 'Build apps for both iOS and Android using React Native.',
      topics: [
        'React Native Basics - components, props, state',
        'Navigation - React Navigation, stack, tab, drawer',
        'Styling - Flexbox, StyleSheet, responsive design',
        'Native Modules - camera, location, notifications',
        'State Management - Redux Toolkit, Context API',
        'Debugging - React DevTools, Flipper, Chrome debugger'
      ],
      project: {
        title: 'Project 6: E-commerce App',
        description: 'Build a cross-platform e-commerce app',
        features: ['Product listings', 'Shopping cart', 'User authentication', 'Checkout flow']
      }
    },
    {
      week: 7,
      title: 'Flutter Development',
      description: 'Create beautiful native apps with Flutter and Dart.',
      topics: [
        'Dart Basics - variables, functions, classes',
        'Flutter Widgets - StatelessWidget, StatefulWidget',
        'Layouts - Row, Column, Stack, Container',
        'Navigation - routes, named routes, passing data',
        'State Management - Provider, Bloc, GetX',
        'Animations - implicit animations, explicit animations'
      ],
      project: {
        title: 'Project 7: Food Delivery App',
        description: 'Build a food delivery app with Flutter',
        features: ['Restaurant listings', 'Menu browsing', 'Order tracking', 'Payment integration']
      }
    },
    {
      week: 8,
      title: 'Database & Local Storage',
      description: 'Implement data persistence in mobile apps.',
      topics: [
        'SQLite Database - Room (Android), CoreData (iOS)',
        'NoSQL Options - Realm, Firebase Firestore',
        'SharedPreferences/UserDefaults - key-value storage',
        'File Storage - images, documents, caching',
        'Database Migration - version management',
        'Offline-First Architecture - sync strategies'
      ],
      project: {
        title: 'Project 8: Expense Tracker',
        description: 'Create an expense tracker with local database',
        features: ['Add expenses', 'Categories', 'Monthly reports', 'Data export']
      }
    },
    {
      week: 9,
      title: 'Networking & APIs',
      description: 'Connect mobile apps to backend services.',
      topics: [
        'RESTful APIs - Retrofit (Android), URLSession (iOS)',
        'GraphQL - Apollo Client, queries, mutations',
        'Authentication - JWT, OAuth 2.0, biometric',
        'Offline Caching - Room, CoreData, Realm',
        'WebSockets - real-time updates, chat',
        'File Upload/Download - images, documents'
      ],
      project: {
        title: 'Project 9: Social Media App',
        description: 'Build a social media app with API integration',
        features: ['User profiles', 'Post feed', 'Likes/comments', 'Image upload']
      }
    },
    {
      week: 10,
      title: 'Camera & Media',
      description: 'Integrate camera and media features into apps.',
      topics: [
        'Camera Integration - take photos, record video',
        'Image Picker - gallery selection, cropping',
        'Media Playback - audio/video players',
        'QR/Barcode Scanner - scanning, generation',
        'Image Processing - filters, editing',
        'AR Integration - basic AR experiences'
      ],
      project: {
        title: 'Project 10: QR Scanner App',
        description: 'Build a QR code scanner and generator',
        features: ['Scan QR codes', 'Generate QR codes', 'History', 'Share codes']
      }
    },
    {
      week: 11,
      title: 'Location & Maps',
      description: 'Add location-based features to mobile apps.',
      topics: [
        'Location Services - GPS, network location',
        'Geocoding/Reverse Geocoding - addresses to coordinates',
        'Map Integration - Google Maps, MapKit',
        'Custom Map Markers - annotations, clusters',
        'Route Planning - directions, polyline',
        'Geofencing - location-based triggers'
      ],
      project: {
        title: 'Project 11: Restaurant Finder',
        description: 'Create a restaurant finder with maps',
        features: ['Nearby restaurants', 'Map view', 'Restaurant details', 'Directions']
      }
    },
    {
      week: 12,
      title: 'Push Notifications',
      description: 'Implement push notifications for user engagement.',
      topics: [
        'FCM (Firebase Cloud Messaging) - setup, messages',
        'APNs (Apple Push Notification service) - certificates',
        'Local Notifications - scheduling, actions',
        'Notification Channels - Android categories',
        'Rich Notifications - images, buttons, inputs',
        'Notification Analytics - open rates, engagement'
      ],
      project: {
        title: 'Project 12: News App',
        description: 'Build a news app with push notifications',
        features: ['News feed', 'Categories', 'Breaking news alerts', 'Save articles']
      }
    },
    {
      week: 13,
      title: 'Performance & Optimization',
      description: 'Optimize mobile apps for best performance.',
      topics: [
        'App Startup Time - lazy loading, initialization',
        'Memory Management - leaks, profiling',
        'Battery Optimization - background tasks, wake locks',
        'Network Optimization - caching, compression',
        'Image Optimization - loading, caching, sizing',
        'Profiling Tools - Android Profiler, Instruments'
      ],
      project: {
        title: 'Project 13: Performance Audit',
        description: 'Audit and optimize an existing app',
        features: ['Memory analysis', 'Network optimization', 'Startup time', 'Battery usage']
      }
    },
    {
      week: 14,
      title: 'Testing & Debugging',
      description: 'Ensure app quality with comprehensive testing.',
      topics: [
        'Unit Testing - JUnit, XCTest, mocking',
        'UI Testing - Espresso, XCTestUI',
        'Integration Testing - testing components together',
        'Beta Testing - TestFlight, Firebase App Distribution',
        'Crash Reporting - Crashlytics, Sentry',
        'Analytics - Firebase Analytics, Mixpanel'
      ],
      project: {
        title: 'Project 14: Testing Suite',
        description: 'Create comprehensive tests for an app',
        features: ['Unit tests', 'UI tests', 'Integration tests', 'Test coverage report']
      }
    },
    {
      week: 15,
      title: 'App Store Deployment',
      description: 'Publish apps to Google Play and App Store.',
      topics: [
        'Google Play Console - setup, signing, publishing',
        'App Store Connect - certificates, provisioning',
        'App Store Guidelines - compliance, review process',
        'Store Listings - screenshots, descriptions, keywords',
        'App Monetization - in-app purchases, ads, subscriptions',
        'App Analytics - downloads, revenue, retention'
      ],
      project: {
        title: 'Project 15: App Store Prep',
        description: 'Prepare an app for store submission',
        features: ['Store listing', 'Screenshots', 'Privacy policy', 'Test notes']
      }
    },
    {
      week: 16,
      title: 'Capstone Project & Career Preparation',
      description: 'Build a portfolio-ready app and prepare for job interviews.',
      topics: [
        'End-to-End Development - concept to deployment',
        'App Architecture - planning, documentation',
        'Portfolio Presentation - showcasing your apps',
        'Resume Writing - highlighting mobile skills',
        'Interview Preparation - technical questions, coding challenges',
        'Freelancing - finding clients, pricing, contracts'
      ],
      project: {
        title: 'Project 16-30: Capstone Projects (Choose 15)',
        description: 'Select and build 15 additional projects from the list below',
        features: ['Full app development', 'Store deployment', 'Portfolio ready', 'Real-world features']
      }
    }
  ];

  // 30 Additional Projects
  const additionalProjects = [
    { icon: ShoppingCart, title: 'Amazon Clone', description: 'Full e-commerce app with cart and payments', difficulty: 'Advanced' },
    { icon: MessageSquare, title: 'WhatsApp Clone', description: 'Chat app with real-time messages', difficulty: 'Advanced' },
    { icon: Instagram, title: 'Instagram Clone', description: 'Photo sharing social app', difficulty: 'Advanced' },
    { icon: Youtube, title: 'YouTube Clone', description: 'Video streaming app', difficulty: 'Advanced' },
    { icon: Music, title: 'Spotify Clone', description: 'Music streaming with playlists', difficulty: 'Advanced' },
    { icon: Map, title: 'Uber Clone', description: 'Ride-hailing app with maps', difficulty: 'Advanced' },
    { icon: Home, title: 'Airbnb Clone', description: 'Property booking platform', difficulty: 'Advanced' },
    { icon: Coffee, title: 'Starbucks App', description: 'Coffee ordering and rewards', difficulty: 'Intermediate' },
    { icon: Plane, title: 'Flight Booking App', description: 'Search and book flights', difficulty: 'Intermediate' },
    { icon: Hotel, title: 'Hotel Booking App', description: 'Find and reserve hotels', difficulty: 'Intermediate' },
    { icon: Car, title: 'Car Rental App', description: 'Rent cars locally', difficulty: 'Intermediate' },
    { icon: Bike, title: 'Bike Sharing App', description: 'Find and rent bikes', difficulty: 'Intermediate' },
    { icon: Heart, title: 'Fitness Trainer App', description: 'Workout plans and tracking', difficulty: 'Intermediate' },
    { icon: Activity, title: 'Health Monitor', description: 'Track vitals and health', difficulty: 'Intermediate' },
    { icon: Moon, title: 'Sleep Tracker', description: 'Monitor sleep patterns', difficulty: 'Intermediate' },
    { icon: Calendar, title: 'Event Planner', description: 'Plan and manage events', difficulty: 'Intermediate' },
    { icon: Ticket, title: 'Movie Ticket App', description: 'Book movie tickets', difficulty: 'Intermediate' },
    { icon: Gamepad, title: 'Mobile Game', description: 'Simple casual game', difficulty: 'Intermediate' },
    { icon: Camera, title: 'Photo Editor App', description: 'Edit photos with filters', difficulty: 'Advanced' },
    { icon: Video, title: 'Video Editor App', description: 'Trim and edit videos', difficulty: 'Advanced' },
    { icon: BookOpen, title: 'E-reader App', description: 'Read books and PDFs', difficulty: 'Intermediate' },
    { icon: Newspaper, title: 'News Reader', description: 'Aggregate news sources', difficulty: 'Intermediate' },
    { icon: Wallet, title: 'Budget Tracker', description: 'Personal finance app', difficulty: 'Intermediate' },
    { icon: Trophy, title: 'Habit Tracker', description: 'Build and track habits', difficulty: 'Beginner' },
    { icon: Gift, title: 'Wishlist App', description: 'Save and share wishlists', difficulty: 'Beginner' },
    { icon: Dog, title: 'Pet Tracker', description: 'Track pet activities', difficulty: 'Beginner' },
    { icon: Leaf, title: 'Plant Care App', description: 'Track plant watering', difficulty: 'Beginner' },
    { icon: GlassWater, title: 'Water Tracker', description: 'Track daily water intake', difficulty: 'Beginner' },
    { icon: Watch, title: 'Smart Watch App', description: 'Companion watch app', difficulty: 'Advanced' },
    { icon: Bluetooth, title: 'IoT Controller', description: 'Control smart devices', difficulty: 'Advanced' }
  ];

  const faqs = [
    {
      question: "What is Mobile App Development?",
      answer: "Mobile App Development is the process of creating software applications that run on mobile devices like smartphones and tablets. It involves three main approaches: Native Development (building separate apps for iOS using Swift and Android using Kotlin), Cross-Platform Development (using frameworks like React Native or Flutter to build one app for both platforms), and Hybrid Development (web technologies wrapped in a native container). Mobile developers create everything from simple utility apps to complex social media platforms, e-commerce apps, and mobile games."
    },
    {
      question: "Why should I learn Mobile App Development?",
      answer: "Learning Mobile App Development offers numerous benefits: 1) Massive Market - Over 6 billion smartphone users worldwide. 2) High Demand - Companies need mobile apps to reach customers. 3) Excellent Salaries - Mobile developers are among the highest-paid in tech. 4) Creative Expression - Build apps you imagine. 5) Entrepreneurial Opportunity - Create and sell your own apps. 6) Freelance Potential - Work on projects globally. 7) Rapid Growth - Mobile usage continues to increase. 8) Diverse Technologies - Work with different platforms and tools. 9) Immediate Impact - Users carry your apps everywhere. 10) Continuous Learning - New technologies keep it exciting."
    },
    {
      question: "What can I do with Mobile App Development skills?",
      answer: "With Mobile App Development skills, you can: 1) Become an Android Developer (Kotlin/Java). 2) Work as an iOS Developer (Swift/SwiftUI). 3) Specialize as a Cross-Platform Developer (React Native/Flutter). 4) Join tech companies as a Mobile Engineer. 5) Work for startups building MVPs. 6) Start your own app business. 7) Freelance on platforms like Upwork. 8) Build enterprise apps for businesses. 9) Create mobile games. 10) Develop AR/VR experiences. 11) Build IoT and wearables apps. 12) Work on fintech, healthtech, or edtech apps. 13) Become a Mobile Tech Lead or Architect. 14) Teach mobile development or create content."
    },
    {
      question: "What is the best roadmap to become a Mobile Developer?",
      answer: "The complete mobile development roadmap: 1) Learn programming fundamentals (variables, loops, functions). 2) Choose your path: Native (iOS/Android) or Cross-Platform. 3) For Android: Master Kotlin, Android Studio, XML/Jetpack Compose. 4) For iOS: Master Swift, Xcode, SwiftUI/UIKit. 5) For Cross-Platform: Choose React Native or Flutter. 6) Understand mobile UI/UX principles. 7) Learn local databases (Room, CoreData, Realm). 8) Master networking and API integration. 9) Implement authentication and security. 10) Add features: camera, location, notifications. 11) Learn testing and debugging. 12) Understand app store deployment. 13) Build a portfolio of apps. 14) Prepare for technical interviews. This 16-week course covers all these paths with 30+ hands-on projects."
    },
    {
      question: "Do I need prior programming experience?",
      answer: "No prior experience is required! This course starts from the absolute basics and gradually builds up. We begin with programming fundamentals, then move to platform-specific languages (Kotlin for Android, Swift for iOS, or Dart for Flutter). The curriculum is designed for complete beginners who are passionate about building mobile apps. Basic computer literacy and a willingness to learn are the only prerequisites."
    },
    {
      question: "What is the time commitment for this 16-week course?",
      answer: "We recommend dedicating 15-20 hours per week. This includes 6 hours of live/recorded sessions and 9-14 hours of hands-on coding, project work, and assignments. With 30+ projects, you'll get extensive practical experience building real apps. The flexible schedule allows working professionals to participate by dedicating evenings and weekends."
    },
    {
      question: "What kind of apps will I build?",
      answer: "You'll build 30+ real-world apps including: Calculator, Todo List, Weather App, Notes App, Fitness Tracker, E-commerce App, Food Delivery App, Expense Tracker, Social Media App, QR Scanner, Restaurant Finder, News App, and many more. Advanced projects include clones of popular apps like WhatsApp, Instagram, Spotify, Uber, and Airbnb. By the end, you'll have a comprehensive portfolio demonstrating your skills to employers and clients."
    },
    {
      question: "What technologies will I master?",
      answer: "You'll master multiple technologies based on your chosen path: Android: Kotlin, Android Studio, XML, Jetpack Compose, Room Database, Retrofit. iOS: Swift, Xcode, SwiftUI, UIKit, CoreData, URLSession. Cross-Platform: React Native, JavaScript/TypeScript, Redux, or Flutter, Dart. Common: Git, REST APIs, GraphQL, Firebase, Push Notifications, Google Maps, Camera APIs, Location Services, App Store Connect, Google Play Console, Testing frameworks, and CI/CD. You'll be a well-rounded mobile developer ready for the job market."
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      
      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1920&h=1080&fit=crop"
            alt="Mobile App Development"
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
              <Smartphone className="w-4 h-4" />
              Complete 16-Week Mobile App Development Bootcamp
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Become a Professional{' '}
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-400 bg-clip-text text-transparent">
                Mobile Developer
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
              Master Android, iOS, and Cross-Platform development with 30+ hands-on projects. 
              Learn Kotlin, Swift, React Native, Flutter, and app store deployment. 
              No prior experience required.
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
                <div className="text-3xl font-bold">3</div>
                <div className="text-sm text-gray-400">Platforms</div>
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

      {/* What is Mobile Development Section */}
      <section className="py-16 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                What is <span className="text-yellow-600 dark:text-yellow-400">Mobile App Development</span>?
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                Mobile App Development is the process of creating software applications that run on mobile devices. It's a dynamic field that combines programming, design, and user experience to build the apps billions of people use daily on their smartphones and tablets.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                Mobile Development encompasses:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="p-1 bg-yellow-100 dark:bg-yellow-900/30 rounded mt-1">
                    <AppleIcon className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900 dark:text-white">iOS Development:</span>
                    <span className="text-gray-600 dark:text-gray-400"> Build apps for iPhone and iPad using Swift and SwiftUI.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1 bg-yellow-100 dark:bg-yellow-900/30 rounded mt-1">
                    <SmartphoneIcon className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900 dark:text-white">Android Development:</span>
                    <span className="text-gray-600 dark:text-gray-400"> Create apps for billions of Android devices using Kotlin and Jetpack Compose.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1 bg-yellow-100 dark:bg-yellow-900/30 rounded mt-1">
                    <Code className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900 dark:text-white">Cross-Platform Development:</span>
                    <span className="text-gray-600 dark:text-gray-400"> Build once, deploy everywhere with React Native or Flutter.</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { number: '6B+', label: 'Smartphone users' },
                { number: '$110k+', label: 'Avg. developer salary' },
                { number: '25%', label: 'Industry growth' },
                { number: '3.5M', label: 'Apps available' }
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

      {/* Why Learn Mobile Development */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
              Why Learn <span className="text-yellow-600 dark:text-yellow-400">Mobile Development</span>?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              10 compelling reasons to start your mobile development journey today
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: TrendingUp, title: 'Massive Market', description: 'Over 6 billion smartphone users worldwide - your apps can reach billions.' },
              { icon: DollarSign, title: 'Top Salaries', description: 'Mobile developers are among the highest-paid in the tech industry.' },
              { icon: Globe, title: 'Global Reach', description: 'Publish apps on app stores that reach users in every country.' },
              { icon: Rocket, title: 'Quick MVP Development', description: 'Build and launch app ideas faster than ever with modern tools.' },
              { icon: Brain, title: 'Creative Expression', description: 'Bring your app ideas to life and solve real problems.' },
              { icon: Heart, title: 'Entrepreneurial Opportunity', description: 'Create your own apps, start a business, or freelance.' },
              { icon: Users, title: 'High Demand', description: 'Every business needs a mobile app to reach customers.' },
              { icon: Award, title: 'Continuous Learning', description: 'New technologies, features, and platforms keep it exciting.' },
              { icon: Briefcase, title: 'Freelance Freedom', description: 'Work on projects globally, set your own rates and schedule.' }
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

      {/* What You Can Build */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
              What You Can <span className="text-yellow-600 dark:text-yellow-400">Build</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              With mobile development skills, you can create apps for every category
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: ShoppingCart, label: 'E-commerce' },
              { icon: MessageSquare, label: 'Social Media' },
              { icon: Music, label: 'Music Streaming' },
              { icon: Video, label: 'Video Apps' },
              { icon: Camera, label: 'Photo Editors' },
              { icon: Map, label: 'Maps & Navigation' },
              { icon: Heart, label: 'Health & Fitness' },
              { icon: Wallet, label: 'Fintech Apps' },
              { icon: Gamepad, label: 'Mobile Games' },
              { icon: BookOpen, label: 'E-learning' },
              { icon: Plane, label: 'Travel Apps' },
              { icon: Car, label: 'Ride Sharing' },
              { icon: Home, label: 'Smart Home' },
              { icon: Watch, label: 'Wearables' },
              { icon: Newspaper, label: 'News Apps' },
              { icon: Calendar, label: 'Productivity' }
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
              Follow this proven path to become a professional mobile developer
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-500 to-yellow-500 hidden md:block" />

            <div className="space-y-8">
              {[
                { phase: 'Phase 1', title: 'Programming Fundamentals', weeks: 'Weeks 1-2', color: 'yellow', topics: ['Programming Logic', 'Git', 'Mobile UI/UX', 'Dev Setup'] },
                { phase: 'Phase 2', title: 'Native Development', weeks: 'Weeks 3-6', color: 'yellow', topics: ['Kotlin/Android', 'Swift/iOS', 'UI Development', 'Local Storage'] },
                { phase: 'Phase 3', title: 'Cross-Platform', weeks: 'Weeks 7-10', color: 'yellow', topics: ['React Native', 'Flutter', 'APIs', 'Features'] },
                { phase: 'Phase 4', title: 'Advanced & Deployment', weeks: 'Weeks 11-16', color: 'yellow', topics: ['Performance', 'Testing', 'App Store', 'Portfolio'] }
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
              30+ <span className="text-yellow-600 dark:text-yellow-400">Real-World Apps</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Build an impressive portfolio with apps of all difficulty levels
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {additionalProjects.map((project, i) => {
              const Icon = project.icon
              const difficultyColor = 
                project.difficulty === 'Beginner' ? 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900/30 dark:text-yellow-400' :
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
              <span className="text-gray-900 dark:text-white font-medium">Plus 16 weekly projects = 30+ total apps</span>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies You'll Master */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
              Technologies You'll <span className="text-yellow-600 dark:text-yellow-400">Master</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Choose your path or learn them all
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { icon: SmartphoneIcon, name: 'Android' },
              { icon: AppleIcon, name: 'iOS' },
              { icon: Code, name: 'React Native' },
              { icon: Code, name: 'Flutter' },
              { icon: Code, name: 'Kotlin' },
              { icon: Code, name: 'Swift' },
              { icon: Database, name: 'Firebase' },
              { icon: Database, name: 'Room' },
              { icon: Database, name: 'CoreData' },
              { icon: Cloud, name: 'REST APIs' },
              { icon: GitBranch, name: 'Git' },
              { icon: Figma, name: 'Figma' },
              { icon: Terminal, name: 'Android Studio' },
              { icon: Terminal, name: 'Xcode' },
              { icon: TestTube, name: 'JUnit' },
              { icon: TestTube, name: 'XCTest' },
              { icon: Rocket, name: 'Play Store' },
              { icon: Rocket, name: 'App Store' }
            ].map((tech, i) => {
              const Icon = tech.icon
              return (
                <div key={i} className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg text-center hover:shadow-md transition">
                  <Icon className="w-6 h-6 text-yellow-600 dark:text-yellow-400 mx-auto mb-2" />
                  <span className="text-sm font-medium text-gray-900 dark:text-white">{tech.name}</span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Career Paths Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-600 to-yellow-600 text-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Launch Your Mobile Dev Career?</h2>
          <p className="text-xl text-yellow-100 mb-8 max-w-2xl mx-auto">
            Join our Mobile App Development bootcamp and get access to our career support team. We'll help you build your portfolio, prepare for interviews, and connect with top tech companies hiring mobile developers.
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
              Everything you need to know about our mobile development course
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
              <h2 className="text-3xl font-bold mb-2">Ready to Start Building Apps?</h2>
              <p className="text-yellow-100">Join 2,500+ students who have transformed their careers with Yelocode.</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="/Careers">
                <button className="px-6 py-3 bg-white text-yellow-600 font-medium rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-2">
                  <GraduationCap className="w-5 h-5" />
                  Enroll Now
                </button>
              </Link>
              <button className="px-6 py-3 border border-white/30 text-white font-medium rounded-lg hover:bg-white/10 transition-colors flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Schedule Consultation
              </button>
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

// Missing icon components
const Hotel = Building2
const Instagram = Camera
const Apple = AppleIcon