'use client'

import { useEffect, useRef, useState, FormEvent } from 'react'
import Image from 'next/image'
import emailjs from '@emailjs/browser'
import {
    WhatsappLogo,
    MapPin,
    Envelope,
    InstagramLogo,
    FacebookLogo,
    LinkedinLogo,
    TiktokLogo,
    PaperPlaneTilt,
    CheckCircle,
    CircleNotch
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

export default function ContactOndaSup() {
    const containerRef = useRef<HTMLElement>(null)
    const formRef = useRef<HTMLFormElement>(null)
    
    // Estados do Formulário
    const [isSending, setIsSending] = useState(false)
    const [isSent, setIsSent] = useState(false)

    const whatsappNumber = '556199791925'
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Olá! Vim pelo site da OndaSup.')}`

    const socialLinks = [
        { name: 'Instagram', url: 'https://instagram.com/ondasup', icon: <InstagramLogo weight="fill" className="w-7 h-7" /> },
        { name: 'LinkedIn', url: 'https://www.linkedin.com/company/ondasup_esportes', icon: <LinkedinLogo weight="fill" className="w-7 h-7" /> },
        { name: 'TikTok', url: 'https://www.tiktok.com/@ondasup', icon: <TiktokLogo weight="fill" className="w-7 h-7" /> },
        { name: 'Facebook', url: 'https://www.facebook.com/ondasup', icon: <FacebookLogo weight="fill" className="w-7 h-7" /> },
    ]

    useEffect(() => {
        AOS.init({ duration: 1000, once: true })
    }, [])

    // Função de Envio de E-mail
    const sendEmail = (e: FormEvent) => {
        e.preventDefault()
        if (!formRef.current) return

        setIsSending(true)

        // IMPORTANTE: Substitua pelos seus IDs do EmailJS
        emailjs.sendForm(
            'YOUR_SERVICE_ID', 
            'YOUR_TEMPLATE_ID', 
            formRef.current, 
            'YOUR_PUBLIC_KEY'
        )
        .then(() => {
            setIsSent(true)
            setIsSending(false)
            formRef.current?.reset()
            setTimeout(() => setIsSent(false), 5000)
        })
        .catch((error) => {
            console.error("Erro ao enviar e-mail:", error)
            setIsSending(false)
            alert("Ocorreu um erro ao enviar. Tente novamente pelo WhatsApp.")
        })
    }

    return (
        <section id="contato" ref={containerRef} className="relative bg-zinc-950 overflow-hidden text-white">
            
            {/* BACKGROUND VÍDEO */}
            <div className="absolute inset-0 z-0">
                <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-65">
                    <source src="/Bg123.mp4" type="video/mp4" /> 
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-black/20 to-zinc-950" />
            </div>

            <div className="container mx-auto px-4 md:px-8 pt-28 pb-20 relative z-10">
                
                <div className="text-center max-w-4xl mx-auto mb-20" data-aos="fade-down">
                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-xl">
                        <PaperPlaneTilt weight="bold" className="w-4 h-4" />
                        Conecte-se Conosco
                    </div>
                    <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-6">
                        Fale com a <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300">OndaSup</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    
                    {/* COLUNA ESQUERDA: FORMULÁRIO DE E-MAIL */}
                    <div className="lg:col-span-7 bg-white/[0.03] backdrop-blur-3xl border border-white/10 p-8 md:p-12 rounded-[2.5rem] shadow-2xl" data-aos="fade-right">
                        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                            <Envelope className="text-teal-400" /> Envie uma mensagem
                        </h3>
                        
                        <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-teal-400 ml-2">Nome</label>
                                    <input 
                                        type="text" name="user_name" required placeholder="Seu nome completo"
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-teal-500 transition-all placeholder:text-zinc-600"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-teal-400 ml-2">E-mail</label>
                                    <input 
                                        type="email" name="user_email" required placeholder="Seu melhor e-mail"
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-teal-500 transition-all placeholder:text-zinc-600"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-teal-400 ml-2">Mensagem</label>
                                <textarea 
                                    name="message" required rows={5} placeholder="Como podemos te ajudar?"
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-teal-500 transition-all placeholder:text-zinc-600 resize-none"
                                />
                            </div>

                            <button 
                                type="submit" 
                                disabled={isSending}
                                className={`w-full py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all duration-300 shadow-xl ${isSent ? 'bg-green-500' : 'bg-teal-500 hover:bg-teal-400 hover:scale-[1.02]'}`}
                            >
                                {isSending ? (
                                    <CircleNotch className="w-6 h-6 animate-spin" />
                                ) : isSent ? (
                                    <><CheckCircle weight="fill" className="w-6 h-6" /> Mensagem Enviada!</>
                                ) : (
                                    <><PaperPlaneTilt weight="fill" className="w-6 h-6" /> Enviar Agora</>
                                )}
                            </button>
                        </form>
                    </div>

                    {/* COLUNA DIREITA: INFO & SOCIAIS */}
                    <div className="lg:col-span-5 space-y-8">
                        
                        {/* Bloco Logo com Background ondaSup2.jpg */}
                        <div className="relative group/logo overflow-hidden rounded-[2.5rem] p-12 flex flex-col items-center border border-white/10 shadow-2xl bg-zinc-900/40 backdrop-blur-xl" data-aos="fade-left">
                            <div className="absolute inset-0 z-0">
                                <Image src="/ondaSup2.jpg" alt="Bg" fill className="object-cover opacity-40 grayscale group-hover/logo:grayscale-0 transition-all duration-1000 group-hover/logo:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-zinc-950" />
                            </div>
                            
                            <div className="relative z-10 w-48 h-48 mb-10 drop-shadow-[0_20px_50px_rgba(20,184,166,0.6)] group-hover/logo:scale-105 transition-transform duration-500">
                                <Image src="/ondasupLogo.png" alt="OndaSup" fill className="object-contain" priority />
                            </div>

                            {/* REDES SOCIAIS COM EFEITOS DE HOVER IRADOS */}
                            <div className="flex gap-4 z-10">
                                {socialLinks.map((social) => (
                                    <a 
                                        key={social.name} 
                                        href={social.url} 
                                        target="_blank" 
                                        className="social-icon group/btn flex items-center justify-center w-14 h-14 bg-white/5 border border-white/10 rounded-2xl text-teal-300 transition-all duration-300 hover:bg-teal-500 hover:text-white hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(20,184,166,0.5)] hover:border-teal-400"
                                    >
                                        <div className="transition-all duration-500 ease-out group-hover/btn:rotate-[15deg] group-hover/btn:scale-125">
                                            {social.icon}
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Botão WhatsApp Rápido */}
                        <a href={whatsappLink} target="_blank" className="contact-card group flex items-center gap-6 p-8 bg-green-500/10 border border-green-500/20 rounded-[2rem] hover:bg-green-500/20 transition-all" data-aos="fade-up">
                            <div className="w-14 h-14 rounded-2xl bg-green-500 flex items-center justify-center shadow-lg shadow-green-500/30 group-hover:scale-110 transition-transform">
                                <WhatsappLogo weight="fill" className="w-8 h-8 text-white" />
                            </div>
                            <div>
                                <p className="text-green-400 text-[10px] font-black uppercase tracking-widest">Resposta Imediata</p>
                                <p className="text-white text-xl font-bold">(61) 9979-1925</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            {/* 🔥 MAPA COM LINK DE INCORPORAÇÃO OFICIAL DO GOOGLE PARA A ASCADE 🔥 */}
            <div className="relative w-full h-[500px] mt-12 overflow-hidden border-t border-white/10">
                <iframe
                    title="ASCADE Brasília - OndaSup" 
                    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=pt-BR&amp;q=Clube%20Ascade,%20St.%20de%20Clubes%20Esportivos%20Sul%20Trecho%202%20Conjunto%2010%20Lote%2018%20-%20Asa%20Sul,%20Bras%C3%ADlia%20-%20DF,%2070200-002+(OndaSup%20-%20Clube%20Ascade)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    width="100%" 
                    height="100%" 
                    loading="lazy" 
                    style={{ border: 0 }} 
                    allowFullScreen
                    className="contrast-[1.1] grayscale-[0.3]"
                />
                <div className="absolute top-8 left-8 z-20 bg-zinc-950/95 backdrop-blur-xl p-6 rounded-[2rem] border border-teal-500/30 shadow-2xl flex items-center gap-5">
                    <div className="bg-red-600 p-3 rounded-2xl animate-pulse"><MapPin weight="fill" className="text-white w-6 h-6" /></div>
                    <div>
                        <p className="text-white text-xs font-black uppercase tracking-widest">Base OndaSup</p>
                        <p className="text-zinc-400 text-[11px] font-medium">ASCADE - Trecho 2, Conjunto 10 Lote 18.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}