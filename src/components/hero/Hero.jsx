import { Link } from "react-scroll"

export default function Hero() {
    return (
        <section className="flex flex-col justify-center items-center p-[1.25rem]" name="home">
            <h2 className="font-[600] text-[3rem] text-center mt-20">Jeremiah Chinwe</h2>
            <p className="font-[400] text-center my-4 block sm:w-[80%] lg:w-[50%]">Passionate about excellence and mastery in my field of endeavour with strong attention to details.</p>

            <div className="flex gap-4 sm:gap-8 items-center my-4">
                <Link to="projects" smooth={true} duration={500} className="block w-fit border-[1px] border-[#333] rounded-lg py-1 px-8 font-[600] hover:bg-[#222222] hover:text-[#ffffff] cursor-pointer">Projects</Link>
                <Link to="contact" smooth={true} duration={500} className="block w-fit border-[1px] border-[#333] rounded-lg py-1 px-8 font-[600] bg-[#222222] text-[#ffffff] hover:bg-transparent hover:text-[#222222] transition-all duration-300 cursor-pointer">Contact</Link>
            </div>
        </section>
    )
}
