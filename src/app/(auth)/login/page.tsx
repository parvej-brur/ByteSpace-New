import type { Metadata } from "next";
import { AuthShell, LoginForm } from "@/features/auth";

export const metadata: Metadata = {
  title: "Sign In | ByteSpace",
  description: "Sign in to ByteSpace for instant access to a world of knowledge.",
};

export default function LoginPage() {
  return (
    <AuthShell
      heading="Sign in with ease"
      description="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
    >
      <LoginForm />
    </AuthShell>
  );
}
