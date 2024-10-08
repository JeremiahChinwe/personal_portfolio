import { skills } from "../../library/Library";


export default function About() {
  return (
    <section className="px-[1.5rem]" name="about">
        <h1 className="font-[600] pt-20 text-[2.25rem] text-center pb-2 border-b-2 border-[#222222] w-fit my-0 mx-auto">About</h1>

        <p className="leading-[1.75rem] mt-8 font-[400] text-center mx-auto block sm:w-[80%] lg:w-[50%]">I&apos;m a software developer with expertise in front-end development and a good understanding of backend operations and some of its technologies like node.js, php, mysql, mongodb, etc. I excel in building visually appealing, mobile responsive, high-functional, maintainable, and scalable websites with modern technologies. I aim to meet your business expectations within your budget and on time while satisfying the end users of your product.</p>


        <div className="my-12 flex items-center justify-center flex-wrap gap-4 w-fit mx-auto lg:w-[70%]">
          {skills.map((skill, index) => (
              <button key={index} 
              className="border-none bg-[#f5f4f4] text-[#222222] font-[600] py-1 px-4 rounded-lg text-sm cursor-default">{skill.skill}</button>
          ))}
        </div>
    </section>
  )
}
