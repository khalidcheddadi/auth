// app/profile/update/page.tsx

import { UpdateUserForm } from "@/components/update-user-form";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { ReturnButton } from "@/components/return-button";

export default async function UpdateProfilePage() {
  const headersList = await headers();
  const session = await auth.api.getSession({ headers: headersList });

  if (!session) redirect("/auth/login");

  return (
    <div className="px-8 py-16 container mx-auto max-w-screen-md space-y-6">
      <ReturnButton href="/profile" label="Back to Profile" />

      <h1 className="text-3xl font-bold">Update Profile</h1>

      <UpdateUserForm
        name={session.user.name}
        image={session.user.image ?? ""}
      />
    </div>
  );
}
