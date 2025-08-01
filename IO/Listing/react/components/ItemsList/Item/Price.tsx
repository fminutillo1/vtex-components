import React from 'react'
import { useRuntime } from 'vtex.render-runtime'
import { FormattedNumber } from 'react-intl'

import styles from '../ItemsList.css'

interface PriceProps {
  price: number
  salePrice: number
}

export function Price({ price, salePrice }: PriceProps) {
  const { culture } = useRuntime()
  const { currency } = culture
  const isSale = salePrice > 0 && salePrice !== price
  const finalPrice = isSale ? salePrice : price  

  return (
    <div className={styles['price-container']}>
      {isSale && (
        <span className={styles['product-prev-price']}>
          <FormattedNumber
            value={price}
            style="currency"
            currency={currency}
          />
        </span>
      )}
      <span className={styles['product-price']}>
        <FormattedNumber
          value={finalPrice}
          style="currency"
          currency={currency}
        />
      </span>
    </div>
  )
}
