import React, { useEffect, useState } from 'react'
import './works.css'
import WebDesign from '../../projects/webDesign/WebDesign'
import Development from '../../projects/development/Development'
import Illustration from '../../projects/illustration/Illustration'
import SocialMedia from '../../projects/socialMedia/SocialMedia'
import ServiceDesign from '../../projects/serviceDesign/ServiceDesign'
import Header from '../../common/header/Header'

const Works = () => {

  const [work, setwork] = useState("Web Design")

  const ListWorks = ['Web Design','Development','Illustration','Service Design','Social Media']

  const currentUrl = window.location.pathname
  const [url, seturl] = useState(true)

  useEffect(() => {
    console.log(currentUrl)
    if (currentUrl == '/works'){
      seturl(false)
    }
  }, [])


  return (
    <section className='works-section'>
      {url ? null : <Header />}
      <div className="container-works">
        <div className="left">
          <ul>
            {ListWorks.map((lista) => {
              return (
                <li key={lista} texto={lista} onClick={() => {setwork(lista)}}>{lista}</li>
              )
            })}
          </ul>
        </div>
        <div className="right">
          {work === "Web Design" ? (<WebDesign />) : work === "Development" ? (<Development />) : work === "Illustration" ? (<Illustration />) :
          work === "Service Design" ? (<ServiceDesign />) : (<SocialMedia />)}
        </div>
      </div>
    </section>
  )
}

export default Works