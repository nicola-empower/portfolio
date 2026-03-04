import * as THREE from 'three';
import * as Fiber from '@react-three/fiber';

declare global {
    namespace JSX {
        interface IntrinsicElements {
            mesh: any;
            planeGeometry: any;
            shaderMaterial: any;
        }
    }
}
