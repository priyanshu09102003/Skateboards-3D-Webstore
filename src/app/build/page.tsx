import { ButtonLink } from '@/components/ButtonLink'
import { Heading } from '@/components/Heading'
import { Logo } from '@/components/Logo'
import Link from 'next/link'
import React from 'react'
import { CustomizerControlsProvider } from './context'
import { createClient } from '@/prismicio'
import Preview from './Preview'
import { asImageSrc } from '@prismicio/client'
import Controls from './Controls'

export default async function page() {
    const client = createClient();
    const customizerSettings = await client.getSingle("board_customizer")
    const {wheels, decks, metals} = customizerSettings.data;

    const defaultWheel = wheels[0]
    const defaultDeck = decks[0]
    const defaultTruck = metals[0]
    const defaultBolt = metals[0]

    const wheelTextureURLs = wheels.map((texture) => asImageSrc(texture.texture)).filter((url): url is string => Boolean(url))
    const deckTextureURLs = decks.map((texture) => asImageSrc(texture.texture)).filter((url): url is string => Boolean(url))


  return (
    <div className='flex min-h-screen flex-col lg:flex-row overflow-hidden'>

        <CustomizerControlsProvider
            defaultWheel={defaultWheel}
            defaultDeck={defaultDeck}
            defaultTruck={defaultTruck}
            defaultBolt={defaultBolt}
        >

            <div className="relative aspect-square shrink-0 bg-[#3a414a] lg:aspect-auto lg:grow">
            {/* 3D Preview Canvas */}

                <div className="absolute inset-0">
                    <Preview
                        deckTextureURLs={deckTextureURLs}
                        wheelTextureURLs = {wheelTextureURLs}
                    />
                </div>

                <Link href={"/"} className='absolute top-6 left-6'>

                    <Logo className='h-16 text-white' />            
                </Link>

            </div>

            <div className="bg-texture bg-zinc-900 text-white ~p-4/6 lg:w-96 lg:shrink-0 lg:grow-0">

                <Heading as='h1' size='sm' className='mb-6 mt-2'>
                    Customize your Board
                </Heading>

                <Controls wheels={wheels} decks={decks} metals={metals} className='mb-6' />

                <ButtonLink href={""} color="lime" icon="plus">
                    Add to Cart
                </ButtonLink>
            </div>

        </CustomizerControlsProvider>

    </div>
  )
}