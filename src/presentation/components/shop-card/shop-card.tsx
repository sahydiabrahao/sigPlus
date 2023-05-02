import tshirtImage from '@/presentation/assets/tshirt.png'
import { FaCartPlus } from 'react-icons/fa'
import Styles from './shop-card-styles.scss'
import React from 'react'

const ShopCard: React.FC = () => {
  return (
    <div className={Styles.shopCard}>
    <div className={Styles.image}>
      <div className={Styles.shopAddCart}>
        <FaCartPlus className={Styles.iconAddCart}/>
        <p>Add</p>
      </div>
      <a href='/products'>

        <img className={Styles.tshirtImage} src={tshirtImage} />
      </a>
    </div>
    <div className={Styles.shopLabel}>
      <h6>T-shirt<span> (Black)</span> </h6>
      <h6>$ 49.99</h6>
    </div>
  </div>
  )
}

export default ShopCard
