
import Styles from './product-styles.scss'
import React, { useState } from 'react'
import Tshirt from '@/presentation/components/tshirt-color/tshirt-color'
import TshirtLogo from '@/presentation/components/tshirt-logo/tshirt-logo'
import { useAppDispatch, useAppSelector } from '@/presentation/hooks/hooks'
import { tshirtUpdateColor, fillUpdateColor } from '@/presentation/redux/tshirt-slice'
import { upCounter } from '@/presentation/redux/cart-counter-slice'
import { addItemToCart } from '@/presentation/redux/shopping-cart-slice'

const Product: React.FC = () => {
  const dispatch = useAppDispatch()
  const tshirtColor = useAppSelector(state => state.tshirt.tshirtInfo.tshirtColor)
  const logoName = useAppSelector(state => state.tshirt.tshirtInfo.logoName)
  const fillColor = useAppSelector(state => state.tshirt.tshirtInfo.fillColor)

  const [toogleButton, setToogleButton] = useState(true)

  return (
    <>
      <section id='product' className={Styles.product}>
        <div className={Styles.tshirtImage}>
          <Tshirt tshirtColor={tshirtColor}/>
          <div className={Styles.tshirtLogo}>
            <TshirtLogo logoName={logoName} fillColor={fillColor}/>
          </div>
        </div>
        <div className={Styles.productMenu}>
          <h1>{logoName} T-shirt</h1>
          <h5>({tshirtColor})</h5>
          <div className={Styles.productPrice}>
            <h5>$ 49.99</h5>
          </div>
          <div className={Styles.productColor}>
            <h5>Color</h5>
            <div className={Styles.colorToggle}>
              <button className={toogleButton ? Styles.toogleButtonOn : Styles.toogleButtonOff} onClick={() => { setToogleButton(!toogleButton) }}></button>
            </div>
          </div>
          <div className={Styles.colorSquare}>
              <button className={Styles.squareBlack} onClick={toogleButton ? () => dispatch(tshirtUpdateColor('Black')) : () => dispatch(fillUpdateColor('black')) }/>
              <button className={Styles.squareWhite} onClick={toogleButton ? () => dispatch(tshirtUpdateColor('White')) : () => dispatch(fillUpdateColor('white')) }/>
              <button className={Styles.squareGray} onClick={toogleButton ? () => dispatch(tshirtUpdateColor('Gray')) : () => dispatch(fillUpdateColor('#CFCDD3')) }/>
              <button className={Styles.squareGrayDark} onClick={toogleButton ? () => dispatch(tshirtUpdateColor('Gray Dark')) : () => dispatch(fillUpdateColor('#626262')) }/>
              <button className={Styles.squareBlueLight} onClick={toogleButton ? () => dispatch(tshirtUpdateColor('Blue Light')) : () => dispatch(fillUpdateColor('#6AA6E2')) }/>
              <button className={Styles.squareBlueAqua} onClick={toogleButton ? () => dispatch(tshirtUpdateColor('Blue Aqua')) : () => dispatch(fillUpdateColor('#77D8ED')) }/>
              <button className={Styles.squareBlueDark} onClick={toogleButton ? () => dispatch(tshirtUpdateColor('Blue Dark')) : () => dispatch(fillUpdateColor('#314195')) }/>
              <button className={Styles.squareRed} onClick={toogleButton ? () => dispatch(tshirtUpdateColor('Red')) : () => dispatch(fillUpdateColor('#B20A29')) }/>
              <button className={Styles.squareYellow} onClick={toogleButton ? () => dispatch(tshirtUpdateColor('Yellow')) : () => dispatch(fillUpdateColor('#D2F119')) }/>
              <button className={Styles.squareGreen} onClick={toogleButton ? () => dispatch(tshirtUpdateColor('Green')) : () => dispatch(fillUpdateColor('#00A364')) }/>
              <button className={Styles.squarePink} onClick={toogleButton ? () => dispatch(tshirtUpdateColor('Pink')) : () => dispatch(fillUpdateColor('#FC91BA')) }/>
              <button className={Styles.squareCoral} onClick={toogleButton ? () => dispatch(tshirtUpdateColor('Coral')) : () => dispatch(fillUpdateColor('#FE7E83')) }/>
              <button className={Styles.squarePurple} onClick={toogleButton ? () => dispatch(tshirtUpdateColor('Purple')) : () => dispatch(fillUpdateColor('#604A9D')) }/>
              <button className={Styles.squareOrange} onClick={toogleButton ? () => dispatch(tshirtUpdateColor('Orange')) : () => dispatch(fillUpdateColor('#FE7F29')) }/>
              <button className={Styles.squareBrown} onClick={toogleButton ? () => dispatch(tshirtUpdateColor('Brown')) : () => dispatch(fillUpdateColor('#CFB69A')) }/>
          </div>
          <div className={Styles.productSize} >
            <h5>Size</h5>
            <div className={Styles.sizeType}>
              <button className={Styles.sizeSmall}>
                S
              </button>
              <button className={Styles.sizeMedium}>
                M
              </button>
              <button className={Styles.sizeLarge}>
                L
              </button>
              <button className={Styles.sizeXLarge}>
                XL
              </button>
            </div>
          </div>

          <button className={Styles.addCartButton} onClick={() => dispatch(upCounter()) && dispatch(addItemToCart({ tshirtColor, logoName, fillColor }))}>
            Add To Cart
          </button>

          <div className={Styles.productDetail} >
            <h5>Detail</h5>
              <p>
                Our t-shirts are made from premium fabrics, carefully selected for their softness, durability, and comfort.
                We use a variety of cotton blends to create the perfect balance of breathability and stretch, so that our
                t-shirts feel great against the skin and retain their shape even after multiple washes.
              </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Product
