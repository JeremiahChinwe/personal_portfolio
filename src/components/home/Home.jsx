import About from "../about/About";
import Contact from "../contact/Contact";
import Header from "../header/Header";
import Hero from "../hero/Hero";
import Projects from "../projects/Project";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  )
}
