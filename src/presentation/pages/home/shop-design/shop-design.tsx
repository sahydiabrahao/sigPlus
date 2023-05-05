
import Styles from './shop-design-styles.scss'
import React from 'react'
import ShopCard from '@/presentation/components/shop-card/shop-card'

const ShopDesign: React.FC = () => {
  return (
    <>
      <section id='shop' className={Styles.shopDesign}>
        <div className={Styles.shopItems}>
          <ShopCard tshirtColor="White" logoName="Diamond" fillColor="black"/>
          <ShopCard tshirtColor="White" logoName="Simple" fillColor="black"/>
          <ShopCard tshirtColor="White" logoName="Spiral" fillColor="black"/>
          <ShopCard tshirtColor="White" logoName="Spiral D." fillColor="black"/>
          <ShopCard tshirtColor="White" logoName="Ice" fillColor="black"/>
          <ShopCard tshirtColor="White" logoName="TTS" fillColor="black"/>
          <ShopCard tshirtColor="White" logoName="Ice R." fillColor="black"/>
          <ShopCard tshirtColor="White" logoName="Ice T." fillColor="black"/>
        </div>
      </section>
    </>
  )
}

export default ShopDesign
