import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

const GuitarModel: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.05;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef}>
        {/* Guitar Body */}
        <cylinderGeometry args={[0.8, 1.2, 0.3, 32]} />
        <meshStandardMaterial 
          color="#8B4513" 
          roughness={0.3}
          metalness={0.1}
        />
        
        {/* Guitar Neck */}
        <mesh position={[0, 1.5, 0]}>
          <cylinderGeometry args={[0.1, 0.15, 3, 16]} />
          <meshStandardMaterial 
            color="#654321" 
            roughness={0.4}
            metalness={0.1}
          />
        </mesh>

        {/* Guitar Head */}
        <mesh position={[0, 3, 0]}>
          <boxGeometry args={[0.4, 0.6, 0.1]} />
          <meshStandardMaterial 
            color="#654321" 
            roughness={0.4}
            metalness={0.1}
          />
        </mesh>

        {/* Guitar Strings */}
        {[...Array(6)].map((_, i) => (
          <mesh key={i} position={[0, 1.5, 0]}>
            <cylinderGeometry args={[0.01, 0.01, 3, 8]} />
            <meshStandardMaterial 
              color="#C0C0C0" 
              roughness={0.1}
              metalness={0.9}
            />
          </mesh>
        ))}

        {/* Guitar Bridge */}
        <mesh position={[0, 0.2, 0]}>
          <boxGeometry args={[0.8, 0.1, 0.05]} />
          <meshStandardMaterial 
            color="#2F2F2F" 
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>

        {/* Sound Hole */}
        <mesh position={[0, 0.5, 0.15]}>
          <ringGeometry args={[0.2, 0.25, 32]} />
          <meshStandardMaterial 
            color="#000000" 
            roughness={0.8}
            metalness={0.1}
          />
        </mesh>
      </mesh>
    </Float>
  );
};

const FloatingGuitar: React.FC = () => {
  return (
    <div className="floating-guitar-container">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        <GuitarModel />
        
        <Sparkles 
          count={100} 
          scale={10} 
          size={2} 
          speed={0.3} 
          opacity={0.3}
          color="#ff6b6b"
        />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate 
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
};

export default FloatingGuitar; 