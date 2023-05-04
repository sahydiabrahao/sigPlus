
import Styles from './product-styles.scss'
import React from 'react'
import Tshirt from '@/presentation/components/tshirt-color/tshirt-color'
import TshirtLogo from '@/presentation/components/tshirt-logo/tshirt-logo'
import { useAppDispatch, useAppSelector } from '@/presentation/hooks/hooks'
import { tshirtUpdateColor } from '@/presentation/redux/tshirt-slice'

const Product: React.FC = () => {
  const dispatch = useAppDispatch()
  const tshirtColor = useAppSelector(state => state.tshirt.tshirtInfo.tshirtColor)
  const logoName = useAppSelector(state => state.tshirt.tshirtInfo.logoName)
  const fillColor = useAppSelector(state => state.tshirt.tshirtInfo.fillColor)
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
          <h1>Diamond T-shirt</h1>
          <h5>(Black)</h5>
          <div className={Styles.productPrice}>
            <h5>$ 49.99</h5>
          </div>
          <div className={Styles.productColor}>
            <h5>Color</h5>
            <div className={Styles.colorToggle}>
              <button className={Styles.radioButton}>T-shirt</button>
              <button className={Styles.radioButton}>Design</button>
            </div>
          </div>
          <div className={Styles.colorSquare}>
              <button className={Styles.squareBlack} onClick={() => dispatch(tshirtUpdateColor('black')) }/>
              <button className={Styles.squareWhite} onClick={() => dispatch(tshirtUpdateColor('white')) }/>
              <button className={Styles.squareGray} onClick={() => dispatch(tshirtUpdateColor('gray')) }/>
              <button className={Styles.squareGrayDark} onClick={() => dispatch(tshirtUpdateColor('grayDark')) }/>
              <button className={Styles.squareBlueLight} onClick={() => dispatch(tshirtUpdateColor('blueLight')) }/>
              <button className={Styles.squareBlueAqua} onClick={() => dispatch(tshirtUpdateColor('blueAqua')) }/>
              <button className={Styles.squareBlueDark} onClick={() => dispatch(tshirtUpdateColor('blueDark')) }/>
              <button className={Styles.squareRed} onClick={() => dispatch(tshirtUpdateColor('red')) }/>
              <button className={Styles.squareYellow} onClick={() => dispatch(tshirtUpdateColor('yellow')) }/>
              <button className={Styles.squareGreen} onClick={() => dispatch(tshirtUpdateColor('green')) }/>
              <button className={Styles.squarePink} onClick={() => dispatch(tshirtUpdateColor('pink')) }/>
              <button className={Styles.squareCoral} onClick={() => dispatch(tshirtUpdateColor('coral')) }/>
              <button className={Styles.squarePurple} onClick={() => dispatch(tshirtUpdateColor('purple')) }/>
              <button className={Styles.squareOrange} onClick={() => dispatch(tshirtUpdateColor('orange')) }/>
              <button className={Styles.squareBrown} onClick={() => dispatch(tshirtUpdateColor('brown')) }/>
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

          <button className={Styles.addCartButton}>
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
