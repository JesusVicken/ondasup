'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Image from 'next/image'
import Link from 'next/link'
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
    ShieldCheck,
    Star,
    Calendar,
    Palette,
    Sparkle,
    Users,
} from '@phosphor-icons/react'

export default function SobrePage() {
    const whatsappNumber = '556195668686'
    const whatsappMessage = 'Olá, vim pelo site e gostaria de fazer um orçamento para uma tatuagem.'
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: 'ease-in-out',
        })
    }, [])

    const specialties = [
        {
            icon: <Palette className="w-6 h-6" />,
            title: "Realismo",
            description: "Tatuagens hiper-realistas com profundidade e detalhes impressionantes"
        },
        {
            icon: <Sparkle className="w-6 h-6" />,
            title: "Blackwork Hachura",
            description: "Técnica única com hachuras que criam textura e movimento"
        },
        {
            icon: <ShieldCheck className="w-6 h-6" />,
            title: "Biossegurança",
            description: "Ambiente esterilizado seguindo normas ANVISA"
        },
        {
            icon: <Star className="w-6 h-6" />,
            title: "Design Exclusivo",
            description: "Arte personalizada para cada cliente"
        }
    ]

    const portfolioItems = [
        {
            type: "video",
            src: "/arruas5.mp4",
            alt: "Processo de tatuagem realista",
            title: "Realismo em Ação"
        },
        {
            type: "image",
            src: "/tatoo6.jpeg",
            alt: "Tattoo Realismo",
            title: "Trabalho feito com cores vibrantes e preto e cinza"
        },
        {
            type: "video",
            src: "/arruas14.mp4",
            alt: "Tattoo Personalizada para seu jeito",
            title: "Tattoo Personalizadas"
        },
        {
            type: "image",
            src: "/tatoo5.jpeg",
            alt: "Tatuagem realista com cores",
            title: "Realismo Detalhado"
        },
         {
            type: "video",
            src: "/arruas16.mp4",
            alt: "Tatuagem Realista ",
            title: "Realismo"
        }
    ]
    

    return (
        <main className="bg-white">
            {/* Hero Section - Ricardo Arruas */}
            <section className="relative bg-gradient-to-br from-black via-gray-900 to-black py-16 lg:py-24 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[length:40px_40px]" />
                </div>

                <div className="container px-4 mx-auto relative">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                        {/* Imagem/Vídeo Principal */}
                        <div className="relative" data-aos="fade-right">
                            <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl group border border-gray-700">
                                <video
                                    src="/arruas9.mp4"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                                    poster="/arruas-about.jpg"
                                />
                                {/* Overlay gradiente em preto e branco */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                                {/* Badge de Especialista */}
                                <div className="absolute top-6 left-6 bg-white text-black px-4 py-2 rounded-full text-sm font-semibold shadow-lg border border-gray-300">
                                    ⚫ Especialista em Realismo
                                </div>
                            </div>

                            {/* Estatísticas */}
                            <div className="grid grid-cols-3 gap-4 mt-6">
                                <div className="text-center p-4 bg-white rounded-2xl shadow-lg border border-gray-200">
                                    <div className="text-2xl font-bold text-gray-900">8+</div>
                                    <div className="text-sm text-gray-600">Anos de Experiência</div>
                                </div>
                                <div className="text-center p-4 bg-white rounded-2xl shadow-lg border border-gray-200">
                                    <div className="text-2xl font-bold text-gray-900">500+</div>
                                    <div className="text-sm text-gray-600">Tatuagens Realizadas</div>
                                </div>
                                <div className="text-center p-4 bg-white rounded-2xl shadow-lg border border-gray-200">
                                    <div className="text-2xl font-bold text-gray-900">100%</div>
                                    <div className="text-sm text-gray-600">Clientes Satisfeitos</div>
                                </div>
                            </div>
                        </div>

                        {/* Conteúdo Textual */}
                        <div className="space-y-6 lg:space-y-8" data-aos="fade-left">
                            {/* Header */}
                            <div className="space-y-4">
                                <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                                    Ricardo Arruas
                                    <span className="block text-gray-300 text-2xl lg:text-3xl mt-2">
                                        Tatuador Profissional
                                    </span>
                                </h1>

                                <div className="flex items-center gap-2 text-gray-400">
                                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                                    <span className="font-semibold">Online • Disponível para orçamentos</span>
                                </div>
                            </div>

                            {/* Especialidades Destaque */}
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-gray-600">
                                <h3 className="text-lg font-semibold text-white mb-3">Especialidades</h3>
                                <div className="flex flex-wrap gap-2">
                                    <span className="bg-white text-black px-3 py-1 rounded-full text-sm font-medium border border-gray-300">
                                        Realismo
                                    </span>
                                    <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-medium border border-gray-400">
                                        Blackwork Hachura
                                    </span>
                                    <span className="bg-white text-black px-3 py-1 rounded-full text-sm font-medium border border-gray-300">
                                        Fine Line
                                    </span>
                                </div>
                            </div>

                            {/* Descrição */}
                            <div className="space-y-4 text-gray-300 leading-relaxed">
                                <p className="text-lg">
                                    Com mais de <strong className="text-white">8 anos de experiência</strong>,
                                    sou especialista em <strong className="text-gray-200">Realismo e Blackwork Hachura</strong>,
                                    técnicas que exigem precisão e maestria.
                                </p>

                                <p className="text-lg">
                                    Minha abordagem combina <strong className="text-white">técnica apurada</strong> com
                                    <strong className="text-gray-200"> sensibilidade artística</strong>, criando peças
                                    únicas que contam histórias através da arte na pele.
                                </p>

                                <p className="text-lg">
                                    Atendo em <strong className="text-white">estúdio privado em Águas Claras</strong>,
                                    proporcionando um ambiente confortável e seguro para sua experiência de tatuagem.
                                </p>
                            </div>

                            {/* Especialidades Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                                {specialties.map((specialty, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start gap-3 p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-gray-600 hover:bg-white/15 transition-all group"
                                        data-aos="fade-up"
                                        data-aos-delay={index * 100}
                                    >
                                        <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl flex items-center justify-center text-black group-hover:bg-gray-200 transition-colors">
                                            {specialty.icon}
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-white text-base">{specialty.title}</h4>
                                            <p className="text-sm text-gray-300 mt-1">{specialty.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 pt-4" data-aos="fade-up" data-aos-delay="400">
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group bg-white hover:bg-gray-100 text-black font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center justify-center gap-3 text-lg shadow-lg border border-gray-300"
                                >
                                    <WhatsappLogo className="w-6 h-6" weight="fill" />
                                    Fazer Orçamento
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </a>

                                <Link
                                    href="/domiciliar"
                                    className="group border-2 border-white hover:border-gray-300 text-white hover:text-gray-300 font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center justify-center gap-3 text-lg"
                                >
                                    Ver Portfólio
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Seção Processo e Portfolio */}
            <section className="bg-gradient-to-b from-gray-50 to-white py-16 lg:py-20">
                <div className="container px-4 mx-auto">
                    <div className="text-center mb-12 lg:mb-16" data-aos="fade-up">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            Meu Processo Criativo
                        </h2>
                        <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
                            Da ideia inicial à obra finalizada, cada etapa é cuidadosamente planejada
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Video do Processo */}
                        <div className="relative" data-aos="fade-right">
                            <div className="relative w-full h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl group border border-gray-200">
                                <video
                                    src="/arruas15.mp4"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    poster="/tatoo1.jpeg"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                                {/* Play Button Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform border border-gray-300">
                                        <div className="w-0 h-0 border-l-[16px] border-l-black border-y-[8px] border-y-transparent ml-1" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Etapas do Processo */}
                        <div className="space-y-6" data-aos="fade-left">
                            {[
                                {
                                    step: "01",
                                    title: "Consulta e Ideia",
                                    description: "Conversamos sobre sua ideia, expectativas e criamos o conceito inicial"
                                },
                                {
                                    step: "02",
                                    title: "Estudo e Sketch",
                                    description: "Desenvolvo o desenho personalizado, considerando anatomia e composição"
                                },
                                {
                                    step: "03",
                                    title: "Aprovação e Preparação",
                                    description: "Você aprova o design e preparamos tudo para a sessão"
                                },
                                {
                                    step: "04",
                                    title: "Execução com Excelência",
                                    description: "Realização da tatuagem com técnica apurada e máximo cuidado"
                                }
                            ].map((etapa, index) => (
                                <div
                                    key={index}
                                    className="flex gap-4 p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all group border border-gray-200"
                                >
                                    <div className="flex-shrink-0 w-12 h-12 bg-black text-white rounded-xl flex items-center justify-center font-bold text-lg">
                                        {etapa.step}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 text-lg mb-2">{etapa.title}</h3>
                                        <p className="text-gray-600">{etapa.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Galeria de Trabalhos */}
            <section className="bg-gray-900 py-16 lg:py-20">
                <div className="container px-4 mx-auto">
                    <div className="text-center mb-12 lg:mb-16" data-aos="fade-up">
                        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                            Trabalhos em Destaque
                        </h2>
                        <p className="text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto">
                            Confira alguns exemplos do realismo e blackwork hachura
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {portfolioItems.map((item, index) => (
                            <div
                                key={index}
                                className="relative group rounded-2xl overflow-hidden shadow-2xl aspect-square border border-gray-700"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                {item.type === 'video' ? (
                                    <video
                                        src={item.src}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                ) : (
                                    <Image
                                        src={item.src}
                                        alt={item.alt}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                )}

                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <h3 className="font-semibold text-lg">{item.title}</h3>
                                    <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                                        {item.alt}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12" data-aos="fade-up">
                        <Link
                            href="/domiciliar"
                            className="inline-flex items-center gap-3 bg-white hover:bg-gray-100 text-black font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105 border border-gray-300"
                        >
                            Ver Portfólio Completo
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Contatos e Redes Sociais */}
            <section className="bg-gradient-to-b from-white to-gray-50 py-16 lg:py-20" data-aos="fade-up">
                <div className="container px-4 mx-auto">
                    <div className="text-center mb-12 lg:mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            Vamos Criar Juntos?
                        </h2>
                        <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
                            Entre em contato e vamos transformar sua ideia em uma obra de arte
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">

                        {/* Apresentação Pessoal */}
                        <div className="flex flex-col items-center lg:items-start space-y-6" data-aos="fade-right">
                            <div className="w-48 h-48 relative rounded-full overflow-hidden shadow-2xl border-4 border-white bg-white">
                                <Image
                                    src="/arruas-about.jpg"
                                    alt="Ricardo Arruas - Tatuador"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="text-center lg:text-left">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Ricardo Arruas</h3>
                                <p className="text-gray-600 font-semibold mb-3">Tatuador Profissional</p>
                                <p className="text-gray-600">
                                    Especialista em Realismo e Blackwork Hachura com mais de 8 anos
                                    transformando ideias em arte na pele.
                                </p>
                            </div>
                        </div>

                        {/* Informações de Contato */}
                        <div className="space-y-6" data-aos="fade-up">
                            <h3 className="text-2xl font-bold text-gray-900 text-center lg:text-left">
                                Entre em Contato
                            </h3>

                            <div className="space-y-4">
                                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow group border border-gray-200">
                                    <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-gray-600 group-hover:bg-gray-200 transition-colors">
                                        <Envelope className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Email</p>
                                        <p className="font-semibold text-gray-900">contato@ricardoarruas.com</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow group border border-gray-200">
                                    <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-gray-600 group-hover:bg-gray-200 transition-colors">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Telefone/WhatsApp</p>
                                        <p className="font-semibold text-gray-900">+55 61 9566-8686</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow group border border-gray-200">
                                    <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-gray-600 group-hover:bg-gray-200 transition-colors mt-1">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Estúdio</p>
                                        <p className="font-semibold text-gray-900">
                                            Águas Claras, Brasília - DF<br />
                                            Ambiente privado e seguro
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Redes Sociais */}
                        <div className="space-y-6" data-aos="fade-left">
                            <h3 className="text-2xl font-bold text-gray-900 text-center lg:text-left">
                                Acompanhe Meu Trabalho
                            </h3>

                            <p className="text-gray-600 text-center lg:text-left">
                                Veja mais projetos e processos criativos
                            </p>

                            <div className="flex justify-center lg:justify-start gap-6">
                                {[
                                    {
                                        icon: <InstagramLogo className="w-6 h-6" />,
                                        href: "https://www.instagram.com/ricardo_arruas",
                                        color: "bg-gray-900",
                                        label: "Instagram"
                                    },
                                    {
                                        icon: <FacebookLogo className="w-6 h-6" />,
                                        href: "https://www.facebook.com/ricardoarruas",
                                        color: "bg-gray-800",
                                        label: "Facebook"
                                    },
                                    {
                                        icon: <YoutubeLogo className="w-6 h-6" />,
                                        href: "https://www.youtube.com/@ricardoarruas",
                                        color: "bg-gray-900",
                                        label: "YouTube"
                                    }
                                ].map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.label}
                                        className={`w-14 h-14 ${social.color} text-white rounded-2xl flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 border border-gray-600`}
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>

                            {/* Botão WhatsApp Destaque */}
                            <div className="pt-4">
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group bg-gray-900 hover:bg-black text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-3 text-sm lg:text-base w-full border border-gray-700"
                                >
                                    <WhatsappLogo className="w-5 h-5" weight="fill" />
                                    Conversar no WhatsApp
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mapa */}
            <div className="relative bg-white" data-aos="fade-up">
                <div className="container px-4 mx-auto py-8">
                    <div className="text-center mb-8">
                        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                            Meu Estúdio
                        </h3>
                        <p className="text-gray-600 text-lg">
                            Atendimento personalizado em Águas Claras, Brasília
                        </p>
                    </div>
                </div>

                <div className="w-full h-[400px] lg:h-[500px] relative rounded-2xl overflow-hidden shadow-2xl mx-auto max-w-6xl border border-gray-200">
                    <iframe
                        title="Estúdio Ricardo Arruas - Águas Claras, Brasília"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d245842.0198082934!2d-48.05315964892468!3d-15.72154228495493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3d18df9ae279%3A0x79188d5b54443465!2sAvenida%20Boulevard%20Sul%2C%20Águas%20Claras%2C%20Brasília%20DF%2C%2071926-250!5e0!3m2!1spt-BR!2sbr!4v1720546377670!5m2!1spt-BR!2sbr"
                        width="100%"
                        height="100%"
                        loading="lazy"
                        style={{ border: 0 }}
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                        className="absolute inset-0 w-full h-full"
                    />
                </div>
            </div>

            {/* Estilos CSS para animações */}
            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    33% { transform: translateY(-8px) rotate(1deg); }
                    66% { transform: translateY(-4px) rotate(-1deg); }
                }
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
                
                /* Melhorar responsividade para mobile */
                @media (max-width: 768px) {
                    .container {
                        padding-left: 1rem;
                        padding-right: 1rem;
                    }
                    
                    .text-4xl {
                        font-size: 2rem;
                    }
                    
                    .text-5xl {
                        font-size: 2.5rem;
                    }
                }
            `}</style>
        </main>
    )
}