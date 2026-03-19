'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
    WhatsappLogo,
    MapPin,
    Envelope,
    InstagramLogo,
    FacebookLogo,
    LinkedinLogo,
    TiktokLogo,
    PaperPlaneTilt,
    Waves // Importação corrigida aqui
} from '@phosphor-icons/react/dist/ssr'

// Importações de Animação
import AOS from 'aos'
import 'aos/dist/aos.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, useGSAP)
}

export default function ContactOndaSup() {
    const containerRef = useRef<HTMLElement>(null)
    const contentRef = useRef<HTMLDivElement>(null)

    const whatsappNumber = '556199791925'
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Olá! Vim pelo site da OndaSup.')}`

    const socialLinks = [
        { name: 'Instagram', url: 'https://instagram.com/ondasup', icon: <InstagramLogo weight="fill" className="w-8 h-8" /> },
        { name: 'LinkedIn', url: 'https://www.linkedin.com/company/ondasup_esportes', icon: <LinkedinLogo weight="fill" className="w-8 h-8" /> },
        { name: 'TikTok', url: 'https://www.tiktok.com/@ondasup', icon: <TiktokLogo weight="fill" className="w-8 h-8" /> },
        { name: 'Facebook', url: 'https://www.facebook.com/ondasup', icon: <FacebookLogo weight="fill" className="w-8 h-8" /> },
    ]

    useEffect(() => {
        AOS.init({ duration: 800, once: true, easing: 'ease-out-cubic' })
    }, [])

    useGSAP(() => {
        const cards = gsap.utils.toArray('.contact-card')
        const socials = gsap.utils.toArray('.social-icon')

        gsap.set([...cards, ...socials], { opacity: 0, y: 40 })

        ScrollTrigger.create({
            trigger: contentRef.current,
            start: "top 80%",
            onEnter: () => {
                gsap.to(cards, { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: "power3.out" })
                gsap.to(socials, { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, delay: 0.3, ease: "back.out(1.5)" })
            }
        })
    }, { scope: containerRef })

    return (
        <section id="contato" ref={containerRef} className="relative bg-zinc-950 overflow-hidden text-white">
            
            {/* 🔥 BACKGROUND EM VÍDEO (IMERSÃO TOTAL) 🔥 */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-40"
                >
                    {/* Recomendo um vídeo de ondas em câmera lenta em public/video-ondas.mp4 */}
                    <source src="/Bg123.mp4" type="video/mp4" /> 
                </video>
                {/* Overlay de gradiente para garantir que o texto branco seja legível */}
                <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/90 via-zinc-950/50 to-zinc-950" />
            </div>

            <div className="container mx-auto px-4 md:px-8 pt-24 pb-16 relative z-10" ref={contentRef}>
                
                <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-down">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/20 border border-teal-500/30 text-teal-300 text-sm font-semibold tracking-wide uppercase mb-4 backdrop-blur-md">
                        <PaperPlaneTilt weight="duotone" className="w-5 h-5" />
                        Fale Conosco
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
                        Conecte-se com a <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300">OndaSup</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                    
                    {/* COLUNA ESQUERDA: CONTATOS */}
                    <div className="lg:col-span-7 flex flex-col gap-4">
                        <a href={whatsappLink} target="_blank" className="contact-card group bg-white/5 hover:bg-white/10 backdrop-blur-xl border border-white/10 p-6 md:p-8 rounded-3xl transition-all duration-300 flex items-center gap-6">
                            <div className="w-14 h-14 rounded-2xl bg-green-500/20 flex items-center justify-center group-hover:bg-green-500 transition-all">
                                <WhatsappLogo weight="fill" className="w-8 h-8 text-green-400 group-hover:text-white" />
                            </div>
                            <div>
                                <p className="text-teal-200/60 text-xs uppercase font-bold tracking-widest">WhatsApp</p>
                                <p className="text-white text-xl md:text-2xl font-bold">+55 61 9979-1925</p>
                            </div>
                        </a>

                        <div className="contact-card group bg-white/5 backdrop-blur-xl border border-white/10 p-6 md:p-8 rounded-3xl flex items-center gap-6">
                            <div className="w-14 h-14 rounded-2xl bg-teal-500/20 flex items-center justify-center">
                                <MapPin weight="fill" className="w-8 h-8 text-teal-400" />
                            </div>
                            <div>
                                <p className="text-teal-200/60 text-xs uppercase font-bold tracking-widest">Base OndaSup</p>
                                <p className="text-white text-lg font-bold">Clube ASCADE - Setor de Clubes Sul, Brasília - DF</p>
                            </div>
                        </div>
                    </div>

                    {/* COLUNA DIREITA: LOGO E REDES SOCIAIS */}
                    <div className="lg:col-span-5 flex flex-col justify-center items-center bg-gradient-to-br from-teal-900/40 to-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-10 relative overflow-hidden" data-aos="fade-left">
                        <Waves weight="thin" className="absolute -right-10 -bottom-10 w-64 h-64 text-teal-500/10 rotate-12" />
                        
                        <div className="relative w-48 h-48 mb-8 hover:scale-110 transition-transform duration-500">
                            <Image
                                src="/ondasupLogo.png" 
                                alt="OndaSup Logo"
                                fill
                                sizes="192px"
                                priority
                                className="object-contain"
                            />
                        </div>

                        <div className="flex gap-4">
                            {socialLinks.map((social) => (
                                <a key={social.name} href={social.url} target="_blank" className="social-icon flex items-center justify-center w-14 h-14 bg-white/5 hover:bg-teal-500 border border-white/10 rounded-2xl text-teal-300 hover:text-white transition-all shadow-lg">
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* MAPA GOOGLE EMBED - FOCO EXATO NO CLUBE ASCADE */}
            <div className="relative w-full h-[450px] mt-12 overflow-hidden border-t border-white/10">
                <iframe
                    title="ASCADE Brasília - OndaSup"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.749001372583!2d-47.8540899!3d-15.8171928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3b26601b0f51%3A0xe54e6097d74f286b!2sAscade!5e0!3m2!1spt-BR!2sbr!4v1710871234567!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="100%"
                    loading="lazy"
                    style={{ border: 0 }}
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                
                {/* PIN FLUTUANTE (Destaque Visual de UI) */}
                <div className="absolute top-6 left-6 z-20 bg-zinc-900/95 backdrop-blur-md p-5 rounded-2xl border border-teal-500/30 shadow-2xl flex items-center gap-4 transition-transform hover:scale-105">
                    <div className="bg-teal-500 p-3 rounded-xl shadow-lg shadow-teal-500/20">
                        <MapPin weight="fill" className="text-white w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-white text-sm font-extrabold uppercase tracking-widest">ASCADE Brasília</p>
                        <p className="text-teal-200/70 text-xs italic leading-tight">Trecho 2, Conjunto 10 Lote 18<br/>Asa Sul, Brasília - DF</p>
                    </div>
                </div>
            </div>
        </section>
    )
}