import React, { useRef, useEffect, useState } from 'react';
import { Mesh, Vector3, BufferGeometry, PointsMaterial, Points, Float32BufferAttribute } from 'three';
import { useFrame, useThree } from '@react-three/fiber';
import { a, useSpring } from '@react-spring/three';

const Sphere: React.FC = () => {
  const mesh = useRef<Mesh>(null);
  const { scene, camera } = useThree();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const props = useSpring<{ scale: [number, number, number] }>({
    scale: [1.5, 1.5, 1.5],
    from: {
      scale: [0, 0, 0],
    },
    config: { duration:2000 },
    reset: false,
    size: 0.005,
  });

  // Create starry background
  useEffect(() => {
    const starGeometry = new BufferGeometry();
    const starMaterial = new PointsMaterial({ color: 0xffffff });

    const starVertices = [];
    for (let i = 0; i < 10000; i++) {
      const x = (Math.random() - 0.5) * 2000;
      const y = (Math.random() - 0.5) * 2000;
      const z = (Math.random() - 0.5) * 2000;
      starVertices.push(x, y, z);
    }

    starGeometry.setAttribute('position', new Float32BufferAttribute(starVertices, 3));

    const stars = new Points(starGeometry, starMaterial);
    scene.add(stars);

    // Clean up on unmount
    return () => {
      scene.remove(stars);
      starGeometry.dispose();
      starMaterial.dispose();
    };
  }, [scene]);

  // Update camera position on mouse move
  useEffect(() => {
    const updateCameraPosition = (event: { clientX: number; clientY: number; }) => {
      setMousePos({
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1
      });
    };

    window.addEventListener('mousemove', updateCameraPosition);

    return () => {
      window.removeEventListener('mousemove', updateCameraPosition);
    };
  }, []);

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.x += 0.001;
      mesh.current.rotation.y += 0.001;
    }

    camera.position.x += (mousePos.x - camera.position.x) * 0.05;
    camera.position.y += (-mousePos.y - camera.position.y) * 0.05;
    camera.lookAt(new Vector3(0, 0, 0));
  });

  return (
    <a.mesh ref={mesh} scale={props.scale}>
      <sphereGeometry args={[2, 2, 8]} />
      <meshBasicMaterial color="gray" wireframe />
    </a.mesh>
  );
};

export default Sphere;