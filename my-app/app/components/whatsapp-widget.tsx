"use client";
import { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, CheckCheck, Clock, Smile, Paperclip } from 'lucide-react';

interface WhatsAppWidgetProps {
  phoneNumber: string;
  name?: string;
  position?: string;
  welcomeMessage?: string;
  avatar?: string;
  businessHours?: string;
}

export default function WhatsAppWidget({
  phoneNumber,
  name = "Yelocode Systems",
  position = "Online",
  welcomeMessage = "Hello! 👋 Welcome to Yelocode Systems. How can we help you today?",
  avatar = "/pics/10001.png",
  businessHours = "Mon-Sat, 9am-6pm"
}: WhatsAppWidgetProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showEmoji, setShowEmoji] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: welcomeMessage,
      sender: 'bot',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: 'read'
    }
  ]);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const widgetRef = useRef<HTMLDivElement>(null);

  // Auto-focus input when chat opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (widgetRef.current && !widgetRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Simulate typing indicator
  const simulateTyping = () => {
    setIsTyping(true);
    setTimeout(() => setIsTyping(false), 2000);
  };

  const handleSendMessage = () => {
    if (!message.trim()) return;

    // Add user message
    const userMessage = {
      id: Date.now(),
      text: message,
      sender: 'user',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: 'sent'
    };
    
    setMessages(prev => [...prev, userMessage]);
    setMessage("");

    // Simulate typing and response
    simulateTyping();
    
    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        text: "Thanks for your message! 👋 Our team will get back to you shortly on WhatsApp. Click the send button to continue the conversation there.",
        sender: 'bot',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        status: 'delivered'
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 2000);
  };

  const handleWhatsAppRedirect = () => {
    const messageToSend = message.trim() 
      ? message
      : "Hello! I'm interested in your courses at Yelocode Systems.";
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(messageToSend)}`;
    window.open(whatsappUrl, '_blank');
    
    // Reset state after redirect
    setTimeout(() => {
      setMessages([{
        id: 1,
        text: welcomeMessage,
        sender: 'bot',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        status: 'read'
      }]);
      setIsOpen(false);
    }, 500);
  };

  const quickReplies = [
    "Course offerings",
    "Tuition fees",
    "Schedule a visit",
    "Payment options"
  ];

  return (
    <div ref={widgetRef} className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-80 sm:w-[380px] bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-yellow-200/50 dark:border-yellow-800/50 overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
          
          {/* Header with Gradient */}
          <div className="relative bg-gradient-to-r from-yellow-500 to-amber-500 p-5">
            {/* Decorative Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-20 h-20 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
            </div>
            
            <div className="relative flex items-center gap-4">
              {/* Avatar with Status */}
              <div className="relative">
                <div className="w-14 h-14 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center border-2 border-white/50">
                  {avatar ? (
                    <img src={avatar} alt={name} className="w-10 h-10 rounded-xl object-cover" />
                  ) : (
                    <MessageCircle className="w-7 h-7 text-white" />
                  )}
                </div>
                <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></span>
              </div>
              
              {/* Info */}
              <div className="flex-1">
                <h3 className="font-bold text-white text-lg">{name}</h3>
                <div className="flex items-center gap-2 text-xs text-yellow-100">
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-green-300 rounded-full animate-pulse"></span>
                    {position}
                  </span>
                  <span>•</span>
                  <span>{businessHours}</span>
                </div>
              </div>
              
              {/* Close Button */}
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors p-1 hover:bg-white/10 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Chat Area */}
          <div className="h-[380px] overflow-y-auto p-4 space-y-3 bg-gray-50/50 dark:bg-gray-800/50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2.5 ${
                    msg.sender === 'user'
                      ? 'bg-gradient-to-r from-yellow-500 to-amber-500 text-white rounded-br-none'
                      : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 shadow-sm rounded-bl-none border border-gray-100 dark:border-gray-700'
                  }`}
                >
                  <p className="text-sm leading-relaxed">{msg.text}</p>
                  <div className={`flex items-center justify-end gap-1 mt-1 text-[10px] ${
                    msg.sender === 'user' ? 'text-yellow-100' : 'text-gray-500'
                  }`}>
                    <span>{msg.time}</span>
                    {msg.sender === 'user' && (
                      msg.status === 'read' ? (
                        <CheckCheck className="w-3 h-3" />
                      ) : (
                        <CheckCheck className="w-3 h-3 opacity-50" />
                      )
                    )}
                  </div>
                </div>
              </div>
            ))}
            
            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-gray-800 rounded-2xl px-4 py-3 shadow-sm border border-gray-100 dark:border-gray-700">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Replies */}
          <div className="px-4 py-2 bg-white/80 dark:bg-gray-900/80 backdrop-blur border-t border-gray-200/50 dark:border-gray-700/50">
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {quickReplies.map((reply, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setMessage(reply);
                    inputRef.current?.focus();
                  }}
                  className="flex-shrink-0 px-3 py-1.5 text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full hover:bg-yellow-100 dark:hover:bg-yellow-900/30 hover:text-yellow-700 dark:hover:text-yellow-300 transition-colors border border-gray-200 dark:border-gray-700"
                >
                  {reply}
                </button>
              ))}
            </div>
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white dark:bg-gray-900 border-t border-gray-200/50 dark:border-gray-700/50">
            <div className="flex items-center gap-2">
              {/* Attachment Button */}
              <button 
                onClick={() => setShowEmoji(!showEmoji)}
                className="p-2 text-gray-500 hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20 rounded-xl transition-colors"
              >
                <Paperclip className="w-5 h-5" />
              </button>
              
              {/* Input */}
              <div className="flex-1 relative">
                <input
                  ref={inputRef}
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Type your message..."
                  className="w-full px-4 py-3 pr-10 bg-gray-100 dark:bg-gray-800 border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500/50 text-gray-900 dark:text-white placeholder-gray-500"
                />
                <button 
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-yellow-500"
                  onClick={() => setShowEmoji(!showEmoji)}
                >
                  <Smile className="w-5 h-5" />
                </button>
              </div>

              {/* Send Button */}
              <button
                onClick={handleWhatsAppRedirect}
                disabled={!message.trim()}
                className={`p-3 rounded-xl transition-all ${
                  message.trim()
                    ? 'bg-gradient-to-r from-yellow-500 to-amber-500 text-white shadow-lg shadow-yellow-500/25 hover:shadow-xl hover:scale-105'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-500 cursor-not-allowed'
                }`}
              >
                <Send className="w-5 h-5" />
              </button>
            </div>

            {/* Footer Note */}
            <p className="text-[10px] text-gray-500 text-center mt-2">
              ⚡ Start chat on WhatsApp • Typically replies within 15 Mins
            </p>
          </div>
        </div>
      )}

      {/* Floating Button with Pulse Animation */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative group"
      >
        {/* Pulse Rings */}
        <span className="absolute inset-0 rounded-full bg-yellow-400 animate-ping opacity-25"></span>
        <span className="absolute inset-0 rounded-full bg-yellow-500 animate-pulse opacity-50"></span>
        
        {/* Button */}
        <div className="relative p-5 bg-gradient-to-r from-yellow-500 to-amber-500 text-white rounded-full shadow-2xl hover:shadow-yellow-500/50 transition-all hover:scale-110">
          <MessageCircle className="w-7 h-7" />
        </div>
        
        {/* Online Indicator */}
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></span>
        
        {/* Tooltip */}
        <span className="absolute right-20 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Chat with us
        </span>
      </button>
    </div>
  );
}