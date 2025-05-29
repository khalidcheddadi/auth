// src/components/VerificationSuccessClient.tsx
"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { ContainerVariants, itemsConstant, ItemVariants } from "@/components/form/ItemsConstant";


const VerificationSuccessClient = () => {
  const [particles, setParticles] = useState<any[]>([]);

  useEffect(() => {
    const items = itemsConstant
    setParticles(items);

    const timeout = setTimeout(() => {
      setParticles([]);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  const containerVariants = ContainerVariants;

  const itemVariants = ItemVariants;

  return (
    <>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{ opacity: 1, y: 0, scale: 1 }}
          animate={{
            x: particle.x,
            y: particle.y,
            opacity: 0,
            rotate: particle.rotate,
            scale: particle.scale,
          }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute text-3xl pointer-events-none select-none"
          style={{
            top: "50%",
            left: "50%",
            color: particle.color,
            zIndex: 20,
          }}
        >
          {particle.type}
        </motion.div>
      ))}

      <motion.div
        className="relative bg-white/10 bg-opacity-5 backdrop-filter backdrop-blur-3xl rounded-3xl shadow-2xl p-10 max-w-lg w-full text-center border border-white/10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-blob-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-indigo-600 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-blob-pulse-delay"></div>
        </div>

        <div className="relative z-10">
          <motion.div variants={itemVariants}>
            <CheckCircleIcon className="w-28 h-28 text-teal-400 mx-auto mb-7 drop-shadow-xl" />
          </motion.div>

          <motion.div className="flex items-center justify-center mt-4 space-x-3" variants={itemVariants}>
            <motion.h1
              className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 tracking-tight leading-tight"
              variants={itemVariants}
            >
              تم ارسال بنجاح!
            </motion.h1>
            <motion.div
              className="text-5xl"
              variants={{
                hidden: { opacity: 0, scale: 0.5, rotate: -15 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  rotate: 0,
                  transition: { type: "spring", duration: 0.8 },
                },
              }}
            >
              🎉
            </motion.div>
          </motion.div>

          
          <motion.p className="text-gray-400 mt-5 text-xl leading-relaxed" variants={itemVariants}>
         تهانينا! حصلت على رسالة  تاكيد الحساب انتقل الى بريدك الإلكتروني  
        لكي تنهي انشاء حسابك بنجاحك
          </motion.p>

          <motion.div className="mt-10" variants={itemVariants}>
            <Link
              href="/auth/register"
              className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-blue-500/30 to-blue-900/30 text-white font-bold text-xl shadow-lg hover:from-black/40 hover:to-black/40 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-60 active:scale-95"
            >
               العودة لصفحة التسجيل
            </Link>
          </motion.div>
          

        </div>
      </motion.div>
    </>
  );
};

export default VerificationSuccessClient;
