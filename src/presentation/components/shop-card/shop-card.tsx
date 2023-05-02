import { FaCartPlus } from 'react-icons/fa'
import Styles from './shop-card-styles.scss'
import React from 'react'
import TshirtLogo from '../tshirt-logo/tshirt-logo'
import Tshirt from '../tshirt-color/tshirt-color'

const ShopCard: React.FC = () => {
  return (
    <div className={Styles.shopCard}>
    <div className={Styles.image}>
      <div className={Styles.shopAddCart}>
        <FaCartPlus className={Styles.iconAddCart}/>
        <p>Add</p>
      </div>
      <a href='/products'>
        <Tshirt tshirtColor="coral"/>
        <div className={Styles.tshirtLogo}>
          <TshirtLogo logoName='triangle' fillColor="white" />
        </div>
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
