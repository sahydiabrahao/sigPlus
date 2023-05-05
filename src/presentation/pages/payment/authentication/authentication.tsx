
import paymentImage from '@/presentation/assets/payment.png'
import Styles from './authentication-styles.scss'
import React from 'react'

const Authentication: React.FC = () => {
  return (
    <>
      <section id='authentication' className={Styles.authentication}>
        <div className={Styles.authenticationPayment}>
          <h1>Payment</h1>

          <div className={Styles.authenticationStep}>
            <div className={Styles.stepOne}>
              <h3>1</h3>
            </div>
            <div className={Styles.stepLine}>

            </div>
            <div className={Styles.stepTwo}>
              <h3>2</h3>
            </div>
            <div className={Styles.stepLine}>

            </div>
            <div className={Styles.stepThree}>
              <h3>3</h3>
            </div>
          </div>

          <div className={Styles.authenticationForm}>
            <form>
              <div className={Styles.formInput}>
                <label htmlFor="">Email</label>
                <input type="text" />
              </div>
              <div className={Styles.formInput}>
                <label htmlFor="">Password</label>
                <input type="text" />
              </div>
              <a href='/payment-information' className={Styles.siginButton}>Sign In</a>
            </form>
          </div>
        </div>
          <img className={Styles.paymentImage} src={paymentImage} />
      </section>
    </>
  )
}

export default Authentication
