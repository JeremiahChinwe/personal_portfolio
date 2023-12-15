import { projects } from "../../library/Library"


export default function Projects() {
   
  return (
    <section className="min-h-screen mt-20" name="projects">
         <h1 className="font-[600] text-[2.25rem] text-center pb-2 border-b-2 border-[#222222] w-fit pt-20 block mx-auto">Projects</h1>

         <article className="w-[90%] mx-auto my-20">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-20">
            {projects.map(project => (
                <li key={project.id }>
                    <img src={project.image} alt={project.title} />
                    <h3 className="font-[600] text-[1.5rem] py-4">{project.title}</h3>
                    <p className="leading-[1.65rem] mb-8">{project.description}</p>
                    <div className="flex gap-x-4 gap-y-2 flex-wrap">
                        {project.stacks.map(stack => (
                            <div key={stack.id} className="bg-[#f5f4f4] font-[600] py-2 px-4 rounded-lg text-sm">{stack.name}</div>
                        ))}
                    </div>
                    <div>
                        {project.links.map(link => (
                            <div key={link.id} className={`${project.title.includes("FiChat") ? "hidden" : "flex"} gap-x-4 gap-y-2 flex-wrap my-4 text-[1.5rem] lg:text-[1.75rem]`}>
                                <a href={link.repo_link} target="_blank" rel="noreferrer" className="cursor-pointer">
                                <i className="fa-brands fa-github"></i>
                                </a>
                                <a href={link.live_link} target="_blank" rel="noreferrer" className="cursor-pointer">
                                <i className="fa-solid fa-link"></i>
                                </a>
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
