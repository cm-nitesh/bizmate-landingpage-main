import {
  Star,
  Users,
  MapPin,
  Building,
  MessageSquare,
  Smartphone,
  Palette,
  CreditCard,
  Bot,
  ArrowRight,
  CheckCircle,
  Play,
  Instagram,
  Youtube,
  Linkedin,
  Mail,
} from "lucide-react";
import { motion } from "motion/react";
import { useState, useEffect, useRef } from "react";

import { useNavigate } from "react-router-dom";

const PricingSection = () => {
  const navigate = useNavigate();}

// Counter component for animated counting
const AnimatedCounter = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    const startValue = 0;
    const endValue = end;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(
        easeOutQuart * (endValue - startValue) + startValue,
      );

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

export default function HomePage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      rating: 5,
      text: "The automated WhatsApp messaging has increased our customer engagement by 300%. Our clients love the instant responses and professional digital presence.",
      name: "Rajesh Kumar",
      role: "Restaurant Owner, Mumbai",
      initial: "R",
      gradient: "from-blue-600 to-purple-600",
    },
    {
      rating: 5,
      text: "The NFC business cards are a game-changer! My clients are impressed with the professional touch, and I've seen a 40% increase in follow-up meetings.",
      name: "Priya Sharma",
      role: "Real Estate Agent, Delhi",
      initial: "P",
      gradient: "from-green-500 to-teal-500",
    },
    {
      rating: 5,
      text: "Festival graphics and promotional materials have saved us thousands in design costs. The quality is professional and our brand consistency has improved dramatically.",
      name: "Amit Patel",
      role: "Retail Chain Owner, Bangalore",
      initial: "A",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      rating: 5,
      text: "The 24/7 chatbot handles customer queries perfectly while I sleep. My business literally runs itself now, and customer satisfaction has never been higher.",
      name: "Sneha Reddy",
      role: "E-commerce Store Owner, Hyderabad",
      initial: "S",
      gradient: "from-orange-500 to-red-500",
    },
    {
      rating: 5,
      text: "Campaign scheduling and automated follow-ups have doubled our conversion rates. The ROI on this platform is incredible for small businesses like ours.",
      name: "Vikram Singh",
      role: "Digital Marketing Agency, Pune",
      initial: "V",
      gradient: "from-indigo-500 to-blue-500",
    },
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
          <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Bizmate
          </h1>

          <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
            <a href="#features" className="hover:text-blue-600 transition">Features</a>
            <a href="#how-it-works" className="hover:text-blue-600 transition">How It Works</a>
            <a href="#pricing" className="hover:text-blue-600 transition">Pricing</a>
            <a href="#testimonials" className="hover:text-blue-600 transition">Contact us</a>
          </nav>

          <button
            onClick={() => (window.location.href = "/contact-page")}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
          >
            Let's Talk
          </button>
        </div>
      </header>


      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 pt-32 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left ml-[6.5rem]">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Your Branding
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  {" "}
                  Branding Partner
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Trusted by 10,000+ Businesses Across India
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                {/* <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  Get Started
                </button> */}
                <button
                  onClick={() => {
                    document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                </button>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300 flex items-center justify-center gap-2">
                  <Play size={20} />
                  Watch Demo
                </button>
              </div>
            </div>
            <div className="mr-10"><img class="h-auto w-auto object-cover ..." src="src\__create\Your paragraph text (1).jpg" /> </div>

          </div>
        </div>
      </section>

      {/*2nd Stats Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                <AnimatedCounter end={12} suffix="k+" />
              </h3>
              <p className="text-gray-600">Active Users</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-white" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                <AnimatedCounter end={270} suffix="+" />
              </h3>
              <p className="text-gray-600">Cities</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="text-white" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                <AnimatedCounter end={80} suffix="+" />
              </h3>
              <p className="text-gray-600">Industries</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="text-white" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">4.8 ★</h3>
              <p className="text-gray-600">Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-20 px-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Powerful Features for Your Business
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to grow your brand and connect with customers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg transition-all duration-500 transform hover:scale-105 hover:bg-gradient-to-r hover:from-fuchsia-300 hover:to-purple-400 hover:text-white">

              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6"><img src="https://cdn-icons-png.flaticon.com/512/14427/14427133.png" alt="" /></div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Automated Communication
              </h3>
              <p className="text-gray-600">
                SMS & WhatsApp follow-ups that keep your customers engaged
                automatically.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                <Smartphone className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Enhanced Digital Presence
              </h3>
              <p className="text-gray-600">
                Digital profile, graphics library, and NFC card for professional
                branding.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6">
                <Bot className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                WhatsApp Automation
              </h3>
              <p className="text-gray-600">
                Chatbot and bulk messaging to handle customer queries 24/7.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6">
                <Palette className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Festival & Promotional Graphics
              </h3>
              <p className="text-gray-600">
                Editable branded creatives for festivals and promotional
                campaigns.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6">
                <CreditCard className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Smart NFC Business Card
              </h3>
              <p className="text-gray-600">
                Tap-to-share digital profile for instant professional
                connections.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6">
                <MessageSquare className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                24/7 WhatsApp Chatbot
              </h3>
              <p className="text-gray-600">
                FAQ handling, lead generation, and services menu automation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Get started in just 4 simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Sign up & onboard
              </h3>
              <p className="text-gray-600">
                Create your account and complete the quick setup process
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Setup digital profile
              </h3>
              <p className="text-gray-600">
                Build your professional digital presence with our tools
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-pink-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Automate messages
              </h3>
              <p className="text-gray-600">
                Set up automated communication workflows
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-red-600 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Engage & grow
              </h3>
              <p className="text-gray-600">
                Watch your business grow with enhanced customer engagement
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Effectiveness Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">
            Make Your Marketing More Effective
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Leverage AI-driven automation, smart campaign scheduling, and
            detailed insights to maximize your marketing ROI
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Bot className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">AI-Driven Automation</h3>
              <p className="text-gray-300">
                Smart algorithms that optimize your campaigns automatically
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Campaign Scheduler</h3>
              <p className="text-gray-300">
                Plan and execute marketing campaigns at the perfect time
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-teal-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Star className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Detailed Insights</h3>
              <p className="text-gray-300">
                Track performance and optimize with actionable analytics
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Empowerment Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Connecting Businesses, Empowering People
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            We enable SMBs and startups to compete with enterprise-level
            marketing tools, helping them grow and succeed in the digital
            marketplace
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="text-center">
                <h3 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
                  <AnimatedCounter end={5} suffix="M+" />
                </h3>
                <p className="text-xl text-gray-700">Automated Messages Sent</p>
              </div>
              <div className="text-center">
                <h3 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-2">
                  <AnimatedCounter end={2} suffix="k+" />
                </h3>
                <p className="text-xl text-gray-700">Active NFC Cards</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="text-white" size={24} />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-gray-900">
                      Enterprise-level tools
                    </h4>
                    <p className="text-gray-600 text-sm">
                      For small business budgets
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <Users className="text-white" size={24} />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-gray-900">
                      Community support
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Learn and grow together
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <ArrowRight className="text-white" size={24} />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-gray-900">
                      Scalable solutions
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Grow at your own pace
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section with Carousel */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Real stories from businesses that transformed with our platform
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Carousel Container */}
            <div className="relative overflow-hidden rounded-2xl">
              <motion.div
                className="flex transition-transform duration-500 ease-in-out"
                animate={{ x: `-${currentTestimonial * 100}%` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="bg-gray-50 rounded-2xl p-8 mx-auto max-w-2xl">
                      <div className="flex items-center gap-1 mb-6 justify-center">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="text-yellow-400 fill-current"
                            size={24}
                          />
                        ))}
                      </div>
                      <p className="text-gray-700 mb-8 text-lg leading-relaxed text-center">
                        "{testimonial.text}"
                      </p>
                      <div className="flex items-center gap-4 justify-center">
                        <div
                          className={`w-16 h-16 bg-gradient-to-r ${testimonial.gradient} rounded-full flex items-center justify-center text-white text-xl font-bold`}
                        >
                          {testimonial.initial}
                        </div>
                        <div className="text-center">
                          <h4 className="font-semibold text-gray-900 text-lg">
                            {testimonial.name}
                          </h4>
                          <p className="text-gray-600">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentTestimonial
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 w-8"
                      : "bg-gray-300 hover:bg-gray-400"
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Special Offer Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl font-bold mb-6">
                Subscribe Now and Get Free NFC Smart Card
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Limited time offer! Start your digital transformation journey
                today and receive a premium NFC business card absolutely free.
              </p>
              <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                Subscribe Now
              </button>
            </div>
            <div className="relative">
              <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-8 shadow-2xl">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CreditCard className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Premium NFC Card
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">
                    Tap to share your digital profile
                  </p>
                  <div className="bg-gradient-to-r from-blue-400 to-purple-400 h-2 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

            {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Affordable Pricing for Every Business
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Choose a plan that fits your needs. Simple, transparent pricing with no hidden fees.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border hover:scale-105 transition-transform">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Basic</h3>
              <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
                ₹499 <span className="text-lg font-medium text-gray-600">/mo</span>
              </p>
              <ul className="text-gray-600 space-y-3 mb-6">
                <li>✔ Digital Profile</li>
                <li>✔ NFC Business Card</li>
                <li>✔ Limited Graphics</li>
                <li>✘ Chatbot Automation</li>
              </ul>
              <button 
              onClick={() => navigate("/payment-page")}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition">
                Get Started
              </button>
            </div>

            {/* Standard Plan */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-2xl shadow-2xl p-8 scale-105 border-4 border-blue-500">
              <h3 className="text-2xl font-bold mb-4">Standard</h3>
              <p className="text-4xl font-bold mb-6">
                ₹999 <span className="text-lg font-medium">/mo</span>
              </p>
              <ul className="space-y-3 mb-6">
                <li>✔ Everything in Basic</li>
                <li>✔ Festival Graphics</li>
                <li>✔ Chatbot Automation</li>
                <li>✔ Bulk WhatsApp Messaging</li>
              </ul>
              <button className="w-full bg-white text-purple-600 py-3 rounded-lg font-semibold hover:shadow-xl transition">
                Get Started
              </button>
            </div>

            {/* Premium Plan */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border hover:scale-105 transition-transform">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Premium</h3>
              <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-red-500 mb-6">
                ₹1999 <span className="text-lg font-medium text-gray-600">/mo</span>
              </p>
              <ul className="text-gray-600 space-y-3 mb-6">
                <li>✔ Everything in Standard</li>
                <li>✔ Advanced Analytics</li>
                <li>✔ Priority Support</li>
                <li>✔ Unlimited Campaigns</li>
              </ul>
              <button 
                onClick={() => window.location.href = "/payment-page.jsx"}
              className="w-full bg-gradient-to-r from-pink-500 to-red-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                BrandPlatform
              </h3>
              <p className="text-gray-400 mb-6">
                Empowering businesses with digital branding solutions that drive
                growth and success.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <Youtube size={20} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Press
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    API Docs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Status
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center gap-3">
                  <Mail size={16} />
                  <span>support@Bizmate.com</span>
                </div>
                <div className="text-sm">
                  <p>Business Hours:</p>
                  <p>Mon-Fri: 9AM-6PM IST</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                © 2025 BrandPlatform. All rights reserved.
              </p>
              <div className="flex gap-6 text-sm text-gray-400">
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
