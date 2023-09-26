

export default function About() {
  return (
    <section className="px-[1.5rem]" name="about">
        <h1 className="font-[600] pt-20 text-[2.25rem] text-center pb-2 border-b-2 border-[#222222] w-fit my-0 mx-auto">About</h1>
        <p className="leading-[1.5rem] font-[400] text-center mt-8 mx-auto block sm:w-[80%] lg:w-[50%]">Hi - If you aren&apos;t a Pioneer, then you probably not my ideal client.</p>

        <p className="leading-[1.5rem] font-[400] text-center mx-auto block sm:w-[80%] lg:w-[50%]">I&apos;m a Front-End Software Developer with 3years+ experience building scalable, high-functional, and maintainable web apps with modern technologies.</p>

        <div className="my-8 flex items-center justify-center flex-wrap gap-4 w-fit mx-auto lg:w-[70%]">
            <button className="border-none bg-gray-300 text-[#222222] font-[600] py-1 px-4 rounded-lg text-lg cursor-default">HTML</button>
            <button className="border-none bg-gray-300 text-[#222222] font-[600] py-1 px-4 rounded-lg text-lg cursor-default">CSS</button>
            <button className="border-none bg-gray-300 text-[#222222] font-[600] py-1 px-4 rounded-lg text-lg cursor-default">Tailwindcss</button>
            <button className="border-none bg-gray-300 text-[#222222] font-[600] py-1 px-4 rounded-lg text-lg cursor-default">JavaScript</button>
            <button className="border-none bg-gray-300 text-[#222222] font-[600] py-1 px-4 rounded-lg text-lg cursor-default">React.js</button>
            <button className="border-none bg-gray-300 text-[#222222] font-[600] py-1 px-4 rounded-lg text-lg cursor-default">Next.js</button>
            <button className="border-none bg-gray-300 text-[#222222] font-[600] py-1 px-4 rounded-lg text-lg cursor-default">TypeScript</button>
            <button className="border-none bg-gray-300 text-[#222222] font-[600] py-1 px-4 rounded-lg text-lg cursor-default">Redux Toolkit</button>
            <button className="border-none bg-gray-300 text-[#222222] font-[600] py-1 px-4 rounded-lg text-lg cursor-default">Firebase</button>
        </div>
    </section>
  )
}
