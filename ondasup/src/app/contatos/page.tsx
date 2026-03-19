'use client'

import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Image from 'next/image'
import {
    WhatsappLogo,
    MapPin,
    Phone,
    Envelope,
    InstagramLogo,
    FacebookLogo,
    YoutubeLogo,
    ArrowRight,
    Clock,
    Calendar,
    ChatCircleText,
} from '@phosphor-icons/react/dist/ssr'

export default function ContactSectionArruas() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: 'ease-in-out',
            offset: 100
        })
        setIsVisible(true)
    }, [])

    const whatsappNumber = '5561995668686'
    const whatsappMessage = 'Olá, vim pelo site e gostaria de fazer um orçamento para uma tatuagem.'
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

    const contactInfo = [
        {
            icon: <Envelope className="w-5 h-5" />,
            label: "Email",
            value: "contato@arruastattoo.com",
            href: "mailto:contato@arruastattoo.com",
            color: "from-gray-600 to-gray-700"
        },
        {
            icon: <Phone className="w-5 h-5" />,
            label: "Telefone/WhatsApp",
            value: "+55 61 99566-8686",
            href: whatsappLink,
            color: "from-gray-600 to-gray-700"
        },
        {
            icon: <MapPin className="w-5 h-5" />,
            label: "Localização",
            value: "Ed. Lê Quartier - Av. Pau Brasil, 10 - Sala 1708 - Águas Claras, Brasília - DF",
            href: "#map",
            color: "from-gray-600 to-gray-700"
        }
    ]

    const socialLinks = [
        {
            icon: <InstagramLogo weight="fill" className="w-5 h-5" />,
            href: "https://www.instagram.com/arruas_tattoo",
            label: "Instagram",
            color: "bg-gray-800 border-gray-700",
            hover: "hover:bg-gray-700 hover:border-gray-600"
        },
        {
            icon: <FacebookLogo weight="fill" className="w-5 h-5" />,
            href: "https://www.facebook.com/arruastattoo",
            label: "Facebook",
            color: "bg-gray-800 border-gray-700",
            hover: "hover:bg-gray-700 hover:border-gray-600"
        },
        {
            icon: <YoutubeLogo weight="fill" className="w-5 h-5" />,
            href: "https://www.youtube.com/@arruastattoo",
            label: "YouTube",
            color: "bg-gray-800 border-gray-700",
            hover: "hover:bg-gray-700 hover:border-gray-600"
        }
    ]

    return (
        <section className="relative w-full min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden">
            {/* Conteúdo Principal */}
            <div className="container mx-auto px-4 py-16 lg:py-24 relative z-10">
                {/* Header */}
                <div className="text-center mb-16 lg:mb-20" data-aos="fade-down">
                    <h2 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                        Nossos Contatos
                    </h2>
                    <p className="text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        Transforme sua ideia em uma obra de arte permanente
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">

                    {/* Card de Informações de Contato */}
                    <div
                        className="lg:col-span-2 space-y-6"
                        data-aos="fade-right"
                        data-aos-delay="200"
                    >
                        <div className="bg-gray-800/80 backdrop-blur-lg rounded-3xl p-8 border border-gray-700 shadow-2xl">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-12 h-12 bg-gray-700 rounded-2xl flex items-center justify-center border border-gray-600">
                                    <ChatCircleText className="w-6 h-6 text-white" weight="fill" />
                                </div>
                                <div>
                                    <h3 className="text-2xl lg:text-3xl font-bold text-white">
                                        Entre em Contato
                                    </h3>
                                    <p className="text-gray-400 text-lg">
                                        Escolha a melhor forma de nos contactar
                                    </p>
                                </div>
                            </div>

                            {/* Informações de Contato */}
                            <div className="space-y-4 mb-8">
                                {contactInfo.map((item, index) => (
                                    <a
                                        key={index}
                                        href={item.href}
                                        target={item.href.includes('http') ? '_blank' : '_self'}
                                        rel={item.href.includes('http') ? 'noopener noreferrer' : ''}
                                        className="group flex items-center gap-4 p-4 rounded-2xl bg-gray-700/50 hover:bg-gray-700 border border-gray-600 hover:border-gray-500 transition-all duration-300 hover:scale-105"
                                    >
                                        <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 border border-gray-600`}>
                                            {item.icon}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-gray-400 text-sm font-medium">{item.label}</p>
                                            <p className="text-white font-semibold text-lg truncate">{item.value}</p>
                                        </div>
                                        <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                                    </a>
                                ))}
                            </div>

                            {/* Botão WhatsApp Principal */}
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group w-full bg-gray-700 hover:bg-gray-600 text-white font-bold py-5 px-8 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-4 text-lg border border-gray-600 hover:border-gray-500"
                            >
                                <div className="relative">
                                    <WhatsappLogo className="w-7 h-7" weight="fill" />
                                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
                                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full"></div>
                                </div>
                                <span>Conversar no WhatsApp</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </a>
                        </div>

                        {/* Cards de Benefícios */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-gray-800/80 backdrop-blur-lg rounded-2xl p-6 border border-gray-700 text-center group hover:bg-gray-700/80 transition-all duration-300">
                                <div className="w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 border border-gray-600">
                                    <Clock className="w-6 h-6 text-gray-300" />
                                </div>
                                <h4 className="font-semibold text-white mb-2">Atendimento 24h</h4>
                                <p className="text-gray-400 text-sm">Agendamento flexível para sua conveniência</p>
                            </div>
                            <div className="bg-gray-800/80 backdrop-blur-lg rounded-2xl p-6 border border-gray-700 text-center group hover:bg-gray-700/80 transition-all duration-300">
                                <div className="w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 border border-gray-600">
                                    <Calendar className="w-6 h-6 text-gray-300" />
                                </div>
                                <h4 className="font-semibold text-white mb-2">Ambiente Privado</h4>
                                <p className="text-gray-400 text-sm">Estúdio exclusivo e seguro</p>
                            </div>
                        </div>
                    </div>

                    {/* Card de Redes Sociais e Logo */}
                    <div className="space-y-6" data-aos="fade-left" data-aos-delay="400">
                        {/* Logo */}
                        <div className="bg-gray-800/80 backdrop-blur-lg rounded-3xl p-8 border border-gray-700 shadow-2xl flex items-center justify-center group hover:bg-gray-700/80 transition-all duration-300">
                            <div className="relative w-48 h-48 lg:w-56 lg:h-56">
                                <Image
                                    src="/4.png"
                                    alt="Arruas Tattoo - Estúdio de Tatuagem Profissional"
                                    fill
                                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                                    priority
                                />
                            </div>
                        </div>

                        {/* Redes Sociais */}
                        <div className="bg-gray-800/80 backdrop-blur-lg rounded-3xl p-8 border border-gray-700 shadow-2xl">
                            <h3 className="text-2xl font-bold text-white mb-6 text-center">
                                Acompanhe Nosso Trabalho
                            </h3>
                            <p className="text-gray-400 text-center mb-6">
                                Veja mais projetos e processos criativos
                            </p>

                            <div className="flex justify-center gap-4">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.label}
                                        className={`w-14 h-14 ${social.color} ${social.hover} text-white rounded-2xl flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 transform-gpu border`}
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mapa */}
            <div
                id="map"
                className="relative w-full h-[500px] lg:h-[600px] bg-gray-900"
                data-aos="fade-up"
                data-aos-delay="600"
            >
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10 pointer-events-none"></div>
                <iframe
                    title="Estúdio Arruas Tattoo - Águas Claras, Brasília"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d245842.0198082934!2d-48.05315964892468!3d-15.72154228495493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3d18df9ae279%3A0x79188d5b54443465!2sAvenida%20Boulevard%20Sul%2C%20%C3%81guas%20Claras%2C%20Bras%C3%ADlia%20DF%2C%2071926-250!5e0!3m2!1spt-BR!2sbr!4v1720546377670!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="100%"
                    loading="lazy"
                    style={{ border: 0 }}
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 w-full h-full"
                />
                {/* Overlay de informações do mapa */}
                <div className="absolute bottom-6 left-6 z-20 bg-gray-900/90 backdrop-blur-sm rounded-2xl p-4 border border-gray-700">
                    <div className="flex items-center gap-3">
                        <MapPin className="w-5 h-5 text-gray-300" weight="fill" />
                        <div>
                            <p className="text-white font-semibold text-sm">Arruas Tattoo Studio</p>
                            <p className="text-gray-400 text-xs">Águas Claras, Brasília - DF</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Efeitos Visuais Sutuais */}
            <div className="absolute top-1/4 left-10 w-72 h-72 bg-gray-800/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-gray-800/20 rounded-full blur-3xl"></div>
        </section>
    )
}