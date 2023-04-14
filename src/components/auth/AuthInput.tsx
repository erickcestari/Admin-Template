import React from 'react'

interface AuthInputProps {
    label: string
    valor: any
    tipo?: 'text' | 'email' | 'password'
    obrigatorio?: boolean
    valorMudou: (novoValor: any) => void
    naoRenderizarQuando?: boolean
}

const AuthInput = (props: AuthInputProps) => {
  return props.naoRenderizarQuando ? null : (
    <div className={`flex flex-col mt-2`}>
        <label>{props.label}</label>
        <input 
        type={props.tipo ?? 'text'}
        value={props.valor}
        onChange={(e) => props.valorMudou?.(e.target.value)}
        required={props.obrigatorio}
        className={`
            px-4 py-4 rounded-lg bg-gray-300 mt-2
            border focus:border-blue-500 focus:bg-white
            focus:outline-none
            hover:border-blue-500
        `}
        />
    </div>
  )
}

export default AuthInput