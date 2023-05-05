
import paymentImage from '@/presentation/assets/payment.png'
import Styles from './account-styles.scss'
import React from 'react'

const Account: React.FC = () => {
  return (
    <>
      <section id='account' className={Styles.account}>
        <div className={Styles.accountPayment}>
          <h1>Payment</h1>

          <div className={Styles.accountStep}>
            <div className={Styles.stepOne}>
              <h3>1</h3>
            </div>
            <div className={Styles.stepTwo}>
              <h3>2</h3>
            </div>
            <div className={Styles.stepThree}>
              <h3>3</h3>
            </div>
          </div>

          <div className={Styles.accountForm}>
            <form>
              <div className={Styles.formInput}>
                <label htmlFor="">Email</label>
                <input type="text" />
              </div>
              <div className={Styles.formInput}>
                <label htmlFor="">Password</label>
                <input type="text" />
              </div>

              <a className={Styles.siginButton}>Sign In</a>
              <div>

                <a className={Styles.sigupButton}>Register</a>
              </div>
            </form>
          </div>
        </div>
          <img className={Styles.paymentImage} src={paymentImage} />
      </section>
    </>
  )
}

export default Account
