'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const quotes = [
  {
    text: "The most innovative platform we've ever used. It's completely transformed our development workflow.",
    author: "Alex Rivera",
    role: "Lead Engineer, CloudScale",
    image: "/avatars/avatar1.jpg"
  },
  {
    text: "Exceptional performance and reliability. We've seen a 200% improvement in our deployment speed.",
    author: "Maya Patel",
    role: "VP of Engineering, DataFlow",
    image: "/avatars/avatar2.jpg"
  },
  {
    text: "The support team is phenomenal. They've helped us architect solutions we never thought possible.",
    author: "James Wilson",
    role: "CTO, InnovateLabs",
    image: "/avatars/avatar3.jpg"
  }
]

export default function QuoteSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % quotes.length)
    }, 5000)
    
    return () => clearInterval(timer)
  }, [])
  
  const nextQuote = () => {
    setCurrentIndex((prev) => (prev + 1) % quotes.length)
  }
  
  const prevQuote = () => {
    setCurrentIndex((prev) => (prev - 1 + quotes.length) % quotes.length)
  }
  
  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto relative">
          <Quote className="absolute -top-6 -left-6 w-16 h-16 text-blue-200" />
          
          <div className="bg-white rounded-3xl shadow-2xl p-12 md:p-16 relative">
            <div className="text-center">
              <p className="text-2xl md:text-3xl text-gray-800 font-light mb-8 leading-relaxed">
                "{quotes[currentIndex].text}"
              </p>
              
              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                  {quotes[currentIndex].author.charAt(0)}
                </div>
                <div className="text-left">
                  <div className="font-bold text-lg">{quotes[currentIndex].author}</div>
                  <div className="text-gray-500">{quotes[currentIndex].role}</div>
                </div>
              </div>
            </div>
            
            {/* Navigation buttons */}
            <button
              onClick={prevQuote}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextQuote}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition"
            >
              <ChevronRight size={20} />
            </button>
            
            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {quotes.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'w-8 bg-blue-600'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}