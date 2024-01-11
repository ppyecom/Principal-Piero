import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <>
        <header>
            <div className="container-he">
                <div className="navbar">
                    <div className="icon-h">
                        <img src="./icons/logo.png" alt="" />
                    </div>
                    <nav>
                        <ul>
                            
                            <li><a href="/home">Home</a></li>
                            <li><a href="/skills">Skills</a></li>
                            <li><a href="/projectsgit">Proyectos</a></li>
                            <li><a href="/Contact">Contacto</a></li>
                        </ul>
                    </nav>
                </div>
                
                <div className="icon-s">
                    <a href="./cv/CVPIEROGA.pdf" download='CVPIEROGA.pdf'><img src="./icons/download_icon.png" alt="" /></a> 
                    <button className='bnav'>Contratar</button>
                </div>
            </div>
        </header>
    </>
  )
}

export default Header