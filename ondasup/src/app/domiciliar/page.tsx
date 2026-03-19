'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Image from 'next/image'
import { Play, SpeakerSimpleX, SpeakerSimpleHigh, InstagramLogo, WhatsappLogo, X, Pause, ArrowDown } from '@phosphor-icons/react'

gsap.registerPlugin(ScrollTrigger)

const portfolioMedia = [
    // Fotos
    { src: '/arruas-about.jpg', type: 'image', alt: 'Ricardo Arruas - Tatuador Profissional', category: 'Artista' },
    { src: '/tatoo1.jpeg', type: 'image', alt: 'Tatuagem Realista - Detalhe impressionante', category: 'Realismo' },
    { src: '/tatoo3.jpeg', type: 'image', alt: 'Tatuagem Realista - Traços precisos', category: 'Realismo' },
    { src: '/tatoo4.jpeg', type: 'image', alt: 'Realismo com sombras bem trabalhadas', category: 'Realismo' },
    { src: '/tatoo5.jpeg', type: 'image', alt: 'Tatuagem realista com profundidade 3D', category: 'Realismo' },
    { src: '/tatoo6.jpeg', type: 'image', alt: 'Tatuagem realista com profundidade 3D', category: 'Realismo' },
    { src: '/tatoo7.jpeg', type: 'image', alt: 'Tatuagem realista com profundidade 3D', category: 'Realismo' },

    // Vídeos
    { src: '/arruas1.mp4', type: 'video', alt: 'Processo de desenhos', category: 'Processo' },
    { src: '/arruas2.mp4', type: 'video', alt: 'Processo de tatuagem com cliente', category: 'Processo' },
    { src: '/arruas3.mp4', type: 'video', alt: 'Detalhe da técnica de hachura', category: 'Processo' },
    { src: '/arruas4.mp4', type: 'video', alt: 'Finalização de tatuagem', category: 'Processo' },
    { src: '/arruas5.mp4', type: 'video', alt: 'Realismo em tempo real', category: 'Processo' },
    { src: '/arruas6.mp4', type: 'video', alt: 'Ambiente do estúdio', category: 'Estúdio' },
    { src: '/arruas7.mp4', type: 'video', alt: 'Técnica avançada de Realismo', category: 'Processo' },
    { src: '/arruas8.mp4', type: 'video', alt: 'Processo criativo', category: 'Processo' },
    { src: '/arruas9.mp4', type: 'video', alt: 'Tatuagem realista detalhe', category: 'Processo' },
    { src: '/arruas10.mp4', type: 'video', alt: 'Workflow profissional', category: 'Processo' },
    { src: '/arruas11.mp4', type: 'video', alt: 'Detalhes de acabamento', category: 'Processo' },
    { src: '/arruas12.mp4', type: 'video', alt: 'Técnica de sombreamento', category: 'Processo' },
    { src: '/arruas13.mp4', type: 'video', alt: 'Processo de cicatrização', category: 'Processo' },
    { src: '/arruas14.mp4', type: 'video', alt: 'Demonstração de habilidade', category: 'Processo' },
    { src: '/arruas15.mp4', type: 'video', alt: 'Trabalho finalizado', category: 'Processo' },
    { src: '/arruas16.mp4', type: 'video', alt: 'Showreel - Melhores Momentos', category: 'Showreel' },
]

// Componente para o número animado
function AnimatedCounter({ target, suffix = '', duration = 2 }: { target: number, suffix?: string, duration?: number }) {
    const [count, setCount] = useState(0)
    const elementRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    let start = 0
                    const increment = target / (duration * 60)

                    const timer = setInterval(() => {
                        start += increment
                        if (start >= target) {
                            setCount(target)
                            clearInterval(timer)
                        } else {
                            setCount(Math.floor(start))
                        }
                    }, 1000 / 60)

                    return () => clearInterval(timer)
                }
            },
            { threshold: 0.3 }
        )

        if (elementRef.current) {
            observer.observe(elementRef.current)
        }

        return () => observer.disconnect()
    }, [target, duration])

    return (
        <div ref={elementRef} className="text-2xl md:text-3xl font-light text-white">
            {count}{suffix}
        </div>
    )
}

export default function PortfolioModerno() {
    const containerRef = useRef<HTMLDivElement>(null)
    const heroVideoRef = useRef<HTMLVideoElement>(null)
    const [selectedMedia, setSelectedMedia] = useState<any>(null)
    const [isMuted, setIsMuted] = useState(true)
    const [isHeroPlaying, setIsHeroPlaying] = useState(true)
    const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({})
    const [visibleVideos, setVisibleVideos] = useState<Set<string>>(new Set())

    const toggleHeroPlay = () => {
        if (heroVideoRef.current) {
            if (isHeroPlaying) {
                heroVideoRef.current.pause()
            } else {
                heroVideoRef.current.play()
            }
            setIsHeroPlaying(!isHeroPlaying)
        }
    }

    // Observer para vídeos visíveis
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    const videoId = entry.target.getAttribute('data-video-id')
                    if (!videoId) return

                    if (entry.isIntersecting) {
                        setVisibleVideos(prev => new Set(prev).add(videoId))
                    } else {
                        setVisibleVideos(prev => {
                            const newSet = new Set(prev)
                            newSet.delete(videoId)
                            return newSet
                        })
                    }
                })
            },
            { threshold: 0.3 }
        )

        Object.values(videoRefs.current).forEach(video => {
            if (video) observer.observe(video)
        })

        return () => observer.disconnect()
    }, [])

    // Controlar play/pause dos vídeos baseado na visibilidade
    useEffect(() => {
        Object.entries(videoRefs.current).forEach(([id, video]) => {
            if (video) {
                if (visibleVideos.has(id)) {
                    video.play().catch(() => { })
                } else {
                    video.pause()
                }
            }
        })
    }, [visibleVideos])

    useEffect(() => {
        if (!containerRef.current) return

        const cards = containerRef.current.querySelectorAll('.media-card')
        gsap.fromTo(cards,
            {
                opacity: 0,
                y: 40,
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.08,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                }
            }
        )
    }, [])

    const openModal = (media: any) => {
        setSelectedMedia(media)
        document.body.style.overflow = 'hidden'
    }

    const closeModal = () => {
        setSelectedMedia(null)
        document.body.style.overflow = 'unset'
    }

    const toggleMute = () => {
        setIsMuted(!isMuted)
    }

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Hero Section Compacta */}
            <section className="relative h-[60vh] md:h-[70vh] flex items-end pb-12 md:pb-16 overflow-hidden">
                <video
                    ref={heroVideoRef}
                    src="/arruas16.mp4"
                    className="absolute inset-0 w-full h-full object-cover"
                    autoPlay
                    muted={isMuted}
                    loop
                    playsInline
                />

                {/* Overlay gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

                {/* Conteúdo do Hero */}
                <div className="relative z-10 w-full px-4 max-w-4xl mx-auto">
                    <div className="flex items-end justify-between">
                        <div className="flex-1">
                            <h1 className="text-4xl md:text-5xl font-light mb-2 tracking-tight">
                                Ricardo Arruas
                            </h1>
                            <p className="text-gray-300 text-sm md:text-base font-light mb-6">
                                Tatuador • Especialista em Realismo
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <a
                                    href="https://wa.me/5561995668686"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-2 bg-white text-black text-sm font-medium rounded-full hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
                                >
                                    <WhatsappLogo size={16} />
                                    Agendar Tattoo
                                </a>
                                <button
                                    onClick={toggleMute}
                                    className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all"
                                >
                                    {isMuted ? <SpeakerSimpleX size={16} /> : <SpeakerSimpleHigh size={16} />}
                                </button>
                            </div>
                        </div>

                        {/* Logo */}
                        <div className="hidden md:block relative w-16 h-16 opacity-90">
                            <Image
                                src="/4.png"
                                alt="Arruas Tattoo"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="animate-bounce">
                        <ArrowDown size={20} className="text-white/60" />
                    </div>
                </div>
            </section>

            {/* Estatísticas Minimalistas */}
            <section className="py-8 md:py-12 border-b border-gray-800">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-2xl mx-auto">
                        {[
                            { number: 8, suffix: '+', label: 'Anos de Experiência', duration: 2 },
                            { number: 500, suffix: '+', label: 'Tatuagens Realizadas', duration: 2.5 },
                            { number: 100, suffix: '%', label: 'Satisfação do Cliente', duration: 1.5 },
                            { number: portfolioMedia.length, suffix: '', label: 'Projetos no Portfólio', duration: 3 }
                        ].map((stat, index) => (
                            <div key={index} className="text-center">
                                <AnimatedCounter
                                    target={stat.number}
                                    suffix={stat.suffix}
                                    duration={stat.duration}
                                />
                                <div className="text-gray-400 text-xs md:text-sm mt-1 font-light">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Grid de Portfólio */}
            <section ref={containerRef} className="py-12 md:py-16">
                <div className="container mx-auto px-4">
                    {/* Header do Grid */}
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-light mb-3">Portfólio</h2>
                        <p className="text-gray-400 max-w-md mx-auto text-sm">
                            Explore meus trabalhos em realismo e blackwork
                        </p>
                    </div>

                    {/* Grid Responsivo */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                        {portfolioMedia.map((media, index) => (
                            <div
                                key={`${media.src}-${index}`}
                                className="media-card group relative bg-gray-900 rounded-lg overflow-hidden cursor-pointer aspect-square"
                                onClick={() => openModal(media)}
                            >
                                {/* Overlay sutil */}
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 z-10"></div>

                                {/* Badge de categoria */}
                                <div className="absolute top-3 left-3 z-20">
                                    <span className="px-2 py-1 bg-black/80 backdrop-blur-sm text-white text-xs rounded-full">
                                        {media.category}
                                    </span>
                                </div>

                                {/* Ícone de play para vídeos */}
                                {media.type === 'video' && (
                                    <div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center">
                                            <Play size={20} weight="fill" className="text-black ml-0.5" />
                                        </div>
                                    </div>
                                )}

                                {/* Conteúdo de mídia */}
                                {media.type === 'image' ? (
                                    <div className="relative w-full h-full">
                                        <Image
                                            src={media.src}
                                            alt={media.alt}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                ) : (
                                    <video
                                        ref={el => {
                                            if (el) videoRefs.current[media.src] = el
                                        }}
                                        data-video-id={media.src}
                                        src={media.src}
                                        className="w-full h-full object-cover"
                                        muted={isMuted}
                                        loop
                                        playsInline
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modal */}
            {selectedMedia && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
                    onClick={closeModal}
                >
                    <div
                        className="relative max-w-4xl w-full max-h-[90vh]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={closeModal}
                            className="absolute -top-12 right-0 z-50 p-2 text-white/80 hover:text-white transition-colors"
                        >
                            <X size={24} />
                        </button>

                        {selectedMedia.type === 'video' && (
                            <div className="absolute top-4 left-4 z-50">
                                <button
                                    onClick={toggleMute}
                                    className="p-2 bg-black/50 backdrop-blur-sm rounded-full text-white/80 hover:text-white transition-colors"
                                >
                                    {isMuted ? <SpeakerSimpleX size={20} /> : <SpeakerSimpleHigh size={20} />}
                                </button>
                            </div>
                        )}

                        <div className="bg-gray-900 rounded-xl overflow-hidden">
                            {selectedMedia.type === 'image' ? (
                                <div className="relative w-full h-[70vh]">
                                    <Image
                                        src={selectedMedia.src}
                                        alt={selectedMedia.alt}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            ) : (
                                <video
                                    src={selectedMedia.src}
                                    className="w-full h-[70vh] object-contain"
                                    autoPlay
                                    muted={isMuted}
                                    controls
                                    loop
                                />
                            )}

                            <div className="p-6 border-t border-gray-800">
                                <div className="flex flex-wrap items-center gap-2 mb-3">
                                    <span className="px-2 py-1 bg-white text-black text-xs font-medium rounded">
                                        {selectedMedia.category}
                                    </span>
                                    <span className="text-gray-400 text-xs">
                                        {selectedMedia.type === 'video' ? 'Vídeo' : 'Imagem'}
                                    </span>
                                </div>
                                <p className="text-white text-sm">{selectedMedia.alt}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Footer Minimalista */}
            <footer className="border-t border-gray-800 py-12">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-4">
                            <div className="relative w-12 h-12">
                                <Image
                                    src="/4.png"
                                    alt="Arruas Tattoo"
                                    fill
                                    className="object-contain opacity-80"
                                />
                            </div>
                            <div>
                                <h3 className="text-lg font-light">Ricardo Arruas</h3>
                                <p className="text-gray-400 text-sm">Tatuador Profissional</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <a
                                href="https://www.instagram.com/arruas_tattoo"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
                            >
                                <InstagramLogo size={20} />
                            </a>
                            <a
                                href="https://wa.me/5561995668686"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-green-600 rounded-full hover:bg-green-700 transition-colors"
                            >
                                <WhatsappLogo size={20} />
                            </a>
                        </div>
                    </div>

                    <div className="text-center mt-8 pt-8 border-t border-gray-800">
                        <p className="text-gray-400 text-sm">
                            © {new Date().getFullYear()} Ricardo Arruas. Todos os direitos reservados.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    )
}