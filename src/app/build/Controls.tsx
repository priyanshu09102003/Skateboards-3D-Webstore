"use client";

import { Heading } from '@/components/Heading';
import { Content, KeyTextField } from '@prismicio/client';
import clsx from 'clsx';
import React, { ReactNode } from 'react'

type Props = Pick <Content.BoardCustomizerDocumentData, "wheels" | "decks" | "metals"> & {
    className?: string;
}

export default function Controls({wheels, decks, metals, className}: Props) {
  return (
    <div className={clsx("flex flex-col gap-6" , className)}>
        <Options title = "Deck"></Options>
        <Options title = "Wheels"></Options>
        <Options title = "Trucks"></Options>
        <Options title = "Bolts"></Options>
    </div>
  )
}

//Component to choose options

type OptionsProps = {
    title?: ReactNode,
    selectedName?: KeyTextField;
    children?: ReactNode
}

function Options({title, selectedName, children}: OptionsProps){
    const formattedName = selectedName?.replace(/-/g, " ")

    return(
        <div>
            <div className="flex">
                <Heading as='h2' size='xs' className='mb-2'>
                    {title}
                </Heading>
                <p className='ml-3 text-zinc-300'>
                    <span className='select-none text-zinc-500'>| </span>
                    {formattedName}
                </p>
            </div>

            <ul className='mb-1 flex flex-wrap gap-2'>
                {children}
            </ul>
        </div>
    )
}

//Each option
