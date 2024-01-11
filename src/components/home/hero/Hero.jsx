import React from 'react'
import './hero.css'
import Header from '../../common/header/Header'
import { MeshDistortMaterial, OrbitControls, Sphere } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

const Hero = () => {

  const profesion = ['Full Stack </> Developer']

  return (
    <section className='hero-section'>
      <Header />
      <div className="container-hero">
        <div className="left">
          <h1 className='title'>Hi, I'm Piero Pyecom</h1>
          <div className="whatwe">
            <img src="./img/line.png" alt="" />
            <h3>{profesion}</h3>
          </div>
          <label className='subtitle'>¡Hola! Soy Piero Amilcar, un desarrollador Full Stack con sede en Lima, Perú. Diseño páginas web, desarrollo sistemas y sistemas de gestión con tecnologías como React y ASP.NET. Además, tengo experiencia en marketing digital orientada a impulsar las ventas y maximizar el rendimiento empresarial.</label>
          <div className="bts">
            <a href='./cv/CVPIEROGA.pdf' className='bnav' download='CVPIEROGA.pdf'>Descargar CV</a>
            <div className="buttons-section">
              <a href='https://github.com/ppyecom' className='buttons'><img src="./icons/github_icon.svg" alt="" /></a>
              <a href='https://www.linkedin.com/in/pieroga/' className='buttons'><img src="./icons/linkedin_icon.svg" alt="" /></a>
              <a href='https://www.instagram.com/pyecom/' className='buttons'><img src="./icons/instagram_icon.svg" alt="" /></a>
            </div>
          </div>
          
        </div>
        <div className="right">
          <Canvas>
                <OrbitControls enableZoom={false}/>
                <ambientLight intensity={1}/>
                <directionalLight position={[3,2,1]}/>
                <Sphere args={[1,100,200]} scale={2.4}>
                  <MeshDistortMaterial color="#3D1C56" attach="material" distort={0.5} speed={2} />
                </Sphere>
                
          </Canvas>
          <img src="./img/moon.png" alt="" />
        </div>
      </div>
    </section>
  )
}

export default Hero