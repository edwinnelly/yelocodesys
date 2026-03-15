"use client";
import Link from 'next/link'
import { 
  Cloud, 
  Home, 
  Search, 
  Phone, 
  Mail, 
  MapPin,
  Terminal,
  Code,
  Github,
  Twitter,
  Youtube,
  Linkedin,
  BookOpen,
  GraduationCap,
  ArrowRight,
  ChevronRight,
  Server,
  Database,
  Coffee,
  Bug
} from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      
      {/* Floating Tech Elements Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 text-yellow-100 dark:text-yellow-900/20 text-9xl font-mono font-bold rotate-12 select-none">
          {Array(5).fill('404').map((_, i) => (
            <div key={i} className="mb-4 opacity-20">
              404_NOT_FOUND
            </div>
          ))}
        </div>
        <div className="absolute bottom-20 right-10 text-yellow-100 dark:text-yellow-900/20 text-7xl font-mono font-bold -rotate-12 select-none">
          ERROR
        </div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-20">
        
        {/* 404 Hero with Glitch Effect */}
        <div className="text-center mb-12 relative">
          <style jsx>{`
            @keyframes glitch {
              0% {
                transform: translate(0);
                opacity: 1;
              }
              20% {
                transform: translate(-2px, 2px);
              }
              40% {
                transform: translate(-2px, -2px);
              }
              60% {
                transform: translate(2px, 2px);
              }
              80% {
                transform: translate(2px, -2px);
              }
              100% {
                transform: translate(0);
              }
            }
            
            .glitch-text {
              position: relative;
              animation: glitch 3s infinite;
            }
            
            .glitch-text::before,
            .glitch-text::after {
              content: "404";
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              opacity: 0.8;
            }
            
            .glitch-text::before {
              color: #ff00ff;
              z-index: -1;
              transform: translate(2px, 2px);
            }
            
            .glitch-text::after {
              color: #00ffff;
              z-index: -2;
              transform: translate(-2px, -2px);
            }
          `}</style>
          
          <h1 className="glitch-text text-9xl md:text-[12rem] font-bold text-yellow-500 dark:text-yellow-400 mb-4">
            404
          </h1>
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-500 blur-lg opacity-50"></div>
            <p className="relative text-2xl md:text-3xl font-semibold text-gray-800 dark:text-white bg-white dark:bg-gray-800 px-6 py-3 rounded-lg shadow-xl inline-flex items-center gap-3 border-2 border-yellow-500">
              <Terminal className="w-8 h-8 text-yellow-500" />
              PAGE_NOT_FOUND
              <Bug className="w-8 h-8 text-yellow-500" />
            </p>
          </div>
        </div>

        {/* Terminal Simulation */}
        <div className="max-w-3xl mx-auto mb-12 bg-gray-900 rounded-xl overflow-hidden shadow-2xl border border-gray-700">
          <div className="bg-gray-800 px-4 py-2 flex items-center gap-2 border-b border-gray-700">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <div className="flex-1 text-center text-sm text-gray-400 font-mono">terminal@yelocode:~$</div>
          </div>
          <div className="p-6 font-mono text-sm">
            <p className="text-green-400 mb-2">$ <span className="text-white">curl https://yelocodesys.com/page-that-doesnt-exist</span></p>
            <p className="text-red-400 mb-2">Response: 404 Not Found</p>
            <p className="text-yellow-400 mb-2">Error: Page is undefined</p>
            <p className="text-yellow-400 mb-4">Suggestion: Check your URL syntax or try our navigation menu</p>
            
            <p className="text-green-400 mb-2">$ <span className="text-white">ls -la /popular-courses/</span></p>
            <p className="text-gray-300 mb-2">drwxr-xr-x  <span className="text-yellow-400">cloud-computing/</span></p>
            <p className="text-gray-300 mb-2">drwxr-xr-x  <span className="text-yellow-400">python-bootcamp/</span></p>
            <p className="text-gray-300 mb-4">drwxr-xr-x  <span className="text-yellow-400">devops-engineering/</span></p>
            
            <p className="text-green-400 mb-2">$ <span className="text-white">cd /home &amp;&amp; ls</span></p>
            <p className="text-gray-300 mb-4">README.md  courses/  contact/  about/  resources/</p>
            
            <p className="text-green-400 animate-pulse">$ <span className="text-white">echo "Try navigating from our homepage"</span></p>
            <p className="text-white">Try navigating from our homepage</p>
          </div>
        </div>

        {/* Quick Navigation Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-3xl mx-auto">
          {[
            { icon: Home, label: 'Home', href: '/' },
            { icon: Cloud, label: 'Cloud', href: '/cloud-computing' },
            { icon: Code, label: 'Python', href: '/python' },
            { icon: BookOpen, label: 'Courses', href: '/coursecatalog' },
            { icon: GraduationCap, label: 'Careers', href: '/Careers' },
            { icon: Phone, label: 'Contact', href: '/contact' },
            { icon: Database, label: 'Resources', href: '/resources' },
            { icon: Server, label: 'About', href: '/aboutus' }
          ].map((item, i) => {
            const Icon = item.icon
            
            return (
              <Link key={i} href={item.href}>
                <div className="p-4 rounded-xl bg-yellow-50 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-300 hover:bg-yellow-100 dark:hover:bg-yellow-900/40 transition-all hover:scale-105 cursor-pointer text-center border border-yellow-200 dark:border-yellow-800">
                  <Icon className="w-6 h-6 mx-auto mb-2 text-yellow-600 dark:text-yellow-400" />
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
              </Link>
            )
          })}
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="🔍 Search for courses, resources, topics..."
              className="w-full px-6 py-4 pr-12 bg-white dark:bg-gray-800 border border-yellow-300 dark:border-yellow-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 text-gray-900 dark:text-white"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors">
              <Search className="w-5 h-5" />
            </button>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 text-center">
            Try: "Python bootcamp", "AWS course", "DevOps", "Resources"
          </p>
        </div>

        {/* Featured Programs */}
        <div className="max-w-6xl mx-auto mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center flex items-center justify-center gap-2">
            <GraduationCap className="w-6 h-6 text-yellow-500" />
            FEATURED PROGRAMS
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Cloud Computing Card */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl border border-yellow-200 dark:border-yellow-800 hover:shadow-2xl transition-all hover:-translate-y-1">
              <div className="h-2 bg-gradient-to-r from-yellow-500 to-amber-500"></div>
              <div className="p-6">
                <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/30 rounded-xl flex items-center justify-center mb-4">
                  <Cloud className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">☁️ Cloud Computing</h3>
                <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                  <span className="flex items-center gap-1"><Clock className="w-4 h-4 text-yellow-500" />12 Weeks</span>
                  <span className="flex items-center gap-1"><Rocket className="w-4 h-4 text-yellow-500" />30+ Projects</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-6">Master AWS, Azure, GCP, Docker, Kubernetes & DevOps</p>
                <Link href="/cloud-computing">
                  <button className="w-full px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors flex items-center justify-center gap-2 group">
                    View Program
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </div>
            </div>

            {/* Python Card */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl border border-yellow-200 dark:border-yellow-800 hover:shadow-2xl transition-all hover:-translate-y-1">
              <div className="h-2 bg-gradient-to-r from-yellow-500 to-amber-500"></div>
              <div className="p-6">
                <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/30 rounded-xl flex items-center justify-center mb-4">
                  <Code className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">🐍 Python Programming</h3>
                <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                  <span className="flex items-center gap-1"><Clock className="w-4 h-4 text-yellow-500" />16 Weeks</span>
                  <span className="flex items-center gap-1"><Rocket className="w-4 h-4 text-yellow-500" />30+ Projects</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-6">Learn Python, Django, Data Science, Automation & AI</p>
                <Link href="/python">
                  <button className="w-full px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors flex items-center justify-center gap-2 group">
                    View Program
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </div>
            </div>

            {/* DevOps Card */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl border border-yellow-200 dark:border-yellow-800 hover:shadow-2xl transition-all hover:-translate-y-1">
              <div className="h-2 bg-gradient-to-r from-yellow-500 to-amber-500"></div>
              <div className="p-6">
                <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/30 rounded-xl flex items-center justify-center mb-4">
                  <Server className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">🐳 DevOps Engineering</h3>
                <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                  <span className="flex items-center gap-1"><Clock className="w-4 h-4 text-yellow-500" />8 Weeks</span>
                  <span className="flex items-center gap-1"><Rocket className="w-4 h-4 text-yellow-500" />20+ Projects</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-6">Master CI/CD, Jenkins, Docker, Kubernetes & Monitoring</p>
                <Link href="/devops">
                  <button className="w-full px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors flex items-center justify-center gap-2 group">
                    View Program
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Resources */}
        <div className="max-w-3xl mx-auto mb-12 bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-8 border border-yellow-200 dark:border-yellow-800">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <Database className="w-5 h-5 text-yellow-500" />
            QUICK RESOURCES
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              'Python Cheat Sheet (PDF)',
              'AWS CLI Commands Guide',
              'Docker Commands Cheat Sheet',
              'Git Quick Reference',
              'Linux Command Line Guide',
              'Kubernetes Quick Start'
            ].map((resource, i) => (
              <div key={i} className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-yellow-400 cursor-pointer group">
                <ChevronRight className="w-4 h-4 text-yellow-500 group-hover:translate-x-1 transition-transform" />
                <span className="text-sm">{resource}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">STILL CAN'T FIND IT?</h3>
          
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <Phone className="w-5 h-5 text-yellow-500" />
              <span>+234 916 286 5693</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <Mail className="w-5 h-5 text-yellow-500" />
              <span>admissions@yelocodesys.com</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <MapPin className="w-5 h-5 text-yellow-500" />
              <span>No. 11 Elekahia, Port Harcourt</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <button className="px-6 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Report Broken Link
              </button>
            </Link>
            <Link href="/contact">
              <button className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors flex items-center gap-2 border-2 border-yellow-500">
                <Coffee className="w-4 h-4 text-yellow-500" />
                Schedule Consultation
              </button>
            </Link>
          </div>
        </div>

        {/* Easter Egg - Hidden Terminal Game */}
        <div className="hidden">console.log('Try the Konami code! ↑↑↓↓←→←→BA')</div>
      </div>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-900 border-t border-yellow-200 dark:border-yellow-800 mt-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Cloud className="w-5 h-5 text-yellow-500" />
                Yelocode Systems
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Empowering tech careers in Port Harcourt through hands-on coding bootcamps.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-yellow-500">Home</Link></li>
                <li><Link href="/cloud-computing" className="text-gray-600 dark:text-gray-400 hover:text-yellow-500">Cloud Computing</Link></li>
                <li><Link href="/python" className="text-gray-600 dark:text-gray-400 hover:text-yellow-500">Python</Link></li>
                <li><Link href="/coursecatalog" className="text-gray-600 dark:text-gray-400 hover:text-yellow-500">All Courses</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/contacts" className="text-gray-600 dark:text-gray-400 hover:text-yellow-500">Contact Us</Link></li>
                <li><Link href="/aboutus" className="text-gray-600 dark:text-gray-400 hover:text-yellow-500">About Us</Link></li>
                <li><Link href="/Careers" className="text-gray-600 dark:text-gray-400 hover:text-yellow-500">Careers</Link></li>
                <li><Link href="/resources" className="text-gray-600 dark:text-gray-400 hover:text-yellow-500">Resources</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Connect</h4>
              <div className="flex gap-4">
                <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-yellow-500">
                  <Github className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-yellow-500">
                  <Twitter className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-yellow-500">
                  <Youtube className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-yellow-500">
                  <Linkedin className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
          
          <div className="border-t border-yellow-200 dark:border-yellow-800 pt-8 text-center text-sm text-gray-600 dark:text-gray-400">
            <p>© {new Date().getFullYear()} Yelocode Systems. All rights reserved. No. 11 Elekahia, Port Harcourt, Rivers State, Nigeria.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Additional icons needed
const Clock = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <circle cx="12" cy="12" r="10" strokeWidth={1.5} />
    <polyline points="12 6 12 12 16 14" strokeWidth={1.5} />
  </svg>
)

const Rocket = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
  </svg>
)