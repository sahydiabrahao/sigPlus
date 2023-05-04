
import Styles from './shop-design-styles.scss'
import React from 'react'
import ShopCard from '@/presentation/components/shop-card/shop-card'

const ShopDesign: React.FC = () => {
  return (
    <>
      <section id='shop' className={Styles.shopDesign}>
        <div className={Styles.shopItems}>
          <ShopCard tshirtColor="white" logoName="diamond" fillColor="black"/>
          <ShopCard tshirtColor="white" logoName="borderOutline" fillColor="black"/>
          <ShopCard tshirtColor="white" logoName="circle" fillColor="black"/>
          <ShopCard tshirtColor="white" logoName="diamondDouble" fillColor="black"/>
          <ShopCard tshirtColor="white" logoName="ice" fillColor="black"/>
          <ShopCard tshirtColor="white" logoName="letter" fillColor="black"/>
          <ShopCard tshirtColor="white" logoName="retangle" fillColor="black"/>
          <ShopCard tshirtColor="white" logoName="triangle" fillColor="black"/>
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

export default ShopDesign
