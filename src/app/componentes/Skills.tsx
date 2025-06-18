"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  TrendingUp,
  Users,
  Smartphone,
  Zap,
  Search,
  BarChart3,
  Globe,
  Palette,
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Skills() {
  const skillsRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const skillCardsRef = useRef<HTMLDivElement[]>([]);
  const statsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const businessSkills = [
    {
      icon: TrendingUp,
      title: "Aumenta tus Ventas",
      description:
        "Sitios web que convierten visitantes en clientes con estrategias de conversión probadas",
      benefit: "Más ingresos",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: Users,
      title: "Atrae Más Clientes",
      description:
        "Diseños atractivos que generan confianza y profesionalismo en tu marca",
      benefit: "Mayor alcance",
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: Smartphone,
      title: "Funciona en Móviles",
      description:
        "Tu sitio se ve perfecto en cualquier dispositivo, donde sea que estén tus clientes",
      benefit: "Acceso 24/7",
      color: "from-purple-500 to-violet-600",
    },
    {
      icon: Search,
      title: "Aparece en Google",
      description:
        "Optimización SEO para que tus clientes te encuentren fácilmente en internet",
      benefit: "Más visibilidad",
      color: "from-orange-500 to-amber-600",
    },
    {
      icon: Zap,
      title: "Carga Súper Rápido",
      description:
        "Sitios web veloces que no hacen esperar a tus clientes potenciales",
      benefit: "Mejor experiencia",
      color: "from-yellow-500 to-lime-600",
    },
    {
      icon: BarChart3,
      title: "Mide tus Resultados",
      description:
        "Análisis detallados para conocer el comportamiento de tus clientes",
      benefit: "Decisiones inteligentes",
      color: "from-teal-500 to-cyan-600",
    },
    {
      icon: Globe,
      title: "Presencia Global",
      description:
        "Llega a clientes de cualquier parte del mundo con tu negocio online",
      benefit: "Mercado mundial",
      color: "from-slate-500 to-gray-600",
    },
    {
      icon: Palette,
      title: "Diseño Único",
      description:
        "Sitios web personalizados que reflejan la identidad de tu marca",
      benefit: "Diferenciación",
      color: "from-pink-500 to-rose-600",
    },
  ];

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

      // Animación de las tarjetas - de izquierda a derecha secuencialmente
      skillCardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(
            card,
            {
              opacity: 0,
              x: -100, // Empiezan desde la izquierda
              scale: 0.8,
            },
            {
              opacity: 1,
              x: 0,
              scale: 1,
              duration: 0.8,
              delay: index * 0.15, // Delay secuencial más espaciado
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 90%", // Trigger más temprano
                end: "bottom 10%",
                toggleActions: "play none none reverse",
              },
            }
          );

          // Hover effect mejorado
          card.addEventListener("mouseenter", () => {
            gsap.to(card, {
              scale: 1.05,
              y: -10,
              rotationY: 5, // Efecto 3D sutil
              duration: 0.3,
              ease: "power2.out",
            });
          });

          card.addEventListener("mouseleave", () => {
            gsap.to(card, {
              scale: 1,
              y: 0,
              rotationY: 0,
              duration: 0.3,
              ease: "power2.out",
            });
          });
        }
      });

      // Animación de las estadísticas
      gsap.fromTo(
        statsRef.current,
        {
          opacity: 0,
          y: 60,
          scale: 0.8,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Hover effect para estadísticas
      if (statsRef.current) {
        statsRef.current.addEventListener("mouseenter", () => {
          gsap.to(statsRef.current, {
            scale: 1.02,
            y: -5,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        statsRef.current.addEventListener("mouseleave", () => {
          gsap.to(statsRef.current, {
            scale: 1,
            y: 0,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      }

      // Animación del Call to Action
      gsap.fromTo(
        ctaRef.current,
        {
          opacity: 0,
          y: 60,
          scale: 0.8,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Hover effect para CTA
      if (ctaRef.current) {
        ctaRef.current.addEventListener("mouseenter", () => {
          gsap.to(ctaRef.current, {
            scale: 1.02,
            y: -5,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        ctaRef.current.addEventListener("mouseleave", () => {
          gsap.to(ctaRef.current, {
            scale: 1,
            y: 0,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      }
    }, skillsRef);

    return () => ctx.revert();
  }, []);

  const addToRefs = (el: HTMLDivElement) => {
    if (el && !skillCardsRef.current.includes(el)) {
      skillCardsRef.current.push(el);
    }
  };

  return (
    <section
      ref={skillsRef}
      className="py-20 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título y descripción */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            ¿Qué Puedo Hacer Por Tu
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Negocio?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            No solo creo sitios web, construyo herramientas digitales que
            impulsan tu negocio hacia el éxito. Cada proyecto está diseñado para
            generar resultados reales y measurables.
          </p>
        </div>

        {/* Grid de skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {businessSkills.map((skill, index) => {
            const { icon: Icon, title, description, benefit, color } = skill;
            return (
              <div
                key={index}
                ref={addToRefs}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow cursor-pointer group"
              >
                {/* Icono con gradiente */}
                <div
                  className={`w-14 h-14 bg-gradient-to-r ${color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Contenido */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {title}
                </h3>
                <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                  {description}
                </p>

                {/* Badge de beneficio */}
                <div
                  className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${color} text-white`}
                >
                  {benefit}
                </div>
              </div>
            );
          })}
        </div>

        {/* Estadísticas */}
        <div
          ref={statsRef}
          className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 cursor-pointer"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">150+</div>
              <div className="text-gray-600 text-sm">Proyectos Completados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">98%</div>
              <div className="text-gray-600 text-sm">Clientes Satisfechos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
              <div className="text-gray-600 text-sm">Soporte Disponible</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">
                15 días
              </div>
              <div className="text-gray-600 text-sm">Tiempo Promedio</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div
            ref={ctaRef}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white cursor-pointer"
          >
            <h3 className="text-2xl font-bold mb-4">
              ¿Listo para hacer crecer tu negocio?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Conversemos sobre cómo puedo ayudarte a alcanzar tus objetivos con
              una solución web que realmente funcione para tu negocio.
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:scale-105 transition-transform shadow-lg">
              Solicitar Consulta Gratuita
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
