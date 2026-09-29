import type { Metadata } from "next";
import { fontVariables } from "@/styles/fonts";
import "@/styles/globals.css";
import { ToastProvider } from "@/providers/ToastProvider";

export const metadata: Metadata = {
  title: "ByteSpace | Get Access to Hundreds of Online Courses",
  description:
    "Unlock your creativity, gain valuable knowledge, and grow your business with ByteSpace's wide range of online courses.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${fontVariables} h-full antialiased`}>
      <body className="flex min-h-full flex-col"><ToastProvider>{children}</ToastProvider></body>
    </html>
  );
}
