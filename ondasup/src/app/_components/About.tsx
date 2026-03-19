'use client'

import Image from "next/image"
import { CheckCircle, Users, RocketLaunch, ArrowRight, Waves } from "@phosphor-icons/react/dist/ssr"
import Link from "next/link"

export function About() {
    // Lista de diferenciais baseada no texto fornecido
    const differentials = [
        "Metodologia própria validada",
        "Atuação direta em campo",
        "Produção de conhecimento estratégico",
        "Comunicação de impacto social"
    ]

    return (
        <section id="proposito" className="bg-white py-16 lg:py-28 overflow-hidden relative border-t border-slate-100">
            
            {/* =========================================================
               ELEMENTOS DE BACKGROUND - ONDAS (UI/UX)
               ========================================================= */}
            
            {/* Onda 1 - Topo Direita (sutil) */}
            <div className="absolute -right-10 top-10 opacity-60 hidden lg:block text-teal-100/70 z-0">
                <svg width="350" height="200" viewBox="0 0 350 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 130C50 110 100 150 150 130C200 110 250 150 300 130C320 122 340 118 350 118V0H0V130Z" fill="currentColor"/>
                </svg>
            </div>

            {/* Onda 2 - Rodapé Total (conecta com a próxima seção) */}
            <div className="absolute bottom-0 left-0 w-full opacity-40 text-slate-100 z-0 rotate-180">
                <svg width="100%" height="150" viewBox="0 0 1440 150" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    <path d="M0 50C240 150 480 0 720 50C960 100 1200 -50 1440 50V150H0V50Z" fill="currentColor"/>
                </svg>
            </div>

            {/* Container Principal */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                    {/* =========================================================
                       COLUNA DA IMAGEM E LOGO (lg:col-span-5)
                       ========================================================= */}
                    <div className="lg:col-span-5 relative flex justify-center group" data-aos="fade-right" data-aos-delay="200">
                        
                        {/* Moldura da Imagem Principal (Gabi e Tiago) */}
                        <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-none rounded-[30px] rounded-tl-[100px] overflow-hidden shadow-2xl shadow-slate-200 border-4 border-white z-10">
                            <Image
                                src="/gabiEtiago.jpg" // FOTO REAL ATUALIZADA
                                alt="Gabriela Speziali e Tiago Souzza em campo - OndaSup"
                                width={600}
                                height={750}
                                quality={95}
                                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-out aspectRatio-[4/5]"
                                sizes="(max-width: 1024px) 100vw, 40vw"
                            />
                            {/* Overlay sutil de marca no hover */}
                            <div className="absolute inset-0 bg-teal-950/0 group-hover:bg-teal-950/10 transition-all duration-300" />
                        </div>

                        {/* --- LOGO FLUTUANTE ONDASUP (COM COR VIA CSS) --- */}
                        <div className="absolute -bottom-10 -right-6 lg:-right-10 w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden shadow-2xl shadow-teal-950/30 animate-float bg-white border-8 border-white p-2 flex items-center justify-center z-20 hover:scale-110 transition-transform duration-300">
                            <Image
                                src="/ondasupLogo.png" // LOGO REAL ATUALIZADA (PNG SEM COR)
                                alt="Logo Oficial OndaSup"
                                width={140}
                                height={140}
                                quality={100}
                                className="object-contain"
                                sizes="(max-width: 1024px) 112px, 140px"
                                // ESTA CLASSE GERA A COR NO PNG PRETO/BRANCO (Drop Shadow Teal)
                                style={{ filter: 'drop-shadow(0px 0px 8px rgba(20, 184, 166, 0.8))' }}
                            />
                        </div>
                        
                        {/* Elemento visual extra de onda perto da imagem */}
                        <Waves weight="duotone" className="absolute -top-6 -left-6 text-teal-100 w-16 h-16 opacity-70" />
                    </div>

                    {/* =========================================================
                       COLUNA DO CONTEÚDO TEXTUAL (lg:col-span-7)
                       ========================================================= */}
                    <div className="lg:col-span-7 space-y-10" data-aos="fade-left" data-aos-delay="400">
                        
                        {/* Seção Título e Manifesto */}
                        <div className="space-y-4 text-center lg:text-left">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-50 text-teal-700 border border-teal-100 text-sm font-semibold tracking-wide">
                                <RocketLaunch weight="fill" className="w-5 h-5 text-teal-600" />
                                Movimento de Transformação Social
                            </div>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 leading-tight tracking-tight">
                                O que nos move é a <br className="hidden sm:block"/>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-500 drop-shadow-sm">
                                    Superação (SUP).
                                </span>
                            </h2>
                        </div>

                        {/* Descrição Principal (Texto Persuasivo) */}
                        <div className="space-y-6 text-slate-700 leading-relaxed text-base sm:text-lg max-w-3xl mx-auto lg:mx-0">
                            <p className="font-semibold text-slate-900 text-lg sm:text-xl">
                                A Onda é um movimento poderoso que simboliza energia pura, transformação constante e força para seguir adiante.
                            </p>
                            <p className="text-justify lg:text-left">
                                O nome OndaSup carrega essa simbologia e nosso compromisso inegociável com a <strong className="text-teal-700 font-semibold">superação</strong>. A palavra sup vem de superar: uma ação grandiosa que ultrapassa obstáculos e transforma desafios em conquistas reais. Nascemos para inspirar essa mudança, criando oportunidades de transformação de vidas por meio do esporte, com propósito e alto impacto social.
                            </p>
                        </div>

                        {/* Card dos Fundadores (Conexão e Humanização) */}
                        <div className="bg-slate-50/50 rounded-3xl p-6 border border-slate-100 flex flex-col sm:flex-row items-center gap-6 shadow-sm shadow-slate-100/50 hover:bg-slate-50 hover:border-teal-100 transition-all duration-300">
                            <Users weight="duotone" className="w-16 h-16 text-teal-500 flex-shrink-0" />
                            <div className="text-center sm:text-left">
                                <h4 className="font-bold text-slate-950 text-lg sm:text-xl">Liderança com Propósito</h4>
                                <p className="text-slate-600 text-base mt-1.5">
                                    Fundada pela jornalista <strong className="text-slate-900">Gabriela Speziali</strong> e pelo repórter fotográfico <strong className="text-slate-900">Tiago Souzza</strong>, a organização atua na interseção entre desenvolvimento humano, narrativa e transformação social.
                                </p>
                            </div>
                        </div>

                        {/* Grid de Diferenciais e CTA Principal */}
                        <div className="flex flex-col md:flex-row items-center gap-8 pt-4">
                            {/* Lista de diferenciais em grid */}
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 flex-grow w-full md:w-auto">
                                {differentials.map((item, index) => (
                                    <li key={index} className="flex items-center gap-3 group">
                                        <CheckCircle weight="fill" className="text-teal-500 w-6 h-6 flex-shrink-0 group-hover:scale-110 transition-transform group-hover:text-teal-600" />
                                        <span className="text-slate-900 text-base font-medium leading-tight">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* Botão Call to Action */}
                            <Link href="#filhos-da-nacao" className="w-full md:w-auto flex-shrink-0">
                                <button className="w-full md:w-auto flex items-center justify-center gap-2.5 h-14 px-8 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 text-white rounded-xl text-base font-semibold shadow-lg shadow-teal-950/10 transition-all hover:-translate-y-1 active:scale-95">
                                    Conheça nosso impacto
                                    <ArrowRight weight="bold" className="w-5 h-5" />
                                </button>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>

            {/* --- ANIMAÇÃO FLOAT ATUALIZADA (Sutil e Fluida) --- */}
            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-12px) rotate(1deg); }
                }
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
            `}</style>
        </section>
    )
}