import {
  Code,
  Brain,
  Globe,
  Database,
  Cloud,
  Smartphone,
  TrendingUp,
  Palette,
  BarChart,
  Users,
  Star,
  Clock,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const courses = [
  {
    icon: Code,
    title: "Python Programming",
    level: "Beginner",
    students: "2.1k",
    duration: "16 weeks",
    description: "Learn Python programming fundamentals to advanced concepts",
    slug: "python-programming",
  },
  {
    icon: Brain,
    title: "Machine Learning",
    level: "Advanced",
    students: "1.8k",
    duration: "18 weeks",
    description: "Master ML algorithms, neural networks, and AI applications",
    slug: "machine-learning",
  },
  {
    icon: Globe,
    title: "Full Stack Web Dev",
    level: "Intermediate",
    students: "3.2k",
    duration: "16 weeks",
    description: "Become a full stack developer with React, Node.js, and databases",
    slug: "full-stack-web-development",
  },
  {
    icon: Database,
    title: "Data Science",
    level: "Intermediate",
    students: "1.5k",
    duration: "14 weeks",
    description: "Extract insights from data using statistical methods and visualization",
    slug: "data-science",
  },
  {
    icon: Cloud,
    title: "Cloud Computing",
    level: "Advanced",
    students: "650",
    duration: "16 weeks",
    description: "Master AWS, Azure, and cloud infrastructure management",
    slug: "cloud-computing",
  },
  {
    icon: Smartphone,
    title: "Mobile App Dev",
    level: "Intermediate",
    students: "430",
    duration: "18 weeks",
    description: "Build iOS and Android apps with Flutter and React Native",
    slug: "mobile-app-development",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    level: "Beginner",
    students: "340",
    duration: "12 weeks",
    description: "Master SEO, social media marketing, and content strategy",
    slug: "digital-marketing",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    level: "Beginner",
    students: "200",
    duration: "10 weeks",
    description: "Learn user-centered design principles and prototyping tools",
    slug: "ui-ux-design",
  },
  {
    icon: BarChart,
    title: "Data Analysis",
    level: "Intermediate",
    students: "1k",
    duration: "16 weeks",
    description: "Analyze and visualize data using Python, SQL, and Excel",
    slug: "data-analysis",
  },
];

export default function CoursesSection() {
  // Structured data for courses
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": courses.map((course, index) => ({
      "@type": "Course",
      "position": index + 1,
      "name": course.title,
      "description": course.description,
      "provider": {
        "@type": "Organization",
        "name": "Yelocode Systems",
        "sameAs": "https://yelocodesys.com"
      },
      "audience": {
        "@type": "EducationalAudience",
        "educationalRole": course.level
      },
      "timeRequired": `P${course.duration.replace(" weeks", "W")}`,
      "numberOfCredits": "3"
    }))
  };

  return (
    <>
      <section id="courses" className="py-24 bg-gray-50 dark:bg-black">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          {/* Section Header - SEO optimized */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
              Professional Coding Courses in Port Harcourt
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              Master in-demand tech skills with our industry-aligned curriculum at{" "}
              <strong className="text-gray-700 dark:text-gray-300">
                Yelocode Systems, Port Harcourt
              </strong>
            </p>
          </div>

          {/* Courses Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {courses.map((course, index) => {
              const Icon = course.icon;

              return (
                <Link
                  key={index}
                  href={`/courses/${course.slug}`}
                  className="group relative bg-white dark:bg-black p-5 hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-800 block cursor-pointer"
                  aria-label={`Learn ${course.title} - ${course.duration} course in Port Harcourt`}
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
                        <span className="capitalize">{course.level}</span>
                        <span>·</span>
                        <span>{course.students} students enrolled</span>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3 fill-yellow-400 stroke-yellow-400" />
                          <span className="text-xs text-gray-600 dark:text-gray-400 font-medium">4.8</span>
                          <span className="text-xs text-gray-400">(1.2k reviews)</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3 text-gray-400" />
                          <span className="text-xs text-gray-500">{course.duration}</span>
                        </div>
                      </div>

                      {/* Hidden SEO text - Visible to screen readers */}
                      <span className="sr-only">
                        {course.description}. Located in Port Harcourt, Nigeria.
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="text-center mt-10">
            <Link
              href="/coursecatalog"
              className="px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors inline-flex items-center gap-2 group"
              aria-label="View all available courses at Yelocode Systems"
            >
              <span>Explore Full Course Catalog</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  );
}