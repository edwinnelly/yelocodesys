"use client";

import { useState } from 'react'
import { 
  Search, ChevronDown, ChevronRight, HelpCircle, BookOpen, 
  CreditCard, Users, Calendar, Award, FileText, MessageCircle,
  GraduationCap, Briefcase, Clock, Globe, Shield, Star,
  Mail, Phone, MapPin, ExternalLink, Check, X
} from 'lucide-react'

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [openCategories, setOpenCategories] = useState<string[]>([])
  const [openFaqs, setOpenFaqs] = useState<number[]>([])

  const toggleCategory = (categoryName: string) => {
    setOpenCategories(prev =>
      prev.includes(categoryName)
        ? prev.filter(name => name !== categoryName)
        : [...prev, categoryName]
    )
  }

  const toggleFaq = (index: number) => {
    setOpenFaqs(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  const faqCategories = [
    {
      name: 'General Questions',
      icon: HelpCircle,
      color: 'from-yellow-600 to-yellow-400',
      faqs: [
        {
          question: 'What is Yelocode Systems?',
          answer: 'Yelocode Systems is a technology training institute based in Port Harcourt, Nigeria. We offer intensive bootcamps and professional courses in web development, data science, cybersecurity, cloud computing, and other tech fields. Our mission is to transform beginners into skilled tech professionals through hands-on training and mentorship.'
        },
        {
          question: 'Where is Yelocode Systems located?',
          answer: 'We are located at 25 Aba Road, Port Harcourt, Rivers State, Nigeria. Our campus is easily accessible and equipped with modern facilities including computer labs, collaboration spaces, and high-speed internet.'
        },
        {
          question: 'What are your office hours?',
          answer: 'Our office hours are:\n\n• Monday - Friday: 9:00 AM - 6:00 PM\n• Saturday: 10:00 AM - 4:00 PM\n• Sunday: Closed\n\nWe also offer virtual consultations outside these hours by appointment.'
        },
        {
          question: 'Do you offer online courses or only in-person?',
          answer: 'We offer both in-person and hybrid learning options. Our hybrid programs combine the best of both worlds - you can attend classes virtually or in-person, with all materials and recordings available online. Some programs are also available fully online with live instructor sessions.'
        },
        {
          question: 'Is Yelocode Systems accredited?',
          answer: 'Yes, our programs are developed in alignment with industry standards and many lead to globally recognized certifications. We partner with organizations like AWS, Google, Microsoft, and CompTIA to ensure our curriculum meets certification requirements.'
        }
      ]
    },
    {
      name: 'Programs & Courses',
      icon: BookOpen,
      color: 'from-yellow-600 to-yellow-400',
      faqs: [
        {
          question: 'What programs do you offer?',
          answer: 'We offer a wide range of technology programs including:\n\n• Web Development (Frontend, Backend, Full Stack)\n• Data Science & AI\n• Python Programming\n• Cloud Computing (AWS, Azure, GCP)\n• Cybersecurity\n• UI/UX Design\n• Mobile App Development\n• Digital Marketing\n• Database Management\n\nEach program has multiple tiers: NOVA PRIME (beginner), AXIS IGNITE (intermediate), and QUANTA ELITE (advanced).'
        },
        {
          question: 'How long are the programs?',
          answer: 'Program duration varies by level:\n\n• NOVA PRIME: 2-3 months\n• AXIS IGNITE: 4-6 months\n• QUANTA ELITE: 7-12 months\n\nEach program is designed to be completed within these timeframes with consistent effort.'
        },
        {
          question: 'What is the difference between NOVA PRIME, AXIS IGNITE, and QUANTA ELITE?',
          answer: '• NOVA PRIME: Entry-level programs for beginners with no prior experience. Focus on fundamentals and basic skills.\n\n• AXIS IGNITE: Intermediate programs for those with some knowledge. Dive deeper into specialized areas with real-world projects.\n\n• QUANTA ELITE: Advanced programs for experienced professionals. Master complex concepts, leadership skills, and prepare for senior roles.'
        },
        {
          question: 'Do I need prior experience to enroll?',
          answer: 'For NOVA PRIME programs, no prior experience is required - they are designed for absolute beginners. AXIS IGNITE and QUANTA ELITE programs build upon skills from earlier levels or require equivalent experience. You can also take a skills assessment to determine the right level for you.'
        },
        {
          question: 'How many projects will I build during the program?',
          answer: 'The number of projects varies by program:\n\n• NOVA PRIME: 5-15 projects\n• AXIS IGNITE: 15-30 projects\n• QUANTA ELITE: 30-60 projects\n\nAll projects are real-world applications that you can add to your portfolio.'
        }
      ]
    },
    {
      name: 'Admissions & Enrollment',
      icon: Users,
      color: 'from-yellow-600 to-yellow-400',
      faqs: [
        {
          question: 'How do I enroll in a program?',
          answer: 'To enroll:\n\n1. Visit our Programs page and select your desired course\n2. Click "Enroll Now" and fill out the application form\n3. Our admissions team will contact you within 24 hours\n4. Complete a brief interview/skills assessment (if required)\n5. Receive your admission letter and payment invoice\n6. Complete payment to secure your spot\n\nYou can also visit our campus or call us for assistance with enrollment.'
        },
        {
          question: 'What are the admission requirements?',
          answer: 'For NOVA PRIME programs, requirements are minimal:\n\n• Basic computer literacy\n• Access to a computer/laptop\n• Reliable internet connection\n• Commitment to learning\n\nFor AXIS IGNITE and QUANTA ELITE, you may need:\n\n• Completion of prerequisite programs\n• Relevant work experience\n• Passing a skills assessment\n• Portfolio of previous work'
        },
        {
          question: 'When do programs start?',
          answer: 'We have multiple cohorts throughout the year:\n\n• January (Winter Cohort)\n• April (Spring Cohort)\n• July (Summer Cohort)\n• October (Fall Cohort)\n\nSpecific start dates are announced 2-3 months in advance. Check our website or contact admissions for the next start date.'
        },
        {
          question: 'Is there an application deadline?',
          answer: 'Yes, applications close 2 weeks before each cohort start date. However, popular programs may fill up earlier, so we recommend applying as early as possible. Late applications may be considered for the next cohort.'
        },
        {
          question: 'Can I transfer my enrollment to another person?',
          answer: 'Enrollment is non-transferable. However, if you cannot attend, you may defer to the next cohort or request a refund according to our cancellation policy.'
        }
      ]
    },
    {
      name: 'Tuition & Payment',
      icon: CreditCard,
      color: 'from-yellow-600 to-yellow-400',
      faqs: [
        {
          question: 'How much do programs cost?',
          answer: 'Program costs vary by program and tier:\n\n• NOVA PRIME: ₦120,000 - ₦420,000\n• AXIS IGNITE: ₦250,000 - ₦1.4M\n• QUANTA ELITE: ₦850,000 - ₦1.5M\n\nFull pricing details are available on our Programs page or by contacting admissions.'
        },
        {
          question: 'Do you offer payment plans?',
          answer: 'Yes! We offer flexible payment options:\n\n• Full upfront payment (with discount)\n• 3-month installment plan\n• 6-month installment plan\n• Corporate sponsorship billing\n\nContact our admissions team to discuss the best option for your situation.'
        },
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept multiple payment methods:\n\n• Bank transfers (local and international)\n• Debit/Credit cards (Visa, Mastercard)\n• USSD payments\n• Mobile money\n• Cryptocurrency (Bitcoin, Ethereum)\n• Corporate invoices\n\nAll payments are processed securely.'
        },
        {
          question: 'Do you offer scholarships or financial aid?',
          answer: 'Yes, we offer limited scholarships for:\n\n• Outstanding academic achievement\n• Women in tech\n• Underrepresented groups\n• Economic hardship\n\nScholarship applications are reviewed on a case-by-case basis. Contact admissions for more information and application deadlines.'
        },
        {
          question: 'What is your refund policy?',
          answer: 'Our refund policy is as follows:\n\n• 100% refund within 7 days of payment (before course start)\n• 75% refund up to 2 weeks before course start\n• 50% refund up to 1 week before course start\n• No refunds after course begins\n\nRefunds are processed within 10-14 business days.'
        }
      ]
    },
    {
      name: 'Learning Experience',
      icon: GraduationCap,
      color: 'from-yellow-600 to-yellow-400',
      faqs: [
        {
          question: 'What is the class size?',
          answer: 'We maintain small class sizes to ensure personalized attention:\n\n• In-person classes: 15-20 students\n• Virtual classes: 12-15 students\n\nThis allows instructors to provide individual support and fosters collaborative learning.'
        },
        {
          question: 'Who are the instructors?',
          answer: 'Our instructors are industry professionals with years of experience in their fields. They include:\n\n• Senior developers from tech companies\n• Certified cloud architects\n• Data scientists with research backgrounds\n• Cybersecurity experts\n• UX/UI designers from leading agencies\n\nMany continue to work in the industry, bringing real-world insights to the classroom.'
        },
        {
          question: 'Do you provide mentorship?',
          answer: 'Yes! All programs include mentorship:\n\n• NOVA PRIME: Group mentorship sessions\n• AXIS IGNITE: Regular 1-on-1 mentorship\n• QUANTA ELITE: Dedicated industry mentor\n\nMentors provide guidance on projects, career advice, and help you navigate your learning journey.'
        },
        {
          question: 'What learning materials are provided?',
          answer: 'Students receive comprehensive learning materials:\n\n• Digital textbooks and guides\n• Video tutorials and recorded sessions\n• Code repositories and templates\n• Project briefs and case studies\n• Practice exercises and quizzes\n• Access to our online learning platform\n• Supplementary resources and tools'
        },
        {
          question: 'Can I access course materials after completion?',
          answer: 'Yes! All students get lifetime access to course materials, including updates. You can revisit lessons, download resources, and stay current with new developments in your field.'
        }
      ]
    },
    {
      name: 'Career Support',
      icon: Briefcase,
      color: 'from-yellow-600 to-yellow-400',
      faqs: [
        {
          question: 'Do you offer job placement assistance?',
          answer: 'Yes, we provide comprehensive career support:\n\n• Resume and portfolio reviews\n• LinkedIn profile optimization\n• Mock interviews with industry professionals\n• Job search strategy sessions\n• Access to our exclusive job board\n• Networking events with hiring partners\n• Alumni community access\n\nAXIS IGNITE and QUANTA ELITE programs include enhanced placement services.'
        },
        {
          question: 'What companies hire your graduates?',
          answer: 'Our graduates work at companies including:\n\n• Tech giants: Google, Microsoft, AWS\n• Nigerian banks and fintech companies\n• International consulting firms\n• Local startups and tech hubs\n• E-commerce platforms\n• Government agencies\n• And many more across various industries'
        },
        {
          question: 'What is your job placement rate?',
          answer: 'We maintain a strong placement record:\n\n• Overall placement rate: 92% within 6 months\n• QUANTA ELITE: 98% placement\n• AXIS IGNITE: 94% placement\n• NOVA PRIME: 88% placement\n\nMany graduates also pursue freelance careers or start their own businesses.'
        },
        {
          question: 'Do you help with interview preparation?',
          answer: 'Absolutely! Our career support includes:\n\n• Technical interview practice sessions\n• Behavioral interview coaching\n• Whiteboard coding practice\n• System design workshops\n• Salary negotiation guidance\n• Portfolio presentation practice\n\nWe conduct mock interviews with feedback to build your confidence.'
        },
        {
          question: 'Can I get help building my portfolio?',
          answer: 'Yes, portfolio development is integrated into all our programs. You\'ll receive:\n\n• Guidance on selecting projects\n• Code reviews and feedback\n• Design critiques (for UX/UI students)\n• Help documenting your process\n• Tips for showcasing work on GitHub, Behance, etc.\n• Portfolio review sessions with instructors'
        }
      ]
    },
    {
      name: 'Certification',
      icon: Award,
      color: 'from-yellow-600 to-yellow-400',
      faqs: [
        {
          question: 'What certification will I receive?',
          answer: 'Upon successful completion, you receive:\n\n• Yelocode Systems Certificate of Completion\n• Digital badge for LinkedIn and social media\n• Detailed transcript of skills acquired\n• Letter of recommendation (for top performers)\n\nMany programs also prepare you for industry certifications like AWS, Google, Microsoft, CompTIA, and more.'
        },
        {
          question: 'Are your certificates recognized by employers?',
          answer: 'Yes, our certificates are recognized by employers in Nigeria and internationally. Our curriculum is designed in consultation with industry partners to ensure you learn skills that are in high demand. Many of our graduates use their certificates to demonstrate their capabilities during job interviews.'
        },
        {
          question: 'Do you offer exam preparation for industry certifications?',
          answer: 'Yes, many programs include preparation for industry certifications:\n\n• AWS Certified Cloud Practitioner\n• AWS Solutions Architect\n• Microsoft Azure Fundamentals\n• Google Cloud Associate\n• CompTIA Security+\n• CEH (Certified Ethical Hacker)\n• OSCP\n• And more\n\nWe provide study materials, practice exams, and exam vouchers at discounted rates.'
        }
      ]
    },
    {
      name: 'Facilities & Resources',
      icon: Globe,
      color: 'from-yellow-600 to-yellow-400',
      faqs: [
        {
          question: 'What facilities do you have on campus?',
          answer: 'Our Port Harcourt campus features:\n\n• Modern computer labs with high-performance systems\n• High-speed internet (1Gbps fiber)\n• Collaborative workspaces\n• Quiet study areas\n• Project rooms\n• Lounge area with refreshments\n• Library with technical resources\n• Parking for students and visitors'
        },
        {
          question: 'Do I need my own laptop?',
          answer: 'Yes, students are required to have their own laptop for the program. Minimum specifications:\n\n• 8GB RAM (16GB recommended)\n• 256GB SSD\n• Core i5 or equivalent\n• Windows 10/11 or macOS\n• Webcam and microphone\n\nIf you need assistance purchasing a laptop, we can provide recommendations and vendor contacts.'
        },
        {
          question: 'What software and tools will I use?',
          answer: 'You\'ll use industry-standard tools including:\n\n• Development: VS Code, Git, Docker\n• Design: Figma, Adobe XD, Photoshop\n• Data: Python, Jupyter, Tableau\n• Cloud: AWS Console, Azure Portal\n• Collaboration: Slack, Zoom, Trello\n• And many more specific to your program\n\nWe provide access to student licenses and free tiers where applicable.'
        }
      ]
    },
    {
      name: 'Support Services',
      icon: MessageCircle,
      color: 'from-yellow-600 to-yellow-400',
      faqs: [
        {
          question: 'What kind of student support do you offer?',
          answer: 'We provide comprehensive student support:\n\n• Academic advising\n• Technical support\n• Career counseling\n• Mental health resources\n• Peer tutoring\n• Disability accommodations\n• Emergency assistance\n\nOur student success team is available during office hours and by appointment.'
        },
        {
          question: 'What if I miss a class?',
          answer: 'If you miss a class:\n\n• Recordings are available within 24 hours\n• Materials are accessible online\n• You can schedule a catch-up session with the instructor\n• Join the next cohort\'s session (if available)\n• Get notes from classmates\n\nWe understand that life happens and work with you to stay on track.'
        },
        {
          question: 'Is there a community for students and alumni?',
          answer: 'Yes! We have a vibrant community including:\n\n• Slack/Discord channels for each cohort\n• Alumni network on LinkedIn\n• Regular meetups and networking events\n• Guest speaker sessions\n• Hackathons and project showcases\n• Mentorship opportunities\n• Job referral network'
        }
      ]
    }
  ]

  const filteredCategories = faqCategories.map(category => ({
    ...category,
    faqs: category.faqs.filter(faq =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.faqs.length > 0)

  const totalFaqs = faqCategories.reduce((acc, category) => acc + category.faqs.length, 0)

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      
      {/* HERO SECTION */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-br from-gray-900 to-gray-950 text-white">
        <div className="absolute inset-0 opacity-10">
          {/* <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} /> */}
        </div>
        
        <div className="absolute top-20 left-10 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-300/20 rounded-full blur-3xl animate-pulse animation-delay-2000" />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium px-4 py-2 rounded-full mb-6">
              <HelpCircle className="w-4 h-4" />
              Frequently Asked Questions
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              How Can We{' '}
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">
                Help You?
              </span>
            </h1>
            
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-10">
              Find answers to common questions about our programs, enrollment, payment, career support, and more.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for questions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition pl-14"
                />
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 mt-12">
              <div>
                <div className="text-3xl font-bold">{totalFaqs}+</div>
                <div className="text-sm text-gray-400">Questions</div>
              </div>
              <div>
                <div className="text-3xl font-bold">{faqCategories.length}</div>
                <div className="text-sm text-gray-400">Categories</div>
              </div>
              <div>
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-sm text-gray-400">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK LINKS */}
      <section className="py-12 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex flex-wrap justify-center gap-3">
            {faqCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <button
                  key={index}
                  onClick={() => {
                    const element = document.getElementById(`category-${index}`)
                    element?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full hover:bg-yellow-100 dark:hover:bg-yellow-900/30 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{category.name}</span>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ CATEGORIES */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          {filteredCategories.length > 0 ? (
            <div className="space-y-8">
              {filteredCategories.map((category, catIndex) => {
                const Icon = category.icon
                const isOpen = openCategories.includes(category.name)
                
                return (
                  <div key={catIndex} id={`category-${catIndex}`} className="bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
                    <button
                      onClick={() => toggleCategory(category.name)}
                      className="w-full flex items-center justify-between p-6 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-left">
                          <h2 className="text-xl font-bold text-gray-900 dark:text-white">{category.name}</h2>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{category.faqs.length} questions</p>
                        </div>
                      </div>
                      <ChevronDown className={`w-6 h-6 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-6 border-t border-gray-200 dark:border-gray-800">
                        <div className="space-y-4 pt-6">
                          {category.faqs.map((faq, faqIndex) => {
                            const globalIndex = parseInt(`${catIndex}${faqIndex}`)
                            return (
                              <div key={faqIndex} className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white dark:bg-gray-800">
                                <button
                                  onClick={() => toggleFaq(globalIndex)}
                                  className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                                >
                                  <span className="font-medium text-gray-900 dark:text-white">{faq.question}</span>
                                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openFaqs.includes(globalIndex) ? 'rotate-180' : ''}`} />
                                </button>
                                
                                {openFaqs.includes(globalIndex) && (
                                  <div className="px-4 pb-4 pt-0 border-t border-gray-200 dark:border-gray-700">
                                    <p className="text-gray-600 dark:text-gray-400 text-sm whitespace-pre-line">{faq.answer}</p>
                                  </div>
                                )}
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-20 h-20 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">No results found</h3>
              <p className="text-gray-600 dark:text-gray-400">
                No questions match your search. Try different keywords or browse all categories.
              </p>
              <button
                onClick={() => setSearchTerm('')}
                className="mt-4 px-6 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors"
              >
                Clear search
              </button>
            </div>
          )}
        </div>
      </section>

      {/* STILL HAVE QUESTIONS */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
            <div className="w-16 h-16 bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">Still Have Questions?</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Can't find the answer you're looking for? Our team is here to help.
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              <a 
                href="/contact" 
                className="p-4 bg-gray-50 dark:bg-gray-900 rounded-xl hover:shadow-md transition border border-gray-200 dark:border-gray-700"
              >
                <Mail className="w-6 h-6 text-yellow-600 dark:text-yellow-400 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Email Us</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">Hello@yelocodesys.com</p>
              </a>

              <a 
                href="tel:+2349162865693" 
                className="p-4 bg-gray-50 dark:bg-gray-900 rounded-xl hover:shadow-md transition border border-gray-200 dark:border-gray-700"
              >
                <Phone className="w-6 h-6 text-yellow-600 dark:text-yellow-400 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Call Us</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">+234 916 286 5693</p>
              </a>

              <a 
                href="#" 
                className="p-4 bg-gray-50 dark:bg-gray-900 rounded-xl hover:shadow-md transition border border-gray-200 dark:border-gray-700"
              >
                <MessageCircle className="w-6 h-6 text-yellow-600 dark:text-yellow-400 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Live Chat</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">Mon-Fri, 9am-6pm</p>
              </a>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                Or visit us at our campus
              </p>
              <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-300">
                <MapPin className="w-4 h-4" />
                <span>No11 Elekahia, Port Harcourt, Nigeria</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 bg-gradient-to-r from-yellow-600 to-yellow-400 text-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h2 className="text-3xl font-bold mb-2">Ready to Start Your Tech Journey?</h2>
              <p className="text-yellow-100">Join thousands of students who have transformed their careers with Yelocode.</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a 
                href="/coursecatalog" 
                className="px-6 py-3 bg-white text-yellow-600 font-medium rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-2"
              >
                <GraduationCap className="w-5 h-5" />
                Browse Programs
              </a>
              <a 
                href="/contacts" 
                className="px-6 py-3 border border-white/30 text-white font-medium rounded-lg hover:bg-white/10 transition-colors flex items-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                Schedule Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Add animation styles */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  )
}