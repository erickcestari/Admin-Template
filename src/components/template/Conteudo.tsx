import React from 'react'

interface ConteudoProps {
    children?: any
}

const Conteudo = (props: ConteudoProps) => {
  return (
    <div className={`
        flex flex-col mt-7
        dark:text-gray-200
    `}>
        {props.children}
    </div>
  )
}

export default Conteudo