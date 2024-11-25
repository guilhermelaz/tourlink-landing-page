'use client';
import { timelineEvents } from '../constants/timelineData';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { colors } from '../constants/colors';
import { FiChevronsDown } from 'react-icons/fi';
import { useRef } from 'react';

export default function TimelinePage() {
  const lastEventRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    lastEventRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="bg-white">
      <Navbar />
      <div className="min-h-screen pt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Nossa Jornada
            </h1>
            <p className="text-gray-600 mb-8">
              Acompanhe nossa evolução desde o início
            </p>
            <button
              onClick={scrollToBottom}
              className={`${colors.gradient} ${colors.gradientHover} rounded-full px-6 py-3 text-white font-semibold flex items-center gap-2 mx-auto hover:shadow-lg transition-all duration-300`}
            >
              Ver do início
              <FiChevronsDown className="animate-bounce" />
            </button>
          </div>
          
          <div className="relative">
            {/* Linha vertical central */}
            <div className={`absolute left-1/2 transform -translate-x-1/2 h-full w-1 ${colors.gradient} hidden md:block`} />
            
            {/* Linha horizontal para mobile */}
            <div className={`absolute left-8 top-0 h-full w-1 ${colors.gradient} md:hidden`} />
            
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                ref={index === timelineEvents.length - 1 ? lastEventRef : null}
                className={`mb-12 flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                } relative`}
              >
                {/* Conteúdo do evento */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'} pl-24 md:pl-0`}>
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${colors.gradient} text-white mb-3`}>
                      {event.date}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {event.title}
                    </h3>
                    {event.imageUrl && (
                      <div className="relative h-48 sm:h-64 w-full mb-4 rounded-lg overflow-hidden">
                        <Image
                          src={event.imageUrl}
                          alt={event.title}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    {event.description && (
                      <p className="text-gray-600 leading-relaxed">
                        {event.description}
                      </p>
                    )}
                  </div>
                </div>

                {/* Ponto central */}
                <div className={`w-4 h-4 absolute left-8 md:left-1/2 transform md:-translate-x-1/2 rounded-full ${colors.gradient} border-4 border-white shadow-md`} 
                     style={{ top: '2rem' }}
                />
                
                {/* Espaço vazio do outro lado */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>

          {/* Botão Voltar para Home */}
          <div className="flex justify-center mt-16 mb-12">
            <a
              href="/"
              className={`${colors.gradient} ${colors.gradientHover} rounded-full px-8 py-4 text-white font-semibold flex items-center gap-2 hover:shadow-lg transition-all duration-300 text-lg`}
            >
              Voltar para a página principal
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
