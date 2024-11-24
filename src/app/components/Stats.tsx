'use client';
import { motion } from 'framer-motion';

const stats = [
  { id: 1, name: 'Pessoas com deficiência no Brasil', value: '18.6M+' },
  { id: 2, name: 'Mercado de turismo acessível (EUA)', value: 'US$17B' },
  { id: 3, name: 'Guias cadastrados (meta 2024)', value: '1.000' },
  { id: 4, name: 'Conexões turista-guia (meta 2024)', value: '100K' },
];

export default function Stats() {
  return (
    <div id="market" className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Um mercado em crescimento
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            O turismo acessível representa uma oportunidade significativa de mercado, com demanda crescente e potencial inexplorado.
          </p>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 text-white sm:mt-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4"
        >
          {stats.map((stat) => (
            <div key={stat.id} className="flex flex-col gap-y-3 border-l border-white/10 pl-6">
              <dt className="text-sm leading-6 text-gray-300">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight">
                {stat.value}
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </div>
  );
}
