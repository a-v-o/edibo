import {
  Link2,
  SlidersVertical,
  ShieldCheck,
  MonitorSmartphone,
} from "lucide-react";
import Image from "next/image";
import FeatureCard from "../components/FeatureCard";

export default function KeyFeature() {
  return (
    <section>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h2 className="text-center font-bold text-3xl">Key Features</h2>
          <p className="text-center">
            Explore the powerful features that make Edibo the easiest way to
            vote online.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:grid-rows-2">
          <FeatureCard
            Icon={<Link2 />}
            header="One-Link Voting"
            text="Send a single link to your voters — no account, no app download
              needed. Just click and vote."
          />
          <FeatureCard
            Icon={<SlidersVertical />}
            header="Easy Setup & Customization"
            text="Create polls or elections in minutes with customizable options
              tailored to your needs."
          />
          {/* <div className="hidden lg:flex items-center justify-center rounded-3xl row-start-1 row-span-2 col-start-2">
            <Image
              src="/images/votespeak.png"
              alt="vote Speaks"
              width={300}
              height={300}
              className="object-contain w-full max-w-[250px] h-auto drop-shadow-lg"
            />
          </div> */}
          <FeatureCard
            Icon={<ShieldCheck />}
            header="Secure & Anonymous"
            text="Every vote is protected with encryption, and voter identities
              remain completely private."
          />

          <FeatureCard
            Icon={<MonitorSmartphone />}
            header="Multi-Device Access"
            text="Edibo works seamlessly on phones, tablets, and desktops — so
              everyone can vote from anywhere."
          />
        </div>
      </div>
    </section>
  );
}
