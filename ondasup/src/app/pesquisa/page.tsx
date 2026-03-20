'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
    Books, 
    ChartBar, 
    UsersThree, 
    FileText, 
    Globe, 
    ArrowRight,
    Quotes
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

export default function PesquisaPage() {
    const containerRef = useRef<HTMLElement>(null)

    useEffect(() => {
        AOS.init({ duration: 1000, once: true, easing: 'ease-out-cubic' })
    }, [])

    useGSAP(() => {
        // Animação de entrada dos tópicos de pesquisa
        gsap.from('.research-topic', {
            x: -30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: '.research-grid',
                start: "top 80%",
            }
        })
    }, { scope: containerRef })

    return (
        <main ref={containerRef} className="min-h-screen bg-zinc-950 text-white pt-24 pb-20 overflow-hidden">
            
            {/* 1. HERO SECTION: POSICIONAMENTO ACADÊMICO */}
            <section className="relative px-4 md:px-8 py-20 lg:py-32">
                {/* Efeito Glow Azul Sutil */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none" />
                
                <div className="max-w-5xl mx-auto text-center relative z-10" data-aos="fade-up">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/10 border border-blue-600/20 text-blue-400 text-xs font-bold tracking-widest uppercase mb-8">
                        <Books weight="fill" className="w-4 h-4" />
                        Produção de Conhecimento
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[1.1] mb-8">
                        Pesquisa e <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Conhecimento</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed max-w-4xl mx-auto">
                        A OndaSup desenvolve estudos profundos sobre a <strong className="text-white">juventude em acolhimento institucional</strong>, com foco especial na transição para a vida adulta e autonomia.
                    </p>
                </div>
            </section>

            {/* 2. BLOCO MARCO ZERO: A BASE DA PESQUISA */}
            <section className="py-20 px-4 md:px-8 relative bg-zinc-900/30 border-y border-white/5">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    
                    <div className="relative h-[500px] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl" data-aos="fade-right">
                        <Image 
                            src="/pesquisa.jpeg" 
                            alt="Estudo e Levantamento de Dados" 
                            fill 
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
                    </div>

                    <div className="space-y-8" data-aos="fade-left">
                        <h2 className="text-4xl font-black tracking-tight text-white leading-tight">
                            Levantamentos Quantitativos e <span className="text-blue-500">Narrativas Qualitativas</span>
                        </h2>
                        <p className="text-lg text-zinc-400 font-light leading-relaxed italic">
                           "Nossos resultados orientam políticas públicas, programas sociais e novas metodologias de intervenção."
                        </p>
                        
                        <div className="research-grid grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                            {[
                                { icon: UsersThree, label: 'Pertencimento' },
                                { icon: ChartBar, label: 'Saúde Mental' },
                                { icon: Globe, label: 'Projeção de Futuro' },
                                { icon: FileText, label: 'Autonomia' }
                            ].map((item, index) => (
                                <div key={index} className="research-topic flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-2xl">
                                    <item.icon weight="duotone" className="w-8 h-8 text-blue-400" />
                                    <span className="font-bold text-zinc-200 uppercase tracking-wider text-sm">{item.label}</span>
                                </div>
                            ))}
                        </div>

                        <div className="pt-6">
                            <Link href="#" className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-bold transition-all hover:scale-105 shadow-xl shadow-blue-900/20">
                                Acessar Relatório Marco Zero
                                <FileText weight="bold" className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. ALINHAMENTO GLOBAL (ONU & IMPACTO) */}
            <section className="py-24 px-4 md:px-8">
                <div className="max-w-6xl mx-auto text-center">
                    <div className="mb-16" data-aos="fade-up">
                        <div className="relative w-32 h-32 mx-auto mb-8">
                            <Image src="/onu.png" alt="Logo ONU" fill className="object-contain grayscale hover:grayscale-0 transition-all duration-700" />
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black mb-6">Métricas <span className="text-blue-500">ESG</span> e ODS 2030</h2>
                        <p className="text-xl text-zinc-400 font-light max-w-3xl mx-auto">
                            Trabalhamos com indicadores rigorosos de sustentabilidade ambiental, social e governança, alinhados com os Objetivos de Desenvolvimento Sustentável da ONU.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                        <div className="p-10 bg-zinc-900 border border-white/5 rounded-[2.5rem] relative overflow-hidden group" data-aos="fade-up">
                            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                                <ChartBar weight="fill" className="w-32 h-32" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                                <div className="w-2 h-2 bg-blue-500 rounded-full" />
                                Impacto Sistêmico
                            </h3>
                            <p className="text-zinc-400 leading-relaxed font-light">
                                Desde 2017, o projeto Filhos da Nação gerou dados que ajudam a compreender o ecossistema de acolhimento, impactando mais de 1000 pessoas indiretamente e fortalecendo o sistema de justiça e assistência social.
                            </p>
                        </div>

                        <div className="p-10 bg-zinc-900 border border-white/5 rounded-[2.5rem] relative overflow-hidden group" data-aos="fade-up" data-aos-delay="200">
                            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                                <Globe weight="fill" className="w-32 h-32" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                                <div className="w-2 h-2 bg-cyan-500 rounded-full" />
                                Educação Ambiental
                            </h3>
                            <p className="text-zinc-400 leading-relaxed font-light">
                                Nossas ações de limpeza do Lago Paranoá não são apenas práticas; elas são laboratórios de campo onde voluntários e beneficiários coletam dados reais sobre o resíduo sólido e o impacto ambiental urbano.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. SEÇÃO DE CAMPO: VIVÊNCIA REAL */}
            <section className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
                <Image 
                    src="/limparLago.jpeg" 
                    alt="Coleta de dados e ação ambiental no lago" 
                    fill 
                    className="object-cover opacity-50 transition-transform duration-1000"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-zinc-950/60 pointer-events-none" />
                
                <div className="relative z-10 max-w-4xl text-center px-4" data-aos="zoom-in">
                    <Quotes weight="fill" className="w-16 h-16 text-blue-500/40 mx-auto mb-6" />
                    <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-[1.1]">
                        Transformando experiência de <br />
                        <span className="text-blue-500">campo em ciência social.</span>
                    </h2>
                </div>
            </section>

            {/* CTA FINAL PARA SOLUÇÕES */}
            <section className="py-24 px-4 text-center bg-zinc-950 relative z-20 border-t border-white/5">
                <p className="text-zinc-400 mb-8 font-light text-lg italic max-w-2xl mx-auto">
                    "Acreditamos que a inovação em ferramentas sociais é essencial para promover bem-estar e resolver desafios reais da sociedade."
                </p>
                <Link href="/solucoes">
                    <button className="group inline-flex items-center gap-3 px-12 py-6 bg-white text-zinc-950 rounded-full font-black text-xl transition-all hover:scale-105 hover:bg-blue-600 hover:text-white">
                        Conhecer nossas Soluções
                        <ArrowRight weight="bold" className="w-6 h-6 transition-transform group-hover:translate-x-2" />
                    </button>
                </Link>
            </section>

        </main>
    )
}