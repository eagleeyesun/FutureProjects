'use client'

import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import { Logo } from './Logo'

const LogoModel = () => {
  return (
    <Canvas camera={{ position: [0.7, 0.7, 3.7], fov: 38 }}>
      <OrbitControls
        autoRotate
        autoRotateSpeed={10}
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <Logo scale={0.1} position={[0, -0.3, 0]} />
      <Environment preset="studio" />
    </Canvas>
  )
}

export default LogoModel