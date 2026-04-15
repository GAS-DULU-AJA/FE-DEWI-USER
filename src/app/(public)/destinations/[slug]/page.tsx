import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DestinationDetailPageClient } from "@/features/destination/components/DestinationDetailPageClient";
import { getDestinationBySlug } from "@/features/destination/api";

interface DestinationDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: DestinationDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const destination = await getDestinationBySlug(slug);

  if (!destination) {
    return {
      title: "Destination Not Found | Desa Wisata",
    };
  }

  return {
    title: `${destination.name} | Desa Wisata`,
    description: destination.longDescription ?? destination.description,
  };
}

export default async function DestinationDetailPage({
  params,
}: DestinationDetailPageProps) {
  const { slug } = await params;
  const destination = await getDestinationBySlug(slug);

  if (!destination) {
    notFound();
  }

  return (
    <DestinationDetailPageClient slug={slug} initialDestination={destination} />
  );
}
