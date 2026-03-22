'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
    Heart, 
    Users, 
    Medal, 
    SealCheck, 
    Star, 
    ArrowRight
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

// 📸 LISTA DE FOTOS PARA O SLIDER DO TOPO
const heroImages = [
    '/filhosdanacao3.webp', 
    '/filhosdanacao.webp', 
    '/filhosNacao2.jpeg', 
]

export default function ProjetoPage() {
    const containerRef = useRef<HTMLElement>(null)
    const countersRef = useRef<HTMLDivElement>(null)
    const [currentImage, setCurrentImage] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % heroImages.length)
        }, 5000) 
        return () => clearInterval(timer)
    }, [])

    useEffect(() => {
        AOS.init({ duration: 1000, once: true, easing: 'ease-out-cubic' })
    }, [])

    useGSAP(() => {
        // Efeito Parallax
        gsap.to('.hero-parallax-container', {
            yPercent: 20,
            ease: "none",
            scrollTrigger: {
                trigger: '.hero-container',
                start: "top top",
                end: "bottom top",
                scrub: true
            }
        })

        // Animação dos Contadores do Topo
        const counters = gsap.utils.toArray('.contador-projeto')
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
                            snap: { innerText: 1 }, 
                            onUpdate: function() {
                                // Formata e adiciona "+" (exceto para o ano de fundação)
                                const val = Math.ceil(Number(this.targets()[0].innerText))
                                if(target === 2017) {
                                    counter.innerHTML = val.toString()
                                } else {
                                    counter.innerHTML = "+" + val.toLocaleString('pt-BR')
                                }
                            }
                        }
                    )
                }
            })
        })
    }, { scope: containerRef })

    return (
        <main ref={containerRef} className="min-h-screen bg-zinc-950 text-white pt-20 overflow-hidden font-sans">
            
            {/* 1. HERO SECTION: FILHOS DA NAÇÃO */}
            <section className="hero-container relative w-full min-h-[95vh] flex items-center justify-center overflow-hidden border-b border-white/10">
                
                <div className="hero-parallax-container absolute inset-0 z-0 bg-black h-[120%] -top-[10%]">
                    {heroImages.map((img, index) => (
                        <Image 
                            key={img}
                            src={img} 
                            alt={`Projeto Filhos da Nação - Imagem ${index + 1}`}
                            fill
                            priority={index === 0} 
                            className={`
                                object-cover transition-opacity duration-[2000ms] ease-in-out
                                ${index === currentImage ? 'opacity-50' : 'opacity-0'}
                            `}
                        />
                    ))}
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent pointer-events-none" />
                </div>

                <div className="relative z-10 container mx-auto px-4 md:px-8 pt-28 pb-20">
                    <div className="max-w-4xl" data-aos="fade-up">
                        
                        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-600/10 border border-blue-600/30 text-blue-500 text-xs font-bold tracking-widest uppercase mb-8 backdrop-blur-md hover:bg-blue-600/20 transition-colors">
                            <Heart weight="fill" className="w-4 h-4" />
                            Projeto Principal
                        </div>

                        {/* 📸 LOGO PURA E NÍTIDA */}
                        <div className="relative w-40 h-40 md:w-48 md:h-48 mb-8 transition-transform duration-500 hover:scale-105 bg-white rounded-2xl p-4 shadow-xl">
                            <Image 
                                src="/fdnlogo.png" 
                                alt="Logo Oficial Filhos da Nação" 
                                fill 
                                priority
                                className="object-contain" 
                            />
                        </div>

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.95] mb-6 drop-shadow-2xl">
                            Filhos da <span className="text-blue-500">Nação</span>
                        </h1>
                        <h2 className="text-2xl md:text-3xl text-zinc-300 font-light mb-8 max-w-2xl leading-snug">
                            Remoterapia para crianças e adolescentes em acolhimento institucional.
                        </h2>
                        <p className="text-lg text-zinc-400 leading-relaxed max-w-3xl mb-12 font-light">
                            Uma tecnologia social que integra, resgata sonhos e cria oportunidades de futuro. Por meio da prática do stand up paddle e da canoa havaiana, combinados com os princípios da psicologia junguiana, trabalhamos questões emocionais como autoestima, confiança, superação de medos e fortalecimento de vínculos.
                        </p>
                        
                        {/* Números de Impacto - Refatorado com GSAP */}
                        <div ref={countersRef} className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/10 mb-12">
                            <div>
                                <p className="text-4xl font-black text-white font-mono">
                                    <span className="contador-projeto" data-target="750">0</span>
                                </p>
                                <p className="text-sm text-zinc-500 uppercase tracking-widest mt-1">Crianças Atendidas</p>
                            </div>
                            <div>
                                <p className="text-4xl font-black text-blue-500 font-mono">
                                    <span className="contador-projeto" data-target="4500">0</span>
                                </p>
                                <p className="text-sm text-zinc-500 uppercase tracking-widest mt-1">Pessoas Impactadas</p>
                            </div>
                            <div>
                                <p className="text-4xl font-black text-blue-400 font-mono">
                                    <span className="contador-projeto" data-target="250">0</span>
                                </p>
                                <p className="text-sm text-zinc-500 uppercase tracking-widest mt-1">Voluntários</p>
                            </div>
                            <div>
                                <p className="text-4xl font-black text-white font-mono">
                                    <span className="contador-projeto" data-target="2017">0</span>
                                </p>
                                <p className="text-sm text-zinc-500 uppercase tracking-widest mt-1">Fundação</p>
                            </div>
                        </div>

                        <div className="flex gap-2">
                            {heroImages.map((_, index) => (
                                <div 
                                    key={index} 
                                    className={`h-1.5 rounded-full transition-all duration-500 ${index === currentImage ? 'w-8 bg-blue-600' : 'w-2 bg-white/20'}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. OUTRAS ONDAS DE SUPERAÇÃO (Cards com FOTOS MAIORES E MODERNAS) */}
            <section id="outros-projetos" className="py-24 px-4 md:px-8 bg-zinc-950 border-b border-white/5 relative overflow-hidden">
                {/* Efeito de luz sutil no fundo */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-16 md:mb-20" data-aos="fade-down">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-6">
                            Ondas de <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Superação</span>
                        </h2>
                        <p className="text-lg md:text-xl text-zinc-400 font-light max-w-2xl mx-auto leading-relaxed">
                            Além do nosso projeto principal, desenvolvemos iniciativas que conectam experiência em campo, inovação e transformação.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
                        {/* Remo do Mundo */}
                        <div className="bg-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-6 lg:p-8 hover:bg-zinc-900/80 transition-all duration-500 hover:-translate-y-2 group hover:border-blue-500/40 shadow-2xl flex flex-col" data-aos="fade-up" data-aos-delay="100">
                            {/* IMAGEM GRANDE NO CABEÇALHO DO CARD */}
                            <div className="relative w-full h-56 md:h-64 rounded-[1.5rem] overflow-hidden mb-8 border border-white/5 group-hover:border-blue-500/30 transition-all duration-500 shadow-lg shrink-0">
                                <Image 
                                    src="/pesquisa.jpeg" 
                                    alt="Remo do Mundo" 
                                    fill 
                                    className="object-cover group-hover:scale-110 transition-transform duration-700" 
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500" />
                            </div>
                            
                            <h3 className="text-2xl lg:text-3xl font-black mb-4 text-white tracking-tight group-hover:text-blue-400 transition-colors">Remo do Mundo</h3>
                            <p className="text-zinc-400 font-light leading-relaxed text-sm lg:text-base flex-grow">
                                Promove a integração de indígenas venezuelanos da etnia Warao (o "povo da canoa"). Utilizamos a canoa havaiana como resgate cultural, inclusão social e fortalecimento comunitário. Projeto viabilizado com a ONU Migração.
                            </p>
                        </div>

                        {/* Movimento Sou Onda */}
                        <div className="bg-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-6 lg:p-8 hover:bg-zinc-900/80 transition-all duration-500 hover:-translate-y-2 group hover:border-cyan-400/40 shadow-2xl flex flex-col" data-aos="fade-up" data-aos-delay="200">
                            {/* IMAGEM GRANDE NO CABEÇALHO DO CARD */}
                            <div className="relative w-full h-56 md:h-64 rounded-[1.5rem] overflow-hidden mb-8 border border-white/5 group-hover:border-cyan-400/30 transition-all duration-500 shadow-lg shrink-0">
                                <Image 
                                    src="/souonda.jpeg" 
                                    alt="Movimento Sou Onda" 
                                    fill 
                                    className="object-cover group-hover:scale-110 transition-transform duration-700" 
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500" />
                            </div>
                            
                            <h3 className="text-2xl lg:text-3xl font-black mb-4 text-white tracking-tight group-hover:text-cyan-400 transition-colors">Movimento Sou Onda</h3>
                            <p className="text-zinc-400 font-light leading-relaxed text-sm lg:text-base flex-grow">
                                Círculo feminino que une empoderamento, canoa havaiana e Arte Intuitiva (2024). Um momento de autoconhecimento e cura profunda com a natureza, em parceria com a Casa Ponte e a artista Christiane Atta.
                            </p>
                        </div>

                        {/* RemoDay Empresarial */}
                        <div className="bg-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-6 lg:p-8 hover:bg-zinc-900/80 transition-all duration-500 hover:-translate-y-2 group hover:border-blue-600/40 shadow-2xl flex flex-col" data-aos="fade-up" data-aos-delay="300">
                            {/* IMAGEM GRANDE NO CABEÇALHO DO CARD */}
                            <div className="relative w-full h-56 md:h-64 rounded-[1.5rem] overflow-hidden mb-8 border border-white/5 group-hover:border-blue-600/30 transition-all duration-500 shadow-lg shrink-0">
                                <Image 
                                    src="/remoday.jpeg" 
                                    alt="RemoDay Empresarial" 
                                    fill 
                                    className="object-cover group-hover:scale-110 transition-transform duration-700" 
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500" />
                            </div>
                            
                            <h3 className="text-2xl lg:text-3xl font-black mb-4 text-white tracking-tight group-hover:text-blue-500 transition-colors">RemoDay Empresarial</h3>
                            <p className="text-zinc-400 font-light leading-relaxed text-sm lg:text-base flex-grow">
                                Metodologia de team building 'SyncPaddle'. Combina remo com Psicologia Analítica para melhorar comunicação, engajamento e clima organizacional. Mais de 20 empresas do DF já viveram essa experiência.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. RECONHECIMENTOS E PRÊMIOS */}
            <section id="reconhecimentos" className="py-24 px-4 md:px-8 bg-gradient-to-b from-zinc-950 to-zinc-900 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-700/20 blur-[150px] rounded-full pointer-events-none" />

                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-xs font-bold tracking-widest uppercase mb-4 shadow-sm">
                            <Medal weight="fill" className="w-4 h-4" />
                            Excelência e Validação
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">Reconhecimento de Impacto</h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="p-8 md:p-10 bg-zinc-950 border border-white/10 rounded-[2.5rem] shadow-2xl flex flex-col md:flex-row gap-8 items-start group hover:border-yellow-500/20 transition-colors" data-aos="fade-right">
                            <div className="shrink-0 w-20 h-20 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shadow-[0_0_30px_rgba(250,204,21,0.3)] group-hover:scale-110 transition-transform">
                                <Star weight="fill" className="w-10 h-10 text-white" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">Prêmio Sebrae Mulher de Negócios 2024</h3>
                                <p className="text-zinc-400 font-light leading-relaxed">
                                    <strong className="text-zinc-200">1º lugar na Categoria Pequenos Negócios.</strong> Conquistado por Gabriela Speziali, validando o trabalho realizado através da RemoTerapia e projetos transformadores que geram oportunidades reais nas comunidades.
                                </p>
                            </div>
                        </div>

                        <div className="p-8 md:p-10 bg-zinc-950 border border-white/10 rounded-[2.5rem] shadow-2xl flex flex-col md:flex-row gap-8 items-start group hover:border-blue-600/30 transition-colors" data-aos="fade-left">
                            <div className="shrink-0 w-20 h-20 rounded-full bg-gradient-to-br from-blue-700 to-blue-500 flex items-center justify-center shadow-[0_0_30px_rgba(37,99,235,0.3)] group-hover:scale-110 transition-transform">
                                <SealCheck weight="fill" className="w-10 h-10 text-white" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">Selo Impact Innovation Latam 2024</h3>
                                <p className="text-zinc-400 font-light leading-relaxed">
                                    Uma das 98 startups reconhecidas (entre 663 candidatas) pela <strong className="text-zinc-200">Fundação Dom Cabral</strong>. O selo valida nossa capacidade de criar soluções inovadoras que promovem bem-estar, inclusão e cidadania na América Latina.
                                </p>
                            </div>
                        </div>

                        <div className="lg:col-span-2 mt-8 grid grid-cols-1 md:grid-cols-3 gap-6" data-aos="fade-up">
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-center gap-4 hover:bg-white/10 transition-colors">
                                <Medal className="w-8 h-8 text-blue-500 shrink-0" />
                                <span className="text-sm font-medium text-zinc-300">Embaixadora Brazil Conference 2026 (Impacto Social)</span>
                            </div>
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-center gap-4 hover:bg-white/10 transition-colors">
                                <Users className="w-8 h-8 text-blue-500 shrink-0" />
                                <span className="text-sm font-medium text-zinc-300">Parcerias Institucionais firmadas com o TJDFT</span>
                            </div>
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-center gap-4 hover:bg-white/10 transition-colors">
                                <SealCheck className="w-8 h-8 text-blue-500 shrink-0" />
                                <span className="text-sm font-medium text-zinc-300">Selo Social 2026 (Comprovado)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. VÍDEO FINAL (SEM BOTÃO DE PLAY) */}
            <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden border-t border-white/10 flex items-center justify-center">
                <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                    src="/bg.mp4" 
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-zinc-950/60 pointer-events-none" />
                
                <div className="relative z-10 text-center px-4" data-aos="zoom-in">
                    <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4 drop-shadow-lg">
                        Transformação em <span className="text-blue-500">Movimento</span>
                    </h2>
                    <p className="text-lg md:text-xl text-zinc-300 font-light max-w-2xl mx-auto drop-shadow-md">
                        Acompanhe o impacto real fluindo todos os dias nas águas e nas vidas que tocamos.
                    </p>
                </div>
            </section>

            {/* CTA PARA PESQUISA */}
            <section className="py-24 px-4 text-center bg-zinc-950 relative z-20">
                <p className="text-zinc-400 mb-8 font-light text-lg">Quer entender a fundo a ciência e os dados por trás do nosso impacto?</p>
                <Link href="/pesquisa">
                    <button className="inline-flex items-center gap-3 px-10 py-5 bg-blue-700 hover:bg-blue-600 text-white rounded-full font-black text-lg transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(29,78,216,0.5)]">
                        Conhecer Nossas Pesquisas
                        <ArrowRight weight="bold" className="w-5 h-5" />
                    </button>
                </Link>
            </section>

        </main>
    )
}