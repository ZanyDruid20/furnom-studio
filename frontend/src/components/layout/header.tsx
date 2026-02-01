'use client';

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Header() {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Disclosure as="nav" className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm border-b border-gray-200 z-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="flex items-center justify-between h-16">
                    <button 
                        onClick={() => scrollToSection('hero')} 
                        className="font-bold text-gray-900 hover:text-blue-600 transition-colors"
                    >
                        Furnom Dam
                    </button>
                    
                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        <button onClick={() => scrollToSection('hero')} className="text-gray-600 hover:text-gray-900 transition-colors">Home</button>
                        <button onClick={() => scrollToSection('projects')} className="text-gray-600 hover:text-gray-900 transition-colors">Projects</button>
                        <button onClick={() => scrollToSection('schedule')} className="text-gray-600 hover:text-gray-900 transition-colors">Schedule</button>
                        <a 
                            href="https://github.com/ZanyDruid20" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-gray-900 transition-colors"
                        >
                            GitHub
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <DisclosureButton className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-500">
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="block h-6 w-6 group-data-open:hidden" />
                        <XMarkIcon className="hidden h-6 w-6 group-data-open:block" />
                    </DisclosureButton>
                </div>
            </div>

            {/* Mobile menu panel */}
            <DisclosurePanel className="md:hidden">
                <div className="space-y-1 px-4 pb-3 pt-2">
                    <DisclosureButton
                        as="button"
                        onClick={() => scrollToSection('hero')}
                        className="block w-full text-left rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                    >
                        Home
                    </DisclosureButton>
                    <DisclosureButton
                        as="button"
                        onClick={() => scrollToSection('projects')}
                        className="block w-full text-left rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                    >
                        Projects
                    </DisclosureButton>
                    <DisclosureButton
                        as="button"
                        onClick={() => scrollToSection('schedule')}
                        className="block w-full text-left rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                    >
                        Schedule
                    </DisclosureButton>
                    <a
                        href="https://github.com/ZanyDruid20"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                    >
                        GitHub
                    </a>
                </div>
            </DisclosurePanel>
        </Disclosure>
    );
}