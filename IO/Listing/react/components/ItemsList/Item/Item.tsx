import React from 'react'

import type { ProductDataType } from '../../../types/ProductTypes'
import styles from '../ItemsList.css'
import { Image } from './Image'
import { Price } from './Price'

interface ItemProps {
  data: ProductDataType
  correlationId: string | undefined
  searchType: string
  position: number
}

export function Item({ data, correlationId, searchType, position }: ItemProps) {
  const { link, imageLink, title, price, salePrice, itemId, variations } = data

  const extractNumericPrice = (priceString: string | number): number => {
    if (typeof priceString === 'number') return priceString
    const parsed = parseFloat(priceString?.replace(/[^\d.]/g, ''))
    return isNaN(parsed) ? 0 : parsed
  }

  const url = new URL(link, window.location.origin)
  const path = url.pathname + url.search  

  const clickHandler = () => {
    if (typeof SR === 'undefined') return

    SR.event.itemSearchClick({
      correlationId,
      item: itemId,
      position,
      searchType,
    })
  }

  return (
    <a href={path} className={styles.item} onClick={clickHandler}>
      <Image imageLink={imageLink} title={title} />
      <div className={styles.title}>{variations.title}</div>
      <Price
        price={extractNumericPrice(price?.value ?? price)}
        salePrice={extractNumericPrice(salePrice?.value ?? salePrice)}
      />
    </a>
  )
}
