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
    CheckCircle,
    ShoppingBag
} from '@phosphor-icons/react/dist/ssr'

// Animações
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function SolucoesPage() {
    useEffect(() => {
        AOS.init({ 
            duration: 1000, 
            once: true, 
            easing: 'ease-out-cubic',
            offset: 100 // Garante que a animação comece assim que o card aparecer um pouco
        })
    }, [])

    const services = [
        {
            title: 'Team Building e SyncPaddle',
            desc: 'Vivências corporativas baseadas na cooperação e inteligência coletiva. Utilizamos a RemoTerapia para alinhar expectativas e fortalecer o clima organizacional.',
            icon: UsersFour,
            image: '/remoday.jpeg',
            tag: 'Corporativo'
        },
        {
            title: 'Comunicação de Impacto',
            desc: 'Produção de narrativas, vídeos e estratégias de visibilidade para organizações e projetos sociais que desejam ampliar sua voz.',
            icon: ChatTeardropText,
            image: '/tiagoEgabi.webp',
            tag: 'Branding'
        },
        {
            title: 'Formação e Conteúdo',
            desc: 'Palestras, workshops e programas educacionais focados em desenvolvimento humano e inovação social.',
            icon: GraduationCap,
            image: '/transicao.jpeg',
            tag: 'Educação'
        }
    ]

    return (
        <main className="min-h-screen bg-zinc-950 text-white pt-24 pb-20 overflow-hidden">
            
            {/* 1. HERO SECTION */}
            <section className="relative px-4 md:px-8 py-20 lg:py-32 border-b border-white/5">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-700/10 blur-[150px] rounded-full pointer-events-none" />
                
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                    <div data-aos="fade-right">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/10 border border-blue-600/20 text-blue-400 text-xs font-bold tracking-widest uppercase mb-8">
                            Nossas Frentes
                        </div>
                        <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8 italic">
                            Soluções em <br />
                            <span className="text-blue-500 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-300">Impacto</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed max-w-lg">
                            Transformamos propósito em ferramentas práticas para empresas, marcas e ecossistemas sociais.
                        </p>
                    </div>
                    
                    <div className="relative h-[450px] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl" data-aos="zoom-in">
                        <Image src="/ondaHero.jpeg" alt="OndaSup Soluções" fill className="object-cover" priority />
                        <div className="absolute inset-0 bg-blue-900/10" />
                    </div>
                </div>
            </section>

            {/* 2. GRID DE SERVIÇOS - CORRIGIDO PARA APARECER TODOS OS CARDS */}
            <section className="py-24 px-4 md:px-8 bg-zinc-950">
                <div className="max-w-7xl mx-auto">
                    {/* Grid forçado a ter 3 colunas no desktop e 1 no mobile */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                        {services.map((s, i) => (
                            <div 
                                key={i} 
                                data-aos="fade-up" 
                                data-aos-delay={i * 150} // Stagger manual via AOS
                                className="group bg-zinc-900 border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-blue-500/40 transition-all duration-500 shadow-2xl flex flex-col h-full"
                            >
                                <div className="relative h-72 w-full shrink-0">
                                    <Image 
                                        src={s.image} 
                                        alt={s.title} 
                                        fill 
                                        className="object-cover transition-transform duration-700 group-hover:scale-105" 
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80" />
                                    <div className="absolute top-6 left-6">
                                        <div className="px-4 py-1.5 bg-black/60 backdrop-blur-xl border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest text-blue-400">
                                            {s.tag}
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="p-10 flex flex-col flex-grow space-y-6">
                                    <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-blue-900/20 group-hover:scale-110 transition-transform shrink-0">
                                        <s.icon weight="fill" className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-2xl font-black tracking-tight leading-tight text-white">{s.title}</h3>
                                    <p className="text-zinc-400 font-light leading-relaxed text-base">
                                        {s.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. DESTAQUE PODCAST: VERBO IMPACTAR */}
            <section className="py-24 px-4 md:px-8 bg-zinc-900/40 border-y border-white/5 relative">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
                    <div className="w-full lg:w-1/2 relative h-[550px] rounded-[3.5rem] overflow-hidden group shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10" data-aos="fade-right">
                        <Image 
                            src="/podcast.jpeg" 
                            alt="Podcast Verbo Impactar" 
                            fill 
                            className="object-cover group-hover:scale-105 transition-transform duration-1000" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-24 h-24 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Play weight="fill" className="w-10 h-10 text-white ml-1" />
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 space-y-8" data-aos="fade-left">
                        <div className="inline-flex items-center gap-2 text-blue-500 font-black uppercase tracking-widest text-sm bg-blue-500/10 px-4 py-1.5 rounded-full border border-blue-500/20">
                            <MicrophoneStage weight="fill" />
                            Podcast OndaSup
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">
                            Podcast <br />
                            <span className="text-blue-500 italic uppercase">Verbo Impactar</span>
                        </h2>
                        <p className="text-xl text-zinc-400 font-light leading-relaxed max-w-xl">
                            Dando voz a outros negócios de impacto e projetos socioambientais que fazem a diferença no Brasil e no mundo.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {['Empreendedorismo', 'Liderança Social', 'Inovação', 'Cases Reais'].map(item => (
                                <div key={item} className="flex items-center gap-3 text-zinc-200 font-medium">
                                    <CheckCircle weight="fill" className="text-blue-500 w-5 h-5" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                        <button className="group mt-4 inline-flex items-center gap-4 px-10 py-5 bg-white text-zinc-950 font-black rounded-full hover:bg-blue-600 hover:text-white transition-all shadow-2xl hover:scale-105">
                            Assista no YouTube
                            <ArrowRight weight="bold" className="group-hover:translate-x-2 transition-transform" />
                        </button>
                    </div>
                </div>
            </section>

            {/* 4. DESTAQUE MODA: VIDA E MODA COM PROPÓSITO */}
            <section className="py-24 px-4 md:px-8 relative overflow-hidden">
                <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-16">
                    <div className="w-full lg:w-1/2 space-y-8" data-aos="fade-right">
                        <div className="inline-flex items-center gap-2 text-indigo-400 font-black uppercase tracking-widest text-sm bg-indigo-500/10 px-4 py-1.5 rounded-full border border-indigo-500/20">
                            <ShoppingBag weight="fill" />
                            Use OndaSup
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">
                            Moda com <br />
                            <span className="text-indigo-400">Propósito</span>
                        </h2>
                        <p className="text-xl text-zinc-400 font-light leading-relaxed max-w-xl">
                            Nossas roupas propagam o lifestyle despojado e saudável dos esportes a remo. A proposta é vestir o que se acredita. 
                        </p>
                        <div className="p-6 bg-white/5 border border-white/10 rounded-[2rem] backdrop-blur-md">
                            <p className="text-white font-bold text-lg flex items-center gap-3">
                                <span className="text-3xl text-blue-500">10%</span>
                                <span>Do lucro é destinado diretamente para as ações da RemoTerapia.</span>
                            </p>
                        </div>
                        <Link 
                            href="https://useondasup.com.br" 
                            target="_blank"
                            className="inline-flex items-center gap-3 text-white bg-indigo-600 hover:bg-indigo-500 px-10 py-5 rounded-full font-black text-lg transition-all hover:scale-105 shadow-xl"
                        >
                            Visitar useondasup.com.br
                            <ArrowRight weight="bold" />
                        </Link>
                    </div>

                    <div className="w-full lg:w-1/2 relative h-[500px] md:h-[650px] rounded-[3.5rem] overflow-hidden shadow-2xl border border-white/5" data-aos="fade-left">
                        <Image src="/moda.jpeg" alt="Lifestyle Moda OndaSup" fill className="object-cover" />
                    </div>
                </div>
            </section>

        </main>
    )
}