/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 designweb.gltf --transform 
Files: designweb.gltf [169.41KB] > D:\Paginas_Web\portfolio_pyecom\diseños3d\designweb-transformed.glb [23.37KB] (86%)
Author: peewee.id (https://sketchfab.com/p2eweeworld)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/flat-design-web-b12df26ec16749d1abb589cceac9d1d1
Title: Flat Design WEB
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/designweb-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cube_0.geometry} material={materials.PaletteMaterial001} position={[-0.95, 0.585, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={[2.946, 0.069, 1]} />
      <mesh geometry={nodes.Cube001_0.geometry} material={materials['Material.012']} position={[-1.936, 0.26, 0.024]} rotation={[-Math.PI / 2, 0, 0]} scale={[1.522, 0.074, 0.692]} />
    </group>
  )
}

useGLTF.preload('/designweb-transformed.glb')