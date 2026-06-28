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
  Music, Gamepad, Plane, Car, Heart,
  Building2, Map, Sun, Moon, Activity,
  Wallet, Trophy, Gift, Truck, Dog, Leaf, Bike, Ticket, GlassWater, Shirt, Watch
} from 'lucide-react'
import Link from 'next/link'

export default function WebDevPage() {
  const [activeTab, setActiveTab] = useState('overview')
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  // 32-Week Curriculum with 30 projects
  const weeklyCurriculum = [
    {
      week: 1,
      title: 'Introduction to Web Development',
      description: 'Understanding the web, how it works, and getting started with development tools. The best web development bootcamp in Port Harcourt starts here.',
      topics: [
        'What is Web Development? - Frontend vs Backend vs Full Stack',
        'How the Internet Works - DNS, HTTP/HTTPS, Servers, Clients',
        'Setting Up Your Development Environment - VS Code, Chrome DevTools, Git',
        'Your First HTML Page - Structure, Elements, Tags',
        'Basic CSS Styling - Colors, Fonts, Box Model',
        'Introduction to JavaScript - Variables, Data Types, Console'
      ],
      project: {
        title: 'Project 1: Digital Business Card',
        description: 'Create a personal digital business card with HTML and CSS',
        features: ['Profile picture', 'Contact information', 'Social media links', 'Responsive design']
      }
    },
    {
      week: 2,
      title: 'HTML5 Deep Dive',
      description: 'Master modern HTML5 semantics, forms, and multimedia elements.',
      topics: [
        'Semantic HTML - header, nav, main, article, section, footer',
        'HTML Forms - input types, validation, labels, buttons',
        'Multimedia - audio, video, iframe, canvas basics',
        'Accessibility - ARIA labels, alt text, semantic structure',
        'SEO Fundamentals - meta tags, headings, structured data',
        'HTML Best Practices - code organization, comments, indentation'
      ],
      project: {
        title: 'Project 2: Event Registration Form',
        description: 'Build a multi-step event registration form with validation',
        features: ['Personal details', 'Ticket selection', 'Payment info', 'Confirmation page']
      }
    },
    {
      week: 3,
      title: 'CSS3 Mastery & Web Design',
      description: 'Advanced CSS techniques for beautiful, responsive designs. Master web design course Port Harcourt style.',
      topics: [
        'CSS Selectors - combinators, pseudo-classes, pseudo-elements',
        'Flexbox - container properties, item properties, alignment',
        'CSS Grid - grid areas, templates, responsive grids',
        'Typography - web fonts, Google Fonts, font pairing',
        'Animations - keyframes, transitions, transforms',
        'CSS Variables - custom properties, theme switching'
      ],
      project: {
        title: 'Project 3: Product Landing Page',
        description: 'Design a modern product landing page with animations',
        features: ['Hero section', 'Features grid', 'Testimonials', 'Pricing cards', 'Smooth scrolling']
      }
    },
    {
      week: 4,
      title: 'Responsive Design & CSS Frameworks',
      description: 'Build websites that work perfectly on all devices.',
      topics: [
        'Media Queries - breakpoints, mobile-first approach',
        'Responsive Images - srcset, picture element, lazy loading',
        'CSS Units - rem, em, vh, vw, percentages',
        'Introduction to Tailwind CSS - utility-first framework',
        'Customizing Tailwind - configuration, plugins',
        'Building with Tailwind - rapid prototyping'
      ],
      project: {
        title: 'Project 4: Restaurant Website',
        description: 'Create a fully responsive restaurant website',
        features: ['Mobile menu', 'Gallery with lightbox', 'Reservation form', 'Location map']
      }
    },
    {
      week: 5,
      title: 'JavaScript Fundamentals',
      description: 'Core JavaScript concepts for interactive web pages. Essential for any full stack developer course.',
      topics: [
        'Control Flow - if/else, switch, loops',
        'Functions - declarations, expressions, arrow functions, scope',
        'Arrays - methods, iteration, map, filter, reduce',
        'Objects - properties, methods, this keyword',
        'DOM Manipulation - selecting, modifying, creating elements',
        'Events - listeners, event object, event delegation'
      ],
      project: {
        title: 'Project 5: Interactive To-Do List',
        description: 'Build a feature-rich to-do list application',
        features: ['Add/delete tasks', 'Mark complete', 'Filter by status', 'Local storage']
      }
    },
    {
      week: 6,
      title: 'Advanced JavaScript & ES6+',
      description: 'Modern JavaScript features and asynchronous programming.',
      topics: [
        'ES6+ Features - destructuring, spread/rest, template literals',
        'Asynchronous JavaScript - callbacks, promises, async/await',
        'Error Handling - try/catch, custom errors',
        'Working with APIs - fetch, axios, RESTful services',
        'JavaScript Modules - import/export, module patterns',
        'Regular Expressions - pattern matching, validation'
      ],
      project: {
        title: 'Project 6: Weather App',
        description: 'Create a weather application using OpenWeather API',
        features: ['Current weather', '5-day forecast', 'Search by city', 'Geolocation']
      }
    },
    {
      week: 7,
      title: 'Version Control with Git & GitHub',
      description: 'Professional development workflow with version control.',
      topics: [
        'Git Basics - init, add, commit, status, log',
        'Branching - create, merge, rebase, resolve conflicts',
        'Remote Repositories - push, pull, clone, fetch',
        'GitHub Features - pull requests, issues, actions',
        'Collaborative Workflow - forking, contributing to open source',
        'Git Best Practices - commit messages, .gitignore'
      ],
      project: {
        title: 'Project 7: Open Source Contribution',
        description: 'Contribute to an open source project on GitHub',
        features: ['Fork repository', 'Create feature branch', 'Submit pull request', 'Code review']
      }
    },
    {
      week: 8,
      title: 'React.js Fundamentals - Frontend Development',
      description: 'Build modern user interfaces with React. Core of frontend development training in Port Harcourt.',
      topics: [
        'React Introduction - components, JSX, virtual DOM',
        'Props and State - data flow, useState hook',
        'Component Lifecycle - useEffect hook, cleanup',
        'Event Handling - synthetic events, custom handlers',
        'Forms in React - controlled components, form libraries',
        'React Router - navigation, routes, links'
      ],
      project: {
        title: 'Project 8: Movie Search App',
        description: 'Build a movie database app with React',
        features: ['Search movies', 'Movie details', 'Favorites list', 'Pagination']
      }
    },
    {
      week: 9,
      title: 'Advanced React Patterns',
      description: 'Master advanced React concepts and patterns.',
      topics: [
        'Custom Hooks - reusable logic, hooks composition',
        'Context API - global state management',
        'useReducer - complex state logic',
        'React Performance - memo, useMemo, useCallback',
        'Higher-Order Components - component composition',
        'Render Props - sharing code between components'
      ],
      project: {
        title: 'Project 9: E-Commerce Store',
        description: 'Create a fully functional e-commerce store',
        features: ['Product catalog', 'Shopping cart', 'Checkout process', 'Order history']
      }
    },
    {
      week: 10,
      title: 'State Management with Redux',
      description: 'Predictable state management for complex applications.',
      topics: [
        'Redux Principles - store, actions, reducers',
        'Redux Toolkit - configureStore, createSlice',
        'Async Actions - createAsyncThunk, RTK Query',
        'Redux DevTools - debugging state changes',
        'Redux vs Context - when to use what',
        'Zustand Alternative - simpler state management'
      ],
      project: {
        title: 'Project 10: Task Management Dashboard',
        description: 'Build a Trello-like task management app',
        features: ['Boards and lists', 'Drag and drop', 'Task details', 'Team collaboration']
      }
    },
    {
      week: 11,
      title: 'Backend Development with Node.js',
      description: 'Create server-side applications with Node.js and Express. Begin your backend development bootcamp journey.',
      topics: [
        'Node.js Basics - modules, npm, event loop',
        'Express.js - routing, middleware, error handling',
        'RESTful APIs - endpoints, HTTP methods, status codes',
        'Environment Variables - configuration management',
        'File System - reading/writing files, streams',
        'Authentication - JWT, sessions, OAuth'
      ],
      project: {
        title: 'Project 11: Blog API',
        description: 'Create a RESTful API for a blogging platform',
        features: ['User authentication', 'CRUD operations', 'Comments', 'Pagination']
      }
    },
    {
      week: 12,
      title: 'Database Design & MongoDB',
      description: 'Work with databases using MongoDB and Mongoose. Essential for MERN stack bootcamp training.',
      topics: [
        'NoSQL vs SQL - when to use what',
        'MongoDB Atlas - cloud database setup',
        'Mongoose ODM - schemas, models, validation',
        'CRUD Operations - create, read, update, delete',
        'Relationships - referencing, embedding',
        'Aggregation Pipeline - complex queries'
      ],
      project: {
        title: 'Project 12: E-Commerce Backend',
        description: 'Build a complete e-commerce backend API',
        features: ['Product management', 'User accounts', 'Order processing', 'Inventory tracking']
      }
    },
    {
      week: 13,
      title: 'Database Advanced & SQL',
      description: 'Master relational databases with PostgreSQL.',
      topics: [
        'PostgreSQL Setup - installation, configuration',
        'SQL Queries - SELECT, INSERT, UPDATE, DELETE',
        'Relationships - one-to-one, one-to-many, many-to-many',
        'Indexes and Performance - query optimization',
        'Transactions - ACID properties, rollback',
        'Raw SQL vs ORM - Prisma, TypeORM'
      ],
      project: {
        title: 'Project 13: Job Portal API',
        description: 'Create a job posting and application system',
        features: ['Job listings', 'Company profiles', 'Applications', 'Search filters']
      }
    },
    {
      week: 14,
      title: 'Full Stack Integration - MERN Stack',
      description: 'Connect frontend and backend for complete applications. Complete your full stack developer course.',
      topics: [
        'CORS - cross-origin resource sharing',
        'API Integration - connecting React to backend',
        'Authentication Flow - login/signup implementation',
        'Protected Routes - role-based access',
        'File Uploads - Multer, Cloudinary',
        'Real-time Features - Socket.io basics'
      ],
      project: {
        title: 'Project 14: Real-time Chat App',
        description: 'Build a full-stack chat application',
        features: ['User authentication', 'Private rooms', 'Real-time messages', 'File sharing']
      }
    },
    {
      week: 15,
      title: 'Testing & Deployment',
      description: 'Ensure quality and deploy applications to production.',
      topics: [
        'Unit Testing - Jest, React Testing Library',
        'API Testing - Supertest, Postman',
        'End-to-End Testing - Cypress, Playwright',
        'Deployment Platforms - Vercel, Netlify, Heroku',
        'Environment Configuration - development, staging, production',
        'CI/CD - GitHub Actions, automated deployment'
      ],
      project: {
        title: 'Project 15: DevOps Pipeline',
        description: 'Set up CI/CD for a full-stack application',
        features: ['Automated tests', 'Build process', 'Deployment', 'Monitoring']
      }
    },
    {
      week: 16,
      title: 'Advanced Backend Patterns',
      description: 'Master advanced backend concepts and microservices architecture.',
      topics: [
        'Microservices Architecture - design patterns, communication',
        'Message Queues - RabbitMQ, Redis Pub/Sub',
        'Caching Strategies - Redis, Memcached',
        'API Security - rate limiting, CORS, helmet',
        'WebSockets Advanced - Socket.io rooms, namespaces',
        'GraphQL APIs - Apollo Server, queries, mutations'
      ],
      project: {
        title: 'Project 16: Microservices E-Commerce',
        description: 'Build a microservices-based e-commerce platform',
        features: ['Service decomposition', 'API Gateway', 'Message brokers', 'Service discovery']
      }
    },
    {
      week: 17,
      title: 'TypeScript Fundamentals',
      description: 'Add type safety to your JavaScript applications with TypeScript.',
      topics: [
        'TypeScript Basics - types, interfaces, enums',
        'Advanced Types - generics, union types, type guards',
        'TypeScript with React - typing components, props, hooks',
        'TypeScript with Node.js - Express types, middleware',
        'TypeScript Configuration - tsconfig, build tools',
        'Migration Strategies - JavaScript to TypeScript'
      ],
      project: {
        title: 'Project 17: TypeScript Task Manager',
        description: 'Rebuild the task manager with full TypeScript support',
        features: ['Type-safe code', 'Generic components', 'API type definitions', 'Error prevention']
      }
    },
    {
      week: 18,
      title: 'Next.js Full Stack Framework',
      description: 'Build production-ready applications with Next.js, the React framework for production.',
      topics: [
        'Next.js Routing - pages, dynamic routes, API routes',
        'Server-Side Rendering - getServerSideProps, ISR',
        'Static Site Generation - getStaticProps, revalidation',
        'Next.js API Routes - building full-stack apps',
        'Next.js Middleware - auth, redirects, A/B testing',
        'Next.js Deployment - Vercel, optimization'
      ],
      project: {
        title: 'Project 18: Full Stack SaaS Dashboard',
        description: 'Build a complete SaaS application with Next.js',
        features: ['User dashboard', 'Subscription management', 'Analytics', 'Team collaboration']
      }
    },
    {
      week: 19,
      title: 'Cloud Services & AWS',
      description: 'Deploy and scale applications using Amazon Web Services.',
      topics: [
        'AWS Fundamentals - EC2, S3, IAM, VPC',
        'Serverless Computing - Lambda, API Gateway',
        'Database Services - RDS, DynamoDB, ElastiCache',
        'Container Services - ECS, ECR, Fargate',
        'AWS Security - WAF, Shield, Secrets Manager',
        'Cost Optimization - pricing models, monitoring'
      ],
      project: {
        title: 'Project 19: Serverless Image Processing',
        description: 'Build a serverless image processing pipeline on AWS',
        features: ['S3 triggers', 'Lambda functions', 'Image optimization', 'CloudFront CDN']
      }
    },
    {
      week: 20,
      title: 'Docker & Containerization',
      description: 'Containerize applications for consistent development and deployment.',
      topics: [
        'Docker Basics - images, containers, Dockerfile',
        'Docker Compose - multi-container applications',
        'Docker Networking - container communication',
        'Docker Volumes - persistent data management',
        'Docker Registry - Docker Hub, ECR, private registries',
        'Production Best Practices - multi-stage builds, security'
      ],
      project: {
        title: 'Project 20: Containerized Microservices',
        description: 'Containerize a multi-service application with Docker',
        features: ['Service containers', 'Docker networking', 'Environment configs', 'Health checks']
      }
    },
    {
      week: 21,
      title: 'Advanced CSS & Animations',
      description: 'Create stunning user interfaces with advanced CSS techniques.',
      topics: [
        'CSS Architecture - BEM, SMACSS, ITCSS',
        'Advanced Animations - complex keyframes, parallax',
        '3D Transforms - perspective, rotate3d, translate3d',
        'CSS Houdini - paint API, custom properties API',
        'Performance Optimization - will-change, GPU acceleration',
        'Design Systems - component libraries, tokens'
      ],
      project: {
        title: 'Project 21: Animated Portfolio Website',
        description: 'Build a stunning animated portfolio with advanced CSS',
        features: ['Smooth animations', 'Parallax effects', 'Interactive elements', 'Theme switching']
      }
    },
    {
      week: 22,
      title: 'Progressive Web Apps (PWA)',
      description: 'Build installable, offline-capable web applications.',
      topics: [
        'Service Workers - lifecycle, caching strategies',
        'Web App Manifest - installation, splash screens',
        'Offline First - IndexedDB, Background Sync',
        'Push Notifications - Web Push API, Firebase',
        'PWA Performance - Lighthouse audits, optimization',
        'App Shell Model - instant loading architecture'
      ],
      project: {
        title: 'Project 22: Offline-First Note App',
        description: 'Create a PWA note-taking app that works offline',
        features: ['Offline storage', 'Background sync', 'Push notifications', 'Install prompt']
      }
    },
    {
      week: 23,
      title: 'Web Security & Best Practices',
      description: 'Secure your applications against common vulnerabilities.',
      topics: [
        'OWASP Top 10 - common security vulnerabilities',
        'XSS Prevention - input sanitization, CSP',
        'CSRF Protection - tokens, SameSite cookies',
        'SQL Injection Prevention - parameterized queries',
        'Authentication Security - OAuth 2.0, OpenID Connect',
        'Security Headers - HTTPS, HSTS, X-Frame-Options'
      ],
      project: {
        title: 'Project 23: Secure Authentication System',
        description: 'Implement a secure authentication system with best practices',
        features: ['OAuth integration', '2FA setup', 'Password policies', 'Session management']
      }
    },
    {
      week: 24,
      title: 'Performance Optimization',
      description: 'Make your applications blazing fast with optimization techniques.',
      topics: [
        'Web Performance Metrics - FCP, LCP, TTI, CLS',
        'Code Splitting - dynamic imports, lazy loading',
        'Bundle Optimization - tree shaking, compression',
        'Image Optimization - WebP, AVIF, responsive images',
        'Caching Strategies - service workers, CDN, browser cache',
        'Database Optimization - indexes, query optimization'
      ],
      project: {
        title: 'Project 24: Performance Audit & Optimization',
        description: 'Audit and optimize an existing application for performance',
        features: ['Lighthouse 100 score', 'Bundle analysis', 'Image optimization', 'Caching implementation']
      }
    },
    {
      week: 25,
      title: 'Mobile Development with React Native',
      description: 'Build cross-platform mobile apps using React Native.',
      topics: [
        'React Native Basics - components, navigation, styling',
        'Native APIs - camera, geolocation, storage',
        'State Management in RN - Redux, Context, Zustand',
        'React Native Performance - FlatList, animations',
        'App Deployment - App Store, Google Play, OTA updates',
        'Expo vs Bare Workflow - choosing the right approach'
      ],
      project: {
        title: 'Project 25: Cross-Platform Mobile App',
        description: 'Build a mobile app for both iOS and Android',
        features: ['Native navigation', 'Camera integration', 'Push notifications', 'App store ready']
      }
    },
    {
      week: 26,
      title: 'GraphQL & Apollo',
      description: 'Master modern API development with GraphQL.',
      topics: [
        'GraphQL Schema Design - types, queries, mutations',
        'Apollo Server - resolvers, context, data sources',
        'Apollo Client - queries, mutations, caching',
        'GraphQL Subscriptions - real-time data',
        'Federation - distributed GraphQL architectures',
        'Performance - dataloader, query optimization'
      ],
      project: {
        title: 'Project 26: GraphQL Social Media API',
        description: 'Build a complete social media backend with GraphQL',
        features: ['Complex queries', 'Real-time subscriptions', 'File uploads', 'N+1 optimization']
      }
    },
    {
      week: 27,
      title: 'DevOps & CI/CD',
      description: 'Master continuous integration and deployment pipelines.',
      topics: [
        'GitHub Actions - workflows, secrets, environments',
        'Jenkins - pipelines, plugins, agents',
        'Monitoring - Prometheus, Grafana, ELK Stack',
        'Logging - structured logging, log aggregation',
        'Infrastructure as Code - Terraform, CloudFormation',
        'Blue-Green Deployments - zero-downtime strategies'
      ],
      project: {
        title: 'Project 27: Complete CI/CD Pipeline',
        description: 'Set up a production-grade CI/CD pipeline',
        features: ['Automated tests', 'Build pipeline', 'Deploy to staging', 'Production deployment']
      }
    },
    {
      week: 28,
      title: 'System Design & Architecture',
      description: 'Design scalable, reliable, and maintainable systems.',
      topics: [
        'System Design Principles - scalability, reliability, availability',
        'Load Balancing - algorithms, reverse proxies, CDNs',
        'Database Scaling - sharding, replication, partitioning',
        'Distributed Systems - CAP theorem, consensus algorithms',
        'Design Patterns - event-driven, CQRS, saga pattern',
        'Case Studies - design Twitter, Netflix, WhatsApp'
      ],
      project: {
        title: 'Project 28: Scalable Chat System',
        description: 'Design and implement a scalable real-time chat system',
        features: ['WebSocket clusters', 'Message queues', 'Database sharding', 'Load testing']
      }
    },
    {
      week: 29,
      title: 'Open Source Contribution',
      description: 'Contribute to real open source projects and build your reputation.',
      topics: [
        'Finding Projects - GitHub explore, good first issues',
        'Open Source Etiquette - communication, code of conduct',
        'Pull Request Process - forking, branching, reviewing',
        'Documentation - contributing guides, API docs',
        'Maintaining Projects - issues, releases, community',
        'Building Your Brand - portfolio, blog, speaking'
      ],
      project: {
        title: 'Project 29: Major Open Source Contribution',
        description: 'Make meaningful contributions to established open source projects',
        features: ['Bug fixes', 'Feature additions', 'Documentation', 'Community engagement']
      }
    },
    {
      week: 30,
      title: 'Freelancing & Entrepreneurship',
      description: 'Learn how to monetize your development skills.',
      topics: [
        'Freelancing Platforms - Upwork, Fiverr, Toptal',
        'Client Management - proposals, contracts, communication',
        'Pricing Strategies - hourly vs project-based, value pricing',
        'Legal Basics - contracts, intellectual property, taxes',
        'Building an Agency - scaling, hiring, processes',
        'Product Development - SaaS, indie hacking, MVPs'
      ],
      project: {
        title: 'Project 30: Freelance Client Project',
        description: 'Complete a real client project from proposal to delivery',
        features: ['Client requirements', 'Project proposal', 'Development', 'Deployment']
      }
    },
    {
      week: 31,
      title: 'Technical Interview Preparation',
      description: 'Prepare for technical interviews at top tech companies.',
      topics: [
        'Data Structures - arrays, linked lists, trees, graphs',
        'Algorithms - sorting, searching, dynamic programming',
        'System Design Interviews - framework, practice problems',
        'Behavioral Interviews - STAR method, common questions',
        'Whiteboard Coding - problem-solving approach',
        'Mock Interviews - practice with peers and mentors'
      ],
      project: {
        title: 'Projects 31-32: Interview Practice Platform',
        description: 'Build a platform to practice technical interviews',
        features: ['Coding challenges', 'System design exercises', 'Mock interview scheduler', 'Progress tracking']
      }
    },
    {
      week: 32,
      title: 'Capstone Project & Career Launch',
      description: 'Build your magnum opus portfolio project and launch your career. Graduate with your web developer certification.',
      topics: [
        'Capstone Planning - project selection, architecture design',
        'Agile Development - 2-week sprints, daily standups',
        'Portfolio Building - showcasing 30+ projects',
        'Resume Optimization - ATS-friendly, keyword targeting',
        'LinkedIn & Networking - building professional presence',
        'Job Search Strategy - applications, referrals, negotiation'
      ],
      project: {
        title: 'Capstone: Full Stack SaaS Platform',
        description: 'Build a complete SaaS product from idea to launch',
        features: ['User authentication', 'Subscription payments', 'Real-time features', 'Admin dashboard', 'Production deployment', 'Marketing landing page']
      }
    }
  ];

  // 30 Additional Projects
  const additionalProjects = [
    { icon: Home, title: 'Real Estate Platform', description: 'Property listing and search with maps', difficulty: 'Advanced' },
    { icon: ShoppingCart, title: 'Amazon Clone', description: 'Full e-commerce with payments', difficulty: 'Advanced' },
    { icon: Newspaper, title: 'News Aggregator', description: 'News from multiple sources with filters', difficulty: 'Intermediate' },
    { icon: Youtube, title: 'Video Sharing Platform', description: 'Upload and stream videos', difficulty: 'Advanced' },
    { icon: Camera, title: 'Photo Gallery', description: 'Image upload and organization', difficulty: 'Intermediate' },
    { icon: Music, title: 'Music Streaming App', description: 'Play and manage playlists', difficulty: 'Advanced' },
    { icon: Gamepad, title: 'Game Review Site', description: 'Reviews and ratings for games', difficulty: 'Intermediate' },
    { icon: Plane, title: 'Travel Booking System', description: 'Flight and hotel booking', difficulty: 'Advanced' },
    { icon: Car, title: 'Ride Sharing App', description: 'Book rides and track drivers', difficulty: 'Advanced' },
    { icon: Heart, title: 'Fitness Tracker', description: 'Workout logging and progress', difficulty: 'Intermediate' },
    { icon: Building2, title: 'Hotel Management System', description: 'Room booking and management', difficulty: 'Advanced' },
    { icon: Map, title: 'Event Locator', description: 'Find events near you', difficulty: 'Intermediate' },
    { icon: Sun, title: 'Weather Dashboard', description: 'Advanced weather with charts', difficulty: 'Intermediate' },
    { icon: Moon, title: 'Habit Tracker', description: 'Track daily habits and streaks', difficulty: 'Beginner' },
    { icon: Activity, title: 'Analytics Dashboard', description: 'Data visualization with charts', difficulty: 'Advanced' },
    { icon: Users2, title: 'Social Network', description: 'Connect with friends and share', difficulty: 'Advanced' },
    { icon: Wallet, title: 'Expense Tracker Pro', description: 'Budget planning and reports', difficulty: 'Intermediate' },
    { icon: Calendar, title: 'Appointment Scheduler', description: 'Book and manage appointments', difficulty: 'Intermediate' },
    { icon: BookOpen, title: 'Online Learning Platform', description: 'Courses and student management', difficulty: 'Advanced' },
    { icon: Trophy, title: 'Gaming Leaderboard', description: 'Scores and rankings', difficulty: 'Intermediate' },
    { icon: Coffee, title: 'Restaurant Finder', description: 'Discover and review restaurants', difficulty: 'Intermediate' },
    { icon: Gift, title: 'Wishlist App', description: 'Create and share wishlists', difficulty: 'Beginner' },
    { icon: Truck, title: 'Delivery Tracker', description: 'Track packages in real-time', difficulty: 'Intermediate' },
    { icon: Dog, title: 'Pet Adoption Platform', description: 'Find and adopt pets', difficulty: 'Intermediate' },
    { icon: Leaf, title: 'Recipe Book', description: 'Save and share recipes', difficulty: 'Beginner' },
    { icon: Bike, title: 'Bike Rental System', description: 'Rent bikes online', difficulty: 'Intermediate' },
    { icon: Ticket, title: 'Movie Ticket Booking', description: 'Book movie tickets', difficulty: 'Intermediate' },
    { icon: GlassWater, title: 'Bar Finder', description: 'Find local bars and reviews', difficulty: 'Intermediate' },
    { icon: Shirt, title: 'Fashion Store', description: 'Clothing e-commerce', difficulty: 'Advanced' },
    { icon: Watch, title: 'Smart Watch Dashboard', description: 'Health metrics dashboard', difficulty: 'Advanced' }
  ];

  const faqs = [
    {
      question: "What is Web Development?",
      answer: "Web development is the process of building websites and web applications that run on the internet. It involves frontend development (what users see and interact with), backend development (server-side logic and databases), and full-stack development (both frontend and backend). Web developers use languages like HTML, CSS, and JavaScript to create everything from simple static pages to complex interactive applications like social media platforms, e-commerce sites, and web-based tools."
    },
    {
      question: "Why should I learn Web Development in Port Harcourt?",
      answer: "Learning web development at the best web development bootcamp in Port Harcourt offers numerous benefits: 1) High Demand - Every business needs a web presence, creating constant demand for developers in Nigeria. 2) Excellent Salary - Web developers earn competitive salaries with great growth potential. 3) Flexibility - Work remotely, freelance, or join a company. 4) Creativity - Build anything you can imagine. 5) Problem Solving - Develop critical thinking skills. 6) Job Security - Technology is only growing. 7) Entrepreneurship - Create your own products and startups. 8) Continuous Learning - Always new technologies to explore."
    },
    {
      question: "What can I do with Web Development skills?",
      answer: "With web development skills, you can: 1) Build websites for businesses and individuals. 2) Create web applications like social media platforms, e-commerce stores, and productivity tools. 3) Develop mobile apps using frameworks like React Native. 4) Work as a freelancer and choose your clients. 5) Join tech companies as a frontend, backend, or full-stack developer. 6) Start your own tech company. 7) Teach others and create content. 8) Work remotely from anywhere. 9) Build your personal brand and portfolio. 10) Contribute to open source projects and the developer community."
    },
    {
      question: "What is the best roadmap to become a web developer in Nigeria?",
      answer: "The complete web development roadmap: 1) Start with fundamentals: HTML, CSS, and JavaScript. 2) Learn version control with Git and GitHub. 3) Master responsive design with Flexbox and Grid. 4) Choose a frontend framework (React is most popular). 5) Learn backend development with Node.js and Express. 6) Master databases: MongoDB (NoSQL) and PostgreSQL (SQL). 7) Learn API development and authentication. 8) Understand deployment and DevOps basics. 9) Build projects at every stage. 10) Learn testing and code quality. 11) Study system design for large applications. 12) Prepare for interviews with algorithms and data structures. This 32-week course covers exactly this roadmap with 30+ hands-on projects."
    },
    {
      question: "Do I need any prior experience to enroll in this coding bootcamp?",
      answer: "No prior experience is required! This course is designed for complete beginners looking to learn coding in Nigeria. We start from the absolute basics and gradually build up to advanced concepts. The only prerequisites are basic computer literacy, a willingness to learn, and dedication to practice regularly."
    },
    {
      question: "What is the time commitment for this full stack developer course?",
      answer: "We recommend dedicating 15-20 hours per week. This includes 6 hours of live/recorded sessions and 9-14 hours of hands-on coding, project work, and assignments. With 30+ projects over 32 weeks, you'll get extensive practical experience building your portfolio for software development jobs."
    },
    {
      question: "What kind of projects will I build in this MERN stack bootcamp?",
      answer: "You'll build 30+ real-world projects including: Digital Business Card, Event Registration Form, Product Landing Page, Restaurant Website, To-Do List, Weather App, Movie Search App, E-Commerce Store, Task Management Dashboard, Blog API, Real-time Chat App, Microservices Platform, SaaS Dashboard, Mobile App, and many more. By the end, you'll have a comprehensive portfolio demonstrating your skills to employers."
    },
    {
      question: "What technologies will I master in this web developer certification program?",
      answer: "You'll master: HTML5, CSS3, JavaScript (ES6+), TypeScript, React.js, Next.js, Redux, Node.js, Express.js, MongoDB, PostgreSQL, GraphQL, Docker, AWS, React Native, Git/GitHub, RESTful APIs, JWT Authentication, Tailwind CSS, CI/CD, Testing (Jest), and more. You'll be a well-rounded full-stack developer ready for the job market with coding bootcamp with job placement support."
    }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      
      {/* HERO SECTION - b1.jpeg as full-screen background */}
      <section className="relative h-screen flex items-center overflow-hidden" aria-label="Best Web development bootcamp in Port Harcourt Nigeria - Learn coding and full stack development">
        <div className="absolute inset-0">
          <img 
            src="/pics/b1.jpeg"
            alt="Best 32-week web development bootcamp in Port Harcourt Nigeria - Yelocode Systems intensive full stack developer course with job placement and 30 plus real world projects"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/90 to-yellow-900/80" />
        </div>
        
        <div className="absolute top-20 left-10 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse animation-delay-2000" />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 text-white">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium px-4 py-2 rounded-full mb-6">
              <Code className="w-4 h-4" />
              Best Web Development Bootcamp in Port Harcourt
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Become a Professional{' '}
              <span className="bg-gradient-to-r from-yellow-400 to-cyan-400 bg-clip-text text-transparent">
                Full Stack Developer
              </span>{' '}
              in 32 Weeks
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
              Master frontend and backend development with 30+ hands-on projects. 
              The most comprehensive 32-week full stack developer course in Port Harcourt. 
              Learn HTML, CSS, JavaScript, React, Node.js, TypeScript, AWS, Docker, and more. 
              No prior experience required - perfect for beginners looking for coding classes.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link href="/Careers">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-yellow-600 to-yellow-500 text-white font-semibold rounded-xl overflow-hidden transition-all hover:shadow-xl hover:shadow-yellow-500/25 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5" />
                  Start Your 32-Week Coding Journey
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>

            <div className="flex flex-wrap gap-8 mt-12">
              <div>
                <div className="text-3xl font-bold">32</div>
                <div className="text-sm text-gray-400">Weeks Intensive</div>
              </div>
              <div>
                <div className="text-3xl font-bold">30+</div>
                <div className="text-sm text-gray-400">Real Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold">200+</div>
                <div className="text-sm text-gray-400">Hours of Coding</div>
              </div>
              <div>
                <div className="text-3xl font-bold">20+</div>
                <div className="text-sm text-gray-400">Technologies</div>
              </div>
            </div>

            <div className="sr-only">
              Best 32-week web development bootcamp in Port Harcourt Nigeria. Learn coding, full stack development, 
              frontend development training, backend development bootcamp. MERN stack bootcamp with job placement. 
              Affordable tech school in Port Harcourt for computer programming and software development. 
              Web design course, HTML CSS JavaScript TypeScript course, React Node.js Next.js training. 
              Coding classes for beginners at the best tech training institute in Nigeria.
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-yellow-500 rounded-full mt-2 animate-scroll" />
          </div>
        </div>
      </section>

      {/* What is Web Development Section - b2.jpeg side by side */}
      <section className="py-16 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                What is <span className="text-yellow-600 dark:text-yellow-400">Web Development</span>?
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                Web development is the art and science of building websites and web applications that run on the internet. It encompasses everything from simple static pages to complex interactive platforms like social media networks, e-commerce sites, and cloud-based applications. At our 32-week web development bootcamp in Port Harcourt, you'll learn all aspects of this exciting field.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                Web development is divided into three main areas:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="p-1 bg-yellow-100 dark:bg-yellow-900/30 rounded mt-1">
                    <Layout className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900 dark:text-white">Frontend Development:</span>
                    <span className="text-gray-600 dark:text-gray-400"> What users see and interact with - the visual interface, buttons, forms, and layouts built with HTML, CSS, and JavaScript.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1 bg-yellow-100 dark:bg-yellow-900/30 rounded mt-1">
                    <Server className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900 dark:text-white">Backend Development:</span>
                    <span className="text-gray-600 dark:text-gray-400"> The server-side logic, databases, and APIs that power the application behind the scenes.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1 bg-purple-100 dark:bg-purple-900/30 rounded mt-1">
                    <GitBranch className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900 dark:text-white">Full Stack Development:</span>
                    <span className="text-gray-600 dark:text-gray-400"> The combination of both frontend and backend skills, allowing you to build complete applications end-to-end.</span>
                  </div>
                </li>
              </ul>
            </div>
            {/* b2.jpeg - Fitted side by side with rounded corners */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-2xl">
              <img 
                src="/pics/b2.jpeg"
                alt="Full stack web development training at best coding bootcamp in Port Harcourt Nigeria - Students learning HTML CSS JavaScript React Node.js and modern web technologies at Yelocode Systems"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500/20 to-transparent rounded-xl" />
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              { number: '60%', label: 'of businesses need developers' },
              { number: '$80k+', label: 'Average starting salary' },
              { number: '20%', label: 'Job growth rate' },
              { number: '100%', label: 'Remote work possible' }
            ].map((stat, i) => (
              <div key={i} className="p-4 bg-gray-50 dark:bg-gray-900 rounded-xl text-center">
                <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">{stat.number}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Learn Web Development - b3.jpeg as full-width banner */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
              Why Learn <span className="text-yellow-600 dark:text-yellow-400">Web Development</span> in Port Harcourt?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              10 compelling reasons to start your 32-week web development journey today at the best tech training institute in Nigeria
            </p>
          </div>

          {/* b3.jpeg - Fitted as full-width banner with max-height */}
          <div className="max-w-5xl mx-auto mb-12 aspect-[21/9] overflow-hidden rounded-2xl shadow-xl">
            <img 
              src="/pics/b3.jpeg"
              alt="Software development team collaboration at best tech school in Port Harcourt Nigeria - Yelocode Systems coding bootcamp with job placement and career support for web developers"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: TrendingUp, title: 'High Demand in Nigeria', description: 'Every business needs a web presence. Companies are constantly searching for skilled developers in Port Harcourt and beyond.' },
              { icon: DollarSign, title: 'Excellent Salary', description: 'Web developers earn competitive salaries with great growth potential and benefits. Top tech talent is well compensated.' },
              { icon: Globe, title: 'Work Anywhere', description: 'Work remotely from anywhere in the world. All you need is a laptop and internet connection to start your career.' },
              { icon: Rocket, title: 'Quick Career Entry', description: 'Start your career in 32 weeks, not years. Our intensive coding bootcamp gets you job-ready with practical skills.' },
              { icon: Brain, title: 'Problem Solving Skills', description: 'Develop critical thinking and problem-solving abilities that apply to all areas of life and career growth.' },
              { icon: Heart, title: 'Job Satisfaction', description: 'Build creative solutions and see your work come to life. High job satisfaction rates among developers.' },
              { icon: Users, title: 'Developer Community', description: 'Join a global community of developers who share knowledge and support each other\'s growth.' },
              { icon: Award, title: 'Continuous Growth', description: 'Always learning with new technologies and frameworks. The tech field never gets boring.' },
              { icon: Briefcase, title: 'Entrepreneurship', description: 'Build your own products, start a tech company, or work as a freelancer. Unlimited opportunities.' }
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

      {/* What You Can Build - b4.jpeg as full-width banner */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
              What You Can <span className="text-yellow-600 dark:text-yellow-400">Build</span> After Our 32-Week Full Stack Developer Course
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              With web development skills from our coding bootcamp, you can create almost anything you imagine
            </p>
          </div>

          {/* b4.jpeg - Fitted as full-width banner */}
          <div className="max-w-5xl mx-auto mb-12 aspect-[21/9] overflow-hidden rounded-2xl shadow-xl">
            <img 
              src="/pics/b4.jpeg"
              alt="Students building real world web applications and projects at Yelocode Systems coding bootcamp in Port Harcourt - Full stack developer course with hands on training"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Globe, label: 'Websites' },
              { icon: ShoppingCart, label: 'E-Commerce' },
              { icon: Users2, label: 'Social Media' },
              { icon: Smartphone, label: 'Mobile Apps' },
              { icon: Database, label: 'Dashboards' },
              { icon: Cloud, label: 'Cloud Apps' },
              { icon: Gamepad, label: 'Games' },
              { icon: Newspaper, label: 'Blogs' },
              { icon: Video, label: 'Streaming' },
              { icon: Calendar, label: 'Booking Systems' },
              { icon: Map, label: 'Maps & Location' },
              { icon: Activity, label: 'Analytics' },
              { icon: Wallet, label: 'Fintech' },
              { icon: Heart, label: 'Health Apps' },
              { icon: BookOpen, label: 'Learning Platforms' },
              { icon: Briefcase, label: 'Job Portals' }
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
              The Complete 32-Week <span className="text-yellow-600 dark:text-yellow-400">Roadmap</span> to Become a Developer
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Follow this proven path at our software development school to become a professional web developer
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-500 to-cyan-500 hidden md:block" />

            <div className="space-y-8">
              {[
                { phase: 'Phase 1', title: 'Foundations', weeks: 'Weeks 1-4', color: 'yellow', topics: ['HTML5', 'CSS3', 'JavaScript Basics', 'Responsive Design'] },
                { phase: 'Phase 2', title: 'Frontend Development', weeks: 'Weeks 5-10', color: 'cyan', topics: ['Advanced JavaScript', 'React.js', 'Redux', 'TypeScript'] },
                { phase: 'Phase 3', title: 'Backend Development', weeks: 'Weeks 11-18', color: 'yellow', topics: ['Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'GraphQL'] },
                { phase: 'Phase 4', title: 'DevOps & Cloud', weeks: 'Weeks 19-24', color: 'cyan', topics: ['Docker', 'AWS', 'CI/CD', 'Performance'] },
                { phase: 'Phase 5', title: 'Mobile & Advanced', weeks: 'Weeks 25-28', color: 'yellow', topics: ['React Native', 'System Design', 'Security', 'Open Source'] },
                { phase: 'Phase 6', title: 'Career Launch', weeks: 'Weeks 29-32', color: 'purple', topics: ['Freelancing', 'Interview Prep', 'Capstone', 'Job Placement'] }
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

      {/* 32-Week Curriculum */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
              32-Week <span className="text-yellow-600 dark:text-yellow-400">Curriculum</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
              Week-by-week breakdown of your learning journey with 30+ projects at the best web development bootcamp in Port Harcourt
            </p>
            <div className="inline-flex items-center gap-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 px-4 py-2 rounded-full">
              <Rocket className="w-4 h-4" />
              <span className="font-medium">32 Weeks • 30+ Projects</span>
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
              Build an impressive portfolio with projects of all difficulty levels during your 32-week full stack developer course
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
              <span className="text-gray-900 dark:text-white font-medium">Plus 32 weekly projects = 30+ total projects for your portfolio</span>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies You'll Master - b5.jpeg as full-width banner */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
              Technologies You'll <span className="text-yellow-600 dark:text-yellow-400">Master</span> in Our 32-Week MERN Stack Bootcamp
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              20+ technologies covering full stack development with modern tools and frameworks at the best tech training institute in Nigeria
            </p>
          </div>

          {/* b5.jpeg - Fitted as full-width banner */}
          <div className="max-w-5xl mx-auto mb-12 aspect-[21/9] overflow-hidden rounded-2xl shadow-xl">
            <img 
              src="/pics/b5.jpeg"
              alt="Modern web development technologies and frameworks taught at Yelocode Systems coding bootcamp in Port Harcourt Nigeria - HTML CSS JavaScript React Node.js TypeScript Docker AWS training"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {[
              { icon: Code, name: 'HTML5' },
              { icon: Palette, name: 'CSS3' },
              { icon: Code, name: 'JavaScript' },
              { icon: Code, name: 'TypeScript' },
              { icon: Layout, name: 'React.js' },
              { icon: Layout, name: 'Next.js' },
              { icon: Layers, name: 'Redux' },
              { icon: Server, name: 'Node.js' },
              { icon: Server, name: 'Express.js' },
              { icon: Database, name: 'MongoDB' },
              { icon: Database, name: 'PostgreSQL' },
              { icon: Cloud, name: 'GraphQL' },
              { icon: Terminal, name: 'Git' },
              { icon: GitBranch, name: 'GitHub' },
              { icon: Cloud, name: 'REST APIs' },
              { icon: Shield, name: 'JWT Auth' },
              { icon: Cloud, name: 'Docker' },
              { icon: Cloud, name: 'AWS' },
              { icon: TestTube, name: 'Jest' },
              { icon: Rocket, name: 'Vercel' },
              { icon: Cloud, name: 'Netlify' },
              { icon: Figma, name: 'Figma' },
              { icon: Cpu, name: 'VS Code' }
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
      <section className="py-16 bg-yellow-600 text-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Launch Your Development Career in 32 Weeks?</h2>
          <p className="text-xl text-yellow-100 mb-8 max-w-2xl mx-auto">
            Join our 32-week Web Development bootcamp and get access to our career support team. We'll help you prepare for interviews, build your portfolio, and connect with top tech companies. Our coding bootcamp with job placement support ensures you're career-ready.
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
              Frequently Asked <span className="text-yellow-600 dark:text-yellow-400">Questions</span> About Our 32-Week Coding Bootcamp
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Everything you need to know about our web development course in Port Harcourt
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
      <section className="py-16 bg-gradient-to-r from-yellow-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h2 className="text-3xl font-bold mb-2">Ready to Start Your 32-Week Web Development Journey in Port Harcourt?</h2>
              <p className="text-yellow-100">Join 2,500+ students who have transformed their careers with Yelocode, the best tech school in Nigeria.</p>
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