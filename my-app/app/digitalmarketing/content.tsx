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
  Lock, Share2, Instagram, Facebook, Twitter, Linkedin, Youtube as YoutubeIcon,
  Sparkles, Megaphone, PenTool, BarChart, LineChart as LineChartIcon,
  PieChart as PieChartIcon, Settings, Globe as GlobeIcon, Download,
  Upload, Copy, Trash2, Edit, Filter, RefreshCw, Eye, EyeOff,
  ChevronUp, ChevronLeft, ChevronRight, Menu, X as XIcon,
  ImageIcon
} from 'lucide-react'
import Link from 'next/link'

export default function DigitalMarketingPage() {
  const [activeTab, setActiveTab] = useState('overview')
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  // 12-Week Digital Marketing with AI Automation Curriculum
  const weeklyCurriculum = [
    {
      week: 1,
      title: 'Digital Marketing Fundamentals & AI Overview',
      description: 'Understand the digital marketing landscape and how AI is transforming the industry.',
      topics: [
        'Digital Marketing Ecosystem - channels, strategies, and metrics',
        'Customer Journey - awareness, consideration, conversion, loyalty',
        'Marketing Funnels - TOFU, MOFU, BOFU strategies',
        'Introduction to AI in Marketing - automation, personalization, predictive analytics',
        'AI Tools Overview - ChatGPT, Jasper, Midjourney, and more',
        'Setting Up Your Marketing Tech Stack - CRM, analytics, automation tools'
      ],
      project: {
        title: 'Project 1: Marketing Strategy Document',
        description: 'Create a comprehensive digital marketing strategy for a fictional brand',
        features: ['Target audience analysis', 'Channel selection', 'KPI definition', 'Budget allocation']
      }
    },
    {
      week: 2,
      title: 'Content Marketing with AI',
      description: 'Leverage AI to create high-quality content at scale.',
      topics: [
        'Content Strategy - planning, creation, distribution',
        'AI Writing Tools - ChatGPT, Copy.ai, Jasper for blog posts',
        'Content Optimization - SurferSEO, Frase for SEO-optimized content',
        'Visual Content Creation - Canva AI, Midjourney, DALL-E',
        'Video Content - AI video generation and editing tools',
        'Content Calendar Management - planning and scheduling'
      ],
      project: {
        title: 'Project 2: AI-Powered Blog Post',
        description: 'Create a fully optimized blog post using AI tools',
        features: ['Topic research', 'AI-generated content', 'SEO optimization', 'Featured images']
      }
    },
    {
      week: 3,
      title: 'SEO & AI-Powered Search Optimization',
      description: 'Master search engine optimization with AI tools and techniques.',
      topics: [
        'SEO Fundamentals - on-page, off-page, technical SEO',
        'Keyword Research - Ahrefs, SEMrush, Google Keyword Planner',
        'AI SEO Tools - SurferSEO, Frase, MarketMuse',
        'Content Optimization for Search - topic clusters, semantic search',
        'Technical SEO - site speed, mobile optimization, structured data',
        'Local SEO - Google My Business optimization'
      ],
      project: {
        title: 'Project 3: SEO Audit & Optimization',
        description: 'Perform a complete SEO audit and optimization plan for a website',
        features: ['Keyword analysis', 'On-page optimization', 'Technical audit', 'Backlink strategy']
      }
    },
    {
      week: 4,
      title: 'Social Media Marketing & AI Automation',
      description: 'Build and automate social media presence across platforms.',
      topics: [
        'Social Media Strategy - platform selection, content mix, posting schedule',
        'Content Creation for Social - images, videos, stories, reels',
        'AI Social Media Tools - Buffer, Hootsuite with AI features',
        'Social Listening - Brandwatch, Sprout Social',
        'Influencer Marketing - identifying and collaborating with influencers',
        'Social Media Analytics - measuring engagement and ROI'
      ],
      project: {
        title: 'Project 4: Social Media Campaign',
        description: 'Plan and execute a 30-day social media campaign with AI assistance',
        features: ['Content calendar', 'AI-generated posts', 'Engagement tracking', 'Performance report']
      }
    },
    {
      week: 5,
      title: 'Email Marketing Automation',
      description: 'Create personalized email campaigns using AI and automation.',
      topics: [
        'Email Marketing Fundamentals - list building, segmentation, personalization',
        'Email Platforms - Mailchimp, Klaviyo, ConvertKit',
        'AI Email Tools - subject line generators, content optimization',
        'Automation Workflows - welcome series, abandoned cart, re-engagement',
        'A/B Testing - subject lines, content, timing',
        'Email Analytics - open rates, click rates, conversions'
      ],
      project: {
        title: 'Project 5: Automated Email Funnel',
        description: 'Build a complete automated email marketing funnel',
        features: ['Welcome sequence', 'Nurture campaigns', 'Abandoned cart recovery', 'Performance tracking']
      }
    },
    {
      week: 6,
      title: 'Paid Advertising & AI Optimization',
      description: 'Master paid advertising with AI-powered optimization.',
      topics: [
        'PPC Fundamentals - Google Ads, Facebook Ads, LinkedIn Ads',
        'Audience Targeting - custom audiences, lookalikes, retargeting',
        'AI Ad Tools - Adzooma, Pattern89 for ad optimization',
        'Ad Creative - AI-generated ad copy and images',
        'Budget Management - bidding strategies, ROI optimization',
        'Campaign Analytics - tracking and reporting'
      ],
      project: {
        title: 'Project 6: Multi-Platform Ad Campaign',
        description: 'Create and optimize a paid advertising campaign across platforms',
        features: ['Audience research', 'Ad creative', 'Budget allocation', 'Performance analysis']
      }
    },
    {
      week: 7,
      title: 'Analytics, Data & AI Insights',
      description: 'Leverage data and AI to derive actionable marketing insights.',
      topics: [
        'Google Analytics 4 - setup, tracking, reports',
        'Data Visualization - creating dashboards with Looker Studio',
        'AI Analytics Tools - Tableau with AI, Power BI',
        'Customer Insights - segmentation, behavior analysis',
        'Predictive Analytics - forecasting trends and outcomes',
        'ROI Measurement - attributing revenue to marketing efforts'
      ],
      project: {
        title: 'Project 7: Marketing Analytics Dashboard',
        description: 'Build an interactive marketing dashboard with key metrics',
        features: ['Data integration', 'Visualizations', 'Automated reports', 'Insights generation']
      }
    },
    {
      week: 8,
      title: 'AI-Powered Chatbots & Customer Service',
      description: 'Implement AI chatbots for customer engagement and support.',
      topics: [
        'Chatbot Fundamentals - types, use cases, benefits',
        'Chatbot Platforms - ManyChat, Chatfuel, Dialogflow',
        'AI Chatbots - ChatGPT API integration, custom bots',
        'Conversation Design - scripting, flows, personality',
        'Integration with CRM - capturing leads, qualifying prospects',
        'Analytics - measuring chatbot performance'
      ],
      project: {
        title: 'Project 8: AI Customer Service Bot',
        description: 'Build and deploy an AI-powered customer service chatbot',
        features: ['Conversation flows', 'FAQ automation', 'Lead capture', 'Performance tracking']
      }
    },
    {
      week: 9,
      title: 'Video Marketing & AI Creation',
      description: 'Create compelling video content with AI assistance.',
      topics: [
        'Video Marketing Strategy - YouTube, TikTok, Instagram Reels',
        'AI Video Tools - Synthesia, Pictory, RunwayML',
        'Video Editing - AI-powered editing tools',
        'Live Streaming - strategies and tools',
        'Video SEO - optimizing for search',
        'Analytics - measuring video performance'
      ],
      project: {
        title: 'Project 9: AI-Generated Video Campaign',
        description: 'Create a complete video marketing campaign using AI tools',
        features: ['Script generation', 'AI avatar video', 'Editing', 'Distribution strategy']
      }
    },
    {
      week: 10,
      title: 'Influencer Marketing & AI Identification',
      description: 'Identify and collaborate with influencers using AI.',
      topics: [
        'Influencer Marketing Strategy - micro vs macro influencers',
        'AI Influencer Tools - Upfluence, AspireIQ',
        'Influencer Identification - finding the right partners',
        'Campaign Management - contracts, deliverables, tracking',
        'ROI Measurement - calculating influencer campaign success',
        'Legal Considerations - disclosure, contracts'
      ],
      project: {
        title: 'Project 10: Influencer Campaign',
        description: 'Plan and execute an influencer marketing campaign with AI assistance',
        features: ['Influencer identification', 'Campaign brief', 'Content guidelines', 'ROI analysis']
      }
    },
    {
      week: 11,
      title: 'Marketing Automation & CRM Integration',
      description: 'Build complete marketing automation workflows.',
      topics: [
        'Marketing Automation Platforms - HubSpot, Marketo, ActiveCampaign',
        'CRM Integration - syncing marketing and sales data',
        'Lead Scoring - AI-powered lead qualification',
        'Personalization - dynamic content, recommendations',
        'Multi-Channel Automation - email, SMS, social, ads',
        'Attribution Modeling - understanding customer touchpoints'
      ],
      project: {
        title: 'Project 11: Complete Marketing Automation System',
        description: 'Build an end-to-end marketing automation workflow',
        features: ['Lead capture', 'Nurture sequences', 'Lead scoring', 'Sales handoff']
      }
    },
    {
      week: 12,
      title: 'Capstone Project & Career Preparation',
      description: 'Build a comprehensive marketing portfolio and prepare for jobs.',
      topics: [
        'Integrated Marketing Campaign - combining all channels',
        'AI Strategy - leveraging AI across the entire funnel',
        'Budget Planning - allocating resources effectively',
        'ROI Projection - forecasting campaign results',
        'Portfolio Building - showcasing your work',
        'Interview Preparation - marketing questions, case studies'
      ],
      project: {
        title: 'Project 12-25: Advanced Marketing Projects',
        description: 'Choose and build 13 additional projects from the list below',
        features: ['Real-world campaigns', 'AI implementation', 'Portfolio ready', 'Case study format']
      }
    }
  ];

  // 25+ Additional Digital Marketing Projects
  const additionalProjects = [
    { icon: Globe, title: 'SEO Strategy for E-commerce', description: 'Complete SEO plan for an online store', difficulty: 'Advanced' },
    { icon: Facebook, title: 'Facebook Ad Campaign', description: 'Optimized Facebook advertising campaign', difficulty: 'Intermediate' },
    { icon: Instagram, title: 'Instagram Growth Strategy', description: 'Organic growth and engagement plan', difficulty: 'Intermediate' },
    { icon: Twitter, title: 'Twitter/X Content Strategy', description: 'Build authority and engagement', difficulty: 'Intermediate' },
    { icon: Linkedin, title: 'LinkedIn B2B Marketing', description: 'Lead generation for B2B companies', difficulty: 'Advanced' },
    { icon: YoutubeIcon, title: 'YouTube Channel Launch', description: 'From zero to first 1000 subscribers', difficulty: 'Intermediate' },
    { icon: PenTool, title: 'Content Repurposing System', description: 'Turn one piece into 20+ assets', difficulty: 'Beginner' },
    { icon: Megaphone, title: 'Product Launch Campaign', description: 'Multi-channel product launch', difficulty: 'Advanced' },
    { icon: BarChart, title: 'Competitor Analysis', description: 'AI-powered competitive research', difficulty: 'Intermediate' },
    { icon: LineChartIcon, title: 'Customer Journey Mapping', description: 'Map and optimize customer touchpoints', difficulty: 'Intermediate' },
    { icon: PieChartIcon, title: 'Marketing Budget Optimizer', description: 'AI-driven budget allocation', difficulty: 'Advanced' },
    { icon: Settings, title: 'Marketing Tech Stack Audit', description: 'Evaluate and optimize tools', difficulty: 'Intermediate' },
    { icon: Share2, title: 'Viral Marketing Campaign', description: 'Design content with viral potential', difficulty: 'Advanced' },
    { icon: Users, title: 'Referral Program Design', description: 'Create a customer referral system', difficulty: 'Intermediate' },
    { icon: Target, title: 'Lead Generation Funnel', description: 'Complete lead gen system', difficulty: 'Advanced' },
    { icon: Zap, title: 'Conversion Rate Optimization', description: 'CRO strategy and testing', difficulty: 'Advanced' },
    { icon: Rocket, title: 'Growth Hacking Campaign', description: 'Experimental marketing tactics', difficulty: 'Advanced' },
    { icon: Brain, title: 'AI Content Calendar', description: 'AI-generated content planning', difficulty: 'Intermediate' },
    { icon: Bot, title: 'Social Media Bot', description: 'Automated social engagement', difficulty: 'Intermediate' },
    { icon: Sparkles, title: 'Personalization Engine', description: 'AI-powered content personalization', difficulty: 'Advanced' },
    { icon: Download, title: 'Lead Magnet Creation', description: 'High-converting lead magnets', difficulty: 'Beginner' },
    { icon: Upload, title: 'Webinar Marketing', description: 'From promotion to conversion', difficulty: 'Intermediate' },
    { icon: Copy, title: 'Ad Copy Generator', description: 'AI-generated ad variations', difficulty: 'Beginner' },
    { icon: Filter, title: 'Customer Segmentation', description: 'AI-powered audience segmentation', difficulty: 'Intermediate' },
    { icon: RefreshCw, title: 'Retargeting Campaign', description: 'Multi-platform retargeting strategy', difficulty: 'Intermediate' }
  ];

  const faqs = [
    {
      question: "What is Digital Marketing with AI Automation?",
      answer: "Digital Marketing with AI Automation combines traditional digital marketing strategies with artificial intelligence tools and automation. This approach leverages AI for content creation, audience targeting, campaign optimization, data analysis, and personalization. AI can automate repetitive tasks, generate insights from data, predict customer behavior, and optimize campaigns in real-time, making marketing more efficient and effective."
    },
    {
      question: "Why should I learn Digital Marketing with AI?",
      answer: "Learning Digital Marketing with AI offers numerous benefits: 1) High Demand - Companies are seeking marketers who understand AI tools. 2) Efficiency - AI automates repetitive tasks, letting you focus on strategy. 3) Better Results - AI optimization improves campaign performance. 4) Data-Driven Decisions - AI provides deeper insights from marketing data. 5) Personalization at Scale - Deliver personalized experiences to thousands of customers. 6) Future-Proof Skills - AI is transforming marketing. 7) Higher Earning Potential - AI skills command premium salaries. 8) Competitive Advantage - Stay ahead of marketers who don't use AI."
    },
    {
      question: "What can I do with Digital Marketing and AI skills?",
      answer: "With Digital Marketing and AI skills, you can: 1) Create content at scale using AI writing tools. 2) Optimize SEO with AI-powered keyword research. 3) Run automated social media campaigns. 4) Build personalized email funnels. 5) Optimize ad spend with AI bidding strategies. 6) Analyze customer data for insights. 7) Implement chatbots for customer service. 8) Predict customer behavior and trends. 9) Personalize website experiences for each visitor. 10) Generate comprehensive marketing reports automatically. You can work as a Digital Marketing Manager, SEO Specialist, Social Media Strategist, Marketing Analyst, or Marketing Automation Specialist."
    },
    {
      question: "What is the best roadmap to learn Digital Marketing with AI?",
      answer: "Complete roadmap: 1) Fundamentals: digital marketing channels and metrics. 2) Content Marketing with AI tools. 3) SEO with AI optimization. 4) Social Media Marketing automation. 5) Email Marketing automation. 6) Paid Advertising with AI optimization. 7) Analytics and data insights. 8) Chatbots and customer service automation. 9) Video Marketing with AI creation. 10) Influencer Marketing with AI identification. 11) Marketing Automation platforms. 12) Integrated campaigns and career prep. This 12-week course covers this roadmap with 25+ hands-on projects."
    },
    {
      question: "Do I need any prior experience?",
      answer: "No prior marketing experience is required! This course starts with digital marketing fundamentals and gradually introduces AI tools and automation. Basic computer skills and familiarity with social media platforms are helpful but not required. We'll guide you through everything step by step, from setting up accounts to running complex AI-powered campaigns."
    },
    {
      question: "What is the time commitment for this 12-week course?",
      answer: "We recommend 12-15 hours per week for this 12-week course. This includes: 4-5 hours of video lessons, 3-4 hours of hands-on exercises with AI tools, 3-4 hours of project work, and 2 hours of review and practice. With 25+ projects, you'll build a comprehensive marketing portfolio."
    },
    {
      question: "What AI tools will I learn?",
      answer: "You'll master: ChatGPT/Copy.ai/Jasper for content, Midjourney/DALL-E for images, SurferSEO/Frase for SEO, Buffer/Hootsuite for social media, Mailchimp/Klaviyo for email, Adzooma/Pattern89 for ads, Google Analytics 4/Looker Studio for analytics, ManyChat/Chatfuel for chatbots, Synthesia/Pictory for video, HubSpot/Marketo for automation, and many more. You'll learn to select and use the best AI tools for each marketing task."
    },
    {
      question: "What kind of projects will I build?",
      answer: "You'll build 25+ projects including: Marketing Strategy Document, AI-Powered Blog Post, SEO Audit, Social Media Campaign, Automated Email Funnel, Multi-Platform Ad Campaign, Analytics Dashboard, AI Customer Service Bot, AI-Generated Video Campaign, Influencer Campaign, Complete Marketing Automation System, SEO Strategy for E-commerce, Facebook Ad Campaign, Instagram Growth Strategy, LinkedIn B2B Strategy, YouTube Channel Launch, Content Repurposing System, Product Launch Campaign, Competitor Analysis, Customer Journey Map, Lead Generation Funnel, and more. Each project adds to your professional portfolio."
    }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      
      {/* HERO SECTION - Full Width Image */}
      <section className="relative h-screen flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=1080&fit=crop"
            alt="Digital Marketing"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/90 to-yellow-900/80" />
        </div>
        
        {/* Gradient orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse animation-delay-2000" />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 text-white">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4" />
              Complete 12-Week Digital Marketing with AI Automation Bootcamp
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Become a{' '}
              <span className="bg-gradient-to-r from-yellow-400 to-gray-400 bg-clip-text text-transparent">
                AI-Powered Digital Marketer
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
              Master digital marketing with AI automation tools. Learn content creation, SEO, social media, email, 
              paid ads, and analytics - all powered by AI. No prior experience required.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link href="/Careers">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-yellow-600 to-yellow-500 text-white font-semibold rounded-xl overflow-hidden transition-all hover:shadow-xl hover:shadow-yellow-500/25 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5" />
                  Enroll Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              {/* <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-xl hover:bg-white/20 transition-all flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Download Syllabus
              </button> */}
            </div>

            <div className="flex flex-wrap gap-8 mt-12">
              <div>
                <div className="text-3xl font-bold">12</div>
                <div className="text-sm text-gray-400">Weeks</div>
              </div>
              <div>
                <div className="text-3xl font-bold">25+</div>
                <div className="text-sm text-gray-400">Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold">20+</div>
                <div className="text-sm text-gray-400">AI Tools</div>
              </div>
              <div>
                <div className="text-3xl font-bold">8+</div>
                <div className="text-sm text-gray-400">Channels</div>
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

      {/* What is Digital Marketing with AI Section */}
      <section className="py-16 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                What is <span className="text-yellow-600 dark:text-yellow-400">Digital Marketing with AI</span>?
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                Digital Marketing with AI Automation combines traditional marketing strategies with artificial intelligence tools to create more effective, efficient, and personalized campaigns. AI transforms marketing by automating repetitive tasks, generating insights from data, predicting customer behavior, and optimizing campaigns in real-time.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                AI-powered marketing enables:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="p-1 bg-yellow-100 dark:bg-yellow-900/30 rounded mt-1">
                    <PenTool className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900 dark:text-white">Content Creation:</span>
                    <span className="text-gray-600 dark:text-gray-400"> AI generates blog posts, social media content, ad copy, and images at scale.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1 bg-purple-100 dark:bg-purple-900/30 rounded mt-1">
                    <Target className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900 dark:text-white">Audience Targeting:</span>
                    <span className="text-gray-600 dark:text-gray-400"> AI analyzes customer data to find the perfect audience for your campaigns.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1 bg-indigo-100 dark:bg-indigo-900/30 rounded mt-1">
                    <BarChart className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900 dark:text-white">Predictive Analytics:</span>
                    <span className="text-gray-600 dark:text-gray-400"> AI forecasts trends, customer behavior, and campaign performance.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1 bg-yellow-100 dark:bg-yellow-900/30 rounded mt-1">
                    <Bot className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900 dark:text-white">Automation:</span>
                    <span className="text-gray-600 dark:text-gray-400"> AI handles repetitive tasks like scheduling, reporting, and customer service.</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { number: '80%', label: 'Marketers use AI' },
                { number: '3x', label: 'ROI improvement' },
                { number: '40%', label: 'Time saved' },
                { number: '$150k', label: 'Avg. salary' }
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

      {/* Why Learn Digital Marketing with AI */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
              Why Learn <span className="text-yellow-600 dark:text-yellow-400">Digital Marketing with AI</span>?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              10 compelling reasons to master AI-powered marketing
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: TrendingUp, title: 'High Demand', description: 'Companies are actively seeking marketers who understand AI tools and automation.' },
              { icon: DollarSign, title: 'Excellent Salary', description: 'AI-skilled marketers earn 30-50% more than traditional marketers.' },
              { icon: Zap, title: 'Efficiency', description: 'AI automates repetitive tasks, letting you focus on strategy and creativity.' },
              { icon: Target, title: 'Better Results', description: 'AI optimization improves campaign performance and ROI.' },
              { icon: Brain, title: 'Data-Driven', description: 'AI provides deeper insights from your marketing data.' },
              { icon: Users, title: 'Personalization at Scale', description: 'Deliver personalized experiences to thousands of customers.' },
              { icon: Rocket, title: 'Future-Proof', description: 'AI is transforming marketing - stay ahead of the curve.' },
              { icon: Award, title: 'Competitive Advantage', description: 'Stand out from marketers who don\'t use AI.' },
              { icon: Briefcase, title: 'Career Opportunities', description: 'Work as a marketing manager, strategist, analyst, or automation specialist.' }
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

      {/* What You Can Do with Digital Marketing & AI */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
              What You Can <span className="text-yellow-600 dark:text-yellow-400">Do</span> with Digital Marketing & AI
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              AI transforms every aspect of digital marketing
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: PenTool, label: 'Content Creation' },
              { icon: GlobeIcon, label: 'SEO Optimization' },
              { icon: Share2, label: 'Social Media' },
              { icon: Mail, label: 'Email Marketing' },
              { icon: Megaphone, label: 'Paid Advertising' },
              { icon: BarChart, label: 'Analytics' },
              { icon: Bot, label: 'Chatbots' },
              { icon: Video, label: 'Video Marketing' },
              { icon: Users, label: 'Influencer Marketing' },
              { icon: Settings, label: 'Marketing Automation' },
              { icon: Target, label: 'Lead Generation' },
              { icon: LineChartIcon, label: 'Predictive Analytics' },
              { icon: Sparkles, label: 'Personalization' },
              { icon: Camera, label: 'Visual Content' },
              { icon: TrendingUp, label: 'Growth Hacking' },
              { icon: Globe, label: 'Global Campaigns' }
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
              Follow this proven path to become an AI-powered digital marketer
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-500 to-cyan-500 hidden md:block" />

            <div className="space-y-8">
              {[
                { phase: 'Phase 1', title: 'Marketing Fundamentals', weeks: 'Weeks 1-3', color: 'yellow', topics: ['Digital Marketing Basics', 'Content Marketing', 'SEO Fundamentals'] },
                { phase: 'Phase 2', title: 'Channel Marketing', weeks: 'Weeks 4-6', color: 'cyan', topics: ['Social Media', 'Email Marketing', 'Paid Advertising'] },
                { phase: 'Phase 3', title: 'AI & Automation', weeks: 'Weeks 7-9', color: 'purple', topics: ['Analytics & AI', 'Chatbots', 'Video Marketing'] },
                { phase: 'Phase 4', title: 'Integration & Career', weeks: 'Weeks 10-12', color: 'yellow', topics: ['Influencer Marketing', 'Marketing Automation', 'Capstone Projects'] }
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

      {/* 12-Week Curriculum */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
              12-Week <span className="text-yellow-600 dark:text-yellow-400">Curriculum</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
              Week-by-week breakdown of your digital marketing journey with 25+ projects
            </p>
            <div className="inline-flex items-center gap-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 px-4 py-2 rounded-full">
              <Rocket className="w-4 h-4" />
              <span className="font-medium">{weeklyCurriculum.length} Weeks • 25+ Projects</span>
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

      {/* 25+ Projects Showcase */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
              25+ <span className="text-yellow-600 dark:text-yellow-400">Real-World Projects</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Build an impressive marketing portfolio with projects of all difficulty levels
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
              <span className="text-gray-900 dark:text-white font-medium">Plus 12 weekly projects = 25+ total projects</span>
            </div>
          </div>
        </div>
      </section>

      {/* AI Tools You'll Master */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
              AI Tools You'll <span className="text-yellow-600 dark:text-yellow-400">Master</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Industry-leading AI tools for every marketing channel
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { icon: Bot, name: 'ChatGPT' },
              { icon: PenTool, name: 'Jasper' },
              { icon: ImageIcon, name: 'Midjourney' },
              { icon: Camera, name: 'DALL-E' },
              { icon: GlobeIcon, name: 'SurferSEO' },
              { icon: Search, name: 'Frase' },
              { icon: Share2, name: 'Buffer' },
              { icon: Users, name: 'Hootsuite' },
              { icon: Mail, name: 'Mailchimp' },
              { icon: Target, name: 'Adzooma' },
              { icon: BarChart, name: 'Google Analytics' },
              { icon: LineChartIcon, name: 'Looker Studio' },
              { icon: Bot, name: 'ManyChat' },
              { icon: Video, name: 'Synthesia' },
              { icon: Video, name: 'Pictory' },
              { icon: Settings, name: 'HubSpot' }
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Launch Your Marketing Career?</h2>
          <p className="text-xl text-yellow-100 mb-8 max-w-2xl mx-auto">
            Join our Digital Marketing bootcamp and get access to our career support team. We'll help you prepare for interviews, build your portfolio, and connect with top marketing agencies and companies.
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
              Everything you need to know about our Digital Marketing with AI course
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
              <h2 className="text-3xl font-bold mb-2">Ready to Become an AI-Powered Marketer?</h2>
              <p className="text-yellow-100">Join thousands of students who have transformed their marketing careers with Yelocode.</p>
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