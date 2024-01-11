import React from 'react'
import Social3D from '../../objects3D/Social3D'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'

const SocialMedia = () => {
  return (
    <Canvas camera={{fov:25, position:[20,5,25]}}>
        <Stage>
          <Social3D />
        </Stage>
        <OrbitControls enableZoom={false} />
        <ambientLight position={70}/>
        <directionalLight position={[10,10,10]}/> 
    </Canvas>
  )
}

export default SocialMedia