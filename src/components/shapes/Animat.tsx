import React from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function DynamicModel() {
  const { scene } = useGLTF("/assets/PolyTree.glb");
  const ref = React.useRef<THREE.Object3D>();
  const { gl } = useThree();

  React.useEffect(() => {
    gl.toneMappingExposure = 0.03; // Change this value to adjust the exposure
  }, [gl]);

  React.useEffect(() => {
    if (ref.current) {
      ref.current.scale.set(0.1, 0.1, 0.1); // Scale the object to 3 times its current size
    }
  }, []);

  return <primitive object={scene} dispose={null} ref={ref} />;
}

function Animat() {
  return (
    <div className="w-screen h-screen">
      <Canvas camera={{ position: [0, 10, 20], fov: 45 }}>
      <ambientLight intensity={-2} />
        <pointLight position={[40, 10, 40]} />
        <OrbitControls
          autoRotate={true}
          autoRotateSpeed={0.2}
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
          enableDamping={false}
          target={[0, 0, 0]}
        />
        <DynamicModel />
      </Canvas>
    </div>
  );
}

export default Animat;
