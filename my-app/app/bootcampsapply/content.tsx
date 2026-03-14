"use client";

import { useState } from "react";
import {
  Code,
  Palette,
  PieChart,
  Shield,
  Cloud,
  Cpu,
  Check,
  X,
  Clock,
  Users,
  Award,
  Calendar,
  BookOpen,
  Rocket,
  Star,
  Briefcase,
  Target,
  Zap,
  Globe,
  Mail,
  Phone,
  GraduationCap,
  ChevronDown,
  ChevronRight,
  MessageSquare,
  ExternalLink,
  Github,
  Linkedin,
  Twitter,
  Figma,
  PenTool,
  BarChart,
  LineChart,
  Smartphone,
  Monitor,
  Laptop,
  Server,
  Download,
  Upload,
  Copy,
  Edit,
  Filter,
  RefreshCw,
  Eye,
  EyeOff,
  Menu,
  Home,
  ShoppingCart,
  Newspaper,
  Youtube,
  Camera,
  Music,
  Gamepad,
  Plane,
  Car,
  Heart,
  Building2,
  Map,
  Sun,
  Moon,
  Activity,
  Wallet,
  Trophy,
  Gift,
  Truck,
  Dog,
  Leaf,
  Bike,
  Ticket,
  GlassWater,
  Shirt,
  Watch,
  Bot,
  Network,
  BarChart3,
  LineChart as LineChartIcon,
  PieChart as PieChartIcon,
  Box,
  Binary,
  Cpu as CpuIcon,
  Sparkles,
  Megaphone,
  FileText,
  Layers,
  GitBranch,
  Terminal,
  Database,
  Layout,
  Server as ServerIcon,
  TrendingUp,
  DollarSign,
  Lock,
  Send,
  Loader,
  Brain,
  TestTube,
} from "lucide-react";

export default function BootcampEnrollment() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    program: "",
    experience: "",
    reason: "",
  });
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!agreeTerms) {
      alert("Please agree to the terms and conditions");
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");

    try {
      // Send form data to your backend endpoint
      const response = await fetch("/api/bootcamp-enrollment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit application");
      }

      const result = await response.json();

      setFormSubmitted(true);
      console.log("Form submitted:", result);

      // Reset form after submission
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          program: "",
          experience: "",
          reason: "",
        });
        setAgreeTerms(false);
      }, 3000);
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitError("Failed to submit application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const programs = [
    { value: "python", label: "Python Programming" },
    { value: "web", label: "Web Development" },
    { value: "data", label: "Data Analysis" },
    { value: "cyber", label: "Cybersecurity" },
    { value: "devops", label: "DevOps Engineering" },
    { value: "uiux", label: "UI/UX Design" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      {/* HERO SECTION */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-br from-gray-900 to-gray-950 text-white">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="absolute top-20 left-10 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-300/20 rounded-full blur-3xl animate-pulse animation-delay-2000" />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium px-4 py-2 rounded-full mb-6">
                <GraduationCap className="w-4 h-4" />
                Bootcamp Enrollment - Free
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Transform Your Career with{" "}
                <span className="bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">
                  Intensive Tech Training
                </span>
              </h1>

              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                An intensive training program designed to transform beginners
                into skilled technology professionals. Gain hands-on experience,
                build real-world projects, and receive mentorship from
                experienced industry experts—preparing you for global
                opportunities in the tech industry.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#enroll-form"
                  className="px-8 py-4 bg-gradient-to-r from-yellow-600 to-yellow-400 text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-yellow-500/25 transition-all flex items-center gap-2"
                >
                  <GraduationCap className="w-5 h-5" />
                  Enroll Now
                </a>
                <a
                  href="#programs"
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-lg hover:bg-white/20 transition-all flex items-center gap-2"
                >
                  <BookOpen className="w-5 h-5" />
                  Explore Programs
                </a>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Clock, value: "12-24", label: "Weeks Duration" },
                { icon: Rocket, value: "30+", label: "Live Projects" },
                { icon: Users, value: "1:1", label: "Mentorship" },
                { icon: Award, value: "92%", label: "Placement Rate" },
              ].map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={i}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center"
                  >
                    <Icon className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
                    <div className="text-xl font-bold text-white">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-400">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* BOOTCAMP OVERVIEW */}
      <section id="programs" className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 text-sm font-medium px-4 py-2 rounded-full mb-6">
              <BookOpen className="w-4 h-4" />
              What This Bootcamp Is About
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Practical Learning with{" "}
              <span className="text-yellow-600 dark:text-yellow-400">
                Real Industry Tools
              </span>
            </h2>

            <p className="text-lg text-gray-600 dark:text-gray-400">
              Our bootcamp focuses on project-based training, teamwork, and
              modern technology stacks
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Code,
                title: "Python Programming",
                description:
                  "Master Python from basics to advanced. Build automation scripts, web apps, and data analysis tools.",
              },
              {
                icon: Globe,
                title: "Web Development",
                description:
                  "Learn HTML, CSS, JavaScript, React, Node.js, and databases. Build full-stack applications.",
              },
              {
                icon: PieChart,
                title: "Data Analysis",
                description:
                  "Master Excel, SQL, Python, Pandas, Tableau, and Power BI for data-driven decision making.",
              },
              {
                icon: Shield,
                title: "Cybersecurity",
                description:
                  "Learn network security, ethical hacking, penetration testing, and security operations.",
              },
              {
                icon: Cloud,
                title: "DevOps Engineering",
                description:
                  "Master AWS, Docker, Kubernetes, CI/CD pipelines, and infrastructure as code.",
              },
              {
                icon: Palette,
                title: "UI/UX Design",
                description:
                  "Create stunning visuals and intuitive user experiences with Figma, Adobe XD, and prototyping.",
              },
            ].map((program, i) => {
              const Icon = program.icon;
              return (
                <div
                  key={i}
                  className="group bg-gray-50 dark:bg-gray-900 rounded-xl p-6 hover:shadow-xl transition-all border border-gray-200 dark:border-gray-800 hover:border-yellow-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {program.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHAT YOU WILL LEARN */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 text-sm font-medium px-4 py-2 rounded-full mb-6">
              <Target className="w-4 h-4" />
              What You Will Learn
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Master{" "}
              <span className="text-yellow-600 dark:text-yellow-400">
                Essential Skills
              </span>
            </h2>

            <p className="text-lg text-gray-600 dark:text-gray-400">
              Gain the skills needed to become a professional developer
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: Code, label: "Programming Fundamentals" },
              { icon: Brain, label: "Problem Solving" },
              { icon: GitBranch, label: "Development Workflow" },
              { icon: Server, label: "API Development" },
              { icon: Database, label: "Database Design" },
              { icon: TestTube, label: "Debugging & Testing" },
              { icon: Rocket, label: "Application Deployment" },
              { icon: Users, label: "Team Collaboration" },
              { icon: Briefcase, label: "Real Projects" },
            ].map((skill, i) => {
              const Icon = skill.icon;
              return (
                <div
                  key={i}
                  className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition"
                >
                  <div className="w-10 h-10 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <span className="font-medium text-gray-900 dark:text-white">
                    {skill.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* OUTCOMES / CAREER TRANSFORMATION */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 text-sm font-medium px-4 py-2 rounded-full mb-6">
                <Rocket className="w-4 h-4" />
                How Good You Will Become
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Transform into a{" "}
                <span className="text-yellow-600 dark:text-yellow-400">
                  Job-Ready Developer
                </span>
              </h2>

              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                After completing our bootcamp, you'll have the skills and
                confidence to build real applications, work with professional
                tools, and launch your tech career.
              </p>

              <div className="space-y-4">
                {[
                  "Build real-world applications from scratch",
                  "Create a professional portfolio that impresses employers",
                  "Gain confidence solving complex technical problems",
                  "Master modern development tools and workflows",
                  "Become ready for tech jobs or freelancing",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: Rocket,
                  title: "Build Real Projects",
                  value: "30+ Projects",
                },
                {
                  icon: Award,
                  title: "Professional Portfolio",
                  value: "Job-Ready",
                },
                {
                  icon: Brain,
                  title: "Problem Solving",
                  value: "Expert Level",
                },
                {
                  icon: Briefcase,
                  title: "Career Ready",
                  value: "92% Placement",
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 text-center border border-gray-200 dark:border-gray-800"
                  >
                    <Icon className="w-8 h-8 text-yellow-600 dark:text-yellow-400 mx-auto mb-3" />
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {item.value}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* REGISTRATION FORM */}
      <section id="enroll-form" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 text-sm font-medium px-4 py-2 rounded-full mb-6">
              <FileText className="w-4 h-4" />
              Start Your Application
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Enroll in the{" "}
              <span className="text-yellow-600 dark:text-yellow-400">Bootcamp</span>
            </h2>

            <p className="text-lg text-gray-600 dark:text-gray-400">
              Fill out the form below to begin your journey into tech
            </p>
          </div>

          {formSubmitted ? (
            <div className="bg-yellow-100 dark:bg-yellow-900/30 border border-yellow-500 text-yellow-700 dark:text-yellow-400 rounded-xl p-8 text-center">
              <Check className="w-16 h-16 mx-auto mb-4 text-yellow-500" />
              <h3 className="text-2xl font-bold mb-2">
                Application Submitted!
              </h3>
              <p>Thank you for applying. We'll contact you within 24 hours.</p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700"
            >
              {submitError && (
                <div className="mb-6 p-4 bg-red-100 dark:bg-red-900/30 border border-red-500 text-red-700 dark:text-red-400 rounded-lg">
                  {submitError}
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
                    placeholder="+234 800 000 0000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Bootcamp Program <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="program"
                    value={formData.program}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
                  >
                    <option value="">Select a program</option>
                    {programs.map((program) => (
                      <option key={program.value} value={program.value}>
                        {program.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Experience Level <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
                  >
                    <option value="">Select your level</option>
                    <option value="beginner">Beginner (No experience)</option>
                    <option value="intermediate">
                      Intermediate (Some knowledge)
                    </option>
                    <option value="advanced">
                      Advanced (Ready to level up)
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Preferred Start Date
                  </label>
                  <input
                    type="date"
                    name="startDate"
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Why do you want to join this bootcamp?{" "}
                  <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
                  placeholder="Tell us about your goals and motivation..."
                />
              </div>

              {/* TERMS AND CONDITIONS */}
              <div className="mb-6 p-6 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                  Terms and Conditions
                </h3>
                <ul className="space-y-2 mb-4 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <span>
                      Students must attend classes regularly and participate
                      actively
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <span>
                      All assignments and projects must be completed on time
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <span>
                      A respectful learning environment is required for all
                      participants
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <span>
                      Tuition payment must be completed before the program
                      starts
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <span>
                      Certificates are issued upon successful completion of all
                      requirements
                    </span>
                  </li>
                </ul>

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={agreeTerms}
                    onChange={(e) => setAgreeTerms(e.target.checked)}
                    className="w-4 h-4 text-yellow-600 border-gray-300 rounded focus:ring-yellow-500"
                  />
                  <label
                    htmlFor="terms"
                    className="text-sm text-gray-700 dark:text-gray-300"
                  >
                    I agree to the terms and conditions{" "}
                    <span className="text-red-500">*</span>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                disabled={!agreeTerms || isSubmitting}
                className={`w-full px-6 py-4 bg-gradient-to-r from-yellow-600 to-yellow-400 text-white font-semibold rounded-lg transition-all flex items-center justify-center gap-2 ${
                  !agreeTerms || isSubmitting
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:shadow-xl hover:shadow-yellow-500/25"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <Loader className="w-5 h-5 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Enroll Now
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="py-20 bg-gradient-to-r from-yellow-600 to-yellow-400 text-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Start Your Tech Journey Today
          </h2>
          <p className="text-xl text-yellow-100 mb-8 max-w-2xl mx-auto">
            Join the Yelocode Systems bootcamp in Port Harcourt and gain the
            skills needed to build software, solve real problems, and create
            opportunities in the technology industry.
          </p>
          <a
            href="#enroll-form"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-yellow-600 font-semibold rounded-lg hover:bg-gray-100 transition-all hover:shadow-xl text-lg"
          >
            <Rocket className="w-5 h-5" />
            Start Your Tech Journey
          </a>
        </div>
      </section>
    </div>
  );
}
