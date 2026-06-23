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
  ArrowUpRight,
  Briefcase,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from 'next/navigation'

const bootcamps = [
  {
    icon: Code,
    title: "Software Engineering",
    duration: "40 hours",
    durationDetail: "8 weeks · 5 hrs/week",
    students: 234,
    rating: 4.9,
    level: "Beginner to Advanced",
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
    slug: "software-engineering-bootcamp",
    description: "Join our software engineering academy in Port Harcourt. Master full-stack development with React, Node.js, and MongoDB with job placement support.",
    tag: "Most Popular",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    duration: "35 hours",
    durationDetail: "7 weeks · 5 hrs/week",
    students: 156,
    rating: 4.8,
    level: "Intermediate",
    courses: [
      "Network Security Basics",
      "Ethical Hacking",
      "Security Operations",
      "Incident Response",
      "Vulnerability Assessment",
      "Security Compliance",
    ],
    skills: ["Kali Linux", "Wireshark", "Metasploit", "SIEM"],
    certificate: "CompTIA-aligned",
    nextStart: "Starts June 22",
    price: "Free",
    features: ["Cyber lab access", "Real attacks", "Cert prep"],
    slug: "cybersecurity-bootcamp",
    description: "Get cybersecurity training in Port Harcourt with hands-on labs. Learn ethical hacking, network defense, and security operations.",
    tag: "High Demand",
  },
  {
    icon: Database,
    title: "Data Analytics",
    duration: "45 hours",
    durationDetail: "9 weeks · 5 hrs/week",
    students: 198,
    rating: 4.8,
    level: "Beginner to Intermediate",
    courses: [
      "Python Programming",
      "Data Analysis with Pandas",
      "SQL for Analytics",
      "Power BI & Tableau",
      "Statistical Analysis",
      "Business Intelligence",
    ],
    skills: ["Python", "SQL", "Power BI", "Excel"],
    certificate: "Industry-recognized",
    nextStart: "Starts July 1",
    price: "Free",
    features: ["Industry projects", "Datasets", "BI tools"],
    slug: "data-analytics-bootcamp",
    description: "Master data analytics training in Port Harcourt. Learn Python, SQL, Power BI, and Excel for business intelligence and decision-making.",
    tag: "Trending",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    duration: "30 hours",
    durationDetail: "6 weeks · 5 hrs/week",
    students: 187,
    rating: 4.9,
    level: "Beginner-friendly",
    courses: [
      "Design Fundamentals",
      "User Research Methods",
      "Wireframing & Prototyping",
      "Visual Design Principles",
      "Usability Testing",
      "Design Systems",
    ],
    skills: ["Figma", "Sketch", "Adobe XD", "Prototyping"],
    certificate: "Google-aligned",
    nextStart: "Starts June 18",
    price: "Free",
    features: ["Portfolio review", "Design critiques", "Client project"],
    slug: "ui-ux-design-bootcamp",
    description: "Learn UI/UX design training in Port Harcourt with Figma. Create stunning user experiences with hands-on projects and portfolio building.",
    tag: "Creative",
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

  // Structured data for bootcamps with SEO keywords
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": bootcamps.map((bootcamp, index) => ({
      "@type": "Course",
      "position": index + 1,
      "name": `${bootcamp.title} Bootcamp in Port Harcourt`,
      "description": bootcamp.description,
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
      "hasCourseInstance": {
        "@type": "CourseInstance",
        "courseMode": "onsite",
        "location": {
          "@type": "Place",
          "name": "Yelocode Systems - IT Training Center in Port Harcourt",
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
      "educationalLevel": bootcamp.level,
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "NGN",
        "category": "Free"
      }
    }))
  };

  return (
    <>
      <section
        id="bootcamps"
        ref={sectionRef}
        className="relative py-24 md:py-32 bg-white dark:bg-black overflow-hidden"
        aria-label="Best coding bootcamp in Port Harcourt - Yelocode Systems"
      >
        {/* Clean background with subtle dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, black 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
          aria-hidden="true"
        />

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          {/* Section header - SEO optimized */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            {/* Label */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-black dark:text-white text-sm font-medium rounded-full mb-6">
              {/* <Sparkles className="w-4 h-4" /> */}
              Intensive Programs in Port Harcourt
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white mb-6 leading-[1.1]">
              Professional{" "}
              <span className="relative inline-block">
                Tech Bootcamps
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
                    className="text-gray-300 dark:text-gray-700"
                  />
                </svg>
              </span>
              {" "}in Port Harcourt
            </h2>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto">
              Accelerate your tech career at the{" "}
              <strong className="text-black dark:text-white font-semibold">
                best tech school in Port Harcourt
              </strong>
              . Our intensive bootcamps offer{" "}
              <strong className="text-black dark:text-white font-semibold">
                tech training with job placement
              </strong>{" "}
              at the most{" "}
              <strong className="text-black dark:text-white font-semibold">
                affordable computer training center in PH
              </strong>.
            </p>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-16">
            {[
              { label: "Tech Programs", value: "4", icon: BookOpen },
              { label: "Graduates", value: "1,675+", icon: GraduationCap },
              { label: "Placement Rate", value: "85%", icon: Briefcase },
              { label: "Avg. Salary Boost", value: "2.5x", icon: TrendingUp },
            ].map((metric, index) => {
              const Icon = metric.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 mb-3 group-hover:bg-black dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-black dark:text-white mb-1">
                    {metric.value}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
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
              const isExpanded = expandedIndex === index;

              return (
                <div
                  key={index}
                  className="group relative"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Card */}
                  <div className="relative bg-white dark:bg-black border border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white p-6 transition-all duration-500">
                    {/* Tag badge */}
                    {bootcamp.tag && (
                      <div className="absolute -top-3 -right-3 bg-black dark:bg-white text-white dark:text-black text-xs font-medium px-3 py-1.5 z-10">
                        {bootcamp.tag}
                      </div>
                    )}

                    {/* Header */}
                    <div className="flex items-start justify-between mb-5">
                      {/* Icon */}
                      <div className="w-12 h-12 bg-black dark:bg-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-white dark:text-black" />
                      </div>

                      {/* Rating */}
                      <div className="flex items-center gap-1 bg-gray-100 dark:bg-gray-900 px-2.5 py-1.5">
                        <Star className="w-3.5 h-3.5 fill-black dark:fill-white stroke-black dark:stroke-white" />
                        <span className="text-xs font-semibold text-black dark:text-white">
                          {bootcamp.rating}
                        </span>
                        <span className="text-xs text-gray-400">(1.2k)</span>
                      </div>
                    </div>

                    {/* Title and meta */}
                    <div className="mb-5">
                      <h3 className="text-lg font-bold text-black dark:text-white mb-3 group-hover:translate-x-1 transition-transform duration-300">
                        {bootcamp.title}
                      </h3>

                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-900 px-2.5 py-1.5">
                          <Clock className="w-3.5 h-3.5" />
                          {bootcamp.duration}
                        </div>
                        <span className="text-xs text-gray-400">
                          {bootcamp.durationDetail}
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-xs bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 px-2.5 py-1 font-medium">
                          {bootcamp.level}
                        </span>
                        <span className="text-xs text-gray-500 flex items-center gap-1.5">
                          <Users className="w-3.5 h-3.5" />
                          {counts[index]}+ enrolled
                        </span>
                      </div>
                    </div>

                    {/* Price and start date */}
                    <div className="bg-gray-50 dark:bg-gray-950 border border-gray-100 dark:border-gray-900 p-4 mb-5">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-gray-500 dark:text-gray-400">Program fee</span>
                        <span className="text-xl font-bold text-black dark:text-white">
                          {bootcamp.price}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{bootcamp.nextStart}</span>
                      </div>
                    </div>

                    {/* Key features */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1.5">
                        {bootcamp.features.map((feature, i) => (
                          <span
                            key={i}
                            className="text-xs bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 px-2.5 py-1.5 border border-gray-200 dark:border-gray-800"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Skills */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1.5">
                        {bootcamp.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="text-xs bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400 px-2 py-1 font-mono border border-gray-200 dark:border-gray-800"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Certificate */}
                    <div className="flex items-center gap-1.5 mb-5 text-xs text-gray-500 dark:text-gray-400">
                      <Shield className="w-3.5 h-3.5" />
                      <span>{bootcamp.certificate}</span>
                    </div>

                    {/* Hidden SEO text */}
                    <span className="sr-only">
                      {bootcamp.description} Located at No. 11 Elekahia, Port Harcourt, Rivers State, Nigeria. Affordable computer training in PH with job placement.
                    </span>

                    {/* CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-800">
                      <button
                        onClick={() => setExpandedIndex(isExpanded ? null : index)}
                        className="text-xs text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors flex items-center gap-1.5"
                        aria-label={`View ${bootcamp.title} curriculum`}
                      >
                        <BookOpen className="w-3.5 h-3.5" />
                        Curriculum
                      </button>

                      <button 
                        onClick={() => handleEnroll(bootcamp.slug)}
                        className="text-sm font-semibold text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors flex items-center gap-1.5 group/btn"
                        aria-label={`Enroll in ${bootcamp.title} bootcamp at Yelocode Systems coding bootcamp in Port Harcourt`}
                      >
                        <span>Enroll Now</span>
                        <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </button>
                    </div>
                  </div>

                  {/* Expanded curriculum */}
                  {isExpanded && (
                    <div className="absolute left-0 right-0 mt-2 p-5 bg-white dark:bg-black border-2 border-black dark:border-white shadow-2xl z-20">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-sm font-bold text-black dark:text-white">
                          {bootcamp.title} Curriculum
                        </h4>
                        <button
                          onClick={() => setExpandedIndex(null)}
                          className="text-xs text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                          aria-label="Close curriculum"
                        >
                          Close
                        </button>
                      </div>
                      <div className="space-y-2.5 max-h-60 overflow-y-auto">
                        {bootcamp.courses.map((course, i) => (
                          <div key={i} className="flex items-start gap-2.5 text-sm">
                            <CheckCircle className="w-4 h-4 text-black dark:text-white flex-shrink-0 mt-0.5" />
                            <span className="text-gray-600 dark:text-gray-400">{course}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* SEO Keywords Section */}
          <div className="mt-12 text-center">
            <p className="text-xs text-gray-400 dark:text-gray-600 max-w-3xl mx-auto leading-relaxed">
              <strong className="text-gray-500 dark:text-gray-500 font-medium">Training Programs:</strong>{" "}
              Software Engineering Academy in Port Harcourt • Cybersecurity Training in Port Harcourt • 
              Data Analytics Training in Port Harcourt • UI/UX Design Training in Port Harcourt • 
              Coding Bootcamp Port Harcourt • Computer Training School in Port Harcourt
            </p>
          </div>

          {/* Bottom CTA */}
          <div className="mt-10 text-center">
            <Link
              href="/bootcampsapply"
              className="group inline-flex items-center gap-3 bg-black dark:bg-white text-white dark:text-black px-8 py-4 font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300"
              aria-label="Download free bootcamp program guide from Yelocode Systems - IT training center in Port Harcourt"
            >
              <span>Download Free Program Guide</span>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
              Next cohort starts June 15, 2026 · Limited seats at our IT training center in Port Harcourt
            </p>
          </div>

          {/* Divider */}
          <div className="mt-20 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent" aria-hidden="true" />
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