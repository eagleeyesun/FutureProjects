"use client"
import * as THREE from 'three'
import { useLayoutEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { Center, AccumulativeShadows, RandomizedLight, OrbitControls, Environment, useGLTF, Preload } from '@react-three/drei'
import { FlakesTexture } from 'three-stdlib'

const MonkeyModel = () => {
  return (
   
         <div className='w-screen h-screen'>
      <Canvas shadows camera={{ position: [4, 2.5, 8], fov: 35 }}>
        <group position={[0, -0.5, 0]}>
          <Center top>
            <Suzi rotation={[-0.63, 0, 0]} scale={2} />
          </Center>

          <AccumulativeShadows temporal frames={100} color="orange" colorBlend={2} toneMapped={true} alphaTest={0.75} opacity={2} scale={12}>
            <RandomizedLight intensity={Math.PI} amount={8} radius={4} ambient={0.5} position={[5, 5, -10]} bias={0.001} />
          </AccumulativeShadows>
        </group>
        <Environment preset="city" />
        <OrbitControls
          enableZoom={false}
          autoRotate={true}
          autoRotateSpeed={1}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
          enablePan={false}
          />
          <Preload all />
      </Canvas>
    </div>

  )
}

export default MonkeyModel


function Suzi(props) {
    const { scene, materials } = useGLTF('/models/monkey.gltf')
    useLayoutEffect(() => {
      scene.traverse((obj) => obj.isMesh && (obj.receiveShadow = obj.castShadow = true))
      materials.default.color.set('orange')
      materials.default.roughness = 0
      materials.default.normalMap = new THREE.CanvasTexture(new FlakesTexture(), THREE.UVMapping, THREE.RepeatWrapping, THREE.RepeatWrapping)
      materials.default.normalMap.repeat.set(40, 40)
      materials.default.normalScale.set(0.1, 0.1)
    })
    return <primitive object={scene} {...props} />
  }