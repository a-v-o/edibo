// import Image from "next/image";
import HeroSection from "./sections/HeroSection";
import KeyFeature from "./sections/KeyFeature";

export default function Home() {
  return (
    <main className="flex flex-col gap-32 px-4 pt-16 pb-32 lg:px-28">
      <HeroSection />
      <KeyFeature />
    </main>
  );
}
