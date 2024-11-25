'use client';
import { motion } from 'framer-motion';
import { colors } from '../constants/colors';

const stats = [
  { id: 1, name: 'Pessoas com necessidades especiais no Brasil', value: '18.6M+' },
  { id: 2, name: 'Movimentados no mercado de turismo acessível (EUA)', value: 'US$17B' },
  { id: 3, name: 'Guias cadastrados (2025)', value: 'Meta: 500' },
  { id: 4, name: 'Conexões turista-guia (2025)', value: 'Meta: 50.000' },
];

export default function Stats() {
  return (
    <div id="market" className="bg-[#1E1E1E] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            <span className={colors.gradient + " bg-clip-text text-transparent"}>
              Um mercado
            </span>
            <br />
            <span className="text-white">em crescimento</span>
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
              <dd className={`order-first text-3xl font-semibold tracking-tight ${colors.gradient} bg-clip-text text-transparent`}>
                {stat.value}
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </div>
  );
}
