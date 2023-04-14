import { IconeLua, IconeSol } from "../icons"

interface BotaoAlternarTemaProps {
    tema?:string
    alternarTema?: () => void
}

const BotaoAlternarTema = (props: BotaoAlternarTemaProps) => {
  return props.tema === 'dark' ?  (
    <div onClick={props.alternarTema} className={`
        hidden sm:flex items-center
        bg-gradient-to-r from-yellow-300 to-yellow-600
        w-14 lg:w-24 h-8 p-1 rounded-full
        cursor-pointer
        text-sm font-bold
    `}>
        <div className={`
            flex items-center justify-center
            bg-white text-yellow-600
            w-6 h-6
            rounded-full
            
        `}>
            {IconeSol('h-4 w-4')}
        </div>
        <div className={`
            hidden lg:flex items-center ml-3 text-white
        `}>
            <span>Claro</span>
        </div>
    </div>
  ) : (
    <div>
        <div onClick={props.alternarTema} className={`
        hidden sm:flex items-center
        bg-gradient-to-r from-gray-500 to-gray-900
        w-14 lg:w-24 h-8 p-1 rounded-full
        cursor-pointer
        text-sm font-bold
    `}>
        <div className={`
            hidden lg:flex items-center ml-1 text-white
        `}>
            <span>Escuro</span>
        </div>
        <div className={`
            flex items-center justify-center
            bg-gray-950 text-white
            w-6 h-6
            rounded-full
            lg:ml-2
            ml-5
            
        `}>
            {IconeLua('h-4 w-4')}
        </div>
        
    </div>
    </div>
  )
}

export default BotaoAlternarTema