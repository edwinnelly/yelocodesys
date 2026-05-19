"use client";

import { useEffect, useRef, useState } from "react";
import {
  Clock,
  Users,
  Target,
  BookOpen,
  Code,
  Zap,
  Award,
  TrendingUp,
  Star,
  Calendar,
  CheckCircle,
  GraduationCap,
  Database,
  Cloud,
  Palette,
  Sparkles,
  Shield,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from 'next/navigation'

const bootcamps = [
  {
    icon: Code,
    title: "Full Stack Development",
    duration: "40 hours",
    durationDetail: "8 weeks · 5 hrs/week",
    students: 234,
    rating: 4.9,
    level: "Beginner to Advanced",
    color: "bg-black",
    courses: [
      "HTML/CSS Fundamentals",
      "JavaScript Mastery",
      "React.js Development",
      "Node.js API Design",
      "Database Management",
      "Deployment & DevOps",
    ],
    skills: ["React", "Node.js", "MongoDB", "AWS"],
    certificate: "Industry-recognized",
    nextStart: "Starts June 15",
    price: "Free",
    features: ["Live mentoring", "Project-based", "Career support"],
    slug: "full-stack-development-bootcamp",
    description: "Become a full stack developer with our intensive 8-week bootcamp in Port Harcourt. Learn React, Node.js, and MongoDB.",
  },
  {
    icon: Database,
    title: "Data Science & AI",
    duration: "45 hours",
    durationDetail: "9 weeks · 5 hrs/week",
    students: 156,
    rating: 4.8,
    level: "Intermediate",
    color: "bg-black",
    courses: [
      "Python Programming",
      "Data Analysis with Pandas",
      "Machine Learning Basics",
      "Neural Networks",
      "NLP Fundamentals",
      "AI Ethics & Deployment",
    ],
    skills: ["Python", "TensorFlow", "Pandas", "Scikit-learn"],
    certificate: "IBM-accredited",
    nextStart: "Starts June 22",
    price: "Free",
    features: ["Industry projects", "Research papers", "AI lab access"],
    slug: "data-science-ai-bootcamp",
    description: "Master data science and artificial intelligence with hands-on projects and industry mentorship in Port Harcourt.",
  },
  {
    icon: Cloud,
    title: "Cloud Architecture",
    duration: "35 hours",
    durationDetail: "7 weeks · 5 hrs/week",
    students: 98,
    rating: 4.7,
    level: "Advanced",
    color: "bg-black",
    courses: [
      "AWS Fundamentals",
      "Serverless Computing",
      "Kubernetes Management",
      "DevOps Practices",
      "Infrastructure as Code",
      "Cloud Security",
    ],
    skills: ["AWS", "Docker", "K8s", "Terraform"],
    certificate: "AWS-aligned",
    nextStart: "Starts July 1",
    price: "Free",
    features: ["Cloud sandbox", "Cert prep", "Real-world scenarios"],
    slug: "cloud-architecture-bootcamp",
    description: "Learn cloud computing with AWS, Docker, and Kubernetes. Advanced bootcamp for IT professionals in Port Harcourt.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    duration: "30 hours",
    durationDetail: "6 weeks · 5 hrs/week",
    students: 187,
    rating: 4.9,
    level: "Beginner-friendly",
    color: "bg-black",
    courses: [
      "Design Fundamentals",
      "User Research Methods",
      "Wireframing & Prototyping",
      "Visual Design Principles",
      "Usability Testing",
      "Design Systems",
    ],
    skills: ["Figma", "Sketch", "Adobe XD", "Prototyping"],
    certificate: "Google-certified",
    nextStart: "Starts June 18",
    price: "Free",
    features: ["Portfolio review", "Design critiques", "Client project"],
    slug: "ui-ux-design-bootcamp",
    description: "Learn UI/UX design with Figma and create stunning user experiences. Beginner-friendly bootcamp in Port Harcourt.",
  },
];

export default function BootcampPrograms() {
  const [counts, setCounts] = useState(bootcamps.map(() => 0));
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const router = useRouter();

  const handleEnroll = (slug: string) => {
    router.push(`/bootcamps/${slug}`);
  };

  const handleDownloadGuide = () => {
    router.push('/bootcampsapply');
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          bootcamps.forEach((bootcamp, index) => {
            let start = 0;
            const end = bootcamp.students;
            const duration = 2000;
            const increment = end / (duration / 16);

            const timer = setInterval(() => {
              start += increment;
              if (start >= end) {
                setCounts((prev) => {
                  const newCounts = [...prev];
                  newCounts[index] = end;
                  return newCounts;
                });
                clearInterval(timer);
              } else {
                setCounts((prev) => {
                  const newCounts = [...prev];
                  newCounts[index] = Math.floor(start);
                  return newCounts;
                });
              }
            }, 16);
          });
        }
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Structured data for bootcamps
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": bootcamps.map((bootcamp, index) => ({
      "@type": "Course",
      "position": index + 1,
      "name": `${bootcamp.title} Bootcamp`,
      "description": bootcamp.description,
      "provider": {
        "@type": "Organization",
        "name": "Yelocode Systems",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Port Harcourt",
          "addressRegion": "Rivers State",
          "addressCountry": "NG"
        }
      },
      "hasCourseInstance": {
        "@type": "CourseInstance",
        "courseMode": "mixed",
        "location": {
          "@type": "Place",
          "name": "Yelocode Systems, Port Harcourt",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "No. 11 Elekahia",
            "addressLocality": "Port Harcourt",
            "addressRegion": "Rivers State",
            "addressCountry": "NG"
          }
        },
        "startDate": bootcamp.nextStart.replace("Starts ", ""),
        "duration": bootcamp.durationDetail,
        "courseWorkload": bootcamp.duration
      },
      "occupationalCredentialAwarded": bootcamp.certificate,
      "teaches": bootcamp.skills,
      "educationalLevel": bootcamp.level
    }))
  };

  return (
    <>
      <section
        id="bootcamps"
        ref={sectionRef}
        className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-br from-gray-50 to-white"
        aria-label="Professional tech bootcamps at Yelocode Systems Port Harcourt"
      >
        {/* Clean background with subtle pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #75730d 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
          aria-hidden="true"
        />

        {/* Soft gradient orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-yellow-200/20 rounded-full blur-3xl" aria-hidden="true" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl" aria-hidden="true" />

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          {/* Section header - SEO optimized */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-yellow-50 border border-blue-100 text-black text-sm font-medium px-4 py-2 rounded-full mb-6">
              Intensive Programs in Port Harcourt
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Professional{" "}
              <span className="bg-gradient-to-r from-gray-600 to-yellow-600 bg-clip-text text-transparent">
                Tech Bootcamps
              </span>
              <span className="text-gray-900"> in Port Harcourt</span>
            </h2>

            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Accelerate your tech career with our intensive, mentor-led programs at{" "}
              <strong className="text-gray-800">Yelocode Systems</strong>. 
              Designed to make you job-ready in Nigeria's growing tech industry.
            </p>
          </div>

          {/* Stats row - Social proof */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-12">
            {[
              { label: "Tech Programs", value: "4", icon: BookOpen },
              { label: "Graduates", value: "1,675+", icon: Users },
              { label: "Placement Rate", value: "72%", icon: Target },
              { label: "Job Placement", value: "$25k+", icon: TrendingUp },
            ].map((metric, index) => {
              const Icon = metric.icon;
              return (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {metric.value}
                  </div>
                  <div className="flex items-center justify-center gap-1 text-xs text-gray-500">
                    <Icon className="w-3 h-3" />
                    {metric.label}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bootcamps grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bootcamps.map((bootcamp, index) => {
              const Icon = bootcamp.icon;
              const isHovered = hoveredIndex === index;
              const isExpanded = expandedIndex === index;

              return (
                <div
                  key={index}
                  className="group relative"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Card */}
                  <div className="relative bg-white border border-gray-200 rounded-2xl p-6 hover:border-blue-200 hover:shadow-xl transition-all duration-300">
                    {/* Popular badge */}
                    {index === 0 && (
                      <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-600 to-gray-600 text-white text-xs font-medium px-3 py-1.5 rounded-full shadow-lg z-10">
                        Most Popular in Port Harcourt
                      </div>
                    )}

                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      {/* Icon */}
                      <div
                        className={`w-12 h-12 bg-gradient-to-br ${bootcamp.color} rounded-xl flex items-center justify-center shadow-md`}
                        aria-hidden="true"
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>

                      {/* Rating */}
                      <div className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded-lg">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs font-semibold text-gray-900">
                          {bootcamp.rating}
                        </span>
                        <span className="text-xs text-gray-400">(1.2k reviews)</span>
                      </div>
                    </div>

                    {/* Title and meta */}
                    <div className="mb-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {bootcamp.title} Bootcamp
                      </h3>

                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex items-center gap-1 text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-md">
                          <Clock className="w-3 h-3" />
                          {bootcamp.duration}
                        </div>
                        <div className="text-xs text-gray-400">
                          {bootcamp.durationDetail}
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-xs bg-blue-50 text-yellow-600 px-2 py-1 rounded-md">
                          {bootcamp.level}
                        </span>
                        <span className="text-xs text-gray-500 flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          {counts[index]}+ students enrolled
                        </span>
                      </div>
                    </div>

                    {/* Price and start date */}
                    <div className="bg-gray-50 rounded-xl p-3 mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-gray-500">Program fee</span>
                        <span className="text-xl font-bold text-gray-900">
                          {bootcamp.price}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-600">
                        <Calendar className="w-3 h-3 text-yellow-600" />
                        <span>{bootcamp.nextStart}</span>
                      </div>
                    </div>

                    {/* Key features */}
                    <div className="mb-3">
                      <div className="flex flex-wrap gap-1.5">
                        {bootcamp.features.map((feature, i) => (
                          <span
                            key={i}
                            className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-md"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Skills */}
                    <div className="mb-3">
                      <div className="flex flex-wrap gap-1.5">
                        {bootcamp.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Certificate */}
                    <div className="flex items-center gap-1 mb-4 text-xs text-gray-500">
                      <Shield className="w-3 h-3" />
                      <span>Certificate: {bootcamp.certificate}</span>
                    </div>

                    {/* Hidden SEO text */}
                    <span className="sr-only">
                      {bootcamp.description} Located at No. 11 Elekahia, Port Harcourt, Rivers State, Nigeria.
                    </span>

                    {/* CTA */}
                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                      <button
                        onClick={() => setExpandedIndex(isExpanded ? null : index)}
                        className="text-xs text-gray-500 hover:text-gray-700 transition-colors flex items-center gap-1"
                        aria-label={`View ${bootcamp.title} curriculum`}
                      >
                        <BookOpen className="w-3 h-3" />
                        View Curriculum
                      </button>

                      <button 
                        onClick={() => handleEnroll(bootcamp.slug)}
                        className="text-sm font-medium text-yellow-600 hover:text-yellow-700 transition-colors flex items-center gap-1"
                        aria-label={`Enroll in ${bootcamp.title} bootcamp at Yelocode Systems`}
                      >
                        <span>Enroll Now</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Expanded curriculum */}
                  {isExpanded && (
                    <div className="absolute left-0 right-0 mt-2 p-4 bg-white border border-gray-200 rounded-xl shadow-xl z-20">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-sm font-semibold text-gray-900">
                          {bootcamp.title} Curriculum
                        </h4>
                        <button
                          onClick={() => setExpandedIndex(null)}
                          className="text-xs text-gray-400 hover:text-gray-600"
                          aria-label="Close curriculum"
                        >
                          Close
                        </button>
                      </div>
                      <div className="space-y-2 max-h-60 overflow-y-auto">
                        {bootcamp.courses.map((course, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs">
                            <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-600">{course}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <Link
              href="/bootcampsapply"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-yellow-600 to-gray-600 text-white px-8 py-4 rounded-full font-medium hover:shadow-xl transition-all"
              aria-label="Download free bootcamp program guide from Yelocode Systems"
            >
              <span>Download Free Program Guide</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <p className="text-sm text-gray-500 mt-4">
              Next cohort starts June 15, 2026 · Limited to 25 students per program in Port Harcourt
            </p>
          </div>

          {/* Decorative element */}
          <div className="mt-20 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" aria-hidden="true" />
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