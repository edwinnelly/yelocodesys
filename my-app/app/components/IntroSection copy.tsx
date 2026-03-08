import { Shield, Cpu, Cloud, Users } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade encryption and compliance with global security standards.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Cpu,
    title: 'Edge Computing',
    description: 'Process data at the source for minimal latency and maximum efficiency.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Cloud,
    title: 'Cloud Native',
    description: 'Fully managed, scalable infrastructure across multiple cloud providers.',
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'World-class engineers and architects at your service.',
    color: 'from-green-500 to-emerald-500'
  }
]

export default function IntroSection() {
  return (
    <section id="solutions" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-blue-800 bg-clip-text text-transparent">
              Built for Scale
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Our platform combines cutting-edge technology with enterprise-grade reliability to deliver unmatched performance.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 text-white`}>
                  <Icon size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}