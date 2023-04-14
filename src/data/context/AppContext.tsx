import { createContext, useState } from "react";
import useLocalStorage from "../hook/useLocalStorage";

type Tema = 'dark' | ''

interface AppContextProps {
    tema?: Tema
    alternarTema?: () => void
}

const AppContext = createContext<AppContextProps>({})

export const AppProvider = (props:any) => {

    const [tema, setTema] = useLocalStorage<Tema>('tema', '');

    const alternarTema = () => {
        setTema(tema === '' ? 'dark' : '')
    }

    return(
        <AppContext.Provider value={{
            tema,
            alternarTema
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContext
export const AppConsumer = AppContext.Consumer