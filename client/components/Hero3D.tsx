import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

function GeometricCore() {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const t = clock.getElapsedTime();
    meshRef.current.rotation.x = t * 0.15;
    meshRef.current.rotation.y = t * 0.25;
    meshRef.current.position.y = Math.sin(t * 0.5) * 0.3;
  });

  return (
    <Float speed={1} rotationIntensity={0.1} floatIntensity={0.3}>
      <mesh ref={meshRef}>
        <torusKnotGeometry args={[1, 0.3, 64, 12]} />
        <meshStandardMaterial
          color="#00ff00"
          emissive="#00ff00"
          emissiveIntensity={0.4}
          roughness={0.3}
          metalness={0.8}
          transparent
          opacity={0.85}
        />
      </mesh>
    </Float>
  );
}

function OrbitalRing() {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = clock.getElapsedTime() * 0.15;
    groupRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.1) * 0.15;
  });

  return (
    <group ref={groupRef}>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[2.0, 2.05, 48]} />
        <meshBasicMaterial color="#00ff00" transparent opacity={0.15} side={THREE.DoubleSide} />
      </mesh>
      <mesh rotation={[Math.PI / 2.5, 0.3, 0]}>
        <ringGeometry args={[2.6, 2.65, 48]} />
        <meshBasicMaterial color="#ff9900" transparent opacity={0.1} side={THREE.DoubleSide} />
      </mesh>
      <mesh rotation={[Math.PI / 3, -0.2, 0.4]}>
        <ringGeometry args={[3.2, 3.25, 48]} />
        <meshBasicMaterial color="#0099ff" transparent opacity={0.08} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}

function Particles() {
  const count = 200;
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 16;
  }

  const ref = useRef<THREE.Points>(null!);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.y = clock.getElapsedTime() * 0.01;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        color="#00ff00"
        transparent
        opacity={0.5}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none" style={{ contain: "strict" }}>
      <Canvas
        camera={{ position: [0, 0, 4.5], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={0.3} />
        <GeometricCore />
        <OrbitalRing />
        <Particles />
      </Canvas>
    </div>
  );
}
