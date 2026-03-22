'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { Leaf, UsersThree, Recycle, HandHeart, Briefcase, Buildings, Users } from "@phosphor-icons/react"

// Animações
import AOS from 'aos'
import 'aos/dist/aos.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, useGSAP)
}

export default function EsgOndaSup() {
    const containerRef = useRef<HTMLElement>(null)
    const countersRef = useRef<HTMLDivElement>(null)
    const bgRef = useRef<HTMLDivElement>(null)

    // Inicia o AOS para os textos
    useEffect(() => {
        AOS.init({ duration: 800, once: true, easing: 'ease-out-cubic' })
    }, [])

    // MÁGICA DO GSAP: Contadores Animados e Parallax
    useGSAP(() => {
        // 1. Efeito Parallax no Background
        gsap.to(bgRef.current, {
            yPercent: 15,
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        })

        // 2. Animação dos Contadores com formatação de milhar e '+' na frente
        const counters = gsap.utils.toArray('.contador-numero')
        counters.forEach((counter: any) => {
            const target = parseFloat(counter.getAttribute('data-target'))
            
            ScrollTrigger.create({
                trigger: countersRef.current,
                start: "top 85%", 
                onEnter: () => {
                    gsap.fromTo(counter, 
                        { innerText: 0 }, 
                        {
                            innerText: target,
                            duration: 2.5,
                            ease: "power3.out",
                            snap: { innerText: 1 }, // Arredonda para inteiros
                            onUpdate: function() {
                                // Formata com ponto milhar e coloca o + na frente
                                const valor = Math.ceil(Number(this.targets()[0].innerText))
                                counter.innerHTML = "+" + valor.toLocaleString('pt-BR')
                            }
                        }
                    )
                }
            })
        })
    }, { scope: containerRef })

    return (
        <section id="esg" ref={containerRef} className="py-24 lg:py-32 relative overflow-hidden bg-zinc-950 text-white font-sans">
            
            {/* 🔥 BACKGROUND PREMIUM COM PARALLAX MAIS VISÍVEL (Z-0) 🔥 */}
            <div ref={bgRef} className="absolute inset-0 z-0 h-[120%] -top-[10%]">
                <Image
                    src="/ondaSup1.jpg" // Imagem original colorida
                    alt="Background ESG OndaSup"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover opacity-80 transition-opacity duration-1000" 
                />
                {/* Overlay de Gradiente Suavizado para Leitura */}
                <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/90 via-zinc-950/40 to-zinc-950 pointer-events-none" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    
                    {/* COLUNA ESQUERDA: Textos, ONU e ECORemada */}
                    <div data-aos="fade-right">
                        
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-[10px] font-black tracking-widest uppercase mb-6 shadow-sm backdrop-blur-md">
                            <Leaf weight="bold" className="w-4 h-4 text-teal-400" />
                            O Mundo Que Queremos
                        </div>
                        
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-white tracking-tighter leading-[1.1] drop-shadow-2xl">
                            Impacto Social e <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300">
                                Sustentabilidade
                            </span>
                        </h2>
                        
                        <div className="space-y-6 text-base md:text-lg text-zinc-300 leading-relaxed font-light drop-shadow-md">
                            <p>
                                Nossas ações de limpeza do <strong>Lago Paranoá</strong> vão além do esporte. Durante o projeto Filhos da Nação, voluntários, crianças e adolescentes se unem para recolher o lixo acumulado nas margens pelas atividades de SUP e canoa, promovendo consciência ambiental na prática.
                            </p>
                            
                            {/* Bloco de Citação ODS/ONU */}
                            <div className="p-6 md:p-8 bg-zinc-900/60 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-teal-400 to-cyan-500" />
                                <p className="italic text-zinc-100 text-sm md:text-base leading-relaxed relative z-10">
                                    "Trabalhamos com métricas ESG pela sustentabilidade ambiental, social e pela boa governança, alinhados com os <strong>Objetivos de Desenvolvimento Sustentável (ODS) da ONU 2030</strong>."
                                </p>
                            </div>

                            {/* PROJETO: ECORemada Corporativa */}
                            <div 
                                className="mt-8 p-1 rounded-3xl bg-gradient-to-r from-teal-500/30 via-cyan-400/30 to-teal-500/30 shadow-[0_0_30px_rgba(20,184,166,0.15)] group"
                                data-aos="fade-up"
                                data-aos-delay="200"
                            >
                                <div className="bg-zinc-950/80 backdrop-blur-md p-6 rounded-[1.4rem] flex flex-col sm:flex-row items-start sm:items-center gap-5 transition-colors duration-500 group-hover:bg-zinc-950/60">
                                    <div className="w-12 h-12 rounded-2xl bg-teal-500/20 border border-teal-500/30 flex items-center justify-center shrink-0">
                                        <Briefcase weight="fill" className="text-teal-400 w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-black uppercase tracking-widest text-xs mb-1">
                                            Soluções Corporativas
                                        </h4>
                                        <p className="text-sm font-light text-zinc-300 leading-snug">
                                            Fazemos ações ambientais para times e lideranças de empresas através da experiência imersiva da <strong className="text-teal-300 font-bold">ECORemada</strong>.
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* COLUNA DIREITA: Grid de 5 Contadores GSAP */}
                    <div ref={countersRef} className="grid grid-cols-2 gap-4 lg:gap-5 mt-10 lg:mt-0" data-aos="fade-left" data-aos-delay="300">
                        
                        {/* 1. Voluntários */}
                        <div className="col-span-1 bg-zinc-900/60 backdrop-blur-xl p-6 md:p-8 rounded-[2rem] border border-white/5 shadow-2xl hover:-translate-y-2 hover:bg-zinc-800/80 hover:border-teal-500/30 transition-all duration-500 group flex flex-col justify-center">
                            <div className="bg-teal-500/10 border border-teal-500/20 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <HandHeart weight="fill" className="w-6 h-6 text-teal-400" />
                            </div>
                            <h3 className="text-4xl md:text-5xl font-black text-white mb-1 font-mono tracking-tighter drop-shadow-md">
                                <span className="contador-numero" data-target="250">0</span>
                            </h3>
                            <p className="text-teal-200 font-bold leading-tight text-[10px] md:text-xs uppercase tracking-[0.2em]">Voluntários Engajados</p>
                        </div>

                        {/* 2. Crianças Atendidas */}
                        <div className="col-span-1 bg-zinc-900/60 backdrop-blur-xl p-6 md:p-8 rounded-[2rem] border border-white/5 shadow-2xl hover:-translate-y-2 hover:bg-zinc-800/80 hover:border-cyan-500/30 transition-all duration-500 group flex flex-col justify-center">
                            <div className="bg-cyan-500/10 border border-cyan-500/20 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <UsersThree weight="fill" className="w-6 h-6 text-cyan-400" />
                            </div>
                            <h3 className="text-4xl md:text-5xl font-black text-white mb-1 font-mono tracking-tighter drop-shadow-md">
                                <span className="contador-numero" data-target="750">0</span>
                            </h3>
                            <p className="text-cyan-200 font-bold leading-tight text-[10px] md:text-xs uppercase tracking-[0.2em]">Crianças e Jovens Atendidos</p>
                        </div>

                        {/* 3. Pessoas Impactadas (Destaque Largo) */}
                        <div className="col-span-2 bg-gradient-to-br from-teal-900/90 to-cyan-900/90 backdrop-blur-2xl p-8 md:p-10 rounded-[2rem] border border-teal-500/30 shadow-[0_20px_50px_rgba(20,184,166,0.2)] text-white hover:-translate-y-2 hover:border-teal-400/60 transition-all duration-500 relative overflow-hidden group">
                            <div className="absolute top-1/2 -translate-y-1/2 right-[-10px] md:right-10 opacity-10 group-hover:scale-110 transition-transform duration-700 pointer-events-none">
                                <Recycle weight="fill" className="w-32 h-32 md:w-48 md:h-48" />
                            </div>
                            
                            <div className="relative z-10">
                                <h3 className="text-5xl md:text-7xl font-black text-white mb-3 font-mono tracking-tighter drop-shadow-2xl">
                                    <span className="contador-numero" data-target="4500">0</span>
                                </h3>
                                <p className="text-teal-50 font-medium text-base md:text-lg leading-snug max-w-sm drop-shadow-md">
                                    Pessoas impactadas indiretamente
                                </p>
                                <p className="text-teal-300 font-light italic text-sm mt-1">
                                    (Filhos da Nação e Comunidade)
                                </p>
                            </div>
                        </div>

                        {/* 4. Empresas (Team Building) */}
                        <div className="col-span-1 bg-zinc-900/60 backdrop-blur-xl p-6 md:p-8 rounded-[2rem] border border-white/5 shadow-2xl hover:-translate-y-2 hover:bg-zinc-800/80 hover:border-blue-500/30 transition-all duration-500 group flex flex-col justify-center">
                            <div className="bg-blue-500/10 border border-blue-500/20 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <Buildings weight="fill" className="w-6 h-6 text-blue-400" />
                            </div>
                            <h3 className="text-4xl md:text-5xl font-black text-white mb-1 font-mono tracking-tighter drop-shadow-md">
                                <span className="contador-numero" data-target="60">0</span>
                            </h3>
                            <p className="text-blue-200 font-bold leading-tight text-[10px] md:text-xs uppercase tracking-[0.2em] mb-1">Empresas Atendidas</p>
                            <p className="text-zinc-400 text-[10px] font-light leading-tight">Team Building (Metodologia SyncPaddle)</p>
                        </div>

                        {/* 5. Colaboradores */}
                        <div className="col-span-1 bg-zinc-900/60 backdrop-blur-xl p-6 md:p-8 rounded-[2rem] border border-white/5 shadow-2xl hover:-translate-y-2 hover:bg-zinc-800/80 hover:border-indigo-500/30 transition-all duration-500 group flex flex-col justify-center">
                            <div className="bg-indigo-500/10 border border-indigo-500/20 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <Users weight="fill" className="w-6 h-6 text-indigo-400" />
                            </div>
                            <h3 className="text-4xl md:text-5xl font-black text-white mb-1 font-mono tracking-tighter drop-shadow-md">
                                <span className="contador-numero" data-target="3000">0</span>
                            </h3>
                            <p className="text-indigo-200 font-bold leading-tight text-[10px] md:text-xs uppercase tracking-[0.2em]">Colaboradores Impactados</p>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    )
}