import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { SpotLight, useGLTF, OrbitControls, Preload } from "@react-three/drei";
import { Vector3 } from "three";
import CanvasLoader from "../Loader";

// MovingSpot component for dynamic lighting
function MovingSpot({ vec = new Vector3(), color = "white", ...props }) {
  const light = useRef();
  const { viewport, pointer } = useThree();

  useFrame(() => {
    if (light.current) {
      const newX = (pointer.x * viewport.width) / 2 || 0;
      const newY = (pointer.y * viewport.height) / 2 || 0;

      if (light.current.target.position.x !== newX || light.current.target.position.y !== newY) {
        light.current.target.position.lerp(vec.set(newX, newY, 0), 0.1);
        light.current.target.updateMatrixWorld();
      }
    }
  });

  return (
    <SpotLight
      castShadow={false}
      ref={light}
      penumbra={1}
      distance={10}
      angle={0.5}
      attenuation={5}
      anglePower={4}
      intensity={2}
      color={color}
      target-position={[0, 0, 0]}
      {...props}
    />
  );
}

// Computers component
const Computers = ({ isMobile }) => {
  const { scene } = useGLTF("/desktop_pc/scene.gltf");

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh && child.geometry) {
        const geom = child.geometry;
        if (!geom.attributes.position) {
          console.error("❌ Missing position attribute in model:", child);
          return;
        }

        const positions = geom.attributes.position.array;
        if (positions.some((val) => isNaN(val))) {
          console.warn("⚠️ Found NaN in geometry positions. Resetting...");
          for (let i = 0; i < positions.length; i++) {
            if (isNaN(positions[i])) positions[i] = 0;
          }
          geom.attributes.position.needsUpdate = true;
        }

        try {
          geom.computeBoundingBox();
          geom.computeBoundingSphere();
        } catch (error) {
          console.error("❌ Error computing bounding data:", error);
        }
      }
    });
  }, [scene]);

  return (
    <mesh>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 10, 5]} intensity={0.7} castShadow={false} />
      <MovingSpot color="#ff0000" position={[-20, 50, 10]} />
      <MovingSpot color="#00ff00" position={[20, 50, -10]} />
      <MovingSpot color="#0000ff" position={[0, 50, 20]} />
      {!isMobile && <pointLight position={[2, 3, 1]} intensity={1} distance={10} decay={2} />}
      <primitive object={scene} scale={isMobile ? 0.25 : 0.5} position={isMobile ? [0, -0.25, -0.5] : [0, -3.2, -1]} rotation={[-0.01, -0.2, -0.1]} />
    </mesh>
  );
};

// ComputersCanvas component
const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => setIsMobile(event.matches);
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  return (
    <Canvas frameloop="demand" shadows={false} dpr={[1, 2]} camera={{ position: [20, 3, 5], fov: 25 }} gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} makeDefault />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

useGLTF.preload("/desktop_pc/scene.gltf");

export default ComputersCanvas;
