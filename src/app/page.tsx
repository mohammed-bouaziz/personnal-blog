import Image from "next/image";
import Hero from "@/components/hero";
import VideoSection from "@/components/videoSection";
import SelectedArticles from "@/components/selectedArticles";

export default function Home() {
  return (
    <>
      <Hero />
      <VideoSection />
      <SelectedArticles />
    </>
  );
}
