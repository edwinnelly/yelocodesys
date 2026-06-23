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
  Shield,
  Users,
  Star,
  Clock,
  ArrowRight,
  Briefcase,
} from "lucide-react";
import Link from "next/link";

const courses = [
  {
    icon: Code,
    title: "Software Engineering",
    level: "Beginner to Advanced",
    students: "3.2k",
    duration: "24 weeks",
    description: "Master full-stack development at our software engineering academy in Port Harcourt with job placement support",
    slug: "software-engineering",
    highDemand: true,
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    level: "Intermediate",
    students: "1.8k",
    duration: "18 weeks",
    description: "Protect systems and networks with our cybersecurity training in Port Harcourt. Includes ethical hacking & network defense",
    slug: "cybersecurity",
    highDemand: true,
  },
  {
    icon: BarChart,
    title: "Data Analytics",
    level: "Beginner to Intermediate",
    students: "2.1k",
    duration: "16 weeks",
    description: "Master data analytics training in Port Harcourt using Python, SQL, Power BI, and Excel for business intelligence",
    slug: "data-analytics",
    highDemand: true,
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    level: "Beginner to Advanced",
    students: "1.5k",
    duration: "12 weeks",
    description: "Learn professional UI/UX design training in Port Harcourt with Figma, user research, and prototyping",
    slug: "ui-ux-design",
    highDemand: true,
  },
  {
    icon: Code,
    title: "Python Programming",
    level: "Beginner",
    students: "2.5k",
    duration: "16 weeks",
    description: "Learn Python from basics to advanced concepts at the best computer training school in Port Harcourt",
    slug: "python",
  },
  {
    icon: Brain,
    title: "Machine Learning & AI",
    level: "Advanced",
    students: "1.2k",
    duration: "18 weeks",
    description: "Master ML algorithms, neural networks, and AI applications with hands-on projects",
    slug: "datascience",
  },
  {
    icon: Globe,
    title: "Full Stack Web Dev",
    level: "Intermediate",
    students: "3.5k",
    duration: "16 weeks",
    description: "Become a full stack developer with React, Node.js, and databases. Offered at our coding bootcamp in Port Harcourt",
    slug: "webdevelopment",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    level: "Advanced",
    students: "850",
    duration: "16 weeks",
    description: "Master AWS, Azure, Docker, Kubernetes and CI/CD pipelines for cloud infrastructure",
    slug: "cloud-computing",
  },
  {
    icon: Smartphone,
    title: "Mobile App Dev",
    level: "Intermediate",
    students: "650",
    duration: "18 weeks",
    description: "Build iOS and Android apps with Flutter and React Native at our IT training center in Port Harcourt",
    slug: "mobile-app-development",
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
        "sameAs": "https://yelocodesys.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "No. 11 Elekahia",
          "addressLocality": "Port Harcourt",
          "addressRegion": "Rivers State",
          "addressCountry": "NG"
        }
      },
      "audience": {
        "@type": "EducationalAudience",
        "educationalRole": course.level
      },
      "timeRequired": `P${course.duration.replace(" weeks", "W")}`,
      "occupationalCredentialAwarded": `Certificate in ${course.title}`,
      "hasCourseInstance": {
        "@type": "CourseInstance",
        "courseMode": "onsite",
        "location": {
          "@type": "Place",
          "name": "Yelocode Systems Training Center",
          "address": "No. 11 Elekahia, Port Harcourt, Rivers State, Nigeria"
        }
      }
    }))
  };

  return (
    <>
      <section id="courses" className="py-24 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-3">
              Best Tech School in{" "}
              <span className="relative">
                Port Harcourt
                <svg
                  className="absolute -bottom-1 left-0 w-full"
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
                    className="text-gray-300 dark:text-gray-600"
                  />
                </svg>
              </span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
              Your premier{" "}
              <strong className="text-black dark:text-white font-semibold">
                coding bootcamp in Port Harcourt
              </strong>{" "}
              offering professional training with job placement. Choose from our industry-aligned programs at the most{" "}
              <strong className="text-black dark:text-white font-semibold">
                affordable computer training center in PH
              </strong>.
            </p>
            
            {/* Value badges */}
            <div className="flex flex-wrap gap-3 justify-center mt-6">
              <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 text-sm rounded-full border border-gray-200 dark:border-gray-800">
                <Briefcase className="w-4 h-4" />
                Tech Training with Job Placement
              </span>
              <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 text-sm rounded-full border border-gray-200 dark:border-gray-800">
                <Users className="w-4 h-4" />
                8,000+ Graduates
              </span>
              <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 text-sm rounded-full border border-gray-200 dark:border-gray-800">
                <Star className="w-4 h-4 fill-black dark:fill-white stroke-black dark:stroke-white" />
                4.8 Rating (1.2k+ reviews)
              </span>
            </div>
          </div>

          {/* High-Demand Courses Section */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-black dark:text-white mb-6 flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              <span>High-Demand Tech Skills</span>
              <span className="text-sm font-normal text-gray-500 dark:text-gray-400 ml-2">
                (with job placement support)
              </span>
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {courses.filter(c => c.highDemand).map((course, index) => {
                const Icon = course.icon;

                return (
                  <Link
                    key={`high-demand-${index}`}
                    href={`/${course.slug}`}
                    className="group relative bg-white dark:bg-black p-5 hover:shadow-xl transition-all duration-300 overflow-hidden border-2 border-black dark:border-white block cursor-pointer"
                    aria-label={`${course.title} - ${course.duration} with job placement at Yelocode Systems`}
                  >
                    {/* In Demand badge */}
                    <div className="absolute top-3 right-3 bg-black dark:bg-white text-white dark:text-black text-xs px-2.5 py-1 font-medium">
                      In Demand
                    </div>
                    
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-100/50 to-transparent dark:via-gray-900/50 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                    <div className="flex items-start gap-3 relative z-10">
                      <div className="p-2.5 bg-gray-100 dark:bg-gray-900 group-hover:bg-gray-200 dark:group-hover:bg-gray-800 transition-colors">
                        <Icon className="w-5 h-5 text-black dark:text-white" />
                      </div>

                      <div className="flex-1">
                        <h4 className="text-base font-semibold text-black dark:text-white mb-1">
                          {course.title}
                        </h4>

                        <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400 mb-2">
                          <span className="capitalize">{course.level}</span>
                          <span>·</span>
                          <span>{course.students} enrolled</span>
                        </div>

                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-1">
                            <Star className="w-3.5 h-3.5 fill-black dark:fill-white stroke-black dark:stroke-white" />
                            <span className="text-xs text-gray-700 dark:text-gray-300 font-medium">4.8</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5 text-gray-500" />
                            <span className="text-xs text-gray-500">{course.duration}</span>
                          </div>
                          <div className="flex items-center gap-1 ml-auto">
                            <Briefcase className="w-3.5 h-3.5" />
                            <span className="text-xs text-black dark:text-white font-medium">Job Support</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* All Courses Grid */}
          <div>
            <h3 className="text-xl font-semibold text-black dark:text-white mb-6 flex items-center gap-2">
              <Code className="w-5 h-5" />
              <span>Complete Course Catalog</span>
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {courses.map((course, index) => {
                const Icon = course.icon;

                return (
                  <Link
                    key={index}
                    href={`/${course.slug}`}
                    className={`group relative bg-white dark:bg-black p-5 hover:shadow-xl transition-all duration-300 overflow-hidden border block cursor-pointer ${
                      course.highDemand 
                        ? "border-black dark:border-white border-2" 
                        : "border-gray-200 dark:border-gray-800"
                    }`}
                    aria-label={`Learn ${course.title} - ${course.duration} course in Port Harcourt`}
                  >
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-50/50 to-transparent dark:via-gray-900/30 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                    <div className="flex items-start gap-3 relative z-10">
                      <div className="p-2.5 bg-gray-100 dark:bg-gray-900 rounded-lg group-hover:bg-gray-200 dark:group-hover:bg-gray-800 transition-colors">
                        <Icon className="w-5 h-5 text-black dark:text-white" />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="text-base font-semibold text-black dark:text-white">
                            {course.title}
                          </h4>
                          {course.highDemand && (
                            <span className="text-xs px-2 py-0.5 bg-black dark:bg-white text-white dark:text-black font-medium">
                              Popular
                            </span>
                          )}
                        </div>

                        <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400 mb-2">
                          <span className="capitalize">{course.level}</span>
                          <span>·</span>
                          <span>{course.students} students enrolled</span>
                        </div>

                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-1">
                            <Star className="w-3.5 h-3.5 fill-black dark:fill-white stroke-black dark:stroke-white" />
                            <span className="text-xs text-gray-700 dark:text-gray-300 font-medium">4.8</span>
                            <span className="text-xs text-gray-400">(1.2k reviews)</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5 text-gray-500" />
                            <span className="text-xs text-gray-500">{course.duration}</span>
                          </div>
                          {course.highDemand && (
                            <div className="flex items-center gap-1 ml-auto">
                              <Briefcase className="w-3.5 h-3.5" />
                              <span className="text-xs text-black dark:text-white font-medium">Placement</span>
                            </div>
                          )}
                        </div>

                        {/* Screen reader text */}
                        <span className="sr-only">
                          {course.description}
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12">
            <Link
              href="/coursecatalog"
              className="px-8 py-3.5 bg-black dark:bg-white text-white dark:text-black font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 inline-flex items-center gap-2 group shadow-lg"
              aria-label="View all tech training programs at Yelocode Systems with job placement"
            >
              <span>Explore Full Course Catalog</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
              Affordable pricing • Flexible schedules • Job placement assistance
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
  );
}