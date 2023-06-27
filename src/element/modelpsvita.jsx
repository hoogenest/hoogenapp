import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Modelpsvita(props) {
  const { nodes, materials } = useGLTF("/model/psvita.gltf");
  return (
    <group {...props} dispose={null}scale={2}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box002.geometry}
        material={materials.TOMBOL_KIRI}
        position={[-0.597, 0.004, 0.236]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box003.geometry}
        material={materials["TOMBOL_KIRI.001"]}
        position={[-0.597, 0.004, 0.236]}
        rotation={[-Math.PI / 2, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle003.geometry}
        material={materials.Material}
        position={[-1.4, 0.254, 0.192]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[1, 0.594, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle006.geometry}
        material={materials["Material.003"]}
        position={[-1.4, 0.254, 0.179]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[1, 0.594, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle007.geometry}
        material={materials.Material}
        position={[-1.302, -0.164, 0.229]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.086, 0.069, 0.086]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tombol__1.geometry}
        material={materials.Tomobl}
        position={[1.403, 0.25, 0.221]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tombol__1001.geometry}
        material={materials["Tomobl.001"]}
        position={[1.403, 0.25, 0.221]}
        rotation={[-Math.PI / 2, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle001_Curve.geometry}
        material={nodes.Circle001_Curve.material}
        position={[-1.4, 0.254, 0.192]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[1, 0.594, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box001.geometry}
        material={materials.TOMBOL_KIRI}
        position={[-0.802, 0.247, -0.252]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Landasan_L1_L2.geometry}
        material={materials["Material.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.body_1004.geometry}
        material={materials["Material.002"]}
        position={[0, 0, 0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.body_1005.geometry}
        material={materials["Material.006"]}
        position={[0, 0, 0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.body_1006.geometry}
        material={materials["Material.001"]}
        position={[0, 0, 0.009]}
        scale={0.999}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Landasan_L1_L2001.geometry}
        material={materials["Material.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sony.geometry}
        material={nodes.Sony.material}
        position={[-1.287, 0.532, 0.198]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.064, 0.06, 0.054]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.PS_PNG.geometry}
        material={materials.PS_PNG}
        position={[-1.338, -0.474, 0.202]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.053}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.KACA_KAMERA_BELAKANG.geometry}
        material={materials["Material.002"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.PS_PNG001.geometry}
        material={materials.PS_PNG}
        position={[0.016, -0.41, -0.175]}
        rotation={[Math.PI / 2, 0, 3.124]}
        scale={0.07}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text.geometry}
        material={nodes.Text.material}
        position={[0.28, -0.51, -0.175]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={0.034}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text001.geometry}
        material={nodes.Text001.material}
        position={[0.728, 0.802, 0.095]}
        scale={0.047}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SELECT_AND_START.geometry}
        material={nodes.SELECT_AND_START.material}
        position={[1.202, -0.487, 0.2]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.03}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["playstation-vita"].geometry}
        material={materials["playstation-vita"]}
        position={[0, -0.639, 0.199]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.076}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere.geometry}
        material={materials["Material.007"]}
        position={[0.011, 0.659, -0.086]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.022}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.body_1004_Plate.geometry}
        material={materials["Material.003"]}
        position={[0, 0.028, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube008.geometry}
        material={materials["Body 1"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube008_1.geometry}
        material={materials["Material.005"]}
      />
    </group>
  );
}

useGLTF.preload("/model/psvita.gltf");


