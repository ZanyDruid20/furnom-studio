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
        <Disclosure as="nav" className="fixed left-0 right-0 top-0 z-50 border-b border-white/70 bg-white/75 backdrop-blur-xl shadow-sm">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <div className="flex h-16 items-center justify-between">
                    <button 
                        onClick={() => scrollToSection('hero')} 
                        className="text-sm font-semibold tracking-wide text-slate-950 transition-colors hover:text-blue-700"
                    >
                        Furnom Dam
                    </button>
                    
                    {/* Desktop Navigation */}
                    <div className="hidden items-center gap-2 md:flex">
                        <button onClick={() => scrollToSection('hero')} className="rounded-full px-4 py-2 text-sm text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-950">Home</button>
                        <button onClick={() => scrollToSection('projects')} className="rounded-full px-4 py-2 text-sm text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-950">Projects</button>
                        <button onClick={() => scrollToSection('skills')} className="rounded-full px-4 py-2 text-sm text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-950">Skills</button>
                        <button onClick={() => scrollToSection('schedule')} className="rounded-full px-4 py-2 text-sm text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-950">Schedule</button>
                        <a 
                            href="https://github.com/ZanyDruid20" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="rounded-full px-4 py-2 text-sm text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-950"
                        >
                            GitHub
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-slate-600 hover:bg-slate-100 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-500 md:hidden">
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="block h-6 w-6 group-data-open:hidden" />
                        <XMarkIcon className="hidden h-6 w-6 group-data-open:block" />
                    </DisclosureButton>
                </div>
            </div>

            {/* Mobile menu panel */}
            <DisclosurePanel className="md:hidden">
                <div className="space-y-1 border-t border-slate-200 bg-white/95 px-4 pb-3 pt-2 shadow-lg">
                    <DisclosureButton
                        as="button"
                        onClick={() => scrollToSection('hero')}
                        className="block w-full rounded-md px-3 py-2 text-left text-base font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-950"
                    >
                        Home
                    </DisclosureButton>
                    <DisclosureButton
                        as="button"
                        onClick={() => scrollToSection('projects')}
                        className="block w-full rounded-md px-3 py-2 text-left text-base font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-950"
                    >
                        Projects
                    </DisclosureButton>
                    <DisclosureButton
                        as="button"
                        onClick={() => scrollToSection('skills')}
                        className="block w-full rounded-md px-3 py-2 text-left text-base font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-950"
                    >
                        Skills
                    </DisclosureButton>
                    <DisclosureButton
                        as="button"
                        onClick={() => scrollToSection('schedule')}
                        className="block w-full rounded-md px-3 py-2 text-left text-base font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-950"
                    >
                        Schedule
                    </DisclosureButton>
                    <a
                        href="https://github.com/ZanyDruid20"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block rounded-md px-3 py-2 text-base font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-950"
                    >
                        GitHub
                    </a>
                </div>
            </DisclosurePanel>
        </Disclosure>
    );
}