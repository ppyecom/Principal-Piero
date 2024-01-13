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
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/skills">Skills</Link></li>
                            <li><Link to="/projectsgit">Proyectos</Link></li>
                            <li><Link to="/Contact">Contacto</Link></li>
                        </ul>
                    </nav>
                </div>
                
                <div className="icon-s">
                    <a href="./cv/CVPIEROGA.pdf" download='CVPIEROGA.pdf'><img src="./icons/download_icon.png" alt="" /></a> 
                    <button className='bnav'><a href="wa.link/8m5x1w">Contratar</a></button>
                </div>

                <div className="toggle">
                    <button><img src="./icons/menu.png" alt="" /></button>
                </div>
            </div>
        </header>
    </>
  )
}

export default Header