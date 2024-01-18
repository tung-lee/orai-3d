import { Canvas, useThree } from "@react-three/fiber";
import {
  OrbitControls,
} from "@react-three/drei";
import { useControls } from "leva";

import Shirt from "./Shirt";
import Backdrop from "./Backdrop";
import Shoes from "./Shoes";
import Cup from "./Cup";

const CanvasModel = ({ collectionFound, decalImageURL }) => {
  // R3F Hook must be inside the Canvas component
  const UpdateCamera = () => {
    useThree(({ camera }) => {
      camera.position.set(...position);
      // camera.fov = fov;
      camera.zoom = zoom;
      camera.updateProjectionMatrix();
      return camera;
    });
    // console.log(camera);
    // console.log(camera.fov);
  };

  const controls = useControls({
    debug: false,
    image: { image: "/0dcfb548989afdf22afff75e2a46a508.jpg" },
    scale: { value: 1, min: 0, max: 5 },
    position: [5, 5, 2],
    zoom: 140,
  });
  const { position, zoom } = controls;

  return (
    <Canvas shadows orthographic camera={{ position: position, zoom: zoom }}>
      <UpdateCamera />
      <ambientLight intensity={0.5} />
      <directionalLight intensity={0.5} position={[10, 10, 10]} />
      {/* <Backdrop /> */}
      {collectionFound.name === "Shirt" && (
        <Shirt controls={controls} decalImageURL={decalImageURL} />
      )}
      {collectionFound.name === "Cup" && (
        <Cup
          scale={2}
          position={[0, -1, 0]}
          controls={controls}
          decalImageURL={decalImageURL}
        />
      )}
      {collectionFound.name === "Shoes" && <Shoes />}
      {/* <AccumulativeShadows
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
      </AccumulativeShadows> */}
      <OrbitControls makeDefault />
    </Canvas>
  );
};

export default CanvasModel;
