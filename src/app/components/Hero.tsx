'use client';
import { motion } from 'framer-motion';
import PhoneMockup from './PhoneMockup';

const appScreenshots = [
  '/screenshots/pagina 1.png',  // Substitua pelos nomes reais das suas imagens
  '/screenshots/pagina 2.png',
  '/screenshots/pagina 3.png',
  '/screenshots/pagina 4.png',
  '/screenshots/pagina 5.png',
];

export default function Hero() {
  return (
    <div className="relative isolate pt-14">
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#F50437] to-[#9400DA] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            O destino é o mesmo,
            <br /> o cuidado é especial
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            Conectamos turistas com necessidades especiais a guias nativos capacitados, tornando o turismo verdadeiramente acessível para todos.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            {/* <a
              href="#"
              className="rounded-full bg-[#F50437] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#d40330] transition-colors"
            >
              Comece sua jornada
            </a> */}
            <a
              href="#solution"
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-[#F50437] transition-colors"
            >
              Saiba mais <span aria-hidden="true">→</span>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 sm:mt-24"
        >
          <PhoneMockup images={appScreenshots} />
        </motion.div>
      </div>
    </div>
  );
}
