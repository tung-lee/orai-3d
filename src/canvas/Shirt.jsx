import { useState } from "react";
import * as THREE from "three";
import { easing } from "maath";
import { useSnapshot } from "valtio";
import { useFrame } from "@react-three/fiber";
import { Decal, PivotControls, useGLTF, useTexture } from "@react-three/drei";

import state from "../store";

const Shirt = ({ controls, decalImageURL }) => {
  const snap = useSnapshot(state);
  const [pos, setXYZ] = useState([0, 0.04, 0.15]);
  const [rot, setRot] = useState([0, 0, 0]);

  const { nodes, materials } = useGLTF("/shirt_baked.glb");
  const { debug, logo, full, logoScale, fullScale } = controls;

  // const logoTexture = useTexture(snap.logoDecal);
  // const fullTexture = useTexture(snap.fullDecal);

  const logoTexture = useTexture(
    decalImageURL ? decalImageURL : logo
  );
  const fullTexture = useTexture(
    decalImageURL ? decalImageURL : full
  );

  useFrame((state, delta) =>
    easing.dampC(materials.lambert1.color, snap.color, 0.25, delta)
  );

  
  return (
    <group>
      <mesh
        castShadow
        geometry={nodes.T_Shirt_male.geometry}
        // material={materials.lambert1}
        material-roughness={1}
        dispose={null}
      >
        {snap.isFullTexture && (
          <Decal
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
            scale={1 * fullScale}
            map={fullTexture}
          />
        )}

        {snap.isLogoTexture && (
          <group position={[0, 0.04, 0.15]}>
            <PivotControls
              scale={0.35}
              activeAxes={[true, true, false]}
              onDrag={(local) => {
                const position = new THREE.Vector3();
                const scale = new THREE.Vector3();
                const quaternion = new THREE.Quaternion();
                local.decompose(position, quaternion, scale);
                const rotation = new THREE.Euler().setFromQuaternion(
                  quaternion
                );
                setXYZ([position.x, position.y + 0.01, position.z + 0.01]);
                setRot([rotation.x, rotation.y, rotation.z]);
              }}
            />
          </group>
        )}

        {snap.isLogoTexture && (
          <Decal
            debug={debug}
            position={pos}
            rotation={rot}
            scale={0.15 * logoScale}
            map={logoTexture}
            //map-anisotropy={16}
            // Had to comment this, apparently my PC is not powerfoul enough to hold it!
            depthTest={false}
            depthWrite={true}
          />
        )}
      </mesh>
    </group>
  );
};

export default Shirt;
