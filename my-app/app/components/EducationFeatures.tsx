'use client'

import { useState } from 'react'
import { 
  Star, Award, MapPin, Calendar, ExternalLink,
  ChevronRight, Quote, Briefcase, GraduationCap,
  Heart, Lightbulb, Shield, ArrowUpRight, Sparkles,
  Target, Zap
} from 'lucide-react'
import Link from 'next/link'

export default function CorePrinciples() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const principles = [
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We embrace creativity and cutting-edge technology to design future-ready solutions. Our curriculum evolves with industry trends to ensure you learn the most relevant skills at our IT training center in Port Harcourt, Nigeria.",
      image: "pics/boy.jpeg",
      imageAlt: "Innovation and technology at Yelocode Systems - best tech school in Port Harcourt",
      principleNumber: 1,
      tag: "Forward Thinking"
    },
    {
      icon: Award,
      title: "Excellence Always",
      description: "We uphold the highest standards in everything we build, teach, and deliver. Our commitment to quality ensures you receive the best tech education at our coding bootcamp in Port Harcourt, Rivers State, Nigeria.",
      image: "pics/uognna.jpeg",
      imageAlt: "Excellence in tech education at Yelocode Systems computer training school in Port Harcourt",
      principleNumber: 2,
      tag: "Quality Driven"
    },
    {
      icon: Shield,
      title: "Integrity & Trust",
      description: "We operate with transparency and honesty, building long-lasting relationships with students and businesses across Port Harcourt. Your success is our success, and we're committed to your growth with job placement support.",
      image: "pics/etim.jpeg",
      imageAlt: "Integrity and trust at Yelocode Systems affordable computer training center in PH",
      principleNumber: 3,
      tag: "Trusted Partner"
    }
  ]

  const stats = [
    { icon: GraduationCap, value: "8,000+", label: "Graduates Trained" },
    { icon: Target, value: "85%", label: "Job Placement Rate" },
    { icon: Zap, value: "10+", label: "Years Excellence" },
    { icon: Heart, value: "4.8", label: "Student Rating" },
  ]

  // Structured data for the organization
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Yelocode Systems",
    "description": "Best tech school and IT training center in Port Harcourt, Nigeria offering coding bootcamps, software engineering, cybersecurity, data analytics, and UI/UX design training with job placement support.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "No. 11 Elekahia",
      "addressLocality": "Port Harcourt",
      "addressRegion": "Rivers State",
      "addressCountry": "NG"
    },
    "knowsAbout": [
      "Software Engineering Academy in Port Harcourt",
      "Cybersecurity Training in Port Harcourt",
      "Data Analytics Training in Port Harcourt",
      "UI/UX Design Training in Port Harcourt",
      "Coding Bootcamp Port Harcourt",
      "Computer Training School in Port Harcourt"
    ],
    "brand": {
      "@type": "Brand",
      "name": "Yelocode Systems",
      "slogan": "Empowerment Through Knowledge"
    }
  }

  return (
    <>
      <section 
        className="relative py-24 md:py-32 bg-white dark:bg-black overflow-hidden"
        aria-label="Yelocode Systems core principles - best tech school in Port Harcourt"
      >
        {/* Background Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, black 1px, transparent 0)`,
            backgroundSize: "48px 48px",
          }}
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          {/* Section Header - SEO optimized */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            {/* Label */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-black dark:text-white text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Our Core Values
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white mb-6 leading-[1.1]">
              Empowerment Through{" "}
              <span className="relative inline-block">
                Knowledge
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
            </h2>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto">
              At{" "}
              <strong className="text-black dark:text-white font-semibold">
                Yelocode Systems
              </strong>
              , the{" "}
              <strong className="text-black dark:text-white font-semibold">
                best tech school in Port Harcourt
              </strong>
              , our principles guide everything we do — from training the next generation of tech talent 
              to delivering enterprise solutions across Nigeria.
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div key={index} className="text-center group">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 mb-3 group-hover:bg-black dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-black dark:text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {stat.label}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Principles */}
          <div className="space-y-24 md:space-y-32">
            {principles.map((principle, index) => {
              const Icon = principle.icon
              const isEven = index % 2 === 1

              return (
                <div 
                  key={index}
                  className="group"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
                    {/* Image Side */}
                    <div className={`${isEven ? "md:order-2" : "md:order-1"} relative`}>
                      <div className="relative overflow-hidden">
                        {/* Image */}
                        <img
                          src={principle.image}
                          alt={principle.imageAlt}
                          className="w-full h-72 md:h-80 lg:h-[28rem] object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                          loading={index === 0 ? "eager" : "lazy"}
                        />
                        
                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
                        
                        {/* Number overlay */}
                        <div className="absolute bottom-6 left-6">
                          <div className="text-8xl font-bold text-white/80 group-hover:text-white transition-colors duration-500">
                            {principle.principleNumber.toString().padStart(2, '0')}
                          </div>
                        </div>

                        {/* Tag badge */}
                        <div className="absolute top-6 left-6">
                          <span className="px-3 py-1.5 bg-white dark:bg-black text-black dark:text-white text-xs font-medium">
                            {principle.tag}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Content Side */}
                    <div className={isEven ? "md:order-1" : "md:order-2"}>
                      {/* Principle number */}
                      <div className="text-sm text-gray-400 dark:text-gray-600 mb-3 font-mono">
                        Principle {principle.principleNumber.toString().padStart(2, '0')}
                      </div>

                      {/* Icon */}
                      <div className="w-14 h-14 bg-black dark:bg-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-7 h-7 text-white dark:text-black" />
                      </div>

                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black dark:text-white mb-6 group-hover:translate-x-2 transition-transform duration-300">
                        {principle.title}
                      </h3>

                      <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                        {principle.description}
                      </p>

                      {/* Separator */}
                      <div className="w-16 h-px bg-gray-300 dark:bg-gray-700 mb-6" />

                      {/* CTA */}
                      <Link 
                        href="/aboutus"
                        className="inline-flex items-center gap-2 text-black dark:text-white font-semibold hover:gap-3 transition-all duration-300 group/link"
                        aria-label={`Learn more about ${principle.title} at Yelocode Systems - IT training center in Port Harcourt`}
                      >
                        <span>Learn more</span>
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                      </Link>

                      {/* Hidden SEO text */}
                      <span className="sr-only">
                        Yelocode Systems, an IT training center and coding bootcamp in Port Harcourt, Rivers State, Nigeria. 
                        We offer affordable computer training in PH with job placement support. 
                        Located at No. 11 Elekahia, Port Harcourt.
                      </span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* SEO Keywords Section */}
          <div className="mt-20 text-center">
            <p className="text-xs text-gray-400 dark:text-gray-600 max-w-3xl mx-auto leading-relaxed">
              <strong className="text-gray-500 dark:text-gray-500 font-medium">About Yelocode Systems:</strong>{" "}
              Best Tech School in Port Harcourt • Coding Bootcamp Port Harcourt • 
              IT Training Center in Port Harcourt • Computer Training School in Port Harcourt • 
              Software Engineering Academy in Port Harcourt • Cybersecurity Training in Port Harcourt • 
              Data Analytics Training in Port Harcourt • UI/UX Design Training Port Harcourt • 
              Tech Training in Port Harcourt with Job Placement • Affordable Computer Training Centers in PH
            </p>
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 md:mt-16 bg-black dark:bg-white text-white dark:text-black p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Start Your Tech Journey?
            </h3>
            <p className="text-gray-300 dark:text-gray-600 mb-8 max-w-xl mx-auto">
              Join thousands of successful graduates who have transformed their careers at the 
              best tech school in Port Harcourt.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/education"
                className="inline-flex items-center gap-2 bg-white dark:bg-black text-black dark:text-white px-8 py-3.5 font-semibold hover:bg-gray-100 dark:hover:bg-gray-900 transition-all duration-300 group"
                aria-label="Explore tech courses at Yelocode Systems coding bootcamp in Port Harcourt"
              >
                <span>Explore Courses</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border-2 border-white dark:border-black text-white dark:text-black px-8 py-3.5 font-semibold hover:bg-white/10 dark:hover:bg-black/10 transition-all duration-300"
                aria-label="Contact Yelocode Systems at No. 11 Elekahia, Port Harcourt"
              >
                <span>Contact Us</span>
              </Link>
            </div>
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
  )
}