export default function SubscriptionSection() {
    return (
        <section className="flex items-center justify-center mt-7  bg-gradient-to-r from-[#158B5E] to-[#017648] h-[250px] px-[16px] lg:px-[25%]">
            <div className="">
                <p className="text-center font-medium text-white">Join our newsletter to get early access to Edibo's Version 1 and be one of our first testers!</p>
                <form action="" className="flex mt-4 gap-x-3">
                    <input
                        type="email"
                        name="user_email"
                        id="email"
                        className="border-white border-2 py-3 rounded-[30px] pl-2 w-full focus:outline-none focus:ring-2 focus:ring-[#158B5E] bg-transparent placeholder-white  text-white"
                        placeholder="Enter Your Email"
                        required
                    />
                    <button className="bg-white text-[#158B5E] py-[10px] px-[10px] rounded-[30px]">Subscribe</button>
                </form>
            </div>
        </section>
    )
}