"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls, Sparkles } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function EnergyCore() {
  const group = useRef<THREE.Group>(null);
  const ring = useRef<THREE.Mesh>(null);
  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.11;
      group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, state.pointer.y * 0.12, 0.025);
      group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, -state.pointer.x * 0.12, 0.025);
    }
    if (ring.current) ring.current.rotation.z += delta * 0.13;
  });
  return (
    <Float speed={1.6} rotationIntensity={0.15} floatIntensity={0.35}>
      <group ref={group}>
        <mesh>
          <icosahedronGeometry args={[1.34, 5]} />
          <meshPhysicalMaterial color="#72c9ec" metalness={0.1} roughness={0.1} transmission={0.65} thickness={1.2} ior={1.28} clearcoat={1} clearcoatRoughness={0.08} transparent opacity={0.92} />
        </mesh>
        <mesh scale={0.77}>
          <icosahedronGeometry args={[1.3, 2]} />
          <meshStandardMaterial color="#2563eb" emissive="#2563eb" emissiveIntensity={0.65} wireframe transparent opacity={0.28} />
        </mesh>
        <mesh rotation={[Math.PI / 2.5, 0.2, 0]}>
          <torusGeometry args={[1.85, 0.035, 12, 140]} />
          <meshStandardMaterial color="#22b8cf" emissive="#22b8cf" emissiveIntensity={0.9} metalness={0.7} roughness={0.2} />
        </mesh>
        <mesh ref={ring} rotation={[0.35, 0.7, 0]}>
          <torusGeometry args={[1.7, 0.018, 10, 140]} />
          <meshStandardMaterial color="#2563eb" emissive="#2563eb" emissiveIntensity={0.6} />
        </mesh>
        <mesh rotation={[0.9, 0.25, 0.5]}>
          <torusGeometry args={[2.06, 0.012, 10, 140]} />
          <meshStandardMaterial color="#a5d8f1" metalness={0.5} roughness={0.2} />
        </mesh>
      </group>
    </Float>
  );
}

export default function EnergyScene() {
  return (
    <div className="h-full w-full" role="img" aria-label="Interactive three-dimensional blue energy core with orbiting rings">
      <Canvas dpr={[1, 1.6]} camera={{ position: [0, 0, 6.6], fov: 43 }} gl={{ antialias: true, alpha: true }} fallback={<div className="energy-fallback" />}>
        <ambientLight intensity={1.7} />
        <directionalLight position={[4, 5, 5]} intensity={3.3} color="#ffffff" />
        <pointLight position={[-4, -2, 3]} intensity={35} color="#5ad4f0" />
        <EnergyCore />
        <Sparkles count={38} scale={[5.4, 4.5, 3]} size={2.2} speed={0.25} color="#4ba8dc" opacity={0.45} />
        <OrbitControls enableZoom={false} enablePan={false} enableDamping dampingFactor={0.06} minPolarAngle={Math.PI / 2.7} maxPolarAngle={Math.PI / 1.65} />
      </Canvas>
    </div>
  );
}
