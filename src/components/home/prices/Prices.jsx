import React from 'react'
import './prices.css'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Hongo from '../../objects3D/Hongo'

const Prices = () => {
  return (
    <section className='section-prices'>
        <Canvas camera={{fov:25, position:[25,25,25]}}>
                <OrbitControls enableZoom={false} autoRotate/>
                <ambientLight intensity={5}/>
                <Hongo />
          </Canvas>
    </section>
  )
}

export default Prices