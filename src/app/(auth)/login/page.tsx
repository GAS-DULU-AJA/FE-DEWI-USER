import type { Metadata } from "next";
import { LoginForm } from "@/features/auth/components/LoginForm";

export const metadata: Metadata = {
  title: "Login — Desa Wisata",
};

export default function LoginPage() {
  return (
    <>
      <h1 className="text-2xl font-bold mb-6 text-center">Sign In</h1>
      <LoginForm />
    </>
  );
}
