import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  SpotLight,
  useGLTF,
  OrbitControls,
  Preload,
  useDepthBuffer,
} from "@react-three/drei";
import { Vector3 } from "three";
import CanvasLoader from "../Loader";

// MovingSpot component for dynamic lighting
function MovingSpot({ vec = new Vector3(), color = "white", ...props }) {
  const light = useRef();
  const { viewport } = useThree();

  useFrame(({ mouse }) => {
    if (light.current) {
      light.current.target.position.lerp(
        vec.set(
          (mouse.x * viewport.width) / 2,
          (mouse.y * viewport.height) / 2,
          0
        ),
        0.1
      );
      light.current.target.updateMatrixWorld();
    }
  });

  return (
    <SpotLight
      castShadow
      ref={light}
      penumbra={1}
      distance={10}
      angle={0.5}
      attenuation={5}
      anglePower={4}
      intensity={2}
      color={color}
      {...props}
    />
  );
}

// Computers component with dynamic lighting
const Computers = ({ isMobile }) => {
  const { scene } = useGLTF("./desktop_pc/scene.gltf");

  // This is a super cheap depth buffer that only renders once (frames: 1 is optional!)
  const depthBuffer = useDepthBuffer({ frames: 1 });

  return (
    <mesh>
      {/* Ambient Light for overall brightness */}
      <ambientLight intensity={0.5} />

      {/* Directional Light for simulating sunlight */}
      <directionalLight
        position={[5, 10, 5]}
        intensity={0.7}
        castShadow
        shadow-mapSize={[2048, 2048]}
      />

      {/* Moving Spot Lights for dynamic lighting */}
      <MovingSpot
        depthBuffer={depthBuffer}
        color="#ff0000" // Red
        position={[-20, 50, 10]}
        angle={0.15}
        penumbra={1}
        intensity={2}
        castShadow
        shadow-mapSize={1024}
        distance={50}
      />
      <MovingSpot
        depthBuffer={depthBuffer}
        color="#00ff00" // Green
        position={[20, 50, -10]}
        angle={0.15}
        penumbra={1}
        intensity={2}
        castShadow
        shadow-mapSize={1024}
        distance={50}
      />
      <MovingSpot
        depthBuffer={depthBuffer}
        color="#0000ff" // Blue
        position={[0, 50, 20]}
        angle={0.15}
        penumbra={1}
        intensity={2}
        castShadow
        shadow-mapSize={1024}
        distance={50}
      />

      {/* Additional Point Light for localized illumination */}
      <pointLight position={[2, 3, 1]} intensity={1} distance={10} decay={2} />

      <primitive
        object={scene}
        scale={isMobile ? 0.25 : 0.5}
        position={isMobile ? [0, -0.25, -0.5] : [0, -3.2, -1]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

// ComputersCanvas component
const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
