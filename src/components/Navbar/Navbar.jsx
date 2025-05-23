/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { HiBars3BottomRight } from 'react-icons/hi2';
import { IoClose } from 'react-icons/io5';
import _config from '../../constants';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header className="sticky top-0 bg-white z-50">
            <div className="responsive__container overflow-hidden flex flex-col items-start justify-start py-[22px]">
                <nav className="m-0 self-stretch flex flex-row items-center justify-between text-left text-base text-gray font-body-regular-body-3">
                    <a href="#" className="flex items-center space-x-2">
                        <p className="text-lg sm:text-xl font-semibold text-gray-800flex">
                            Accounting{' '}
                            <span className="text-forestgreen">Global</span>{' '}
                            Solutions
                        </p>
                    </a>
                    <div
                        className={`absolute left-0 top-16 w-full flex-col gap-6 space-y-4 bg-primary-400 px-7 py-12 transition-all duration-300 md:static md:flex md:w-auto md:flex-row md:gap-10 md:space-y-0 md:py-0 ${
                            isOpen
                                ? 'flex bg-[#167733] text-white min-h-screen'
                                : 'hidden'
                        }`}
                    >
                        {_config.NAVIGATION_LINKS?.map((link) => (
                            <a
                                key={link?.href}
                                onClick={() => setIsOpen(false)}
                                href={link.href}
                                className="[text-decoration:none] relative leading-[24px] text-[inherit] hover:text-green-600 transition-all duration-300"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden"
                        aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
                        aria-expanded={isOpen}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? (
                            <IoClose size={24} />
                        ) : (
                            <HiBars3BottomRight size={24} />
                        )}
                    </button>
                </nav>
            </div>
        </header>
    );
}
