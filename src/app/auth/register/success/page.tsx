import VerificationSuccessClient from "./VerificationSuccessClient";

export default function Page() {
  return (
        <div className="relative flex items-center justify-center min-h-screen bg-blue-950 overflow-hidden">
      {/* 1. Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* مثال لشكل واحد، يمكنك إضافة المزيد وتغيير الأنماط والتحريكات */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/30 rounded-full filter blur-2xl opacity-70 animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-500/30 rounded-lg filter blur-2xl opacity-60 animate-spin-slow"></div>
        <div className="absolute bottom-3/4 right-3/4 w-52 h-52 bg-white/50 rounded-full filter blur-2xl opacity-60 animate-wave-slow"></div>        {/* يمكنك إضافة المزيد من الأشكال هنا بأنماط وتحريكات مختلفة */}
<div className="absolute top-3/4 left-7/8 w-52 h-52 bg-white/50 **rounded-full** filter blur-2xl opacity-40 animate-wave-slow"></div>      
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-500/30 rounded-lg filter blur-2xl opacity-60 animate-spin-slow"></div>
        {/* يمكنك إضافة المزيد من الأشكال هنا بأنماط وتحريكات مختلفة */}
        {/* طبقة ضبابية فوق الأشكال إذا أردت تعزيز التأثير */}
        <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>
      </div>

      <div className="relative z-10">

        <VerificationSuccessClient />
        
      </div>
    </div>
  );
}
