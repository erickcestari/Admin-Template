import Head from 'next/head'
import Image from 'next/image'
import loading from '../../../public/images/loading.gif'
import useAuth from '@/src/data/hook/useAuth'
import router  from 'next/router'

const ForcarAutenticacao = (props:any) => {

    const {usuario, carregando} = useAuth()
    
    const renderizarConteudo = () => {
        return (
            <>
            <Head>
                <script dangerouslySetInnerHTML={{
                    
                    __html: `if(!document.cookie?.includes("admin-template-auth")){
                        window.location.href = "/autenticacao"
                    }`
                }}/>
            </Head>
                {props.children}
            </>
        )
    }

    const renderizarCarregando = () => {
        return(
            <div className={`flex flex-col justify-center items-center h-screen`}>
                <h1 className='text-8xl'>🤚</h1>
                <h1 className='text-4xl font-semibold'>Carregando</h1>
            </div>
        )
    }

    if(!carregando && usuario?.email){
        return renderizarConteudo()
    } else if(carregando) {
        return renderizarCarregando()
    } else {
        router.push('/autenticacao')
        return null
    }
}

export default ForcarAutenticacao