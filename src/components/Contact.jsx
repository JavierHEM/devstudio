import React, { useState } from 'react';
import { Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log('Formulario enviado:', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
    alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
  };

  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-cyan-400 mb-4">CONTACTO</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? Contáctanos y conversemos sobre cómo podemos ayudarte.
          </p>
        </div>

        <div className="bg-slate-800 rounded-xl shadow-xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 p-8 md:p-12 bg-gradient-to-br from-cyan-500/20 to-orange-500/20">
              <h3 className="text-2xl font-bold text-white mb-6">Información de Contacto</h3>
              
              <div className="space-y-6 text-gray-300">
                <div>
                  <h4 className="text-lg font-semibold text-cyan-400 mb-1">Ubicación</h4>
                  <p>Santiago, Chile</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-cyan-400 mb-1">Email</h4>
                  <p>contacto@devstudio.com</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-cyan-400 mb-1">Horario</h4>
                  <p>Lunes - Viernes: 9am - 6pm</p>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    placeholder="Tu nombre"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    placeholder="tu@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    placeholder="Cuéntame sobre tu proyecto..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full flex justify-center items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-orange-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
                >
                  Enviar Mensaje
                  <Send className="ml-2 w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
