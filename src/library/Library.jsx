import blockWallet from "./assets/block_wallet_updated.png"
import getlinked from "./assets/getlinked_desktop.png"
import shopping from "./assets/recent_shopping.png"
import techTime from "./assets/screenshot_desktop.png"
import fichat from "./assets/updated-dashboard-fitesite.png"


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
        image: getlinked,
        title: "Gelinked Tech Hackathon",
        description: "The official gelinked landing page having two other pages - the contact & registration page built with firebase (firestore).",
        stacks: [
            { id: "1", name: "HTML" },
            { id: "2", name: "Tailwindcss" },
            { id: "3", name: "React.js" },
            { id: "4", name: "Material UI" },
            { id: "5", name: "Firebase" },
            { id: "6", name: "Framer Motion" },
        ],
        links: [
            {
                id: "1", 
                repo_link: "https://github.com/yesjeremiahchinwe/getlinked",
                live_link: "https://getlinked-mu.vercel.app/"
            },
        ]
    },
    {
        id: "3",
        image: shopping,
        title: "E-commerce Store",
        description: "An ecommerce store that fetches products from an API and allows you to add them to your cart. The Cart is built with a react hook - useLocalStorageState that stores the user's selected items into the local storage of their browser for future purchase.",
        stacks: [
            { id: "1", name: "HTML" },
            { id: "2", name: "SASS (SCSS)" },
            { id: "3", name: "TypeScript" },
            { id: "4", name: "React.js" },
            { id: "5", name: "API Integration" },
        ],
        links: [
            {
                id: "1", 
                repo_link: "https://github.com/yesjeremiahchinwe/shopping_cart",
                live_link: "https://shopping-cart-dun-three.vercel.app/"
            },
        ]
    },
    {
        id: "4",
        image: techTime,
        title: "TechTime Landing Page",
        description: "This is the landing page of the TechTime website where you can purchase all digital courses for all kinds of digital skills. It harnesses the power of react in creating reuseable and maintable functional components for scalability.",
        stacks: [
            { id: "1", name: "HTML" },
            { id: "2", name: "CSS" },
            { id: "3", name: "JavaScript" },
            { id: "4", name: "React.js" }
        ],
        links: [
            {
                id: "1", 
                repo_link: "https://github.com/yesjeremiahchinwe/techtime_landing_page",
                live_link: "https://techtime-landing-page-neon.vercel.app/"
            }
        ]
    },
    {
        id: "5",
        image: fichat,
        title: "FiChat App",
        description: "Fichat is an on-going chat app project. I volunteered to lead the frontend team of three (3) while working closely with the backend team to implement and consume the API endpoints. Please note that this project is still under development and currently, it's only the onboading page and the chat dashboard which you're seeing now is working. (I built the dashboard myself). Also note that the link to the github repo may not work because it's a private repository.",
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
]
