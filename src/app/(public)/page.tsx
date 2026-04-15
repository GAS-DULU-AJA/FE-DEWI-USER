import type { Metadata } from "next";
import { HeroSection } from "@/features/destination/components/HeroSection";
import { OurStorySection } from "@/features/destination/components/OurStorySection";
import { FeaturedDestinations } from "@/features/destination/components/FeaturedDestinations";
import { PopularPackages } from "@/features/destination/components/PopularPackages";
import { Testimonials } from "@/features/destination/components/Testimonials";
import { Footer } from "@/features/destination/components/Footer";

export const metadata: Metadata = {
  title: "Desa Wisata — Discover Indonesia's Hidden Gems",
  description:
    "Explore and book authentic tourist village experiences in Indonesia.",
  openGraph: {
    title: "Desa Wisata",
    description: "Explore and book authentic tourist village experiences.",
    type: "website",
  },
};

// SSG with revalidation every 60 seconds
export const revalidate = 60;

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <OurStorySection />
      <FeaturedDestinations />
      <PopularPackages />
      <Testimonials />
      <Footer />
    </main>
  );
}
