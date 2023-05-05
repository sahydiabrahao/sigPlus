import Styles from './modal-card-styles.scss'
import React from 'react'
import Tshirt from '../tshirt-color/tshirt-color'
import TshirtLogo from '../tshirt-logo/tshirt-logo'

const ModalCard: React.FC = () => {
  return (
    <div className={Styles.modalCard}>
      <div className={Styles.tshirtImage}>
        <Tshirt tshirtColor='Black'/>
        <div className={Styles.tshirtLogo}>
          <TshirtLogo logoName='Diamond' fillColor='White'/>
        </div>
      </div>
      <div className={Styles.cardTitle}>
        <h6>Diamond T-shirt<span> (Black)</span> </h6>
        <div className={Styles.cardDetail}>
          <h6>
            $ 49.99
          </h6>
        </div>
      </div>
    </div>
  )
}

export default ModalCard
