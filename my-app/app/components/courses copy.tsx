import { 
  Code, Brain, Globe, Database, Cloud, Smartphone, 
  TrendingUp, Palette, BarChart, Users 
} from 'lucide-react'

const courses = [
  { icon: Code, title: 'Python Programming', level: 'Beginner' },
  { icon: Brain, title: 'Machine Learning', level: 'Advanced' },
  { icon: Globe, title: 'Full Stack Web Dev', level: 'Intermediate' },
  { icon: Database, title: 'Data Science', level: 'Intermediate' },
  { icon: Cloud, title: 'Cloud Computing', level: 'Advanced' },
  { icon: Smartphone, title: 'Mobile App Dev', level: 'Intermediate' },
  { icon: TrendingUp, title: 'Digital Marketing', level: 'Beginner' },
  { icon: Palette, title: 'UI/UX Design', level: 'Beginner' },
  { icon: BarChart, title: 'Data Analysis', level: 'Intermediate' }
]

export default function CoursesSection() {
  return (
    <section id="courses" className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="mb-12">
          <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-2">
            Explore courses
          </h2>
          <p className="text-gray-500 dark:text-gray-400">
            9 programs · Updated monthly
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {courses.map((course, index) => {
            const Icon = course.icon
            
            return (
              <div
                key={index}
                className="group p-4 border border-gray-100 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-colors cursor-pointer"
              >
                <Icon className="w-5 h-5 text-gray-500 dark:text-gray-400 mb-3" />
                <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-1">
                  {course.title}
                </h3>
                <p className="text-xs text-gray-400 dark:text-gray-500">
                  {course.level}
                </p>
              </div>
            )
          })}
        </div>
        
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100 dark:border-gray-800">
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <Users className="w-4 h-4" />
            <span>15,000+ active learners</span>
          </div>
          <button className="text-sm text-gray-900 dark:text-white font-medium">
            Browse all →
          </button>
        </div>
      </div>
    </section>
  )
}