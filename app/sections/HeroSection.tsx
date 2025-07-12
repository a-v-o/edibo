import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="flex flex-col md:flex-row my-32 items-center gap-20 overflow-hidden">
      <div className="flex flex-col gap-4 w-full">
        <div className="flex flex-col gap-2font-bold text-5xl leading-none">
          <h1>One Link</h1>
          <h1>One Vote</h1>
          <h1>One Clear Result</h1>
        </div>
        <div className="text-xl font-medium">
          <p>
            Run smooth, transparent votes without stress, perfect for schools,
            teams, and communities.
          </p>
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

      <div className="scale-75 md:scale-100 relative flex items-end w-full h-[600px] bg-linear-180 from-[#017648] to-[#033824] rounded-3xl p-16">
        <div className="absolute w-2/3 aspect-square border-[38px] border-white/5 rounded-full -top-11 left-[70%]"></div>
        <div className="absolute w-2/3 aspect-square border-[38px] border-white/5 rounded-full -top-60 left-[60%]"></div>
        <div className="absolute w-2/3 aspect-square border-[38px] border-white/5 rounded-full -top-11 -left-2/5"></div>
        <div className="absolute w-2/3 aspect-square border-[38px] border-white/5 rounded-full -top-60 -left-2/5"></div>
        <div className="absolute w-52 aspect-square bg-white blur-[120px] rounded-full top-[400px] -left-20"></div>
        <div className="absolute w-52 aspect-square bg-white blur-[120px] rounded-full top-[400px] left-[400px]"></div>
        <div className="flex items-center backdrop-blur-lg shadow-lg w-1/2 min-h-1/5 p-2 rounded-3xl absolute top-12 -left-8 bg-linear-180 from-[#D0FFED80] to-[#017648B8] ">
          <div className="bg-[#D9D9D9] rounded-3xl text-[11px] px-4 py-2 shadow-lg">
            <p>
              Edibo is a modern, secure online voting platform designed to help
              organizations, schools, and communities conduct elections and
              polls with ease.
            </p>
          </div>
        </div>
        <Image
          src="/images/ballot.png"
          alt="image depicting a ballot box"
          width={500}
          height={500}
          className="w-full h-auto"
        />
      </div>
    </div>
  );
}
