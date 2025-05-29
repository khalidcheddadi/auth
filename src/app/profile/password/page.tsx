// app/profile/password/page.tsx

import { ChangePasswordForm } from "@/components/change-password-form";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { ReturnButton } from "@/components/return-button";

export default async function ChangePasswordPage() {
  const headersList = await headers();
  const session = await auth.api.getSession({ headers: headersList });

  if (!session) redirect("/auth/login");

  return (
    <div className="px-8 py-16 container mx-auto max-w-screen-md space-y-6">
      <ReturnButton href="/profile" label="Back to Profile" />

      <h1 className="text-3xl font-bold">Change Password</h1>

      <ChangePasswordForm />
    </div>
  );
}
