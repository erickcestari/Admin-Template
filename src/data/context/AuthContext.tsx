import { createContext, useEffect } from 'react'
import firebase from'../../firebase/config'
import Usuario from '@/src/model/Usuario'
import { ReactNode, useState } from 'react'
import route from 'next/router'
import Cookies from 'js-cookie'

interface AuthContextProps {
    usuario?: Usuario
    carregando?: boolean
    loginGoogle?: () => Promise<void>
    login?: (email:string, senha:string) => Promise<void>
    logout?: () => void
    cadastrar?: (email:string, senha:string) => Promise<void>
}
const AuthContext = createContext<AuthContextProps>({})

const usuarioNormalizado = async (usuarioFirebase: firebase.User | null): Promise<Usuario | undefined> => {
    if(usuarioFirebase) {
        const token = await usuarioFirebase.getIdToken()
        return {
            uid: usuarioFirebase.uid,
            nome: usuarioFirebase.displayName,
            email: usuarioFirebase.email,
            token,
            provedor: usuarioFirebase.providerData[0]?.providerId,
            imagemUrl: usuarioFirebase.photoURL
        }
    } else return undefined
}

const gerenciarCookie = (logado: boolean) => {
    if(logado) {
        Cookies.set('admin-template-auth', String(logado), {expires: 7})
    } else {
        Cookies.remove('admin-template-auth')
    }
}

export const AuthProvider= (props:any) => {
    const [carregando, setCarregando] = useState(true)
    const [usuario, setUsuario] = useState<Usuario>()

    const configuraSessao = async (usuarioFirebase:firebase.User | null) => {
        if(usuarioFirebase?.email) {
            const usuario = await usuarioNormalizado(usuarioFirebase)
            setUsuario(usuario)
            gerenciarCookie(true)
            setCarregando(false)
            return usuario?.email
        } else {
            setUsuario(undefined)
            gerenciarCookie(false)
            setCarregando(false)
            return false
        }
    }

    const loginGoogle = async () => {
        try {
            setCarregando(true)
            const resp = await firebase.auth().signInWithPopup(
                new firebase.auth.GoogleAuthProvider()
            )
            configuraSessao(resp.user)
            route.push('/')
        } finally {
            setCarregando(false)
        }
    }

    const login = async (email:string, senha:string) => {
        try {
            setCarregando(true)
            const resp = await firebase.auth()
                .signInWithEmailAndPassword(email, senha)

            configuraSessao(resp.user)
            route.push('/')
        } finally {
            setCarregando(false)
        }
    }

    const cadastrar = async (email:string, senha:string) => {
        try {
            setCarregando(true)
            const resp = await firebase.auth()
                .createUserWithEmailAndPassword(email, senha)

            configuraSessao(resp.user)
            route.push('/')
        } finally {
            setCarregando(false)
            console.log('cadastrado')
        }
    }

    const logout = async() => {
        try {
            setCarregando(true)
            await firebase.auth().signOut()
            await configuraSessao(null)
        } finally {
            setCarregando(false)
        }
    }

    useEffect(() => {
        if(Cookies.get('admin-template-auth')){
            const cancelar = firebase.auth().onIdTokenChanged(configuraSessao)
            return () => cancelar()
        } else {
            setCarregando(false)
        }
    }, [])

    return(
        <AuthContext.Provider value={{
            usuario,
            carregando,
            login,
            cadastrar,
            loginGoogle,
            logout
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext