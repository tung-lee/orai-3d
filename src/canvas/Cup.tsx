import * as THREE from "three";
import { useState } from "react";
import { BASE64_CAT } from "../constant/index";
import {
  useGLTF,
  useTexture,
  OrbitControls,
  PivotControls,
  AccumulativeShadows,
  RandomizedLight,
  Decal,
} from "@react-three/drei";
import { useSnapshot } from "valtio";

import state from "../store";

export default function Cup(props) {
  const snap = useSnapshot(state);
  const [pos, setXYZ] = useState([0, 0.75, 0.3]);
  const [rot, setRot] = useState([0, 0, 0]);
  const { nodes, materials } = useGLTF("/coffee-transformed.glb");

  const { debug, image, scale } = props.controls;

  const logoTexture = useTexture(
    props.decalImageURL ? props.decalImageURL : BASE64_CAT
  );
  const fullTexture = useTexture(
    props.decalImageURL ? props.decalImageURL : BASE64_CAT
  );

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
        {snap.isLogoTexture && (
          <group position={[0, 0.75, 0.5]}>
            <PivotControls
              scale={0.55}
              activeAxes={[true, true, false]}
              onDrag={(local) => {
                const position = new THREE.Vector3();
                const scale = new THREE.Vector3();
                const quaternion = new THREE.Quaternion();
                local.decompose(position, quaternion, scale);
                const rotation = new THREE.Euler().setFromQuaternion(
                  quaternion
                );
                setXYZ([position.x, position.y + 0.75, position.z + 0.3]);
                setRot([rotation.x, rotation.y, rotation.z]);
              }}
            />
          </group>
        )}

        {snap.isFullTexture && (
          <Decal
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
            scale={1 * scale}
            map={fullTexture}
          />
        )}
        {snap.isLogoTexture && (
          <Decal
            debug={debug}
            position={pos}
            rotation={rot}
            scale={1 * scale}
            // map={useTexture(image)}
            map={fullTexture}
          />
        )}
      </mesh>
    </>
  );
}
