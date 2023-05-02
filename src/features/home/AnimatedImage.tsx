import { motion } from 'framer-motion'
import React, { FC } from 'react'

import { EASING } from '@/lib/animation'
import clsxm from '@/lib/clsxm'

interface AnimatedImageProps {
  src: string
  alt: string
  className?: string
}

export const AnimatedImage: FC<AnimatedImageProps> = ({ src, alt, className }) => {
  return (
    <div className={clsxm('hero relative', className)}>
      <div className="animate-popup grid h-full w-full grid-cols-[1fr] grid-rows-[1fr] rounded-lg">
        <div className="grid-area-1 animate-hero-gradient-bloom rounded-[inherit]" />
        <div className="grid-area-1 border-gradient radial-gradient-hero h-full w-full rounded-[inherit]" />
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.68, duration: 0.4, ease: EASING.ease } }}
          src={src}
          alt={alt}
          className="grid-area-1 border-gradient absolute inset-0 z-10 h-full w-full rounded-[inherit] object-cover"
        />
      </div>
    </div>
  )
}
