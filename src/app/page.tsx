'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Shield, 
  Coins, 
  TrendingUp, 
  Zap, 
  Lock, 
  ArrowRight,
  CheckCircle,
  DollarSign,
  MessageCircle,
  QrCode,
  Timer,
  Globe
} from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  const [activeFeature, setActiveFeature] = useState(0)
  
  const features = [
    {
      icon: <DollarSign className="w-8 h-8 text-white" />,
      title: "Stablecoin Purchases",
      description: "Buy and sell USDC seamlessly with coinbase's ramp services.",
      color: "bg-green-500"
    },
    {
      icon: <Coins className="w-8 h-8 text-white" />,
      title: "Instant Payments",
      description: "Send and receive USDC tokens instantly through WhatsApp messages. No complex wallet secret key management.",
      color: "bg-green-500"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-white" />,
      title: "Yield Generation",
      description: "Earn APY by depositing your USDC into secure yield-generating vaults curated by specialists",
      color: "bg-green-500"
    },
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: "High Security Standards",
      description: "Coinbase smart wallet with on-device passkey (biometric) authentication, PIN authentication for session management and blockchain-secured transactions.",
      color: "bg-green-500"
    }
  ]

  const steps = [
    {
      step: "1",
      title: "Connect WhatsApp",
      description: "Scan the QR code to start a conversation with Chat-ching",
      icon: <QrCode className="w-6 h-6" />
    },
    {
      step: "2", 
      title: "Register Account",
      description: "Send /register to create your coinbase smart wallet and start using Chat-ching",
      icon: <MessageCircle className="w-6 h-6" />
    },
    {
      step: "3",
      title: "Start Trading",
      description: "Use simple commands like /pay, /buy, /deposit to manage your assets",
      icon: <Coins className="w-6 h-6" />
    }
  ]

  const commands = [
    { command: "/register", description: "Create your smart wallet account" },
    { command: "/balance", description: "Check your USDC balance" },
    { command: "/pay 100 1234567890", description: "Send 100 USDC to another user" },
    { command: "/buy 50", description: "Buy 50 USDC tokens" },
    { command: "/deposit 200", description: "Deposit 200 USDC to vault for yield" },
    { command: "/withdraw 100", description: "Withdraw 100 USDC from vault" }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-green-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-8">
            <Image
              src="/ChatChing.png"
              alt="Chat-ching Logo"
              width={150}
              height={150}
              className="w-24 h-24 mx-auto mb-4 rounded-xl shadow-lg  bg-green-500/10 object-contain"
            />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                Chat-ching
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Your intelligent WhatsApp bot with smart wallet capabilities. 
              Send USDC, earn yield, and trade crypto—all through simple messages.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  document.getElementById('get-started-section')?.scrollIntoView({ 
                    behavior: 'smooth' 
                  })
                }}
                className="bg-gradient-to-r from-green-500 to-green-600 text-black px-8 py-4 rounded-lg font-semibold text-lg shadow-xl hover:shadow-2xl transition-all"
              >
                Get Started <ArrowRight className="inline w-5 h-5 ml-2" />
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                onClick={() => {
                  document.getElementById('demo-section')?.scrollIntoView({ 
                    behavior: 'smooth' 
                  })
                }}
                className="border-2 border-green-500/30 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-500/10 transition-all"
              >
                View Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-black/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to manage your crypto assets through WhatsApp
            </p>
          </motion.div>

                     <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
             {features.map((feature, index) => (
               <motion.div
                 key={`feature-${feature.title}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className={`bg-black/10 backdrop-blur-sm rounded-xl p-6 border border-green-500/20 hover:border-green-500/40 transition-all cursor-pointer ${
                  activeFeature === index ? 'ring-2 ring-green-500' : ''
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <div className={`${feature.color} w-16 h-16 rounded-lg flex items-center justify-center mb-4 mx-auto`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-center">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
                </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              How It Works
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get started with Chat-ching in just three simple steps
            </p>
          </motion.div>

                     <div className="grid md:grid-cols-3 gap-8">
             {steps.map((step, index) => (
               <motion.div
                 key={`step-${step.step}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="bg-gradient-to-r from-green-500 to-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-black">{step.step}</span>
                </div>
                <div className="bg-black/10 backdrop-blur-sm rounded-xl p-6 border border-green-500/20">
                  <div className="flex justify-center mb-4 text-green-400">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-300">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Commands Section */}
      <section className="py-24 bg-black/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Simple Commands
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Manage your crypto with easy-to-remember WhatsApp commands
            </p>
          </motion.div>

                     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
             {commands.map((cmd, index) => (
               <motion.div
                 key={`command-${cmd.command}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-4 border border-green-700/50 hover:border-green-500/50 transition-all"
              >
                <code className="text-green-400 font-mono text-lg block mb-2">
                  {cmd.command}
                </code>
                <p className="text-gray-300 text-sm">
                  {cmd.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                High Security Standards
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Your assets are protected by cutting-edge security measures and blockchain technology.
              </p>
              
                             <div className="space-y-4">
                 {[
                   "Coinbase smart wallet with on-device passkey (biometric) authentication",
                   "You hold ownership of your assets",
                   "Whatsapp business API credentials",
                   "PIN authentication for session management",
                   "Blockchain-secured transactions",
                   "5-minute session timeout for security"
                 ].map((feature, index) => (
                   <motion.div
                     key={`security-${feature.substring(0, 10)}`}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-r from-green-500/20 to-green-700/20 rounded-2xl p-8 border border-green-500/20">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <Lock className="w-12 h-12 text-green-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">Coinbase</h3>
                    <p className="text-gray-300">Smart Wallet with passkeys</p>
                  </div>
                  <div className="text-center">
                    <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">Whatsapp</h3>
                    <p className="text-gray-300">Business API credentials</p>
                  </div>
                  <div className="text-center">
                    <Timer className="w-12 h-12 text-green-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">5min</h3>
                    <p className="text-gray-300">Session Timeout</p>
                  </div>
                  <div className="text-center">
                    <Globe className="w-12 h-12 text-green-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">Multiple</h3>
                    <p className="text-gray-300">Network support</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Customization Section */}
      <section className="py-24 bg-black/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Tailored to Your Needs
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Customize your crypto experience with flexible yield strategies and security options that match your preferences
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Yield Strategies */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-black/20 backdrop-blur-sm rounded-xl p-8 border border-green-500/20"
            >
              <div className="flex items-center mb-6">
                <div className="bg-green-500 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Yield Generation Strategies</h3>
              </div>
              
              <p className="text-gray-300 mb-6">
                Choose from multiple yield strategies curated by DeFi specialists, each designed for different risk profiles and return expectations.
              </p>
              
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-white mb-1">Conservative Strategy</h4>
                  <p className="text-gray-300 text-sm">Low-risk, stable returns through established lending protocols (3-5% APY)</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-white mb-1">Balanced Strategy</h4>
                  <p className="text-gray-300 text-sm">Moderate risk with diversified DeFi positions (5-8% APY)</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-white mb-1">Aggressive Strategy</h4>
                  <p className="text-gray-300 text-sm">Higher risk, higher reward through optimized yield farming (8-15% APY)</p>
                </div>
              </div>
            </motion.div>

            {/* Authorization Options */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-black/20 backdrop-blur-sm rounded-xl p-8 border border-green-500/20"
            >
              <div className="flex items-center mb-6">
                <div className="bg-green-500 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <Lock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Transaction Authorization</h3>
              </div>
              
              <p className="text-gray-300 mb-6">
                Select your preferred authorization method for different types of transactions to match your security preferences.
              </p>
              
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-white mb-1">User signed + PIN + Whatsapp credentials</h4>
                  <p className="text-gray-300 text-sm">Require user signed transactions with PIN and Whatsapp credentials verification for maximum security</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-white mb-1">PIN + Whatsapp credentials Only</h4>
                  <p className="text-gray-300 text-sm">Only require PIN verification and Whatsapp credentials verification for a more seamless experience</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-white mb-1">Ammount based approval</h4>
                  <p className="text-gray-300 text-sm">Set thresholds for different approval methods</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Call to Action for Customization */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mt-12"
          >
            <div className="bg-gradient-to-r from-green-500/10 to-green-700/10 rounded-xl p-6 border border-green-500/20">
              <h4 className="text-xl font-semibold text-white mb-3">
                Personalize Your Experience
              </h4>
              <p className="text-gray-300">
                All settings can be easily configured through simple WhatsApp commands. Change your preferences anytime with commands like <code className="text-green-400 bg-gray-800 px-2 py-1 rounded">/riskprofile</code> and <code className="text-green-400 bg-gray-800 px-2 py-1 rounded">/authprofile</code>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo-section" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              See It In Action
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Watch how easy it is to manage your crypto assets through WhatsApp with Chat-ching
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-green-500/20 shadow-2xl">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-900">
                {/* Video Player */}
                <iframe
                  src="https://www.youtube.com/embed/SaG8dlto_ak"
                  title="Chat-ching Demo Video - WhatsApp Crypto Bot Walkthrough"
                  className="absolute inset-0 w-full h-full rounded-xl"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              
              {/* Video Description */}
              <div className="mt-6 text-center">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Complete Walkthrough
                </h3>
                <p className="text-gray-300">
                  From registration to your first USDC payment in under 2 minutes
                </p>
              </div>
            </div>
          </motion.div>

          {/* Demo Features Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid md:grid-cols-3 gap-6 mt-12"
          >
            <div className="text-center">
              <div className="bg-green-500/10 rounded-lg p-4 mb-4">
                <MessageCircle className="w-8 h-8 text-green-400 mx-auto" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">WhatsApp Integration</h4>
              <p className="text-gray-300 text-sm">See how seamlessly crypto works within WhatsApp</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-500/10 rounded-lg p-4 mb-4">
                <Zap className="w-8 h-8 text-green-400 mx-auto" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Instant Transactions</h4>
              <p className="text-gray-300 text-sm">Watch real-time USDC transfers in action</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-500/10 rounded-lg p-4 mb-4">
                <Shield className="w-8 h-8 text-green-400 mx-auto" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Security Features</h4>
              <p className="text-gray-300 text-sm">Whatsapp credentials, PIN authentication and coinbase&apos;s smart wallet with on-device passkey (biometric) authentication </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="get-started-section" className="py-24 bg-gradient-to-r from-green-500/20 to-green-700/20 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Enjoy the seamless crypto experience through WhatsApp with Chat-ching
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.button 
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-green-500 to-green-600 text-black px-12 py-4 rounded-xl font-semibold text-xl shadow-2xl hover:shadow-3xl transition-all"
              >
                Connect WhatsApp Now <ArrowRight className="inline w-5 h-5 ml-2" />
              </motion.button>
              <div>
                <Image
                  src="/whatsapp_qr.png"
                  alt="WhatsApp QR Code"
                  width={200}
                  height={200}
                  className="mx-auto mb-2 rounded-lg shadow-lg border-2 border-green-400/30 bg-black/10"
                />
                <p className="text-gray-300">Scan QR to start a conversation</p>
              </div>
            </div>
            
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/30 backdrop-blur-sm border-t border-green-500/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Chat-ching</h3>
              <p className="text-gray-300">
                The future of crypto payments through WhatsApp
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Features</h4>
              <ul className="space-y-2 text-gray-300">
                <li>USDC Payments</li>
                <li>Vault Deposits</li>
                <li>Trading</li>
                <li>Security</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Support</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="mailto:jbeliera@ratherlabs.com">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

          </div>
          
          <div className="border-t border-green-500/10 mt-8 pt-8 text-center">
            <p className="text-gray-300">
              © 2025 Chat-ching. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
