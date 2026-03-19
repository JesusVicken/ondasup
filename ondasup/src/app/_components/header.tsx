'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Instagram, Linkedin, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const links = [
        { label: 'Início', href: '#inicio' },
        { label: 'Propósito', href: '#proposito' },
        { label: 'Metodologia', href: '#metodologia' },
        { label: 'Projeto', href: '#filhos-da-nacao' },
        { label: 'Pesquisa', href: '#pesquisa' },
        { label: 'Soluções', href: '#solucoes' },
    ]

    const socialLinks = [
        {
            icon: Instagram,
            href: 'https://www.instagram.com/ondasup', 
            label: 'Instagram'
        },
        {
            icon: Linkedin, 
            href: 'https://www.linkedin.com/company/ondasup', 
            label: 'LinkedIn'
        }
    ]

    return (
        <>
            {/* Header Principal */}
            <header className={`
                w-full fixed top-0 left-0 z-50 transition-all duration-500 ease-in-out
                ${scrolled
                    ? 'h-20 shadow-lg backdrop-blur-md bg-white/95 border-b border-slate-100'
                    : 'h-24 bg-transparent'
                }
            `}>
                <div className="max-w-7xl mx-auto px-4 lg:px-6 flex items-center justify-between h-full">
                    {/* Logo Dinâmica com Filtro CSS */}
                    <Link
                        href="#inicio"
                        className="flex items-center h-full relative z-50 transition-transform hover:scale-105 shrink-0"
                    >
                        <Image
                            src="/ondasuplogo.png" // Usa SEMPRE a mesma imagem original (branca)
                            alt="OndaSup - Soluções em Impacto Social"
                            width={160}
                            height={55}
                            className={`w-auto object-contain transition-all duration-500 ${scrolled ? 'h-10' : 'h-12'}`}
                            priority
                            style={{
                                // Esse cálculo de CSS Filter transforma o BRANCO puro no VERDE (teal-600: #0d9488)
                                filter: scrolled 
                                    ? 'brightness(0) saturate(100%) invert(38%) sepia(76%) saturate(449%) hue-rotate(128deg) brightness(96%) contrast(93%)' 
                                    : 'none'
                            }}
                        />
                    </Link>

                    {/* Navegação Desktop */}
                    <nav className="hidden xl:flex items-center gap-1 flex-1 justify-center">
                        {links.map(({ label, href }) => (
                            <Link key={href} href={href}>
                                <Button
                                    variant="ghost"
                                    className={`
                                        text-[15px] transition-all duration-300 relative group overflow-hidden px-3 py-2
                                        ${scrolled 
                                            ? 'text-slate-700 font-medium hover:text-teal-600 hover:bg-transparent' 
                                            : 'text-white font-semibold hover:text-teal-300 hover:bg-transparent drop-shadow-md'
                                        }
                                    `}
                                >
                                    {label}
                                    <span className={`
                                        absolute bottom-1 left-3 right-3 h-[2px] origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100
                                        ${scrolled ? 'bg-teal-600' : 'bg-teal-300'}
                                    `} />
                                </Button>
                            </Link>
                        ))}
                    </nav>

                    {/* Redes Sociais e CTA - Desktop */}
                    <div className="hidden lg:flex items-center gap-4 shrink-0">
                        <div className={`flex items-center gap-1 border-r pr-4 ${scrolled ? 'border-slate-300/50' : 'border-white/30'}`}>
                            {socialLinks.map(({ icon: Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`p-2 rounded-full transition-all duration-300 drop-shadow-sm
                                        ${scrolled 
                                            ? 'text-slate-600 hover:bg-slate-100' 
                                            : 'text-white hover:bg-white/20'
                                        }
                                    `}
                                    aria-label={label}
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>

                        <Link href="#contato">
                            <Button className={`
                                font-medium rounded-full transition-all duration-300 flex items-center gap-2 shadow-md hover:shadow-lg
                                ${scrolled 
                                    ? 'bg-teal-600 hover:bg-teal-700 text-white px-5 py-2 text-sm' 
                                    : 'bg-white text-teal-700 hover:bg-slate-100 px-6 py-2.5 text-[15px]'
                                }
                            `}>
                                Fale Conosco
                                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                            </Button>
                        </Link>
                    </div>

                    {/* Botão menu mobile (Hamburguer) */}
                    <div className="xl:hidden flex items-center relative z-50">
                        <Button
                            variant="ghost"
                            size="icon"
                            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className={`
                                transition-colors duration-300 rounded-full
                                ${mobileMenuOpen || scrolled 
                                    ? 'text-slate-800 hover:bg-slate-100' 
                                    : 'text-white hover:bg-white/20 drop-shadow-md'
                                }
                            `}
                        >
                            {mobileMenuOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </Button>
                    </div>
                </div>
            </header>

            {/* Menu Mobile */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="xl:hidden fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-sm"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="absolute top-0 right-0 h-full w-[85vw] max-w-sm bg-white shadow-2xl flex flex-col pt-24 pb-8 px-6"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Navegação Mobile */}
                            <nav className="flex-1 flex flex-col gap-2 overflow-y-auto">
                                {links.map(({ label, href }, index) => (
                                    <motion.div
                                        key={href}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                    >
                                        <Link href={href}>
                                            <Button
                                                variant="ghost"
                                                className="w-full justify-start text-xl font-semibold text-slate-800 hover:text-teal-600 hover:bg-teal-50/50 py-6 rounded-xl"
                                                onClick={() => setMobileMenuOpen(false)}
                                            >
                                                {label}
                                            </Button>
                                        </Link>
                                    </motion.div>
                                ))}
                            </nav>

                            {/* Redes Sociais e CTA Mobile */}
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="mt-6 pt-6 border-t border-slate-100 shrink-0"
                            >
                                <div className="flex justify-center gap-4 mb-6">
                                    {socialLinks.map(({ icon: Icon, href, label }) => (
                                        <a
                                            key={label}
                                            href={href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center w-12 h-12 bg-slate-50 text-slate-600 hover:text-teal-600 hover:bg-teal-50 rounded-full transition-all"
                                        >
                                            <Icon size={24} />
                                        </a>
                                    ))}
                                </div>

                                <Link href="#contato" onClick={() => setMobileMenuOpen(false)}>
                                    <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-6 text-lg rounded-xl shadow-lg">
                                        Fale Conosco
                                    </Button>
                                </Link>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}