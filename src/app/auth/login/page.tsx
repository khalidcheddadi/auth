
import LoginForm from "./FormLogin";

export default function Page() {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-blue-950 overflow-hidden">
      
            <div className="absolute inset-0 z-0">
        {/* مثال لشكل واحد، يمكنك إضافة المزيد وتغيير الأنماط والتحريكات */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/30 rounded-full filter blur-2xl opacity-70 animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-500/30 rounded-lg filter blur-2xl opacity-60 animate-spin-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-500/30 rounded-lg filter blur-2xl opacity-60 animate-spin-slow"></div>
        {/* يمكنك إضافة المزيد من الأشكال هنا بأنماط وتحريكات مختلفة */}
        {/* طبقة ضبابية فوق الأشكال إذا أردت تعزيز التأثير */}
        <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>
      </div>

            <div  className="relative z-10 p-10">
        {/* <MagicLinkLoginForm /> */}

        <LoginForm />

        
      </div>

      <hr className="max-w-sm" />

    </div>
  );
}
