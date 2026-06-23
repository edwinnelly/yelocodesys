import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-20 pb-16 md:pt-24 md:pb-20 overflow-hidden min-h-[600px] md:min-h-[700px] flex items-center"
      aria-label="Hero section - Best tech school in Port Harcourt | Yelocode Systems"
    >
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          aria-label="Background video showing technology concept at our IT training center in Port Harcourt"
          className="absolute min-w-full min-h-full object-cover"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
            height: "100%",
          }}
        >
          <source
            src="https://static.vecteezy.com/system/resources/previews/013/279/729/mp4/young-girl-which-applying-virtual-reality-headset-during-working-at-home-in-the-evening-modern-technology-concept-free-video.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        {/* Dark blue overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gray/90 dark:bg-black/70" aria-hidden="true" />
      </div>

      {/* Content */}
      <div className="relative container-custom z-10 w-full">
        <div className="max-w-3xl mx-auto lg:mx-0 text-center lg:text-left">
          {/* Heading - SEO optimized with high-intent enrollment keywords */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            The{" "}
            <span className="text-yellow-500 relative">
              best tech school in Port Harcourt
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M2 10C66.6667 4.33333 196.4 -1.6 298 10"
                  stroke="#93C5FD"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <br />
            {/* <span className="text-yellow-500">for world-class tech education.</span> */}
          </h1>

          {/* Description - Keyword rich with high-demand skills and career value */}
          <p className="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Your premier{" "}
            <strong className="text-yellow-300">IT training center in Port Harcourt</strong> offering{" "}
            <strong className="text-yellow-300">data analytics training</strong>,{" "}
            <strong className="text-yellow-300">UI/UX design</strong>,{" "}
            <strong className="text-yellow-300">cybersecurity</strong>, and{" "}
            <strong className="text-yellow-300">software engineering</strong> with{" "}
            <strong className="text-yellow-300">job placement support</strong>. 
            Join the leading coding bootcamp in Port Harcourt today.
          </p>

          {/* CTA Buttons - High-intent enrollment CTAs */}
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <Link
              href="/education"
              className="group relative px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden inline-flex items-center justify-center"
              aria-label="Enroll at the best computer training school in Port Harcourt"
            >
              <span className="relative z-10">Start Your Tech Journey</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>

            <Link
              href="https://www.tiktok.com/@yelocode"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
              aria-label="Explore affordable tech training options at Yelocode"
            >
              <span>Explore Programs</span>
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </Link>
          </div>

          {/* Stats - Social proof with career-focused messaging */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 mt-12 max-w-2xl mx-auto lg:mx-0">
            <div className="text-center lg:text-left">
              <div className="text-2xl md:text-3xl font-bold text-white">
                8,000+
              </div>
              <div className="text-sm text-yellow-200">Graduates Placed</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-2xl md:text-3xl font-bold text-white">
                10+
              </div>
              <div className="text-sm text-yellow-200">Years of Excellence</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-2xl md:text-3xl font-bold text-white">
                85%
              </div>
              <div className="text-sm text-yellow-200">Job Placement Rate</div>
            </div>
          </div>

          {/* Additional value proposition - Affordable pricing highlight */}
          <div className="mt-8 text-center lg:text-left">
            <p className="text-sm text-yellow-100/80 inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Affordable computer training in PH • Scholarships Available
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 hidden md:block">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white rounded-full mt-2 animate-bounce" aria-label="Scroll down to explore our software engineering academy in Port Harcourt" />
        </div>
      </div>
    </section>
  );
}