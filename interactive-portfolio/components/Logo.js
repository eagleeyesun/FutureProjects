"use client"
import React, { useRef } from 'react'
import { useGLTF, OrthographicCamera } from '@react-three/drei'
import * as THREE from 'three'

export function Logo(props) {
  const { nodes } = useGLTF('/models/sunLogo.gltf')

  // Create a silver metallic material
  const silverMaterial = new THREE.MeshStandardMaterial({
    color: new THREE.Color('silver'),
    metalness: 1,
    roughness: 0.2,
  })

  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group position={[-885.25, -52, 678.73]} rotation={[Math.PI / 2, 0, 0]} scale={1562.5}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Curve001.geometry}
            material={silverMaterial}
            position={[0, 0.113, 0.105]}
            scale={8}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Curve.geometry}
            material={silverMaterial}
            position={[0, 0.112, 0.105]}
            scale={8}
          />
        </group>

        {/* Optional Camera if needed */}
        {/* <OrthographicCamera
          makeDefault={false}
          far={100000}
          near={0}
          position={[319.581, 546.169, 1391.239]}
          rotation={[-Math.PI / 4, 0.615, Math.PI / 6]}
        /> */}
      </group>
    </group>
  )
}

useGLTF.preload('/sunLogo.gltf')