'use client'

import { useState } from 'react'

const quotes = [
  {
    text: "The most innovative platform we've ever used. It's completely transformed our development workflow.",
    author: "Alex Rivera",
    role: "Lead Engineer, CloudScale"
  },
  {
    text: "Exceptional performance and reliability. We've seen a 200% improvement in our deployment speed.",
    author: "Maya Patel",
    role: "VP of Engineering, DataFlow"
  },
  {
    text: "The support team is phenomenal. They've helped us architect solutions we never thought possible.",
    author: "James Wilson",
    role: "CTO, InnovateLabs"
  }
]

export default function QuoteSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const nextQuote = () => {
    setCurrentIndex((prev) => (prev + 1) % quotes.length)
  }
  
  const prevQuote = () => {
    setCurrentIndex((prev) => (prev - 1 + quotes.length) % quotes.length)
  }
  
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-950">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-8 md:p-12">
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-6">
            "{quotes[currentIndex].text}"
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
              <div>
                <div className="font-medium text-gray-900 dark:text-white">
                  {quotes[currentIndex].author}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {quotes[currentIndex].role}
                </div>
              </div>
            </div>
            
            <div className="flex gap-2">
              <button
                onClick={prevQuote}
                className="w-10 h-10 border border-gray-200 dark:border-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                ←
              </button>
              <button
                onClick={nextQuote}
                className="w-10 h-10 border border-gray-200 dark:border-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}