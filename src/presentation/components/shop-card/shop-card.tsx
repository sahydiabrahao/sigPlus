import { FaCartPlus } from 'react-icons/fa'
import TshirtLogo from '../tshirt-logo/tshirt-logo'
import Tshirt from '../tshirt-color/tshirt-color'
import Styles from './shop-card-styles.scss'
import React from 'react'
import { useAppDispatch } from '@/presentation/hooks/hooks'
import { addItemToCart } from '@/presentation/redux/shopping-cart/shopping-cart-slice'

interface Props {
  tshirtColor: string
  logoName: string
  fillColor: string
}

const ShopCard = ({ tshirtColor, logoName, fillColor }: Props): any => {
  const dispatch = useAppDispatch()

  return (
    <div className={Styles.shopCard}>
    <div className={Styles.image}>
      <div className={Styles.shopAddCart} onClick={() => dispatch(addItemToCart())}>
        <FaCartPlus className={Styles.iconAddCart} />
        <p>Add</p>
      </div>
      <a href='/products'>
        <Tshirt tshirtColor={tshirtColor}/>
        <div className={Styles.tshirtLogo}>
          <TshirtLogo logoName={logoName} fillColor={fillColor}/>
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
