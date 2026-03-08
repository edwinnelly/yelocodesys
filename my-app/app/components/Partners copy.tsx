import Image from 'next/image'

const partners = [
  { name: 'TechCorp', logo: '/partners/techcorp.svg' },
  { name: 'CloudScale', logo: '/partners/cloudscale.svg' },
  { name: 'DataFlow', logo: '/partners/dataflow.svg' },
  { name: 'SecureNet', logo: '/partners/securenet.svg' },
  { name: 'InnovateLabs', logo: '/partners/innovatelabs.svg' },
  { name: 'FutureStack', logo: '/partners/futurestack.svg' }
]

export default function Partners() {
  return (
    <section id="partners" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-blue-800 bg-clip-text text-transparent">
              Trusted by Industry Leaders
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Join the world's most innovative companies building on our platform.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group relative grayscale hover:grayscale-0 transition-all duration-300"
            >
              <div className="aspect-square bg-gray-100 rounded-2xl flex items-center justify-center p-6 group-hover:bg-gray-50 transition">
                <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 rounded-lg opacity-50 group-hover:opacity-100 transition"></div>
              </div>
              <p className="text-center text-sm text-gray-500 mt-3 group-hover:text-gray-900 transition">
                {partner.name}
              </p>
            </div>
          ))}
        </div>
        
        {/* Testimonial */}
        <div className="mt-16 bg-gradient-to-br from-gray-900 to-blue-900 text-white rounded-3xl p-12 text-center">
          <p className="text-2xl md:text-3xl font-light mb-6 max-w-4xl mx-auto">
            "Nexus has transformed how we build and scale our infrastructure. Their platform is simply unmatched."
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 bg-white/20 rounded-full"></div>
            <div className="text-left">
              <div className="font-semibold">Sarah Chen</div>
              <div className="text-blue-200">CTO, TechCorp</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}