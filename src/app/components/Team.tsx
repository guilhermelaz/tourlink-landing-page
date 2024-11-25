'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { colors } from '../constants/colors';

const team = [
  {
    name: 'Anderson Martins',
    role: 'Back-end Leader',
    imageUrl: '/docander.png',
  },
  {
    name: 'Bernardo Tonin',
    role: 'Front-end Developer',
    imageUrl: '/btprates.jpg',
  },
  {
    name: 'Guilherme Lazarotto',
    role: 'Full Stack Developer',
    imageUrl: '/gui.jpg',
  },
  {
    name: 'Nicole Paz',
    role: 'Marketing',
    imageUrl: '/nicole.jpg',
  },
];

export default function Team() {
  return (
    <div id="team" className="py-16 sm:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            <span className={colors.gradient + " bg-clip-text text-transparent"}>
              Nossa Equipe
            </span>
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Uma equipe apaixonada por inovação e inclusão, combinando tecnologia e compromisso com a acessibilidade.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-12 sm:mt-16"
        >
          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {team.map((person, index) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="group flex flex-col items-center text-center p-4 rounded-xl hover:bg-white hover:shadow-xl transition-all duration-300"
              >
                <div className="relative w-24 h-24 sm:w-32 sm:h-32 mb-3 rounded-full overflow-hidden ring-2 ring-gray-100 group-hover:ring-[#F50437]/20 transition-all duration-300">
                  <Image
                    src={person.imageUrl}
                    alt={person.name}
                    fill
                    className="rounded-full object-cover group-hover:scale-110 transition-all duration-300"
                    sizes="(max-width: 640px) 6rem, 8rem"
                  />
                </div>
                <h3 className="text-sm sm:text-base font-semibold text-gray-900 group-hover:text-[#F50437] transition-colors">
                  {person.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">
                  {person.role}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
