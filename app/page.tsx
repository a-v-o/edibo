import Image from "next/image";
import KeyFeature from "./sections/KeyFeature";
import SubscriptionSection from "./sections/SubscriptionSection";

export default function Home() {
  return (
    <main>
      <KeyFeature />
      <SubscriptionSection />
    </main>
  );
}
