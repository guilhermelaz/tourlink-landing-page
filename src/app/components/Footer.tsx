import { FiGithub } from 'react-icons/fi';

const navigation = {
  main: [
    // { name: 'Sobre', href: '#' },
    // { name: 'Documentação', href: 'https://github.com/ProjetoIntegrador1Turismo' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        {/* <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
          {navigation.main.map((item) => (
            <div key={item.name} className="pb-6">
              <a 
                href={item.href} 
                className="text-sm leading-6 text-gray-600 hover:text-[#F50437]"
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {item.name}
              </a>
            </div>
          ))}
        </nav> */}

        <div className="mt-10 flex justify-center">
          <a 
            href="https://github.com/ProjetoIntegrador1Turismo" 
            className="text-gray-400 hover:text-[#F50437] flex items-center gap-2 text-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiGithub className="h-6 w-6" aria-hidden="true" />
            <span>Veja nosso projeto no GitHub</span>
          </a>
        </div>

        <p className="mt-10 text-center text-xs leading-5 text-gray-500">
          &copy; {new Date().getFullYear()} Tourlink. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
