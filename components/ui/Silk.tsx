/* eslint-disable react/no-unknown-property */
"use client";

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import React, { forwardRef, useRef, useMemo, useLayoutEffect } from 'react';
import * as THREE from 'three';

const vertexShader = `
varying vec2 vUv;
varying vec3 vPosition;

void main() {
  vPosition = position;
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const fragmentShader = `
varying vec2 vUv;
uniform float uTime;
uniform vec3  uColor;
uniform float uScale;

void main() {
  vec2 uv = vUv * uScale;
  
  // Use uTime directly for the pattern
  float t = uTime;
  
  // Vibrant multi-layer wave pattern
  float pattern = 0.5 + 0.5 * sin(
    10.0 * (uv.x + uv.y) + 
    3.0 * sin(4.0 * uv.x + t * 1.5) + 
    2.0 * cos(5.0 * uv.y + t * 0.8)
  );

  // Sharpen the highlights
  pattern = pow(pattern, 1.3);
  
  // COLOR VIBRANCY FIX:
  // Instead of multiplying by dark values (which makes it muddy), 
  // we mix the rich red with a slightly DEEPER red (not brown) and a BRIGHTER red.
  vec3 deepRed = uColor * 0.6; // Stronger deep base
  vec3 vibrantRed = mix(uColor, vec3(1.0, 0.1, 0.2), 0.3); // Leans into bright rose/red
  
  vec3 finalColor = mix(deepRed, vibrantRed, pattern);
  
  // Add a subtle satin sheen highlight
  float sheen = pow(max(0.0, pattern - 0.7) * 2.0, 3.0);
  finalColor += sheen * 0.3;

  gl_FragColor = vec4(finalColor, 1.0);
}
`;

interface SilkProps {
    speed?: number;
    scale?: number;
    color?: string;
}

const SilkScene = ({ speed, scale, color }: Required<SilkProps>) => {
    const meshRef = useRef<THREE.Mesh>(null!);
    const { viewport } = useThree();

    const uniforms = useMemo(() => ({
        uTime: { value: 0 },
        uColor: { value: new THREE.Color(color) },
        uScale: { value: scale }
    }), [color, scale]);

    useFrame((state) => {
        if (meshRef.current) {
            const mat = meshRef.current.material as THREE.ShaderMaterial;
            // Force the value update - use state.clock.elapsedTime for smoothness
            mat.uniforms.uTime.value = state.clock.getElapsedTime() * speed;
        }
    });

    return (
        <mesh ref={meshRef} scale={[viewport.width * 1.5, viewport.height * 1.5, 1]}>
            <planeGeometry args={[1, 1]} />
            <shaderMaterial
                uniforms={uniforms}
                vertexShader={vertexShader}
                fragmentShader={fragmentShader}
                transparent={false}
                depthWrite={false}
                depthTest={false}
            />
        </mesh>
    );
};

const Silk: React.FC<SilkProps> = ({
    speed = 1.0,
    scale = 0.5,
    color = '#D0021B'
}) => {
    return (
        <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}>
            <Canvas
                dpr={[1, 2]}
                gl={{ antialias: true, alpha: false, powerPreference: "high-performance" }}
                camera={{ position: [0, 0, 1] }}
                frameloop="always"
            >
                <SilkScene speed={speed} scale={scale} color={color} />
            </Canvas>
        </div>
    );
};

export default Silk;
