import { 
  Code, Brain, Globe, Database, Cloud, Smartphone, 
  TrendingUp, Palette, BarChart, Users, Star, Clock, ArrowRight 
} from 'lucide-react'

const courses = [
  { icon: Code, title: 'Python Programming', level: 'Beginner', students: '2.5k' },
  { icon: Brain, title: 'Machine Learning', level: 'Advanced', students: '1.8k' },
  { icon: Globe, title: 'Full Stack Web Dev', level: 'Intermediate', students: '3.2k' },
  { icon: Database, title: 'Data Science', level: 'Intermediate', students: '1.5k' },
  { icon: Cloud, title: 'Cloud Computing', level: 'Advanced', students: '1.2k' },
  { icon: Smartphone, title: 'Mobile App Dev', level: 'Intermediate', students: '1.1k' },
  { icon: TrendingUp, title: 'Digital Marketing', level: 'Beginner', students: '2.1k' },
  { icon: Palette, title: 'UI/UX Design', level: 'Beginner', students: '1.4k' },
  { icon: BarChart, title: 'Data Analysis', level: 'Intermediate', students: '1.9k' }
]

export default function CoursesSection() {
  return (
    <section id="courses" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="text-center mb-12">
          
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Professional courses
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Master in-demand skills with our industry-aligned curriculum
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses.map((course, index) => {
            const Icon = course.icon
            
            return (
              <div
                key={index}
                className="group relative bg-white dark:bg-gray-950 p-5 hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-800"
              >
                {/* Metallic shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-100/50 to-transparent dark:via-gray-800/50 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                
                <div className="flex items-start gap-3">
                  <div className="p-2.5 bg-gray-100 dark:bg-gray-800 rounded-lg group-hover:bg-gray-200 dark:group-hover:bg-gray-700 transition-colors">
                    <Icon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-base font-medium text-gray-900 dark:text-white mb-1">
                      {course.title}
                    </h3>
                    
                    <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400 mb-2">
                      <span>{course.level}</span>
                      <span>·</span>
                      <span>{course.students} students</span>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 fill-gray-400 stroke-gray-400" />
                        <span className="text-xs text-gray-500">4.8</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-gray-400" />
                        <span className="text-xs text-gray-500">8 weeks</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        
        <div className="text-center mt-10">
          <button className="px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors inline-flex items-center gap-2 group">
            Explore full catalog
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  )
}