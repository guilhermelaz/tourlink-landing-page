'use client';
import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { FiMenu, FiX, FiExternalLink, FiClock } from 'react-icons/fi';
import Image from 'next/image';
import { colors } from '../constants/colors';

const navigation = [
  { name: 'Início', href: '/' },
  { name: 'Solução', href: '#solution' },
  { name: 'Mercado', href: '#market' },
  { name: 'Equipe', href: '#team' },
  { name: 'Timeline', href: '/timeline', icon: FiClock },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-sm">
      <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Tourlink</span>
            <Image
              src="/logo.png"
              alt="Tourlink Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Abrir menu principal</span>
            <FiMenu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="flex items-center gap-1 text-sm font-semibold leading-6 text-gray-900 hover:text-[#F50437] transition-colors"
            >
              {item.icon && <item.icon className="h-4 w-4" />}
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="https://github.com/ProjetoIntegrador1Turismo"
            className={`${colors.gradient} ${colors.gradientHover} rounded-full px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-300 flex items-center gap-2`}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub <FiExternalLink className="h-4 w-4" />
          </a>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Tourlink</span>
              <Image
                src="/logo.png"
                alt="Tourlink Logo"
                width={120}
                height={40}
                className="h-8 w-auto"
                priority
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Fechar menu</span>
              <FiX className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 flex items-center gap-2 rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.icon && <item.icon className="h-5 w-5" />}
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="https://github.com/ProjetoIntegrador1Turismo"
                  className={`-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 ${colors.gradient} text-white hover:brightness-110 transition-all`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
