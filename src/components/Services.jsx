import React from 'react';
import { Code, Smartphone, Lightbulb, PenTool } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Desarrollo Web',
      description: 'Creación de sitios web y aplicaciones web modernas, responsivas y optimizadas para buscadores.',
      icon: <Code className="w-10 h-10" />,
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      id: 2,
      title: 'Aplicaciones Móviles',
      description: 'Desarrollo de aplicaciones nativas y multiplataforma para iOS y Android con experiencias de usuario excepcionales.',
      icon: <Smartphone className="w-10 h-10" />,
      gradient: 'from-orange-500 to-pink-500'
    },
    {
      id: 3,
      title: 'Consultoría IT',
      description: 'Asesoramiento estratégico para optimizar tus procesos tecnológicos y maximizar el rendimiento de tus sistemas.',
      icon: <Lightbulb className="w-10 h-10" />,
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      id: 4,
      title: 'UI/UX Design',
      description: 'Diseño de interfaces intuitivas y experiencias de usuario que cautivan y convierten visitantes en clientes.',
      icon: <PenTool className="w-10 h-10" />,
      gradient: 'from-purple-500 to-indigo-500'
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 text-orange-500">NUESTROS SERVICIOS</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ofrecemos soluciones tecnológicas personalizadas para impulsar tu negocio al siguiente nivel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-slate-900/50 rounded-lg overflow-hidden transform transition-all duration-300 hover:bg-slate-900/80 border border-slate-800/50 p-6 flex flex-col items-center"
            >
              <div className="mb-4 text-cyan-400">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-cyan-400 mb-2 text-center">{service.title}</h3>
              <p className="text-gray-300 text-center mb-4">{service.description}</p>
              <div className="mt-auto">
                <button className="text-cyan-400 font-medium hover:text-cyan-300 transition-colors flex items-center">
                  Saber más
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Sección de tecnologías */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-white text-center mb-10">Tecnologías que utilizo</h3>
          
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {/* Logos de tecnologías con animaciones al pasar el mouse */}
            {[
              { name: 'React', color: 'cyan' },
              { name: 'Node.js', color: 'green' },
              { name: 'MongoDB', color: 'green' },
              { name: 'Tailwind CSS', color: 'cyan' },
              { name: 'Next.js', color: 'cyan' },
              { name: 'Flutter', color: 'blue' },
              { name: 'Firebase', color: 'orange' },
              { name: 'AWS', color: 'orange' }
            ].map((tech, index) => (
              <div 
                key={index}
                className={`bg-slate-900 px-6 py-4 rounded-lg border border-slate-800 text-white font-bold
                  relative overflow-hidden group transition-all duration-300 transform hover:scale-110
                  hover:shadow-lg hover:shadow-${tech.color}-500/20 hover:border-${tech.color}-500/50
                  cursor-pointer`}
              >
                {/* Efecto de resplandor en el fondo */}
                <div className={`absolute -inset-1 bg-gradient-to-r from-${tech.color}-600 to-${tech.color}-400 
                  opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-xl rounded-lg`}></div>
                
                {/* Línea que aparece desde abajo */}
                <div className={`absolute bottom-0 left-0 w-0 h-0.5 bg-${tech.color}-500 
                  group-hover:w-full transition-all duration-500 ease-in-out`}></div>
                
                {/* Texto con efecto de brillo */}
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
