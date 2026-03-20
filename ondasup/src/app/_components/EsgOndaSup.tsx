'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { Leaf, UsersThree, Recycle, HandHeart } from "@phosphor-icons/react/dist/ssr"

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
        // 1. Efeito Parallax no Background (A imagem se move suavemente)
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

        // 2. Animação dos Contadores
        const counters = gsap.utils.toArray('.contador-numero')
        counters.forEach((counter: any) => {
            const target = parseFloat(counter.getAttribute('data-target'))
            
            ScrollTrigger.create({
                trigger: countersRef.current,
                start: "top 85%", // Começa a contar quando a área chega a 85% da tela
                onEnter: () => {
                    gsap.fromTo(counter, 
                        { innerText: 0 }, 
                        {
                            innerText: target,
                            duration: 2.5,
                            ease: "power3.out",
                            snap: { innerText: 1 }, // Arredonda para não ter decimais quebrados
                            onUpdate: function() {
                                // Adiciona o "+" no final durante e após a contagem
                                counter.innerHTML = Math.ceil(Number(this.targets()[0].innerText)) + "+"
                            }
                        }
                    )
                }
            })
        })
    }, { scope: containerRef })

    return (
        <section id="esg" ref={containerRef} className="py-24 lg:py-32 relative overflow-hidden bg-zinc-950 text-white">
            
            {/* 🔥 BACKGROUND PREMIUM COM PARALLAX MAIS VISÍVEL (Z-0) 🔥 */}
            <div ref={bgRef} className="absolute inset-0 z-0 h-[120%] -top-[10%]">
                <Image
                    src="/ondaSup1.jpg" // SUA IMAGEM
                    alt="Background ESG OndaSup"
                    fill
                    priority
                    /* 🔥 TÉCNICA DE UI: Nitidez Máxima 🔥 */
                    /* Aumentado opacidade para 80% e removido o blend mode pesado (overlay). */
                    /* Isso permite que a foto original brilhe sem ser escurecida pelo fundo escura da section. */
                    className="object-cover opacity-80 transition-opacity duration-1000" 
                />
                {/* 🔥 Overlay de Gradiente Suavizado para Leitura (UX) 🔥 */}
                {/* Gradiente mantido, mas com opacidade central drasticamente reduzida (via-zinc-950/20) */}
                {/* para que a foto apareça com nitidez no centro, mas as bordas suavizem para preto puro. */}
                <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-zinc-950/20 to-zinc-950 pointer-events-none" />
            </div>

            <div className="container mx-auto px-4 md:px-8 relative z-10">
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    
                    {/* COLUNA ESQUERDA: Textos e ONU */}
                    <div data-aos="fade-right">
                        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-bold tracking-widest uppercase mb-6 shadow-sm backdrop-blur-md">
                            <Leaf weight="bold" className="w-5 h-5 text-teal-400" />
                            O Mundo Que Queremos
                        </div>
                        
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-white tracking-tight leading-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)]">
                            Impacto Social e <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300">
                                Sustentabilidade (ESG)
                            </span>
                        </h2>
                        
                        <div className="space-y-6 text-lg text-zinc-100 leading-relaxed font-light drop-shadow-sm">
                            <p>
                                Nossas ações de limpeza do <strong>Lago Paranoá</strong> vão além do esporte. Durante o projeto Filhos da Nação, voluntários, crianças e adolescentes se unem para recolher o lixo acumulado nas margens pelas atividades de SUP e canoa, promovendo consciência ambiental na prática.
                            </p>
                            {/* Bloco de Citação com Glassmorphism */}
                            <p className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl italic text-zinc-50 border-l-4 border-l-teal-500">
                                "Trabalhamos com métricas ESG pela sustentabilidade ambiental, social e pela boa governança, alinhados com os <strong>Objetivos de Desenvolvimento Sustentável (ODS) da ONU 2030</strong>."
                            </p>
                        </div>
                    </div>

                    {/* COLUNA DIREITA: Contadores GSAP (A Joia da Coroa) */}
                    <div ref={countersRef} className="grid grid-cols-1 sm:grid-cols-2 gap-6" data-aos="fade-up" data-aos-delay="200">
                        
                        {/* Card Contador 1 */}
                        <div className="bg-white/5 backdrop-blur-xl p-8 rounded-[2rem] border border-white/10 shadow-2xl hover:-translate-y-2 hover:bg-white/10 hover:border-teal-500/30 transition-all duration-500 group">
                            <div className="bg-teal-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <HandHeart weight="fill" className="w-8 h-8 text-teal-400" />
                            </div>
                            <h3 className="text-5xl font-black text-white mb-2 font-mono tracking-tighter drop-shadow-md">
                                <span className="contador-numero" data-target="250">0</span>
                            </h3>
                            <p className="text-teal-100/80 font-medium leading-tight text-sm uppercase tracking-wider">Voluntários Engajados</p>
                        </div>

                        {/* Card Contador 2 */}
                        <div className="bg-white/5 backdrop-blur-xl p-8 rounded-[2rem] border border-white/10 shadow-2xl hover:-translate-y-2 hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-500 group">
                            <div className="bg-cyan-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <UsersThree weight="fill" className="w-8 h-8 text-cyan-400" />
                            </div>
                            <h3 className="text-5xl font-black text-white mb-2 font-mono tracking-tighter drop-shadow-md">
                                <span className="contador-numero" data-target="285">0</span>
                            </h3>
                            <p className="text-teal-100/80 font-medium leading-tight text-sm uppercase tracking-wider">Jovens e Crianças (Atendidos)</p>
                        </div>

                        {/* Card Contador 3 (Ocupa 2 colunas) */}
                        <div className="sm:col-span-2 bg-gradient-to-br from-teal-900/80 to-cyan-900/80 backdrop-blur-2xl p-8 md:p-10 rounded-[2rem] border border-teal-500/30 shadow-2xl shadow-teal-900/50 text-white hover:-translate-y-2 hover:border-teal-400/60 transition-all duration-500 relative overflow-hidden group">
                            {/* Ícone gigante no fundo */}
                            <div className="absolute top-1/2 -translate-y-1/2 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-700 pointer-events-none">
                                <Recycle weight="fill" className="w-40 h-40" />
                            </div>
                            
                            <div className="relative z-10">
                                <h3 className="text-6xl md:text-7xl font-black text-white mb-4 font-mono tracking-tighter drop-shadow-xl">
                                    <span className="contador-numero" data-target="1000">0</span>
                                </h3>
                                <p className="text-teal-100 font-medium text-lg md:text-xl leading-snug max-w-sm">
                                    Pessoas impactadas indiretamente <span className="font-light">(familiares e comunidade)</span>
                                </p>
                                <p className="text-teal-300/60 text-[10px] mt-6 uppercase tracking-widest font-bold">
                                    *Dados contabilizados desde 2017 pelo projeto Filhos da Nação.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    )
}