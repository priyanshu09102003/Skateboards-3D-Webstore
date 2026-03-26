"use client"

import { CameraControls, Environment, Preload } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense, useRef } from 'react'
import { useCustomizerControls } from './context';
import { asImageSrc } from '@prismicio/client';
import { Skateboard } from '@/components/Skateboard';

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

    const {selectedWheel, selectedDeck, selectedBolt, selectedTruck} = useCustomizerControls()
    const wheelTextureURL = asImageSrc(selectedWheel?.texture)?? DEFAULT_WHEEL_TEXTURE
    const deckTextureURL = asImageSrc(selectedDeck?.texture)?? DEFAULT_DECK_TEXTURE
    const truckColor = selectedTruck?.color ?? DEFAULT_TRUCK_COLOR
    const boltColor = selectedBolt?.color ?? DEFAULT_BOLT_COLOR

  return (
    <Canvas>
        <Suspense>

            <Environment files={"/hdr/warehouse-512.hdr"}
            environmentIntensity={0.6} />


            <directionalLight castShadow lookAt={[0,0,0]} position={[1,1,1]} intensity={1.6} />

            <Skateboard
                wheelTextureURL={wheelTextureURL}
                wheelTextureURLs={wheelTextureURLs}
                deckTextureURL={deckTextureURL}
                deckTextureURLs={deckTextureURLs}
                truckColor={truckColor}
                boltColor={boltColor}
                pose='side'
            />


            <CameraControls ref={cameraControls} minDistance={0.4} maxDistance={4} />

            <Preload all />


        </Suspense>
    </Canvas>
  )
}

function StageFloor() {
    const normalMap = useTexture
}