"use client";
import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

interface WhatsAppWidgetProps {
  phoneNumber: string; // Include country code, e.g., "2349162865693"
  name?: string;
  position?: string;
  welcomeMessage?: string;
}

export default function WhatsAppWidget({
  phoneNumber,
  name = "Support Team",
  position = "Online | Replies instantly",
  welcomeMessage = "Hello! 👋 How can we help you today?"
}: WhatsAppWidgetProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    const messageToSend = message.trim() 
      ? `I want to know: ${message}` 
      : welcomeMessage;
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(messageToSend)}`;
    window.open(whatsappUrl, '_blank');
    setIsOpen(false);
    setMessage("");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-80 sm:w-96 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-yellow-200 dark:border-yellow-800 overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="bg-yellow-500 p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white">{name}</h3>
                <p className="text-xs text-yellow-100">{position}</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-yellow-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Area */}
          <div className="p-4 bg-gray-50 dark:bg-gray-900 min-h-[200px]">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-3 shadow-sm max-w-[80%]">
              <p className="text-sm text-gray-800 dark:text-gray-200">{welcomeMessage}</p>
              <span className="text-xs text-gray-500 mt-1 block">Just now</span>
            </div>
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white"
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              />
              <button
                onClick={handleSendMessage}
                className="p-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-4 bg-yellow-500 text-white rounded-full shadow-lg hover:bg-yellow-600 transition-all hover:scale-110 relative group"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
      </button>
    </div>
  );
}