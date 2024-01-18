import { Decal, useGLTF, useTexture } from "@react-three/drei";
import { useSnapshot } from "valtio";

import state from "../store";

export default function Shoes() {
  const snap = useSnapshot(state);
  const fullTexture = useTexture(
    "https://node1-gateway-ipfs.eueno.io/ipfs/QmWpouN8oxE2F67gA6Kxz8sZwn5KyCgXYbWCcn3TXwXPAy"
  );
  const logoTexture = useTexture(
    "https://node1-gateway-ipfs.eueno.io/ipfs/QmWpouN8oxE2F67gA6Kxz8sZwn5KyCgXYbWCcn3TXwXPAy"
  );

  const { nodes } = useGLTF("/shoe.glb");

  return (
    <group>
      <mesh
        castShadow
        geometry={nodes.Object_2.geometry}
        material-roughness={1}
        dispose={null}
        // material={new THREE.MeshStandardMaterial()}
        // material-roughness={4}
        //   scale={[-1, 1, 1]}
        rotation={[0, 0, Math.PI]}
      >
        {snap.isFullTexture && (
          <Decal
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
            scale={1}
            map={fullTexture}
          />
        )}

        <Decal
          position={[-0.05, -0.05, -0.02]}
          rotation={[0, 0, 0]}
          scale={0.06}
          map={logoTexture}
          //map-anisotropy={16}
          // Had to comment this, apparently my PC is not powerfoul enough to hold it!
          depthTest={false}
          depthWrite={true}
        />
      </mesh>
    </group>
  );
}
