import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/model/eggel.gltf')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null} scale={10}>
      <group name="Scene">
        <group name="Plane003" position={[0.214, -0.141, 0]} />
        <mesh name="Cube001" geometry={nodes.Cube001.geometry} material={materials['Material.001']} scale={[1.559, 1.326, 0.981]}>
          <mesh name="BezierCurve001" geometry={nodes.BezierCurve001.geometry} material={materials['04 Weavr']} position={[-0.143, 0.042, 0]} rotation={[0, 0, Math.PI]} scale={[0.441, 0.519, 0.701]} />
          <mesh name="Cube002" geometry={nodes.Cube002.geometry} material={materials['04 Weavr']} position={[0, 0.005, 0]} scale={[0.686, 0.96, 0.99]} />
          <mesh name="Cube006" geometry={nodes.Cube006.geometry} material={nodes.Cube006.material} position={[0.046, 0.024, -0.045]} scale={[0.035, 0.041, 0.055]} />
          <mesh name="Curve001" geometry={nodes.Curve001.geometry} material={materials['Material.003']} position={[-0.025, 0.001, 0.084]} rotation={[1.443, 0, 0]} scale={[0.566, 0.896, 0.669]} />
          <mesh name="Plane001" geometry={nodes.Plane001.geometry} material={materials.Material} position={[0.043, 0.092, 0]} rotation={[0, -Math.PI / 2, 0]} scale={[0.814, 0.602, 0.512]} />
        </mesh>
      </group>
    </group>
  )
}

useGLTF.preload('/eggel.gltf')



