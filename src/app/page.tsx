import Contacto from "./componentes/Contacto";
import Footer from "./componentes/Footer";
import Hero from "./componentes/Hero";
import Navbar from "./componentes/Navbar";
import Proyectos from "./componentes/Proyectos";
import Skills from "./componentes/Skills";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <Navbar />
      <Hero />
      <Skills />
      <Proyectos />
      <Contacto />
      <Footer />
    </div>
  );
}
