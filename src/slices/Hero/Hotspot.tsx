import { Billboard } from '@react-three/drei';
import React, { useRef } from 'react'
import * as THREE from "three"

interface HotSpotProps {
    position: [number, number, number];
    isVisible: boolean;
    color?: string;
    className?: string
}

export function Hotspot({position, isVisible, color = "#E6FC6A", className}: HotSpotProps) {
    const hotspotRefs = useRef<THREE.Mesh>(null);


  return (
    <Billboard position={position} follow={true}>

        <mesh ref={hotspotRefs} visible={isVisible}>
            <circleGeometry args={[0.02, 32]} />
            <meshStandardMaterial color={color} transparent opacity={1} />
        </mesh>


        <mesh visible={isVisible}>
            <circleGeometry args={[0.03, 32]} />
            <meshBasicMaterial color={color}/>
        </mesh>

    </Billboard>
  )
}