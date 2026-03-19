'use client'

import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import Link from 'next/link'
import { useCallback, useEffect, useState, useRef } from 'react'
import { ZoomIn, X } from 'lucide-react'
import { CaretLeft, CaretRight, Waves, ChartLineUp, Megaphone, TrendUp, Briefcase, ArrowRight } from "@phosphor-icons/react/dist/ssr"

// Importações de Animação
import AOS from 'aos'
import 'aos/dist/aos.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

// Registra o ScrollTrigger no GSAP
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, useGSAP)
}

type MethodologyAxis = {
    id: string
    number: string
    title: string
    desc: string
    image: string
    tag: string
    icon: React.ReactNode
}

const methodologyAxes: MethodologyAxis[] = [
    {
        id: 'remoterapia',
        number: '01',
        title: 'Remoterapia',
        desc: 'O esporte como ferramenta poderosa de pertencimento, disciplina e saúde emocional. Base do Filhos da Nação e dinâmicas corporativas.',
        image: '/filhosdanacao.webp', 
        tag: 'Esporte & Saúde',
        icon: <Waves weight="duotone" className="w-8 h-8 text-teal-400" />
    },
    {
        id: 'pesquisa',
        number: '02',
        title: 'Pesquisa Social',
        desc: 'Produção de dados e conhecimento qualificado sobre juventude em acolhimento institucional e transição para a vida adulta.',
        image: '/pesquisa.jpeg', 
        tag: 'Dados & Ciência',
        icon: <ChartLineUp weight="duotone" className="w-8 h-8 text-teal-400" />
    },
    {
        id: 'comunicacao',
        number: '03',
        title: 'Comunicação de Impacto',
        desc: 'Estratégias narrativas visuais e produção de conteúdo para ampliar visibilidade, mobilização social e dar voz a projetos.',
        image: '/impacto.jpg', 
        tag: 'Narrativa',
        icon: <Megaphone weight="duotone" className="w-8 h-8 text-teal-400" />
    },
    {
        id: 'transicao',
        number: '04',
        title: 'Transição para Vida Adulta',
        desc: 'Programas de empregabilidade e capacitação unindo conhecimento técnico e desenvolvimento de habilidades socioemocionais.',
        image: '/transicao.jpeg', 
        tag: 'Autonomia',
        icon: <TrendUp weight="duotone" className="w-8 h-8 text-teal-400" />
    },
    {
        id: 'b2b',
        number: '05',
        title: 'Soluções Corporativas',
        desc: 'Team building e experiências de remo baseadas na inteligência coletiva e Podcast Verbo Impactar para negócios de impacto.',
        image: '/remoday.jpeg', 
        tag: 'B2B',
        icon: <Briefcase weight="duotone" className="w-8 h-8 text-teal-400" />
    }
]

export default function MetodologiaOndaSup() {
    const containerRef = useRef<HTMLElement>(null)
    const carouselRef = useRef<HTMLDivElement>(null)

    // Configuração do Embla para lidar com os slides flexíveis
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: 'start',
        dragFree: true,
        containScroll: 'trimSnaps'
    })
    
    const [selectedAxis, setSelectedAxis] = useState<MethodologyAxis | null>(null)

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

    // Inicia o AOS para os textos simples
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            easing: 'ease-out-cubic',
        })
    }, [])

    // Animação GSAP + ScrollTrigger para os Cards
    useGSAP(() => {
        const cards = gsap.utils.toArray('.metodologia-card')

        gsap.set(cards, { opacity: 0, y: 80, scale: 0.95 })

        ScrollTrigger.create({
            trigger: carouselRef.current,
            start: "top 85%",
            onEnter: () => {
                gsap.to(cards, {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: "back.out(1.2)",
                    clearProps: "all"
                })
            }
        })
    }, { scope: containerRef })

    const openModal = (axis: MethodologyAxis) => {
        setSelectedAxis(axis)
        document.body.style.overflow = 'hidden'
    }

    const closeModal = () => {
        setSelectedAxis(null)
        document.body.style.overflow = 'unset'
    }

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!selectedAxis) return
            if (e.key === 'Escape') closeModal()
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [selectedAxis])

    return (
        <>
            <section id="metodologia" ref={containerRef} className="relative py-28 overflow-hidden bg-zinc-950">
                
                {/* 🔥 CAMADA 1: A IMAGEM BASE (Z-0) 🔥 */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <Image
                        src="/bg.jpeg"
                        alt="Background Metodologia OndaSup"
                        fill
                        quality={90}
                        priority
                        className="object-cover object-center opacity-80"
                        sizes="100vw"
                    />
                </div>

                {/* 🔥 CAMADA 2: OVERLAY NEUTRO (Z-10) 🔥 */}
                <div className="absolute inset-0 z-10 bg-gradient-to-b from-zinc-950/90 via-zinc-950/60 to-zinc-950/95 pointer-events-none"></div>

                {/* 🔥 CAMADA 3: O CONTEÚDO (Z-20) 🔥 */}
                <div className="container mx-auto px-4 lg:px-8 relative z-20">
                    
                    {/* Header Animado com AOS */}
                    <div className="max-w-4xl mb-16 lg:mb-20">
                        <div data-aos="fade-right" className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-900/80 backdrop-blur-md border border-teal-800 text-teal-300 text-sm font-semibold tracking-wide uppercase mb-4 shadow-sm">
                            <Waves weight="duotone" className="w-5 h-5" />
                            Nossa Tecnologia Social
                        </div>
                        <h2 data-aos="fade-right" data-aos-delay="100" className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] drop-shadow-sm">
                            Metodologia OndaSup
                        </h2>
                        <p data-aos="fade-up" data-aos-delay="200" className="mt-6 text-xl text-teal-50 max-w-3xl font-light leading-relaxed drop-shadow-sm">
                            Atuamos na interseção entre desenvolvimento humano, narrativa e transformação social através de <strong className="text-white font-medium">cinco eixos complementares</strong> que conectam experiência em campo e comunicação estratégica.
                        </p>
                    </div>

                    {/* Container do Carousel */}
                    <div ref={carouselRef} className="relative w-full">
                        
                        {/* Botões de Navegação - SEMPRE APARENTES E NAS LATERAIS */}
                        {/* Em telas menores ficam levemente para dentro, em telas grandes ficam na borda exterior */}
                        <button
                            onClick={scrollPrev}
                            className="absolute top-1/2 -translate-y-1/2 left-2 md:-left-4 lg:-left-6 z-30 p-3 md:p-4 bg-zinc-900/90 backdrop-blur-lg border border-zinc-700/50 rounded-full text-white hover:bg-teal-600 hover:border-teal-500 transition-all shadow-2xl disabled:opacity-30 disabled:hover:bg-zinc-900/90"
                            aria-label="Eixo anterior"
                        >
                            <CaretLeft weight="bold" className="h-6 w-6 md:h-8 md:w-8" />
                        </button>
                        
                        <button
                            onClick={scrollNext}
                            className="absolute top-1/2 -translate-y-1/2 right-2 md:-right-4 lg:-right-6 z-30 p-3 md:p-4 bg-zinc-900/90 backdrop-blur-lg border border-zinc-700/50 rounded-full text-white hover:bg-teal-600 hover:border-teal-500 transition-all shadow-2xl disabled:opacity-30 disabled:hover:bg-zinc-900/90"
                            aria-label="Próximo eixo"
                        >
                            <CaretRight weight="bold" className="h-6 w-6 md:h-8 md:w-8" />
                        </button>

                        {/* Embla Viewport */}
                        {/* Ajuste de padding horizontal para dar espaço aos botões nas telas menores */}
                        <div ref={emblaRef} className="overflow-hidden cursor-grab active:cursor-grabbing py-8 px-2 md:px-6">
                            
                            {/* Container Flexível (Flexbox) para garantir os tamanhos exatos */}
                            <div className="flex gap-6 md:gap-8 items-stretch">
                                
                                {methodologyAxes.map((axis) => (
                                    <div
                                        key={axis.id}
                                        /* * LÓGICA DE RESPONSIVIDADE DOS CARDS:
                                         * Mobile: 90% da tela (1 card por vez)
                                         * Tablet: 50% - gap (2 cards por vez)
                                         * Desktop (lg): 33.33% - gap (EXATAMENTE 3 CARDS MAIORES) 
                                         */
                                        className="metodologia-card flex-[0_0_90%] md:flex-[0_0_calc(50%-1.5rem)] lg:flex-[0_0_calc(33.333%-1.5rem)] relative bg-teal-900/40 backdrop-blur-2xl rounded-[2.5rem] border border-teal-800/40 hover:border-teal-400/60 hover:bg-teal-900/70 shadow-2xl transition-all duration-500 overflow-hidden group/card flex flex-col h-full"
                                    >
                                        {/* FOTO MAIOR (h-72 em mobile, h-[340px] em desktop) */}
                                        <div
                                            className="relative h-72 lg:h-[340px] overflow-hidden cursor-pointer shrink-0"
                                            onClick={() => openModal(axis)}
                                        >
                                            <Image
                                                src={axis.image}
                                                alt={axis.title}
                                                fill
                                                sizes="(max-width: 768px) 90vw, (max-width: 1024px) 50vw, 33vw"
                                                className="object-cover transition-transform duration-1000 group-hover/card:scale-110"
                                            />
                                            
                                            <div className="absolute inset-0 bg-teal-950/0 group-hover/card:bg-teal-950/40 transition-all duration-500 flex items-center justify-center">
                                                <div className="opacity-0 scale-75 group-hover/card:opacity-100 group-hover/card:scale-100 transition-all duration-500 ease-out">
                                                    <div className="bg-white/10 backdrop-blur-md rounded-full p-4 border border-white/20 shadow-2xl">
                                                        <ZoomIn className="h-8 w-8 text-white" />
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="absolute top-6 left-6 z-10">
                                                <span className="px-4 py-2 bg-zinc-950/80 backdrop-blur-md rounded-full text-xs font-bold tracking-wider text-teal-300 border border-teal-800 uppercase shadow-lg">
                                                    {axis.tag}
                                                </span>
                                            </div>
                                        </div>
                                        
                                        <div className="p-8 lg:p-10 flex flex-col flex-grow relative">
                                            <div className="flex items-center justify-between mb-6 pb-6 border-b border-teal-800/50">
                                                <span className="text-5xl lg:text-6xl font-extrabold text-teal-800/80 group-hover/card:text-teal-500 transition-colors duration-500">
                                                    {axis.number}
                                                </span>
                                                <div className="p-3 lg:p-4 rounded-2xl bg-teal-950/80 border border-teal-800/50 group-hover/card:scale-110 transition-transform duration-500 shadow-inner">
                                                    {axis.icon}
                                                </div>
                                            </div>
                                            
                                            <div className="flex-grow">
                                                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 tracking-tight leading-tight">
                                                    {axis.title}
                                                </h3>
                                                <p className="text-teal-100/70 leading-relaxed text-base lg:text-lg font-light group-hover/card:text-teal-50 transition-colors duration-500">
                                                    {axis.desc}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* CTA Inferior com AOS */}
                    <div className="text-center mt-20 relative z-20" data-aos="fade-up" data-aos-offset="50">
                        <p className="text-teal-200/90 mb-8 text-lg lg:text-xl font-light max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
                            Quer ver nossa metodologia em ação transformando histórias reais no Lago Paranoá?
                        </p>
                        <Link href="#filhos-da-nacao">
                            <button className="inline-flex items-center gap-3 bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-500 hover:to-teal-400 text-white font-bold px-10 py-5 rounded-2xl text-lg lg:text-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/30 active:scale-95">
                                Conheça o Projeto Principal
                                <ArrowRight className="h-6 w-6" weight="bold" />
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Modal Lightbox */}
            {selectedAxis && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-zinc-950/95 backdrop-blur-2xl p-4 transition-opacity duration-300" onClick={closeModal}>
                    <div className="relative max-w-6xl max-h-[95vh] w-full" onClick={e => e.stopPropagation()}>
                        
                        <button
                            onClick={closeModal}
                            className="absolute -top-16 right-0 z-[110] p-4 bg-white/10 hover:bg-red-500/90 rounded-full transition-all backdrop-blur-md border border-white/20 shadow-2xl"
                        >
                            <X className="h-8 w-8 text-white" />
                        </button>
                        
                        <div className="bg-teal-950 border border-teal-800/60 rounded-[2rem] overflow-hidden shadow-2xl flex flex-col relative z-[105]">
                            <div className="relative w-full h-[55vh] lg:h-[65vh]">
                                <Image
                                    src={selectedAxis.image}
                                    alt={selectedAxis.title}
                                    fill
                                    sizes="100vw"
                                    className="object-contain p-4 lg:p-8"
                                />
                            </div>
                            
                            <div className="p-8 lg:p-10 bg-zinc-950/90 backdrop-blur-xl border-t border-teal-800/50 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
                                <div className="p-4 rounded-3xl bg-teal-900 border border-teal-800 flex-shrink-0 shadow-inner">
                                    {selectedAxis.icon}
                                </div>
                                <div className="flex-grow">
                                    <h3 className="text-white font-extrabold text-3xl mb-2 tracking-tight">
                                        {selectedAxis.number} — {selectedAxis.title}
                                    </h3>
                                    <p className="text-teal-100/90 text-lg font-light leading-relaxed max-w-3xl">
                                        {selectedAxis.desc}
                                    </p>
                                </div>
                                <span className="px-5 py-2 bg-teal-500/20 rounded-full text-sm font-bold text-teal-300 uppercase tracking-widest md:ml-auto flex-shrink-0 border border-teal-500/30">
                                    {selectedAxis.tag}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}