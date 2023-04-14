import React from 'react'
import Layout from '../components/template/Layout'
import useAppData from '../data/hook/useAppData'
import useAuth from '../data/hook/useAuth'

const Notificacoes = () => {
  const {usuario} = useAuth()
  return (
    <Layout titulo='Perfil'
    subtitulo='Aqui você irá mudar as suas configurações'>
      <h1>{usuario?.nome}</h1>
    </Layout>
  )
}

export default Notificacoes