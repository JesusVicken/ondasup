'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { Megaphone, MapPinLine, ArrowUpRight } from '@phosphor-icons/react'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

import AOS from 'aos'
import 'aos/dist/aos.css'

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, useGSAP)
}

export function BrazilConference() {
    const sectionRef = useRef<HTMLElement>(null)

    useEffect(() => {
        AOS.init({ duration: 1000, once: true, easing: 'ease-out-cubic' })
    }, [])

    useGSAP(() => {
        // Animação em cascata (Stagger) fluida para os textos
        gsap.fromTo(
            '.conf-text > *',
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: 'power3.out',
                force3D: true,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                },
            }
        )

        // Flutuação orgânica da imagem (Levitação)
        gsap.to('.conf-image-wrapper', {
            y: -15,
            duration: 4,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            force3D: true
        })
    }, { scope: sectionRef })

    return (
        <section ref={sectionRef} className="relative bg-slate-950 py-20 md:py-32 overflow-hidden font-sans border-y border-white/5">
            
            {/* --- EFEITOS DE LUZ DE FUNDO (Cores do Brasil Estilizadas) --- */}
            <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-green-600/10 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-yellow-500/10 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-7xl">
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    
                    {/* --- COLUNA ESQUERDA: TEXTOS (Ocupa 7 colunas no desktop) --- */}
                    <div className="conf-text order-2 lg:order-1 lg:col-span-7 flex flex-col justify-center">
                        
                        {/* BADGE "AO VIVO" */}
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-[10px] md:text-xs font-black tracking-widest uppercase mb-8 shadow-sm backdrop-blur-md w-max">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.8)]"></span>
                            </span>
                            Acontecendo Agora
                        </div>
                        
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 text-white tracking-tighter leading-[1.05] drop-shadow-2xl uppercase">
                            Representando o Brasil na <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-yellow-300 to-green-500">
                                Brazil Conference
                            </span>
                        </h2>
                        
                        <p className="text-base md:text-lg lg:text-xl text-slate-300 leading-relaxed font-light drop-shadow-md mb-10 max-w-2xl">
                            Neste exato momento, nossa fundadora, <strong className="text-white font-black">Gabriela Speziali</strong>, está participando da 12ª Edição da Brazil Conference. Integrando o seleto <span className="text-blue-400 font-bold">Programa Embaixadores</span>, ela leva a força da OndaSup e do Projeto Filhos da Nação para um dos maiores palcos de inovação do mundo.
                        </p>
                        
                        {/* DESTAQUES (Bento Cards Menores) */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-10 max-w-2xl">
                            <div className="bg-slate-900/50 backdrop-blur-xl border border-white/5 p-6 rounded-2xl flex items-start gap-4 hover:border-green-500/30 hover:bg-slate-900/80 transition-all duration-300 group">
                                <Megaphone size={32} weight="fill" className="text-green-400 shrink-0 group-hover:scale-110 transition-transform" />
                                <div>
                                    <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-1.5">Impacto Social</h4>
                                    <p className="text-slate-400 text-xs md:text-sm font-light leading-relaxed">Levando nossa metodologia para o debate global.</p>
                                </div>
                            </div>
                            <div className="bg-slate-900/50 backdrop-blur-xl border border-white/5 p-6 rounded-2xl flex items-start gap-4 hover:border-yellow-500/30 hover:bg-slate-900/80 transition-all duration-300 group">
                                <MapPinLine size={32} weight="fill" className="text-yellow-400 shrink-0 group-hover:scale-110 transition-transform" />
                                <div>
                                    <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-1.5">Centro-Oeste</h4>
                                    <p className="text-slate-400 text-xs md:text-sm font-light leading-relaxed">Representando a inovação nascida nas águas do DF.</p>
                                </div>
                            </div>
                        </div>

                        {/* BOTÃO CTA (Microinteração na seta) */}
                        <a 
                            href="https://www.brazilconference.org/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="group inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-black uppercase tracking-widest text-xs md:text-sm px-8 py-4 md:px-10 md:py-5 rounded-full transition-all duration-300 shadow-[0_10px_40px_rgba(37,99,235,0.4)] hover:shadow-[0_15px_50px_rgba(37,99,235,0.6)] hover:-translate-y-1 w-full sm:w-max"
                        >
                            Acompanhe o Evento 
                            <ArrowUpRight size={20} weight="bold" className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </a>
                    </div>

                    {/* --- COLUNA DIREITA: IMAGEM (Ocupa 5 colunas no desktop) --- */}
                    <div className="order-1 lg:order-2 lg:col-span-5 flex justify-center lg:justify-end" data-aos="fade-left" data-aos-duration="1200">
                        <div className="conf-image-wrapper relative w-full max-w-[320px] sm:max-w-sm md:max-w-md lg:max-w-full aspect-[4/5] rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.4)] border border-white/10 group transform-gpu will-change-transform">
                            
                            {/* Reflexo colorido no hover */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-green-500/20 via-transparent to-yellow-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none" />
                            
                            <Image
                                src="/imageGabi.jpeg" 
                                alt="Gabriela Speziali - Embaixadora Brazil Conference 12ª Edição"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover transition-transform duration-1000 group-hover:scale-105 will-change-transform"
                            />
                            
                            {/* Vinheta interna para mesclar bordas da foto com o fundo do site */}
                            <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(2,6,23,0.6)] pointer-events-none z-20" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}