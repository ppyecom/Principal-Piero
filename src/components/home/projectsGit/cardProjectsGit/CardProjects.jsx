import React, { useEffect, useState } from 'react'
import './cardProjects.css'

const CardProjects = ({id, name, html_url, language}) => {

    const imagenServ = `./proj/${name}.png`;
    /*const {data, isLoading} = useFetchLanguages(name)

    useEffect(() => {
        
      }, [data]);*/

  return (
    <div class="card">
        <div class="image"><img src={imagenServ} alt={name} /></div>
        <div class="image__overlay"></div>
        <div class="content">
            <div class="avatar"><img src="https://avatars.githubusercontent.com/u/95370447?v=4" alt="" /></div>
            <div class="content__text">
                <span class="stream__title">🚀
                {name === 'APP_CLIMA_JS' ? <a href="https://clima-maps.netlify.app/">{name}</a> : 
                name === 'landing-cloud-react' ? <a href="https://landing-cloud.netlify.app/">{name}</a> : 
                name === 'challenge_home_react' ? <a href="https://challenge-home-react.netlify.app/">{name}</a> : 
                name === 'React_page_RentUp' ? <a href="https://rentuppy.netlify.app/">{name}</a> : 
                name === 'GENERATE-GIFTS-2.0' ? <a href="https://generate-gift.netlify.app/">{name}</a> :
                name === 'landing-mobile-react' ? <a href="https://appdownloadprueba.netlify.app/">{name}</a> : 
                name === 'tic-tac-toe-game' ? <a href="https://michi-game.netlify.app/">{name}</a> :
                name === 'Game-Oracle-One' ? <a href="https://game-oracle-one.netlify.app/">{name}</a> :
                name === 'ppyecom.github.io' ? <a href="https://ppyecom.github.io/">Encriptador Alura</a> :
                name === 'aluraplay' ? <a href="https://aluraplay-ruddy.vercel.app/">Aluraplay</a> :
                name === 'busquedaPaises-React' ? <a href="https://busqueda-paises-react.vercel.app/">Search Countries</a> :
                name === 'geseosas-3d' ? <a href="https://gaseosas-3d.netlify.app/">Gaseosas 3D</a> :
                name === 'portfolio24' ? <a href="https://portfolio24-eosin.vercel.app/">Portafolio GSAP...</a> :
                name === 'EcommerceGP-REACT' ? <a href="https://ecommerce-gp-react.vercel.app/">EcommerceGP-REACT</a> :
                <a href={html_url}>{name}</a>}
                </span>
                <div class="content__body">
                    <span class="streamer__name">PYECOM</span>
                    <span class="event">{id}</span>
                </div>
                <span class="categories">
                    
                  <a key={language} class="categories__btn" href="#">{language}</a>
                  <a class="categories__btn" href="#">GitHub</a>
                        
                </span>
            </div>
        </div>

        <div className="card-before"></div>
    </div>
  )
}

export default CardProjects