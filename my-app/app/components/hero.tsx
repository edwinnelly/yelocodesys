import React from 'react'

export default function Hero() {
  return (
    <section id="home" className="relative pt-20 pb-16 md:pt-24 md:pb-20 overflow-hidden min-h-[600px] md:min-h-[700px] flex items-center">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute min-w-full min-h-full object-cover"
          style={{ 
            top: '50%', 
            left: '50%', 
            transform: 'translate(-50%, -50%)',
            width: '100%',
            height: '100%'
          }}
        >
          <source src="https://static.vecteezy.com/system/resources/previews/013/279/729/mp4/young-girl-which-applying-virtual-reality-headset-during-working-at-home-in-the-evening-modern-technology-concept-free-video.mp4" type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
          Your browser does not support the video tag.
        </video>
        {/* Dark blue overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gray/90 dark:bg-black/70" />
      </div>
      
      {/* Content */}
      <div className="relative container-custom z-10 w-full">
        <div className="max-w-3xl mx-auto lg:mx-0 text-center lg:text-left">
          {/* Badge */}
          <div className="inline-block mb-6">
            <span className="bg-white/10 backdrop-blur-sm text-white text-sm font-medium px-4 py-2 rounded-full border border-white/20">
              Launch Your Digital Future
            </span>
          </div>
          
          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Delivering world-class computer programming {' '}
            <span className="text-yellow-500 relative">
            education for all.
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 10C66.6667 4.33333 196.4 -1.6 298 10" stroke="#93C5FD" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </span>
          </h1>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
           Expert IT support, custom app development, and professional training designed to drive efficiency, growth, and digital transformation.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <button className="group relative px-8 py-4 bg-white text-black-100 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden">
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            
            <button className="group px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 flex items-center gap-2">
              <span>Watch Demo</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 mt-12 max-w-2xl mx-auto lg:mx-0">
            <div className="text-center lg:text-left">
              <div className="text-2xl md:text-3xl font-bold text-white">476+</div>
              <div className="text-sm text-blue-200">Trusted Customers</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-2xl md:text-3xl font-bold text-white">10+</div>
              <div className="text-sm text-blue-200">Years of Excellence</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-2xl md:text-3xl font-bold text-white">24/7</div>
              <div className="text-sm text-blue-200">Support</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 hidden md:block">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  )
}