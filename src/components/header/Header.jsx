import { Link } from "react-scroll"
import menuClose from "./assets/icon-menu-close.svg"
import menu from "./assets/icon-menu.svg"
import { useState, useEffect, useRef } from "react"



const Header = () => {
    const [open, setOpen] = useState(false)
    const menuRef = useRef()

    useEffect(() => {
        const handle = (e) => {
            if (!menuRef.current.contains(e.target)) {
                setOpen(false)
            }
        }
        document.addEventListener("mousedown", handle)
        return () => {
            document.removeEventListener("mousedown", handle)
        }
    })


    return (
        <header className="w-full bg-[#fffefe] px-4 py-4 xl:px-[1.5rem] sticky top-0 left-0 z-40 min-w-[300px]">
            <div className="flex items-center justify-between h-[30px] md:h-[50px] lg:w-[90%] mx-auto md:px-4">
                <a href="/" className="w-16 md:w-28">
                    <h1 className="font-[600] text-[1.5rem] lg:text-[2.25rem]">Portfolio</h1>
                </a>

                <nav>

                    {/* -------- Mobile Menu ---------------- */}
                    <ul className={`min-h-screen fixed top-0 p-8 transition-all duration-300 ease-in flex-col bg-white z-10 w-[80%] ${open ? "right-0" : "-right-[100%]"}  list-none text-[16px] md:hidden`} ref={menuRef}>

                        <img src={menuClose} alt="menu icon close" className="w-[20px] cursor-pointer block ml-auto mb-8" onClick={() => setOpen(!open)} />

                        <div className="flex flex-col items-center text-[1.5rem] pt-20">
                            <li className="py-4 hover:opacity-80 w-fit cursor-pointer">
                                <Link to="home" smooth={true} duration={500} onClick={() => setOpen(!open)}>Home</Link>
                            </li>
                            <li className="py-4 hover:opacity-80 w-fit cursor-pointer">
                            <Link to="about" smooth={true} duration={500} onClick={() => setOpen(!open)}>About</Link>
                            </li>
                            <li className="py-4 hover:opacity-80 w-fit cursor-pointer">
                            <Link to="projects" smooth={true} duration={500} onClick={() => setOpen(!open)}>Projects</Link>
                            </li>
                            <li className="py-4 cursor-pointer">
                                <Link to="contact" smooth={true} duration={500} className="font-[700] text-[16px] bg-[#222222] text-[#ffffff] py-2 px-6 rounded-lg border-none outline-none hover:scale-[1.05] transition-all duration-500 " onClick={() => setOpen(!open)}>Contact</Link>
                            </li>
                        </div>
                    </ul>

                    {/* -------------- Desktop Menu -------------------- */}
                    <ul className="hidden md:flex md:items-center md:gap-[1.5rem] xl:gap-16">
                        <li className="py-4 hover:opacity-80 w-fit cursor-pointer">
                        <Link to="home" smooth={true} duration={500}>Home</Link>
                        </li>
                        <li className="py-4 hover:opacity-80 w-fit cursor-pointer">
                        <Link to="about" smooth={true} duration={500}>About</Link>
                        </li>
                        <li className="py-4 hover:opacity-80 w-fit cursor-pointer">
                        <Link to="projects" smooth={true} duration={500}>Projects</Link>
                        </li>
                        <li className="py-4 cursor-pointer">
                            <Link to="contact" smooth={true} duration={500} className="font-[700] text-[16px] bg-[#222222] text-[#ffffff] py-2 px-6 rounded-lg border-2 border-transparent outline-none hover:bg-transparent transition-all duration-500 hover:text-black hover:border-black ">Contact</Link>
                        </li>
                    </ul>

                    {/* -------- Darken background when Menu is Open-------- */}
                    <div className={`${open ? "fixed w-full h-full bg-[#00000080] left-0 top-0 transition-all duration-200 delay-75" : ""}`}></div>

                </nav>

                {/* ----------- Menu Icon ------------------ */}
                <img src={menu} alt="Menu Icon" className="w-[30px] cursor-pointer md:hidden"
                    onClick={() => setOpen(!open)} />
            </div>
        </header>
    )
}

export default Header