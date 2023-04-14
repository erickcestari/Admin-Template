import React from 'react'
import MenuItem from './MenuItem'
import { IconeAjustes, IconeCasa, IconeSair, IconeSino } from '../icons'
import Logo from './Logo'
import useAuth from '@/src/data/hook/useAuth'

const MenuLateral = () => {

  const { logout } = useAuth()

  return (
    <aside className='
    flex flex-col
    bg-gray-200 text-gray-700
  dark:bg-gray-900 dark:text-gray-200
    '>
      <div className={`
        flex flex-col items-center justify-center
        bg-gradient-to-r from-indigo-500 to-purple-500
        h-20 w-20
      `}>
        <Logo />
      </div>
        <ul className='flex-grow'>
            <MenuItem url='/' texto='Início' icone={IconeCasa} />
            <MenuItem url='/ajustes' texto='Ajustes' icone={IconeAjustes} />
            <MenuItem url='/notificacoes' texto='Notificações' icone={IconeSino} />
        </ul>
        <ul>
        <MenuItem  style={
          `text-red-600 dark:text-red-400
         hover:bg-red-400  dark:hover:text-white dark:hover:bg-red-600
         hover:text-white`} onClick ={logout} texto='Sair' icone={IconeSair} />
        </ul>
    </aside>
  )
}

export default MenuLateral