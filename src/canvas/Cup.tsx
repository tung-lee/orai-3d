import * as THREE from "three";
import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  useGLTF,
  useTexture,
  OrbitControls,
  PivotControls,
  AccumulativeShadows,
  RandomizedLight,
  Decal,
} from "@react-three/drei";
import { useControls } from "leva";

export const App = () => (
  <Canvas shadows orthographic camera={{ position: [0, 10, 100], zoom: 140 }}>
    <ambientLight intensity={0.5} />
    <directionalLight intensity={0.5} position={[10, 10, 10]} />
    <Cup scale={2} position={[0, -1, 0]} />
    <AccumulativeShadows
      temporal
      frames={100}
      alphaTest={0.95}
      opacity={1}
      scale={25}
      position={[0, -1, 0]}
    >
      <RandomizedLight
        amount={8}
        radius={10}
        ambient={0.7}
        intensity={1}
        position={[10, 10, -5]}
        bias={0.01}
        size={10}
      />
    </AccumulativeShadows>
    <OrbitControls makeDefault />
  </Canvas>
);

export default function Cup(props) {
  const [pos, setXYZ] = useState([0, 0.75, 0.3]);
  const [rot, setRot] = useState([0, 0, 0]);
  const { nodes, materials } = useGLTF("/coffee-transformed.glb");
  const { debug, image, scale } = useControls({
    debug: false,
    image: { image: "/0dcfb548989afdf22afff75e2a46a508.jpg" },
    scale: { value: 1, min: 0, max: 2 },
  });
  return (
    <>
      <mesh
        castShadow
        geometry={nodes.coffee_cup_top_16oz.geometry}
        material={materials["13 - Default"]}
        {...props}
        material-aoMapIntensity={1}
        dispose={null}
      >
        <group position={[0, 0.75, 0.5]}>
          <PivotControls
            scale={0.55}
            activeAxes={[true, true, false]}
            onDrag={(local) => {
              const position = new THREE.Vector3();
              const scale = new THREE.Vector3();
              const quaternion = new THREE.Quaternion();
              local.decompose(position, quaternion, scale);
              const rotation = new THREE.Euler().setFromQuaternion(quaternion);
              setXYZ([position.x, position.y + 0.75, position.z + 0.3]);
              setRot([rotation.x, rotation.y, rotation.z]);
            }}
          />
        </group>
        <Decal
          debug={debug}
          position={pos}
          rotation={rot}
          scale={1 * scale}
          map={useTexture(image)}
        />
      </mesh>
    </>
  );
}
