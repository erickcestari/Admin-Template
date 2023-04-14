import React from 'react'
import Layout from '../components/template/Layout'
import useAppData from '../data/hook/useAppData'

const Notificacoes = () => {
  const context = useAppData()
  return (
    <Layout titulo='Notificações'
    subtitulo='Aqui você irá gerenciar suas notificações'>
    </Layout>
  )
}

export default Notificacoes