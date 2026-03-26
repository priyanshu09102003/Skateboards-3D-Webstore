import { ButtonLink } from '@/components/ButtonLink'
import { Heading } from '@/components/Heading'
import { Logo } from '@/components/Logo'
import Link from 'next/link'
import React from 'react'

type Props = {}

export default async function page({}: Props) {
  return (
    <div className='flex min-h-screen flex-col lg:flex-row overflow-hidden'>

        <div className="relative aspect-square shrink-0 bg-[#3a414a] lg:aspect-auto lg:grow">
            <Link href={"/"} className='absolute top-6 left-6'>

                <Logo className='h-16 text-white' />            
            </Link>

            {/* 3D Preview Canvas */}
        </div>

        <div className="bg-texture bg-zinc-900 text-white ~p-4/6 lg:w-96 lg:shrink-0 lg:grow-0">

            <Heading as='h1' size='sm' className='mb-6 mt-2'>
                Customize your Board
            </Heading>

            <ButtonLink href={""} color="lime" icon="plus">
                Add to Cart
            </ButtonLink>
        </div>

    </div>
  )
}