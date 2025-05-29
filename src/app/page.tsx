'use client';

import { GetStartedButton } from "@/components/get-started-button";
import { motion } from "framer-motion";
import { ShieldCheck, Sparkles, Zap } from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-800 via-purple-800 to-pink-700 text-white p-4">
      {/* Navbar */}
      <header className="flex justify-between items-center mb-10 max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold">Better Authy</h1>
        <nav className="space-x-4">
          <button className="text-white hover:text-pink-300">Features</button>
          <button className="text-white hover:text-pink-300">Docs</button>
          <button className="text-white hover:text-pink-300">Contact</button>
        </nav>
      </header>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-10 w-full border border-white/20"
        >
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-white to-gray-200 text-transparent bg-clip-text mb-6 drop-shadow-md">
            Welcome to <span className="text-pink-300">Better Authy</span>
          </h1>
          <p className="text-gray-200 mb-8 text-lg">
            Secure. Elegant. Powerful Authentication Experience.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block"
          >
            <GetStartedButton />
          </motion.div>
        </motion.div>
      </div>

      {/* Features Section */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <FeatureCard
          icon={<ShieldCheck className="w-10 h-10 text-pink-300" />}
          title="Advanced Security"
          description="Your data is encrypted and safe with industry-grade security protocols."
        />
        <FeatureCard
          icon={<Sparkles className="w-10 h-10 text-pink-300" />}
          title="Modern UI"
          description="Enjoy a sleek, modern interface designed for simplicity and speed."
        />
        <FeatureCard
          icon={<Zap className="w-10 h-10 text-pink-300" />}
          title="Fast Integration"
          description="Plug and play with your existing apps in minutes, not hours."
        />
      </section>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-lg text-center"
    >
      <div className="mb-4 flex justify-center">{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-200 text-sm">{description}</p>
    </motion.div>
  );
}
