import React, { useState } from 'react'
import './header.css'
import { Link } from 'react-router-dom'
const Header = () => {

    const [toggleList, settoggleList] = useState(false)

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
                    <button className='bnav'><a href="https://wa.link/8m5x1w">Contratar</a></button>
                </div>

                <div className="toggle">
                    <button onClick={() => settoggleList(!toggleList)}><img src="./icons/menu.png" alt="" /></button>
                </div>
                {toggleList ? 
                <div className="position-toggle-nav">
                    <div className="toggle-nav">
                        <ul>  
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/skills">Skills</Link></li>
                            <li><Link to="/projectsgit">Proyectos</Link></li>
                            <li><Link to="/Contact">Contacto</Link></li>
                        </ul>
                    </div>
                </div>
                : ''}
                
            </div>
        </header>
    </>
  )
}

export default Header