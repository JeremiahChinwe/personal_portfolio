

export default function Footer() {
    const date = new Date().getFullYear()

    const socialLinks = [
        {
            id: "1",
            link: "https://www.linkedin.com/in/jeremiah-chinwe-057180268/",
            icon: "fa-brands fa-linkedin"
        },
        {
            id: "2",
            link: "https://github.com/yesjeremiahchinwe",
            icon: "fa-brands fa-github"
        },
        {
            id: "3",
            link: "https://twitter.com/jeremiahchinwe",
            icon: "fa-brands fa-x-twitter"
        },
        {
            id: "4",
            link: "mailto:chinwejeremiah9@gmail.com",
            icon: "fa-regular fa-envelope"
        },
    ]

    return (
        <footer className="bg-black mt-8 lg:mt-20 px-[1.25rem] sm:px-8 lg:px-0 py-12 text-white/90">
            <article className="flex items-center justify-between flex-col sm:flex-row gap-4 lg:w-[80%] mx-auto">
                <small>All Rights Reserved &copy; {date}</small>
                <ul className="m-0 flex items-center gap-8 lg:gap-12 justify-between lg:text-[1.75rem]">
                    {socialLinks.map(link => (
                        <li key={link.id} className="text-white/70 hover:text-white transition-colors duration-500">
                            <a href={link.link} rel="noreferrer" target="_blank">
                                <i className={link.icon}></i>
                            </a>
                        </li>
                    ))}
                </ul>
            </article>
        </footer>
    )
}
