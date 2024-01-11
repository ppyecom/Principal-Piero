import './cardskills.css'
import React from 'react'

const CardSkills = ({imagen, descripcion}) => {
  return (
    <div className="card-skill">
        <div className="imagen-skill">
            <img src={imagen} alt={descripcion} />
        </div>
        <div className="desc">
            <span>{descripcion}</span>
        </div>
    </div>
  )
}

export default CardSkills