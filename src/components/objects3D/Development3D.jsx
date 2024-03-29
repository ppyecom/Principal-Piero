/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 development3D.gltf --transform 
Files: development3D.gltf [29.91MB] > D:\Paginas_Web\portfolio_pyecom\diseños3d\Development3\development3D-transformed.glb [608.99KB] (98%)
Author: Heinrich (https://sketchfab.com/Gevalt)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/kuma-heavy-robot-r-9000s-8b77bdbe705f4e9697790fd404da49a9
Title: KUMA Heavy Robot R-9000S
*/

import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/development3D-transformed.glb')
  const { actions, names } = useAnimations(animations, group)

  useEffect(() => {
    
    actions[names[0]].play()
  }, [])
  

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <primitive object={nodes._rootJoint} />
        <skinnedMesh name="Object_19" geometry={nodes.Object_19.geometry} material={materials['Material.002']} skeleton={nodes.Object_19.skeleton} position={[-866.654, 1714.409, 8.214]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <skinnedMesh name="Object_21" geometry={nodes.Object_21.geometry} material={materials['Material.001']} skeleton={nodes.Object_21.skeleton} position={[-866.654, 1714.409, 8.214]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      </group>
    </group>
  )
}

useGLTF.preload('/development3D-transformed.glb')
