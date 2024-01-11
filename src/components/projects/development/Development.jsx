import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Development3D from '../../objects3D/Development3D'
import React from 'react'

const Development = () => {
  return (
    <Canvas camera={{fov:8000, position:[-700,100,100]}}>
                <OrbitControls enableZoom={false}/>
                <ambientLight intensity={1}/>
                <directionalLight position={[3,2,1]}/>
                <Development3D scale={[0.14, 0.17, 0.17]}/>
          </Canvas>
  )
}

export default Development