import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-950">
      {/* Animated Background Lines */}
      <div className="absolute inset-0 bg-[#020617]">
        <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0369a1" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#c2410c" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#f97316" stopOpacity="0.4" />
            </linearGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <radialGradient id="darkGradient" cx="50%" cy="50%" r="80%" fx="50%" fy="50%">
              <stop offset="0%" stopColor="#0f172a" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#020617" stopOpacity="1" />
            </radialGradient>
          </defs>
          
          {/* Background */}
          <rect x="0" y="0" width="1200" height="800" fill="url(#darkGradient)" />
          
          {/* Animated dots for texture */}
          <g className="opacity-20">
            {Array.from({ length: 50 }).map((_, i) => (
              <circle 
                key={`dot-${i}`} 
                cx={Math.random() * 1200} 
                cy={Math.random() * 800} 
                r={Math.random() * 2 + 0.5} 
                fill={Math.random() > 0.5 ? '#0ea5e9' : '#f97316'} 
                className="animate-pulse"
                style={{ animationDelay: `${Math.random() * 3}s` }}
              />
            ))}
          </g>
          
          {/* Blue waves - left side */}
          <g filter="url(#glow)" className="animate-[wave_15s_ease-in-out_infinite]">
            {Array.from({ length: 8 }).map((_, i) => (
              <path 
                key={`blue-wave-${i}`}
                d={`M-100,${300 + i * 15} C50,${250 + i * 10} 150,${350 + i * 5} 250,${300 + i * 15} S400,${200 + i * 20} 500,${250 + i * 15}`}
                fill="none"
                stroke="url(#blueGradient)"
                strokeWidth={1.5 - i * 0.1}
                strokeOpacity={0.9 - i * 0.1}
                className="animate-[pulse_4s_ease-in-out_infinite]"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </g>
          
          {/* Orange waves - right side */}
          <g filter="url(#glow)" className="animate-[wave_15s_ease-in-out_infinite_reverse]">
            {Array.from({ length: 8 }).map((_, i) => (
              <path 
                key={`orange-wave-${i}`}
                d={`M1300,${350 + i * 15} C1150,${300 + i * 10} 1050,${400 + i * 5} 950,${350 + i * 15} S800,${250 + i * 20} 700,${300 + i * 15}`}
                fill="none"
                stroke="url(#orangeGradient)"
                strokeWidth={1.5 - i * 0.1}
                strokeOpacity={0.9 - i * 0.1}
                className="animate-[pulse_4s_ease-in-out_infinite]"
                style={{ animationDelay: `${i * 0.2 + 2}s` }}
              />
            ))}
          </g>
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
          Innovando
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-orange-500">
            con propósito,
          </span>
          <br />
          <span className="text-white">construyendo el</span>
          <br />
          <span className="text-white">futuro de tu</span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-cyan-400">
            negocio
          </span>
        </h1>
        
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Somos especialistas en desarrollo web, aplicaciones móviles y soluciones tecnológicas 
          que impulsan el crecimiento de tu empresa.
        </p>
        
        <button
          onClick={() => scrollToSection('services')}
          className="inline-flex items-center px-8 py-4 border border-cyan-500 text-white font-semibold rounded-lg hover:bg-cyan-500/20 transition-all duration-300 transform hover:scale-105"
        >
          Ver Servicios
          <ArrowRight className="ml-2 w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default Hero;