'use client';
import { FiGithub } from 'react-icons/fi';
import { colors } from '../constants/colors';

const navigation = {
  main: [
    { name: 'Início', href: '#' },
    { name: 'Solução', href: '#solution' },
    { name: 'Mercado', href: '#market' },
    { name: 'Equipe', href: '#team' },
  ],
  social: [
    {
      name: 'GitHub',
      href: 'https://github.com/ProjetoIntegrador1Turismo',
      icon: FiGithub,
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
          {navigation.main.map((item) => (
            <div key={item.name} className="pb-6">
              <a 
                href={item.href} 
                className="text-sm leading-6 text-gray-600 hover:text-[#F50437] transition-colors"
              >
                {item.name}
              </a>
            </div>
          ))}
        </nav>

        <div className="mt-10 flex justify-center">
          {navigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-400 hover:text-[#F50437] transition-colors flex items-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <item.icon className="h-6 w-6" aria-hidden="true" />
              <span className="text-sm">Veja nosso projeto no GitHub</span>
            </a>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center">
          <div className="flex items-center gap-2">
            <span className={colors.gradient + " bg-clip-text text-transparent font-bold"}>Tourlink</span>
            <span className="text-sm text-gray-500">- Turismo Acessível</span>
          </div>
          <p className="mt-2 text-center text-xs leading-5 text-gray-500">
            &copy; {new Date().getFullYear()} Tourlink. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
