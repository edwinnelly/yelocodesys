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
  Lock
} from 'lucide-react'
import Link from 'next/link'

export default function PythonPage() {
  const [activeTab, setActiveTab] = useState('overview')
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  // 16-Week Python Curriculum with 30+ projects
  const weeklyCurriculum = [
    {
      week: 1,
      title: 'Introduction to Python',
      description: 'Get started with Python programming and understand the fundamentals.',
      topics: [
        'What is Python? - History, features, and applications',
        'Installing Python - Setting up Python, pip, and virtual environments',
        'Your First Python Program - Hello World, print function',
        'Variables and Data Types - integers, floats, strings, booleans',
        'Basic Operations - arithmetic, comparison, logical operators',
        'Taking User Input - input() function, type conversion'
      ],
      project: {
        title: 'Project 1: Interactive Calculator',
        description: 'Build a command-line calculator with multiple operations',
        features: ['Basic arithmetic', 'Advanced operations', 'User-friendly interface', 'Error handling']
      }
    },
    {
      week: 2,
      title: 'Control Flow & Functions',
      description: 'Master program control and create reusable code with functions.',
      topics: [
        'Conditional Statements - if, elif, else, nested conditions',
        'Loops - for loops, while loops, break, continue, pass',
        'Loop Control - range(), enumerate(), zip()',
        'Functions - definition, parameters, arguments, return values',
        'Scope and Namespace - local vs global variables',
        'Lambda Functions - anonymous functions, map, filter'
      ],
      project: {
        title: 'Project 2: Number Guessing Game',
        description: 'Create an interactive number guessing game with difficulty levels',
        features: ['Random number generation', 'Difficulty settings', 'Score tracking', 'Hint system']
      }
    },
    {
      week: 3,
      title: 'Data Structures',
      description: 'Master Python\'s built-in data structures for efficient data management.',
      topics: [
        'Lists - creation, indexing, slicing, methods',
        'Tuples - immutable sequences, unpacking',
        'Dictionaries - key-value pairs, methods, comprehension',
        'Sets - unique elements, set operations',
        'List Comprehensions - concise list creation',
        'Working with JSON - parsing, serialization'
      ],
      project: {
        title: 'Project 3: Student Grade Manager',
        description: 'Build a system to manage student grades and generate reports',
        features: ['Add/remove students', 'Enter grades', 'Calculate averages', 'Generate reports']
      }
    },
    {
      week: 4,
      title: 'String Manipulation & File Handling',
      description: 'Work with text data and file operations.',
      topics: [
        'String Methods - split, join, replace, strip, find',
        'String Formatting - f-strings, format(), % formatting',
        'Regular Expressions - pattern matching, re module',
        'File Operations - open, read, write, append',
        'Context Managers - with statement',
        'Working with CSV - csv module, reading/writing'
      ],
      project: {
        title: 'Project 4: Log File Analyzer',
        description: 'Create a tool to analyze server log files and extract insights',
        features: ['Parse log files', 'Count errors', 'Generate statistics', 'Export reports']
      }
    },
    {
      week: 5,
      title: 'Object-Oriented Programming',
      description: 'Learn OOP principles for building scalable applications.',
      topics: [
        'Classes and Objects - attributes, methods, self',
        'Inheritance - parent/child classes, super()',
        'Polymorphism - method overriding, duck typing',
        'Encapsulation - private attributes, properties',
        'Magic Methods - __init__, __str__, __repr__',
        'Class Methods and Static Methods - @classmethod, @staticmethod'
      ],
      project: {
        title: 'Project 5: Library Management System',
        description: 'Build an OOP-based library management system',
        features: ['Book class', 'Member class', 'Borrow/return system', 'Fine calculation']
      }
    },
    {
      week: 6,
      title: 'Error Handling & Debugging',
      description: 'Write robust code with proper error handling and debugging techniques.',
      topics: [
        'Exceptions - try, except, else, finally',
        'Custom Exceptions - creating exception classes',
        'Assertions - assert statement, debugging',
        'Logging - logging module, log levels',
        'Debugging Techniques - pdb, breakpoints',
        'Unit Testing Basics - unittest framework'
      ],
      project: {
        title: 'Project 6: Banking System',
        description: 'Create a banking system with comprehensive error handling',
        features: ['Account management', 'Transactions', 'Balance checks', 'Error recovery']
      }
    },
    {
      week: 7,
      title: 'Modules & Packages',
      description: 'Organize code using modules and external packages.',
      topics: [
        'Creating Modules - import, from-import',
        'Package Structure - __init__.py, subpackages',
        'PyPI and pip - installing packages',
        'Virtual Environments - venv, conda',
        'Popular Standard Library - os, sys, math, random',
        'Requirements Files - requirements.txt'
      ],
      project: {
        title: 'Project 7: Password Generator',
        description: 'Build a secure password generator with multiple options',
        features: ['Custom length', 'Character types', 'Password strength', 'Save to file']
      }
    },
    {
      week: 8,
      title: 'Working with APIs',
      description: 'Consume web APIs and handle JSON data.',
      topics: [
        'HTTP Requests - requests library',
        'RESTful APIs - GET, POST, PUT, DELETE',
        'JSON Processing - parsing, serialization',
        'Authentication - API keys, OAuth basics',
        'Rate Limiting - handling API limits',
        'Async Requests - aiohttp basics'
      ],
      project: {
        title: 'Project 8: Weather Dashboard',
        description: 'Create a weather application using OpenWeatherMap API',
        features: ['Current weather', '5-day forecast', 'Multiple cities', 'Weather maps']
      }
    },
    {
      week: 9,
      title: 'Data Analysis with Pandas',
      description: 'Master data manipulation and analysis with Pandas.',
      topics: [
        'Series and DataFrames - creation, indexing',
        'Data Cleaning - handling missing data, duplicates',
        'Data Filtering - boolean indexing, query()',
        'Data Aggregation - groupby, pivot tables',
        'Merging and Joining - concat, merge, join',
        'Time Series - date ranges, resampling'
      ],
      project: {
        title: 'Project 9: Sales Data Analyzer',
        description: 'Analyze sales data and generate business insights',
        features: ['Data cleaning', 'Monthly trends', 'Top products', 'Revenue analysis']
      }
    },
    {
      week: 10,
      title: 'Data Visualization',
      description: 'Create compelling visualizations with Matplotlib and Seaborn.',
      topics: [
        'Matplotlib Basics - line plots, scatter plots',
        'Customizing Plots - labels, titles, legends',
        'Multiple Subplots - subplot, subplots',
        'Seaborn - statistical visualizations',
        'Interactive Plots - plotly basics',
        'Saving Figures - export to various formats'
      ],
      project: {
        title: 'Project 10: COVID-19 Dashboard',
        description: 'Build an interactive dashboard visualizing pandemic data',
        features: ['Global statistics', 'Country comparison', 'Trend charts', 'Heat maps']
      }
    },
    {
      week: 11,
      title: 'Database Integration',
      description: 'Work with databases using Python.',
      topics: [
        'SQLite - built-in database',
        'SQLAlchemy - ORM basics',
        'PostgreSQL - psycopg2',
        'MongoDB - PyMongo',
        'Database Design - relationships, indexing',
        'Connection Pooling - managing connections'
      ],
      project: {
        title: 'Project 11: Inventory Management System',
        description: 'Create a database-driven inventory system',
        features: ['Product catalog', 'Stock tracking', 'Supplier management', 'Reorder alerts']
      }
    },
    {
      week: 12,
      title: 'Web Development with Flask',
      description: 'Build web applications using the Flask framework.',
      topics: [
        'Flask Setup - routes, templates',
        'Jinja2 Templates - template inheritance',
        'Forms and Validation - WTForms',
        'Database Integration - Flask-SQLAlchemy',
        'User Authentication - Flask-Login',
        'RESTful APIs with Flask - Flask-RESTful'
      ],
      project: {
        title: 'Project 12: Blog Platform',
        description: 'Create a fully functional blog with Flask',
        features: ['User registration', 'Create posts', 'Comments', 'Admin panel']
      }
    },
    {
      week: 13,
      title: 'Web Development with Django',
      description: 'Build robust applications with the Django framework.',
      topics: [
        'Django Setup - project structure, apps',
        'Models and Migrations - database schema',
        'Views and URLs - function-based views, class-based views',
        'Templates - template language, inheritance',
        'Admin Interface - customization',
        'Authentication - users, permissions'
      ],
      project: {
        title: 'Project 13: E-Commerce Site',
        description: 'Build an e-commerce platform with Django',
        features: ['Product catalog', 'Shopping cart', 'User accounts', 'Order management']
      }
    },
    {
      week: 14,
      title: 'Automation & Scripting',
      description: 'Create automation scripts for various tasks.',
      topics: [
        'Web Scraping - BeautifulSoup, Scrapy',
        'Browser Automation - Selenium',
        'Task Scheduling - schedule, cron',
        'Email Automation - smtplib',
        'File Organization - shutil, pathlib',
        'Excel Automation - openpyxl'
      ],
      project: {
        title: 'Project 14: Web Scraper & Monitor',
        description: 'Build a price monitoring system for e-commerce sites',
        features: ['Product scraping', 'Price tracking', 'Email alerts', 'Historical data']
      }
    },
    {
      week: 15,
      title: 'Machine Learning Basics',
      description: 'Introduction to machine learning with scikit-learn.',
      topics: [
        'NumPy - arrays, operations',
        'Scikit-learn - preprocessing, models',
        'Supervised Learning - regression, classification',
        'Model Evaluation - train/test split, metrics',
        'Feature Engineering - scaling, encoding',
        'Model Persistence - saving/loading models'
      ],
      project: {
        title: 'Project 15: House Price Predictor',
        description: 'Build a machine learning model to predict house prices',
        features: ['Data preprocessing', 'Feature selection', 'Model training', 'Prediction interface']
      }
    },
    {
      week: 16,
      title: 'Capstone Project & Career Prep',
      description: 'Build a portfolio-worthy project and prepare for job interviews.',
      topics: [
        'Project Planning - requirements, design',
        'Code Organization - modular design',
        'Documentation - docstrings, README',
        'Testing - unit tests, integration tests',
        'Deployment - cloud platforms',
        'Interview Prep - Python questions, algorithms'
      ],
      project: {
        title: 'Project 16-30: Advanced Capstone Projects',
        description: 'Choose and build 15 additional projects from the list below',
        features: ['Real-world applications', 'Full implementation', 'Portfolio ready', 'Production deployment']
      }
    }
  ];

  // 30+ Additional Python Projects
  const additionalProjects = [
    { icon: Bot, title: 'Chatbot', description: 'AI-powered chatbot with NLP', difficulty: 'Advanced' },
    { icon: Network, title: 'Network Scanner', description: 'Scan and analyze network devices', difficulty: 'Advanced' },
    { icon: BarChart3, title: 'Stock Market Analyzer', description: 'Real-time stock analysis', difficulty: 'Advanced' },
    { icon: LineChart, title: 'COVID-19 Tracker', description: 'Track pandemic statistics', difficulty: 'Intermediate' },
    { icon: PieChart, title: 'Expense Tracker', description: 'Personal finance management', difficulty: 'Intermediate' },
    { icon: Box, title: 'File Organizer', description: 'Automatically organize files', difficulty: 'Beginner' },
    { icon: Binary, title: 'Text Editor', description: 'Build a text editor', difficulty: 'Intermediate' },
    { icon: CpuIcon, title: 'CPU Monitor', description: 'System resource monitoring', difficulty: 'Intermediate' },
    { icon: Music, title: 'Music Player', description: 'Desktop music player', difficulty: 'Intermediate' },
    { icon: Video, title: 'Video Downloader', description: 'Download videos from YouTube', difficulty: 'Intermediate' },
    { icon: Camera, title: 'Face Detection', description: 'Detect faces in images', difficulty: 'Advanced' },
    { icon: Gamepad, title: 'Snake Game', description: 'Classic snake game', difficulty: 'Intermediate' },
    { icon: Ticket, title: 'Tic Tac Toe', description: 'Two-player game', difficulty: 'Beginner' },
    { icon: Wallet, title: 'Budget Planner', description: 'Monthly budget planning', difficulty: 'Intermediate' },
    { icon: Calendar, title: 'Event Scheduler', description: 'Schedule and reminders', difficulty: 'Intermediate' },
    { icon: Users2, title: 'Contact Book', description: 'Manage contacts', difficulty: 'Beginner' },
    { icon: Globe, title: 'URL Shortener', description: 'Shorten long URLs', difficulty: 'Intermediate' },
    { icon: Mail, title: 'Email Sender', description: 'Bulk email sender', difficulty: 'Intermediate' },
    { icon: FileText, title: 'PDF Generator', description: 'Generate PDF reports', difficulty: 'Advanced' },
    { icon: Database, title: 'SQLite Browser', description: 'Browse SQLite databases', difficulty: 'Advanced' },
    { icon: Cloud, title: 'Cloud Backup', description: 'Backup files to cloud', difficulty: 'Advanced' },
    { icon: Shield, title: 'Password Manager', description: 'Secure password storage', difficulty: 'Advanced' },
    { icon: Lock, title: 'File Encryptor', description: 'Encrypt/decrypt files', difficulty: 'Intermediate' },
    { icon: QrCode, title: 'QR Code Generator', description: 'Generate QR codes', difficulty: 'Beginner' },
    { icon: Printer, title: 'Invoice Generator', description: 'Create invoices', difficulty: 'Intermediate' },
    { icon: Truck, title: 'Delivery Tracker', description: 'Track deliveries', difficulty: 'Intermediate' },
    { icon: Building2, title: 'Hotel Booking', description: 'Room reservation system', difficulty: 'Advanced' },
    { icon: Car, title: 'Parking System', description: 'Parking lot management', difficulty: 'Intermediate' },
    { icon: Heart, title: 'Health Tracker', description: 'Track health metrics', difficulty: 'Intermediate' },
    { icon: Coffee, title: 'Coffee Shop POS', description: 'Point of sale system', difficulty: 'Advanced' }
  ];

  const faqs = [
    {
      question: "What is Python and why is it so popular?",
      answer: "Python is a high-level, interpreted programming language known for its simplicity and readability. It's popular because: 1) Easy to learn - clean syntax makes it perfect for beginners. 2) Versatile - used in web development, data science, AI, automation, and more. 3) Large community - extensive libraries and frameworks. 4) High demand - consistently top programming language for jobs. 5) Great for prototyping - rapid development. 6) Used by major companies - Google, Netflix, NASA, Spotify."
    },
    {
      question: "Why should I learn Python?",
      answer: "Learning Python offers numerous benefits: 1) Beginner-friendly - easiest language to start with. 2) High salary potential - Python developers are well-paid. 3) Multiple career paths - web dev, data science, AI, automation. 4) In-demand skill - thousands of job openings globally. 5) Versatile - build anything from scripts to complex applications. 6) Great community - extensive support and resources. 7) Future-proof - growing in AI and data science fields. 8) Opens doors to other technologies."
    },
    {
      question: "What can I do with Python?",
      answer: "With Python, you can: 1) Web Development - using Django, Flask. 2) Data Science - analysis with Pandas, visualization. 3) Machine Learning - AI models with scikit-learn, TensorFlow. 4) Automation - scripts for daily tasks. 5) Game Development - simple games with Pygame. 6) Desktop Applications - GUI apps with Tkinter, PyQt. 7) Scientific Computing - NumPy, SciPy. 8) Network Programming - build network tools. 9) Cybersecurity - security tools and scripts. 10) IoT - Raspberry Pi projects."
    },
    {
      question: "What is the best roadmap to learn Python?",
      answer: "Complete Python roadmap: 1) Basics: syntax, variables, data types. 2) Control Flow: loops, conditionals. 3) Functions and Modules. 4) Data Structures: lists, tuples, dicts, sets. 5) File Handling and Exceptions. 6) OOP: classes, inheritance. 7) Libraries: NumPy, Pandas for data. 8) Web Development: Flask or Django. 9) Databases: SQL, MongoDB. 10) APIs: consume and create. 11) Testing and Debugging. 12) Advanced Topics: decorators, generators. 13) Specialization: choose your path (web, data, AI). 14) Build projects at every stage. 15) Contribute to open source."
    },
    {
      question: "Do I need any prior experience?",
      answer: "No prior programming experience is required! Python is the perfect first language. We start from absolute basics - installing Python, writing your first line of code. The course is designed for complete beginners with no coding background. All you need is basic computer skills, curiosity, and dedication to practice regularly."
    },
    {
      question: "What is the time commitment?",
      answer: "We recommend 15-20 hours per week for this 16-week course. This includes: 6 hours of video lessons/lectures, 4-6 hours of hands-on coding exercises, 3-5 hours of project work, and 2-3 hours of review and practice. With 30+ projects, you'll get extensive practical experience building your portfolio."
    },
    {
      question: "What kind of projects will I build?",
      answer: "You'll build 30+ projects including: Calculator, Number Guessing Game, Student Grade Manager, Log File Analyzer, Library Management System, Banking System, Password Generator, Weather Dashboard, Sales Data Analyzer, COVID-19 Dashboard, Inventory System, Blog Platform, E-Commerce Site, Web Scraper, House Price Predictor, Chatbot, Network Scanner, Stock Analyzer, Face Detection System, Snake Game, Password Manager, and many more. Each project adds to your portfolio."
    },
    {
      question: "What technologies will I master?",
      answer: "You'll master: Python 3.x, Jupyter Notebooks, VS Code, Git/GitHub, Virtual Environments, pip, Flask, Django, Pandas, NumPy, Matplotlib, Seaborn, SQLite, PostgreSQL, MongoDB, SQLAlchemy, REST APIs, JSON, BeautifulSoup, Selenium, scikit-learn, TensorFlow basics, PyTest, Logging, and more. You'll be a well-rounded Python developer ready for various career paths."
    }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      
      {/* HERO SECTION - Full Width Image */}
      <section className="relative h-screen flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1526379095098-40076a3b79f0?w=1920&h=1080&fit=crop"
            alt="Python Programming"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/90 to-blue-900/80" />
        </div>
        
        {/* Gradient orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse animation-delay-2000" />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 text-white">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium px-4 py-2 rounded-full mb-6">
              <Code className="w-4 h-4" />
              Complete 16-Week Python Mastery Bootcamp
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Become a Professional{' '}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Python Developer
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
              Master Python from basics to advanced with 30+ hands-on projects. 
              Learn web development, data science, automation, and more. 
              No prior experience required.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link href="/Careers">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-xl overflow-hidden transition-all hover:shadow-xl hover:shadow-blue-500/25 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5" />
                  Enroll Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-xl hover:bg-white/20 transition-all flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Download Syllabus
              </button>
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
                <div className="text-3xl font-bold">15+</div>
                <div className="text-sm text-gray-400">Technologies</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-blue-500 rounded-full mt-2 animate-scroll" />
          </div>
        </div>
      </section>

      {/* What is Python Section */}
      <section className="py-16 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                What is <span className="text-blue-600 dark:text-blue-400">Python</span>?
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                Python is a high-level, interpreted programming language known for its simplicity, readability, and versatility. Created by Guido van Rossum and first released in 1991, Python has become one of the world's most popular programming languages.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                Python emphasizes code readability with its clean syntax, making it an excellent choice for beginners while remaining powerful enough for experts. It supports multiple programming paradigms including procedural, object-oriented, and functional programming.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                Python's extensive standard library and thriving ecosystem of third-party packages make it suitable for virtually any task:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="p-1 bg-blue-100 dark:bg-blue-900/30 rounded mt-1">
                    <Globe className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900 dark:text-white">Web Development:</span>
                    <span className="text-gray-600 dark:text-gray-400"> Django, Flask, FastAPI for building robust web applications.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1 bg-green-100 dark:bg-green-900/30 rounded mt-1">
                    <BarChart3 className="w-4 h-4 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900 dark:text-white">Data Science:</span>
                    <span className="text-gray-600 dark:text-gray-400"> Pandas, NumPy, Matplotlib for data analysis and visualization.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1 bg-purple-100 dark:bg-purple-900/30 rounded mt-1">
                    <Brain className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900 dark:text-white">Machine Learning:</span>
                    <span className="text-gray-600 dark:text-gray-400"> scikit-learn, TensorFlow, PyTorch for AI applications.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1 bg-orange-100 dark:bg-orange-900/30 rounded mt-1">
                    <Terminal className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900 dark:text-white">Automation:</span>
                    <span className="text-gray-600 dark:text-gray-400"> Scripts, web scraping, task automation.</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { number: '#1', label: 'Most popular language' },
                { number: '8.4M', label: 'Python developers' },
                { number: '30%', label: 'Annual job growth' },
                { number: '$120k', label: 'Average salary' }
              ].map((stat, i) => (
                <div key={i} className="p-4 bg-gray-50 dark:bg-gray-900 rounded-xl text-center">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{stat.number}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Learn Python */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
              Why Learn <span className="text-blue-600 dark:text-blue-400">Python</span>?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              10 compelling reasons to start your Python journey today
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: TrendingUp, title: 'High Demand', description: 'Python developers are among the most sought-after professionals in tech.' },
              { icon: DollarSign, title: 'Excellent Salary', description: 'Average Python developer salary is $120k+ with great growth potential.' },
              { icon: Brain, title: 'Easy to Learn', description: 'Clean, readable syntax makes Python the perfect first programming language.' },
              { icon: Rocket, title: 'Versatile', description: 'Use Python for web, data science, AI, automation, and more.' },
              { icon: Users, title: 'Huge Community', description: 'Millions of developers, extensive libraries, and endless resources.' },
              { icon: Award, title: 'Future-Proof', description: 'Leading language in AI and data science - the technologies of tomorrow.' },
              { icon: Briefcase, title: 'Career Opportunities', description: 'From startups to Google, every company needs Python developers.' },
              { icon: Globe, title: 'Remote Work', description: 'Python skills enable remote work opportunities worldwide.' },
              { icon: Heart, title: 'Fun to Code', description: 'Python\'s simplicity makes programming enjoyable and creative.' }
            ].map((reason, i) => {
              const Icon = reason.icon
              return (
                <div key={i} className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition">
                  <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-3" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{reason.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{reason.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* What You Can Build with Python */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
              What You Can <span className="text-blue-600 dark:text-blue-400">Build</span> with Python
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Python's versatility lets you create almost anything
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Globe, label: 'Web Apps' },
              { icon: BarChart3, label: 'Data Dashboards' },
              { icon: Brain, label: 'AI Models' },
              { icon: Bot, label: 'Chatbots' },
              { icon: Network, label: 'Network Tools' },
              { icon: Database, label: 'Database Apps' },
              { icon: Gamepad, label: 'Games' },
              { icon: Smartphone, label: 'Mobile Backends' },
              { icon: Cloud, label: 'Cloud Services' },
              { icon: Lock, label: 'Security Tools' },
              { icon: LineChart, label: 'Analytics' },
              { icon: CpuIcon, label: 'IoT Apps' },
              { icon: FileText, label: 'PDF Tools' },
              { icon: Mail, label: 'Email Automation' },
              { icon: Camera, label: 'Image Processing' },
              { icon: Music, label: 'Audio Apps' }
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <div key={i} className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg text-center hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
                  <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                  <span className="text-sm font-medium text-gray-900 dark:text-white">{item.label}</span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* The Complete Python Roadmap */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
              The Complete <span className="text-blue-600 dark:text-blue-400">Python Roadmap</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Follow this proven path to become a professional Python developer
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-cyan-500 hidden md:block" />

            <div className="space-y-8">
              {[
                { phase: 'Phase 1', title: 'Python Fundamentals', weeks: 'Weeks 1-4', color: 'blue', topics: ['Syntax & Basics', 'Data Types', 'Control Flow', 'Functions'] },
                { phase: 'Phase 2', title: 'Core Python', weeks: 'Weeks 5-8', color: 'cyan', topics: ['OOP', 'File Handling', 'Error Handling', 'Modules'] },
                { phase: 'Phase 3', title: 'Advanced Python', weeks: 'Weeks 9-12', color: 'green', topics: ['APIs', 'Databases', 'Web Dev', 'Data Analysis'] },
                { phase: 'Phase 4', title: 'Specialization', weeks: 'Weeks 13-16', color: 'purple', topics: ['Machine Learning', 'Automation', 'Capstone', 'Career Prep'] }
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

      {/* 16-Week Python Curriculum */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
              16-Week <span className="text-blue-600 dark:text-blue-400">Python Curriculum</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
              Week-by-week breakdown of your Python learning journey with 30+ projects
            </p>
            <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 px-4 py-2 rounded-full">
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
                      <span className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                        {week.week}
                      </span>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">{week.title}</h3>
                    </div>
                    <span className="text-sm px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full">
                      Project: {week.project.title}
                    </span>
                  </div>
                </div>
                
                <div className="p-4 bg-white dark:bg-gray-800">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{week.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-blue-600" />
                        Topics Covered
                      </h4>
                      <ul className="space-y-1">
                        {week.topics.map((topic, i) => (
                          <li key={i} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                            <span className="text-blue-600 mt-1">•</span>
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                        <Rocket className="w-4 h-4 text-green-600" />
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

      {/* 30+ Python Projects Showcase */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
              30+ <span className="text-blue-600 dark:text-blue-400">Python Projects</span>
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
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                      <Icon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
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

      {/* Python Libraries You'll Master */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
              Python Libraries You'll <span className="text-blue-600 dark:text-blue-400">Master</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Industry-standard tools and frameworks for professional Python development
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { icon: Code, name: 'Python 3.x' },
              { icon: Layout, name: 'Django' },
              { icon: Server, name: 'Flask' },
              { icon: Database, name: 'Pandas' },
              { icon: BarChart3, name: 'NumPy' },
              { icon: LineChart, name: 'Matplotlib' },
              { icon: PieChart, name: 'Seaborn' },
              { icon: Brain, name: 'scikit-learn' },
              { icon: Bot, name: 'TensorFlow' },
              { icon: Terminal, name: 'BeautifulSoup' },
              { icon: Globe, name: 'Requests' },
              { icon: Database, name: 'SQLAlchemy' },
              { icon: TestTube, name: 'PyTest' },
              { icon: Lock, name: 'PyJWT' },
              { icon: Cloud, name: 'Boto3' },
              { icon: CpuIcon, name: 'OpenCV' }
            ].map((tech, i) => {
              const Icon = tech.icon
              return (
                <div key={i} className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg text-center hover:shadow-md transition">
                  <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                  <span className="text-sm font-medium text-gray-900 dark:text-white">{tech.name}</span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Career Paths Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Launch Your Python Career?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join our Python bootcamp and get access to our career support team. We'll help you prepare for interviews, build your portfolio, and connect with hiring companies.
          </p>
          <Link href="/Careers">
            <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-all hover:shadow-xl inline-flex items-center gap-2 group">
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
              Frequently Asked <span className="text-blue-600 dark:text-blue-400">Questions</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Everything you need to know about our Python course
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
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h2 className="text-3xl font-bold mb-2">Ready to Start Your Python Journey?</h2>
              <p className="text-blue-100">Join thousands of students who have mastered Python with Yelocode.</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="/Careers">
                <button className="px-6 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-2">
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

// Add missing ArrowRight icon
const ArrowRight = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
)