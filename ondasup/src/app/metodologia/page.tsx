'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
    Drop, 
    MagnifyingGlass, 
    Megaphone, 
    Path,
    InstagramLogo
} from '@phosphor-icons/react/dist/ssr'

// Animações
import AOS from 'aos'
import 'aos/dist/aos.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, useGSAP)
}

const eixos = [
    {
        id: '01',
        title: 'Remoterapia',
        desc: 'O esporte como ferramenta de pertencimento, disciplina e saúde emocional. Nossa tecnologia social pioneira que combina esportes a remo com os princípios da Psicologia Junguiana como instrumento de integração e superação.',
        icon: Drop,
        image: '/transicao.jpeg', 
        color: 'from-blue-600 to-blue-400'
    },
    {
        id: '02',
        title: 'Pesquisa Social',
        desc: 'Produção de dados e conhecimento sobre juventude em acolhimento institucional e transição para a vida adulta. Levantamentos quantitativos e qualitativos que orientam políticas públicas.',
        icon: MagnifyingGlass,
        image: '/pesquisa.jpeg', 
        color: 'from-blue-700 to-indigo-500'
    },
    {
        id: '03',
        title: 'Comunicação de Impacto',
        desc: 'Estratégias narrativas e produção de conteúdo (como o Podcast Verbo Impactar) para ampliar a visibilidade, a mobilização social e dar voz a negócios de impacto.',
        icon: Megaphone,
        image: '/comunidade.jpeg', 
        color: 'from-blue-500 to-cyan-500'
    },
    {
        id: '04',
        title: 'Transição para a Vida Adulta',
        desc: 'Programas de empregabilidade e capacitação. O foco é combinar o conhecimento técnico com o desenvolvimento de habilidades socioemocionais para autonomia real.',
        icon: Path,
        image: '/filhosdanacao.webp', 
        color: 'from-blue-800 to-blue-600'
    }
]

export default function MetodologiaPage() {
    const containerRef = useRef<HTMLElement>(null)

    useEffect(() => {
        AOS.init({ duration: 1000, once: true, easing: 'ease-out-cubic' })
    }, [])

    useGSAP(() => {
        const images = gsap.utils.toArray('.eixo-image')
        images.forEach((img: any) => {
            gsap.to(img, {
                yPercent: 15,
                ease: "none",
                scrollTrigger: {
                    trigger: img.parentElement,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                }
            })
        })
    }, { scope: containerRef })

    return (
        <main ref={containerRef} className="min-h-screen bg-zinc-950 text-white pt-24 pb-20 overflow-hidden">
            
            {/* 1. HERO SECTION */}
            <section className="relative px-4 md:px-8 py-20 lg:py-28">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
                
                <div className="max-w-4xl mx-auto text-center relative z-10" data-aos="fade-up">
                    <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[1.1] mb-6">
                        Metodologia <span className="text-blue-500 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-300">OndaSup</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed">
                        Nossa atuação se organiza em <strong className="text-white font-semibold">quatro eixos complementares</strong> que integram esporte, conhecimento e comunicação.
                    </p>
                </div>
            </section>

            {/* 2. OS EIXOS (Z-PATTERN) */}
            <section className="px-4 md:px-8 pb-24 border-b border-white/5">
                <div className="max-w-7xl mx-auto space-y-24 md:space-y-32">
                    
                    {eixos.map((eixo, index) => {
                        const Icon = eixo.icon
                        const isEven = index % 2 !== 0 

                        return (
                            <div 
                                key={eixo.id} 
                                className={`flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center`}
                            >
                                <div 
                                    className="w-full lg:w-1/2 relative h-[400px] lg:h-[550px] rounded-[3rem] overflow-hidden group shadow-2xl border border-white/5"
                                    data-aos={isEven ? "fade-left" : "fade-right"}
                                >
                                    <Image 
                                        src={eixo.image}
                                        alt={eixo.title}
                                        fill
                                        className="eixo-image object-cover scale-110 opacity-70 group-hover:opacity-100 transition-opacity duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-transparent to-transparent" />
                                    
                                    <div className="absolute bottom-8 right-10">
                                        <span className="text-9xl font-black text-white/10 italic">
                                            {eixo.id}
                                        </span>
                                    </div>
                                </div>

                                <div 
                                    className="w-full lg:w-1/2 space-y-8"
                                    data-aos={isEven ? "fade-right" : "fade-left"}
                                >
                                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br ${eixo.color} shadow-lg shadow-blue-500/20`}>
                                        <Icon weight="fill" className="w-8 h-8 text-white" />
                                    </div>
                                    
                                    <div className="space-y-4">
                                        <h3 className="text-blue-500 font-bold tracking-[0.2em] uppercase text-sm">Pilar de Atuação</h3>
                                        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
                                            {eixo.title}
                                        </h2>
                                    </div>

                                    <p className="text-xl text-zinc-400 leading-relaxed font-light">
                                        {eixo.desc}
                                    </p>

                                    <div className="w-20 h-1 bg-blue-600/30 rounded-full" />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>

            {/* 🔥 3. NOVA SEÇÃO FINAL: IMAGEM COM BOTÃO INSTAGRAM 🔥 */}
            <section className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
                {/* Imagem de Fundo Pura e Nítida */}
                <Image 
                    src="/ondaSup4.jpeg" 
                    alt="OndaSup em Ação"
                    fill
                    className="object-cover opacity-60"
                />
                
                {/* Overlay de gradiente para suavizar a transição */}
                <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950/20 to-zinc-950 pointer-events-none" />
                
                <div className="relative z-10 text-center px-4" data-aos="zoom-in">
                    <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-8 drop-shadow-2xl">
                        Acompanhe nossa <br />
                        <span className="text-blue-500">Jornada Real</span>
                    </h2>
                    
                    <Link 
                        href="https://www.instagram.com/ondasup" 
                        target="_blank"
                        className="inline-flex items-center gap-4 bg-white text-zinc-950 font-black px-10 py-5 rounded-full text-lg transition-all hover:scale-110 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] group"
                    >
                        <InstagramLogo weight="fill" className="w-7 h-7 text-zinc-950 group-hover:text-blue-600 transition-colors" />
                        Siga no Instagram
                    </Link>
                </div>
            </section>

        </main>
    )
}