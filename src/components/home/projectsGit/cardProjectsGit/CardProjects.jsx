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
                <span class="stream__title">🚀<a href={html_url}>{name}</a></span>
                <div class="content__body">
                    <span class="streamer__name">PYECOM</span>
                    <span class="event">{id}</span>
                </div>
                <span class="categories">
                    
                  <a key={language} class="categories__btn" href="#">{language}</a>
                        
                </span>
            </div>
        </div>

        <div className="card-before"></div>
    </div>
  )
}

export default CardProjects