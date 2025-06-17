"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import {
  Code,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  Heart,
  Coffee,
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement[]>([]);
  const socialRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  const navigationLinks = [
    { name: "Inicio", href: "/" },
    { name: "Sobre mí", href: "/about" },
    { name: "Proyectos", href: "/projects" },
    { name: "Servicios", href: "/services" },
    { name: "Contacto", href: "/contact" },
  ];

  const serviceLinks = [
    { name: "Desarrollo Web", href: "/services/web-development" },
    { name: "E-commerce", href: "/services/ecommerce" },
    { name: "Aplicaciones Web", href: "/services/web-apps" },
    { name: "SEO & Marketing", href: "/services/seo" },
    { name: "Mantenimiento", href: "/services/maintenance" },
  ];

  const resourceLinks = [
    { name: "Blog", href: "/blog" },
    { name: "Casos de Éxito", href: "/case-studies" },
    { name: "Preguntas Frecuentes", href: "/faq" },
    { name: "Política de Privacidad", href: "/privacy" },
    { name: "Términos de Uso", href: "/terms" },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animación del contenido principal
      gsap.fromTo(
        contentRef.current,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 90%",
            end: "bottom 10%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animación del logo
      gsap.fromTo(
        logoRef.current,
        {
          opacity: 0,
          x: -30,
          scale: 0.8,
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.8,
          delay: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animación de las columnas de links
      linksRef.current.forEach((column, index) => {
        if (column) {
          gsap.fromTo(
            column,
            {
              opacity: 0,
              y: 30,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              delay: 0.3 + index * 0.1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: footerRef.current,
                start: "top 90%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
      });

      // Animación de redes sociales
      gsap.fromTo(
        socialRef.current,
        {
          opacity: 0,
          x: 30,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          delay: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animación del bottom
      gsap.fromTo(
        bottomRef.current,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const addToLinksRefs = (el: HTMLDivElement) => {
    if (el && !linksRef.current.includes(el)) {
      linksRef.current.push(el);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      ref={footerRef}
      className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden"
    >
      {/* Elementos decorativos */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>

      <div
        ref={contentRef}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Logo y descripción */}
          <div ref={logoRef} className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 group mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Code className="w-7 h-7 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Bruno Cicerchia
              </span>
            </Link>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Desarrollador Full Stack especializado en crear experiencias web
              excepcionales que impulsan el crecimiento de tu negocio.
              Transformo ideas en soluciones digitales efectivas.
            </p>

            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-3 text-blue-400" />
                <span>bruno@ejemplo.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-3 text-blue-400" />
                <span>+54 9 11 1234-5678</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-3 text-blue-400" />
                <span>Buenos Aires, Argentina</span>
              </div>
            </div>
          </div>

          {/* Navegación */}
          <div ref={addToLinksRefs}>
            <h3 className="text-lg font-semibold mb-6">Navegación</h3>
            <ul className="space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Servicios */}
          <div ref={addToLinksRefs}>
            <h3 className="text-lg font-semibold mb-6">Servicios</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Recursos */}
          <div ref={addToLinksRefs}>
            <h3 className="text-lg font-semibold mb-6">Recursos</h3>
            <ul className="space-y-3 mb-8">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Redes sociales */}
            <div ref={socialRef}>
              <h3 className="text-lg font-semibold mb-4">Sígueme</h3>
              <div className="flex space-x-4">
                <Link
                  href="https://github.com"
                  className="w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded-lg flex items-center justify-center transition-colors group"
                >
                  <Github className="w-5 h-5 text-gray-300 group-hover:text-white" />
                </Link>
                <Link
                  href="https://linkedin.com"
                  className="w-10 h-10 bg-gray-700 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors group"
                >
                  <Linkedin className="w-5 h-5 text-gray-300 group-hover:text-white" />
                </Link>
                <Link
                  href="mailto:bruno@ejemplo.com"
                  className="w-10 h-10 bg-gray-700 hover:bg-red-600 rounded-lg flex items-center justify-center transition-colors group"
                >
                  <Mail className="w-5 h-5 text-gray-300 group-hover:text-white" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Separador */}
        <div className="border-t border-gray-700 my-12"></div>

        {/* Bottom section */}
        <div
          ref={bottomRef}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <div className="flex items-center text-gray-400 text-sm mb-4 md:mb-0">
            <span>© 2024 Bruno Cicerchia. Hecho con</span>
            <Heart className="w-4 h-4 mx-1 text-red-500" />
            <span>y mucho</span>
            <Coffee className="w-4 h-4 ml-1 text-yellow-500" />
          </div>

          <div className="flex items-center space-x-6">
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Privacidad
            </Link>
            <Link
              href="/terms"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Términos
            </Link>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform group"
            >
              <ArrowUp className="w-5 h-5 text-white group-hover:animate-bounce" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
