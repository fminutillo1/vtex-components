import React, { useState, useRef, useEffect } from 'react'
import styles from '../ItemsList.css'

interface ImageProps {
  imageLink: string
  title: string
}

type ImageStateType = 'loading' | 'error' | 'ready'

export function Image({ imageLink, title }: ImageProps) {
  const [imgState, setImgState] = useState<ImageStateType>('loading')
  const imgRef = useRef<HTMLImageElement | null>(null)

  const onImageLoad = () => {
    setImgState('ready')
  }

  const onImageError = () => {
    setImgState('error')
  }

  useEffect(() => {
    if (imgRef.current && imgRef.current.complete && imgRef.current.naturalWidth !== 0) {
      setImgState('ready')
    }
  }, [])

  return (
    <div className={styles['img-container']}>
      {imgState === 'loading' && <div className={styles['img-loading']} />}
      {imgState !== 'error' && (
        <img
          ref={imgRef}
          onLoad={onImageLoad}
          onError={onImageError}
          className={styles['product-img']}
          src={imageLink}
          alt={`Product ${title}`}
        />
      )}
    </div>
  )
}
