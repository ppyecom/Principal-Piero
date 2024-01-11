/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 service3D.gltf --transform 
Files: service3D.gltf [163.03KB] > D:\Paginas_Web\portfolio_pyecom\diseños3d\ServiceDesign\service3D-transformed.glb [38.54KB] (76%)
Author: berilbasak (https://sketchfab.com/berilbaska)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/ibm-pc-9373fc1154c84e6c943b8e17f56882d6
Title: IBM PC
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/service3D-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_4.geometry} material={materials.Material} position={[0, 0.372, 0]} />
      <mesh geometry={nodes.Object_6.geometry} material={materials['Material.001']} position={[0, 0.372, 0]} />
      <mesh geometry={nodes.Object_10.geometry} material={materials['Material.002']} position={[0, 2.142, 0.495]} rotation={[Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/service3D-transformed.glb')