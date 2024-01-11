import React from 'react'
import Service3D from '../../objects3D/Service3D'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'

const ServiceDesign = () => {
  return (
    <Canvas camera={{fov:25, position:[5,5,5]}}>
        <Stage>
          <Service3D scale={[0.3, 0.3, 0.3]} />
        </Stage>
        <OrbitControls enableZoom={false} />
        <ambientLight position={70}/>
        <directionalLight position={[10,10,10]}/> 
    </Canvas>
  )
}

export default ServiceDesign