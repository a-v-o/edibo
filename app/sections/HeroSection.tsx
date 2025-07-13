import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import AnimatedHeader from "@/components/AnimatedHeader";
import AnimatedText from "@/components/AnimatedText";
import ballot from "@/public/images/ballot.png";

export default function HeroSection() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-20 overflow-hidden">
      <div className="flex flex-col gap-4 w-full">
        <div className="flex flex-col gap-2 font-bold text-4xl md:text-5xl leading-none">
          <AnimatedHeader text="One Link" delay={1} />
          <AnimatedHeader text="One Vote" delay={1.5} />
          <AnimatedHeader text="One Clear Result" delay={2} />
        </div>
        <div className="text-xl font-medium">
          <AnimatedText
            text="Run smooth, transparent votes without stress, perfect for schools,
            teams, and communities."
            delay={3}
          />
        </div>
        <div>
          <button className="bg-linkbg p-5 px-6 flex items-center gap-8 rounded-3xl">
            <p className="font-semibold text-2xl text-white leading-none">
              Get Started
            </p>
            <span className="bg-white text-black rounded-full p-2">
              <ArrowRightIcon />
            </span>
          </button>
        </div>
      </div>

      <div className="scale-[85%] md:scale-100 relative flex items-end w-full aspect-[4/5] bg-linear-180 from-[#017648] to-[#033824] rounded-3xl justify-center">
        <div className="absolute w-2/3 aspect-square border-[36px] border-white/5 rounded-full -top-11 left-[70%]"></div>
        <div className="absolute w-2/3 aspect-square border-[36px] border-white/5 rounded-full -top-60 left-[60%]"></div>
        <div className="absolute w-2/3 aspect-square border-[36px] border-white/5 rounded-full -top-11 -left-2/5"></div>
        <div className="absolute w-2/3 aspect-square border-[36px] border-white/5 rounded-full -top-60 -left-2/5"></div>
        <div className="absolute w-2/5 aspect-square bg-white blur-[120px] rounded-full -bottom-12 -left-12"></div>
        <div className="absolute w-2/5 aspect-square bg-white blur-[120px] rounded-full -bottom-12 -right-12"></div>
        <div className="flex items-center backdrop-blur-lg shadow-lg w-[240px] md:w-1/2 min-h-[120px] p-3 rounded-4xl absolute top-12 -left-8 bg-linear-180 from-[#D0FFED80] to-[#017648B8] ">
          <div className="w-full h-full bg-light-green/50 rounded-2xl text-[11px] text-white p-4 shadow-lg">
            <p>
              Edibo is a modern, secure online voting platform designed to help
              organizations, schools, and communities conduct elections and
              polls with ease.
            </p>
          </div>
        </div>
        <Image
          src={ballot}
          alt="image depicting a ballot box"
          width={500}
          height={500}
          className="w-2/3 h-auto animate-[bounce_2.5s_infinite]"
        />
      </div>
    </div>
  );
}
