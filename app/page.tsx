import { Hero } from "@/components/home/Hero";
import { FeaturedPlants } from "@/components/home/FeaturedPlants";
import { AboutPreview } from "@/components/home/AboutPreview";
import { PlantGallery } from "@/components/home/PlantGallery";
import { LocationPreview } from "@/components/home/LocationPreview";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedPlants />
      <AboutPreview />
      <PlantGallery />
      <LocationPreview />
    </>
  );
}
