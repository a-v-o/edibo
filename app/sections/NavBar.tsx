import Link from "next/link";
import Underline from "../components/Underline";

export default function NavBar() {
  return (
    <nav className="flex justify-between items-center px-4 md:px-28 py-4">
      <div>
        <p className="capitalize text-3xl font-bold">EDIBO</p>
      </div>
      <div className="flex gap-8 md:gap-12 p-4 justify-between items-center min-w-1/4 tracking-tight">
        <Underline>
          <Link href="/" className="text-lg font-bold">
            LOG IN
          </Link>
        </Underline>
        <Underline>
          <Link href="/" className="text-lg font-bold">
            SIGN UP
          </Link>
        </Underline>
      </div>
      {/* <div className="bg-linkbg flex gap-8 md:gap-16 p-4 md:p-5 rounded-3xl text-white items-center min-w-1/4 justify-between text-sm md:text-base">
        <div>
          <button className="p-4 md:p-5 bg-[#575B59] rounded-2xl leading-none">
            Log in
          </button>
        </div>
        <div>
          <button className="p-4 md:p-5 bg-light-green rounded-2xl leading-none">
            Sign up
          </button>
        </div>
      </div> */}
    </nav>
  );
}
