
import informationImage from '@/presentation/assets/information.png'
import Styles from './information-styles.scss'
import React from 'react'
import { FaCheck } from 'react-icons/fa'

const Information: React.FC = () => {
  return (
    <>
      <section id='information' className={Styles.information}>
        <div className={Styles.informationPayment}>
          <h1>Payment</h1>

          <div className={Styles.informationStep}>
            <div className={Styles.stepOne}>
              <FaCheck className={Styles.checkIcon}/>
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

          <div className={Styles.informationForm}>
            <form>
              <div className={Styles.formInput}>
                <label htmlFor="">Name</label>
                <input type="text" />
              </div>
              <div className={Styles.formInput}>
                <label htmlFor="">Adress</label>
                <input type="text" />
              </div>
              <div className={Styles.formInput}>
                <label htmlFor="">City</label>
                <input type="text" />
              </div>
              <div className={Styles.formInput}>
                <label htmlFor="">Zip Code</label>
                <input type="text" />
              </div>
              <a href="/payment-confirmation" className={Styles.nextButton}>Next</a>
            </form>
          </div>
        </div>
          <img className={Styles.informationImage} src={informationImage} />
      </section>
    </>
  )
}

export default Information
