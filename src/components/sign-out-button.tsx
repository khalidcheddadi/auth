"use client";

import { Button } from "@/components/ui/button";
import { signOut } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { Loader2 } from "lucide-react"; // استيراد أيقونة التحميل

export const SignOutButton = () => {
  const [isPending, setIsPending] = useState(false);
  const router = useRouter();

  async function handleClick() {
    await signOut({
      fetchOptions: {
        onRequest: () => {
          setIsPending(true);
        },
        onResponse: () => {
          // سيتم تعيين isPending إلى false في onSuccess أو onError بشكل ضمني
          // لكن من الجيد إبقاؤها هنا كإجراء احتياطي إذا لم يتم استدعاء أي منهما لسبب ما
          setIsPending(false);
        },
        onError: (ctx) => {
          setIsPending(false); // تأكد من إيقاف التحميل عند الخطأ
          toast.error(ctx.error.message);
        },
        onSuccess: () => {
          setIsPending(false); // إيقاف التحميل عند النجاح
          toast.success("تم تسجيل خروجك بنجاح. نراك قريباً!"); // رسالة نجاح باللغة العربية
          router.push("/auth/login");
        },
      },
    });
  }

  return (
    <div className="flex justify-center items-center mt-6 space-y-3">
       <Button
      onClick={handleClick}
      size="sm"
      variant="destructive" // يمكنك تغيير هذا إذا أردت نمطًا أساسيًا مختلفًا
      disabled={isPending}
      // تعديلات الأسلوب لجعل الزر "أخف" وإضافة محاذاة للمحتوى
      // يفترض هذا استخدام Tailwind CSS. إذا لم يكن الأمر كذلك، قم بتعديل الأنماط وفقًا لذلك.
      className={`w-full flex min-w-[140px] bg-red-400/80 items-center justify-center
        from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white transition-all duration-300 transform hover:scale-105
         ease-in-out ${
        isPending ? "opacity-70 cursor-wait" : "hover:opacity-90"
      }`}
      aria-live="polite" // لتحسين تجربة قارئ الشاشة أثناء التحميل
      aria-disabled={isPending}
    >
      {isPending ? (
        <>
          <Loader2 className="ltr:mr-2 rtl:ml-2 h-5 w-5 animate-spin" />
          <span>يتم تسجيل الخروج...</span> {/* النص المطلوب أثناء التحميل */}
        </>
      ) : (
        "تسجيل الخروج" // نص الزر باللغة العربية
      )}
    </Button>
    </div>
   
  );
};