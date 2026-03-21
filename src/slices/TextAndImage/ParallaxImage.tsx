import { ImageField } from '@prismicio/client'
import { PrismicNextImage } from '@prismicio/next';
import clsx from 'clsx';
import React from 'react'

type Props = {
    foregroundImage : ImageField;
    backgroundImage: ImageField;
    className?: string
}


export function ParallaxImage ({foregroundImage, backgroundImage, className}: Props) {
  return (
    <div className={clsx("grid grid-cols-1 place-items-center" , className)}>


        <div className="col-start-1 row-start-1 transition-transform">
            <PrismicNextImage field={backgroundImage} alt="" />
        </div>

        <div className="col-start-1 row-start-1 transition-transform h-full w-full place-items-center">

            <PrismicNextImage field={foregroundImage} alt="" />
        </div>
    </div>
  )
}

