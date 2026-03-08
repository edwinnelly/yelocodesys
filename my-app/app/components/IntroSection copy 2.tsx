import { Code, Brain, Globe, Database, Cloud, Smartphone } from 'lucide-react'

const courses = [
  {
    icon: Code,
    title: 'Python Programming',
    description: 'Master Python from basics to advanced.',
    students: '2.5k',
    rating: 4.8,
    color: 'blue'
  },
  {
    icon: Brain,
    title: 'Machine Learning',
    description: 'Dive into ML algorithms and AI.',
    students: '1.8k',
    rating: 4.9,
    color: 'purple'
  },
  {
    icon: Globe,
    title: 'Full Stack Web Dev',
    description: 'Master React, Node.js, and databases.',
    students: '3.2k',
    rating: 4.7,
    color: 'orange'
  },
  {
    icon: Database,
    title: 'Data Science',
    description: 'Analyze data with Python and SQL.',
    students: '1.5k',
    rating: 4.8,
    color: 'green'
  },
  {
    icon: Cloud,
    title: 'Cloud Computing',
    description: 'Master AWS, Azure, and GCP.',
    students: '1.2k',
    rating: 4.6,
    color: 'indigo'
  },
  {
    icon: Smartphone,
    title: 'Mobile App Dev',
    description: 'Build iOS and Android apps.',
    students: '1.1k',
    rating: 4.7,
    color: 'pink'
  }
]

export default function CoursesSection() {
  return (
    <section id="courses" className="py-16 md:py-24 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold tracking-wider uppercase mb-4 block">
            Popular Courses
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Start learning today
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Choose from our industry-leading courses designed to boost your career.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses.map((course, index) => {
            const Icon = course.icon
            const colorClasses = {
              blue: 'text-blue-600 bg-blue-100 dark:text-blue-400 dark:bg-blue-900/30',
              purple: 'text-purple-600 bg-purple-100 dark:text-purple-400 dark:bg-purple-900/30',
              orange: 'text-orange-600 bg-orange-100 dark:text-orange-400 dark:bg-orange-900/30',
              green: 'text-green-600 bg-green-100 dark:text-green-400 dark:bg-green-900/30',
              indigo: 'text-indigo-600 bg-indigo-100 dark:text-indigo-400 dark:bg-indigo-900/30',
              pink: 'text-pink-600 bg-pink-100 dark:text-pink-400 dark:bg-pink-900/30'
            }
            
            return (
              <div 
                key={index}
                className="group flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-xl hover:shadow-lg transition-all cursor-pointer"
              >
                <div className={`p-3 rounded-lg ${colorClasses[course.color as keyof typeof colorClasses]}`}>
                  <Icon className="w-5 h-5" />
                </div>
                
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    {course.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    {course.description}
                  </p>
                  <div className="flex items-center gap-4 text-xs">
                    <span className="text-gray-500 dark:text-gray-400">
                      👥 {course.students} students
                    </span>
                    <span className="text-yellow-500">
                      ★ {course.rating}
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}