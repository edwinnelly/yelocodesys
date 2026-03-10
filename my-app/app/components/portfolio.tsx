import { 
  ExternalLink, Github, Calendar, Building2, Users, 
  TrendingUp, Globe, Shield, Clock, ArrowRight, 
  Layers, Award, Zap, Briefcase
} from 'lucide-react'

const projects = [
  {
    title: 'AI Analytics Dashboard',
    description: 'Enterprise-grade real-time analytics platform with machine learning insights for Fortune 500 clients.',
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
  { icon: Briefcase, value: '50+', label: 'Enterprise Clients' },
  { icon: Users, value: '1M+', label: 'End Users' },
  { icon: Globe, value: '5+', label: 'Countries' },
  { icon: Shield, value: '99.9%', label: 'Uptime SLA' }
]

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        {/* Header with company focus */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-sm px-4 py-2 rounded-full mb-6">
              <Building2 className="w-4 h-4" />
              Enterprise Solutions
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-4">
              Trusted by{' '}
              <span className="bg-gradient-to-r from-gray-600 to-gray-400 bg-clip-text text-transparent">
                industry leaders
              </span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              Delivering scalable, secure, and innovative solutions for enterprise clients worldwide.
            </p>
          </div>
          
          {/* Company Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-8 lg:mt-0">
            {companyStats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="text-center lg:text-right">
                  <div className="text-2xl font-light text-gray-900 dark:text-white">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-400 dark:text-gray-500 flex items-center gap-1 lg:justify-end">
                    <Icon className="w-3 h-3" />
                    {stat.label}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        
        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gray-50 dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:shadow-2xl transition-all duration-300"
            >
              {/* Image with overlay */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Industry Tag */}
                <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 dark:bg-gray-900/90 text-xs text-gray-700 dark:text-gray-300 rounded-full backdrop-blur-sm">
                  {project.industry}
                </span>
                
                {/* Year Badge */}
                <span className="absolute top-4 right-4 px-3 py-1 bg-gray-900/90 text-white text-xs rounded-full backdrop-blur-sm">
                  {project.year}
                </span>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                
                {/* Client Info */}
                <div className="flex items-center gap-4 mb-4 text-sm">
                  <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                    <Building2 className="w-4 h-4" />
                    <span>{project.client}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                    <Zap className="w-4 h-4" />
                    <span>{project.impact}</span>
                  </div>
                </div>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* CTA */}
                <div className="flex items-center justify-between pt-2">
                  <button className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors flex items-center gap-2 group">
                    <span>Case study</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  
                  <button className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                    Live demo →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-4 rounded-full hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors cursor-pointer group">
            <Briefcase className="w-5 h-5" />
            <span className="font-medium">View all case studies</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </div>
          <p className="text-sm text-gray-400 dark:text-gray-500 mt-4">
            *Some projects under NDA are not listed
          </p>
        </div>
      </div>
    </section>
  )
}