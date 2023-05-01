import tshirtImage from '@/presentation/assets/tshirt-100.png'
import Styles from './modal-card-styles.scss'
import React from 'react'

const ModalCard: React.FC = () => {
  return (
    <div className={Styles.modalCard}>
      <img src={tshirtImage} />
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
