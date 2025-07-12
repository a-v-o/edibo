import {
  Link2,
  SlidersVertical,
  ShieldCheck,
  MonitorSmartphone,
} from "lucide-react";
import Image from "next/image";

export default function KeyFeature() {
  return (
    <section>
      <div>
        <h2 className="text-center font-bold text-[27px]">Key Features</h2>
        <p className="text-center font-normal text-[14px]">
          Explore the powerful features that make Edibo the easiest way to vote
          online.
        </p>
        <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-3 lg:grid-rows-2">
          <div className="bg-featurebg rounded-[20px] flex flex-col gap-[10px] h-[205px] px-[20px] py-[45px] lg:col-start-1 lg:row-start-1">
            <div className="flex flex-row items-center gap-x-2 ">
              <Link2 className="bg-linkbg rounded-[10px] p-[10px] h-[40px] w-[40px] text-white" />
              <p className="font-bold text-[16px]">One-Link Voting</p>
            </div>
            <p className="text-[14px] text-left">
              Send a single link to your voters — no account, no app download
              needed. Just click and vote.
            </p>
          </div>
          <div className="bg-featurebg rounded-[20px] flex flex-col gap-[10px] h-[205px] px-[20px] py-[45px] lg:col-start-3 lg:row-start-1">
            <div className="flex flex-row items-center gap-x-2">
              <SlidersVertical className="bg-linkbg rounded-[10px] p-[10px] h-[40px] w-[40px] text-white" />
              <p className="font-bold text-[16px]">
                Easy Setup & Customization
              </p>
            </div>
            <p className="text-[14px] text-left">
              Create polls or elections in minutes with customizable options
              tailored to your needs.
            </p>
          </div>
          <div className="lg:flex lg:items-center lg:justify-center bg-featurebg hidden  lg:col-start-2 lg:row-start-1 lg:row-span-2 rounded-[20px]">
            <Image
              src="/images/votespeak.png"
              alt="vote Speaks"
              width={300}
              height={300}
              className="object-contain w-full max-w-[250px] h-auto"
            />
          </div>
          <div className="bg-featurebg rounded-[20px] flex flex-col gap-[10px] h-[205px] px-[20px] py-[45px] lg:col-start-1 lg:row-start-2">
            <div className="flex flex-row items-center gap-x-2">
              <ShieldCheck className="bg-linkbg rounded-[10px] p-[10px] h-[40px] w-[40px] text-white" />
              <p className="font-bold text-[16px]">Secure & Anonymous</p>
            </div>
            <p className="text-[14px] text-left">
              Every vote is protected with encryption, and voter identities
              remain completely private.
            </p>
          </div>
          <div className="bg-featurebg rounded-[20px] flex flex-col gap-[10px] h-[205px] px-[20px] py-[45px] lg:col-start-3 lg:row-start-2">
            <div className="flex flex-row items-center gap-x-2">
              <MonitorSmartphone className="bg-linkbg rounded-[10px] p-[10px] h-[40px] w-[40px] text-white" />
              <p className="font-bold text-[16px]">Multi-Device Access</p>
            </div>
            <p className="text-[14px] text-left">
              Edibo works seamlessly on phones, tablets, and desktops — so
              everyone can vote from anywhere.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
