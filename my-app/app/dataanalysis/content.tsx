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
  Wallet, Trophy, Gift, Truck, Dog, Leaf, Bike, Ticket, GlassWater, Shirt, Watch,
  Bot, Network, BarChart3, LineChart, PieChart, Box, Binary, Cpu as CpuIcon,
  Lock, Share2, Instagram, Facebook, Twitter, Linkedin, Youtube as YoutubeIcon,
  Sparkles, Megaphone, PenTool, BarChart, LineChart as LineChartIcon,
  PieChart as PieChartIcon, Settings, Globe as GlobeIcon, Download,
  Upload, Copy, Trash2, Edit, Filter, RefreshCw, Eye, EyeOff,
  ChevronUp, ChevronLeft, ChevronRight, Menu, X as XIcon,
  ImageIcon
} from 'lucide-react'

export default function DataAnalysisPage() {
  const [activeTab, setActiveTab] = useState('overview')
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  // 16-Week Data Analysis Curriculum with 30+ projects
  const weeklyCurriculum = [
    {
      week: 1,
      title: 'Introduction to Data Analysis',
      description: 'Understand the fundamentals of data analysis and the data ecosystem.',
      topics: [
        'What is Data Analysis? - Roles, responsibilities, and career paths',
        'The Data Ecosystem - Databases, data warehouses, data lakes',
        'Types of Data - Structured, semi-structured, unstructured',
        'Data Analysis Process - Ask, prepare, process, analyze, share, act',
        'Tools of the Trade - Excel, SQL, Python, R, Tableau, Power BI',
        'Setting Up Your Environment - Installing Python, Anaconda, Jupyter'
      ],
      project: {
        title: 'Project 1: Data Analysis Career Path Research',
        description: 'Research and present different data analysis career paths and required skills',
        features: ['Job market analysis', 'Skill requirements', 'Salary expectations', 'Learning roadmap']
      }
    },
    {
      week: 2,
      title: 'Excel for Data Analysis',
      description: 'Master Excel for data cleaning, analysis, and visualization.',
      topics: [
        'Excel Fundamentals - Formulas, functions, cell references',
        'Data Cleaning - Remove duplicates, text to columns, find and replace',
        'PivotTables - Creating, formatting, filtering, slicing',
        'Advanced Formulas - VLOOKUP, INDEX-MATCH, IF statements',
        'Data Visualization - Charts, sparklines, conditional formatting',
        'What-If Analysis - Goal seek, data tables, scenarios'
      ],
      project: {
        title: 'Project 2: Sales Dashboard in Excel',
        description: 'Create an interactive sales dashboard with PivotTables and charts',
        features: ['Sales by region', 'Product performance', 'Monthly trends', 'KPI tracking']
      }
    },
    {
      week: 3,
      title: 'SQL Fundamentals',
      description: 'Learn to query databases and extract insights using SQL.',
      topics: [
        'Database Basics - Tables, schemas, data types',
        'Basic Queries - SELECT, FROM, WHERE, ORDER BY',
        'Filtering and Sorting - AND, OR, IN, BETWEEN, LIKE',
        'Grouping and Aggregating - GROUP BY, HAVING, COUNT, SUM, AVG',
        'Joins - INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL OUTER JOIN',
        'Subqueries and CTEs - Nested queries, common table expressions'
      ],
      project: {
        title: 'Project 3: E-commerce Database Analysis',
        description: 'Analyze an e-commerce database to answer business questions',
        features: ['Customer analysis', 'Order patterns', 'Product performance', 'Revenue by category']
      }
    },
    {
      week: 4,
      title: 'Advanced SQL',
      description: 'Master complex SQL queries for sophisticated data analysis.',
      topics: [
        'Window Functions - ROW_NUMBER, RANK, LEAD, LAG',
        'Date/Time Functions - Extracting, formatting, date arithmetic',
        'String Functions - Concatenation, parsing, pattern matching',
        'Conditional Logic - CASE statements, COALESCE, NULLIF',
        'Query Optimization - Indexes, execution plans, best practices',
        'Stored Procedures and Views - Creating and using database objects'
      ],
      project: {
        title: 'Project 4: Customer Lifetime Value Analysis',
        description: 'Calculate customer lifetime value using advanced SQL queries',
        features: ['Cohort analysis', 'Retention rates', 'LTV calculation', 'Segmentation']
      }
    },
    {
      week: 5,
      title: 'Python Basics for Data Analysis',
      description: 'Learn Python programming fundamentals for data work.',
      topics: [
        'Python Setup - Jupyter notebooks, VS Code, packages',
        'Python Basics - Variables, data types, operators',
        'Control Flow - If/else, loops, list comprehensions',
        'Functions - Defining, parameters, return values, lambda',
        'Data Structures - Lists, tuples, dictionaries, sets',
        'File Handling - Reading/writing CSV, Excel, JSON files'
      ],
      project: {
        title: 'Project 5: Data Processing Script',
        description: 'Build a Python script to clean and process multiple data files',
        features: ['File reading', 'Data cleaning', 'Error handling', 'Output generation']
      }
    },
    {
      week: 6,
      title: 'NumPy for Numerical Computing',
      description: 'Master NumPy for efficient numerical operations on arrays.',
      topics: [
        'NumPy Arrays - Creation, indexing, slicing, reshaping',
        'Array Operations - Vectorization, broadcasting, universal functions',
        'Mathematical Functions - Statistics, linear algebra, random numbers',
        'Aggregations - Sum, mean, min, max, cumulative operations',
        'Boolean Indexing - Filtering, conditional selection',
        'Performance Optimization - Vectorized operations vs loops'
      ],
      project: {
        title: 'Project 6: Financial Data Analysis',
        description: 'Analyze stock market data using NumPy',
        features: ['Returns calculation', 'Moving averages', 'Volatility analysis', 'Correlation matrix']
      }
    },
    {
      week: 7,
      title: 'Pandas for Data Manipulation',
      description: 'Master Pandas for data cleaning, transformation, and analysis.',
      topics: [
        'Series and DataFrames - Creation, indexing, selection',
        'Data Cleaning - Handling missing values, duplicates, outliers',
        'Data Transformation - Apply, map, replace, filtering',
        'Merging and Joining - Concat, merge, join operations',
        'GroupBy Operations - Split-apply-combine, aggregations',
        'Pivot Tables and Cross-tabulations - Reshaping data'
      ],
      project: {
        title: 'Project 7: Customer Segmentation',
        description: 'Segment customers based on purchasing behavior using Pandas',
        features: ['RFM analysis', 'Cohort analysis', 'Segmentation', 'Visualization']
      }
    },
    {
      week: 8,
      title: 'Data Visualization with Matplotlib',
      description: 'Create compelling visualizations with Matplotlib.',
      topics: [
        'Matplotlib Basics - Figures, axes, subplots',
        'Line Plots and Scatter Plots - Trends and relationships',
        'Bar Charts and Histograms - Distributions and comparisons',
        'Pie Charts and Box Plots - Proportions and outliers',
        'Customizing Plots - Colors, styles, labels, legends',
        'Saving and Exporting - Multiple formats and resolutions'
      ],
      project: {
        title: 'Project 8: Exploratory Data Analysis Dashboard',
        description: 'Create a multi-plot EDA dashboard for a dataset',
        features: ['Distribution plots', 'Correlation matrix', 'Time series', 'Summary statistics']
      }
    },
    {
      week: 9,
      title: 'Data Visualization with Seaborn',
      description: 'Create statistical visualizations with Seaborn.',
      topics: [
        'Seaborn Basics - Themes, color palettes, contexts',
        'Statistical Plots - Distribution plots, regression plots',
        'Categorical Plots - Box plots, violin plots, swarm plots',
        'Matrix Plots - Heatmaps, clustermaps',
        'Facet Grids - Multi-plot grids by categories',
        'Pair Plots - Relationships between multiple variables'
      ],
      project: {
        title: 'Project 9: Advanced Data Visualization',
        description: 'Create a comprehensive visualization report using Seaborn',
        features: ['Multi-variable relationships', 'Statistical insights', 'Publication-ready figures']
      }
    },
    {
      week: 10,
      title: 'Data Storytelling with Tableau',
      description: 'Master Tableau for interactive dashboards and storytelling.',
      topics: [
        'Tableau Interface - Data connection, worksheets, dashboards',
        'Visualizations - Bar charts, line charts, maps, scatter plots',
        'Calculations - Calculated fields, table calculations',
        'Filters and Parameters - Interactive controls',
        'Dashboards - Layout, actions, device designer',
        'Stories - Guided narratives with data'
      ],
      project: {
        title: 'Project 10: Interactive Executive Dashboard',
        description: 'Build an interactive Tableau dashboard for executives',
        features: ['KPIs', 'Drill-down capabilities', 'Filters', 'Mobile-optimized layout']
      }
    },
    {
      week: 11,
      title: 'Power BI for Business Intelligence',
      description: 'Master Power BI for business analytics and reporting.',
      topics: [
        'Power BI Desktop - Data import, transformation, modeling',
        'Power Query - M language, data cleaning, merging',
        'DAX Formulas - Calculated columns, measures, time intelligence',
        'Visualizations - Charts, maps, tables, matrices',
        'Reports and Dashboards - Layout, bookmarks, buttons',
        'Power BI Service - Publishing, sharing, workspaces'
      ],
      project: {
        title: 'Project 11: Sales Performance Dashboard',
        description: 'Create a comprehensive sales dashboard in Power BI',
        features: ['Real-time data refresh', 'Drill-through pages', 'Mobile view', 'Row-level security']
      }
    },
    {
      week: 12,
      title: 'Statistical Analysis Fundamentals',
      description: 'Apply statistical methods to data analysis.',
      topics: [
        'Descriptive Statistics - Mean, median, mode, variance, std dev',
        'Probability Distributions - Normal, binomial, Poisson',
        'Hypothesis Testing - T-tests, chi-square, ANOVA',
        'Confidence Intervals - Estimating population parameters',
        'Correlation and Regression - Relationships between variables',
        'A/B Testing - Design and analysis of experiments'
      ],
      project: {
        title: 'Project 12: A/B Test Analysis',
        description: 'Analyze the results of an A/B test and make recommendations',
        features: ['Test design', 'Statistical significance', 'Effect size', 'Business recommendations']
      }
    },
    {
      week: 13,
      title: 'Big Data Analytics',
      description: 'Introduction to big data tools and technologies.',
      topics: [
        'Big Data Concepts - Volume, velocity, variety, veracity',
        'Hadoop Ecosystem - HDFS, MapReduce, YARN',
        'Spark Fundamentals - RDDs, DataFrames, SQL',
        'Working with Large Datasets - Partitioning, caching',
        'Cloud Data Platforms - AWS, Google Cloud, Azure',
        'Data Pipeline Basics - ETL vs ELT'
      ],
      project: {
        title: 'Project 13: Big Data Processing with Spark',
        description: 'Process a large dataset using PySpark',
        features: ['Distributed computing', 'Data transformations', 'Performance optimization']
      }
    },
    {
      week: 14,
      title: 'Machine Learning for Data Analysts',
      description: 'Apply basic machine learning techniques to data analysis.',
      topics: [
        'ML Fundamentals - Supervised vs unsupervised learning',
        'Scikit-learn Basics - Preprocessing, train-test split',
        'Regression Models - Linear regression, evaluation metrics',
        'Classification Models - Logistic regression, decision trees',
        'Clustering - K-means, hierarchical clustering',
        'Model Evaluation - Accuracy, precision, recall, F1 score'
      ],
      project: {
        title: 'Project 14: Customer Churn Prediction',
        description: 'Build a model to predict customer churn',
        features: ['Feature engineering', 'Model selection', 'Evaluation metrics', 'Business insights']
      }
    },
    {
      week: 15,
      title: 'Data Engineering Fundamentals',
      description: 'Learn data pipeline and ETL processes.',
      topics: [
        'ETL vs ELT - Extract, transform, load concepts',
        'Data Warehousing - Star schema, snowflake schema',
        'Data Pipeline Tools - Apache Airflow, dbt',
        'API Data Collection - REST APIs, authentication, pagination',
        'Web Scraping - BeautifulSoup, Scrapy, Selenium',
        'Data Quality - Validation, testing, monitoring'
      ],
      project: {
        title: 'Project 15: End-to-End Data Pipeline',
        description: 'Build a complete ETL pipeline from data collection to visualization',
        features: ['API data collection', 'Data transformation', 'Database loading', 'Automated reporting']
      }
    },
    {
      week: 16,
      title: 'Capstone Project & Career Preparation',
      description: 'Build a portfolio-worthy project and prepare for job interviews.',
      topics: [
        'Capstone Planning - Problem definition, data sources, methodology',
        'Project Execution - Analysis, visualization, insights',
        'Portfolio Building - Showcasing your work effectively',
        'Resume Writing - Highlighting data skills and projects',
        'Interview Preparation - Technical questions, case studies',
        'Industry Certifications - Google Data Analytics, Microsoft, AWS'
      ],
      project: {
        title: 'Project 16-30: Advanced Data Analysis Projects',
        description: 'Choose and build 15 additional projects from the list below',
        features: ['Real-world datasets', 'End-to-end analysis', 'Portfolio ready', 'Case study format']
      }
    }
  ];

  // 30+ Additional Data Analysis Projects
  const additionalProjects = [
    { icon: BarChart3, title: 'COVID-19 Impact Analysis', description: 'Analyze pandemic impact on global economies', difficulty: 'Intermediate' },
    { icon: LineChart, title: 'Stock Market Analysis', description: 'Historical stock trends and predictions', difficulty: 'Advanced' },
    { icon: PieChart, title: 'Customer Segmentation', description: 'RFM analysis for retail customers', difficulty: 'Intermediate' },
    { icon: TrendingUp, title: 'Sales Forecasting', description: 'Time series forecasting with Prophet', difficulty: 'Advanced' },
    { icon: Users, title: 'Employee Attrition Analysis', description: 'HR analytics and retention strategies', difficulty: 'Intermediate' },
    { icon: Globe, title: 'Global Climate Change', description: 'Temperature trends and climate patterns', difficulty: 'Intermediate' },
    { icon: ShoppingCart, title: 'Market Basket Analysis', description: 'Product association and recommendations', difficulty: 'Advanced' },
    { icon: Heart, title: 'Healthcare Analytics', description: 'Patient outcomes and hospital performance', difficulty: 'Advanced' },
    { icon: Map, title: 'Real Estate Price Analysis', description: 'Property prices by location and features', difficulty: 'Intermediate' },
    { icon: Smartphone, title: 'Mobile App Analytics', description: 'User behavior and engagement metrics', difficulty: 'Intermediate' },
    { icon: Video, title: 'YouTube Trending Analysis', description: 'Factors driving video popularity', difficulty: 'Beginner' },
    { icon: Music, title: 'Spotify Music Analysis', description: 'Audio features and playlist success', difficulty: 'Intermediate' },
    { icon: Gamepad, title: 'Video Game Sales Analysis', description: 'Sales trends by genre and platform', difficulty: 'Beginner' },
    { icon: Plane, title: 'Flight Delay Analysis', description: 'Patterns and causes of flight delays', difficulty: 'Intermediate' },
    { icon: Car, title: 'Uber Pickups Analysis', description: 'Ride patterns and demand forecasting', difficulty: 'Advanced' },
    { icon: Building2, title: 'Financial Fraud Detection', description: 'Identify suspicious transactions', difficulty: 'Advanced' },
    { icon: Wallet, title: 'Credit Card Spending Analysis', description: 'Customer spending patterns', difficulty: 'Intermediate' },
    { icon: Award, title: 'Olympics Medal Analysis', description: 'Historical performance by country', difficulty: 'Beginner' },
    { icon: BookOpen, title: 'Goodreads Books Analysis', description: 'Book ratings and review patterns', difficulty: 'Beginner' },
    { icon: Coffee, title: 'Starbucks Locations Analysis', description: 'Store distribution and demographics', difficulty: 'Intermediate' },
    { icon: Bike, title: 'Citibike Usage Analysis', description: 'Bike-sharing patterns and trends', difficulty: 'Intermediate' },
    { icon: Dog, title: 'Animal Shelter Outcomes', description: 'Adoption patterns and factors', difficulty: 'Beginner' },
    { icon: Leaf, title: 'Air Quality Analysis', description: 'Pollution trends by location', difficulty: 'Intermediate' },
    { icon: Sun, title: 'Solar Energy Production', description: 'Energy generation by weather factors', difficulty: 'Intermediate' },
    { icon: Moon, title: 'Crime Pattern Analysis', description: 'Crime trends and hot spots', difficulty: 'Advanced' },
    { icon: Activity, title: 'Sports Performance Analytics', description: 'Player and team performance metrics', difficulty: 'Intermediate' },
    { icon: Database, title: 'GDP and Economic Indicators', description: 'Country economic data analysis', difficulty: 'Intermediate' },
    { icon: Cloud, title: 'Weather Pattern Analysis', description: 'Historical weather data trends', difficulty: 'Beginner' },
    { icon: Trophy, title: 'Esports Tournament Analysis', description: 'Competitive gaming statistics', difficulty: 'Intermediate' },
    { icon: Gift, title: 'Retail Promotions Analysis', description: 'Campaign effectiveness measurement', difficulty: 'Advanced' }
  ];

  const faqs = [
    {
      question: "What is Data Analysis?",
      answer: "Data analysis is the process of inspecting, cleaning, transforming, and modeling data to discover useful information, draw conclusions, and support decision-making. Data analysts collect data from various sources, process it, and present findings in clear visual formats to help organizations make better business decisions."
    },
    {
      question: "Why should I learn Data Analysis?",
      answer: "Learning data analysis offers numerous benefits: 1) High Demand - Every industry needs data analysts. 2) Excellent Salary - Data analysts earn competitive salaries. 3) Versatile Skills - Apply to any industry or role. 4) Data-Driven Decision Making - Help organizations make better choices. 5) Career Growth - Path to data scientist, data engineer. 6) Remote Work - Many data roles are location-independent. 7) Problem Solving - Enjoy solving complex business problems. 8) Continuous Learning - Always new tools and techniques."
    },
    {
      question: "What can I do with Data Analysis skills?",
      answer: "With data analysis skills, you can: 1) Analyze business performance and identify opportunities. 2) Create dashboards and reports for stakeholders. 3) Identify trends and patterns in customer behavior. 4) Optimize marketing campaigns and pricing strategies. 5) Forecast sales and demand. 6) Detect fraud and anomalies. 7) Improve operational efficiency. 8) Support data-driven decision making. You can work as a Data Analyst, Business Intelligence Analyst, Marketing Analyst, Financial Analyst, or Operations Analyst."
    },
    {
      question: "What is the best roadmap to learn Data Analysis?",
      answer: "Complete data analysis roadmap: 1) Fundamentals: statistics and Excel. 2) SQL for data extraction. 3) Python programming basics. 4) NumPy and Pandas for data manipulation. 5) Matplotlib and Seaborn for visualization. 6) Tableau and Power BI for dashboards. 7) Statistical analysis and hypothesis testing. 8) Machine Learning basics. 9) Big data tools (Spark). 10) Data engineering concepts. 11) Build projects at every stage. 12) Create a portfolio. This 16-week course covers this roadmap with 30+ hands-on projects."
    },
    {
      question: "Do I need any prior experience?",
      answer: "No prior data analysis experience is required! This course starts with the fundamentals and gradually builds up to advanced concepts. Basic computer literacy and familiarity with spreadsheets are helpful but not required. We'll guide you through everything step by step."
    },
    {
      question: "What is the time commitment for this 16-week course?",
      answer: "We recommend 12-15 hours per week for this 16-week course. This includes: 4-5 hours of video lessons, 3-4 hours of hands-on exercises, 3-4 hours of project work, and 2 hours of review and practice. With 30+ projects, you'll build a comprehensive data analysis portfolio."
    },
    {
      question: "What tools and technologies will I learn?",
      answer: "You'll master: Excel (advanced), SQL (PostgreSQL, MySQL), Python (Pandas, NumPy), Data Visualization (Matplotlib, Seaborn), Business Intelligence (Tableau, Power BI), Statistical Analysis, Big Data (Spark basics), and more. You'll be proficient in the entire data analysis workflow."
    },
    {
      question: "What kind of projects will I build?",
      answer: "You'll build 30+ projects including: Sales Dashboard in Excel, E-commerce Database Analysis, Customer Lifetime Value Analysis, Financial Data Analysis, Customer Segmentation, EDA Dashboard, Advanced Visualizations, Interactive Tableau Dashboard, Power BI Sales Dashboard, A/B Test Analysis, Big Data Processing with Spark, Customer Churn Prediction, End-to-End Data Pipeline, and many more real-world projects."
    }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-br from-gray-900 to-gray-950 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium px-4 py-2 rounded-full mb-6">
              <BarChart3 className="w-4 h-4" />
              Complete 16-Week Data Analysis Bootcamp
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Become a Professional{' '}
              <span className="bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
                Data Analyst
              </span>
            </h1>
            
            <p className="text-lg text-gray-300 mb-8 max-w-2xl leading-relaxed">
              Master data analysis from basics to advanced with 30+ hands-on projects. 
              Learn Excel, SQL, Python, Pandas, Tableau, Power BI, and more. 
              No prior experience required.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-white text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-2">
                <GraduationCap className="w-5 h-5" />
                Enroll Now
              </button>
              <button className="px-6 py-3 border border-white/30 text-white font-medium rounded-lg hover:bg-white/10 transition-colors flex items-center gap-2">
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
                <div className="text-3xl font-bold">8+</div>
                <div className="text-sm text-gray-400">Tools</div>
              </div>
              <div>
                <div className="text-3xl font-bold">100+</div>
                <div className="text-sm text-gray-400">Hours</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Data Analysis Section */}
      <section className="py-16 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                What is <span className="text-blue-600 dark:text-blue-400">Data Analysis</span>?
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                Data analysis is the process of inspecting, cleaning, transforming, and modeling data to discover useful information, draw conclusions, and support decision-making. It combines domain knowledge, programming skills, and statistical techniques to extract insights from data.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                The data analysis process typically involves:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="p-1 bg-blue-100 dark:bg-blue-900/30 rounded mt-1">
                    <Database className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900 dark:text-white">Data Collection:</span>
                    <span className="text-gray-600 dark:text-gray-400"> Gathering data from various sources (databases, APIs, files).</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1 bg-blue-100 dark:bg-blue-900/30 rounded mt-1">
                    <Filter className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900 dark:text-white">Data Cleaning:</span>
                    <span className="text-gray-600 dark:text-gray-400"> Handling missing values, duplicates, and inconsistencies.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1 bg-blue-100 dark:bg-blue-900/30 rounded mt-1">
                    <BarChart3 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900 dark:text-white">Data Analysis:</span>
                    <span className="text-gray-600 dark:text-gray-400"> Applying statistical methods to find patterns and insights.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1 bg-blue-100 dark:bg-blue-900/30 rounded mt-1">
                    <LineChart className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900 dark:text-white">Data Visualization:</span>
                    <span className="text-gray-600 dark:text-gray-400"> Creating charts and dashboards to communicate findings.</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { number: '2.5M', label: 'Data jobs by 2025' },
                { number: '$75k', label: 'Average starting salary' },
                { number: '30%', label: 'Job growth rate' },
                { number: '100%', label: 'Remote work possible' }
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

      {/* Why Learn Data Analysis */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
              Why Learn <span className="text-blue-600 dark:text-blue-400">Data Analysis</span>?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              10 compelling reasons to start your data analysis journey today
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: TrendingUp, title: 'High Demand', description: 'Every industry needs data analysts to make sense of their data.' },
              { icon: DollarSign, title: 'Excellent Salary', description: 'Data analysts earn competitive salaries with great growth potential.' },
              { icon: Brain, title: 'Problem Solving', description: 'Enjoy solving complex business problems with data.' },
              { icon: Rocket, title: 'Career Growth', description: 'Path to data scientist, data engineer, or analytics manager.' },
              { icon: Globe, title: 'Work Anywhere', description: 'Data roles are often location-independent with remote options.' },
              { icon: Users, title: 'Cross-Industry', description: 'Work in tech, healthcare, finance, retail, sports, and more.' },
              { icon: Award, title: 'Future-Proof', description: 'Data skills are increasingly valuable in every field.' },
              { icon: Zap, title: 'Impactful Work', description: 'Help organizations make better data-driven decisions.' },
              { icon: Heart, title: 'Continuous Learning', description: 'Always new tools, techniques, and challenges to master.' }
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

      {/* What You Can Build with Data Analysis */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
              What You Can <span className="text-blue-600 dark:text-blue-400">Build</span> with Data Analysis
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Data analysis skills let you create powerful insights and tools
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: BarChart3, label: 'Dashboards' },
              { icon: LineChart, label: 'Forecasts' },
              { icon: PieChart, label: 'Reports' },
              { icon: TrendingUp, label: 'Trends Analysis' },
              { icon: Users, label: 'Customer Segments' },
              { icon: ShoppingCart, label: 'Market Analysis' },
              { icon: Database, label: 'Data Pipelines' },
              { icon: Brain, label: 'Predictive Models' },
              { icon: Map, label: 'Geospatial Analysis' },
              { icon: Activity, label: 'Performance Metrics' },
              { icon: Wallet, label: 'Financial Models' },
              { icon: Heart, label: 'Healthcare Analytics' },
              { icon: Award, label: 'KPI Tracking' },
              { icon: Target, label: 'A/B Tests' },
              { icon: Clock, label: 'Time Series' },
              { icon: Shield, label: 'Fraud Detection' }
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

      {/* The Complete Data Analysis Roadmap */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
              The Complete <span className="text-blue-600 dark:text-blue-400">Data Analysis Roadmap</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Follow this proven path to become a professional data analyst
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-blue-300 hidden md:block" />

            <div className="space-y-8">
              {[
                { phase: 'Phase 1', title: 'Foundations', weeks: 'Weeks 1-4', color: 'blue', topics: ['Excel', 'SQL Basics', 'Statistics', 'Data Fundamentals'] },
                { phase: 'Phase 2', title: 'Programming & Manipulation', weeks: 'Weeks 5-8', color: 'blue', topics: ['Python', 'NumPy', 'Pandas', 'Data Cleaning'] },
                { phase: 'Phase 3', title: 'Visualization & BI', weeks: 'Weeks 9-12', color: 'blue', topics: ['Matplotlib', 'Seaborn', 'Tableau', 'Power BI'] },
                { phase: 'Phase 4', title: 'Advanced & Career', weeks: 'Weeks 13-16', color: 'blue', topics: ['Statistics', 'ML Basics', 'Big Data', 'Capstone Projects'] }
              ].map((phase, idx) => (
                <div key={idx} className="relative md:ml-16">
                  <div className={`absolute left-0 top-2 w-8 h-8 rounded-full bg-${phase.color}-600 hidden md:flex items-center justify-center text-white font-bold`}>
                    {idx + 1}
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className={`px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium rounded-full`}>
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

      {/* 16-Week Data Analysis Curriculum */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
              16-Week <span className="text-blue-600 dark:text-blue-400">Data Analysis Curriculum</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
              Week-by-week breakdown of your data analysis journey with 30+ projects
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

      {/* 30+ Data Analysis Projects Showcase */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
              30+ <span className="text-blue-600 dark:text-blue-400">Real-World Projects</span>
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

      {/* Tools You'll Master */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
              Tools You'll <span className="text-blue-600 dark:text-blue-400">Master</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Industry-standard tools for professional data analysis
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { icon: FileText, name: 'Excel' },
              { icon: Database, name: 'SQL' },
              { icon: Code, name: 'Python' },
              { icon: BarChart3, name: 'Pandas' },
              { icon: LineChart, name: 'NumPy' },
              { icon: PieChart, name: 'Matplotlib' },
              { icon: Activity, name: 'Seaborn' },
              { icon: TrendingUp, name: 'Tableau' },
              { icon: Zap, name: 'Power BI' },
              { icon: Brain, name: 'Scikit-learn' },
              { icon: Cloud, name: 'Spark' },
              { icon: Database, name: 'PostgreSQL' },
              { icon: Database, name: 'MySQL' },
              { icon: Code, name: 'R' },
              { icon: Filter, name: 'Alteryx' },
              { icon: GitBranch, name: 'Git' }
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

      {/* FAQ Section */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
              Frequently Asked <span className="text-blue-600 dark:text-blue-400">Questions</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Everything you need to know about our Data Analysis course
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
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-400 text-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h2 className="text-3xl font-bold mb-2">Ready to Start Your Data Analysis Journey?</h2>
              <p className="text-blue-100">Join thousands of students who have launched their data careers with Yelocode.</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-2">
                <GraduationCap className="w-5 h-5" />
                Enroll Now
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