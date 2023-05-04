
import Styles from './shop-tshirt-styles.scss'
import React from 'react'
import ShopCard from '@/presentation/components/shop-card/shop-card'

const ShopTshirt: React.FC = () => {
  return (
    <>
      <section id='shop' className={Styles.shopTshirt}>
        <div className={Styles.shopItems}>
          <ShopCard tshirtColor="black" logoName="diamond" fillColor="white"/>
          <ShopCard tshirtColor="white" logoName="borderOutline" fillColor="black"/>
          <ShopCard tshirtColor="gray" logoName="circle" fillColor="black"/>
          <ShopCard tshirtColor="grayDark" logoName="diamondDouble" fillColor="white"/>
          <ShopCard tshirtColor="blueLight" logoName="ice" fillColor="white"/>
          <ShopCard tshirtColor="blueAqua" logoName="letter" fillColor="black"/>
          <ShopCard tshirtColor="blueDark" logoName="letter" fillColor="white"/>
          <ShopCard tshirtColor="red" logoName="borderOutline" fillColor="white"/>
          <ShopCard tshirtColor="yellow" logoName="retangle" fillColor="black"/>
          <ShopCard tshirtColor="green" logoName="letter" fillColor="white"/>
          <ShopCard tshirtColor="pink" logoName="diamond" fillColor="white"/>
          <ShopCard tshirtColor="coral" logoName="triangle" fillColor="white"/>
          <ShopCard tshirtColor="purple" logoName="diamondDouble" fillColor="white"/>
          <ShopCard tshirtColor="orange" logoName="borderOutline" fillColor="white"/>
          <ShopCard tshirtColor="brown" logoName="letter" fillColor="white"/>
          <ShopCard tshirtColor="red" logoName="diamond" fillColor="black"/>
        </div>
      </section>
    </>
  )
}

export default ShopTshirt
