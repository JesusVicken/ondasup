'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { 
    Waves, 
    Target, 
    Eye, 
    Diamond, 
    Users, 
    Lightbulb, 
    Megaphone, 
    MapPin 
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

// Array de imagens do slider do manifesto
const manifestoImages = [
    '/gabiEtiago.jpg',
    '/impacto.jpg',
    '/premioMulher.jpeg',
    '/comunidade.jpeg'
]

export default function PropositoPage() {
    const containerRef = useRef<HTMLElement>(null)
    const [currentImage, setCurrentImage] = useState(0)

    // Efeito para trocar a imagem automaticamente a cada 4 segundos
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % manifestoImages.length)
        }, 4000)
        return () => clearInterval(timer)
    }, [])

    useEffect(() => {
        AOS.init({ duration: 1000, once: true, easing: 'ease-out-cubic' })
    }, [])

    useGSAP(() => {
        // Animação das cartas de Valores (Stagger effect)
        const cards = gsap.utils.toArray('.mvv-card')
        gsap.from(cards, {
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "back.out(1.5)",
            scrollTrigger: {
                trigger: '.mvv-container',
                start: "top 80%",
            }
        })
    }, { scope: containerRef })

    return (
        <main ref={containerRef} className="min-h-screen bg-zinc-950 text-white pt-24 pb-20">
            
            {/* 1. HERO SECTION: O QUE É A ONDASUP */}
            <section className="relative px-4 md:px-8 py-20 lg:py-32 overflow-hidden border-b border-white/5">
                {/* Efeito de luz de fundo */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-teal-500/20 blur-[120px] rounded-full pointer-events-none" />
                
                <div className="max-w-5xl mx-auto text-center relative z-10" data-aos="fade-up">
                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-teal-400 text-xs font-bold tracking-widest uppercase mb-8 backdrop-blur-md">
                        <Waves weight="bold" className="w-4 h-4" />
                        Nosso Propósito
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[1.1] mb-8">
                        Plataforma de soluções em <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300">
                            Impacto Social
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed max-w-4xl mx-auto">
                        Desenvolvemos metodologias que integram <strong className="text-white">esporte, produção de conhecimento e comunicação</strong> para ampliar oportunidades, fortalecer trajetórias de vida e abrir caminhos para autonomia e inserção social.
                    </p>
                </div>
            </section>

            {/* 2. MANIFESTO: POR QUE ONDASUP? (Layout Split com Slider de Imagens) */}
            <section className="py-24 px-4 md:px-8 relative">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    
                    {/* Slider de Imagens Manifesto */}
                    <div className="relative h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden shadow-2xl border border-white/10 group" data-aos="fade-right">
                        
                        {/* Mapeando as imagens para criar o efeito Crossfade */}
                        {manifestoImages.map((img, index) => (
                            <Image 
                                key={img}
                                src={img} 
                                alt={`Manifesto OndaSup ${index + 1}`}
                                fill 
                                className={`
                                    object-cover transition-all duration-1000 ease-in-out
                                    ${index === currentImage 
                                        ? 'opacity-70 scale-105' // Foto ativa aparece e dá um leve zoom
                                        : 'opacity-0 scale-100'  // Foto inativa some
                                    }
                                `}
                            />
                        ))}
                        
                        {/* Overlay escuro para garantir leitura e estilo */}
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent pointer-events-none" />
                        
                        {/* Ícone fixo por cima do slider */}
                        <div className="absolute bottom-10 left-10 z-10">
                            <Waves weight="thin" className="w-16 h-16 md:w-20 md:h-20 text-teal-400 drop-shadow-lg" />
                        </div>

                        {/* Indicadores do Slider (Bolinhas) */}
                        <div className="absolute bottom-10 right-10 z-10 flex gap-2">
                            {manifestoImages.map((_, index) => (
                                <div 
                                    key={index} 
                                    className={`h-1.5 rounded-full transition-all duration-500 ${index === currentImage ? 'w-6 bg-teal-400' : 'w-2 bg-white/30'}`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Texto Manifesto */}
                    <div className="space-y-8" data-aos="fade-left">
                        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
                            Por que <span className="text-teal-400">OndaSup?</span>
                        </h2>
                        <div className="space-y-6 text-lg text-zinc-300 font-light leading-relaxed">
                            <p>
                                A <strong className="text-white">Onda</strong> é um movimento poderoso, que surge naturalmente, impulsionada pelos ventos e pelas marés. Ela simboliza energia pura, um fluxo constante que derrama seu conteúdo por onde passa, espalhando abundância e gerando impacto.
                            </p>
                            <p>
                                A palavra <strong className="text-white uppercase tracking-widest text-teal-300">sup</strong> vem de <em>"superação"</em>, entendida como uma ação grandiosa, forte, que vai além, ultrapassa obstáculos e transforma desafios em conquistas. Superar é vencer, é transformar o impossível em possível.
                            </p>
                            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md italic text-zinc-200">
                                "Convidamos você a surfar nessa onda conosco, ampliando suas conquistas e gerando impacto positivo ao redor."
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. MISSÃO, VISÃO E VALORES (Bento Grid Premium) */}
            <section className="py-24 px-4 md:px-8 bg-zinc-900/50 border-y border-white/5">
                <div className="max-w-7xl mx-auto mvv-container">
                    <div className="text-center mb-16" data-aos="fade-down">
                        <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">O que nos guia</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Missão */}
                        <div className="mvv-card bg-zinc-950 border border-white/10 p-10 rounded-[2.5rem] shadow-2xl hover:border-teal-500/50 transition-colors group">
                            <div className="w-16 h-16 bg-teal-500/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                                <Target weight="duotone" className="w-8 h-8 text-teal-400" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Missão</h3>
                            <p className="text-zinc-400 leading-relaxed font-light">
                                Desenvolver e aplicar metodologias de impacto social que ampliem oportunidades e fortaleçam trajetórias de vida com dignidade.
                            </p>
                        </div>

                        {/* Visão */}
                        <div className="mvv-card bg-zinc-950 border border-white/10 p-10 rounded-[2.5rem] shadow-2xl hover:border-cyan-500/50 transition-colors group">
                            <div className="w-16 h-16 bg-cyan-500/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                                <Eye weight="duotone" className="w-8 h-8 text-cyan-400" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Visão</h3>
                            <p className="text-zinc-400 leading-relaxed font-light">
                                Consolidar a OndaSup como referência nacional em soluções de impacto social até 2030, com reconhecimento e atuação internacional até 2034.
                            </p>
                        </div>

                        {/* Valores */}
                        <div className="mvv-card bg-zinc-950 border border-white/10 p-10 rounded-[2.5rem] shadow-2xl hover:border-purple-500/50 transition-colors group md:col-span-3 lg:col-span-1">
                            <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                                <Diamond weight="duotone" className="w-8 h-8 text-purple-400" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Valores</h3>
                            <ul className="space-y-3 text-zinc-400 font-light">
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div> Ambiente seguro</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div> Respeito aos iguais e diferentes</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div> Protagonismo e Superação</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div> Inovação social</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div> Responsabilidade socioambiental</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. FUNDADORES & DIFERENCIAIS */}
            <section className="py-24 px-4 md:px-8">
                <div className="max-w-6xl mx-auto text-center" data-aos="fade-up">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Quem faz a Onda acontecer</h2>
                    <p className="text-xl text-zinc-400 font-light mb-16 max-w-3xl mx-auto">
                        Fundada pela jornalista <strong className="text-white">Gabriela Speziali</strong> e pelo repórter fotográfico <strong className="text-white">Tiago Souzza</strong>, a organização atua na interseção entre desenvolvimento humano, narrativa e transformação social.
                    </p>

                    {/* Diferenciais */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="p-6 bg-white/5 border border-white/10 rounded-3xl flex flex-col items-center gap-4 hover:-translate-y-2 transition-transform">
                            <Lightbulb weight="duotone" className="w-10 h-10 text-teal-400" />
                            <span className="font-bold text-sm uppercase tracking-widest text-zinc-300">Metodologia Própria</span>
                        </div>
                        <div className="p-6 bg-white/5 border border-white/10 rounded-3xl flex flex-col items-center gap-4 hover:-translate-y-2 transition-transform">
                            <MapPin weight="duotone" className="w-10 h-10 text-cyan-400" />
                            <span className="font-bold text-sm uppercase tracking-widest text-zinc-300">Atuação em Campo</span>
                        </div>
                        <div className="p-6 bg-white/5 border border-white/10 rounded-3xl flex flex-col items-center gap-4 hover:-translate-y-2 transition-transform">
                            <Users weight="duotone" className="w-10 h-10 text-purple-400" />
                            <span className="font-bold text-sm uppercase tracking-widest text-zinc-300">Produção de Conhecimento</span>
                        </div>
                        <div className="p-6 bg-white/5 border border-white/10 rounded-3xl flex flex-col items-center gap-4 hover:-translate-y-2 transition-transform">
                            <Megaphone weight="duotone" className="w-10 h-10 text-pink-400" />
                            <span className="font-bold text-sm uppercase tracking-widest text-zinc-300">Comunicação Estratégica</span>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    )
}