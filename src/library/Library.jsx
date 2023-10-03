import blockWallet from "./assets/block_wallet_updated.png"
import techTime from "./assets/screenshot_desktop.png"
import fichat from "./assets/updated-dashboard-fitesite.png"
import movieBrowser from "./assets/movie_tmdb.png"


export const projects = [
    {
        id: "1",
        image: blockWallet,
        title: "BlockWallet Website",
        description: "The official website of the BlockWallet company having three pages - the home, blog, swap, and docs page. This project demonstrates my web design skills and strong attention to details.",
        stacks: [
            { id: "1", name: "HTML" },
            { id: "2", name: "CSS" },
            { id: "3", name: "JavaScript" }
        ],
        links: [
            {
                id: "1", 
                repo_link: "https://github.com/yesjeremiahchinwe/blockwallet",
                live_link: "https://blockwallet-puce.vercel.app/"
            }
        ]
    },
    {
        id: "2",
        image: techTime,
        title: "TechTime Website",
        description: "This is the landing page of the TechTime website where you can purchase all digital courses for all kinds of digital skills. It harnesses the power of react in creating reuseable and maintable functional components for scalability.",
        stacks: [
            { id: "1", name: "HTML" },
            { id: "2", name: "Tailwindcss" },
            { id: "3", name: "JavaScript" },
            { id: "4", name: "React.js" },
        ],
        links: [
            {
                id: "1", 
                repo_link: "https://github.com/yesjeremiahchinwe/techtime_landing_page",
                live_link: "https://techtime-landing-page-neon.vercel.app/"
            },
        ]
    },
    {
        id: "3",
        image: fichat,
        title: "FiChat App",
        description: "Fichat is a chat app built during one of my internship programs at Fichub Internship. It was built by a team of both frontend and backend devs. I led the frontend team of three (3) to create visually appealing user interfaces, while working closely with the backend team to implement and consume the api endpoints. Please note that this project is still under development.",
        stacks: [
            { id: "1", name: "HTML" },
            { id: "2", name: "Tailwindcss" },
            { id: "3", name: "Flowbite" },
            { id: "4", name: "JavaScript" },
            { id: "5", name: "React.js" },
            { id: "6", name: "TypeScript" },
        ],
        links: [
            {
                id: "1",
                repo_link: "https://github.com/Fichub-app/Fichat-site",
                live_link: "https://fichat.vercel.app/"
            },
        ]
    },
    {
        id: "4",
        image: movieBrowser,
        title: "Movie Browser",
        description: "A movie browser app that fetches top 10 most rated movies from the TMDB Movie API. This project demonstrates my knowledge in working with external APIs to add amazing functionalities to an application.",
        stacks: [
            { id: "1", name: "HTML" },
            { id: "2", name: "Tailwindcss" },
            { id: "3", name: "JavaScript" },
            { id: "4", name: "React.js" },
            { id: "5", name: "TMDB Movie API" },
        ],
        links: [
            {
                id: "1",
                repo_link: "https://github.com/JeremiahChinwe/hng_stage_two",
                live_link: "https://hng-stage-two-virid.vercel.app/"
            },
        ]
    }
]