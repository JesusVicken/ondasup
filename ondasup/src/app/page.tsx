
import { About } from "./_components/About";
import Contact from "./_components/contact";
import EsgOndaSup from "./_components/EsgOndaSup";
import Hero from "./_components/hero";
import Segments from "./_components/segments";
import ServicosCards from "./_components/ServicosCards";
import Testimonials from "./_components/testimonials";



export default function Home() {
  return (

    <main>
      <Hero />
      <About />
      <ServicosCards />
      <EsgOndaSup />
      <Segments />
      <Testimonials />
      <Contact />
    </main>
  )
}
