import React, { useEffect, useState } from 'react'
import './who.css'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import World3D from '../../objects3D/World3D'
import Header from '../../common/header/Header'

const Who = () => {

  const currentUrl = window.location.pathname
  const [url, seturl] = useState(true)

  useEffect(() => {
    console.log(currentUrl)
    if (currentUrl == '/who'){
      seturl(false)
    }
  }, [])

  return (
    <section className='who-section'>
      {url ? null : <Header />}
      <div className="container-who">
        <div className="left">
          <Canvas className='mundo' camera={{fov:25, position:[5,5,5]}}>
                <OrbitControls enableZoom={false} autoRotate/>
                <ambientLight intensity={5000}/>
                <World3D />
          </Canvas>
          <div className="imagen">
            <img src="./img/world.png" alt="" />
          </div>
          
        </div>
        <div className="right">
          <h1 className='title'>Explorando más allá de los límites convencionales</h1>
          <div className="whatwe">
            <img src="./img/line.png" alt="" />
            <h3>Enfoque</h3>
          </div>
          <label className='subtitle'>Mi enfoque se centra en la innovación, la creatividad y la excelencia técnica, desafiando las expectativas establecidas.</label>
          <button className='bnav'>Ver Proyectos</button></div>
      </div>
    </section>
  )
}

export default Who