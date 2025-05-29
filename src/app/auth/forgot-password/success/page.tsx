import Link from "next/link";

export default function Page() {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-blue-950 overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* الأشكال المتحركة في الخلفية تبقى كما هي */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/30 rounded-full filter blur-2xl opacity-70 animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-500/30 rounded-lg filter blur-2xl opacity-60 animate-spin-slow"></div>
        <div className="absolute inset-0 bg-blue-400/10 backdrop-blur-sm"></div>
      </div>

      {/* البطاقة الرئيسية: ستظهر بحركة صعود وتلاشي للداخل */}
      <div className="relative z-10 max-w-md w-full space-y-8 p-10 bg-white/10 dark:bg-gray-800 rounded-xl shadow-2xl transform transition-all duration-300 hover:scale-105 animate-fade-in-up-card">
        <div className="flex justify-center">
          {/* أيقونة النجاح: ستظهر بتأثير تكبير وتلاشي */}
          <svg
            className="h-20 w-20 text-green-500 animate-scale-in-icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <div className="text-center">
          {/* العنوان الرئيسي: سيبقى بنفس التحريك مع تعديل التأخير */}
          <h1 className="text-4xl font-extrabold text-white mb-4 animate-fade-in-down-heading">
            Success!
          </h1>
          {/* الفقرة: ستبقى بنفس التحريك مع تعديل التأخير */}
          <p className="mt-2 text-lg text-gray-200 leading-relaxed animate-fade-in-up-paragraph">
            We've sent a **password reset link** to your email address. Please
            check your inbox (and spam folder) to continue.
          </p>
        </div>
        <div className="flex justify-center items-center">
          {/* زر العودة: سيظهر بحركة ارتداد للأعلى وتلاشي */}
          <Link
            href="/auth/register"
            className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-blue-500/20 to-blue-900/20 text-white font-bold text-xl shadow-lg hover:from-black/50 hover:to-black/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-60 active:scale-95 animate-bounce-in-up-button"
          >
            العودة لصفحة التسجيل
          </Link>
        </div>

        {/* النص الإضافي: سيظهر بتأثير تلاشي بسيط */}
        <p className="mt-4 text-center text-sm text-gray-400 animate-fade-in-footer">
          Didn't receive the email? Check your spam folder or try again.
        </p>
      </div>
    </div>
  );
}