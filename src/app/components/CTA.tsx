'use client';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

export default function CTA() {
  return (
    <div id="contact" className="relative isolate">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#F50437] to-[#9400DA] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Acessibilidade é um direito, não um privilégio
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
            A Tourlink está aqui para garantir que todos possam explorar o mundo com segurança, conforto e autonomia.
          </p>

          <div className="mt-12 flex flex-col items-center">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
            >
              <a
                href="https://github.com/ProjetoIntegrador1Turismo"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 hover:bg-gray-50 transition-all"
              >
                <div className="flex items-center justify-center mb-4">
                  <FiGithub className="w-8 h-8 text-[#F50437]" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">
                  Acompanhe o Desenvolvimento
                </h3>
                <div className="flex justify-center gap-6 mt-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <span>Projeto Ativo</span>
                    <FiExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
