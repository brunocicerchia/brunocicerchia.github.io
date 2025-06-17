"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";
import {
  Code,
  Database,
  Server,
  Globe,
  Terminal,
  Cpu,
  Wifi,
  Cloud,
  Smartphone,
  Monitor,
  Zap,
  Shield,
} from "lucide-react";

// Registrar los plugins de GSAP
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, Draggable);
}

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const floatingElementsRef = useRef<HTMLDivElement[]>([]);
  const textRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const programmingIcons = [
    { Icon: Code, delay: 0, position: { x: 10, y: 15 } },
    { Icon: Database, delay: 0.2, position: { x: 85, y: 20 } },
    { Icon: Server, delay: 0.4, position: { x: 15, y: 75 } },
    { Icon: Globe, delay: 0.6, position: { x: 90, y: 70 } },
    { Icon: Terminal, delay: 0.8, position: { x: 5, y: 45 } },
    { Icon: Cpu, delay: 1.0, position: { x: 93, y: 45 } },
    { Icon: Wifi, delay: 1.2, position: { x: 20, y: 35 } },
    { Icon: Cloud, delay: 1.4, position: { x: 80, y: 85 } },
    { Icon: Smartphone, delay: 1.6, position: { x: 25, y: 85 } },
    { Icon: Monitor, delay: 1.8, position: { x: 75, y: 30 } },
    { Icon: Zap, delay: 2.0, position: { x: 8, y: 65 } },
    { Icon: Shield, delay: 2.2, position: { x: 88, y: 60 } },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animación inicial del texto
      gsap.fromTo(
        textRef.current,
        {
          opacity: 0,
          y: 50,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
        }
      );

      // Animación del CTA
      gsap.fromTo(
        ctaRef.current,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.5,
          ease: "power2.out",
        }
      );

      // Animaciones de los elementos flotantes
      floatingElementsRef.current.forEach((element, index) => {
        if (element) {
          // Animación de entrada
          gsap.fromTo(
            element,
            {
              opacity: 0,
              scale: 0,
            },
            {
              opacity: 1,
              scale: 1,
              rotation: 0,
              duration: 0.6,
              delay: programmingIcons[index]?.delay || 0,
              ease: "back.out(1.7)",
            }
          );

          // Animación de flotación continua con rotación limitada
          gsap.to(element, {
            y: "random(-15, 15)",
            x: "random(-10, 10)",
            duration: "random(4, 7)",
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: Math.random() * 3,
          });

          // Efecto de hover (solo cuando no se está arrastrando)
          element.addEventListener("mouseenter", () => {
            if (!element.classList.contains("dragging")) {
              gsap.to(element, {
                scale: 1.2,
                rotation: "random(-20, 20)", // Rotación limitada en hover
                duration: 0.3,
                ease: "power2.out",
              });
            }
          });

          element.addEventListener("mouseleave", () => {
            if (!element.classList.contains("dragging")) {
              gsap.to(element, {
                scale: 1,
                duration: 0.3,
                ease: "power2.out",
              });
            }
          });
        }
      });

      // Animación de paralaje en scroll
      gsap.to(".floating-icon", {
        y: -30,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const addToRefs = (el: HTMLDivElement) => {
    if (el && !floatingElementsRef.current.includes(el)) {
      floatingElementsRef.current.push(el);
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden flex items-center justify-center pt-16"
    >
      {/* Elementos flotantes de programación distribuidos uniformemente */}
      <div className="absolute inset-0 pointer-events-none">
        {programmingIcons.map(({ Icon, position }, index) => (
          <div
            key={index}
            ref={addToRefs}
            className="floating-icon absolute pointer-events-auto select-none"
            style={{
              left: `${position.x}%`,
              top: `${position.y}%`,
              transform: "translate(-50%, -50%)",
            }}
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200/50 flex items-center justify-center hover:shadow-xl transition-shadow cursor-grab active:cursor-grabbing">
              <Icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-blue-600 pointer-events-none" />
            </div>
          </div>
        ))}
      </div>

      {/* Elementos decorativos de fondo distribuidos uniformemente */}
      <div className="absolute top-1/4 left-1/6 w-32 h-32 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-2xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/6 w-40 h-40 bg-gradient-to-r from-green-200/20 to-blue-200/20 rounded-full blur-2xl pointer-events-none"></div>
      <div className="absolute top-3/4 left-1/3 w-28 h-28 bg-gradient-to-r from-purple-200/20 to-pink-200/20 rounded-full blur-2xl pointer-events-none"></div>
      <div className="absolute top-1/6 right-1/3 w-36 h-36 bg-gradient-to-r from-yellow-200/20 to-orange-200/20 rounded-full blur-2xl pointer-events-none"></div>
      <div className="absolute bottom-1/6 left-1/2 w-24 h-24 bg-gradient-to-r from-indigo-200/20 to-cyan-200/20 rounded-full blur-2xl pointer-events-none"></div>

      {/* Contenido principal */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto pointer-events-none">
        <div ref={textRef}>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            <span className="block">Desarrollador</span>
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              Full Stack
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Creando experiencias digitales excepcionales con código limpio y
            diseño innovador
          </p>

          <div className="flex flex-wrap gap-4 justify-center text-sm text-gray-500 mb-8">
            <span className="px-3 py-1 bg-white/80 rounded-full border border-gray-200">
              React
            </span>
            <span className="px-3 py-1 bg-white/80 rounded-full border border-gray-200">
              Next.js
            </span>
            <span className="px-3 py-1 bg-white/80 rounded-full border border-gray-200">
              TypeScript
            </span>
            <span className="px-3 py-1 bg-white/80 rounded-full border border-gray-200">
              Node.js
            </span>
            <span className="px-3 py-1 bg-white/80 rounded-full border border-gray-200">
              Python
            </span>
          </div>
        </div>

        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row gap-4 justify-center pointer-events-auto"
        >
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold text-lg hover:scale-105 transition-transform shadow-lg hover:shadow-xl">
            Ver mis proyectos
          </button>
          <button className="px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-800 rounded-xl font-semibold text-lg border border-gray-200 hover:scale-105 transition-transform shadow-lg hover:shadow-xl">
            Contactar
          </button>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce pointer-events-none">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
