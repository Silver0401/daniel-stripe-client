import * as THREE from "three";
import { useRef } from "react";
import { useGLTF, OrbitControls } from "@react-three/drei";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

type GLTFResult = GLTF & {
  nodes: {
    Cylinder002__0: THREE.Mesh;
  };
  materials: {
    ["Scene_-_Root"]: THREE.MeshStandardMaterial;
  };
};

export default function BitcoinModel(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>();
  const { nodes, materials } = useGLTF("/models/scene.gltf") as GLTFResult;
  return (
    <>
      <group ref={group} {...props} dispose={null} position={[3.5, -36.5, 15]}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <group position={[-3.49, 36.23, -11.29]}>
              <mesh
                geometry={nodes.Cylinder002__0.geometry}
                material={materials["Scene_-_Root"]}
              />
            </group>
          </group>
        </group>
      </group>
      <OrbitControls />
    </>
  );
}

useGLTF.preload("/models/scene.gltf");
