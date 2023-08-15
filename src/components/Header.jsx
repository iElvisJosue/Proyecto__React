// IMPORTAMOS EL varRoot
import { varRoot } from './Const.jsx'
// IMPORTAMOS LOS ESTADOS
import { useState, useEffect } from 'react'
// IMPORTAMOS LOS ESTILOS DEL HEADER
import '../styles/Header.css'
import '../styles/HeaderResponsive.css'
import '../styles/DarkMode.css'

export function Header () {

    const [theme, setTheme] = useState(false)
    
    useEffect(() => {
        if(localStorage.getItem('Countries__Theme')){
            varRoot.classList.add('Dark')
            setTheme(!theme)
        }
    },[])

    const setLightMode = () => {
        setTheme(!theme)
        varRoot.classList.remove('Dark')
        localStorage.removeItem('Countries__Theme', 'Dark')
    }
    const setDarkMode = () => {
        setTheme(!theme)
        varRoot.classList.add('Dark')
        localStorage.setItem('Countries__Theme', 'Dark')
    }

    const iconTheme = theme ? 'Sunny' : 'Moon'
    const nameTheme = theme ? 'Light Mode' : 'Dark Mode'
    const nameFunction = theme ? setLightMode : setDarkMode

    return(
        <header className="Container__Header">
            <h1 className="Container__Header--Title">
                Where in the world?
            </h1>
            <div className="Container__Header--DarkMode" onClick={nameFunction}>
                <ion-icon name={iconTheme} role="img"></ion-icon>
                {nameTheme}
            </div>
        </header>
    )

}