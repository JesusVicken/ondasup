'use client'

import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { useCallback, useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Leaf, GlobeHemisphereWest, UsersThree, Recycle, HandHeart } from "@phosphor-icons/react/dist/ssr"

// Animações
import AOS from 'aos'
import 'aos/dist/aos.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, useGSAP)
}

// Tipo e Array para a Galeria de Ações (Substituindo as tatuagens)
type ActionGallery = {
    title: string
    desc: string
    image: string
}

const impactActions: ActionGallery[] = [
    {
        title: 'Limpeza do Lago Paranoá',
        desc: 'Voluntários e jovens recolhendo resíduos das margens durante as vivências de SUP.',
        image: '/limparLago.jpeg', // Adicione essa foto no public
    },
    {
        title: 'Filhos da Nação em Ação',
        desc: 'Esporte e educação ambiental caminhando juntos para formar cidadãos conscientes.',
        image: '/filhosNacao2.jpeg',
    },
    {
        title: 'Alinhamento ONU 2030',
        desc: 'Nossas práticas refletem o compromisso global com o desenvolvimento sustentável.',
        image: '/onu.png', // Pode ser uma foto institucional ou dos jovens
    },
    {
        title: 'Integração e Comunidade',
        desc: 'Familiares, amigos e a comunidade acolhida participando ativamente do ecossistema.',
        image: '/comunidade.jpeg',
    }
]

export default function OMundoQueQueremos() {
    const containerRef = useRef<HTMLElement>(null)
    const countersRef = useRef<HTMLDivElement>(null)

    // Configuração do Carrossel Embla
    const [emblaRef, emblaApi] = useEmblaCarousel({ 
        loop: true, 
        align: 'center',
        dragFree: true
    })

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

    // Inicia o AOS para os textos
    useEffect(() => {
        AOS.init({ duration: 800, once: true, easing: 'ease-out-cubic' })
    }, [])

    // MÁGICA DO GSAP: Contadores Animados via ScrollTrigger
    useGSAP(() => {
        const counters = gsap.utils.toArray('.contador-numero')

        counters.forEach((counter: any) => {
            const target = parseFloat(counter.getAttribute('data-target'))
            
            ScrollTrigger.create({
                trigger: countersRef.current,
                start: "top 80%", // Começa a contar quando a área chega a 80% da tela
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
        <section id="esg" ref={containerRef} className="py-24 bg-slate-50 relative overflow-hidden">
            
            {/* Decoração de Fundo (Folhas/Natureza abstrata) */}
            <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 opacity-5 pointer-events-none">
                <GlobeHemisphereWest weight="fill" className="w-[800px] h-[800px] text-teal-900" />
            </div>

            <div className="container mx-auto px-4 md:px-8 relative z-10">
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
                    {/* COLUNA ESQUERDA: Textos e ONU */}
                    <div data-aos="fade-right">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-100 border border-teal-200 text-teal-800 text-sm font-bold tracking-wide uppercase mb-6 shadow-sm">
                            <Leaf weight="bold" className="w-5 h-5 text-teal-600" />
                            O Mundo Que Queremos
                        </div>
                        
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-900 tracking-tight leading-tight">
                            Impacto Social e <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-500">
                                Sustentabilidade (ESG)
                            </span>
                        </h2>
                        
                        <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
                            <p>
                                Nossas ações de limpeza do <strong>Lago Paranoá</strong> vão além do esporte. Durante o projeto Filhos da Nação, voluntários, crianças e adolescentes se unem para recolher o lixo acumulado nas margens pelas atividades de SUP e canoa, promovendo consciência ambiental na prática.
                            </p>
                            <p className="p-5 bg-white border border-slate-200 rounded-2xl shadow-sm shadow-slate-200/50 italic text-slate-600 border-l-4 border-l-teal-500">
                                "Trabalhamos com métricas ESG pela sustentabilidade ambiental, social e pela boa governança, alinhados com os <strong>Objetivos de Desenvolvimento Sustentável (ODS) da ONU 2030</strong>."
                            </p>
                        </div>
                    </div>

                    {/* COLUNA DIREITA: Contadores GSAP (A Joia da Coroa) */}
                    <div ref={countersRef} className="grid grid-cols-1 sm:grid-cols-2 gap-6" data-aos="fade-up" data-aos-delay="200">
                        
                        {/* Card Contador 1 */}
                        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-transform duration-300">
                            <HandHeart weight="duotone" className="w-12 h-12 text-teal-500 mb-4" />
                            <h3 className="text-5xl font-black text-slate-900 mb-2 font-mono tracking-tighter">
                                <span className="contador-numero" data-target="250">0</span>
                            </h3>
                            <p className="text-slate-500 font-medium">Voluntários Engajados</p>
                        </div>

                        {/* Card Contador 2 */}
                        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-transform duration-300">
                            <UsersThree weight="duotone" className="w-12 h-12 text-cyan-500 mb-4" />
                            <h3 className="text-5xl font-black text-slate-900 mb-2 font-mono tracking-tighter">
                                <span className="contador-numero" data-target="285">0</span>
                            </h3>
                            <p className="text-slate-500 font-medium">Jovens e Crianças (Atendidos)</p>
                        </div>

                        {/* Card Contador 3 (Ocupa 2 colunas) */}
                        <div className="sm:col-span-2 bg-gradient-to-br from-teal-900 to-cyan-900 p-8 rounded-3xl border border-teal-800 shadow-2xl shadow-teal-900/30 text-white hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-10">
                                <Recycle weight="fill" className="w-32 h-32" />
                            </div>
                            <div className="relative z-10">
                                <h3 className="text-6xl font-black text-white mb-2 font-mono tracking-tighter drop-shadow-md">
                                    <span className="contador-numero" data-target="1000">0</span>
                                </h3>
                                <p className="text-teal-100 font-medium text-lg">Pessoas impactadas indiretamente (familiares e comunidade)</p>
                                <p className="text-teal-300/80 text-sm mt-2">*Dados contabilizados desde 2017 pelo projeto Filhos da Nação.</p>
                            </div>
                        </div>

                    </div>
                </div>

                {/* ==========================================
                    CARROSSEL DE FOTOS EM AÇÃO (Embla)
                    ========================================== */}
                <div className="mt-24 relative" data-aos="fade-up" data-aos-delay="400">
                    <div className="text-center mb-10">
                        <h3 className="text-3xl font-bold text-slate-900">Nossa Atuação na Prática</h3>
                        <p className="text-slate-600 mt-2">Arraste para ver os registros em campo</p>
                    </div>

                    {/* Controles do Carrossel */}
                    <button
                        onClick={scrollPrev}
                        className="absolute top-1/2 -translate-y-1/2 left-2 sm:left-4 z-20 p-3 bg-white shadow-xl shadow-slate-300/50 rounded-full hover:bg-teal-50 hover:text-teal-600 transition-all border border-slate-100"
                        aria-label="Anterior"
                    >
                        <ChevronLeft className="h-6 w-6 text-slate-700" />
                    </button>

                    <button
                        onClick={scrollNext}
                        className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-4 z-20 p-3 bg-white shadow-xl shadow-slate-300/50 rounded-full hover:bg-teal-50 hover:text-teal-600 transition-all border border-slate-100"
                        aria-label="Próximo"
                    >
                        <ChevronRight className="h-6 w-6 text-slate-700" />
                    </button>

                    {/* Viewport do Embla */}
                    <div ref={emblaRef} className="overflow-hidden cursor-grab active:cursor-grabbing pb-12 pt-4">
                        <div className="flex gap-6 px-4 md:px-16">
                            {impactActions.map((action, index) => (
                                <div
                                    key={index}
                                    className="flex-[0_0_85%] sm:flex-[0_0_400px] bg-white border border-slate-200 shadow-lg shadow-slate-200/50 rounded-3xl overflow-hidden transition-transform duration-300 hover:-translate-y-2 group"
                                >
                                    <div className="relative h-64 overflow-hidden bg-slate-100">
                                        <Image
                                            src={action.image}
                                            alt={action.title}
                                            fill
                                            sizes="(max-width: 768px) 85vw, 400px"
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    </div>

                                    <div className="p-6">
                                        <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-teal-600 transition-colors">
                                            {action.title}
                                        </h4>
                                        <p className="text-slate-600 text-sm leading-relaxed">
                                            {action.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}