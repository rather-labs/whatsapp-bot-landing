# Chat-ching Landing Page

A landing page for the Chat-ching WhatsApp bot with smart wallet capabilities. Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Overview

Chat-ching is an intelligent WhatsApp bot that enables users to manage crypto assets through simple text messages. This landing page showcases all the features and capabilities of the bot, including:

- **USDC on/off ramps**: Buy and sell USDC tokens
- **USDC Payments**: Send and receive USDC tokens instantly
- **Vault Deposits**: Earn APY on USDC deposits
- **High-Level Security**: Coinbase smart wallet with passkey authentication, PIN authentication and whatsapp credentials verification
- **Simple Commands**: Easy-to-use WhatsApp commands

## ✨ Features

### 🎨 Design
- **Modern Gradient Design**: Beautiful dark theme with blue/purple gradients
- **Responsive Layout**: Optimized for all device sizes
- **Smooth Animations**: Framer Motion animations and transitions
- **Interactive Elements**: Hover effects and animated components
- **Glass Morphism**: Modern backdrop blur effects

### 📱 Sections
- **Hero Section**: Eye-catching introduction with Chat-ching branding
- **Features Section**: Interactive showcase of bot capabilities
- **How It Works**: Step-by-step user onboarding flow
- **Commands Section**: Visual display of available WhatsApp commands
- **Security Section**: Highlighting security features and benefits
- **Tailoring options**: Highlighting of user tailoring options
- **Demo Video**: Video showing registration and payment
- **Call-to-Action**: Getting started guide with QR code integration
- **Footer**: Links and additional information

### 🛠 Technical Features
- **Next.js 14**: Latest version with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first styling
- **Framer Motion**: Smooth animations and transitions
- **Lucide Icons**: Modern icon library
- **Responsive Design**: Mobile-first approach
- **SEO Optimized**: Meta tags and semantic HTML

## 🏗 Project Structure

```
chat-ching-landing/
├── src/
│   └── app/
│       ├── page.tsx          # Main landing page component
│       ├── layout.tsx        # Root layout
│       └── globals.css       # Global styles
├── public/                   # Static assets
├── tailwind.config.ts        # Tailwind configuration
├── next.config.ts           # Next.js configuration
├── package.json             # Dependencies
└── README.md               # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Navigate to the project directory:**
   ```bash
   cd chat-ching-landing
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
# Build the application
npm run build

# Start production server
npm start
```


### Updating Commands

Modify the `commands` array:
```tsx
const commands = [
  { 
    command: "/your-command", 
    description: "Command description" 
  }
]
```



## 🚀 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## 📝 License

This project is part of the Chat-ching WhatsApp bot system and follows the same licensing terms.

