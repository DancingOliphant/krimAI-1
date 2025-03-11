import React, { useState, useEffect, useCallback } from 'react';
import { Bot, Sparkles, Zap, MessageSquare, ArrowRight, Github, Menu, X, Code2, Blocks, Cpu, Workflow, BrainCircuit, Fingerprint, ChevronRight, Star, Shield, Rocket, Users } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('chat');
  const [typedText, setTypedText] = useState('');
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const messages = [
    "Hi! I'm your AI assistant. How can I help you today?",
    "I can help you with code generation, API integration, and more.",
    "Let me know what you'd like to build!"
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const typeNextMessage = useCallback(() => {
    setTypedText('');
    setIsTyping(true);
    let currentText = '';
    let currentIndex = 0;
    const message = messages[currentMessageIndex];

    const interval = setInterval(() => {
      if (currentIndex < message.length) {
        currentText = message.slice(0, currentIndex + 1);
        setTypedText(currentText);
        currentIndex++;
      } else {
        setIsTyping(false);
        clearInterval(interval);
        setTimeout(() => {
          setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
          setIsTyping(true);
        }, 2000);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [currentMessageIndex, messages]);

  useEffect(() => {
    const timeout = setTimeout(typeNextMessage, isTyping ? 0 : 2000);
    return () => clearTimeout(timeout);
  }, [currentMessageIndex, isTyping, typeNextMessage]);

  const features = [
    {
      icon: <Code2 />,
      title: "Code Generation",
      description: "Generate high-quality code in multiple programming languages with detailed explanations."
    },
    {
      icon: <Blocks />,
      title: "API Integration",
      description: "Seamlessly integrate with external APIs and services for enhanced functionality."
    },
    {
      icon: <Cpu />,
      title: "Advanced AI Models",
      description: "Access state-of-the-art language models for human-like interactions and problem-solving."
    },
    {
      icon: <Workflow />,
      title: "Workflow Automation",
      description: "Automate repetitive tasks and streamline your development workflow efficiently."
    },
    {
      icon: <BrainCircuit />,
      title: "Smart Context",
      description: "Maintain context across conversations for more meaningful interactions."
    },
    {
      icon: <Fingerprint />,
      title: "Secure Platform",
      description: "Enterprise-grade security with data encryption and access controls."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Senior Developer",
      company: "TechCorp",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop",
      content: "Vogent has transformed our development workflow. The code generation is incredibly accurate and saves us hours of work."
    },
    {
      name: "Michael Chen",
      role: "CTO",
      company: "StartupX",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop",
      content: "The API integration features are a game-changer. We've reduced our integration time by 70% using Vogent."
    },
    {
      name: "Emily Rodriguez",
      role: "Product Manager",
      company: "InnovateLabs",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1887&auto=format&fit=crop",
      content: "Our team's productivity has skyrocketed since implementing Vogent. The AI assistance is like having an extra team member."
    }
  ];

  const stats = [
    { icon: <Users />, value: "10,000+", label: "Active Users" },
    { icon: <Star />, value: "4.9/5", label: "User Rating" },
    { icon: <Shield />, value: "99.9%", label: "Uptime" },
    { icon: <Rocket />, value: "500M+", label: "API Calls" }
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0A0A0A]/95 backdrop-blur-sm' : ''}`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Bot className="w-8 h-8 text-purple-500" />
              <span className="text-xl font-bold">Vogent</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="hover:text-purple-500 transition-colors">Features</a>
              <a href="#testimonials" className="hover:text-purple-500 transition-colors">Testimonials</a>
              <a href="#pricing" className="hover:text-purple-500 transition-colors">Pricing</a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                className="flex items-center space-x-2 hover:text-purple-500 transition-colors">
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
              <button className="px-6 py-2 bg-white/10 rounded-full font-semibold hover:bg-white/20 transition-colors">
                Sign In
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-[#0A0A0A] border-t border-white/10 py-4">
              <div className="flex flex-col space-y-4 px-6">
                <a href="#features" className="hover:text-purple-500 transition-colors">Features</a>
                <a href="#testimonials" className="hover:text-purple-500 transition-colors">Testimonials</a>
                <a href="#pricing" className="hover:text-purple-500 transition-colors">Pricing</a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                  className="flex items-center space-x-2 hover:text-purple-500 transition-colors">
                  <Github className="w-5 h-5" />
                  <span>GitHub</span>
                </a>
                <button className="px-6 py-2 bg-white/10 rounded-full font-semibold hover:bg-white/20 transition-colors w-full">
                  Sign In
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-32 pb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <div className="relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-3xl -z-10" />
              <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                Your AI Agent for
                <span className="gradient-text"> Everything</span>
              </h1>
            </div>
            <p className="text-xl text-gray-400 mb-12">
              Create, customize, and deploy AI agents for any task. Powered by advanced language models and cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 gradient-bg rounded-full font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity group">
                Get Started 
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white/10 rounded-full font-semibold hover:bg-white/20 transition-colors">
                View Demo
              </button>
            </div>
          </div>

          {/* Interactive Demo */}
          <div className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm">
            <div className="flex gap-2 mb-4">
              <button 
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeTab === 'chat' ? 'bg-white/10' : 'hover:bg-white/5'}`}
                onClick={() => setActiveTab('chat')}
              >
                Chat
              </button>
              <button 
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeTab === 'code' ? 'bg-white/10' : 'hover:bg-white/5'}`}
                onClick={() => setActiveTab('code')}
              >
                Code
              </button>
            </div>
            <div className="h-[400px] bg-white/5 rounded-xl p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-purple-500" />
                </div>
                <div className="flex-1">
                  <p className="text-gray-400">{typedText}</p>
                  {isTyping && <span className="inline-block w-2 h-4 bg-purple-500 animate-pulse" />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-6 py-20 border-t border-white/10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-purple-500/20 rounded-xl flex items-center justify-center">
                <div className="w-6 h-6 text-purple-500">{stat.icon}</div>
              </div>
              <div className="text-3xl font-bold mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Powerful Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group bg-white/5 p-8 rounded-2xl hover:bg-white/10 transition-colors">
              <div className="bg-purple-500/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <div className="w-8 h-8 text-purple-500 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="container mx-auto px-6 py-20 border-t border-white/10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">What Our Users Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/5 p-8 rounded-2xl">
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.role} at {testimonial.company}</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="container mx-auto px-6 py-20 border-t border-white/10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Simple Pricing</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Free Tier */}
          <div className="bg-white/5 rounded-2xl p-8 hover:bg-white/10 transition-colors">
            <h3 className="text-2xl font-bold mb-4">Free</h3>
            <div className="text-4xl font-bold mb-8">$0<span className="text-lg text-gray-400">/mo</span></div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-purple-500" />
                <span>1,000 API calls/month</span>
              </li>
              <li className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-purple-500" />
                <span>Basic chat features</span>
              </li>
              <li className="flex items-center gap-2">
                <Code2 className="w-5 h-5 text-purple-500" />
                <span>Code generation</span>
              </li>
            </ul>
            <button className="w-full px-6 py-3 bg-white/10 rounded-full font-semibold hover:bg-white/20 transition-colors">
              Get Started
            </button>
          </div>

          {/* Pro Tier */}
          <div className="relative bg-gradient-to-b from-purple-500/20 to-pink-500/20 rounded-2xl p-8 transform hover:scale-105 transition-all">
            <div className="absolute top-4 right-4 px-3 py-1 bg-purple-500/20 rounded-full text-sm font-medium text-purple-500">
              Popular
            </div>
            <h3 className="text-2xl font-bold mb-4">Pro</h3>
            <div className="text-4xl font-bold mb-8">$49<span className="text-lg text-gray-400">/mo</span></div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-purple-500" />
                <span>50,000 API calls/month</span>
              </li>
              <li className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-purple-500" />
                <span>Advanced chat features</span>
              </li>
              <li className="flex items-center gap-2">
                <Code2 className="w-5 h-5 text-purple-500" />
                <span>Advanced code generation</span>
              </li>
              <li className="flex items-center gap-2">
                <BrainCircuit className="w-5 h-5 text-purple-500" />
                <span>Custom AI models</span>
              </li>
            </ul>
            <button className="w-full px-6 py-3 gradient-bg rounded-full font-semibold hover:opacity-90 transition-opacity">
              Get Started
            </button>
          </div>

          {/* Enterprise Tier */}
          <div className="bg-white/5 rounded-2xl p-8 hover:bg-white/10 transition-colors">
            <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
            <div className="text-4xl font-bold mb-8">Custom</div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-purple-500" />
                <span>Unlimited API calls</span>
              </li>
              <li className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-purple-500" />
                <span>Custom features</span>
              </li>
              <li className="flex items-center gap-2">
                <Fingerprint className="w-5 h-5 text-purple-500" />
                <span>Dedicated support</span>
              </li>
              <li className="flex items-center gap-2">
                <BrainCircuit className="w-5 h-5 text-purple-500" />
                <span>Custom AI training</span>
              </li>
            </ul>
            <button className="w-full px-6 py-3 bg-white/10 rounded-full font-semibold hover:bg-white/20 transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="relative bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl p-12 text-center overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=3276&auto=format&fit=crop')] opacity-5 bg-cover bg-center" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Join thousands of developers and businesses already using Vogent to power their AI solutions.
            </p>
            <button className="px-8 py-4 gradient-bg rounded-full font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity mx-auto group">
              Start Building 
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 border-t border-white/10">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Bot className="w-6 h-6 text-purple-500" />
              <span className="font-semibold">Vogent</span>
            </div>
            <p className="text-gray-400">
              Building the future of AI-powered development.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#features" className="hover:text-purple-500">Features</a></li>
              <li><a href="#pricing" className="hover:text-purple-500">Pricing</a></li>
              <li><a href="#testimonials" className="hover:text-purple-500">Testimonials</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-purple-500">About</a></li>
              <li><a href="#" className="hover:text-purple-500">Blog</a></li>
              <li><a href="#" className="hover:text-purple-500">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-purple-500">Privacy</a></li>
              <li><a href="#" className="hover:text-purple-500">Terms</a></li>
              <li><a href="#" className="hover:text-purple-500">Security</a></li>
            </ul>
          </div>
        </div>
        <div className="text-sm text-gray-400 text-center pt-8 border-t border-white/10">
          © 2024 Vogent. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;