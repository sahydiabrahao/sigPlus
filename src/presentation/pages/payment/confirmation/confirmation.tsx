
import confirmationImage from '@/presentation/assets/credit-card.png'
import Styles from './confirmation-styles.scss'
import React from 'react'
import { FaCheck } from 'react-icons/fa'
import { useAppSelector } from '@/presentation/hooks/hooks'

const Confirmation: React.FC = () => {
  const totalPrice = (49.99 * useAppSelector(state => state.cartCounter.numOfCartItems)).toFixed(2)
  return (
    <>
      <section id='confirmation' className={Styles.confirmation}>
        <div className={Styles.confirmationPayment}>
          <h1>Payment</h1>

          <div className={Styles.confirmationStep}>
            <div className={Styles.stepOne}>
              <FaCheck className={Styles.checkIcon}/>
            </div>
            <div className={Styles.stepLine}>

            </div>
            <div className={Styles.stepTwo}>
              <FaCheck className={Styles.checkIcon}/>
            </div>
            <div className={Styles.stepLine}>

            </div>
            <div className={Styles.stepThree}>
              <h3>3</h3>
            </div>
          </div>

          <div className={Styles.confirmationForm}>
            <form>
              <div className={Styles.formInput}>
                <label htmlFor="">Credit Card Number</label>
                <input type="text" disabled/>
              </div>
              <div className={Styles.formInput}>
                <label htmlFor="">Credit Card Name</label>
                <input type="text" disabled/>
              </div>
              <div className={Styles.formInput}>
                <label htmlFor="">Expiration Code</label>
                <input type="text" disabled/>
              </div>
              <div className={Styles.formInput}>
                <label htmlFor="">CVV</label>
                <input type="text" disabled/>
              </div>
              <div className={Styles.totalPrice}>
                <div>
                  <h5 >Total</h5>
                </div>
                <div>
                  <h1 >{totalPrice}</h1>
                </div>
              </div>
              <a className={Styles.siginButton}>Confirm</a>
            </form>
          </div>
        </div>
          <img className={Styles.confirmationImage} src={confirmationImage} />
      </section>
    </>
  )
}

export default Confirmation
