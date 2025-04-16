"use client"

import { Suspense, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { useGLTF, Environment, Loader, OrbitControls, Html, Preload } from "@react-three/drei"
import * as THREE from "three"
import Loading from "./Loading"

type GLTFResult = GLTF & {
  nodes: {
    Circle011_EyeFire_0: THREE.Mesh
    Circle011_SerpentBake_0: THREE.Mesh
    Hide003_EyeFire_0: THREE.Mesh
    Hide003_Boat2Bake_0: THREE.Mesh
    Keel002_EyeFire_0: THREE.Mesh
    Keel002_Boat1Bake_0: THREE.Mesh
    Plane044_WaterBake_0: THREE.Mesh
    Rock021_RockBake_0: THREE.Mesh
    VikingShipObjects001_Objects_0: THREE.Mesh
    VikingShipObjects001_Objects_0_1: THREE.Mesh
  }
  materials: {
    EyeFire: THREE.MeshStandardMaterial
    SerpentBake: THREE.MeshStandardMaterial
    Boat2Bake: THREE.MeshStandardMaterial
    Boat1Bake: THREE.MeshStandardMaterial
    WaterBake: THREE.MeshStandardMaterial
    RockBake: THREE.MeshStandardMaterial
    Objects: THREE.MeshStandardMaterial
  }
}

function Model(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>(null!)
  const { nodes, materials } = useGLTF("/models/thor_and_the_midgard_serpent-transformed.glb") as GLTFResult

  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={[0.01, 0.01, 0.01]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          {/* Circle with serpent and eye */}
          <group rotation={[-Math.PI / 2, 0, 0]} scale={[100, 100, 100]}>
            <mesh geometry={nodes.Circle011_EyeFire_0.geometry} material={materials.EyeFire} />
            <mesh geometry={nodes.Circle011_SerpentBake_0.geometry} material={materials.SerpentBake} material-metalness={0} />
          </group>

          {/* Boat group 1 */}
          <group position={[-1018.2, -380.53, 1332.67]} rotation={[-1.05, 0.72, -0.08]} scale={[100, 100, 100]}>
            <mesh geometry={nodes.Hide003_EyeFire_0.geometry} material={materials.EyeFire} />
            <mesh geometry={nodes.Hide003_Boat2Bake_0.geometry} material={materials.Boat2Bake} />
          </group>

          {/* Boat group 2 */}
          <group position={[349.57, 32.32, 176.64]} rotation={[-1.73, -0.23, -2.65]} scale={[100, 100, 100]}>
            <mesh geometry={nodes.Keel002_EyeFire_0.geometry} material={materials.EyeFire} />
            <mesh geometry={nodes.Keel002_Boat1Bake_0.geometry} material={materials.Boat1Bake} />
          </group>

          {/* Water surface */}
          <group position={[0, 27.07, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={[100, 100, 170.02]}>
            <mesh geometry={nodes.Plane044_WaterBake_0.geometry}>
              <meshPhysicalMaterial
                color="skyblue"
                transmission={1}
                thickness={5}
                roughness={0}
                envMapIntensity={2}
                clearcoat={1}
              />
            </mesh>
          </group>

          {/* Rocks */}
          <group rotation={[-Math.PI / 2, 0, 0]} scale={[100, 100, 100]}>
            <mesh geometry={nodes.Rock021_RockBake_0.geometry} material={materials.RockBake} material-metalness={0.5} />
          </group>

          {/* Viking Ship Objects */}
          <group scale={[100, 100, 100]}>
            <mesh geometry={nodes.VikingShipObjects001_Objects_0.geometry} material={materials.Objects} />
            <mesh geometry={nodes.VikingShipObjects001_Objects_0_1.geometry} material={materials.Objects} />
          </group>
        </group>
      </group>
    </group>
  )
}

function Rig({ children }: { children: React.ReactNode }) {
  const outer = useRef<THREE.Group>(null!)
  const inner = useRef<THREE.Group>(null!)

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    outer.current.position.y = THREE.MathUtils.lerp(outer.current.position.y, 0, 0.05)
    inner.current.rotation.y += 0.001
    inner.current.position.z = 5 + -Math.sin(t / 3) * 10
    inner.current.position.y = -5 + Math.sin(t / 3) * 2
  })

  return (
    <group position={[0, -100, 0]} ref={outer}>
      <group ref={inner}>{children}</group>
    </group>
  )
}

export default function ThorModel() {
  return (
    <>
      <Canvas linear dpr={[1, 1.5]} performance={{ min: 0.5 }} linear camera={{ position: [0, 15, 30], fov: 70 }} >
        <color attach="background"args={['#89CFF0']} />
        {/* <fog attach="fog" args={[0xfff0ea, 10, 60]} /> */}
        <ambientLight intensity={4} />
        <Suspense fallback={<Html center><Loading /></Html>}>
          <Rig>
            <Model />
          </Rig>
        </Suspense>
        <Environment preset="studio" />
        <Preload all />
      </Canvas>
      {/* <Loader /> */}
    </>
  )
}