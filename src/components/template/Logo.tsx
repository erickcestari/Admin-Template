import React from 'react'
import { IconLogo } from '../icons'


const Logo = () => {
  return (
    <div className={`
        h-10 w-10 rounded-full
        bg-white
        flex flex-col justify-center items-center
        dark:bg-slate-400
    `}>
      
        {IconLogo}

    </div>
  )
}

export default Logo