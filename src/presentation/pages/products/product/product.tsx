
import tshirtImage from '@/presentation/assets/tshirt-780.png'
import Styles from './product-styles.scss'
import React from 'react'

const Product: React.FC = () => {
  return (
    <>
      <section id='product' className={Styles.product}>
        <div className={Styles.productImage}>
          <img className={Styles.tshirtImage} src={tshirtImage} />
        </div>
        <div className={Styles.productMenu}>
          <h1>Diamond T-shirt</h1>
          <h5>(Black)</h5>
          <div className={Styles.productPrice}>
            <h5>$ 49.99</h5>
          </div>
          <div className={Styles.productColor}>
            <h5>Colors</h5>
            <div className={Styles.colorToggle}>
              <button className={Styles.radioButton}>T-shirt</button>
              <button className={Styles.radioButton}>Design</button>
            </div>
          </div>
          <div className={Styles.colorSquare}>
              <button className={Styles.square} />
              <button className={Styles.square} />
              <button className={Styles.square} />
              <button className={Styles.square} />
              <button className={Styles.square} />
              <button className={Styles.square} />
              <button className={Styles.square} />
              <button className={Styles.square} />
              <button className={Styles.square} />
              <button className={Styles.square} />
              <button className={Styles.square} />
              <button className={Styles.square} />
              <button className={Styles.square} />
              <button className={Styles.square} />
              <button className={Styles.square} />
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
