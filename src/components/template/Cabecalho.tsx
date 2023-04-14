import React from 'react'
import Titulo from './Titulo'
import BotaoAlternarTema from './BotaoAlternarTema'
import useAppData from '@/src/data/hook/useAppData'
import AvatarUsuario from './AvatarUsuario'

interface CabecalhoProps {
    titulo: string
    subtitulo: string
}

const Cabecalho = (props: CabecalhoProps) => {

  const context = useAppData()

  return (
    <div className={`flex `}>
        <Titulo titulo={props.titulo} subtitulo={props.subtitulo} />
        <div className={`flex flex-grow justify-end items-center`}>
          <BotaoAlternarTema tema={context.tema} alternarTema={context.alternarTema} />
          <AvatarUsuario className='ml-3'/>
        </div>
    </div>
  )
}

export default Cabecalho