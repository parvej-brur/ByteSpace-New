import type { Metadata } from "next";
import { AuthShell, RegisterForm } from "@/features/auth";

export const metadata: Metadata = {
  title: "Create an Account | ByteSpace",
  description: "Sign up for ByteSpace quickly, easily, and at no cost.",
};

export default function RegisterPage() {
  return (
    <AuthShell
      darkCaption
      heading="Sign up and come in"
      description="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"
    >
      <RegisterForm />
    </AuthShell>
  );
}
