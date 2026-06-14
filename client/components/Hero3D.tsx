import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { TorusKnot, MeshDistortMaterial, Float, Sparkles, Stars, Trail } from "@react-three/drei";
import * as THREE from "three";

function GeometricCore() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const startTime = useRef(Date.now());

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const t = clock.getElapsedTime();
    meshRef.current.rotation.x = t * 0.15;
    meshRef.current.rotation.y = t * 0.25;
    meshRef.current.rotation.z = t * 0.05;
    meshRef.current.position.y = Math.sin(t * 0.5) * 0.2;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <TorusKnot ref={meshRef} args={[1, 0.35, 200, 24]}>
        <MeshDistortMaterial
          color="#00ff00"
          emissive="#00ff00"
          emissiveIntensity={0.6}
          roughness={0.2}
          metalness={0.9}
          wireframe={false}
          transparent
          opacity={0.92}
          distort={0.25}
          speed={2}
        />
      </TorusKnot>
      <TorusKnot args={[1.15, 0.38, 200, 24]}>
        <meshBasicMaterial
          color="#00ff00"
          wireframe
          transparent
          opacity={0.15}
        />
      </TorusKnot>
    </Float>
  );
}

function OrbitalRings() {
  const groupRef = useRef<THREE.Group>(null!);
  const ringCount = 3;

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    const t = clock.getElapsedTime();
    groupRef.current.rotation.x = Math.sin(t * 0.2) * 0.3;
    groupRef.current.rotation.y = t * 0.1;
    groupRef.current.rotation.z = Math.cos(t * 0.15) * 0.2;
  });

  return (
    <group ref={groupRef}>
      {Array.from({ length: ringCount }, (_, i) => {
        const radius = 1.8 + i * 0.5;
        const segments = 80;
        const positions = new Float32Array(segments * 3);
        for (let j = 0; j < segments; j++) {
          const theta = (j / segments) * Math.PI * 2;
          positions[j * 3] = Math.cos(theta) * radius;
          positions[j * 3 + 1] = Math.sin(theta) * radius * (0.3 + i * 0.15);
          positions[j * 3 + 2] = Math.sin(theta) * radius * 0.2;
        }
        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
        return (
          <lineSegments key={i} geometry={new THREE.WireframeGeometry(geometry)}>
            <lineBasicMaterial
              color={i === 0 ? "#00ff00" : i === 1 ? "#ff9900" : "#0099ff"}
              transparent
              opacity={0.2 - i * 0.05}
            />
          </lineSegments>
        );
      })}
    </group>
  );
}

function ParticleField() {
  const count = 800;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      pos[i] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, []);
  const colors = useMemo(() => {
    const col = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const c = new THREE.Color().setHSL(0.33 + Math.random() * 0.1, 1, 0.5);
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }
    return col;
  }, []);

  const pointsRef = useRef<THREE.Points>(null!);
  useFrame(({ clock }) => {
    if (!pointsRef.current) return;
    const t = clock.getElapsedTime() * 0.02;
    pointsRef.current.rotation.y = t;
    pointsRef.current.rotation.x = Math.sin(t * 0.5) * 0.1;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

function GridFloor() {
  return (
    <gridHelper
      args={[20, 40, "#00ff00", "#004400"]}
      position={[0, -2.5, 0]}
      rotation={[0, 0, 0]}
    />
  );
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 4.5], fov: 50 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={0.5} />
        <pointLight position={[-5, -5, -5]} intensity={0.3} color="#00ff00" />
        <pointLight position={[5, -5, 5]} intensity={0.2} color="#0099ff" />

        <GeometricCore />
        <OrbitalRings />
        <ParticleField />
        <GridFloor />

        <Sparkles
          count={40}
          scale={6}
          size={2}
          speed={0.4}
          color="#00ff00"
          opacity={0.3}
        />
      </Canvas>
    </div>
  );
}
