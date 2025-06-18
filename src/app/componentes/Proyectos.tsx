"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import {
  ExternalLink,
  Github,
  Eye,
  Calendar,
  Code,
  Smartphone,
  Globe,
  ShoppingCart,
  Briefcase,
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Projects() {
  const projectsRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const filtersRef = useRef<HTMLDivElement>(null);
  const projectCardsRef = useRef<HTMLDivElement[]>([]);

  const [selectedFilter, setSelectedFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "E-commerce Moda Premium",
      description:
        "Plataforma completa de comercio electrónico con pagos integrados, gestión de inventario y panel administrativo.",
      image: "https://picsum.photos/600/400?random=1",
      category: "ecommerce",
      technologies: ["Next.js", "Stripe", "MongoDB", "Tailwind CSS"],
      liveUrl: "https://ejemplo-ecommerce.com",
      githubUrl: "https://github.com/usuario/ecommerce",
      year: "2024",
      client: "FashionCorp",
      results: ["300% aumento en ventas", "50% reducción en tiempo de carga"],
    },
    {
      id: 2,
      title: "Dashboard Empresarial",
      description:
        "Sistema de gestión empresarial con análisis en tiempo real, reportes automatizados y múltiples integraciones.",
      image: "https://picsum.photos/600/400?random=2",
      category: "webapp",
      technologies: ["React", "D3.js", "Node.js", "PostgreSQL"],
      liveUrl: "https://ejemplo-dashboard.com",
      githubUrl: "https://github.com/usuario/dashboard",
      year: "2024",
      client: "TechStartup",
      results: ["80% mejora en eficiencia", "Dashboard en tiempo real"],
    },
    {
      id: 3,
      title: "Landing Page Inmobiliaria",
      description:
        "Sitio web optimizado para conversión con formularios inteligentes, galería interactiva y CRM integrado.",
      image: "https://picsum.photos/600/400?random=3",
      category: "landing",
      technologies: ["Next.js", "Framer Motion", "EmailJS", "Vercel"],
      liveUrl: "https://ejemplo-inmobiliaria.com",
      githubUrl: "https://github.com/usuario/inmobiliaria",
      year: "2023",
      client: "PropiedadesPlus",
      results: ["400% más leads", "95% velocidad PageSpeed"],
    },
    {
      id: 4,
      title: "App Móvil Fitness",
      description:
        "Aplicación web progresiva para seguimiento de ejercicios, nutrición y progreso personal.",
      image: "https://picsum.photos/600/400?random=4",
      category: "mobile",
      technologies: ["React Native", "Firebase", "Redux", "Expo"],
      liveUrl: "https://ejemplo-fitness.com",
      githubUrl: "https://github.com/usuario/fitness",
      year: "2023",
      client: "FitLife",
      results: ["10K+ usuarios activos", "4.8★ rating"],
    },
    {
      id: 5,
      title: "Sitio Corporativo",
      description:
        "Página web institucional con blog integrado, formularios de contacto y optimización SEO avanzada.",
      image: "https://picsum.photos/600/400?random=5",
      category: "corporate",
      technologies: ["WordPress", "Custom PHP", "MySQL", "SEO"],
      liveUrl: "https://ejemplo-corporativo.com",
      githubUrl: null,
      year: "2023",
      client: "MegaCorp",
      results: ["200% más tráfico orgánico", "Top 3 en Google"],
    },
    {
      id: 6,
      title: "Marketplace Digital",
      description:
        "Plataforma de múltiples vendedores con sistema de comisiones, chat en vivo y analíticas avanzadas.",
      image: "https://picsum.photos/600/400?random=6",
      category: "ecommerce",
      technologies: ["Vue.js", "Laravel", "Redis", "Docker"],
      liveUrl: "https://ejemplo-marketplace.com",
      githubUrl: "https://github.com/usuario/marketplace",
      year: "2024",
      client: "Digital Bazaar",
      results: ["500+ vendedores", "$2M+ en transacciones"],
    },
  ];

  const filters = [
    { id: "all", label: "Todos", icon: Globe },
    { id: "ecommerce", label: "E-commerce", icon: ShoppingCart },
    { id: "webapp", label: "Web App", icon: Code },
    { id: "landing", label: "Landing", icon: Eye },
    { id: "mobile", label: "Mobile", icon: Smartphone },
    { id: "corporate", label: "Corporativo", icon: Briefcase },
  ];

  const filteredProjects =
    selectedFilter === "all"
      ? projects
      : projects.filter((project) => project.category === selectedFilter);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animación del título
      gsap.fromTo(
        titleRef.current,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animación de filtros
      gsap.fromTo(
        filtersRef.current,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2,
          scrollTrigger: {
            trigger: filtersRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, projectsRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    // Animar proyectos cuando cambia el filtro
    projectCardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            x: -50,
            scale: 0.9,
          },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.6,
            delay: index * 0.1,
            ease: "power2.out",
          }
        );
      }
    });
  }, [filteredProjects]);

  const addToRefs = (el: HTMLDivElement) => {
    if (el && !projectCardsRef.current.includes(el)) {
      projectCardsRef.current.push(el);
    }
  };

  const handleFilterChange = (filterId: string) => {
    setSelectedFilter(filterId);
    projectCardsRef.current = []; // Reset refs
  };

  return (
    <section
      ref={projectsRef}
      className="py-20 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Proyectos que
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Generan Resultados
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Cada proyecto es una historia de éxito. Descubre cómo he ayudado a
            empresas a alcanzar sus objetivos digitales.
          </p>
        </div>

        {/* Filtros */}
        <div
          ref={filtersRef}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => {
            const { icon: Icon } = filter;
            return (
              <button
                key={filter.id}
                onClick={() => handleFilterChange(filter.id)}
                className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedFilter === filter.id
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                    : "bg-white text-gray-600 hover:text-blue-600 border border-gray-200 hover:border-blue-300"
                }`}
              >
                <Icon className="w-4 h-4 mr-2" />
                {filter.label}
              </button>
            );
          })}
        </div>

        {/* Grid de proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              ref={addToRefs}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
            >
              {/* Imagen */}
              <div className="relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-2 rounded-lg text-sm font-medium flex items-center justify-center hover:bg-white transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Ver sitio
                    </a>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-900/90 backdrop-blur-sm text-white px-3 py-2 rounded-lg text-sm font-medium flex items-center justify-center hover:bg-gray-900 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Contenido */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-blue-600 font-medium">
                    {project.client}
                  </span>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-1" />
                    {project.year}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tecnologías */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Resultados */}
                <div className="border-t border-gray-100 pt-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">
                    Resultados:
                  </h4>
                  <ul className="space-y-1">
                    {project.results.map((result, resultIndex) => (
                      <li
                        key={resultIndex}
                        className="text-xs text-green-600 flex items-center"
                      >
                        <div className="w-1 h-1 bg-green-600 rounded-full mr-2"></div>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              ¿Tu proyecto será el próximo?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Cada proyecto es único y merece una solución personalizada.
              Hablemos sobre tu idea.
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:scale-105 transition-transform shadow-lg">
              Iniciar mi proyecto
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
