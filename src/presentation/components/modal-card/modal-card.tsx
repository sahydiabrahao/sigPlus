import Styles from './modal-card-styles.scss'
import React from 'react'
import Tshirt from '../tshirt-color/tshirt-color'
import TshirtLogo from '../tshirt-logo/tshirt-logo'

const ModalCard: React.FC = () => {
  return (
    <div className={Styles.modalCard}>
      <div className={Styles.tshirtImage}>
        <Tshirt tshirtColor='black'/>
        <div className={Styles.tshirtLogo}>
          <TshirtLogo logoName='diamond' fillColor='white'/>
        </div>
      </div>
      <div className={Styles.cardTitle}>
        <h6>Diamond T-shirt<span> (Black)</span> </h6>
        <div className={Styles.cardDetail}>
          <div className={Styles.cardQauntity}>
            <button>-</button>
            <h6> 1</h6>
            <button>+</button>
          </div>
          <h6>
            $ 49.99
          </h6>
        </div>
      </div>
    </div>
  )
}

export default ModalCard
