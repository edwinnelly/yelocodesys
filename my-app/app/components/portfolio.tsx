import { 
  ExternalLink, Github, Calendar, Building2, Users, 
  TrendingUp, Globe, Shield, Clock, ArrowRight, 
  Layers, Award, Zap, Briefcase, ArrowUpRight,
  Eye, Lock
} from 'lucide-react'
import Link from 'next/link'

const projects = [
  {
    title: 'AI Analytics Dashboard',
    description: 'Enterprise grade real time analytics platform with machine learning insights for Fortune 500 clients.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    tags: ['React', 'Python', 'TensorFlow', 'AWS'],
    industry: 'FinTech',
    client: 'Global Bank',
    year: '2024',
    impact: '40% faster data processing',
    link: '#'
  },
  {
    title: 'E-Commerce Platform',
    description: 'Scalable full-stack e-commerce solution with payment integration serving 100k+ daily users.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop',
    tags: ['Next.js', 'Stripe', 'MongoDB', 'Redis'],
    industry: 'Retail',
    client: 'Major Retail Chain',
    year: '2023',
    impact: '99.9% uptime',
    link: '#'
  },
  {
    title: 'Cloud Infrastructure Manager',
    description: 'Comprehensive AWS resource management and monitoring dashboard for enterprise infrastructure.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop',
    tags: ['AWS', 'Terraform', 'Kubernetes', 'Grafana'],
    industry: 'Technology',
    client: 'SaaS Company',
    year: '2023',
    impact: 'Reduced costs by 35%',
    link: '#'
  },
  {
    title: 'Healthcare Analytics Platform',
    description: 'HIPAA-compliant patient data analytics platform for healthcare providers.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop',
    tags: ['React', 'Python', 'PostgreSQL', 'FHIR'],
    industry: 'Healthcare',
    client: 'Regional Hospital',
    year: '2024',
    impact: '50k+ patients served',
    link: '#'
  }
]

const companyStats = [
  { icon: Building2, value: '50+', label: 'Enterprise Clients' },
  { icon: Users, value: '1M+', label: 'End Users Served' },
  { icon: Globe, value: '5+', label: 'Countries' },
  { icon: Shield, value: '99.9%', label: 'Uptime SLA' }
]

export default function PortfolioSection() {
  // Structured data for portfolio projects
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": projects.map((project, index) => ({
      "@type": "CreativeWork",
      "position": index + 1,
      "name": project.title,
      "description": project.description,
      "creator": {
        "@type": "Organization",
        "name": "Yelocode Systems",
        "url": "https://yelocodesys.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "No. 11 Elekahia",
          "addressLocality": "Port Harcourt",
          "addressRegion": "Rivers State",
          "addressCountry": "NG"
        }
      },
      "about": {
        "@type": "Thing",
        "name": project.industry
      },
      "dateCreated": project.year,
      "keywords": project.tags.join(", "),
      "provider": {
        "@type": "Organization",
        "name": "Yelocode Systems",
        "sameAs": "https://yelocodesys.com"
      }
    }))
  };

  return (
    <>
      <section 
        id="portfolio" 
        className="relative py-24 md:py-32 bg-black dark:bg-white text-white dark:text-black overflow-hidden"
        aria-label="Portfolio of enterprise software solutions by Yelocode Systems, the best tech school in Port Harcourt"
      >
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:64px_64px]" aria-hidden="true" />
        
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          {/* Header - SEO optimized */}
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
            {/* Label */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 dark:bg-black/10 border border-white/20 dark:border-black/20 rounded-full mb-6 backdrop-blur-sm">
              <Briefcase className="w-4 h-4" />
              <span className="text-sm font-medium text-gray-300 dark:text-gray-600">
                Software Company in Port Harcourt
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1]">
              Enterprise Software Solutions{" "}
              <span className="relative inline-block">
                by Yelocode Systems
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M2 6C44 2.66667 132 0 198 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    className="text-gray-600 dark:text-gray-400"
                  />
                </svg>
              </span>
            </h2>

            <p className="text-lg md:text-xl text-gray-400 dark:text-gray-600 leading-relaxed max-w-2xl mx-auto">
              A leading{" "}
              <strong className="text-white dark:text-black font-semibold">
                software development company in Nigeria
              </strong>{" "}
              delivering custom software solutions, web development, mobile apps, and cloud solutions in Port Harcourt. 
              Trusted by enterprises across Rivers State for{" "}
              <strong className="text-white dark:text-black font-semibold">
                business automation
              </strong>{" "}
              and{" "}
              <strong className="text-white dark:text-black font-semibold">
                digital transformation
              </strong>.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {companyStats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div key={index} className="text-center group">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 dark:bg-black/10 border border-white/20 dark:border-black/20 mb-3 group-hover:bg-white dark:group-hover:bg-black group-hover:text-black dark:group-hover:text-white transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="text-2xl md:text-3xl font-bold mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400 dark:text-gray-600">
                      {stat.label}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          
          {/* Project Grid - SEO optimized with keywords */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Link
                href={project.link}
                key={index}
                className="group relative bg-white dark:bg-black text-black dark:text-white overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600 transition-all duration-500"
                aria-label={`${project.title} - ${project.industry} project by Yelocode Systems`}
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} - ${project.industry} software solution by Yelocode Systems`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  
                  {/* Dark overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500" aria-hidden="true" />
                  
                  {/* Hover CTA */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500" aria-hidden="true">
                    <span className="px-6 py-3 bg-white text-black font-medium text-sm flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <Eye className="w-4 h-4" />
                      View Case Study
                    </span>
                  </div>
                  
                  {/* Top badges */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1.5 bg-white dark:bg-black text-black dark:text-white text-xs font-medium backdrop-blur-sm">
                      {project.industry}
                    </span>
                  </div>
                  
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1.5 bg-black dark:bg-white text-white dark:text-black text-xs font-medium">
                      {project.year}
                    </span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  {/* Title & Arrow */}
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold group-hover:translate-x-1 transition-transform duration-300">
                      {project.title}
                    </h3>
                    <ArrowUpRight className="w-5 h-5 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0" aria-hidden="true" />
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-5 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Client & Impact */}
                  <div className="flex flex-wrap items-center gap-4 mb-5 pb-5 border-b border-gray-200 dark:border-gray-800">
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <Building2 className="w-4 h-4" aria-hidden="true" />
                      <span>{project.client}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <Zap className="w-4 h-4" aria-hidden="true" />
                      <span>{project.impact}</span>
                    </div>
                  </div>
                  
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs px-2.5 py-1.5 bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-800 font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Hidden SEO keywords for screen readers */}
                  <span className="sr-only">
                    {project.title} developed by Yelocode Systems, a software company in Port Harcourt, Nigeria. 
                    {project.industry} project completed in {project.year}.
                  </span>
                </div>
              </Link>
            ))}
          </div>
          
          {/* SEO Keywords Section */}
          <div className="mt-12 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-500 max-w-3xl mx-auto leading-relaxed">
              <strong className="text-gray-300 dark:text-gray-700 font-medium">Services:</strong>{" "}
              Software Development Nigeria • Web Development Company Port Harcourt • Mobile App Development • 
              Custom Software Solutions • IT Consulting Rivers State • Cloud Solutions Nigeria • 
              Business Automation • Business Technology Services • Digital Transformation Nigeria • 
              Tech Solutions Provider Nigeria
            </p>
          </div>

          {/* Bottom CTA */}
          <div className="mt-8 md:mt-10 text-center">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white dark:bg-black text-black dark:text-white font-semibold hover:bg-gray-100 dark:hover:bg-gray-900 transition-all duration-300 group"
              aria-label="View all case studies of software development projects by Yelocode Systems"
            >
              <Briefcase className="w-5 h-5" aria-hidden="true" />
              <span>View All Case Studies</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
            <p className="text-sm text-gray-500 dark:text-gray-500 mt-4">
              *Some projects under NDA are not listed
            </p>
          </div>
        </div>
      </section>

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  )
}