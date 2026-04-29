import type { Metadata } from "next";
import { ExperienceListingPage } from "@/features/experience/components/ExperienceListingPage";

export const metadata: Metadata = {
  title: "Experiences | Desa Wisata",
  description:
    "Browse curated rural experiences across village destinations, from eco trails and heritage rituals to local dining and craft workshops.",
};

export default function ExperiencesPage() {
  return <ExperienceListingPage />;
}
