
import Styles from './shop-tint-styles.scss'
import React from 'react'
import ShopCard from '@/presentation/components/shop-card/shop-card'

const ShopTint: React.FC = () => {
  return (
    <>
      <section id='shop' className={Styles.shopTint}>
        <div className={Styles.shopItems}>
          <ShopCard tshirtColor="Black" logoName="Diamond" fillColor="white"/>
          <ShopCard tshirtColor="White" logoName="Diamond" fillColor="black"/>
          <ShopCard tshirtColor="Gray" logoName="Diamond" fillColor="white"/>
          <ShopCard tshirtColor="Gray Dark" logoName="Diamond" fillColor="white"/>
          <ShopCard tshirtColor="Blue Light" logoName="Diamond" fillColor="white"/>
          <ShopCard tshirtColor="Blue Aqua" logoName="Diamond" fillColor="white"/>
          <ShopCard tshirtColor="Blue Dark" logoName="Diamond" fillColor="white"/>
          <ShopCard tshirtColor="Red" logoName="Diamond" fillColor="white"/>
          <ShopCard tshirtColor="Yellow" logoName="Diamond" fillColor="white"/>
          <ShopCard tshirtColor="Green" logoName="Diamond" fillColor="white"/>
          <ShopCard tshirtColor="Pink" logoName="Diamond" fillColor="white"/>
          <ShopCard tshirtColor="Coral" logoName="Diamond" fillColor="white"/>
          <ShopCard tshirtColor="Purple" logoName="Diamond" fillColor="white"/>
          <ShopCard tshirtColor="Orange" logoName="Diamond" fillColor="white"/>
          <ShopCard tshirtColor="Brown" logoName="Diamond" fillColor="white"/>
        </div>
      </section>
    </>
  )
}

export default ShopTint
