import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CreatorProfile } from "@/features/creators";
import { CREATOR_SLUG } from "@/lib/constants/routes";

type CreatorPageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return [{ slug: CREATOR_SLUG }];
}

export const metadata: Metadata = {
  title: "PurePearl Studio | ByteSpace Creator",
  description: "Passionate UI/UX, Web designer. Explore the courses created by PurePearl Studio.",
};

export default async function CreatorPage({ params }: CreatorPageProps) {
  const { slug } = await params;
  if (slug !== CREATOR_SLUG) notFound();

  return <CreatorProfile />;
}
