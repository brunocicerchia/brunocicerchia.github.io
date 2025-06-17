"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Code, Github, Linkedin, Mail } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { name: "Inicio", href: "/" },
    { name: "Sobre mí", href: "/about" },
    { name: "Proyectos", href: "/projects" },
    { name: "Experiencia", href: "/experience" },
    { name: "Contacto", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/70 backdrop-blur-lg border-b border-gray-200/50 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <Code className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                Bruno Cicerchia
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-blue-50/80"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Social Links Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="https://github.com"
              className="text-gray-500 hover:text-gray-700 transition-colors p-2 hover:bg-gray-100/80 rounded-full"
            >
              <Github className="w-5 h-5" />
            </Link>
            <Link
              href="https://linkedin.com"
              className="text-gray-500 hover:text-gray-700 transition-colors p-2 hover:bg-gray-100/80 rounded-full"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link
              href="mailto:contact@example.com"
              className="text-gray-500 hover:text-gray-700 transition-colors p-2 hover:bg-gray-100/80 rounded-full"
            >
              <Mail className="w-5 h-5" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50/80 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors"
            >
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/90 backdrop-blur-lg border-t border-gray-200/50">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 hover:bg-blue-50/80"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}

          {/* Social Links Mobile */}
          <div className="flex items-center space-x-4 px-3 py-2 border-t border-gray-200/50 mt-4">
            <span className="text-sm text-gray-500 font-medium">Sígueme:</span>
            <Link
              href="https://github.com"
              className="text-gray-500 hover:text-gray-700 transition-colors p-2 hover:bg-gray-100/80 rounded-full"
            >
              <Github className="w-5 h-5" />
            </Link>
            <Link
              href="https://linkedin.com"
              className="text-gray-500 hover:text-gray-700 transition-colors p-2 hover:bg-gray-100/80 rounded-full"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link
              href="mailto:contact@example.com"
              className="text-gray-500 hover:text-gray-700 transition-colors p-2 hover:bg-gray-100/80 rounded-full"
            >
              <Mail className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
