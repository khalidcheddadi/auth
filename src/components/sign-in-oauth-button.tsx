"use client";

import { signIn } from "@/lib/auth-client";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

type ProviderType = "google" | "github";

const SignInOauthButton = () => {
  const handleSignIn = async (provider: ProviderType) => {
    try {
      await signIn.social({
        provider,
        callbackURL: "/profile",
        errorCallbackURL: "/auth/login/error",
      });
    } catch (error) {
      console.error("OAuth sign-in failed:", error);
    }
  };

  return (
    <div className="flex justify-center gap-4 mt-4">
      {/* Google */}
      <button
        type="button"
        onClick={() => handleSignIn("google")}
        className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 border border-gray-300 hover:bg-gray-200 transition duration-300"
        aria-label="Sign in with Google"
      >
        <FcGoogle />
      </button>

      {/* GitHub */}
      <button
        type="button"
        onClick={() => handleSignIn("github")}
        className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 border border-gray-300 hover:bg-gray-200 transition duration-300"
        aria-label="Sign in with GitHub"
      >
        <FaGithub className="text-lg text-gray-800" />
      </button>
    </div>
  );
};

export default SignInOauthButton;
