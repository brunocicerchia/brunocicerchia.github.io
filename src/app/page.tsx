import Contacto from "./componentes/Contacto";
import Footer from "./componentes/Footer";
import Hero from "./componentes/Hero";
import Navbar from "./componentes/Navbar";
import Skills from "./componentes/Skills";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Skills />
      <Contacto />
      <Footer />
    </div>
  );
}
