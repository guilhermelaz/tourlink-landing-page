'use client';
import { useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { colors } from '../constants/colors';
import { FiPhone, FiMail, FiX } from 'react-icons/fi';

const contacts = [
  {
    id: 1,
    name: 'Suporte - Guilherme',
    phone: '+55 (45) 98417-8988',
    whatsapp: 'https://wa.me/5545984178988',
    email: 'guilherme_laz@hotmail.com',
  },
  {
    id: 2,
    name: 'Comercial - Nicole',
    phone: '+55 (45) 99144-1688',
    whatsapp: 'https://wa.me/5545991441688',
    email: 'nicoliveeira@gmail.com',
  },
];

export default function CTA() {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              <span className={colors.gradient + " bg-clip-text text-transparent"}>
                Pronto para começar?
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Entre em contato conosco e descubra como podemos ajudar você a tornar o turismo mais acessível.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <button
                onClick={openModal}
                className={`${colors.gradient} ${colors.gradientHover} rounded-full px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300`}
              >
                Fale Conosco
              </button>
              <a
                href="https://github.com/ProjetoIntegrador1Turismo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-[#F50437] transition-colors"
              >
                Saiba mais <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25 backdrop-blur-sm" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="flex items-center justify-between">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      Contatos
                    </Dialog.Title>
                    <button
                      type="button"
                      className="text-gray-400 hover:text-gray-500"
                      onClick={closeModal}
                    >
                      <span className="sr-only">Fechar</span>
                      <FiX className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="mt-4 space-y-4">
                    {contacts.map((contact) => (
                      <div
                        key={contact.id}
                        className="rounded-lg border border-gray-200 p-4 hover:border-[#F50437]/20 transition-colors"
                      >
                        <h4 className="font-semibold text-gray-900">{contact.name}</h4>
                        <div className="mt-2 space-y-2">
                          <div className="flex items-center gap-2 text-gray-600">
                            <FiPhone className="h-4 w-4" />
                            <a
                              href={contact.whatsapp}
                              className="hover:text-[#F50437] transition-colors"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {contact.phone}
                            </a>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <FiMail className="h-4 w-4" />
                            <a
                              href={`mailto:${contact.email}`}
                              className="hover:text-[#F50437] transition-colors"
                            >
                              {contact.email}
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
