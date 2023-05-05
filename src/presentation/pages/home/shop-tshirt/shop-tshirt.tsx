
import Styles from './shop-tshirt-styles.scss'
import React from 'react'
import ShopCard from '@/presentation/components/shop-card/shop-card'

const ShopTshirt: React.FC = () => {
  return (
    <>
      <section id='shop' className={Styles.shopTshirt}>
        <div className={Styles.shopItems}>
          <ShopCard tshirtColor="Black" logoName="Diamond" fillColor="white"/>
          <ShopCard tshirtColor="White" logoName="Simple" fillColor="black"/>
          <ShopCard tshirtColor="Gray" logoName="Spiral" fillColor="black"/>
          <ShopCard tshirtColor="Gray Dark" logoName="Spiral D." fillColor="white"/>
          <ShopCard tshirtColor="Blue Light" logoName="Ice" fillColor="white"/>
          <ShopCard tshirtColor="Blue Aqua" logoName="TTS" fillColor="black"/>
          <ShopCard tshirtColor="Blue Dark" logoName="TTS" fillColor="white"/>
          <ShopCard tshirtColor="Red" logoName="Simple" fillColor="white"/>
          <ShopCard tshirtColor="Yellow" logoName="Ice R." fillColor="black"/>
          <ShopCard tshirtColor="Green" logoName="Simple" fillColor="white"/>
          <ShopCard tshirtColor="Pink" logoName="Diamond" fillColor="white"/>
          <ShopCard tshirtColor="Coral" logoName="Ice T." fillColor="white"/>
          <ShopCard tshirtColor="Purple" logoName="Spiral D." fillColor="white"/>
          <ShopCard tshirtColor="Orange" logoName="TTS" fillColor="white"/>
          <ShopCard tshirtColor="Brown" logoName="Simple" fillColor="white"/>
          <ShopCard tshirtColor="Red" logoName="Diamond" fillColor="black"/>
        </div>
      </section>
    </>
  )
}

export default ShopTshirt
