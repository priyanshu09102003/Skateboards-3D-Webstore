"use client"

import { CameraControls, Environment, Preload, useTexture } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense, useRef } from 'react'
import { useCustomizerControls } from './context';
import { asImageSrc } from '@prismicio/client';
import { Skateboard } from '@/components/Skateboard';
import * as THREE from "three"

const DEFAULT_WHEEL_TEXTURE = "/skateboard/SkateWheel1.png";
const DEFAULT_DECK_TEXTURE = "/skateboard/Deck.webp";
const DEFAULT_TRUCK_COLOR = "#6F6E6A";
const DEFAULT_BOLT_COLOR = "#6F6E6A";
const ENVIRONMENT_COLOR = "#3B3A3A";

type Props = {
    wheelTextureURLs: string[];
    deckTextureURLs: string[]
}

export default function Preview({wheelTextureURLs, deckTextureURLs}: Props) {


    const cameraControls = useRef<CameraControls>(null)

    const floorRef = useRef<THREE.Mesh>(null)

    const {selectedWheel, selectedDeck, selectedBolt, selectedTruck} = useCustomizerControls()
    const wheelTextureURL = asImageSrc(selectedWheel?.texture)?? DEFAULT_WHEEL_TEXTURE
    const deckTextureURL = asImageSrc(selectedDeck?.texture)?? DEFAULT_DECK_TEXTURE
    const truckColor = selectedTruck?.color ?? DEFAULT_TRUCK_COLOR
    const boltColor = selectedBolt?.color ?? DEFAULT_BOLT_COLOR

    function onCameraControlStart(){
        if(!cameraControls.current || !floorRef.current || cameraControls.current.colliderMeshes.length > 0) return

        cameraControls.current.colliderMeshes = [floorRef.current]
    }

  return (
    <Canvas camera={{position: [2.5, 1, 0], fov: 50}}  shadows>
        <Suspense>

            <Environment files={"/hdr/warehouse-512.hdr"}
            environmentIntensity={0.6} />


            <directionalLight castShadow lookAt={[0,0,0]} position={[1,1,1]} intensity={1.6} />
            <fog attach={"fog"} args={[ENVIRONMENT_COLOR, 3, 10]} />

            <color attach={"background"} args={[ENVIRONMENT_COLOR]}/>

            <StageFloor />

            <mesh rotation={[-Math.PI/2, 0 ,0]} ref={floorRef}>
                <planeGeometry args={[6,6]} />
                <meshBasicMaterial visible={false} />
            </mesh>

            <Skateboard
                wheelTextureURL={wheelTextureURL}
                wheelTextureURLs={wheelTextureURLs}
                deckTextureURL={deckTextureURL}
                deckTextureURLs={deckTextureURLs}
                truckColor={truckColor}
                boltColor={boltColor}
                pose='side'
            />


            <CameraControls ref={cameraControls} minDistance={0.4} maxDistance={4} onStart={onCameraControlStart} />

            <Preload all />


        </Suspense>
    </Canvas>
  )
}

function StageFloor() {
    const normalMap = useTexture("/concrete-normal.avif")

    normalMap.wrapS = THREE.RepeatWrapping
    normalMap.wrapT = THREE.RepeatWrapping
    normalMap.repeat.set(30, 30)

    normalMap.anisotropy = 8;


    const material = new THREE.MeshStandardMaterial({
        roughness: 0.75,
        color: ENVIRONMENT_COLOR,
        normalMap: normalMap
    })


    return(
        <mesh
            material={material}
            castShadow
            receiveShadow
            position={[0, -0.005, 0]}
            rotation={[-Math.PI/2, 0, 0]}
        >
            <circleGeometry args={[20, 32]} />
        </mesh>
    )

}