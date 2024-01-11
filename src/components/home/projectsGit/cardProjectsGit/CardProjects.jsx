import React, { useEffect, useState } from 'react'
import './cardProjects.css'
import useFetchLanguages from '../../../hooks/useFetchLanguages'

const CardProjects = ({id, name, node_id, html_url, languages_url}) => {

    const imagenServ = `./proj/${name}.png`;
    const {data} = useFetchLanguages(languages_url)
    
    const [imagenExiste, setImagenExiste] = useState(true);

    useEffect(() => {
        const verificarExistenciaImagen = async () => {
          try {
            const respuesta = await fetch(imagenServ);
    
            if (!respuesta.ok) {
              // La imagen no existe (código de respuesta diferente de 2xx)
              console.log('La imagen no existe en la ruta especificada.');
              setImagenExiste(false);
            } else {
              console.log('La imagen existe en la ruta especificada.');
            }
          } catch (error) {
            console.error('Error al verificar la existencia de la imagen:', error);
            setImagenExiste(false);
          }
        };
    
        verificarExistenciaImagen();
      }, [imagenServ]);

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