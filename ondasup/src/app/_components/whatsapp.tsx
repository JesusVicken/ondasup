'use client'

import Link from 'next/link'
import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr'

export default function WhatsappFloatingButton() {
    // Dados atualizados para OndaSup
    const whatsappNumber = '556199791925'
    const whatsappMessage = 'Olá OndaSup! Gostaria de saber mais sobre os projetos de impacto e soluções socioculturais.'
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

    return (
        <div className="fixed bottom-6 right-6 z-[100] md:bottom-10 md:right-10 flex items-center justify-center">
            {/* Efeito de Ping/Pulso ao redor do botão para chamar atenção (UX) */}
            <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 animate-ping"></span>
            
            <Link
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Fale com a OndaSup no WhatsApp"
                className="
                    relative
                    bg-green-500 hover:bg-green-600 
                    text-white
                    w-14 h-14 md:w-16 md:h-16 
                    rounded-full shadow-2xl 
                    flex items-center justify-center
                    transition-all duration-300 
                    hover:scale-110 active:scale-95
                    group
                "
            >
                <WhatsappLogo 
                    weight="fill" 
                    className="w-8 h-8 md:w-10 md:h-10 transition-transform group-hover:rotate-12" 
                />
                
                {/* Tooltip opcional que aparece no hover (Desktop) */}
                <span className="absolute right-full mr-4 bg-zinc-900 text-white text-xs font-bold py-2 px-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/10 hidden md:block">
                    Fale com a gente!
                </span>
            </Link>
        </div>
    )
}