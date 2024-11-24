'use client';
import { FiUsers, FiMap, FiStar, FiShield } from 'react-icons/fi';
import { motion } from 'framer-motion';

const features = [
  {
    name: 'Informações Centralizadas',
    description: 'Acesse informações detalhadas sobre acessibilidade em pontos turísticos, hospedagens e serviços em um só lugar.',
    icon: FiMap,
  },
  {
    name: 'Guias Capacitados',
    description: 'Conecte-se com guias nativos validados pelo Cadastur, oferecendo roteiros personalizados para suas necessidades.',
    icon: FiUsers,
  },
  {
    name: 'Experiências Avaliadas',
    description: 'Avalie suas experiências e veja avaliações de outros viajantes para fazer escolhas informadas.',
    icon: FiStar,
  },
  {
    name: 'Segurança Garantida',
    description: 'Todos os guias são verificados e validados, garantindo sua segurança e tranquilidade durante a viagem.',
    icon: FiShield,
  },
];

export default function Features() {
  return (
    <div id="solution" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            A solução que derruba barreiras
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-lg leading-8 text-gray-600"
          >
            Tornamos o turismo acessível para todos através de uma plataforma intuitiva e completa.
          </motion.p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col"
              >
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-[#F50437]">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
