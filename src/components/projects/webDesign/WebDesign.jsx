import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Designweb from '../../objects3D/Designweb'
import React from 'react'

const WebDesign = () => {
  return (
    <Canvas>
        <Stage environment="city" intensity={0.6}>
            <Designweb />
        </Stage>
        <OrbitControls enableZoom={false}/>
        <ambientLight position={70}/>
        <directionalLight position={[10,10,10]}/>
    </Canvas>
  )
}

export default WebDesign