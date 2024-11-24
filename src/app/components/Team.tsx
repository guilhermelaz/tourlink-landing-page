'use client';
import { motion } from 'framer-motion';

const team = [
  {
    name: 'Anderson Martins',
    role: 'Back-end Leader',
    imageUrl: '/docander.png',
  },
  {
    name: 'Bernardo Tonin',
    role: 'Front-end Designer',
    imageUrl: '/btprates.jpg',
  },
  {
    name: 'Guilherme Lazarotto',
    role: 'Full Stack',
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
    <div id="team" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Nossa Equipe
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Uma equipe apaixonada por inovação e inclusão, combinando tecnologia e compromisso com a acessibilidade.
          </p>
        </motion.div>
        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4"
        >
          {team.map((person, index) => (
            <motion.li
              key={person.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <img
                className="aspect-[3/4] w-full rounded-2xl object-cover bg-gray-100"
                src={person.imageUrl}
                alt=""
              />
              <h3 className="mt-6 text-lg font-semibold leading-8 text-gray-900">
                {person.name}
              </h3>
              <p className="text-base leading-7 text-gray-600">{person.role}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
}
