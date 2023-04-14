import Link from 'next/link'
import React from 'react'

interface MenuItemProps {
    url?: string
    texto: string
    icone: any
    onClick?: (evento:any) => void
    style?: string
}

function MenuItem(props: MenuItemProps) {
    function renderizarConteudo() {
        return(
            <div className={`
                flex flex-col justify-center items-center
                h-20 w-20 text-gray-600
                dark:text-gray-200
                ${props.style}
            `}>
                {props.icone}
                <span className={`
                    text-xs font-light
                `}>
                    {props.texto}
                </span>
            </div>
        )
    }
  return (
    <li onClick={props.onClick} className={
        `hover:bg-gray-100 cursor-pointer
            dark:hover:bg-gray-800
        `}>
        {props.url ? (
            <Link href={props.url}>
                {renderizarConteudo()}
            </Link>
        ): (
            renderizarConteudo()
        )}
        
    </li>
  )
}

export default MenuItem