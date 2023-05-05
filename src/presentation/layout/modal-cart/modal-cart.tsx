import Styles from './modal-cart-styles.scss'
import React from 'react'
import ModalCard from '@/presentation/components/modal-card/modal-card'
import { useAppDispatch, useAppSelector } from '@/presentation/hooks/hooks'
import { FaPlus } from 'react-icons/fa'
import { showModal } from '@/presentation/redux/modal-slice'

const ModalCart: React.FC = () => {
  const dispatch = useAppDispatch()
  const modalIsVisible = useAppSelector(state => state.modal.modalIsVisible)

  return (
    <>
      <section id='modalCart' className={modalIsVisible ? Styles.modalCartShow : Styles.modalCart}>
          <div className={Styles.modalHeader}>
            <FaPlus className={Styles.modalClose} onClick={() => dispatch(showModal())}/>
          </div>
          <div className={Styles.modalBody}>
            <h5> Cart </h5>

            <ModalCard />

            <div className={Styles.modalTotal}>
              <h6> Total </h6>
              <div>
                <h6>
                  $ 149.97
                </h6>
              </div>
            </div>
            <a href='/payment-account' className={Styles.checkoutButton}>Checkout</a>
          </div>
      </section>
    </>
  )
}

export default ModalCart
