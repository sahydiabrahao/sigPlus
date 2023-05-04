import heroImage from '@/presentation/assets/tshirt-on-hanger.png'
import Styles from './hero-styles.scss'
import React from 'react'

const Hero: React.FC = () => {
  return (
    <>
      <section id='hero' className={Styles.hero}>
        <h2 id='hero' className={Styles.title}>
          <span>Spot</span> your style with our <span>T-Shirts</span>
        </h2>
        <img className={Styles.heroImage} src={heroImage} />
      </section>
    </>
  )
}

export default Hero
