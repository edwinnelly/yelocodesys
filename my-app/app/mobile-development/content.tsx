"use client";

import { useState } from 'react'
import { 
  Brain, GraduationCap, Search, MessageSquare, Check, X,
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
  BarChart, LineChart, PieChart, Network, Sigma, Calculator,
  Binary, Sparkles, Bot, Eye, Mic, Fingerprint, QrCode,
  ScanLine, MessageCircle, Twitter, Facebook, Instagram,
  Linkedin, Youtube as YoutubeIcon, Twitch, Code,
  type Icon as LucideIcon
} from 'lucide-react'
import Link from 'next/link'

export default function DataSciencePage() {
  const [activeTab, setActiveTab] = useState('overview')
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  // 16-Week Curriculum with 30 projects
  const weeklyCurriculum = [
    {
      week: 1,
      title: 'Python Programming Fundamentals',
      description: 'Master Python programming language - the foundation of data science and AI.',
      topics: [
        'Python Basics - variables, data types, operators, control flow',
        'Data Structures - lists, tuples, dictionaries, sets, comprehensions',
        'Functions and Modules - defining functions, lambda, imports',
        'File Handling - reading/writing files, CSV, JSON, exceptions',
        'NumPy Fundamentals - arrays, operations, broadcasting, indexing',
        'Pandas Introduction - Series, DataFrames, basic operations'
      ],
      project: {
        title: 'Project 1: Data Analysis CLI Tool',
        description: 'Build a command-line tool to analyze CSV datasets',
        features: ['Load CSV files', 'Basic statistics', 'Data filtering', 'Export results']
      }
    },
    {
      week: 2,
      title: 'Data Manipulation with Pandas',
      description: 'Deep dive into Pandas for efficient data manipulation and analysis.',
      topics: [
        'DataFrames Deep Dive - indexing, selection, boolean indexing',
        'Data Cleaning - handling missing values, duplicates, outliers',
        'Data Transformation - apply, map, pivot tables, melting',
        'GroupBy Operations - aggregation, transformation, filtering',
        'Merging and Joining - concat, merge, join operations',
        'Time Series Analysis - datetime indexing, resampling, rolling windows'
      ],
      project: {
        title: 'Project 2: Sales Data Analyzer',
        description: 'Analyze e-commerce sales data to find insights and trends',
        features: ['Data cleaning', 'Monthly sales trends', 'Top products', 'Customer segmentation']
      }
    },
    {
      week: 3,
      title: 'Data Visualization',
      description: 'Create compelling visualizations to communicate insights effectively.',
      topics: [
        'Matplotlib Fundamentals - line plots, scatter plots, bar charts',
        'Customizing Visualizations - colors, labels, legends, annotations',
        'Seaborn Statistical Plots - distribution plots, categorical plots',
        'Advanced Visualizations - heatmaps, pair plots, violin plots',
        'Interactive Visualizations - Plotly basics, dashboards',
        'Storytelling with Data - choosing the right chart, design principles'
      ],
      project: {
        title: 'Project 3: COVID-19 Dashboard',
        description: 'Create an interactive dashboard showing COVID-19 trends',
        features: ['Global map view', 'Time series charts', 'Country comparison', 'Predictions']
      }
    },
    {
      week: 4,
      title: 'Statistical Analysis',
      description: 'Foundation in statistics for data science and machine learning.',
      topics: [
        'Descriptive Statistics - mean, median, mode, variance, std deviation',
        'Probability Theory - distributions, Bayes theorem, random variables',
        'Hypothesis Testing - t-tests, chi-square, p-values, significance',
        'Correlation and Regression - Pearson correlation, linear regression',
        'Experimental Design - A/B testing, sampling methods',
        'Bayesian Statistics - prior, likelihood, posterior'
      ],
      project: {
        title: 'Project 4: A/B Test Analyzer',
        description: 'Build a tool to analyze A/B test results and make recommendations',
        features: ['Statistical significance', 'Effect size', 'Power analysis', 'Visualization']
      }
    },
    {
      week: 5,
      title: 'SQL for Data Science',
      description: 'Master SQL for data extraction and manipulation from databases.',
      topics: [
        'SQL Basics - SELECT, WHERE, ORDER BY, LIMIT',
        'Aggregation Functions - COUNT, SUM, AVG, GROUP BY, HAVING',
        'Joins - INNER, LEFT, RIGHT, FULL OUTER, self joins',
        'Subqueries and CTEs - nested queries, common table expressions',
        'Window Functions - ROW_NUMBER, RANK, LAG, LEAD',
        'Query Optimization - indexes, execution plans'
      ],
      project: {
        title: 'Project 5: E-commerce Database Analysis',
        description: 'Analyze customer behavior from e-commerce database',
        features: ['Customer lifetime value', 'Purchase patterns', 'Product recommendations', 'Churn analysis']
      }
    },
    {
      week: 6,
      title: 'Machine Learning Fundamentals',
      description: 'Introduction to machine learning algorithms and workflows.',
      topics: [
        'ML Pipeline Overview - data prep, training, evaluation, deployment',
        'Supervised vs Unsupervised Learning - key differences',
        'Linear Regression - simple, multiple, polynomial, regularization',
        'Classification Algorithms - logistic regression, KNN, naive bayes',
        'Model Evaluation - train/test split, cross-validation, metrics',
        'Feature Engineering - scaling, encoding, feature selection'
      ],
      project: {
        title: 'Project 6: House Price Predictor',
        description: 'Build a regression model to predict house prices',
        features: ['Feature engineering', 'Multiple models', 'Hyperparameter tuning', 'Price predictions']
      }
    },
    {
      week: 7,
      title: 'Advanced Machine Learning',
      description: 'Deep dive into advanced ML algorithms and techniques.',
      topics: [
        'Decision Trees and Random Forests - ensemble methods',
        'Gradient Boosting - XGBoost, LightGBM, CatBoost',
        'Support Vector Machines - kernels, margin optimization',
        'Dimensionality Reduction - PCA, t-SNE, feature extraction',
        'Clustering Algorithms - K-means, hierarchical, DBSCAN',
        'Anomaly Detection - isolation forest, one-class SVM'
      ],
      project: {
        title: 'Project 7: Customer Segmentation',
        description: 'Segment customers using clustering algorithms',
        features: ['RFM analysis', 'K-means clustering', 'Segment profiles', 'Marketing strategies']
      }
    },
    {
      week: 8,
      title: 'Deep Learning with TensorFlow',
      description: 'Introduction to neural networks and deep learning.',
      topics: [
        'Neural Networks Basics - perceptrons, activation functions',
        'TensorFlow Fundamentals - tensors, operations, graphs',
        'Building Neural Networks - sequential API, functional API',
        'Training Neural Networks - backpropagation, optimizers, loss functions',
        'Regularization - dropout, batch normalization, early stopping',
        'Convolutional Neural Networks - CNN architecture, pooling'
      ],
      project: {
        title: 'Project 8: Image Classifier',
        description: 'Build a CNN to classify images (CIFAR-10 or custom dataset)',
        features: ['Data augmentation', 'CNN architecture', 'Transfer learning', 'Web interface']
      }
    },
    {
      week: 9,
      title: 'Natural Language Processing',
      description: 'Process and analyze text data with NLP techniques.',
      topics: [
        'Text Preprocessing - tokenization, stemming, lemmatization',
        'Text Representation - bag-of-words, TF-IDF, word embeddings',
        'NLP Libraries - NLTK, spaCy, transformers',
        'Sentiment Analysis - VADER, TextBlob, custom models',
        'Topic Modeling - LDA, NMF',
        'Sequence Models - RNN, LSTM, GRU'
      ],
      project: {
        title: 'Project 9: Sentiment Analysis App',
        description: 'Build a sentiment analyzer for product reviews',
        features: ['Review scraping', 'Sentiment prediction', 'Word clouds', 'Trend analysis']
      }
    },
    {
      week: 10,
      title: 'Time Series Analysis',
      description: 'Analyze and forecast time-dependent data.',
      topics: [
        'Time Series Components - trend, seasonality, residual',
        'Stationarity - ADF test, differencing, transformations',
        'ARIMA Models - auto-regression, moving average, integration',
        'Seasonal Decomposition - STL, seasonal ARIMA',
        'Prophet by Facebook - automated forecasting',
        'LSTM for Time Series - sequence prediction'
      ],
      project: {
        title: 'Project 10: Stock Price Predictor',
        description: 'Forecast stock prices using multiple models',
        features: ['Data fetching', 'Multiple models', 'Model comparison', 'Trading signals']
      }
    },
    {
      week: 11,
      title: 'Big Data Technologies',
      description: 'Work with large-scale data using big data tools.',
      topics: [
        'Big Data Concepts - 5 Vs of big data, distributed computing',
        'Apache Spark - RDDs, DataFrames, Spark SQL',
        'PySpark - working with large datasets',
        'Hadoop Ecosystem - HDFS, MapReduce, Hive',
        'Data Warehousing - star schema, fact/dimension tables',
        'Cloud Platforms - AWS, GCP, Azure basics'
      ],
      project: {
        title: 'Project 11: Big Data Analyzer',
        description: 'Process large dataset (10M+ rows) with PySpark',
        features: ['Data loading', 'Distributed processing', 'Aggregations', 'Performance optimization']
      }
    },
    {
      week: 12,
      title: 'Model Deployment & MLOps',
      description: 'Deploy machine learning models to production.',
      topics: [
        'Model Serialization - pickle, joblib, ONNX',
        'Web APIs with FastAPI - REST endpoints, documentation',
        'Docker Containers - containerizing ML applications',
        'Cloud Deployment - AWS SageMaker, GCP AI Platform',
        'Model Monitoring - drift detection, performance tracking',
        'CI/CD for ML - automated training and deployment'
      ],
      project: {
        title: 'Project 12: ML Model API',
        description: 'Deploy a trained model as a REST API',
        features: ['FastAPI backend', 'Docker container', 'Cloud deployment', 'API documentation']
      }
    },
    {
      week: 13,
      title: 'Generative AI & LLMs',
      description: 'Work with cutting-edge generative AI technologies.',
      topics: [
        'Generative AI Overview - GANs, VAEs, diffusion models',
        'Large Language Models - GPT, BERT, transformer architecture',
        'Prompt Engineering - techniques for effective prompting',
        'LangChain Framework - chains, agents, memory',
        'RAG Applications - retrieval augmented generation',
        'Fine-tuning LLMs - adapting models to specific tasks'
      ],
      project: {
        title: 'Project 13: AI Chatbot Assistant',
        description: 'Build a custom chatbot using LangChain and LLMs',
        features: ['Document Q&A', 'Conversation memory', 'Custom knowledge base', 'Web interface']
      }
    },
    {
      week: 14,
      title: 'Computer Vision',
      description: 'Advanced techniques for image and video analysis.',
      topics: [
        'Image Processing - OpenCV basics, filters, transformations',
        'Object Detection - YOLO, SSD, Faster R-CNN',
        'Image Segmentation - U-Net, Mask R-CNN',
        'Face Recognition - face detection, verification, recognition',
        'Video Analysis - optical flow, action recognition',
        'Generative Models for Images - GANs, stable diffusion'
      ],
      project: {
        title: 'Project 14: Object Detection System',
        description: 'Build a real-time object detection application',
        features: ['Video processing', 'Multiple object tracking', 'Custom object detection', 'Real-time alerts']
      }
    },
    {
      week: 15,
      title: 'Responsible AI & Ethics',
      description: 'Build fair, interpretable, and ethical AI systems.',
      topics: [
        'Bias in AI - sources of bias, detection, mitigation',
        'Model Interpretability - SHAP, LIME, feature importance',
        'Fairness Metrics - demographic parity, equal opportunity',
        'Privacy in AI - differential privacy, federated learning',
        'Regulatory Compliance - GDPR, CCPA, AI regulations',
        'Ethical Decision Making - framework and case studies'
      ],
      project: {
        title: 'Project 15: Fairness Audit Tool',
        description: 'Build a tool to audit ML models for bias',
        features: ['Bias detection', 'Fairness metrics', 'Mitigation strategies', 'Visualization']
      }
    },
    {
      week: 16,
      title: 'Capstone Project & Career Preparation',
      description: 'Build a portfolio-ready project and prepare for data science interviews.',
      topics: [
        'End-to-End Project - problem definition to deployment',
        'Project Presentation - storytelling with data',
        'Portfolio Building - showcasing projects effectively',
        'Resume Writing - highlighting DS skills and projects',
        'Interview Preparation - technical questions, case studies',
        'Networking - building professional connections'
      ],
      project: {
        title: 'Project 16-30: Capstone Projects (Choose 15)',
        description: 'Select and build 15 additional projects from the list below',
        features: ['Real-world datasets', 'End-to-end pipeline', 'Production deployment', 'Portfolio ready']
      }
    }
  ];

  // 30 Additional Projects
  const additionalProjects = [
    { icon: Brain, title: 'Neural Style Transfer', description: 'Apply artistic styles to images', difficulty: 'Advanced' },
    { icon: Bot, title: 'Personal Assistant Bot', description: 'AI assistant for daily tasks', difficulty: 'Advanced' },
    { icon: Eye, title: 'Face Recognition System', description: 'Identify and verify faces', difficulty: 'Intermediate' },
    { icon: Mic, title: 'Speech Recognition App', description: 'Convert speech to text', difficulty: 'Intermediate' },
    { icon: Fingerprint, title: 'Biometric Authentication', description: 'Fingerprint-based login', difficulty: 'Advanced' },
    { icon: QrCode, title: 'QR Code Generator/Analyzer', description: 'Generate and scan QR codes', difficulty: 'Beginner' },
    { icon: ScanLine, title: 'Document Scanner', description: 'Scan and OCR documents', difficulty: 'Intermediate' },
    { icon: MessageCircle, title: 'Customer Service Chatbot', description: 'AI-powered customer support', difficulty: 'Advanced' },
    { icon: Twitter, title: 'Twitter Sentiment Analysis', description: 'Analyze tweet sentiments', difficulty: 'Intermediate' },
    { icon: Facebook, title: 'Social Media Analyzer', description: 'Analyze engagement metrics', difficulty: 'Intermediate' },
    { icon: Instagram, title: 'Image Hashtag Recommender', description: 'Recommend hashtags for images', difficulty: 'Intermediate' },
    { icon: Linkedin, title: 'Job Recommendation System', description: 'Recommend jobs based on profile', difficulty: 'Advanced' },
    { icon: YoutubeIcon, title: 'Video Recommendation Engine', description: 'Personalized video recommendations', difficulty: 'Advanced' },
    { icon: Twitch, title: 'Stream Analytics Dashboard', description: 'Analyze streaming metrics', difficulty: 'Intermediate' },
    { icon: Activity, title: 'Health Monitor', description: 'Predict health risks from vitals', difficulty: 'Advanced' },
    { icon: Heart, title: 'Disease Prediction', description: 'Predict diseases from symptoms', difficulty: 'Advanced' },
    { icon: Wallet, title: 'Credit Risk Model', description: 'Predict loan default risk', difficulty: 'Advanced' },
    { icon: TrendingUp, title: 'Stock Market Analyzer', description: 'Technical analysis with ML', difficulty: 'Advanced' },
    { icon: ShoppingCart, title: 'Recommendation System', description: 'Product recommendations', difficulty: 'Intermediate' },
    { icon: Truck, title: 'Delivery Route Optimizer', description: 'Optimize delivery routes', difficulty: 'Intermediate' },
    { icon: Car, title: 'Self-Driving Car Simulator', description: 'Basic autonomous driving', difficulty: 'Advanced' },
    { icon: Plane, title: 'Flight Price Predictor', description: 'Predict flight prices', difficulty: 'Intermediate' },
    { icon: Map, title: 'Traffic Predictor', description: 'Predict traffic congestion', difficulty: 'Advanced' },
    { icon: Sun, title: 'Solar Energy Forecaster', description: 'Predict solar energy output', difficulty: 'Intermediate' },
    { icon: Leaf, title: 'Crop Yield Predictor', description: 'Predict agricultural yields', difficulty: 'Intermediate' },
    { icon: Dog, title: 'Pet Breed Classifier', description: 'Identify dog breeds', difficulty: 'Beginner' },
    { icon: Ticket, title: 'Movie Success Predictor', description: 'Predict box office success', difficulty: 'Intermediate' },
    { icon: Gamepad, title: 'Game Difficulty Adjuster', description: 'Adaptive game difficulty', difficulty: 'Intermediate' },
    { icon: Gift, title: 'Gift Recommender', description: 'Personalized gift ideas', difficulty: 'Beginner' },
    { icon: Coffee, title: 'Coffee Shop Analyzer', description: 'Analyze coffee shop reviews', difficulty: 'Beginner' }
  ];

  const faqs = [
    {
      question: "What is Data Science and AI?",
      answer: "Data Science is an interdisciplinary field that uses scientific methods, algorithms, and systems to extract insights from structured and unstructured data. Artificial Intelligence (AI) is a broader concept of machines simulating human intelligence. Together, they form a powerful combination: Data Science provides the tools to analyze data, while AI uses that data to make intelligent decisions. This field powers everything from recommendation systems (Netflix, Amazon) to autonomous vehicles, chatbots, medical diagnosis, and fraud detection."
    },
    {
      question: "Why should I learn Data Science & AI?",
      answer: "Learning Data Science & AI offers numerous benefits: 1) Explosive Demand - Companies across all industries need data scientists. 2) Top Salaries - Data scientists are among the highest-paid professionals. 3) Future-Proof Career - AI is transforming every industry. 4) Impactful Work - Solve real-world problems in healthcare, climate, business. 5) Intellectual Challenge - Constantly learn and solve complex problems. 6) Versatility - Work in any industry: tech, finance, healthcare, retail. 7) Innovation - Be at the forefront of technological advancement. 8) Remote Work - Many data science roles offer flexibility."
    },
    {
      question: "What can I do with Data Science & AI skills?",
      answer: "With Data Science & AI skills, you can: 1) Become a Data Scientist at tech companies. 2) Work as an ML Engineer building production AI systems. 3) Join as a Data Analyst helping businesses make decisions. 4) Become an AI Research Scientist pushing boundaries. 5) Work in specialized fields like Computer Vision or NLP. 6) Start your own AI-powered company. 7) Consult for businesses on AI strategy. 8) Work in academia or research. 9) Create AI art and generative content. 10) Build intelligent chatbots and virtual assistants. 11) Develop recommendation systems. 12) Work on autonomous vehicles or robotics."
    },
    {
      question: "What is the best roadmap to become a Data Scientist?",
      answer: "The complete data science roadmap: 1) Master Python programming and data libraries (Pandas, NumPy). 2) Learn SQL for database querying. 3) Study statistics and probability fundamentals. 4) Master data visualization with Matplotlib/Seaborn. 5) Learn machine learning algorithms and scikit-learn. 6) Dive into deep learning with TensorFlow/PyTorch. 7) Specialize in areas like NLP, Computer Vision, or Time Series. 8) Learn big data technologies (Spark). 9) Master MLOps and deployment. 10) Build a portfolio of end-to-end projects. 11) Study system design for ML systems. 12) Prepare for interviews with ML case studies. This 16-week course covers exactly this roadmap with 30+ hands-on projects."
    },
    {
      question: "Do I need a math or programming background?",
      answer: "While a background in math or programming helps, it's not required! This course is designed for beginners and covers all necessary mathematics (statistics, linear algebra, calculus) and programming fundamentals. We start from the basics and progressively build up. The key requirements are curiosity, analytical thinking, and dedication to practice. Many successful data scientists started from non-technical backgrounds."
    },
    {
      question: "What is the time commitment for this 16-week course?",
      answer: "We recommend dedicating 15-20 hours per week. This includes 6 hours of live/recorded sessions and 9-14 hours of hands-on coding, project work, and assignments. With 30+ projects, you'll get extensive practical experience building your portfolio. Many students successfully complete the course while working full-time by dedicating evenings and weekends."
    },
    {
      question: "What kind of projects will I build?",
      answer: "You'll build 30+ real-world projects including: Sales Data Analyzer, COVID-19 Dashboard, House Price Predictor, Customer Segmentation, Image Classifier, Sentiment Analysis App, Stock Price Predictor, AI Chatbot, Object Detection System, Recommendation Engine, and many more. Projects range from beginner to advanced, covering all major areas of data science and AI. By the end, you'll have a comprehensive portfolio demonstrating your skills to employers."
    },
    {
      question: "What technologies will I master?",
      answer: "You'll master: Python, Pandas, NumPy, Matplotlib, Seaborn, Scikit-learn, TensorFlow, PyTorch, SQL, Spark, FastAPI, Docker, Git, Jupyter, VS Code, AWS/GCP basics, MLflow, DVC, and more. You'll be proficient in the entire data science stack - from data collection and cleaning to model deployment and monitoring."
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      
      {/* HERO SECTION - Full Width Image */}
      <section className="relative h-screen flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1920&h=1080&fit=crop"
            alt="Data Science and AI"
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
              <Brain className="w-4 h-4" />
              Complete 16-Week Data Science & AI Bootcamp
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Become a Professional{' '}
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-400 bg-clip-text text-transparent">
                Data Scientist
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
              Master data science, machine learning, and AI with 30+ hands-on projects. 
              Learn Python, ML, Deep Learning, NLP, LLMs, and MLOps. 
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
                <div className="text-3xl font-bold">15+</div>
                <div className="text-sm text-gray-400">Technologies</div>
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

      {/* What is Data Science Section */}
      <section className="py-16 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                What is <span className="text-yellow-600 dark:text-yellow-400">Data Science & AI</span>?
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                Data Science is the art of extracting insights and knowledge from data using scientific methods, algorithms, and systems. Artificial Intelligence (AI) takes this further by creating systems that can learn, reason, and make decisions like humans. Together, they form the most transformative technology of our era.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                Data Science & AI encompasses:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="p-1 bg-yellow-100 dark:bg-yellow-900/30 rounded mt-1">
                    <Database className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900 dark:text-white">Data Engineering:</span>
                    <span className="text-gray-600 dark:text-gray-400"> Collecting, cleaning, and preparing data for analysis - the foundation of all data work.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1 bg-yellow-100 dark:bg-yellow-900/30 rounded mt-1">
                    <BarChart className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900 dark:text-white">Machine Learning:</span>
                    <span className="text-gray-600 dark:text-gray-400"> Building models that learn from data to make predictions and decisions.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1 bg-yellow-100 dark:bg-yellow-900/30 rounded mt-1">
                    <Brain className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900 dark:text-white">Deep Learning & AI:</span>
                    <span className="text-gray-600 dark:text-gray-400"> Advanced neural networks that power computer vision, NLP, and generative AI.</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { number: '$120k+', label: 'Average Data Scientist Salary' },
                { number: '35%', label: 'Annual Job Growth' },
                { number: '2.7M', label: 'AI Jobs by 2025' },
                { number: '100%', label: 'Remote Opportunities' }
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

      {/* Why Learn Data Science & AI */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
              Why Learn <span className="text-yellow-600 dark:text-yellow-400">Data Science & AI</span>?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              10 compelling reasons to start your data science journey today
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: TrendingUp, title: 'Explosive Demand', description: 'Data scientists are needed in every industry - from tech to healthcare to finance.' },
              { icon: DollarSign, title: 'Top Salaries', description: 'Data scientists command some of the highest salaries in the tech industry.' },
              { icon: Globe, title: 'Global Impact', description: 'Work on problems that matter - climate change, healthcare, education, and more.' },
              { icon: Rocket, title: 'Future-Proof', description: 'AI is transforming every industry. Be at the forefront of this revolution.' },
              { icon: Brain, title: 'Intellectual Challenge', description: 'Constantly solve complex problems and push the boundaries of what\'s possible.' },
              { icon: Heart, title: 'Meaningful Work', description: 'Use data to make better decisions, save lives, and improve human well-being.' },
              { icon: Users, title: 'Versatility', description: 'Work in any industry - tech, finance, healthcare, retail, manufacturing, and more.' },
              { icon: Award, title: 'Continuous Learning', description: 'Field evolves rapidly - always something new to learn and explore.' },
              { icon: Briefcase, title: 'Entrepreneurship', description: 'Build AI-powered startups and create innovative products.' }
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
              With data science & AI skills, you can create intelligent systems that transform industries
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Bot, label: 'Chatbots' },
              { icon: Eye, label: 'Computer Vision' },
              { icon: Mic, label: 'Speech Recognition' },
              { icon: Brain, label: 'Recommendation Systems' },
              { icon: TrendingUp, label: 'Predictive Models' },
              { icon: Heart, label: 'Healthcare AI' },
              { icon: Car, label: 'Autonomous Vehicles' },
              { icon: Fingerprint, label: 'Biometrics' },
              { icon: LineChart, label: 'Forecasting' },
              { icon: Users2, label: 'Customer Analytics' },
              { icon: Shield, label: 'Fraud Detection' },
              { icon: Sparkles, label: 'Generative AI' },
              { icon: Map, label: 'Route Optimization' },
              { icon: Activity, label: 'Anomaly Detection' },
              { icon: MessageCircle, label: 'NLP Systems' },
              { icon: Sigma, label: 'Statistical Models' }
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
              Follow this proven path to become a professional data scientist
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-500 to-yellow-500 hidden md:block" />

            <div className="space-y-8">
              {[
                { phase: 'Phase 1', title: 'Python & Data Fundamentals', weeks: 'Weeks 1-4', color: 'yellow', topics: ['Python', 'Pandas', 'NumPy', 'Visualization'] },
                { phase: 'Phase 2', title: 'Machine Learning', weeks: 'Weeks 5-8', color: 'yellow', topics: ['Scikit-learn', 'Regression', 'Classification', 'Clustering'] },
                { phase: 'Phase 3', title: 'Deep Learning & AI', weeks: 'Weeks 9-12', color: 'yellow', topics: ['TensorFlow', 'NLP', 'Computer Vision', 'LLMs'] },
                { phase: 'Phase 4', title: 'Production & Specialization', weeks: 'Weeks 13-16', color: 'yellow', topics: ['MLOps', 'Big Data', 'Deployment', 'Career Prep'] }
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
              <span className="font-medium">{weeklyCurriculum.reduce((acc, week) => acc + 1, 0)} Weeks • 30+ Projects</span>
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

      {/* Technologies You'll Master */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
              Technologies You'll <span className="text-yellow-600 dark:text-yellow-400">Master</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Full stack data science with modern tools and frameworks
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { icon: Code, name: 'Python' },
              { icon: Database, name: 'Pandas' },
              { icon: Sigma, name: 'NumPy' },
              { icon: BarChart, name: 'Matplotlib' },
              { icon: LineChart, name: 'Seaborn' },
              { icon: Layers, name: 'Scikit-learn' },
              { icon: Brain, name: 'TensorFlow' },
              { icon: Brain, name: 'PyTorch' },
              { icon: Server, name: 'SQL' },
              { icon: Cloud, name: 'Spark' },
              { icon: GitBranch, name: 'Git' },
              { icon: Terminal, name: 'Jupyter' },
              { icon: Bot, name: 'LangChain' },
              { icon: TestTube, name: 'MLflow' },
              { icon: Rocket, name: 'FastAPI' },
              { icon: Cloud, name: 'Docker' },
              { icon: Cpu, name: 'VS Code' },
              { icon: Database, name: 'PostgreSQL' }
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Launch Your Data Science Career?</h2>
          <p className="text-xl text-yellow-100 mb-8 max-w-2xl mx-auto">
            Join our Data Science & AI bootcamp and get access to our career support team. We'll help you prepare for interviews, build your portfolio, and connect with top tech companies.
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
              Everything you need to know about our data science course
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
              <h2 className="text-3xl font-bold mb-2">Ready to Start Your Data Science Journey?</h2>
              <p className="text-yellow-100">Join 2,500+ students who have transformed their careers with Yelocode.</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="/Careers">
                <button className="px-6 py-3 bg-white text-yellow-600 font-medium rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-2">
                  <GraduationCap className="w-5 h-5" />
                  Enroll Now
                </button>
              </Link>
              <a href="contacts">
              <button className="px-6 py-3 border border-white/30 text-white font-medium rounded-lg hover:bg-white/10 transition-colors flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Schedule Consultation
              </button>
              </a>
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