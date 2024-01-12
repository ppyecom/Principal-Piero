import React, { useEffect, useState } from 'react'
import './cardProjects.css'
import useFetchLanguages from '../../../hooks/useFetchLanguages'

const CardProjects = ({id, name, node_id, html_url}) => {

    const imagenServ = `./proj/${name}.png`;
    const {data, isLoading} = useFetchLanguages(name)

    useEffect(() => {
        
      }, [data]);

  return (
    <div class="card">
        <div class="image"><img src={imagenServ} alt={name} /></div>
        <div class="image__overlay"></div>
        <div class="content">
            <div class="avatar"></div>
            <div class="content__text">
                <span class="stream__title">🚀<a href={html_url}>{name}</a></span>
                <div class="content__body">
                    <span class="streamer__name">PYECOM</span>
                    <span class="event">{node_id}</span>
                </div>
                <span class="categories">
                    {Object.keys(data).map((lan) => {
                        return(
                            <a key={lan} class="categories__btn" href="#">{lan}</a>
                        )
                    })
                    }
                </span>
            </div>
        </div>

        <div className="card-before"></div>
    </div>
  )
}

export default CardProjects