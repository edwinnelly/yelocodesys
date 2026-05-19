'use client'

import { useState } from 'react'
import { 
  Star, Award, MapPin, Calendar, ExternalLink,
  ChevronRight, Quote, Briefcase, GraduationCap,
  Heart, Lightbulb, Shield
} from 'lucide-react'
import Link from 'next/link'

export default function CorePrinciples() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const principles = [
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We embrace creativity and cutting-edge technology to design future ready solutions. Our curriculum evolves with industry trends to ensure you learn the most relevant skills in Port Harcourt, Nigeria.",
      image: "pics/db.jpg",
      imageAlt: "Innovation and technology at Yelocode Systems Port Harcourt",
      principleNumber: 1
    },
    {
      icon: Award,
      title: "Excellence Always",
      description: "We uphold the highest standards in everything we build, teach, and deliver. Our commitment to quality ensures you receive the best tech education and training in Rivers State, Nigeria.",
      image: "pics/40606.jpg",
      imageAlt: "Excellence in tech education at Yelocode Systems",
      principleNumber: 2
    },
    {
      icon: Shield,
      title: "Integrity & Trust",
      description: "We operate with transparency and honesty, building long lasting relationships with students and businesses across Port Harcourt. Your success is our success, and we're committed to your growth.",
      image: "pics/37243.jpg",
      imageAlt: "Integrity and trust at Yelocode Systems coding school",
      principleNumber: 3
    }
  ]

  // Structured data for the organization
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Yelocode Systems",
    "description": "Tech education and training company in Port Harcourt, Nigeria focused on innovation, excellence, and integrity.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "No. 11 Elekahia",
      "addressLocality": "Port Harcourt",
      "addressRegion": "Rivers State",
      "addressCountry": "NG"
    },
    "knowsAbout": [
      "Software Development",
      "Programming Education",
      "Tech Bootcamps",
      "Digital Skills Training"
    ],
    "ethicalStandard": "https://schema.org/ProfessionalService",
    "brand": {
      "@type": "Brand",
      "name": "Yelocode Systems",
      "slogan": "Empowerment Through Knowledge"
    }
  }

  return (
    <>
      <section 
        className="py-16 md:py-20 bg-white dark:bg-black"
        aria-label="Yelocode Systems core principles - Innovation, Excellence, and Integrity"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          {/* Section Header - SEO optimized */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-yellow-50 dark:bg-yellow-900/30 text-gray-600 dark:text-white text-sm font-medium px-4 py-2 rounded-full mb-4">
              <Heart className="w-4 h-4" />
              Our Core Values at Yelocode Systems
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3">
              Empowerment Through{' '}
              <span className="text-yellow-600 dark:text-yellow-400 bg-gradient-to-r from-yellow-600 to-yellow-500 bg-clip-text text-transparent">
                Knowledge
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4">
              At <strong className="text-gray-800 dark:text-gray-200">Yelocode Systems, Port Harcourt</strong>, 
              our principles guide everything we do — from training the next generation of tech talent 
              to delivering enterprise solutions across Nigeria.
            </p>
          </div>

          <div className="space-y-16 md:space-y-20">
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
                  <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Content Side */}
                    <div className={isEven ? "md:order-2" : "md:order-1"}>
                      <div className="inline-flex items-center gap-2 bg-yellow-50 dark:bg-yellow-900/30 text-gray-700 dark:text-gray-300 text-sm font-medium px-4 py-2 rounded-full mb-4">
                        <Icon className="w-4 h-4 text-yellow-600 dark:text-yellow-500" />
                        Principle {principle.principleNumber}
                      </div>
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        {principle.title}
                      </h3>
                      <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                        {principle.description}
                      </p>
                      
                      {/* Optional CTA for each principle */}
                      <Link 
                        href="/aboutus"
                        className="inline-flex items-center gap-2 text-yellow-600 dark:text-yellow-500 font-medium hover:gap-3 transition-all duration-300 group/link"
                        aria-label={`Learn more about ${principle.title} at Yelocode Systems`}
                      >
                        <span>Learn more about {principle.title.toLowerCase()}</span>
                        <ChevronRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                      </Link>

                      {/* Hidden SEO text */}
                      <span className="sr-only">
                        Yelocode Systems, located at No. 11 Elekahia, Port Harcourt, Rivers State, Nigeria, 
                        is committed to {principle.title.toLowerCase()}. Join our coding bootcamps and tech training programs.
                      </span>
                    </div>

                    {/* Image Side - Using regular img tag for static export */}
                    <div className={isEven ? "md:order-1" : "md:order-2"}>
                      <div className="relative group/image">
                        <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500/20 to-amber-500/20 rounded-2xl blur-xl opacity-0 group-hover/image:opacity-100 transition-opacity duration-500" />
                        <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                          <img
                            src={principle.image}
                            alt={principle.imageAlt}
                            className="w-full h-64 md:h-80 lg:h-96 object-cover transform group-hover/image:scale-105 transition-transform duration-500"
                            loading={index === 0 ? "eager" : "lazy"}
                          />
                          {/* Gradient overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Bottom CTA Section */}
          <div className="mt-16 md:mt-20 text-center bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 rounded-2xl p-8 md:p-12">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3">
              Ready to Start Your Tech Journey?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              Join thousands of successful graduates who have transformed their careers at 
              Yelocode Systems in Port Harcourt.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/education"
                className="inline-flex items-center gap-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
                aria-label="View our tech courses in Port Harcourt"
              >
                Explore Courses
                <ChevronRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-colors"
                aria-label="Contact Yelocode Systems at No. 11 Elekahia, Port Harcourt"
              >
                Contact Us
              </Link>
            </div>
          </div>
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