import React, { useRef } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { Cone, OrbitControls } from '@react-three/drei';

function Cones() {
  const mesh1 = useRef<THREE.Mesh>(null);
  const mesh2 = useRef<THREE.Mesh>(null);
  const speed = 0.008;

useFrame((state) => {
  if (mesh1.current && mesh2.current) {
    // Rotate only for the first 5 seconds
    if (state.clock.getElapsedTime() <= 5) {
      mesh1.current.rotation.x += speed;
      mesh1.current.rotation.y += speed;
      
    }

    // Add up and down movement
    mesh1.current.position.y = Math.sin(state.clock.getElapsedTime()) * 0.5;
    mesh2.current.position.y = Math.sin(state.clock.getElapsedTime()) * 0.5;

    if (state.clock.getElapsedTime() > 2) {
      // Move the cones towards each other
      if (mesh1.current.position.x < 0) {
        mesh1.current.position.x += speed;
      }
      if (mesh2.current.position.x > 0) {
        mesh2.current.position.x -= speed;
      }
    }
  }
});;

  return (
    <>
    
      <Cone ref={mesh1} args={[1, 2, 5]} position={[-1, 0, 2]}>
        <meshBasicMaterial attach="material" color="gray" wireframe />
      </Cone>
      <Cone ref={mesh2} args={[1, 2, 5]} position={[1, 0, 0]}>
        <meshBasicMaterial attach="material" color="gray" wireframe />
      </Cone>
    </>
    
  );
}

function Ladder() {
  return (
    <Canvas>
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false}  />
      <Cones />
    </Canvas>
  );
}

export default Ladder;