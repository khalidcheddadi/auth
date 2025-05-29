"use client";

import { FaSignInAlt, FaLock, FaEnvelope, FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Link from "next/link";
import { motion } from "framer-motion"; // لاستخدام التحريكات عند الدخول
import SignInOauthButton from "@/components/sign-in-oauth-button";
import { signUpEmailAction } from "@/actions/sign-up-email.action";
import { ButtonVariants, InputVariants } from "@/components/form/ItemsConstant";



const inputVariants = InputVariants;
const buttonVariants = ButtonVariants;

const RegisterForm = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [isPending, setIsPending] = useState(false);
      const router = useRouter();
    
      async function handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault();

    setIsPending(true);

    const formData = new FormData(evt.currentTarget);

    const { error } = await signUpEmailAction(formData);

    if (error) {
      toast.error(error);
      setIsPending(false);
    } else {
      toast.success("Registration complete. You're all set.");
      router.push("/auth/register/success");
    }
  }
    
  return (
      <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, ease: "circOut" }}
      className="w-full md:w-350 max-w-md bg-white/10 backdrop-blur-xl rounded-2xl p-9 md:p-14 shadow-2xl border border-white/20"
    >
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-xl font-bold mb-8 text-center text-white tracking-wider" // لون نص أبيض أو فاتح جداً
      >
       Register a new account
      </motion.h2>

      <form className="space-y-6" onSubmit={handleSubmit}>


          <>
            <motion.div variants={inputVariants} initial="hidden" animate="visible">
              <label className="block mb-1.5 text-sm font-medium text-gray-200">
                Name
              </label>
              <div className="flex items-center bg-white/20 border border-transparent rounded-lg px-3 py-0.5 focus-within:ring-2 focus-within:ring-blue-400">
                <FaEnvelope className="text-gray-400 mr-3" />
                <input
                  type="name"
                  name="name"
                  placeholder="Enter username"
                  className="w-full py-2.5 outline-none text-white bg-transparent placeholder-gray-400"
                />
              </div>
            </motion.div>

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
          </>

    <motion.button
  variants={buttonVariants} // يمكنك تعديل هذه التحريكات لتكون أكثر نعومة أو فخامة
  initial="hidden"
  animate="visible"
  disabled={isPending}
  type="submit"
  className="
    disabled:opacity-40 disabled:cursor-not-allowed 

    w-full flex items-center justify-center gap-x-3
    py-3 px-5
    text-base font-medium text-white

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
            <p className="flex bottom-8 text-sm text-center text-gray-300 z-10">
                have an account?{" "}
                
            </p>
            <Link href="/auth/login" className="text-blue-400 hover:underline font-semibold">
                Login
            </Link>
        </div>
         

      </form>
    </motion.div>
  );
};

export default RegisterForm;