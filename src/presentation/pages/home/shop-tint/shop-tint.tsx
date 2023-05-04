
import Styles from './shop-tint-styles.scss'
import React from 'react'
import ShopCard from '@/presentation/components/shop-card/shop-card'

const ShopTint: React.FC = () => {
  return (
    <>
      <section id='shop' className={Styles.shopTint}>
        <div className={Styles.shopItems}>
          <ShopCard tshirtColor="black" logoName="diamond" fillColor="white"/>
          <ShopCard tshirtColor="white" logoName="diamond" fillColor="black"/>
          <ShopCard tshirtColor="gray" logoName="diamond" fillColor="white"/>
          <ShopCard tshirtColor="grayDark" logoName="diamond" fillColor="white"/>
          <ShopCard tshirtColor="blueLight" logoName="diamond" fillColor="white"/>
          <ShopCard tshirtColor="blueAqua" logoName="diamond" fillColor="white"/>
          <ShopCard tshirtColor="blueDark" logoName="diamond" fillColor="white"/>
          <ShopCard tshirtColor="red" logoName="diamond" fillColor="white"/>
          <ShopCard tshirtColor="yellow" logoName="diamond" fillColor="white"/>
          <ShopCard tshirtColor="green" logoName="diamond" fillColor="white"/>
          <ShopCard tshirtColor="pink" logoName="diamond" fillColor="white"/>
          <ShopCard tshirtColor="coral" logoName="diamond" fillColor="white"/>
          <ShopCard tshirtColor="purple" logoName="diamond" fillColor="white"/>
          <ShopCard tshirtColor="orange" logoName="diamond" fillColor="white"/>
          <ShopCard tshirtColor="brown" logoName="diamond" fillColor="white"/>
        </div>

        <div className={Styles.shopPagination}>
          <button>Back</button>
          <div className={Styles.shopPage}>
            <h6>1</h6>
            <h6>2</h6>
            <h6>3</h6>
          </div>
          <button>Next</button>
        </div>
      </section>
    </>
  )
}

export default ShopTint
