"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, MeshDistortMaterial } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function FilmReel() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y += delta * 0.45;
    meshRef.current.rotation.x += delta * 0.2;
  });

  return (
    <Float speed={2} rotationIntensity={0.7} floatIntensity={1.1}>
      <mesh ref={meshRef}>
        <torusGeometry args={[1.6, 0.45, 24, 64]} />
        <MeshDistortMaterial color="#d4af37" roughness={0.15} metalness={1} distort={0.16} speed={2.2} />
      </mesh>
    </Float>
  );
}

function PlateOrb() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.8}>
      <mesh ref={ref} position={[0, -1.8, -0.3]}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial color="#272727" metalness={0.9} roughness={0.12} />
      </mesh>
    </Float>
  );
}

export function Hero3D() {
  return (
    <div className="h-[320px] w-full md:h-[500px]">
      <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.45} />
        <directionalLight position={[3, 3, 2]} intensity={1.5} color="#ffe0a6" />
        <pointLight position={[-2, -1, 2]} intensity={1.1} color="#d4af37" />
        <FilmReel />
        <PlateOrb />
        <Environment preset="night" />
      </Canvas>
    </div>
  );
}
