import Styles from './modal-card-styles.scss'
import React from 'react'
import Tshirt from '../tshirt-color/tshirt-color'
import TshirtLogo from '../tshirt-logo/tshirt-logo'
import { useAppDispatch, useAppSelector } from '@/presentation/hooks/hooks'
import { FaPlus } from 'react-icons/fa'
import { removeItemFromCart } from '@/presentation/redux/shopping-cart-slice'
import { downCounter } from '@/presentation/redux/cart-counter-slice'

const ModalCard: React.FC = () => {
  const dispatch = useAppDispatch()
  const shoppingCart = useAppSelector(state => state.shoppingCart)
  return (
    <div className={Styles.modalCard}>

      {shoppingCart.map(({ id, tshirtColor, logoName, fillColor }) => {
        return (
          <div key={id} className={Styles.modalitems} >
            <div className={Styles.tshirtImage}>
              <Tshirt tshirtColor={tshirtColor}/>
              <div className={Styles.tshirtLogo}>
                <TshirtLogo logoName={logoName} fillColor={fillColor}/>
              </div>
            </div>
            <div className={Styles.cardTitle}>
              <div className={Styles.title}>
               <h6>{logoName} T-shirt<span> ({tshirtColor})</span></h6>
               <FaPlus className={Styles.removeItem} onClick={() => { dispatch(removeItemFromCart(id)) && dispatch(downCounter()) }}/>
              </div>
              <div className={Styles.cardDetail}>
                <h6>49.99</h6>
              </div>
            </div>
          </div>
        )
      }
      )}

    </div>

  )
}

export default ModalCard
