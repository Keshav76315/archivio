/**
 * 3D Retro Objects
 * -----------------
 * Floating 3D models of retro tech (floppy disk, CD, cassette, etc.)
 * To be used as decorative elements across pages
 */

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, RoundedBox } from "@react-three/drei";
import * as THREE from "three";

// Floppy Disk 3D Model
export function FloppyDisk({
  position = [0, 0, 0],
  scale = 1,
  color = "#1a1a2e",
}) {
  const meshRef = useRef();

  useFrame((state) => {
    meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <group ref={meshRef} position={position} scale={scale}>
        {/* Main disk body */}
        <RoundedBox args={[2, 2, 0.15]} radius={0.05}>
          <meshStandardMaterial color={color} />
        </RoundedBox>
        {/* Metal slider */}
        <mesh position={[0, 0.6, 0.1]}>
          <boxGeometry args={[1.4, 0.4, 0.05]} />
          <meshStandardMaterial color="#888" metalness={0.8} roughness={0.2} />
        </mesh>
        {/* Label */}
        <mesh position={[0, -0.3, 0.1]}>
          <boxGeometry args={[1.6, 0.8, 0.02]} />
          <meshStandardMaterial color="#fff" />
        </mesh>
        {/* Corner notch */}
        <mesh position={[0.85, 0.85, 0]}>
          <boxGeometry args={[0.3, 0.3, 0.2]} />
          <meshStandardMaterial color="#0a0a0a" />
        </mesh>
      </group>
    </Float>
  );
}

// CD/DVD 3D Model
export function CompactDisc({ position = [0, 0, 0], scale = 1 }) {
  const meshRef = useRef();

  useFrame((state) => {
    meshRef.current.rotation.z = state.clock.elapsedTime * 0.5;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <group ref={meshRef} position={position} scale={scale}>
        {/* Disc */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1, 0.6, 2, 48]} />
          <meshStandardMaterial
            color="#ccc"
            metalness={0.9}
            roughness={0.1}
            envMapIntensity={1}
          />
        </mesh>
        {/* Rainbow iridescence - simplified */}
        <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0.01, 0]}>
          <ringGeometry args={[0.4, 1, 48]} />
          <meshStandardMaterial
            color="#88f"
            metalness={1}
            roughness={0}
            transparent
            opacity={0.3}
          />
        </mesh>
        {/* Center hole */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[0.15, 0.4, 32]} />
          <meshStandardMaterial color="#333" />
        </mesh>
      </group>
    </Float>
  );
}

// VHS Tape 3D Model
export function VHSTape({
  position = [0, 0, 0],
  scale = 1,
  color = "#1a1a1a",
}) {
  const meshRef = useRef();

  useFrame((state) => {
    meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
  });

  return (
    <Float speed={1} rotationIntensity={0.4} floatIntensity={0.6}>
      <group ref={meshRef} position={position} scale={scale}>
        {/* Main body */}
        <RoundedBox args={[3, 1.8, 0.8]} radius={0.05}>
          <meshStandardMaterial color={color} />
        </RoundedBox>
        {/* Window */}
        <mesh position={[0, 0.3, 0.41]}>
          <boxGeometry args={[2.2, 0.6, 0.02]} />
          <meshStandardMaterial color="#222" transparent opacity={0.8} />
        </mesh>
        {/* Tape reels visible through window */}
        <mesh position={[-0.5, 0.3, 0.35]} rotation={[0, 0, 0]}>
          <cylinderGeometry args={[0.2, 0.2, 0.1, 16]} />
          <meshStandardMaterial color="#333" />
        </mesh>
        <mesh position={[0.5, 0.3, 0.35]} rotation={[0, 0, 0]}>
          <cylinderGeometry args={[0.2, 0.2, 0.1, 16]} />
          <meshStandardMaterial color="#333" />
        </mesh>
        {/* Label */}
        <mesh position={[0, -0.4, 0.41]}>
          <boxGeometry args={[2.4, 0.8, 0.02]} />
          <meshStandardMaterial color="#fff" />
        </mesh>
      </group>
    </Float>
  );
}

// Cassette Tape 3D Model
export function CassetteTape({
  position = [0, 0, 0],
  scale = 1,
  color = "#2a2a2a",
}) {
  const meshRef = useRef();

  useFrame((state) => {
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.4) * 0.1;
    meshRef.current.rotation.y = Math.cos(state.clock.elapsedTime * 0.3) * 0.15;
  });

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.5}>
      <group ref={meshRef} position={position} scale={scale}>
        {/* Main body */}
        <RoundedBox args={[2.5, 1.6, 0.4]} radius={0.03}>
          <meshStandardMaterial color={color} />
        </RoundedBox>
        {/* Tape window */}
        <mesh position={[0, 0.2, 0.21]}>
          <boxGeometry args={[1.8, 0.6, 0.02]} />
          <meshStandardMaterial color="#111" transparent opacity={0.9} />
        </mesh>
        {/* Reel circles */}
        <mesh position={[-0.4, 0.2, 0.2]}>
          <cylinderGeometry args={[0.2, 0.2, 0.05, 16]} />
          <meshStandardMaterial color="#444" />
        </mesh>
        <mesh position={[0.4, 0.2, 0.2]}>
          <cylinderGeometry args={[0.2, 0.2, 0.05, 16]} />
          <meshStandardMaterial color="#444" />
        </mesh>
        {/* Label area */}
        <mesh position={[0, -0.35, 0.21]}>
          <boxGeometry args={[2.2, 0.6, 0.02]} />
          <meshStandardMaterial color="#ff6600" />
        </mesh>
      </group>
    </Float>
  );
}

// Old Computer/Monitor 3D Model
export function OldComputer({ position = [0, 0, 0], scale = 1 }) {
  const meshRef = useRef();
  const screenRef = useRef();

  useFrame((state) => {
    meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    // Screen flicker effect
    if (screenRef.current) {
      screenRef.current.material.emissiveIntensity =
        0.3 + Math.sin(state.clock.elapsedTime * 10) * 0.05;
    }
  });

  return (
    <Float speed={0.5} rotationIntensity={0.2} floatIntensity={0.3}>
      <group ref={meshRef} position={position} scale={scale}>
        {/* Monitor body */}
        <RoundedBox args={[3, 2.5, 2]} radius={0.1} position={[0, 0.5, 0]}>
          <meshStandardMaterial color="#e0d8c8" />
        </RoundedBox>
        {/* Screen bezel */}
        <mesh position={[0, 0.5, 1.01]}>
          <boxGeometry args={[2.4, 1.8, 0.1]} />
          <meshStandardMaterial color="#1a1a1a" />
        </mesh>
        {/* Screen */}
        <mesh ref={screenRef} position={[0, 0.5, 1.06]}>
          <boxGeometry args={[2.2, 1.6, 0.02]} />
          <meshStandardMaterial
            color="#003300"
            emissive="#00ff00"
            emissiveIntensity={0.3}
          />
        </mesh>
        {/* Keyboard */}
        <RoundedBox args={[3, 0.2, 1.2]} radius={0.05} position={[0, -1, 1]}>
          <meshStandardMaterial color="#d0c8b8" />
        </RoundedBox>
      </group>
    </Float>
  );
}

// Retro Gaming Controller
export function GameController({
  position = [0, 0, 0],
  scale = 1,
  color = "#333",
}) {
  const meshRef = useRef();

  useFrame((state) => {
    meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.6) * 0.15;
  });

  return (
    <Float speed={2.5} rotationIntensity={0.5} floatIntensity={1}>
      <group ref={meshRef} position={position} scale={scale}>
        {/* Main body */}
        <RoundedBox args={[2.5, 1, 0.4]} radius={0.2}>
          <meshStandardMaterial color={color} />
        </RoundedBox>
        {/* D-pad */}
        <mesh position={[-0.7, 0, 0.25]}>
          <boxGeometry args={[0.15, 0.5, 0.1]} />
          <meshStandardMaterial color="#222" />
        </mesh>
        <mesh position={[-0.7, 0, 0.25]}>
          <boxGeometry args={[0.5, 0.15, 0.1]} />
          <meshStandardMaterial color="#222" />
        </mesh>
        {/* Buttons */}
        <mesh position={[0.6, 0.1, 0.25]}>
          <cylinderGeometry args={[0.12, 0.12, 0.08, 16]} />
          <meshStandardMaterial color="#ff0000" />
        </mesh>
        <mesh position={[0.9, -0.05, 0.25]}>
          <cylinderGeometry args={[0.12, 0.12, 0.08, 16]} />
          <meshStandardMaterial color="#0000ff" />
        </mesh>
      </group>
    </Float>
  );
}

// Pixel Art Star (simple decorative)
export function PixelStar({
  position = [0, 0, 0],
  scale = 1,
  color = "#ffff00",
}) {
  const meshRef = useRef();
  const scaleRef = useRef(scale);

  // Keep scaleRef in sync with prop
  scaleRef.current = scale;

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.z = state.clock.elapsedTime;
    const pulse = 1 + Math.sin(state.clock.elapsedTime * 3) * 0.1;
    meshRef.current.scale.setScalar(scaleRef.current * pulse);
  });

  return (
    <mesh ref={meshRef} position={position}>
      <octahedronGeometry args={[0.3]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.5}
      />
    </mesh>
  );
}
