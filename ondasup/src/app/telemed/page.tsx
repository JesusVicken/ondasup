'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import {
    CheckCircle,
    AlertTriangle,
    PhoneCall,
    CalendarCheck,
    FileText,
    Video,
    FileCheck2,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function TelemedPage() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true, easing: 'ease-in-out' })
    }, [])

    return (
        <section className="bg-black text-white">
            {/* Hero com background visível e texto transparente */}
            <div className="relative h-auto min-h-[80vh] flex items-center justify-center text-center px-4" data-aos="fade-in">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/tati3.jpg"
                        alt="Dra. Tatiana Miranda"
                        layout="fill"
                        objectFit="cover"
                        className="opacity-90"
                        priority
                    />
                </div>

                <div className="relative z-10 max-w-3xl">
                    <div className="hidden md:flex justify-center mb-6">
                        <Image
                            src="/tatilogo2.png"
                            alt="Logo Dra. Tatiana Miranda"
                            width={240}
                            height={100}
                            className="h-auto w-auto object-contain"
                        />
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white/90 drop-shadow-md">
                        Telemedicina: Atendimento Neurológico Sem Sair de Casa
                    </h1>
                    <p className="text-white/80 text-base md:text-lg drop-shadow-sm">
                        Cuidado e conveniência onde você estiver. Consultas online com a Dra. Tatiana Miranda para acompanhamento e avaliações neurológicas.
                    </p>
                </div>
            </div>

            {/* Definição */}
            <div className="py-12 px-4 max-w-4xl mx-auto" data-aos="fade-right">
                <h2 className="text-2xl font-semibold mb-4">O que é Telemedicina?</h2>
                <p className="text-zinc-300 leading-relaxed">
                    A Telemedicina é uma forma segura e regulamentada de realizar atendimentos médicos à distância. Na neurologia, permite que pacientes realizem consultas com conforto e segurança, mantendo o acompanhamento regular com a mesma qualidade do atendimento presencial.
                </p>
            </div>

            {/* Benefícios */}
            <div className="bg-zinc-900 py-12 px-4" data-aos="fade-up">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-2xl font-semibold mb-8 text-center text-white">Benefícios da Consulta Online</h2>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {[
                            { icon: <CheckCircle className="text-green-500 w-6 h-6" />, title: 'Conforto e Comodidade', text: 'Consulta do conforto da sua casa.' },
                            { icon: <CheckCircle className="text-green-500 w-6 h-6" />, title: 'Acessibilidade', text: 'Ideal para quem mora longe ou tem mobilidade reduzida.' },
                            { icon: <CheckCircle className="text-green-500 w-6 h-6" />, title: 'Otimização do Tempo', text: 'Economize tempo com deslocamentos.' },
                            { icon: <CheckCircle className="text-green-500 w-6 h-6" />, title: 'Segurança', text: 'Reduza exposição a ambientes hospitalares.' },
                            { icon: <CheckCircle className="text-green-500 w-6 h-6" />, title: 'Continuidade do Cuidado', text: 'Permite acompanhamento regular.' },
                        ].map(({ icon, title, text }, i) => (
                            <div key={i} className="flex items-start gap-4" data-aos="fade-up" data-aos-delay={i * 100}>
                                {icon}
                                <div>
                                    <h3 className="font-semibold text-base mb-1 text-white">{title}</h3>
                                    <p className="text-sm text-zinc-400">{text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Indicações */}
            <div className="py-12 px-4 max-w-5xl mx-auto" data-aos="fade-right">
                <h2 className="text-2xl font-semibold mb-6">Casos indicados para Telemedicina</h2>
                <ul className="list-disc list-inside text-zinc-300 space-y-2">
                    <li>Consultas de retorno e acompanhamento</li>
                    <li>Análise de exames: ressonância, tomografia, EEG, etc.</li>
                    <li>Segunda opinião médica</li>
                    <li>Queixas leves: enxaqueca, tontura, tremores, memória</li>
                    <li>Renovação de receitas e ajuste de medicação</li>
                </ul>

                <div className="mt-8 p-4 bg-yellow-100/10 border-l-4 border-yellow-400 flex items-start gap-4 rounded-md" data-aos="zoom-in">
                    <AlertTriangle className="text-yellow-400 w-6 h-6 mt-1" />
                    <div>
                        <strong className="block text-yellow-300">Atenção:</strong>
                        <p className="text-sm text-zinc-300">
                            Não indicada para emergências neurológicas (AVC, convulsão ativa, perda de consciência, etc.) ou primeira consulta com necessidade de exame físico detalhado.
                        </p>
                    </div>
                </div>
            </div>

            {/* Passo a Passo */}
            <div className="bg-zinc-900 py-12 px-4" data-aos="fade-up">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-2xl font-semibold mb-8 text-center text-white">Como funciona a Teleconsulta</h2>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {[
                            { icon: <CalendarCheck className="w-6 h-6 text-green-500" />, title: '1. Agendamento', desc: 'Clique no botão, ligue ou envie mensagem no WhatsApp.' },
                            { icon: <FileText className="w-6 h-6 text-green-500" />, title: '2. Confirmação e Pagamento', desc: 'Você receberá um link seguro para pagamento online.' },
                            { icon: <Video className="w-6 h-6 text-green-500" />, title: '3. Preparo para Consulta', desc: 'Encontre um local tranquilo com boa internet. Tenha exames e medicamentos em mãos.' },
                            { icon: <PhoneCall className="w-6 h-6 text-green-500" />, title: '4. Consulta Online', desc: 'Você receberá um link exclusivo para acessar a videochamada.' },
                            { icon: <FileCheck2 className="w-6 h-6 text-green-500" />, title: '5. Após a Consulta', desc: 'Receita, exames e atestado são enviados por e-mail ou WhatsApp com assinatura digital.' },
                        ].map(({ icon, title, desc }, i) => (
                            <div
                                key={i}
                                className="bg-zinc-800 p-4 rounded-lg shadow-md border border-zinc-700"
                                data-aos="fade-up"
                                data-aos-delay={i * 150}
                            >
                                <div className="flex items-center gap-3 mb-2">
                                    {icon}
                                    <h3 className="font-semibold text-base text-white">{title}</h3>
                                </div>
                                <p className="text-sm text-zinc-400">{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Final */}
            <div className="text-center py-16 px-4 bg-gradient-to-br from-green-600 to-green-500 text-white" data-aos="zoom-in-up">
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">Agende sua Teleconsulta Agora</h2>
                <p className="mb-6">Clique no botão abaixo e fale diretamente com nossa equipe pelo WhatsApp.</p>
                <Link href="https://wa.me/61995668686" target="_blank">
                    <Button size="lg" className="text-lg font-semibold bg-white text-green-700 hover:bg-zinc-100">
                        Agendar com a Dra. Tatiana
                    </Button>
                </Link>
            </div>
        </section>
    )
}
