import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getExperienceBySlug } from "@/features/experience/api";
import { ExperienceDetailPageClient } from "@/features/experience/components/ExperienceDetailPageClient";

interface ExperienceDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: ExperienceDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const experience = await getExperienceBySlug(slug);

  if (!experience) {
    return {
      title: "Experience Not Found | Desa Wisata",
    };
  }

  return {
    title: `${experience.name} | Desa Wisata`,
    description: experience.description,
  };
}

export default async function ExperienceDetailPage({
  params,
}: ExperienceDetailPageProps) {
  const { slug } = await params;
  const experience = await getExperienceBySlug(slug);

  if (!experience) {
    notFound();
  }

  return (
    <ExperienceDetailPageClient slug={slug} initialExperience={experience} />
  );
}
