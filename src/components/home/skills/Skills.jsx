import React, { useEffect, useState } from 'react';
import './skills.css';
import CardSkills from './cardSkills/CardSkills';
import Header from '../../common/header/Header';

const Skills = () => {

  const cardSk = [
    {img: './icons/skills/aspnet.png', descrip: 'ASPNET'}, {img: './icons/skills/csharp.png', descrip: 'C#'}, {img: './icons/skills/css.png', descrip: 'CSS'}, {img: './icons/skills/html.png', descrip: 'HTML'}, {img: './icons/skills/JavaScript.png', descrip: 'JAVASCRIPT'},
    {img: './icons/skills/mysql.png', descrip: 'MYSQL'}, {img: './icons/skills/github.svg', descrip: 'GITHUB'}, {img: './icons/skills/Python.svg.png', descrip: 'PYTHON'}, {img: './icons/skills/React.svg.png', descrip: 'REACT'}, {img: './icons/skills/sqlserver.png', descrip: 'SQL SERVER'},
    {img: './icons/skills/tailwind.png', descrip: 'TAILWIND'}, {img: './icons/skills/three.png', descrip: 'THREE'}
  ]

  const currentUrl = window.location.pathname
  const [url, seturl] = useState(true)

  useEffect(() => {
    console.log(currentUrl)
    if (currentUrl == '/skills'){
      seturl(false)
    }
  }, [])

  return (
    <section className='section-skills'>
      {url ? null : <Header />}
      <div className="container-skills">
        {cardSk.map((item, index) => {
          return(
            <CardSkills key={index} imagen={item.img} descripcion={item.descrip}/>
          )
        })}
      </div>
    </section>
  )
}

export default Skills