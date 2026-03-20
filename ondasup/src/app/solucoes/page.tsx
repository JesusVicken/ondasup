'use client'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'
import { useState } from 'react'

export default function FAQPage() {
    const [activeItem, setActiveItem] = useState<string | null>(null)

    const faqs = [
        {
            question: 'Quais são as especialidades da Dra. Tatiana Miranda?',
            answer:
                'A Dra Tatiana é neurologista com fellowship em Distúrbios do Movimento e atua, além dessa especialidade, com foco em enxaqueca e toxina botulínica para as diversas disfunções neurológicas.',
        },
        {
            question: 'Como posso agendar uma consulta?',
            answer:
                'Você pode agendar sua consulta via WhatsApp, telefone, e-mail ou através da página de contato aqui no site. A Dra. Tatiana atende presencialmente em Brasília e Maceió, além de oferecer consultas por Telemedicina.',
        },
        {
            question: 'A Dra. Tatiana atende por Telemedicina?',
            answer:
                'Sim! As consultas por Telemedicina são realizadas de forma segura e prática. Após o agendamento, você receberá um link exclusivo com todas as orientações necessárias.',
        },
        {
            question: 'Quais cidades ela atende presencialmente?',
            answer:
                'A Dra. Tatiana realiza atendimentos em Brasília (DF), no Centro Clínico OHB, e em Maceió (AL), no Empresarial Delman – Pajuçara.',
        },
        {
            question: 'O que devo levar para a consulta?',
            answer:
                'Leve seus documentos pessoais, lista de medicamentos em uso, exames anteriores e quaisquer dúvidas que deseja esclarecer. Essas informações são importantes para uma avaliação completa.',
        },
        {
            question: 'Quais são os serviços que a Dra. Tatiana oferece?',
            answer:
                'A Dra. Tatiana realiza atendimentos clínicos neurológicos, aplicação de Toxina Botulínica terapêutica, acompanhamento de pacientes com Parkinson, Enxaqueca, distonias e outros transtornos do movimento.',
        },
        {
            question: 'Qual técnica é utilizada nos tratamentos com Toxina Botulínica?',
            answer:
                'A Dra. Tatiana utiliza técnicas seguras e guiadas para aplicação da Toxina Botulínica em áreas específicas, baseando-se em evidências científicas e avaliação individual de cada paciente.',
        },
        {
            question: 'Quantas sessões são necessárias?',
            answer:
                'A quantidade de sessões depende do diagnóstico e da resposta individual de cada paciente. Em geral, os efeitos da Toxina Botulínica duram de 3 a 6 meses, com reavaliações periódicas.',
        },
        {
            question: 'Os resultados são duradouros?',
            answer:
                'Sim. Muitos pacientes apresentam melhora significativa na qualidade de vida com o tratamento contínuo. Os resultados podem durar meses, e o acompanhamento é essencial para manter os benefícios.',
        },
        {
            question: 'Quero agendar uma sessão. O que preciso fazer?',
            answer:
                'Você pode entrar em contato por WhatsApp ou acessar a página de contato para preencher o formulário. A equipe retornará com as informações de agendamento e disponibilidade.',
        },
        {
            question: 'Você aceita planos de saúde?',
            answer:
                'Os atendimentos são realizados de forma particular. Entretanto, fornecemos nota fiscal e relatório médico para reembolso junto ao seu plano de saúde, caso ele ofereça essa cobertura.',
        },
    ]

    return (
        <div className="min-h-screen w-full bg-gray-950 text-gray-100">
            <main className="max-w-4xl mx-auto px-4 py-16 md:py-20">
                <div className="mb-10 text-center">
                    <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold text-center text-white leading-snug md:leading-tight mb-4">
                        Perguntas Frequentes
                    </h1>
                </div>

                <div className="bg-gray-900 rounded-xl shadow-lg border border-gray-800 overflow-hidden">
                    <Accordion
                        type="single"
                        collapsible
                        className="w-full"
                        value={activeItem || undefined}
                        onValueChange={setActiveItem}
                    >
                        {faqs.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className="border-b border-gray-800 last:border-b-0"
                            >
                                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-800/50 transition-colors">
                                    <div className="flex items-start space-x-4">
                                        <span className="text-green-400 font-semibold text-lg">
                                            {index + 1}.
                                        </span>
                                        <span className="text-left text-base md:text-lg font-medium">
                                            {faq.question}
                                        </span>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="px-6 pb-4 pt-0 text-gray-300 text-sm md:text-base">
                                    <div className="flex space-x-4">
                                        <div className="text-green-400 font-semibold text-lg opacity-0 select-none">
                                            {index + 1}.
                                        </div>
                                        <div>{faq.answer}</div>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>

                <div className="mt-12 text-center">
                    <p className="text-gray-400 mb-4">Não encontrou sua dúvida aqui?</p>
                    <a
                        href="/contatos"
                        className="inline-flex items-center justify-center px-6 py-3 bg-green-600 hover:bg-green-500 text-white font-medium rounded-lg transition-colors"
                    >
                        Entre em contato conosco
                    </a>
                </div>
            </main>
        </div>
    )
}
