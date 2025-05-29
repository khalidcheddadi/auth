'use client';

import { GetStartedButton } from "@/components/get-started-button";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-800 via-purple-800 to-pink-700 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-10 max-w-xl w-full text-center border border-white/20"
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
  );
}
