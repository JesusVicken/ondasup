'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Image from 'next/image'
import {
    InstagramLogo,
    FacebookLogo,
    Phone,
    MapPin,
    Clock,
    WhatsappLogo,
    Users,
    ShieldCheck,
    Star,
    Medal
} from '@phosphor-icons/react'

export default function AboutStudio() {
    const sectionRef = useRef(null)
    const textRef = useRef(null)
    const whatsappRef = useRef<HTMLAnchorElement>(null)
    const [activeVideo, setActiveVideo] = useState(0)

    const studioVideos = [
        "/bgstudio.mp4",
        "/studio4.mp4",
        "/studio5.mp4"
    ]

    const studioFeatures = [
        {
            icon: <ShieldCheck size={32} weight="fill" />,
            title: "Ambiente Estéril",
            description: "Seguimos rigorosos protocolos de higiene e esterilização"
        },
        {
            icon: <Medal size={32} weight="fill" />,
            title: "Artistas Qualificados",
            description: "Profissionais com anos de experiência no mercado"
        },
        {
            icon: <Users size={32} weight="fill" />,
            title: "Atendimento Personalizado",
            description: "Cada cliente recebe atenção exclusiva e dedicada"
        }
    ]

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100
        })

        const ctx = gsap.context(() => {
            gsap.fromTo(
                textRef.current,
                { opacity: 0, y: 60 },
                { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out', delay: 0.3 }
            )

            if (whatsappRef.current) {
                gsap.fromTo(
                    whatsappRef.current,
                    { scale: 0, opacity: 0 },
                    { scale: 1, opacity: 1, duration: 0.8, ease: 'back.out(1.7)', delay: 1.2 }
                )
            }

            // Animação para os cards de features
            gsap.fromTo(
                '.feature-card',
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.2,
                    delay: 0.8,
                    ease: 'power2.out'
                }
            )

            // Animação para a logo
            gsap.fromTo(
                '.studio-logo',
                { opacity: 0, scale: 0.8 },
                { opacity: 1, scale: 1, duration: 1, ease: 'back.out(1.7)', delay: 0.5 }
            )
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    const nextVideo = () => {
        setActiveVideo((prev) => (prev + 1) % studioVideos.length)
    }

    const prevVideo = () => {
        setActiveVideo((prev) => (prev - 1 + studioVideos.length) % studioVideos.length)
    }

    return (
        <section
            ref={sectionRef}
            id="about-studio"
            className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gray-900 py-20"
        >
            {/* Vídeo de fundo principal */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover opacity-40"
                src={studioVideos[activeVideo]}
                autoPlay
                loop
                muted
                playsInline
                key={activeVideo}
            />

            {/* Overlay gradiente dark */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/60 to-gray-900/80 z-10"></div>

            {/* Conteúdo principal */}
            <div className="relative z-20 w-full max-w-7xl px-4 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Coluna esquerda - Texto e informações */}
                    <div
                        ref={textRef}
                        className="text-white space-y-8"
                    >
                        <div data-aos="fade-right">
                            {/* Logo e Título */}
                            <div className="flex flex-col items-center lg:items-start mb-8">
                                <div className="studio-logo mb-6">
                                    <div className="relative w-32 h-32 lg:w-40 lg:h-40">
                                        <Image
                                            src="/4.png"
                                            alt="Arruas Tattoo Studio"
                                            fill
                                            className="object-contain drop-shadow-2xl"
                                            priority
                                        />
                                    </div>
                                </div>
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center lg:text-left bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">
                                    Sobre o Estúdio
                                </h2>
                                <p className="text-lg text-gray-400 text-center lg:text-left mt-2">
                                    Arruas Tattoo
                                </p>
                            </div>

                            <p className="text-lg md:text-xl leading-relaxed mb-6 text-gray-300">
                                No <strong className="text-white">Arruas Tattoo</strong>, acreditamos que tatuar é eternizar sentimentos.
                                Cada traço conta uma história feita com arte, técnica e respeito absoluto.
                            </p>

                            <p className="text-lg md:text-xl leading-relaxed mb-8 text-gray-300">
                                Nosso espaço foi cuidadosamente projetado para proporcionar o máximo de conforto,
                                segurança e inspiração. Utilizamos apenas materiais de primeira linha e seguimos
                                rigorosos protocolos de higiene para garantir a melhor experiência.
                            </p>
                        </div>

                        {/* Cards de features */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                            {studioFeatures.map((feature, index) => (
                                <div
                                    key={index}
                                    className="feature-card bg-gray-800/80 backdrop-blur-sm rounded-lg p-4 border border-gray-700 hover:border-gray-500 transition-all duration-300 hover:bg-gray-800/90"
                                    data-aos="zoom-in"
                                    data-aos-delay={index * 200}
                                >
                                    <div className="text-gray-300 mb-2">
                                        {feature.icon}
                                    </div>
                                    <h3 className="font-semibold text-white mb-1 text-sm">
                                        {feature.title}
                                    </h3>
                                    <p className="text-xs text-gray-400">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Informações de contato */}
                        <div className="space-y-4 text-base md:text-lg" data-aos="fade-up">
                            <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-gray-600 transition-all">
                                <MapPin size={24} weight="fill" className="text-gray-300 flex-shrink-0" />
                                <div className="text-left">
                                    <p className="font-semibold text-white">Ed. Lê Quartier</p>
                                    <p className="text-gray-400 text-sm">
                                        Av. Pau Brasil, 10 - Sala 1708<br />
                                        Águas Claras, Brasília - DF<br />
                                        CEP: 71926-000
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-gray-600 transition-all">
                                <Phone size={24} weight="fill" className="text-gray-300 flex-shrink-0" />
                                <div className="text-left">
                                    <p className="font-semibold text-white">(61) 99566-8686</p>
                                    <p className="text-gray-400 text-sm">Atendimento por telefone e WhatsApp</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-gray-600 transition-all">
                                <Clock size={24} weight="fill" className="text-gray-300 flex-shrink-0" />
                                <div className="text-left">
                                    <p className="font-semibold text-white">Aberto 24 horas</p>
                                    <p className="text-gray-400 text-sm">Agendamento flexível para sua conveniência</p>
                                </div>
                            </div>
                        </div>

                        {/* Redes sociais */}
                        <div className="flex gap-6 mt-8" data-aos="fade-up">
                            <a
                                href="https://www.instagram.com/arruas_tattoo"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:scale-110 transition-all duration-300 bg-gray-800 hover:bg-gray-700 p-3 rounded-full shadow-lg border border-gray-600"
                            >
                                <InstagramLogo size={28} weight="fill" className="text-white" />
                            </a>

                            <a
                                href="https://www.facebook.com/arruastattoo?locale=pt_BR"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:scale-110 transition-all duration-300 bg-gray-800 hover:bg-gray-700 p-3 rounded-full shadow-lg border border-gray-600"
                            >
                                <FacebookLogo size={28} weight="fill" className="text-white" />
                            </a>
                        </div>
                    </div>

                    {/* Coluna direita - Controles de vídeo */}
                    <div className="space-y-6" data-aos="fade-left">
                        {/* Player de vídeo principal */}
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-800 border border-gray-700">
                            <video
                                className="w-full h-auto max-h-[500px] object-cover"
                                src={studioVideos[activeVideo]}
                                autoPlay
                                loop
                                muted
                                playsInline
                            />

                            {/* Controles de navegação */}
                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                                {studioVideos.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveVideo(index)}
                                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeVideo
                                            ? 'bg-white scale-125'
                                            : 'bg-gray-500 hover:bg-gray-400'
                                            }`}
                                    />
                                ))}
                            </div>

                            {/* Botões de navegação */}
                            <button
                                onClick={prevVideo}
                                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800/80 hover:bg-gray-700/80 text-white p-3 rounded-full transition-all duration-300 border border-gray-600"
                            >
                                ‹
                            </button>
                            <button
                                onClick={nextVideo}
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800/80 hover:bg-gray-700/80 text-white p-3 rounded-full transition-all duration-300 border border-gray-600"
                            >
                                ›
                            </button>
                        </div>

                        {/* Miniaturas dos vídeos */}
                        <div className="grid grid-cols-3 gap-3">
                            {studioVideos.map((video, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveVideo(index)}
                                    className={`relative rounded-lg overflow-hidden transition-all duration-300 border ${index === activeVideo
                                        ? 'border-white scale-105'
                                        : 'border-gray-600 opacity-60 hover:opacity-100 hover:scale-105'
                                        }`}
                                >
                                    <video
                                        className="w-full h-20 object-cover"
                                        src={video}
                                        muted
                                        playsInline
                                    />
                                    <div className="absolute inset-0 bg-black/40 hover:bg-black/20 transition-all duration-300" />
                                </button>
                            ))}
                        </div>

                        {/* Descrição do vídeo */}
                        <div className="text-center">
                            <p className="text-gray-400 text-sm">
                                {activeVideo === 0 && "Tour pelo nosso estúdio - Ambiente principal"}
                                {activeVideo === 1 && "Área de trabalho - Cabines individuais"}
                                {activeVideo === 2 && "Processo de esterilização - Segurança em primeiro lugar"}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Botão do WhatsApp flutuante
            <a
                ref={whatsappRef}
                href="https://wa.me/5561995668686"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-8 right-8 z-50 flex items-center gap-3 bg-gray-800 hover:bg-gray-700 text-white font-bold px-6 py-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-600"
            >
                <WhatsappLogo size={28} weight="fill" className="text-green-400" />
                <span className="hidden sm:inline">Agende pelo WhatsApp</span>
                <span className="inline sm:hidden">WhatsApp</span>
            </a> */}
        </section>
    )
}