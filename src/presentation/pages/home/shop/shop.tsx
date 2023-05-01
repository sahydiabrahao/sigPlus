
import Styles from './shop-styles.scss'
import React from 'react'
import ShopCard from '@/presentation/components/shop-card/shop-card'

const Shop: React.FC = () => {
  return (
    <>
      <section id='shop' className={Styles.shop}>
        <div className={Styles.shopMenu}>
          <a href="/"><h5>T-shirt</h5></a>
          <a href="#"><h5>Design</h5></a>
          <a href="#"><h5>Tint</h5></a>
          <a href='/products'>Products</a>
        </div>

        <div className={Styles.shopItems}>
          <ShopCard />
          <ShopCard />
          <ShopCard />
          <ShopCard />
          <ShopCard />
          <ShopCard />
          <ShopCard />
          <ShopCard />
        </div>

        <div className={Styles.shopPagination}>
          <button>Back</button>
          <div className={Styles.shopPage}>
            <h6>1</h6>
            <h6>2</h6>
            <h6>3</h6>
          </div>
          <button>Next</button>
        </div>
      </section>
    </>
  )
}

export default Shop
