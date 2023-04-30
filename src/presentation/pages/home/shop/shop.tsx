
import Styles from './shop-styles.scss'
import React from 'react'
import ShopCard from '@/presentation/components/shop-card/shop-card'

const Shop: React.FC = () => {
  return (
    <>
      <section id='shop' className={Styles.shop}>
        <div className={Styles.menu}>
          <a href="/"><h5>T-shirt</h5></a>
          <a href="#"><h5>Design</h5></a>
          <a href="#"><h5>Tint</h5></a>
        </div>

        <ShopCard />

      </section>
    </>
  )
}

export default Shop
