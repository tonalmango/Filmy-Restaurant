"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function CinematicPlatingAura() {
  const outerRef = useRef<THREE.Mesh>(null);
  const middleRef = useRef<THREE.Mesh>(null);
  const innerRef = useRef<THREE.Mesh>(null);
  const garnishRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (outerRef.current) {
      outerRef.current.rotation.z += delta * 0.22;
      outerRef.current.rotation.y += delta * 0.08;
    }

    if (middleRef.current) {
      middleRef.current.rotation.z -= delta * 0.28;
      middleRef.current.rotation.x += delta * 0.06;
    }

    if (innerRef.current) {
      innerRef.current.rotation.z += delta * 0.35;
      innerRef.current.rotation.y -= delta * 0.05;
    }

    if (garnishRef.current) {
      garnishRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <Float speed={1.7} rotationIntensity={0.4} floatIntensity={0.9}>
      <group>
        <mesh ref={outerRef}>
          <torusGeometry args={[1.8, 0.08, 16, 120]} />
          <meshStandardMaterial color="#D4AF37" metalness={0.95} roughness={0.16} />
        </mesh>

        <mesh ref={middleRef} rotation={[Math.PI * 0.2, 0, Math.PI * 0.1]}>
          <torusGeometry args={[1.42, 0.06, 16, 120]} />
          <meshStandardMaterial color="#A9831A" metalness={0.85} roughness={0.24} />
        </mesh>

        <mesh ref={innerRef} rotation={[Math.PI * 0.4, Math.PI * 0.08, Math.PI * 0.24]}>
          <torusGeometry args={[1.1, 0.045, 16, 120]} />
          <meshStandardMaterial color="#F1D77A" metalness={0.8} roughness={0.22} />
        </mesh>

        <group ref={garnishRef}>
          <mesh position={[1.05, 0.08, 0.15]}>
            <sphereGeometry args={[0.06, 24, 24]} />
            <meshStandardMaterial color="#D4AF37" emissive="#D4AF37" emissiveIntensity={0.45} />
          </mesh>
          <mesh position={[-0.95, -0.12, -0.2]}>
            <sphereGeometry args={[0.045, 24, 24]} />
            <meshStandardMaterial color="#F1D77A" emissive="#F1D77A" emissiveIntensity={0.2} />
          </mesh>
        </group>
      </group>
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
    <Float speed={1.5} rotationIntensity={0.25} floatIntensity={0.5}>
      <mesh ref={ref} position={[0, -1.8, -0.3]}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial color="#161616" metalness={0.88} roughness={0.14} />
      </mesh>
    </Float>
  );
}

export function Hero3D() {
  return (
    <div className="h-full w-full">
      <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.45} />
        <directionalLight position={[3, 3, 2]} intensity={1.5} color="#ffe0a6" />
        <pointLight position={[-2, -1, 2]} intensity={1.1} color="#d4af37" />
        <CinematicPlatingAura />
        <PlateOrb />
        <Environment preset="night" />
      </Canvas>
    </div>
  );
}
