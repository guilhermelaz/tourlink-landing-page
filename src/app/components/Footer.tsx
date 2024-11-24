import { FiGithub, FiInstagram, FiLinkedin } from 'react-icons/fi';

const navigation = {
  main: [
    { name: 'Sobre', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Carreiras', href: '#' },
    { name: 'Imprensa', href: '#' },
    { name: 'Acessibilidade', href: '#' },
    { name: 'Parceiros', href: '#' },
  ],
  social: [
    {
      name: 'Instagram',
      href: '#',
      icon: FiInstagram,
    },
    {
      name: 'LinkedIn',
      href: '#',
      icon: FiLinkedin,
    },
    {
      name: 'GitHub',
      href: '#',
      icon: FiGithub,
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
          {navigation.main.map((item) => (
            <div key={item.name} className="pb-6">
              <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-[#F50437]">
                {item.name}
              </a>
            </div>
          ))}
        </nav>

        <div className="mt-10 flex justify-center space-x-10">
          {navigation.social.map((item) => (
            <a key={item.name} href={item.href} className="text-gray-400 hover:text-[#F50437]">
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>

        <p className="mt-10 text-center text-xs leading-5 text-gray-500">
          &copy; {new Date().getFullYear()} Tourlink. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
