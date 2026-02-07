/**
 * Updated 3D Museum Scene
 * -----------------------
 * Dark space theme with floating exhibit frames, particles, and subtle animations
 * Enhanced for new design system
 */

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars, Float, useTexture } from "@react-three/drei";
import { useRef, Suspense, useMemo } from "react";
import * as THREE from "three";

// Floating exhibit frame - represents archived content
function ExhibitFrame({ position, rotation = [0, 0, 0] }) {
  const meshRef = useRef();

  useFrame((state) => {
    meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <group ref={meshRef} position={position} rotation={rotation}>
        {/* Frame border */}
        <mesh castShadow>
          <boxGeometry args={[2.2, 1.6, 0.1]} />
          <meshStandardMaterial
            color="#151a40"
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>

        {/* Inner screen (glowing) */}
        <mesh position={[0, 0, 0.06]}>
          <planeGeometry args={[2, 1.4]} />
          <meshStandardMaterial
            color="#0a0e27"
            emissive="#00d9ff"
            emissiveIntensity={0.15}
          />
        </mesh>

        {/* Cyan edge glow */}
        <mesh position={[0, 0, -0.01]}>
          <boxGeometry args={[2.3, 1.7, 0.02]} />
          <meshBasicMaterial color="#00d9ff" transparent opacity={0.3} />
        </mesh>
      </group>
    </Float>
  );
}

// Digital dust particles
function Particles({ count = 500 }) {
  const mesh = useRef();

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 40;
      const y = (Math.random() - 0.5) * 20;
      const z = (Math.random() - 0.5) * 40;
      temp.push(x, y, z);
    }
    return new Float32Array(temp);
  }, [count]);

  useFrame((state) => {
    mesh.current.rotation.y = state.clock.elapsedTime * 0.02;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#00d9ff"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

// Floor with grid pattern
function Floor() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]} receiveShadow>
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial color="#0a0e27" metalness={0.9} roughness={0.4} />
    </mesh>
  );
}

// Loading fallback
function Loader() {
  const meshRef = useRef();

  useFrame((state) => {
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[0.5, 1]} />
      <meshBasicMaterial color="#00d9ff" wireframe />
    </mesh>
  );
}

function MuseumScene() {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 2, 12], fov: 50 }}
      style={{
        background: "linear-gradient(180deg, #0a0e27 0%, #0f1433 100%)",
      }}
    >
      <Suspense fallback={<Loader />}>
        {/* Ambient lighting */}
        <ambientLight intensity={0.15} />

        {/* Key light - cyan tint */}
        <pointLight position={[10, 10, 10]} intensity={0.8} color="#ffffff" />

        {/* Accent lights */}
        <pointLight position={[-10, 5, -10]} intensity={0.4} color="#00d9ff" />
        <pointLight position={[10, 5, -10]} intensity={0.3} color="#a855f7" />

        {/* Stars background */}
        <Stars
          radius={80}
          depth={60}
          count={3000}
          factor={4}
          saturation={0}
          fade
          speed={0.5}
        />

        {/* Digital dust particles */}
        <Particles count={300} />

        {/* Floating exhibit frames - arranged in space */}
        <ExhibitFrame position={[-6, 1, -4]} rotation={[0, 0.3, 0]} />
        <ExhibitFrame position={[0, 2, -8]} rotation={[0, 0, 0]} />
        <ExhibitFrame position={[6, 0.5, -4]} rotation={[0, -0.3, 0]} />
        <ExhibitFrame position={[-4, -0.5, 2]} rotation={[0, 0.5, 0]} />
        <ExhibitFrame position={[5, 1.5, 3]} rotation={[0, -0.4, 0]} />
        <ExhibitFrame position={[0, -1, 4]} rotation={[0, 0, 0]} />

        {/* Floor */}
        <Floor />

        {/* Camera controls - subtle auto-rotation */}
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          autoRotate
          autoRotateSpeed={0.3}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 4}
        />
      </Suspense>
    </Canvas>
  );
}

export default MuseumScene;
