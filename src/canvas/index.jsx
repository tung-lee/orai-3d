import { Canvas, useThree } from "@react-three/fiber";
import { Environment, Center, OrbitControls, Box, PerspectiveCamera, RandomizedLight, AccumulativeShadows } from "@react-three/drei";
import { useControls } from "leva";
import { GUI } from "dat.gui";

import Shirt from "./Shirt";
import Backdrop from "./Backdrop";
import CameraRig from "./CameraRig";
import Flower from "./Flower";
import Shoes from "./Shoes";
import { useState } from "react";
import Cup from "./Cup";

const CanvasModel = () => {
  //   const [camera, setCamera] = useState({
  //     position: [5, 5, 2],
  //     fov: 25
  //   })
  //   const gui = new GUI({name: 'My Custom GUI'});
  // gui.addFolder('Camera');
  // gui.add(camera, 'fov', 0, 100).onChange((value) => {
  //   setCamera((prev) => {
  //     return {
  //       ...prev,
  //       fov: value
  //     }
  //   })
  // })

  // const [,setCount] = useState(0)
  // setTimeout(() => {
  // setCount((prev) => prev + 1)
  // }, 1000)

  // gui.addFolder(folder1)

  // const { cameraPosition, fov } = useControls({ cameraPosition: [5,5,2], fov: 10 })

  // const { position, fov, scale } = useControls({
  //   position: [5,5,2],
  //   // x: 5,
  //   // y: 5,
  //   // z: 2,
  //   fov: 10,
  //   scale: [1, 1, 1],
  // });
  // console.log(cameraPosition, fov)

  const Temp = () => {
    const camera = useThree(({ camera }) => {
      camera.position.set(...position)
      camera.fov = fov
      camera.updateProjectionMatrix()
      return camera
    })
    console.log(camera)
    console.log(camera.fov)
  }

  

  return (
    // <Canvas
    //   shadows
    //   // Adjust this to make the shirt bigger or smaller, fov: 25 seems perfect for desktop mode
    //   camera={{position: position, fov: fov}}
    //   gl={{ preserveDrawingBuffer: true }}
    //   className="w-full max-w-full h-full transition-all ease-in"
    // >
    //   <Temp />
    //   <ambientLight intensity={0.5} />
    //   <Environment preset="city" />
    //   {/* <PerspectiveCamera position={position} fov={10}> */}
    //     {/* <CameraRig> */}
    //     {/* <Backdrop /> Background */}
    //     <Center>
    //       {/* <Box scale={scale}/> */}
    //       {/* <Shirt /> */}
    //       {/* <Flower/> */}
    //       {/* <Shoes/> */}
    //       <Cup scale={2} position={[0, -1, 0]}/>
    //     </Center>
    //     {/* </CameraRig> */}
    //   {/* </PerspectiveCamera> */}
    //   <OrbitControls />
    // </Canvas>
    <Canvas shadows orthographic camera={{ position: [0, 10, 100], zoom: 140 }}>
    <ambientLight intensity={0.5} />
    <directionalLight intensity={0.5} position={[10, 10, 10]} />
    <Cup scale={2} position={[0, -1, 0]} />
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
