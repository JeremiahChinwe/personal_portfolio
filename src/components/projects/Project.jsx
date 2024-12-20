import { projects } from "../../library/Library"


export default function Projects() {
   
  return (
    <section className="min-h-screen mt-20" name="projects">
         <h1 className="font-[600] text-[2.25rem] text-center pb-2 border-b-2 border-[#222222] w-fit pt-20 block mx-auto">Projects</h1>

         <article className="w-[90%] mx-auto my-20">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-20">
            {projects.map(project => (
                <li key={project.id }>
                    <img src={project.image} alt={project.title} lazy/>
                    <h3 className="font-[600] text-[1.5rem] py-4">{project.title}</h3>
                    <p className="leading-[1.65rem] mb-8">{project.description}</p>
                    <div className="flex gap-x-4 gap-y-2 flex-wrap">
                        {project.stacks.map(stack => (
                            <div key={stack.id} className="bg-[#f5f4f4] font-[600] py-2 px-4 rounded-lg text-sm">{stack.name}</div>
                        ))}
                    </div>
                    <div>
                        {project.links.map(link => (
                            <div key={link.id} className={`${(project.title.includes("FiChat") || project.title.includes("Crypto")) ? "hidden" : "flex"} gap-x-4 gap-y-2 flex-wrap my-5 text-base`}>
                                <a href={link.repo_link} target="_blank" rel="noreferrer" className="cursor-pointer flex items-center gap-2 border-2 font-[700] text-[16px] bg-[#222222] text-[#ffffff] py-2 px-6 rounded-lg border-transparent outline-none hover:bg-transparent transition-all duration-500 hover:text-black hover:border-black">
                                    <span>Github repo</span>
                                <i className="fa-brands fa-github"></i>
                                </a>

                                <a href={link.live_link} target="_blank" rel="noreferrer" className="cursor-pointer flex items-center gap-2 font-[700] text-[16px] bg-[#222222] text-[#ffffff] py-2 px-6 rounded-lg border-2 border-transparent outline-none hover:bg-transparent transition-all duration-500 hover:text-black hover:border-black">
                                <span>Live site</span>
                                <i className="fa-solid fa-link"></i>
                                </a>

                                {link?.watch && (
                                    <a href={link.watch} target="_blank" rel="noreferrer" className="cursor-pointer flex items-center gap-2 font-[700] text-[16px] bg-[#222222] text-[#ffffff] py-2 px-6 rounded-lg border-2 border-transparent outline-none hover:bg-transparent transition-all duration-500 hover:text-black hover:border-black">
                                    <span>Watch a Live Demo</span>
                                    <i className="fa-solid fa-link"></i>
                                    </a>
                                )}
                            </div>
                        ))}
                    </div>
                </li>
            ))}
            </ul>
           
         </article>
    </section>
  )
}
