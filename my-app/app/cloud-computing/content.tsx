"use client";

import { useState } from 'react'
import { 
  Cloud, GraduationCap, Search, MessageSquare, Check, X,
  Clock, Users, Award, Calendar, Laptop, BookOpen,
  PlayCircle, ChevronDown, ExternalLink, Star,
  Briefcase, Target, Zap, Globe, Mail, Phone,
  FileText, Video, Coffee, Rocket,
  GitBranch, Terminal, Database, Layout, Server,
  Layers, Cpu, Gauge, Shield, Users2, Workflow,
  FolderCode, TestTube, Cloud as CloudIcon, Palette,
  TrendingUp, DollarSign, Home, Smartphone,
  ShoppingCart, Newspaper, Youtube, Camera,
  Music, Gamepad, Plane, Car, Heart,
  Building2, Map, Sun, Moon, Activity,
  Wallet, Gift, Truck, Dog, Leaf, Bike, Ticket, 
  GlassWater, Shirt, Watch,
  Code, Github, Apple, Brain, AlertTriangle, 
  Tablet, Monitor, Watch as WatchIcon,
  Bluetooth, Wifi, Battery, Navigation,
  Fingerprint, Scan, QrCode, 
  PenTool, Layers as LayersIcon, Box, 
  Apple as AppleIcon, Smartphone as SmartphoneIcon,
  Bot, Eye, Mic, Chrome as ChromeIcon,
  HardDrive, Upload, Download, RefreshCw,
  Lock
} from 'lucide-react'
import Link from 'next/link'

export default function CloudComputingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  // 12-Week Curriculum with 30 projects
  const weeklyCurriculum = [
    {
      week: 1,
      title: 'Cloud Computing Fundamentals',
      description: 'Understand the core concepts of cloud computing and deployment models.',
      topics: [
        'What is Cloud Computing? - IaaS, PaaS, SaaS explained',
        'Deployment Models - public, private, hybrid, multi-cloud',
        'Cloud Architecture - regions, availability zones, edge locations',
        'Virtualization - hypervisors, VMs, containers',
        'Cloud Economics - CAPEX vs OPEX, pricing models',
        'Major Cloud Providers - AWS, Azure, GCP overview'
      ],
      project: {
        title: 'Project 1: Cloud Cost Calculator',
        description: 'Build a tool to estimate cloud costs for different scenarios',
        features: ['Pricing calculator', 'Scenario comparison', 'Cost optimization tips', 'Report generation']
      }
    },
    {
      week: 2,
      title: 'Linux for Cloud',
      description: 'Master Linux command line for cloud infrastructure management.',
      topics: [
        'Linux Basics - file system, permissions, processes',
        'Shell Scripting - bash scripting, variables, loops',
        'Package Management - apt, yum, snap',
        'System Administration - users, services, logging',
        'Network Configuration - IP, DNS, firewalls',
        'Performance Monitoring - top, htop, vmstat, iostat'
      ],
      project: {
        title: 'Project 2: Server Monitoring Script',
        description: 'Create a bash script to monitor server health',
        features: ['CPU monitoring', 'Memory usage', 'Disk space', 'Alert system']
      }
    },
    {
      week: 3,
      title: 'Amazon Web Services (AWS) Core',
      description: 'Deep dive into AWS core services and infrastructure.',
      topics: [
        'AWS Global Infrastructure - regions, AZs, edge locations',
        'EC2 - instances, AMIs, security groups, EBS',
        'S3 - buckets, storage classes, lifecycle policies',
        'VPC - subnets, route tables, internet gateways, NAT',
        'IAM - users, groups, roles, policies, MFA',
        'AWS CLI - configuration, commands, scripting'
      ],
      project: {
        title: 'Project 3: Static Website Hosting',
        description: 'Host a static website on AWS S3 with CloudFront',
        features: ['S3 bucket setup', 'Static website hosting', 'CloudFront CDN', 'Custom domain']
      }
    },
    {
      week: 4,
      title: 'Microsoft Azure Core',
      description: 'Master Microsoft Azure cloud platform fundamentals.',
      topics: [
        'Azure Architecture - regions, availability zones, resource groups',
        'Azure Virtual Machines - creation, sizing, networking',
        'Azure Storage - Blob, File, Queue, Table',
        'Azure Virtual Network - VNet, subnets, peering',
        'Azure Active Directory - identity, RBAC, conditional access',
        'Azure CLI and PowerShell - automation'
      ],
      project: {
        title: 'Project 4: Web App on Azure',
        description: 'Deploy a web application using Azure App Service',
        features: ['App Service setup', 'Database integration', 'Scaling configuration', 'Monitoring']
      }
    },
    {
      week: 5,
      title: 'Google Cloud Platform (GCP)',
      description: 'Explore Google Cloud Platform services and capabilities.',
      topics: [
        'GCP Regions and Zones - global infrastructure',
        'Compute Engine - VMs, instance groups, disks',
        'Cloud Storage - buckets, storage classes, object versioning',
        'VPC - networks, subnets, firewall rules',
        'Cloud IAM - roles, policies, service accounts',
        'gcloud CLI - commands, configuration'
      ],
      project: {
        title: 'Project 5: Data Processing Pipeline',
        description: 'Build a data processing pipeline on GCP',
        features: ['Cloud Storage ingest', 'Cloud Functions processing', 'BigQuery analysis', 'Looker dashboard']
      }
    },
    {
      week: 6,
      title: 'Infrastructure as Code (IaC)',
      description: 'Automate infrastructure deployment using code.',
      topics: [
        'Terraform Fundamentals - HCL, providers, resources',
        'Terraform State - local vs remote, locking',
        'Terraform Modules - reusable infrastructure',
        'AWS CloudFormation - templates, stacks, change sets',
        'Azure Resource Manager - ARM templates',
        'Best Practices - version control, CI/CD integration'
      ],
      project: {
        title: 'Project 6: Infrastructure as Code Project',
        description: 'Deploy complete infrastructure using Terraform',
        features: ['VPC setup', 'EC2 instances', 'RDS database', 'Load balancer']
      }
    },
    {
      week: 7,
      title: 'Containerization with Docker',
      description: 'Master Docker for application containerization.',
      topics: [
        'Docker Fundamentals - images, containers, registries',
        'Dockerfile - instructions, best practices, multi-stage builds',
        'Docker Compose - multi-container applications',
        'Container Networking - bridge, host, overlay',
        'Data Persistence - volumes, bind mounts',
        'Docker Security - best practices, scanning'
      ],
      project: {
        title: 'Project 7: Microservices with Docker',
        description: 'Containerize a microservices application',
        features: ['Multi-container setup', 'Docker Compose', 'Service discovery', 'Load balancing']
      }
    },
    {
      week: 8,
      title: 'Container Orchestration with Kubernetes',
      description: 'Orchestrate containers at scale with Kubernetes.',
      topics: [
        'Kubernetes Architecture - master nodes, worker nodes',
        'Pods, Services, Deployments - core concepts',
        'ConfigMaps and Secrets - configuration management',
        'Persistent Volumes - storage in Kubernetes',
        'Ingress Controllers - external access',
        'Helm - package management'
      ],
      project: {
        title: 'Project 8: Kubernetes Deployment',
        description: 'Deploy and manage an application on Kubernetes',
        features: ['Deployment configuration', 'Service exposure', 'Scaling', 'Rolling updates']
      }
    },
    {
      week: 9,
      title: 'DevOps Practices',
      description: 'Implement DevOps culture and practices in cloud environments.',
      topics: [
        'CI/CD Concepts - continuous integration, delivery, deployment',
        'Jenkins - pipeline as code, plugins, integration',
        'GitHub Actions - workflows, runners, secrets',
        'GitLab CI - .gitlab-ci.yml, runners, artifacts',
        'Infrastructure as Code Integration - testing infrastructure',
        'DevOps Best Practices - automation, monitoring, feedback'
      ],
      project: {
        title: 'Project 9: CI/CD Pipeline',
        description: 'Build a complete CI/CD pipeline for cloud deployment',
        features: ['Code repository', 'Automated testing', 'Build process', 'Cloud deployment']
      }
    },
    {
      week: 10,
      title: 'Serverless Computing',
      description: 'Build applications without managing servers.',
      topics: [
        'Serverless Concepts - FaaS, BaaS, event-driven',
        'AWS Lambda - functions, triggers, layers',
        'Azure Functions - bindings, Durable Functions',
        'Google Cloud Functions - events, triggers',
        'Serverless Frameworks - SAM, Serverless Framework',
        'Serverless Best Practices - cold starts, monitoring'
      ],
      project: {
        title: 'Project 10: Serverless API',
        description: 'Build a serverless REST API',
        features: ['Lambda functions', 'API Gateway', 'DynamoDB', 'Authentication']
      }
    },
    {
      week: 11,
      title: 'Cloud Security & Compliance',
      description: 'Secure cloud environments and ensure compliance.',
      topics: [
        'Shared Responsibility Model - provider vs customer',
        'Identity and Access Management - least privilege',
        'Network Security - security groups, NACLs, WAF',
        'Data Encryption - at rest, in transit, KMS',
        'Compliance Frameworks - GDPR, HIPAA, PCI DSS',
        'Security Monitoring - CloudTrail, CloudWatch, GuardDuty'
      ],
      project: {
        title: 'Project 11: Cloud Security Assessment',
        description: 'Perform a security assessment of cloud infrastructure',
        features: ['IAM audit', 'Network analysis', 'Encryption review', 'Compliance checklist']
      }
    },
    {
      week: 12,
      title: 'Capstone Project & Career Preparation',
      description: 'Build a portfolio-ready cloud project and prepare for cloud certifications.',
      topics: [
        'End-to-End Cloud Architecture - design and implementation',
        'Multi-Cloud Strategy - AWS, Azure, GCP integration',
        'Cost Optimization - rightsizing, reserved instances, spot instances',
        'High Availability and Disaster Recovery - design patterns',
        'Certification Preparation - AWS Solutions Architect, Azure Administrator',
        'Interview Preparation - cloud architecture questions, scenario-based'
      ],
      project: {
        title: 'Project 12-30: Capstone Projects (Choose 18)',
        description: 'Select and build 18 additional projects from the list below',
        features: ['Real-world scenarios', 'Multi-cloud solutions', 'Production-ready', 'Portfolio ready']
      }
    }
  ];

  // 30 Additional Projects
  const additionalProjects = [
    { icon: Cloud, title: 'AWS Three-Tier Architecture', description: 'Deploy a scalable three-tier application', difficulty: 'Advanced' },
    { icon: Server, title: 'Auto-Scaling Group', description: 'Configure auto-scaling based on load', difficulty: 'Intermediate' },
    { icon: Database, title: 'Database Migration to Cloud', description: 'Migrate on-premise database to RDS', difficulty: 'Advanced' },
    { icon: HardDrive, title: 'S3 Lifecycle Policy', description: 'Implement data lifecycle management', difficulty: 'Intermediate' },
    { icon: Shield, title: 'Cloud Security Hardening', description: 'Harden cloud infrastructure security', difficulty: 'Advanced' },
    { icon: Wifi, title: 'Global Content Delivery', description: 'Set up CDN for global content delivery', difficulty: 'Intermediate' },
    { icon: RefreshCw, title: 'Disaster Recovery Setup', description: 'Implement DR with failover', difficulty: 'Advanced' },
    { icon: Upload, title: 'Cloud Backup Solution', description: 'Automated backup to cloud storage', difficulty: 'Intermediate' },
    { icon: Download, title: 'Hybrid Cloud Storage', description: 'Connect on-premise to cloud storage', difficulty: 'Advanced' },
    { icon: Layers, title: 'Multi-Region Deployment', description: 'Deploy application across regions', difficulty: 'Advanced' },
    { icon: Terminal, title: 'Infrastructure Testing', description: 'Test infrastructure with Terratest', difficulty: 'Advanced' },
    { icon: Code, title: 'Serverless Image Processor', description: 'Process images with Lambda', difficulty: 'Intermediate' },
    { icon: Bot, title: 'ChatOps Bot', description: 'Create DevOps bot for Slack/Teams', difficulty: 'Intermediate' },
    { icon: Activity, title: 'Cloud Monitoring Dashboard', description: 'Build custom monitoring dashboard', difficulty: 'Intermediate' },
    { icon: AlertTriangle, title: 'Cloud Alerting System', description: 'Configure intelligent alerting', difficulty: 'Intermediate' },
    { icon: DollarSign, title: 'Cost Optimization Tool', description: 'Analyze and optimize cloud costs', difficulty: 'Advanced' },
    { icon: Lock, title: 'Secrets Management', description: 'Implement secure secrets management', difficulty: 'Intermediate' },
    { icon: Users, title: 'Multi-Tenant SaaS Architecture', description: 'Design SaaS on cloud', difficulty: 'Advanced' },
    { icon: Globe, title: 'Global Traffic Management', description: 'Route traffic with Route 53/Traffic Manager', difficulty: 'Advanced' },
    { icon: Map, title: 'Geo-Replicated Database', description: 'Set up database replication globally', difficulty: 'Advanced' },
    { icon: Rocket, title: 'yellow-yellow Deployment', description: 'Implement zero-downtime deployment', difficulty: 'Advanced' },
    { icon: TestTube, title: 'Canary Deployment', description: 'Progressive delivery with canary releases', difficulty: 'Advanced' },
    { icon: Gauge, title: 'Performance Testing in Cloud', description: 'Load test cloud applications', difficulty: 'Intermediate' },
    { icon: Cpu, title: 'Spot Instance Manager', description: 'Manage spot instances for cost savings', difficulty: 'Advanced' },
    { icon: CloudIcon, title: 'Multi-Cloud Kubernetes', description: 'Kubernetes across AWS, Azure, GCP', difficulty: 'Advanced' },
    { icon: Workflow, title: 'Event-Driven Architecture', description: 'Build event-driven system with queues', difficulty: 'Advanced' },
    { icon: FolderCode, title: 'GitOps Implementation', description: 'GitOps with ArgoCD/Flux', difficulty: 'Advanced' },
    { icon: Box, title: 'Container Registry', description: 'Set up private container registry', difficulty: 'Intermediate' },
    { icon: CloudIcon, title: 'Cloud Native Application', description: 'Build 12-factor cloud-native app', difficulty: 'Advanced' },
    { icon: Shield, title: 'Compliance Automation', description: 'Automate compliance checks', difficulty: 'Advanced' }
  ];

  const faqs = [
    {
      question: "What is Cloud Computing?",
      answer: "Cloud Computing is the delivery of computing services—including servers, storage, databases, networking, software, analytics, and intelligence—over the Internet ('the cloud'). Instead of owning and maintaining physical data centers and servers, organizations rent computing resources from cloud providers like AWS, Azure, or Google Cloud. This provides faster innovation, flexible resources, and economies of scale. Cloud computing is typically offered in three service models: Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS)."
    },
    {
      question: "Why should I learn Cloud Computing?",
      answer: "Learning Cloud Computing offers numerous benefits: 1) Massive Demand - 90% of companies use cloud, creating huge demand for cloud skills. 2) High Salaries - Cloud architects and engineers command top salaries ($100k+). 3) Future-Proof - Cloud adoption continues to grow globally. 4) Versatility - Skills apply across AWS, Azure, GCP, and multi-cloud. 5) Remote Work - Cloud jobs are often remote-friendly. 6) Innovation - Work with cutting-edge technologies (AI/ML, IoT, serverless). 7) Career Growth - Path to Solutions Architect, DevOps Engineer, Cloud Consultant. 8) Certification Value - Cloud certifications are highly valued by employers. 9) Cost Savings - Help organizations optimize cloud spending. 10) Global Opportunities - Work with companies worldwide."
    },
    {
      question: "What can I do with Cloud Computing skills?",
      answer: "With cloud computing skills, you can: 1) Become a Cloud Engineer managing infrastructure. 2) Work as a Solutions Architect designing cloud systems. 3) Join as a DevOps Engineer automating deployments. 4) Specialize as a Cloud Security Engineer. 5) Become a Site Reliability Engineer (SRE). 6) Work as a Cloud Consultant advising organizations. 7) Become a Platform Engineer building internal tools. 8) Specialize in a specific cloud (AWS, Azure, GCP). 9) Work in multi-cloud or hybrid cloud environments. 10) Become a Cloud Developer building cloud-native apps. 11) Work in FinOps optimizing cloud costs. 12) Join as a Kubernetes Administrator. 13) Become a Cloud Trainer or Educator. 14) Start a cloud consulting business."
    },
    {
      question: "What is the best roadmap to become a Cloud Professional?",
      answer: "The complete cloud computing roadmap: 1) Master Linux fundamentals and command line. 2) Learn networking basics (TCP/IP, DNS, HTTP/HTTPS). 3) Understand virtualization and containers (Docker). 4) Choose a cloud provider (AWS is most popular). 5) Master core services (compute, storage, networking). 6) Learn Infrastructure as Code (Terraform, CloudFormation). 7) Understand container orchestration (Kubernetes). 8) Implement CI/CD pipelines (Jenkins, GitHub Actions). 9) Learn monitoring and logging (CloudWatch, Prometheus). 10) Study cloud security and compliance. 11) Practice with hands-on projects. 12) Pursue certifications (AWS Solutions Architect, Azure Administrator). This 12-week course covers all these areas with 30+ hands-on projects."
    },
    {
      question: "What are the prerequisites for this course?",
      answer: "This is an intermediate-level course. We recommend basic familiarity with: Command line/terminal usage, Fundamental programming concepts (any language), Basic networking concepts (IP addresses, DNS). If you're a beginner, we offer a 2-week foundation module to get you up to speed. Most students with some tech background find the pace comfortable."
    },
    {
      question: "What is the time commitment for this 12-week course?",
      answer: "We recommend dedicating 15-20 hours per week. This includes 6 hours of live/recorded sessions and 9-14 hours of hands-on labs, projects, and assignments. With 30+ projects, you'll get extensive practical experience. The 12-week intensive format is designed for rapid skill acquisition while accommodating working professionals."
    },
    {
      question: "What kind of projects will I build?",
      answer: "You'll build 30+ real-world projects including: Static Website Hosting on AWS, Web App on Azure, Data Pipeline on GCP, Infrastructure as Code with Terraform, Microservices with Docker, Kubernetes Deployment, CI/CD Pipeline, Serverless API, Cloud Security Assessment, Multi-Region Deployment, Disaster Recovery Setup, Cost Optimization Tool, and many more. Projects range from intermediate to advanced, covering all major cloud platforms."
    },
    {
      question: "What certifications will this course prepare me for?",
      answer: "This course prepares you for multiple cloud certifications: AWS Certified Solutions Architect – Associate, AWS Certified Developer – Associate, Microsoft Azure Administrator (AZ-104), Microsoft Azure Fundamentals (AZ-900), Google Associate Cloud Engineer, HashiCorp Certified: Terraform Associate, Certified Kubernetes Administrator (CKA). We provide exam guidance and practice tests for these certifications."
    },
    {
      question: "Which cloud platform should I learn first?",
      answer: "Our course covers all three major platforms (AWS, Azure, GCP) so you can make an informed decision. AWS has the largest market share and most job opportunities. Azure is strong in enterprise environments and integrates well with Microsoft products. GCP is known for data analytics and machine learning. By learning all three, you become a versatile cloud professional who can work in any environment. Most students start with AWS, then learn the others."
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      
      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop"
            alt="Cloud Computing"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/90 to-yellow-900/80" />
        </div>
        
        {/* Gradient orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl animate-pulse animation-delay-2000" />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 text-white">
          <div className="max-w-3xl">
            <br />
            <br />
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium px-4 py-2 rounded-full mb-6">
              <Cloud className="w-4 h-4" />
              Complete 12-Week Cloud Computing Bootcamp
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Become a Professional{' '}
              <span className="bg-gradient-to-r from-gray-400 to-yellow-400 bg-clip-text text-transparent">
                Cloud Engineer
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
              Master AWS, Azure, Google Cloud, and DevOps with 30+ hands-on projects. 
              Learn infrastructure as code, containers, Kubernetes, and cloud architecture. 
              Prepare for industry certifications.
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
                <div className="text-3xl font-bold">12</div>
                <div className="text-sm text-gray-400">Weeks</div>
              </div>
              <div>
                <div className="text-3xl font-bold">30+</div>
                <div className="text-sm text-gray-400">Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold">3</div>
                <div className="text-sm text-gray-400">Cloud Platforms</div>
              </div>
              <div>
                <div className="text-3xl font-bold">8+</div>
                <div className="text-sm text-gray-400">Certifications</div>
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

      {/* What is Cloud Computing Section */}
      <section className="py-16 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                What is <span className="text-yellow-600 dark:text-yellow-400">Cloud Computing</span>?
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                Cloud Computing is the on-demand delivery of IT resources over the Internet with pay-as-you-go pricing. Instead of buying, owning, and maintaining physical data centers and servers, organizations access technology services from cloud providers as needed.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                Cloud Computing encompasses:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="p-1 bg-yellow-100 dark:bg-yellow-900/30 rounded mt-1">
                    <Server className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900 dark:text-white">Infrastructure as a Service (IaaS):</span>
                    <span className="text-gray-600 dark:text-gray-400"> Virtual machines, storage, networks - you manage the OS and apps.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1 bg-yellow-100 dark:bg-yellow-900/30 rounded mt-1">
                    <Code className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900 dark:text-white">Platform as a Service (PaaS):</span>
                    <span className="text-gray-600 dark:text-gray-400"> Managed platforms for application development and deployment.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1 bg-yellow-100 dark:bg-yellow-900/30 rounded mt-1">
                    <Cloud className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900 dark:text-white">Software as a Service (SaaS):</span>
                    <span className="text-gray-600 dark:text-gray-400"> Ready-to-use software applications over the internet.</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { number: '90%', label: 'Companies using cloud' },
                { number: '$100k+', label: 'Avg. cloud salary' },
                { number: '30%', label: 'Annual cloud growth' },
                { number: '$500B+', label: 'Cloud market size' }
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

      {/* Why Learn Cloud Computing */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
              Why Learn <span className="text-yellow-600 dark:text-yellow-400">Cloud Computing</span>?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              10 compelling reasons to start your cloud journey today
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: TrendingUp, title: 'Massive Demand', description: '90% of companies use cloud. Cloud skills are the most in-demand in tech.' },
              { icon: DollarSign, title: 'Top Salaries', description: 'Cloud architects earn $100k+. Even entry-level roles start at $55k+.' },
              { icon: Globe, title: 'Work Anywhere', description: 'Cloud infrastructure is global. Manage systems from anywhere.' },
              { icon: Rocket, title: 'Future-Proof Career', description: 'Cloud adoption is accelerating. Your skills will always be needed.' },
              { icon: Brain, title: 'Continuous Learning', description: 'New services launch constantly. Always something new to master.' },
              { icon: Award, title: 'Valuable Certifications', description: 'AWS, Azure, GCP certs are highly valued by employers.' },
              { icon: Users, title: 'Versatility', description: 'Work in any industry - tech, finance, healthcare, government.' },
              { icon: Zap, title: 'High Impact', description: 'Design systems that scale to millions of users worldwide.' },
              { icon: Briefcase, title: 'Multiple Career Paths', description: 'Cloud Engineer, DevOps, SRE, Architect, Consultant, and more.' }
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

      {/* Cloud Platforms You'll Master */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
              Cloud Platforms You'll <span className="text-yellow-600 dark:text-yellow-400">Master</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Become proficient in all major cloud providers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* AWS */}
            <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-xl text-center hover:shadow-lg transition">
              <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">AWS</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Amazon Web Services</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Market leader with the broadest service offering</p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="text-xs px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-600 rounded">EC2</span>
                <span className="text-xs px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-600 rounded">S3</span>
                <span className="text-xs px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-600 rounded">Lambda</span>
                <span className="text-xs px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-600 rounded">RDS</span>
                <span className="text-xs px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-600 rounded">VPC</span>
                <span className="text-xs px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-600 rounded">IAM</span>
              </div>
            </div>

            {/* Azure */}
            <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-xl text-center hover:shadow-lg transition">
              <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-yellow-600">Azure</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Microsoft Azure</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Enterprise favorite with strong Microsoft integration</p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="text-xs px-2 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 rounded">VMs</span>
                <span className="text-xs px-2 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 rounded">Blob</span>
                <span className="text-xs px-2 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 rounded">Functions</span>
                <span className="text-xs px-2 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 rounded">SQL</span>
                <span className="text-xs px-2 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 rounded">VNet</span>
                <span className="text-xs px-2 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 rounded">AD</span>
              </div>
            </div>

            {/* GCP */}
            <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-xl text-center hover:shadow-lg transition">
              <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-yellow-600">GCP</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Google Cloud</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Leader in data analytics and machine learning</p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="text-xs px-2 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 rounded">Compute</span>
                <span className="text-xs px-2 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 rounded">Storage</span>
                <span className="text-xs px-2 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 rounded">Functions</span>
                <span className="text-xs px-2 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 rounded">BigQuery</span>
                <span className="text-xs px-2 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 rounded">VPC</span>
                <span className="text-xs px-2 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 rounded">Kubernetes</span>
              </div>
            </div>
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
              Follow this proven path to become a professional cloud engineer
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-500 to-yellow-500 hidden md:block" />

            <div className="space-y-8">
              {[
                { phase: 'Phase 1', title: 'Cloud Fundamentals', weeks: 'Weeks 1-2', color: 'yellow', topics: ['Linux', 'Networking', 'Virtualization', 'Cloud Concepts'] },
                { phase: 'Phase 2', title: 'AWS & Azure & GCP', weeks: 'Weeks 3-5', color: 'yellow', topics: ['EC2/S3', 'Azure VMs', 'GCP Compute', 'Storage Services'] },
                { phase: 'Phase 3', title: 'DevOps & Containers', weeks: 'Weeks 6-9', color: 'yellow', topics: ['Docker', 'Kubernetes', 'Terraform', 'CI/CD'] },
                { phase: 'Phase 4', title: 'Advanced & Certifications', weeks: 'Weeks 10-12', color: 'yellow', topics: ['Security', 'Serverless', 'Architecture', 'Cert Prep'] }
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
              30+ <span className="text-yellow-600 dark:text-yellow-400">Cloud Projects</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Build an impressive portfolio with projects across all major clouds
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
              <span className="text-gray-900 dark:text-white font-medium">Plus 12 weekly projects = 30+ total projects</span>
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
              Industry-standard cloud tools and platforms
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { icon: Cloud, name: 'AWS' },
              { icon: Cloud, name: 'Azure' },
              { icon: Cloud, name: 'GCP' },
              { icon: Terminal, name: 'Linux' },
              { icon: Code, name: 'Terraform' },
              { icon: Box, name: 'Docker' },
              { icon: Layers, name: 'Kubernetes' },
              { icon: GitBranch, name: 'Jenkins' },
              { icon: Github, name: 'GitHub Actions' },
              { icon: Server, name: 'Ansible' },
              { icon: Activity, name: 'Prometheus' },
              { icon: Gauge, name: 'Grafana' },
              { icon: Database, name: 'RDS' },
              { icon: Database, name: 'DynamoDB' },
              { icon: Lock, name: 'IAM' },
              { icon: Wifi, name: 'VPC' }
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

      {/* Certifications Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
              <span className="text-yellow-600 dark:text-yellow-400">Certification</span> Preparation
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              We prepare you for the most valuable cloud certifications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { provider: 'AWS', cert: 'Solutions Architect Associate', color: 'yellow' },
              { provider: 'AWS', cert: 'Developer Associate', color: 'yellow' },
              { provider: 'Azure', cert: 'Administrator (AZ-104)', color: 'yellow' },
              { provider: 'Azure', cert: 'Fundamentals (AZ-900)', color: 'yellow' },
              { provider: 'GCP', cert: 'Associate Cloud Engineer', color: 'yellow' },
              { provider: 'HashiCorp', cert: 'Terraform Associate', color: 'yellow' },
              { provider: 'CNCF', cert: 'CKA (Kubernetes)', color: 'yellow' },
              { provider: 'AWS', cert: 'Security Specialty', color: 'yellow' },
              { provider: 'Azure', cert: 'DevOps Engineer Expert', color: 'yellow' }
            ].map((cert, i) => (
              <div key={i} className={`p-4 bg-white dark:bg-gray-800 rounded-lg border-l-4 border-${cert.color}-500`}>
                <div className="font-bold text-gray-900 dark:text-white">{cert.provider}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{cert.cert}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Paths Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-600 to-yellow-600 text-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build the Future with Cloud?</h2>
          <p className="text-xl text-yellow-100 mb-8 max-w-2xl mx-auto">
            Join our Cloud Computing bootcamp and get access to our career support team. We'll help you prepare for certifications, build your portfolio, and connect with top companies hiring cloud professionals.
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
              Everything you need to know about our cloud computing course
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
              <h2 className="text-3xl font-bold mb-2">Ready to Start Your Cloud Journey?</h2>
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