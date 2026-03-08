export default function Hero() {
  return (
    <section id="home" className="pt-20 pb-16 md:pt-24 md:pb-20">
      <div className="container-custom">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Enterprise technology for the{' '}
            <span className="text-[#1e3a8a] dark:text-blue-400">digital age</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
            Transform your business with scalable, secure, and innovative solutions 
            built for enterprise-grade performance.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="btn-primary">
              Get Started
            </button>
            <button className="btn-outline">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}