// app/dashboard/page.tsx

import { ReturnButton } from "@/components/return-button";
import { SignOutButton } from "@/components/sign-out-button";
import { Button } from "@/components/ui/button";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";
import { FiUser, FiSettings, FiShield, FiLogOut, FiGrid, FiEdit, FiKey, FiArrowLeftCircle, FiUsers, FiLock } from 'react-icons/fi';

export default async function Page() {
  const headersList = await headers();
  const session = await auth.api.getSession({ headers: headersList });

  if (!session) redirect("/auth/login");

  const FULL_POST_ACCESS = await auth.api.userHasPermission({
    body: {
      userId: session.user.id,
      permissions: {
        posts: ["update", "delete"],
      },
    },
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white p-4 sm:p-6 lg:p-8">
      <div className="container mx-auto max-w-screen-xl">
        {/* Header Section */}
        <header className="mb-10">
          <div className="flex justify-between items-center">
            <h1 className="text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
              لوحة التحكم ✨
            </h1>
            <ReturnButton href="/" label="العودة للرئيسية" />
          </div>
          <p className="mt-2 text-slate-400 text-lg">
            مرحباً بك مجدداً، {session.user.name}! هنا يمكنك إدارة حسابك وصلاحياتك.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* User Profile Card */}
          <div className="md:col-span-1 bg-slate-800/50 backdrop-blur-md shadow-2xl rounded-xl p-6 hover:shadow-purple-500/30 transition-all duration-300">
            <div className="flex flex-col items-center text-center">
              {session.user.image ? (
                <img
                  src={session.user.image}
                  alt="User Image"
                  className="size-32 rounded-full border-4 border-purple-500 object-cover shadow-lg mb-4"
                />
              ) : (
                <div className="size-32 rounded-full border-4 border-purple-500 bg-purple-600 text-white flex items-center justify-center mb-4 shadow-lg">
                  <span className="text-4xl font-bold">
                    {session.user.name.slice(0, 2).toUpperCase()}
                  </span>
                </div>
              )}
              <h2 className="text-2xl font-semibold text-slate-100">{session.user.name}</h2>
              <p className="text-sm text-slate-400">{session.user.email}</p>
              <span className={`mt-2 px-3 py-1 text-xs font-semibold rounded-full ${session.user.role === "ADMIN" ? "bg-red-500 text-white" : "bg-sky-500 text-white"}`}>
                {session.user.role}
              </span>
            </div>
            <div className="mt-6 space-y-3">
              <Button asChild className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white transition-all duration-300 transform hover:scale-105">
                <Link href="/profile/update"><FiEdit className="mr-2" /> تعديل الملف الشخصي</Link>
              </Button>
              <Button asChild variant="outline" className="w-full border-purple-500 text-purple-300 hover:bg-purple-500 hover:text-white transition-all duration-300 transform hover:scale-105">
                <Link href="/profile/password"><FiKey className="mr-2" /> تغيير كلمة المرور</Link>
              </Button>
             <SignOutButton />
            </div>
          </div>

          {/* Main Content Area (Permissions & Admin) */}
          <div className="md:col-span-2 space-y-6 lg:space-y-8">
            {session.user.role === "ADMIN" && (
              <div className="bg-slate-800/50 backdrop-blur-md shadow-2xl rounded-xl p-6 hover:shadow-red-500/30 transition-all duration-300">
                <h2 className="text-2xl font-bold text-slate-100 mb-2 flex items-center">
                  <FiShield className="mr-3 text-red-400" size={28} /> صلاحيات الإدارة
                </h2>
                <p className="text-slate-400 mb-4">
                  وصول خاص لإدارة محتوى وتكوينات النظام.
                </p>
                <Button size="lg" asChild className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white transition-all duration-300 transform hover:scale-105">
                  <Link href="/admin/dashboard"><FiGrid className="mr-2" /> لوحة تحكم الأدمن</Link>
                </Button>
              </div>
            )}

            <div className="bg-slate-800/50 backdrop-blur-md shadow-2xl rounded-xl p-6 hover:shadow-sky-500/30 transition-all duration-300">
              <h2 className="text-2xl font-bold text-slate-100 mb-4 flex items-center">
                <FiSettings className="mr-3 text-sky-400" size={28} /> إدارة المحتوى
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Button size="lg" className="bg-sky-600/90 hover:bg-sky-700 text-white transition-all duration-300 transform hover:scale-105">
                  <FiUser className="mr-2" /> إدارة منشوراتي
                </Button>
                <Button size="lg" disabled={!FULL_POST_ACCESS.success} className={`transition-all duration-300 transform hover:scale-105 ${!FULL_POST_ACCESS.success ? "bg-slate-600 text-slate-400 cursor-not-allowed" : "bg-teal-500 hover:bg-teal-600 text-white"}`}>
                  {FULL_POST_ACCESS.success ? <FiUsers className="mr-2" /> : <FiLock className="mr-2" />} إدارة كل المنشورات
                </Button>
                
                <Button size="lg" disabled={!FULL_POST_ACCESS.success} className={`transition-all duration-300 transform hover:scale-105 ${!FULL_POST_ACCESS.success ? "bg-slate-600 text-slate-400 cursor-not-allowed" : "bg-teal-500 hover:bg-teal-600 text-white"}`}>
                  {FULL_POST_ACCESS.success ? <FiUsers className="mr-2" /> : <FiLock className="mr-2" />} إدارة كل المنشورات
                </Button>
              </div>
              {!FULL_POST_ACCESS.success && (
                <p className="text-xs text-slate-500 mt-3 text-center sm:text-left">
                  (لا تملك الصلاحية الكافية لإدارة كل المنشورات)
                </p>
              )}
            </div>
             {/* يمكنك إضافة المزيد من البطاقات هنا */}
             {/* <div className="bg-slate-800/50 backdrop-blur-md shadow-2xl rounded-xl p-6">
                <h2 className="text-2xl font-bold text-slate-100 mb-4">قسم إضافي</h2>
                 محتوى...
             </div> */}
          </div>
        </div>
        
        {/* Footer or additional links if needed */}
        <footer className="text-center mt-12 py-6 border-t border-slate-700">
            <p className="text-sm text-slate-500">&copy; {new Date().getFullYear()} اسم تطبيقك. جميع الحقوق محفوظة.</p>
        </footer>

      </div>
    </div>
  );
}
