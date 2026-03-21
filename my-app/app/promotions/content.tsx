"use client";

import { useState, useEffect } from "react";
import {
  Code,
  Palette,
  PieChart,
  Database,
  TrendingUp,
  Cpu,
  Lock,
  Cloud,
  Check,
  Clock,
  Users,
  Award,
  BookOpen,
  Rocket,
  Star,
  GraduationCap,
  Calendar,
  MessageSquare,
  ChevronDown,
  Zap,
  Timer,
  Gift,Briefcase,
} from "lucide-react";

// Tier data for hero section
const tiers = [
  {
    name: "Foundational Tier",
    title:
      "Build essential skills and gain the qualifications for entry-level positions",
    originalPriceMin: 180000,
    originalPriceMax: 350000,
    duration: "2-3 months",
    projects: "5-10 projects",
    color: "from-yellow-600 to-yellow-400",
    features: [
      "Essential Industry Knowledge",
      "Fundamental Technical Skills",
      "Introduction to Tools & Platforms",
      "Problem-Solving & Critical Thinking Basics",
      "Professional Communication Skills",
      "Career Readiness Workshops",
      "Industry-Specific Certifications (Optional)",
      "Access to Entry-Level Job Opportunities",
    ],
  },
  {
    name: "Intermediate Tier",
    title:
      "Deepen your expertise with more complex tools, technologies, and processes",
    originalPriceMin: 400000,
    originalPriceMax: 700000,
    duration: "4-6 months",
    projects: "15-25 projects",
    color: "from-yellow-600 to-yellow-400",
    features: [
      "Specialized Knowledge Areas",
      "Real-World Projects & Case Studies",
      "Problem-Solving for Complex Challenges",
      "Professional Collaboration & Teamwork",
      "Industry Certification Preparation",
      "Career Coaching & Mentorship Access",
      "Access to Mid-Level Job Opportunities",
    ],
  },
  {
    name: "Advanced Tier",
    title:
      "Achieve expert-level proficiency for leadership and expert roles",
    originalPriceMin: 850000,
    originalPriceMax: 1500000,
    duration: "7-12 months",
    projects: "30-60 projects",
    color: "from-yellow-600 to-yellow-400",
    features: [
      "Leadership & Strategic Thinking Development",
      "Complex Problem Solving & Innovation Projects",
      "Expert-Level Certifications & Credentials",
      "Executive Communication & Influence Skills",
      "Mentorship & Networking with Industry Leaders",
      "Career Advancement & High-Paying Role Preparation",
      "Priority Access to Exclusive Job Opportunities",
    ],
  },
];

// Course data organized by category
const courseCategories = [
  {
    name: "Web Development",
    icon: Code,
    color: "yellow",
    courses: [
      {
        name: "NOVA PRIME",
        originalPrice: 250000,
        duration: "3 months",
        projects: "15 Live Projects",
        description:
          "Covering Frontend (Client-Side) Languages, Frontend is a great start",
        popular: false,
        features: [
          "HTML (HyperText Markup Language)",
          "CSS (Cascading Style Sheets)",
          "JavaScript (JS)",
          "JavaScript Frameworks/Libraries",
          "GitHub",
        ],
      },
      {
        name: "AXIS IGNITE",
        originalPrice: 550000,
        duration: "5 months",
        projects: "40 Live Projects",
        description:
          "Covering both frontend and backend development, Best value for full-stack",
        popular: true,
        features: [
          "HTML, CSS, JavaScript",
          "JavaScript (Node.js), Python, PHP",
          "SQL (PostgreSQL, MySQL), NoSQL (MongoDB, Firebase)",
          "REST, GraphQL",
          "Bash, YAML, Docker",
          "JavaScript Frameworks/Libraries",
          "GitHub",
        ],
      },
      {
        name: "QUANTA ELITE",
        originalPrice: 850000,
        duration: "7 months",
        projects: "60 Live Projects",
        description:
          "Covering both frontend and backend development, Prepares for high-paying roles",
        popular: false,
        features: [
          "HTML, CSS, JavaScript",
          "JavaScript (Node.js), Python, Java, PHP",
          "SQL (PostgreSQL, MySQL), NoSQL (MongoDB, Firebase)",
          "REST, GraphQL",
          "Bash, YAML, Docker",
          "JavaScript Frameworks/Libraries",
          "GitHub",
        ],
      },
    ],
  },
  {
    name: "Graphics Design / UI-UX Design",
    icon: Palette,
    color: "yellow",
    courses: [
      {
        name: "NOVA PRIME",
        originalPrice: 120000,
        duration: "2 months",
        projects: "10 Live Projects",
        description:
          "Beginners needing graphic design skills (social media, flyers)",
        popular: false,
        features: [
          "Corel Draw",
          "Photoshop",
          "Canva",
          "Basic wireframing, Social media graphics",
          "Solo projects",
        ],
      },
      {
        name: "AXIS IGNITE",
        originalPrice: 250000,
        duration: "4 months",
        projects: "20 Live Projects",
        description:
          "Aspiring UI/UX designers (transitioning from graphic design)",
        popular: true,
        features: [
          "Corel Draw",
          "Photoshop",
          "Adobe XD",
          "Figma",
          "Canva",
          "User research, Prototyping",
          "Team projects (Agile)",
          "Solo projects",
        ],
      },
    ],
  },
  {
    name: "Data Analysis",
    icon: PieChart,
    color: "yellow",
    courses: [
      {
        name: "NOVA PRIME",
        originalPrice: 200000,
        duration: "3 months",
        projects: "5 Live Projects",
        description: "Career starters needing basic data skills",
        popular: false,
        features: [
          "10 basic datasets",
          "Excel",
          "Google Sheets",
          "Tableau",
          "Data cleaning",
          "Basic viz",
        ],
      },
      {
        name: "AXIS IGNITE",
        originalPrice: 450000,
        duration: "5 months",
        projects: "20 Live Projects",
        description: "Professionals transitioning to data roles",
        popular: true,
        features: [
          "20 real-world projects",
          "Python (Pandas)",
          "SQL",
          "Power BI",
          "Statistical analysis",
          "Dashboarding",
          "Job placement assistance",
        ],
      },
      {
        name: "QUANTA ELITE",
        originalPrice: 850000,
        duration: "7 months",
        projects: "30 Live Projects",
        description: "Analysts aiming for data scientist positions",
        popular: false,
        features: [
          "30+ projects + Capstone",
          "Python",
          "R",
          "SQL",
          "TensorFlow",
          "Machine Learning",
          "Predictive Modeling",
          "1:1 mentorship + LinkedIn optimization",
        ],
      },
    ],
  },
  {
    name: "Python Program",
    icon: Database,
    color: "yellow",
    courses: [
      {
        name: "NOVA PRIME",
        originalPrice: 200000,
        duration: "2 months",
        projects: "10 Live Projects",
        description: "Absolute beginners or Excel users automating tasks",
        popular: false,
        features: [
          "10 mini-projects",
          "Python basics, Jupyter",
          "Syntax, loops, functions",
          "Python Fundamentals",
          "Data cleaning",
        ],
      },
      {
        name: "AXIS IGNITE",
        originalPrice: 550000,
        duration: "4 months",
        projects: "20 Live Projects",
        description: "Career switchers targeting developer roles",
        popular: true,
        features: [
          "20 real-world apps",
          "Django/Flask",
          "Web dev",
          "automation scripts",
          "SQL",
          "APIs",
          "Job placement assistance",
        ],
      },
      {
        name: "QUANTA ELITE",
        originalPrice: 900000,
        duration: "8 months",
        projects: "30 Live Projects",
        description: "Developers upskilling to AI/cloud specialties",
        popular: false,
        features: [
          "30+ projects + Capstone",
          "ML (TensorFlow)",
          "AI/ML",
          "Cloud deployment",
          "TensorFlow",
          "Async",
          "AWS",
          "1:1 mentorship + LinkedIn optimization",
        ],
      },
    ],
  },
  {
    name: "Digital Marketing Program",
    icon: TrendingUp,
    color: "yellow",
    courses: [
      {
        name: "NOVA PRIME",
        originalPrice: 180000,
        duration: "2 months",
        projects: "5 live campaigns",
        description:
          "Focuses on low-budget strategies for small businesses",
        popular: false,
        features: [
          "5 live campaigns",
          "Social Media, SEO basics",
          "Canva, Google Analytics",
          "Digital Marketing Fundamentals",
          "Freelance setup",
        ],
      },
      {
        name: "AXIS IGNITE",
        originalPrice: 350000,
        duration: "3 months",
        projects: "15 client projects",
        description: "Career switchers targeting developer roles",
        popular: true,
        features: [
          "15 client projects",
          "Paid ads (Meta/Google), Email Marketing",
          "Meta Ads Manager",
          "Google Ads, Microsoft, Meta, Tiktok",
          "Professional Digital Marketer",
          "Job placement assistance",
        ],
      },
    ],
  },
  {
    name: "Mobile App Development",
    icon: Cpu,
    color: "yellow",
    courses: [
      {
        name: "NOVA PRIME",
        originalPrice: 420000,
        duration: "3 months",
        projects: "6 basic apps",
        description: "Those new to programming wanting quick results",
        popular: false,
        features: [
          "6 basic apps",
          "Flutter (Cross-platform)",
          "UI Design, Basic Logic",
          "Firebase",
          "App Developer Certificate",
          "Freelance preparation",
        ],
      },
      {
        name: "AXIS IGNITE",
        originalPrice: 1400000,
        duration: "10 months",
        projects: "25+ apps + App Store publish",
        description: "Developers aiming for senior/tech lead positions",
        popular: true,
        features: [
          "25+ apps + App Store publish",
          "Flutter + Native (Kotlin/Swift)",
          "API Integration, State Management",
          "Node.js",
          "Firebase",
          "Performance Optimization",
          "Custom Backend (Go/Python)",
          "Native + React Native",
          "Job placement assistance",
        ],
      },
    ],
  },
  {
    name: "Cybersecurity Program",
    icon: Lock,
    color: "yellow",
    courses: [
      {
        name: "NOVA PRIME",
        originalPrice: 250000,
        duration: "3 months",
        projects: "50+ virtual environments",
        description: "Start with CYBER SHIELD",
        popular: false,
        features: [
          "50+ virtual environments",
          "CompTIA Security+",
          "Wireshark",
          "Nmap",
          "Metasploit",
          "Network Security",
          "Entry-level job prep",
        ],
      },
      {
        name: "AXIS IGNITE",
        originalPrice: 550000,
        duration: "5 months",
        projects: "100+ real-world simulations",
        description: "Jump to SECURITY ANALYST",
        popular: true,
        features: [
          "100+ real-world simulations",
          "CEH",
          "CySA+",
          "Burp Suite",
          "SIEM tools",
          "Threat Intelligence",
          "Job placement assistance",
        ],
      },
      {
        name: "QUANTA ELITE",
        originalPrice: 1500000,
        duration: "12 months",
        projects: "200+ advanced pentests",
        description: "Direct to ETHICAL HACKER PRO",
        popular: false,
        features: [
          "200+ advanced pentests",
          "OSCP, CISSP",
          "Cobalt Strike",
          "Kali Linux",
          "Red Team Operations",
          "Threat Intelligence",
          "Executive mentorship",
        ],
      },
    ],
  },
  {
    name: "Database Management",
    icon: Database,
    color: "yellow",
    courses: [
      {
        name: "NOVA PRIME",
        originalPrice: 180000,
        duration: "2 months",
        projects: "5 live Projects",
        description: "Excel users wanting automation",
        popular: false,
        features: [
          "35 basic queries",
          "5 live Projects",
          "MySQL",
          "MySQL, phpMyAdmin",
          "Freelance-ready",
        ],
      },
      {
        name: "AXIS IGNITE",
        originalPrice: 400000,
        duration: "5 months",
        projects: "20+ complex schemas",
        description: "Developers shifting to data roles",
        popular: true,
        features: [
          "30 real-world datasets",
          "PostgreSQL Professional",
          "PostgreSQL, DBeaver",
          "AWS RDS, Google Cloud SQL",
          "Job placement assistance",
        ],
      },
      {
        name: "QUANTA ELITE",
        originalPrice: 950000,
        duration: "8 months",
        projects: "50+ complex schemas",
        description: "Preparing for FAANG-level interviews",
        popular: false,
        features: [
          "50+ complex schemas",
          "Oracle Certified Master",
          "Oracle, NoSQL, Snowflake",
          "Multi-cloud deployments",
          "CTO mentorship",
        ],
      },
    ],
  },
  {
    name: "Cloud Computing Program",
    icon: Cloud,
    color: "yellow",
    courses: [
      {
        name: "NOVA PRIME",
        originalPrice: 300000,
        duration: "3 months",
        projects: "50+ sandbox environments",
        description: "IT professionals transitioning to cloud",
        popular: false,
        features: [
          "50+ sandbox environments",
          "AWS CCP/Azure Fundamentals",
          "Single-cloud (Choose 1)",
          "Entry-level cloud roles",
        ],
      },
      {
        name: "AXIS IGNITE",
        originalPrice: 600000,
        duration: "6 months",
        projects: "15 real-world deployments",
        description: "SysAdmins/Devs upskilling for DevOps",
        popular: true,
        features: [
          "15 real-world deployments",
          "AWS SAA/Azure Administrator",
          "Dual-cloud (AWS + Azure)",
          "Mid-level placement",
        ],
      },
      {
        name: "QUANTA ELITE",
        originalPrice: 950000,
        duration: "8 months",
        projects: "30+ production-grade builds",
        description: "Preparing for FAANG cloud architect roles",
        popular: false,
        features: [
          "30+ production-grade builds",
          "AWS Pro/Azure Architect",
          "AWS + Azure + GCP",
          "Solutions Architect mentorship",
        ],
      },
    ],
  },
];

// FAQ data
const faqs = [
  {
    question: "Who is this program designed for?",
    answer:
      "Our programs are designed for beginners, career changers, and professionals looking to upgrade their skills and target higher-paying roles.",
  },
  {
    question: "Do I need prior experience to enroll?",
    answer:
      "No. The Foundational Tier requires no prior experience. Intermediate and Advanced Tiers build upon the skills learned in earlier levels.",
  },
  {
    question: "How long does each tier take to complete?",
    answer:
      "Duration varies by tier, but most learners complete each level in 4 to 12 weeks with flexible schedules.",
  },
  {
    question: "Are your programs self-paced or instructor-led?",
    answer:
      "We offer both self-paced learning options and instructor-led sessions to suit different learning styles.",
  },
  {
    question: "Will I receive a certificate upon completion?",
    answer:
      "Yes. Participants who complete each tier receive industry-recognized certificates to validate their skills.",
  },
  {
    question: "Can I skip directly to the Intermediate or Advanced Tier?",
    answer:
      "Yes, but only if you can demonstrate equivalent knowledge or pass a skills assessment.",
  },
  {
    question: "What types of jobs can I apply for after completing the program?",
    answer:
      "Depending on the tier, you can apply for entry-level, specialist, or leadership roles in your chosen industry.",
  },
  {
    question: "Do you offer job placement support?",
    answer:
      "Yes. We provide career coaching, job search resources, and access to exclusive job opportunities for all learners.",
  },
  {
    question: "Are there any payment plans available?",
    answer:
      "We offer flexible payment options, including installment plans and discounts for full upfront payment.",
  },
  {
    question: "What industries do your programs cover?",
    answer:
      "Our programs focus on high-demand fields such as technology, business, data science, cybersecurity, and more.",
  },
  {
    question: "Will I have access to mentors or career advisors?",
    answer:
      "Yes. Intermediate and Advanced Tiers include mentorship opportunities and career advisory sessions.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply sign up on our website, choose your preferred tier, and begin your journey toward higher-paying roles.",
  },
];

// Discount percentage
const DISCOUNT_PERCENT = 27;

// Helper function to format currency
const formatCurrency = (amount: number) => {
  return `₦${amount.toLocaleString()}`;
};

// Helper to calculate discounted price
const getDiscountedPrice = (price: number) => {
  return Math.floor(price * (1 - DISCOUNT_PERCENT / 100));
};

// Helper to format price range
const formatPriceRange = (min: number, max: number, showDiscount: boolean = true) => {
  if (showDiscount) {
    const discountedMin = getDiscountedPrice(min);
    const discountedMax = getDiscountedPrice(max);
    return (
      <div className="flex flex-col">
        <span className="text-sm line-through text-gray-400">
          {formatCurrency(min)} - {formatCurrency(max)}
        </span>
        <span className="text-2xl font-bold text-white">
          {formatCurrency(discountedMin)} - {formatCurrency(discountedMax)}
        </span>
      </div>
    );
  }
  return (
    <span className="text-2xl font-bold text-white">
      {formatCurrency(min)} - {formatCurrency(max)}
    </span>
  );
};

// Countdown Timer Component
const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 14,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set end date to 14 days from now
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 14);
    endDate.setHours(23, 59, 59, 999);

    const timer = setInterval(() => {
      const now = new Date();
      const diff = endDate.getTime() - now.getTime();

      if (diff <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-3 sm:gap-6 justify-center">
      <div className="text-center">
        <div className="bg-black/60 backdrop-blur-sm rounded-xl px-3 py-2 sm:px-5 sm:py-3">
          <span className="text-2xl sm:text-4xl font-black text-yellow-400">
            {timeLeft.days}
          </span>
        </div>
        <p className="text-xs text-white/80 mt-1">Days</p>
      </div>
      <div className="text-center">
        <div className="bg-black/60 backdrop-blur-sm rounded-xl px-3 py-2 sm:px-5 sm:py-3">
          <span className="text-2xl sm:text-4xl font-black text-yellow-400">
            {String(timeLeft.hours).padStart(2, "0")}
          </span>
        </div>
        <p className="text-xs text-white/80 mt-1">Hours</p>
      </div>
      <div className="text-center">
        <div className="bg-black/60 backdrop-blur-sm rounded-xl px-3 py-2 sm:px-5 sm:py-3">
          <span className="text-2xl sm:text-4xl font-black text-yellow-400">
            {String(timeLeft.minutes).padStart(2, "0")}
          </span>
        </div>
        <p className="text-xs text-white/80 mt-1">Mins</p>
      </div>
      <div className="text-center">
        <div className="bg-black/60 backdrop-blur-sm rounded-xl px-3 py-2 sm:px-5 sm:py-3">
          <span className="text-2xl sm:text-4xl font-black text-yellow-400">
            {String(timeLeft.seconds).padStart(2, "0")}
          </span>
        </div>
        <p className="text-xs text-white/80 mt-1">Secs</p>
      </div>
    </div>
  );
};

export default function PromoPage() {
  const [openCategories, setOpenCategories] = useState<string[]>([]);
  const [openFaqs, setOpenFaqs] = useState<number[]>([]);

  const toggleCategory = (categoryName: string) => {
    setOpenCategories((prev) =>
      prev.includes(categoryName)
        ? prev.filter((name) => name !== categoryName)
        : [...prev, categoryName]
    );
  };

  const toggleFaq = (index: number) => {
    setOpenFaqs((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      {/* TOP PROMO BANNER */}
      

      {/* HERO SECTION */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url("/pics/200.jpg")',
          }}
        >
          <div className="absolute inset-0 bg-black/75" />
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/20 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Discount Badge */}
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
              <Gift className="w-4 h-4" />
              <span>LIMITED TIME OFFER</span>
              <span className="bg-white/20 px-2 py-0.5 rounded-full text-xs">
                {DISCOUNT_PERCENT}% OFF
              </span>
            </div>
          </div>

          <div className="text-center max-w-4xl mx-auto mb-12">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-5 text-white leading-tight">
              Accelerate Your Future with{" "}
              <span className="text-yellow-400">{DISCOUNT_PERCENT}% OFF</span>
            </h1>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-8">
              Master high-demand skills in Web Dev, Data, Cybersecurity, Cloud &
              more. Get expert mentorship, real projects, and career support —
              now at an unbeatable discount.
            </p>

            {/* Countdown Card */}
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-8 bg-black/50 backdrop-blur-md rounded-2xl px-6 sm:px-10 py-5 shadow-2xl border border-white/20">
              <div className="text-yellow-300 font-semibold text-sm uppercase tracking-wider flex items-center gap-2">
                <Timer className="w-5 h-5" />
                Sale ends in:
              </div>
              <CountdownTimer />
              <div className="text-xs text-white/70 hidden sm:block">
                ⏰ 14 days left — don't miss out!
              </div>
            </div>
          </div>

          {/* Tiers Grid with Discounted Prices */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tiers.map((tier, index) => {
              const discountedMin = getDiscountedPrice(tier.originalPriceMin);
              const discountedMax = getDiscountedPrice(tier.originalPriceMax);
              return (
                <div
                  key={index}
                  className="group relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${tier.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                  />
                  <div className="p-6">
                    <div
                      className={`inline-block px-4 py-2 bg-gradient-to-r ${tier.color} rounded-full text-white font-semibold text-sm mb-4`}
                    >
                      {tier.name}
                    </div>

                    <h4 className="text-gray-200 text-sm mb-4">{tier.title}</h4>

                    <div className="flex items-center gap-4 mb-4 text-sm">
                      <div className="flex items-center gap-1 text-gray-300">
                        <Clock className="w-4 h-4" />
                        {tier.duration}
                      </div>
                      <div className="flex items-center gap-1 text-gray-300">
                        <Rocket className="w-4 h-4" />
                        {tier.projects}
                      </div>
                    </div>

                    <div className="mb-4">
                      <span className="text-sm line-through text-gray-400">
                        {formatCurrency(tier.originalPriceMin)} -{" "}
                        {formatCurrency(tier.originalPriceMax)}
                      </span>
                      <div className="text-2xl font-bold text-white">
                        {formatCurrency(discountedMin)} -{" "}
                        {formatCurrency(discountedMax)}
                      </div>
                    </div>

                    <button className="w-full mb-6 px-4 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-bold rounded-lg transition-colors shadow-md">
                      Enroll Now · {DISCOUNT_PERCENT}% OFF
                    </button>

                    <div className="space-y-2">
                      {tier.features.slice(0, 5).map((feature, i) => (
                        <p
                          key={i}
                          className="text-gray-200 text-sm flex items-start gap-2"
                        >
                          <Check className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </p>
                      ))}
                      {tier.features.length > 5 && (
                        <p className="text-gray-300 text-sm mt-2">
                          +{tier.features.length - 5} more features
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center max-w-3xl mx-auto mt-12 text-gray-200">
            <p>
              The Advanced Tier equips you with the expertise, confidence, and
              recognition to thrive in top-tier roles and command higher earning
              potential.
            </p>
          </div>
        </div>
      </section>

      {/* VALUE PROPOSITION SECTION */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 text-sm font-medium px-4 py-2 rounded-full mb-6">
                <Star className="w-4 h-4" />
                Why Choose Us
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                At Yelocode Systems,{" "}
                <span className="bg-gradient-to-r from-yellow-600 to-yellow-400 bg-clip-text text-transparent">
                  your success is our priority
                </span>
              </h2>

              <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                Equip yourself with the skills that employers demand, through
                courses that focus on practical outcomes and real-world
                application.
              </p>

              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                Our expert trainers offer 1-on-1 mentoring and support to ensure
                you get the most out of your course and reach your goals.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Users, value: "2000+", label: "Students Trained" },
                  { icon: Award, value: "92%", label: "Placement Rate" },
                  { icon: Briefcase, value: "40+", label: "Partner Companies" },
                  { icon: Star, value: "4.8", label: "Student Rating" },
                ].map((stat, i) => {
                  const Icon = stat.icon;
                  return (
                    <div key={i} className="text-center p-4 bg-gray-50 dark:bg-gray-900 rounded-xl">
                      <Icon className="w-6 h-6 text-yellow-600 dark:text-yellow-400 mx-auto mb-2" />
                      <div className="text-xl font-bold text-gray-900 dark:text-white">
                        {stat.value}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {stat.label}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-yellow-500/10 w-32 h-32 rounded-full blur-2xl" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                What Our Students Say
              </h3>

              <div className="space-y-6">
                {[
                  {
                    quote:
                      "The structured learning path helped me go from beginner to professional in just 6 months. I'm now working as a full-stack developer.",
                    name: "Michael Obi",
                    role: "Web Development Graduate",
                  },
                  {
                    quote:
                      "The mentorship and career support were incredible. They helped me prepare for interviews and land my dream job.",
                    name: "Chioma Adebayo",
                    role: "Data Analyst",
                  },
                ].map((testimonial, i) => (
                  <div
                    key={i}
                    className="border-l-4 border-yellow-600 pl-4"
                  >
                    <p className="text-gray-600 dark:text-gray-400 italic mb-2">
                      "{testimonial.quote}"
                    </p>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.role}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-3 text-center text-sm">
                <span className="font-bold text-yellow-700 dark:text-yellow-400">
                  🔥 {DISCOUNT_PERCENT}% discount active:
                </span>{" "}
                All courses are reduced for the next 14 days!
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COURSE CATALOG SECTION */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 text-sm font-medium px-4 py-2 rounded-full mb-6">
              <BookOpen className="w-4 h-4" />
              Course Catalog — {DISCOUNT_PERCENT}% OFF
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Courses{" "}
              <span className="bg-gradient-to-r from-yellow-600 to-yellow-400 bg-clip-text text-transparent">
                Price List
              </span>
            </h2>

            <p className="text-lg text-gray-600 dark:text-gray-400">
              Choose from our comprehensive range of programs designed for your
              career goals — now at {DISCOUNT_PERCENT}% off!
            </p>
          </div>

          <div className="space-y-4">
            {courseCategories.map((category) => {
              const Icon = category.icon;
              const isOpen = openCategories.includes(category.name);

              return (
                <div
                  key={category.name}
                  className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => toggleCategory(category.name)}
                    className="w-full flex items-center justify-between p-6 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="font-semibold text-lg text-gray-900 dark:text-white">
                        {category.name}
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-500 transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="p-6 border-t border-gray-200 dark:border-gray-700">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {category.courses.map((course, idx) => {
                          const discountedPrice = getDiscountedPrice(
                            course.originalPrice
                          );
                          return (
                            <div
                              key={idx}
                              className="relative bg-gray-50 dark:bg-gray-900 rounded-xl p-6 hover:shadow-lg transition-all border border-gray-200 dark:border-gray-800"
                            >
                              {course.popular && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-yellow-600 to-yellow-400 text-white text-xs font-medium px-3 py-1 rounded-full whitespace-nowrap">
                                  Most Popular
                                </div>
                              )}

                              <div className="inline-block px-3 py-1 bg-gradient-to-r from-yellow-600 to-yellow-400 text-white text-xs font-semibold rounded-full mb-4">
                                {course.name}
                              </div>

                              <div className="mb-4">
                                <div className="text-sm line-through text-gray-400">
                                  {formatCurrency(course.originalPrice)}
                                </div>
                                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                                  {formatCurrency(discountedPrice)}
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mt-1">
                                  <Clock className="w-4 h-4" />
                                  {course.duration}
                                  <span className="mx-1">•</span>
                                  <Rocket className="w-4 h-4" />
                                  {course.projects}
                                </div>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                                  {course.description}
                                </p>
                              </div>

                              <button className="w-full mb-4 px-4 py-2 bg-gradient-to-r from-yellow-600 to-yellow-400 text-white rounded-lg hover:shadow-lg transition-all font-medium">
                                Enroll Now - {DISCOUNT_PERCENT}% OFF
                              </button>

                              <div className="space-y-2">
                                {course.features.map((feature, i) => (
                                  <p
                                    key={i}
                                    className="text-gray-600 dark:text-gray-400 text-xs flex items-start gap-2"
                                  >
                                    <Check className="w-3 h-3 text-green-500 flex-shrink-0 mt-0.5" />
                                    <span>{feature}</span>
                                  </p>
                                ))}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 text-sm font-medium px-4 py-2 rounded-full mb-6">
              <MessageSquare className="w-4 h-4" />
              Got Questions?
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-yellow-600 to-yellow-400 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <div className="sticky top-24">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Have questions?
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Find answers to common questions about our programs, pricing,
                  and enrollment process.
                </p>
                <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Still need help?
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    Contact our admissions team for personalized assistance.
                  </p>
                  <a href="contacts">
                    <button className="w-full px-4 py-2 bg-gradient-to-r from-yellow-600 to-yellow-400 text-white rounded-lg hover:shadow-lg transition-all">
                    Contact Us
                  </button>
                  </a>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 space-y-3">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden bg-white dark:bg-gray-900"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                  >
                    <p className="font-medium text-gray-900 dark:text-white">
                      {faq.question}
                    </p>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-500 transition-transform ${
                        openFaqs.includes(index) ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {openFaqs.includes(index) && (
                    <div className="px-4 pb-4 pt-0 border-t border-gray-200 dark:border-gray-800">
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      
    </div>
  );
}