'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { Trophy, Star, ArrowUpRight } from '@phosphor-icons/react/dist/ssr'

// Importações de Animação
import AOS from 'aos'
import 'aos/dist/aos.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, useGSAP)
}

export default function ReconhecimentosOndaSup() {
    const sectionRef = useRef<HTMLElement>(null)
    const bgRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        AOS.init({ duration: 1000, once: true, easing: 'ease-out-back' })
    }, [])

    useGSAP(() => {
        // 🔥 GSAP: Efeito Parallax Suave no Background 🔥
        gsap.to(bgRef.current, {
            yPercent: 15,
            ease: "none",
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        })

        // 🔥 GSAP: Animação de entrada Zig-Zag dos Cards grandes 🔥
        const cards = gsap.utils.toArray('.big-award-card')
        cards.forEach((card: any, i) => {
            gsap.from(card, {
                opacity: 0,
                x: i % 2 === 0 ? -100 : 100,
                duration: 1.2,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: card,
                    start: "top 85%",
                }
            })
        })
    }, { scope: sectionRef })

    return (
        <section 
            id="reconhecimentos" 
            ref={sectionRef} 
            className="relative py-24 md:py-32 overflow-hidden bg-teal-950 text-white"
        >
            {/* CAMADA DE BACKGROUND COM PARALLAX (Z-0) */}
            <div ref={bgRef} className="absolute inset-0 z-0 h-[115%] -top-[10%]">
                <Image
                    src="/bg.jpeg" 
                    alt="Background Reconhecimentos"
                    fill
                    priority
                    className="object-cover opacity-100 mix-blend-overlay"
                />
            </div>

            <div className="container mx-auto px-4 md:px-8 relative z-10">
                
                {/* Header de Impacto */}
                <div className="max-w-4xl mb-20 md:mb-28" data-aos="fade-right">
                    <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-black tracking-widest uppercase mb-6 backdrop-blur-xl">
                        <Star weight="fill" className="w-5 h-5 animate-pulse" />
                        Reconhecimento de Impacto e Inovação
                    </div>
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] mb-8">
                        Excelência que <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 text-glow">Transforma Vidas.</span>
                    </h2>
                </div>

                {/* LISTA DE PRÊMIOS COM FOTOS GIGANTES (ZIG-ZAG) */}
                <div className="space-y-24 md:space-y-40">
                    
                    {/* CARD 01: SELO IMPACT INNOVATION */}
                    <div className="big-award-card group grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
                        {/* Foto Gigante */}
                        <div className="relative h-[400px] md:h-[600px] rounded-[3rem] overflow-hidden shadow-2xl border border-white/10 order-1 transition-all duration-500 group-hover:border-teal-500/50">
                            <Image
                                src="/premio.jpeg" 
                                alt="Selo iImpact Innovation Latam"
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                            <div className="absolute bottom-10 left-10">
                                <div className="bg-white/10 backdrop-blur-md p-5 rounded-3xl border border-white/20 shadow-2xl">
                                    <Image src="/onu.png" width={140} height={50} alt="Selo Logo" className="object-contain" />
                                </div>
                            </div>
                        </div>
                        {/* Texto */}
                        <div className="order-2 space-y-8">
                            <div className="flex items-center gap-4 text-teal-400 font-black tracking-widest text-sm uppercase">
                                <span className="w-12 h-[2px] bg-teal-500"></span>
                                Startup iImpact Latam 2024
                            </div>
                            <h3 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-none">Selo Impact Innovation Latam 2024</h3>
                            <p className="text-zinc-100 text-lg md:text-xl leading-relaxed font-light">
                                Em 2024, a OndaSup foi uma das <strong className="text-white font-semibold">98 startups reconhecidas (entre 663 candidatas)</strong> com o prestigiado Selo iImpact Innovation Latam. 
                                Esse reconhecimento celebra iniciativas de destaque em impacto social e inovação na América Latina.
                            </p>
                            <button className="flex items-center gap-3 text-white font-bold text-lg hover:text-teal-400 transition-colors group/btn">
                                Conheça os detalhes dessa conquista
                                <ArrowUpRight weight="bold" className="w-6 h-6 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                            </button>
                        </div>
                    </div>

                    {/* CARD 02: PRÊMIO SEBRAE (INVERTIDO) */}
                    <div className="big-award-card group grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
                        {/* Texto */}
                        <div className="order-2 lg:order-1 space-y-8 lg:text-right flex flex-col lg:items-end">
                            <div className="flex items-center gap-4 text-cyan-400 font-black tracking-widest text-sm uppercase">
                                <span className="hidden lg:block w-12 h-[2px] bg-cyan-500"></span>
                                1º Lugar Nacional
                            </div>
                            <h3 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-none">Prêmio Sebrae Mulher de Negócios</h3>
                            <p className="text-zinc-100 text-lg md:text-xl leading-relaxed font-light lg:ml-auto max-w-xl">
                                <strong className="text-white font-semibold">Gabriela Speziali</strong> conquistou o primeiro lugar na categoria Pequenos Negócios. 
                                Este prêmio valida o trabalho realizado através da RemoTerapia e de projetos como Filhos da Nação e Remo do Mundo.
                            </p>
                            <div className="flex gap-4">
                                <span className="px-5 py-3 bg-white/5 border border-white/10 rounded-2xl text-xs font-bold uppercase tracking-widest text-cyan-400 backdrop-blur-md">Sebrae Nacional</span>
                                <span className="px-5 py-3 bg-white/5 border border-white/10 rounded-2xl text-xs font-bold uppercase tracking-widest text-teal-400 backdrop-blur-md">Liderança Feminina</span>
                            </div>
                        </div>
                        {/* Foto Gigante */}
                        <div className="relative h-[450px] md:h-[600px] rounded-[3rem] overflow-hidden shadow-2xl border border-white/10 order-1 lg:order-2 transition-all duration-500 group-hover:border-cyan-500/50">
                            <Image
                                src="/premioMulher.jpeg" 
                                alt="Gabriela Speziali - Prêmio Sebrae"
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                            <div className="absolute top-10 right-10 scale-125 md:scale-150">
                                <Trophy weight="fill" className="w-16 h-16 text-yellow-500 drop-shadow-[0_0_25px_rgba(234,179,8,0.6)]" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            
            <style jsx>{`
                .text-glow {
                    text-shadow: 0 0 30px rgba(45, 212, 191, 0.4);
                }
            `}</style>
        </section>
    )
}