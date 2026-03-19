'use client'

import React, { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { WhatsappLogoIcon, CheckCircle, ArrowRight, Medal } from "@phosphor-icons/react/dist/ssr"
import AOS from 'aos'
import 'aos/dist/aos.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const impactPhrases = [
    "Transformando desafios em conquistas.",
    "Fortalecendo trajetórias de vida.",
    "Esporte como ferramenta de pertencimento.",
    "Transformando o impossível em possível.",
    "Gerando impacto e novas oportunidades."
];

export default function Hero() {
    const sectionRef = useRef(null)
    const bgRef = useRef(null)

    // Estados para o efeito de digitação (Typewriter)
    const [text, setText] = useState("");
    const [wordIndex, setWordIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    // Efeito de Parallax com GSAP e AOS
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            easing: 'ease-in-out',
        })

        gsap.registerPlugin(ScrollTrigger)

        const ctx = gsap.context(() => {
            gsap.to(bgRef.current, {
                y: "15%",
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true
                }
            })
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    // Efeito de Digitação (React State)
    useEffect(() => {
        const currentWord = impactPhrases[wordIndex];

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                // Escrevendo
                setText(currentWord.substring(0, charIndex + 1));
                setCharIndex(charIndex + 1);

                // Quando termina de escrever a frase inteira
                if (charIndex + 1 === currentWord.length) {
                    setTimeout(() => setIsDeleting(true), 1200); // Pausa de 1.2s para leitura
                }
            } else {
                // Apagando
                setText(currentWord.substring(0, charIndex - 1));
                setCharIndex(charIndex - 1);

                // Quando termina de apagar tudo
                if (charIndex - 1 === 0) {
                    setIsDeleting(false);
                    setWordIndex((wordIndex + 1) % impactPhrases.length); // Pula para a próxima frase
                }
            }
        }, isDeleting ? 50 : 100); // 100ms para escrever, 50ms para apagar

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, wordIndex]);

    const differentials = [
        "Metodologia própria em Remoterapia",
        "Atuação direta em campo",
        "Produção de conhecimento",
        "Comunicação estratégica"
    ]

    return (
        <section ref={sectionRef} id="inicio" className="relative w-full h-[85vh] md:h-screen min-h-[750px] flex items-center justify-center lg:justify-start overflow-hidden">

            {/* Background Parallax */}
            <div ref={bgRef} className="absolute inset-[-20%] z-0 bg-slate-900">
                <Image
                    src="/ondaHero.jpeg"
                    alt="OndaSup - Esporte, Pesquisa e Impacto Social"
                    fill
                    priority
                    quality={90}
                    className="object-cover object-center transform scale-105"
                />
                
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
            </div>

            {/* Conteúdo Principal */}
            <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 w-full pt-32 md:pt-40 lg:pt-20">
                <div className="max-w-3xl text-white space-y-6 md:space-y-8">
                    
                    {/* Badge do Prêmio Sebrae */}
                    <div 
                        data-aos="zoom-in"
                        data-aos-delay="200"
                        className="inline-flex items-center gap-3 px-4 py-2 md:px-5 md:py-2.5 rounded-2xl bg-gradient-to-r from-amber-500/10 via-yellow-400/10 to-amber-500/10 border border-amber-400/30 backdrop-blur-md shadow-[0_0_20px_rgba(251,191,36,0.15)] w-fit"
                    >
                        <div className="relative flex items-center justify-center">
                            <div className="absolute inset-0 bg-amber-400 blur-md opacity-60 rounded-full animate-pulse"></div>
                            <Medal weight="duotone" className="relative z-10 text-amber-400 w-6 h-6 md:w-8 md:h-8 drop-shadow-lg" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-amber-300 text-[9px] md:text-[11px] font-bold tracking-widest uppercase leading-none mb-1">
                                Reconhecimento 2024
                            </span>
                            <span className="text-amber-100 text-xs md:text-sm font-semibold leading-none">
                                1º Lugar Prêmio Sebrae Mulher de Negócios
                            </span>
                        </div>
                    </div>

                    {/* Título com Digitação via React State */}
                    <div className="space-y-4">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] md:leading-tight min-h-[120px] sm:min-h-[140px] md:min-h-[160px] lg:min-h-[180px]">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-300 to-teal-200 drop-shadow-sm">
                                {text}
                            </span>
                            {/* Cursor piscando acompanhando o texto */}
                            <span className="animate-pulse text-teal-400 font-light ml-1 drop-shadow-lg">|</span>
                        </h1>
                        
                        <p data-aos="fade-up" data-aos-delay="400" className="text-base sm:text-lg md:text-xl text-slate-200 max-w-2xl font-light leading-relaxed">
                            Plataforma brasileira de soluções em impacto social que integra esporte, produção de conhecimento e comunicação para ampliar oportunidades, fortalecer trajetórias de vida e abrir caminhos para autonomia e inserção social.
                        </p>
                    </div>

                    {/* Lista de Diferenciais */}
                    <ul 
                        className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 pt-2"
                        data-aos="fade-up" 
                        data-aos-delay="600"
                    >
                        {differentials.map((item, index) => (
                            <li key={index} className="flex items-start md:items-center gap-3">
                                <CheckCircle
                                    weight="fill"
                                    className="text-teal-400 w-5 h-5 flex-shrink-0 mt-0.5 md:mt-0"
                                />
                                <span className="text-sm md:text-base font-medium text-slate-100">
                                    {item}
                                </span>
                            </li>
                        ))}
                    </ul>

                    {/* Botões de Ação */}
                    <div className="pt-6 flex flex-col sm:flex-row gap-4 w-full sm:w-auto" data-aos="fade-up" data-aos-delay="800">
                        <Link href="#metodologia" className="w-full sm:w-auto">
                            <button className="w-full sm:w-auto flex items-center justify-center gap-2 h-14 px-8 bg-teal-600 hover:bg-teal-500 text-white rounded-xl text-base font-semibold shadow-lg shadow-teal-900/20 transition-all hover:-translate-y-1 active:scale-95">
                                Conheça a Metodologia
                                <ArrowRight weight="bold" className="w-5 h-5" />
                            </button>
                        </Link>

                        <div className="hidden sm:block">
                            <WhatsAppButton />
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="sm:hidden fixed bottom-6 right-6 z-50"
                data-aos="zoom-in"
                data-aos-delay="1000"
            >
                <WhatsAppButton isMobile />
            </div>
        </section>
    )
}

function WhatsAppButton({ isMobile = false }: { isMobile?: boolean }) {
    const whatsappNumber = "556181100906"; 
    const whatsappText = "Olá! Vim pelo site da OndaSup e gostaria de conversar sobre os projetos de impacto e soluções corporativas.";

    return (
        <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappText)}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`
                flex items-center justify-center gap-2
                ${isMobile
                    ? 'w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1ebd5b] shadow-xl shadow-green-900/30'
                    : 'h-14 px-8 rounded-xl bg-slate-800/60 hover:bg-slate-800 border border-slate-600/50 backdrop-blur-md'
                }
                text-white font-semibold transition-all hover:-translate-y-1 active:scale-95
            `}
            aria-label="Fale conosco pelo WhatsApp"
        >
            <WhatsappLogoIcon weight={isMobile ? "fill" : "regular"} className={isMobile ? "w-8 h-8" : "w-6 h-6 text-[#25D366]"} />
            {!isMobile && "Fale com a gente"}
        </a>
    )
}