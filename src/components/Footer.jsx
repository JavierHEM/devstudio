import React from 'react';
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-950 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo y descripción */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold mb-4">
              <span className="text-cyan-400">DEV</span>
              <span className="text-white">STUDIO</span>
            </div>
            <p className="text-gray-400 mb-4">
              Desarrollamos soluciones tecnológicas personalizadas que impulsan el crecimiento de tu negocio y mejoran la experiencia de tus usuarios.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('home')} 
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')} 
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  Servicios
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')} 
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  Nosotros
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </div>
          
          {/* Servicios */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Servicios</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 hover:text-cyan-400 transition-colors">
                <a href="#">Desarrollo Web</a>
              </li>
              <li className="text-gray-400 hover:text-cyan-400 transition-colors">
                <a href="#">Aplicaciones Móviles</a>
              </li>
              <li className="text-gray-400 hover:text-cyan-400 transition-colors">
                <a href="#">Consultoría IT</a>
              </li>
              <li className="text-gray-400 hover:text-cyan-400 transition-colors">
                <a href="#">UI/UX Design</a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Línea divisoria */}
        <div className="border-t border-slate-800 pt-8">
          <p className="text-center text-gray-500">
            © {currentYear} DevStudio. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
