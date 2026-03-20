'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

// Animações
import AOS from 'aos'
import 'aos/dist/aos.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, useGSAP)
}

type ActionGallery = {
    title: string
    desc: string
    image: string
}

const impactActions: ActionGallery[] = [
    {
        title: 'Limpeza do Lago Paranoá',
        desc: 'Voluntários e jovens recolhendo resíduos das margens durante as vivências de SUP.',
        image: '/limparLago.jpeg',
    },
    {
        title: 'Filhos da Nação em Ação',
        desc: 'Esporte e educação ambiental caminhando juntos para formar cidadãos conscientes.',
        image: '/filhosNacao2.jpeg',
    },
    {
        title: 'Alinhamento ONU 2030',
        desc: 'Nossas práticas refletem o compromisso global com o desenvolvimento sustentável.',
        image: '/onu.png', // Lembre-se: use uma FOTO horizontal aqui para o parallax brilhar!
    },
    {
        title: 'Integração e Comunidade',
        desc: 'Familiares, amigos e a comunidade acolhida participando ativamente do ecossistema.',
        image: '/comunidade.jpeg',
    }
]

export default function AtuacaoPratica() {
    const containerRef = useRef<HTMLElement>(null)
    const [isIOS, setIsIOS] = useState(false)

    useEffect(() => {
        // Inicia AOS para o cabeçalho
        AOS.init({ duration: 1000, once: true, easing: 'ease-out-cubic' })

        // Detecta iOS (iPhone/iPad) para desativar o bg-fixed, pois o Safari mobile buga com ele
        if (typeof window !== 'undefined') {
            const ua = window.navigator.userAgent
            const iOS = /iPad|iPhone|iPod/.test(ua) || (navigator.userAgent.includes('Mac') && 'ontouchend' in document)
            setIsIOS(iOS)
        }
    }, [])

    useGSAP(() => {
        // --- Animações Existentes das Tarjas ---
        const textStripes = gsap.utils.toArray('.text-stripe')
        
        textStripes.forEach((stripe: any) => {
            gsap.from(stripe, {
                y: 50,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: stripe,
                    start: "top 85%", 
                }
            })
        })

        // --- 🔥 ANIMAÇÃO DO TICKER DE TEXTO (Mais rápida e longa) 🔥 ---
        const tickerWrapper = containerRef.current?.querySelector('.ticker-wrapper')
        
        if (tickerWrapper) {
            gsap.to(tickerWrapper, {
                // Como multiplicamos a frase várias vezes, mover -50% da largura total 
                // fará ela deslizar por uma distância enorme durante o scroll
                xPercent: -50, 
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current, // Atrelado ao scroll da seção inteira
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 0.5, // Reduzi o scrub de 1.5 para 0.5 para responder mais rápido ao scroll
                }
            });
        }

    }, { scope: containerRef })

    return (
        <section id="atuacao-pratica" ref={containerRef} className="w-full bg-zinc-950 text-white overflow-hidden flex flex-col">
            
            {/* Header de Introdução */}
            <div className="py-24 md:py-32 text-center px-4 relative z-10 bg-zinc-950 border-b border-white/5 shadow-2xl">
                <div data-aos="fade-down" className="max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-6">
                        Nossa Atuação na <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">Prática</span>
                    </h2>
                    <p className="text-lg md:text-2xl text-zinc-400 font-light leading-relaxed max-w-2xl mx-auto">
                        Mergulhe nos registros reais de transformação, impacto social e conexão com a natureza.
                    </p>
                </div>
            </div>

            {/* SEÇÕES ALTERNADAS (IMAGEM PARALLAX -> TARJA DE TEXTO) */}
            {impactActions.map((action, index) => (
                <div key={index} className="flex flex-col w-full relative">
                    
                    {/* 1. BLOCO DA IMAGEM: O EFEITO PARALLAX "JANELA" RAIZ (bg-fixed) */}
                    <div
                        className={`
                            ${isIOS ? 'relative h-[50vh] md:h-[70vh]' : 'relative h-[50vh] md:h-[70vh] bg-fixed'} 
                            w-full bg-cover bg-center
                        `}
                        style={{ backgroundImage: `url(${action.image})` }}
                    >
                        {/* Overlay super leve só para a foto não ficar "estourada", mas mantendo o foco nela */}
                        <div className="absolute inset-0 bg-zinc-950/20"></div>
                    </div>

                    {/* 2. TARJA DE TEXTO: Desliza por cima do Parallax separando as fotos */}
                    <div className="text-stripe relative z-20 w-full bg-zinc-950 py-16 md:py-24 px-6 md:px-12 lg:px-20 border-t border-b border-white/5 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
                        
                        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center gap-6 md:gap-16">
                            
                            {/* Número Gigante Estilizado (Vazado) */}
                            <div className="shrink-0 flex items-center justify-center">
                                <span className="text-7xl md:text-8xl lg:text-9xl font-black text-transparent opacity-80" style={{ WebkitTextStroke: '2px #2dd4bf' /* teal-400 */ }}>
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                            </div>

                            {/* Título e Descrição */}
                            <div className="flex-grow">
                                <h3 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight text-white drop-shadow-lg">
                                    {action.title}
                                </h3>
                                <p className="text-lg md:text-2xl text-zinc-300 font-light leading-relaxed max-w-3xl">
                                    {action.desc}
                                </p>
                            </div>

                            {/* Detalhe de Design (Linha colorida para telas grandes) */}
                            <div className="hidden lg:block shrink-0 w-[15%] h-[2px] bg-gradient-to-r from-teal-500 to-transparent opacity-50"></div>
                        </div>
                    </div>

                </div>
            ))}

            {/* 🔥 TICKER DE TEXTO FINALIZANDO O COMPONENTE 🔥 */}
            <div className="w-full bg-zinc-950 py-8 md:py-12 border-b border-white/5 overflow-hidden relative z-20 shadow-2xl">
                {/* O w-max é vital aqui para garantir que a div tenha o tamanho real do texto todo */}
                <div className="ticker-wrapper flex whitespace-nowrap w-max">
                    {/* Repetimos a frase 10 vezes para garantir que nunca falte texto na tela e o deslize seja longo */}
                    {[...Array(10)].map((_, i) => (
                        <span 
                            key={i} 
                            className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white/80 px-8 md:px-12"
                        >
                            Aumentando o Impacto Social: Juntos Somos Mais Fortes
                        </span>
                    ))}
                </div>
            </div>
            
        </section>
    )
}