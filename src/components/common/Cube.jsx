import React, { useRef } from 'react'
import {PerspectiveCamera, RenderTexture, Text } from '@react-three/drei'

const Cube = () => {
    const textRef = useRef()

  return (
    <mesh>
        <boxGeometry/>
        <meshStandardMaterial>
          <RenderTexture attach="map">
            <PerspectiveCamera makeDefault position={[0,0,5]}/>
            <color attach="background" args={["#DC9DCD"]}/>
            <Text ref={textRef} fontSize={1} color="#555">
              Piero
            </Text>
          </RenderTexture>
        </meshStandardMaterial>
    </mesh>
  )
}

export default Cube