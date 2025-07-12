// import Image from "next/image";
import HeroSection from "./sections/HeroSection";
import KeyFeature from "./sections/KeyFeature";

export default function Home() {
  return (
    <main className="px-4 lg:px-28">
      <HeroSection />
      <KeyFeature />
    </main>
  );
}
