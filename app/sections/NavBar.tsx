export default function NavBar() {
  return (
    <nav className="flex justify-between items-center px-4 md:px-28 py-4">
      <div>
        <p className="capitalize text-2xl font-bold">EDIBO</p>
      </div>
      <div className="bg-linkbg flex gap-8 md:gap-16 p-4 md:p-5 rounded-3xl text-white items-center min-w-1/4 justify-between text-sm md:text-base">
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
      </div>
    </nav>
  );
}
