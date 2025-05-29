"use client";

import { FaSignInAlt, FaEnvelope } from "react-icons/fa";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Link from "next/link";
import { forgetPassword } from "@/lib/auth-client";
import { motion } from "framer-motion"; // لاستخدام التحريكات عند الدخول

const inputVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.2 } },
};



const ForgotForm = () => {

   const [isPending, setIsPending] = useState(false);
    const router = useRouter();
    async function handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
      evt.preventDefault();
      const formData = new FormData(evt.currentTarget);
      const email = String(formData.get("email"));
  
      if (!email) return toast.error("Please enter your email.");
  
      await forgetPassword({
        email,
        redirectTo: "/auth/reset-password",
        fetchOptions: {
          onRequest: () => {
            setIsPending(true);
          },
          onResponse: () => {
            setIsPending(false);
          },
          onError: (ctx) => {
            toast.error(ctx.error.message);
          },
          onSuccess: () => {
            toast.success("Reset link sent to your email.");
            router.push("/auth/forgot-password/success");
          },
        },
      });
    }

  return (
      <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, ease: "circOut" }}
      className="w-full max-w-md bg-white/10 backdrop-blur-xl rounded-2xl p-8 md:p-10 shadow-2xl border border-white/20"
    >
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-3xl font-bold mb-8 text-center text-white tracking-wider" // لون نص أبيض أو فاتح جداً
      >
        Forgot Password
      </motion.h2>

      <form className="space-y-6" onSubmit={handleSubmit}>


          <>
            <motion.div variants={inputVariants} initial="hidden" animate="visible">
              <label className="block mb-1.5 text-sm font-medium text-gray-200">
                Email
              </label>
              <div className="flex items-center bg-white/20 border border-transparent rounded-lg px-3 py-0.5 focus-within:ring-2 focus-within:ring-blue-400">
                <FaEnvelope className="text-gray-400 mr-3" />
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  className="w-full py-2.5 outline-none text-white bg-transparent placeholder-gray-400"
                />
              </div>
            </motion.div>

          </>

    <motion.button
  variants={buttonVariants} // يمكنك تعديل هذه التحريكات لتكون أكثر نعومة أو فخامة
  initial="hidden"
  animate="visible"
  disabled={isPending}
  type="submit"
  className="
    disabled:opacity-40 disabled:cursor-not-allowed 

    w-full flex items-center justify-center gap-x-3 /* محاذاة وتوسيط الأيقونة والنص */
    py-3 px-5 /* توازن جيد للحشو الداخلي */
    text-base font-medium text-white /* خط أبيض نقي أو لون فاتح جداً */

    bg-black/40
    hover:bg-blue-950/20
    active:bg-white/25 

    border border-white/20 
    rounded-xl 

    shadow-lg 
    hover:shadow-[0_0_25px_5px_rgba(100,116,200,0.2)] 


    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent focus:ring-white/50

    transition-all duration-300 ease-in-out 
    transform hover:-translate-y-px active:translate-y-0
  "
>

      <FaSignInAlt className="text-lg" />
     Send Reset Link

</motion.button>
         

        <div className="flex justify-center items-center">
            <p className="absolute bottom-8 text-sm text-center text-gray-300 z-10">
                {" "}
                <Link href="/auth/login" className="text-blue-400 hover:underline font-semibold">
                Go to Login
                </Link>
            </p>
        </div>

      </form>
    </motion.div>
  );
};

export default ForgotForm;