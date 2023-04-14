import { useState } from "react"
import AuthInput from "../components/auth/AuthInput"
import { IconeAtencao, IconeGoogle } from "../components/icons"
import useAuth from "../data/hook/useAuth"


const Autenticacao = () => {

    const {cadastrar,login, loginGoogle } = useAuth()

    const [modo, setModo] = useState<'login'  | 'cadastro'>('login')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [confirmaSenha, setConfirmaSenha] = useState('')
    const [erro, setErro] = useState<string>('')

    const exibirErro = (msg:string, tempoEmSegundos = 3) => {
        setErro(msg)
        setTimeout(() => setErro(''), tempoEmSegundos * 1000)
    }

    const checaCadastro = (email:string, senha:string) => {
        if(!email.includes('@')){
            return 'Insira um email válido!'
        }
        if(senha === '' && confirmaSenha === ''){
            return 'Insira senhas válidas!'
        }
        if(senha !== confirmaSenha) {
            return 'As senhas não são iguais!'
        }

        return undefined
    }

    const checaLogin = (email:string, senha:string) => {
        if(!email.includes('@')){
            return 'Insira um email válido!'
        }
        if(senha === ''){
            return 'Insira uma senha válida!'
        }

        return undefined
    }

    const submeter = async () => {
            if(modo === 'login'){

                const error = checaLogin(email, senha)

                error ? exibirErro(error): login?.(email, senha)
            } else {
                const error = checaCadastro(email, senha)

                error ? exibirErro(error): cadastrar?.(email, senha)
            }
    }

  return (
    <div className={`flex h-screen items-center justify-center`}>
        <div className={`
            hidden md:block md:w-1/2 lg:w-2/3
        `}>
            <img src="https://source.unsplash.com/random/?animal" 
            alt="Imagem da Tela de Autenticação"
            className={`h-screen w-full object-cover`}
            />
        </div>
        <div className={`m-10 w-full md:w-1/2 lg:w-1/3`}>
            <h1 className={`
                relative
                text-3xl font-bold mb-5
                after:h-5
                after:w-5
                after:bg-yellow-300
                after:block
                after:absolute
                after:top-2
                after:-z-20
                after:-left-2
                after:rounded-lg
            `}>
                {modo === 'login' ? 'Entre com a Sua Conta' : 'Cadastre-se na Plataforma'}
            </h1>
            {erro ? (
                <div className={`
                bg-red-400 text-white py-3 px-5 my-2
                border border-red-700 rounded-lg
                flex items-center
            `}>
                {IconeAtencao('h-6 w-6')}
                <span className="ml-3">{erro}</span>
            </div>
            ) : false}
            
            <AuthInput
                tipo="email"
                label="Email"
                valor={email}
                valorMudou={setEmail}
                obrigatorio
            />
            <AuthInput
                tipo="password"
                label="Senha"
                valor={senha}
                valorMudou={setSenha}
                obrigatorio
            />
            <AuthInput
                tipo="password"
                label="Confirmar Senha"
                valor={confirmaSenha}
                valorMudou={setConfirmaSenha}
                obrigatorio
                naoRenderizarQuando={modo === 'login'}
            />

            <button onClick={submeter} className={`
                w-full bg-indigo-500 hover:bg-indigo-400
                text-white rounded-lg px-4 py-3 mt-6
            `}>
                {modo === 'login' ? 'Entrar' : 'Cadastrar'}
            </button>

            <hr className={`my-6 border-gray-300 w-full`}/>

            <button onClick={loginGoogle} className={`
                w-full bg-red-500 hover:bg-red-400
                text-white rounded-lg px-4 py-3
                items-center justify-center flex
            `}>
                <div className={`flex h-7 w-7 mr-3
                bg-white justify-center items-center 
                rounded-full`}>{IconeGoogle('h-5 w-5')}
                </div>Entrar com Google
            </button>

            {modo === 'login' ? (
                <p className="mt-8">
                    Novo por aqui?
                    <a onClick={() => setModo('cadastro')} className={`
                        text-blue-500 hover:text-bule-700 font-semibold
                        cursor-pointer
                    `}> Crie uma Conta Gratuitamente</a>
                </p>
            ) : (
                <p className="mt-8">
                    Já possuí uma conta?
                    <a onClick={() => setModo('login')} className={`
                        text-blue-500 hover:text-bule-700 font-semibold
                        cursor-pointer
                    `}> Entre com a suas Credenciais</a>
                </p>
            )}
        </div>
    </div>
  )
}

export default Autenticacao