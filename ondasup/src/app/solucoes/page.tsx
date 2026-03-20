'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
    UsersFour, 
    MicrophoneStage, 
    ChatTeardropText, 
    GraduationCap,
    ArrowRight,
    Play,
    CheckCircle
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

const services = [
    {
        title: 'Team Building e SyncPaddle',
        desc: 'Vivências corporativas baseadas na cooperação e inteligência coletiva. Utilizamos a RemoTerapia para alinhar expectativas e fortalecer o clima organizacional.',
        icon: UsersFour,
        image: '/remoday.jpeg',
        tags: ['Corporativo', 'Liderança', 'Saúde Mental']
    },
    {
        title: 'Comunicação de Impacto',
        desc: 'Produção de narrativas, vídeos e estratégias de visibilidade para organizações e projetos sociais que desejam ampliar sua voz.',
        icon: ChatTeardropText,
        image: '/gabiEtiago.jpg',
        tags: ['Branding', 'Storytelling', 'Social']
    },
    {
        title: 'Formação e Conteúdo',
        desc: 'Palestras, workshops e programas educacionais focados em desenvolvimento humano e inovação social.',
        icon: GraduationCap,
        image: '/transicao.jpeg',
        tags: ['Educação', 'Workshops', 'Impacto']
    }
]

export default function SolucoesPage() {
    const containerRef = useRef<HTMLElement>(null)

    useEffect(() => {
        AOS.init({ duration: 1000, once: true, easing: 'ease-out-cubic' })
    }, [])

    useGSAP(() => {
        // Animação dos cards de serviço
        gsap.from('.service-card', {
            y: 60,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power4.out",
            scrollTrigger: {
                trigger: '.services-grid',
                start: "top 80%",
            }
        })
    }, { scope: containerRef })

    return (
        <main ref={containerRef} className="min-h-screen bg-zinc-950 text-white pt-24 pb-20 overflow-hidden">
            
            {/* 1. HERO SECTION */}
            <section className="relative px-4 md:px-8 py-20 lg:py-32 border-b border-white/5">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />
                
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                    <div data-aos="fade-right">
                        <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8">
                            Soluções em <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-400">Impacto</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed max-w-lg">
                            Transformamos propósito em ferramentas práticas para empresas, marcas e ecossistemas sociais.
                        </p>
                    </div>
                    <div className="relative h-[400px] rounded-[3rem] overflow-hidden border border-white/10" data-aos="zoom-in">
                        <Image src="/ondaHero.jpeg" alt="OndaSup Soluções" fill className="object-cover" />
                        <div className="absolute inset-0 bg-blue-950/20" />
                    </div>
                </div>
            </section>

            {/* 2. GRID DE SERVIÇOS */}
            <section className="py-24 px-4 md:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="services-grid grid grid-cols-1 md:grid-cols-3 gap-8">
                        {services.map((s, i) => (
                            <div key={i} className="service-card group bg-zinc-900/50 border border-white/10 rounded-[2.5rem] overflow-hidden hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-2 shadow-2xl">
                                <div className="relative h-64">
                                    <Image src={s.image} alt={s.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
                                    <div className="absolute top-6 left-6 flex gap-2">
                                        {s.tags.map(tag => (
                                            <span key={tag} className="px-3 py-1 bg-black/50 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-blue-400">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="p-10 space-y-6">
                                    <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-900/20">
                                        <s.icon weight="fill" className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-2xl font-black tracking-tight">{s.title}</h3>
                                    <p className="text-zinc-400 font-light leading-relaxed">
                                        {s.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. PODCAST VERBO IMPACTAR (Destaque Especial) */}
            <section className="py-20 px-4 md:px-8 bg-zinc-900/30 border-y border-white/5 relative">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
                    <div className="w-full lg:w-1/2 relative h-[500px] rounded-[3rem] overflow-hidden group shadow-2xl" data-aos="fade-right">
                        <Image src="/ondaSup1.jpg" alt="Podcast Verbo Impactar" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                                <Play weight="fill" className="w-8 h-8 text-white ml-1" />
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 space-y-8" data-aos="fade-left">
                        <div className="inline-flex items-center gap-2 text-blue-500 font-bold uppercase tracking-widest text-sm">
                            <MicrophoneStage weight="fill" />
                            Podcast Oficial
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter">Podcast <br /><span className="text-blue-500 italic">Verbo Impactar</span></h2>
                        <p className="text-xl text-zinc-400 font-light leading-relaxed">
                            Um espaço de troca para quem acredita que negócios e propósito caminham juntos. Histórias reais de quem está transformando o Brasil.
                        </p>
                        <div className="space-y-4">
                            {['Empreendedorismo Social', 'Liderança Consciente', 'Cases de Sucesso'].map(item => (
                                <div key={item} className="flex items-center gap-3 text-zinc-300">
                                    <CheckCircle weight="fill" className="text-blue-500" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                        <button className="px-8 py-4 bg-white text-zinc-950 font-black rounded-full hover:bg-blue-600 hover:text-white transition-all shadow-xl">
                            Assistir no YouTube
                        </button>
                    </div>
                </div>
            </section>

            {/* 4. MODA COM PROPÓSITO (CTA Específico) */}
            <section className="py-24 px-4 text-center">
                <div className="max-w-4xl mx-auto space-y-8" data-aos="zoom-in">
                    <h2 className="text-3xl md:text-5xl font-black">Vida e Moda com <span className="text-blue-500">Propósito</span></h2>
                    <p className="text-xl text-zinc-400 font-light max-w-2xl mx-auto">
                        Vista o que você acredita. 10% do lucro da nossa linha de roupas é destinado diretamente para as ações da RemoTerapia.
                    </p>
                    <Link href="https://useondasup.com.br" target="_blank" className="inline-flex items-center gap-3 text-blue-400 font-bold hover:text-blue-300 transition-colors text-lg border-b border-blue-500/30 pb-1">
                        Visitar useondasup.com.br
                        <ArrowRight weight="bold" />
                    </Link>
                </div>
            </section>

        </main>
    )
}