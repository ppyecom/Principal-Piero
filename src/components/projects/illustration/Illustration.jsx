import React from 'react'
import Illustration3D from '../../objects3D/Illustration3D'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'

const Illustration = () => {
  return (
    <Canvas camera={{fov:25, position:[5,5,5]}}>
        <Stage>
          <Illustration3D scale={[1, 1, 1]}/>
        </Stage>
        <OrbitControls enableZoom={false} autoRotate/>
        <ambientLight position={70}/>
        <directionalLight position={[10,10,10]}/> 
    </Canvas>
  )
}

export default Illustration