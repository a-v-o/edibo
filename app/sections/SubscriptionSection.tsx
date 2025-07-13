export default function SubscriptionSection() {
  return (
    <section className="flex items-center justify-center mt-7  bg-gradient-to-r from-linkbg to-[#017648] h-[250px] px-[16px] lg:px-[25%]">
      <div className="">
        <p className="text-center font-medium text-white">
          Join our newsletter to get early access to Edibo&apos;s Version 1 and
          be one of our first testers!
        </p>
        <form action="" className="flex mt-4 gap-x-3">
          <input
            type="email"
            name="user_email"
            id="email"
            className="p-4 rounded-4xl w-full focus:outline-none focus:ring-3 focus:ring-light-green ring-offset-4 bg-light-green text-white ring-offset-linkbg"
            placeholder="Enter Your Email"
            required
          />
          <button className="bg-light-green text-white p-4 rounded-[30px] cursor-pointer">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
