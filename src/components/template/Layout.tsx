import React from 'react'
import MenuLateral from './MenuLateral'
import Cabecalho from './Cabecalho'
import Conteudo from './Conteudo'
import useAppData from '@/src/data/hook/useAppData'
import ForcarAutenticacao from '../auth/ForcarAutenticacao'

interface LayoutProps {
    titulo: string
    subtitulo: string
    children?: any
}

const Layout = (props: LayoutProps) => {

  const context = useAppData()

  return (
    <ForcarAutenticacao>
      <div className={`${context.tema} flex h-screen w-screen`}>
          <MenuLateral />
          <div className={`flex flex-col w-full p-7
          bg-gray-300 dark:bg-gray-800
          `}>
              <Cabecalho titulo={props.titulo} subtitulo={props.subtitulo}/>
              <Conteudo>
                  {props.children}
              </Conteudo>
          </div>
      </div>
    </ForcarAutenticacao>
  )
}

export default Layout