const partners = [
  { name: 'TechCorp' },
  { name: 'CloudScale' },
  { name: 'DataFlow' },
  { name: 'SecureNet' },
  { name: 'InnovateLabs' },
  { name: 'FutureStack' }
]

export default function Partners() {
  return (
    <section id="partners" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Trusted by industry leaders
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Join the world's most innovative companies building on our platform.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-lg p-6 text-center"
            >
              <div className="w-12 h-12 bg-gray-200 dark:bg-gray-800 rounded-lg mx-auto mb-3"></div>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {partner.name}
              </p>
            </div>
          ))}
        </div>
        
        {/* Simple testimonial */}
        <div className="mt-12 bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-lg p-8 text-center max-w-3xl mx-auto">
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            "Nexus has transformed how we build and scale our infrastructure. 
            Their platform is simply unmatched."
          </p>
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-10 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
            <div className="text-left">
              <div className="font-medium text-gray-900 dark:text-white">Sarah Chen</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">CTO, TechCorp</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}