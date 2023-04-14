import React from 'react'
import Link from 'next/link'
import useAuth from '@/src/data/hook/useAuth'

interface AvatarUsuarioProps {
    className?: string
}

const AvatarUsuario = (props: AvatarUsuarioProps) => {

    const { usuario } = useAuth() 
  return (
    <>
    <Link href="/perfil">
        <img 
        src={usuario?.imagemUrl ? `${usuario.imagemUrl}`:'/images/avatar.svg'} 
        alt="Avatar do Usuário"
        className={` h-10 w-10 rounded-full cursor-pointer ${props.className}`}
        />
    </Link>
    </>
  )
}

export default AvatarUsuario