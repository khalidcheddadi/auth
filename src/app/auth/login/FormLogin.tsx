"use client";

import { FaSignInAlt, FaGithub, FaLock, FaEnvelope, FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Link from "next/link";
import { signInEmailAction } from "@/actions/sign-in-email.action";
import { motion } from "framer-motion"; // لاستخدام التحريكات عند الدخول
import SignInOauthButton from "@/components/sign-in-oauth-button";

const inputVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.2 } },
};



const LoginForm = () => {

    const [isPending, setIsPending] = useState(false);
    
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    
      async function handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
        evt.preventDefault();
    
        setIsPending(true);
    
        const formData = new FormData(evt.currentTarget);
    
        const { error } = await signInEmailAction(formData);
    
        if (error) {
          toast.error(error);
          setIsPending(false);
        } else {
          toast.success("Login successful. Good to have you back.");
          router.push("/profile");
        }
      }
    

  return (
      <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, ease: "circOut" }}
      className="w-full md:w-450 max-w-md bg-white/10 backdrop-blur-xl rounded-2xl p-9 md:p-14 shadow-2xl border border-white/20"
    >
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-3xl font-bold mb-8 text-center text-white tracking-wider" // لون نص أبيض أو فاتح جداً
      >
        Welcome Back
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

            <motion.div variants={inputVariants} initial="hidden" animate="visible" custom={1}>
              <label className="block mb-1.5 text-sm font-medium text-gray-200">
                Password
              </label>
              <div className="flex items-center bg-white/20 border border-transparent rounded-lg px-3 py-0.5 focus-within:ring-2 focus-within:ring-blue-400">
                <FaLock className="text-gray-400 mr-3" />
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="••••••••"
                  className="w-full py-2.5 outline-none text-white"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="ml-2 text-gray-400 hover:text-gray-200 transition-colors focus:outline-none"
                >
                  {showPassword ? (
                    <FaEyeSlash className="text-xl" />
                  ) : (
                    <FaEye className="text-xl" />
                  )}
                </button>
              </div>
            </motion.div>
            
            <motion.div variants={inputVariants} initial="hidden" animate="visible" custom={2} className="flex items-center justify-end mt-4">
                <Link href="/auth/forgot-password" className="text-sm text-blue-400 hover:text-blue-300 hover:underline">
                    Forgot Password?
                </Link>
            </motion.div>
          </>

    <motion.button
  variants={buttonVariants} // يمكنك تعديل هذه التحريكات لتكون أكثر نعومة أو فخامة
  initial="hidden"
  animate="visible"
  disabled={loading}
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
      Login

</motion.button>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
            <div className="flex items-center justify-center gap-2 my-6">
              <span className="flex-grow border-t border-gray-500/50"></span>
              <span className="text-gray-400 font-medium text-xs">OR CONTINUE WITH</span>
              <span className="flex-grow border-t border-gray-500/50"></span>
            </div>
                    <SignInOauthButton /> {/* تأكد من أن أزرار SocialProviders تتناسب مع التصميم الزجاجي/الداكن */}
          </motion.div>

        <div className="flex justify-center items-center space-x-1">
            <p className="absolute bottom-8 text-sm text-center text-gray-300 z-10">
                Don&apos;t have an account?{" "}
                <Link href="/auth/register" className="text-blue-400 hover:underline font-semibold">
                Register
                </Link>
            </p>
            
        </div>
         

      </form>
    </motion.div>
  );
};

export default LoginForm;