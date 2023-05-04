import tshirtBlack from '@/presentation/assets/tshirt-color/tshirt-black.png'
import tshirtBlueAqua from '@/presentation/assets/tshirt-color/tshirt-blue-aqua.png'
import tshirtBlueDark from '@/presentation/assets/tshirt-color/tshirt-blue-dark.png'
import tshirtBlueLight from '@/presentation/assets/tshirt-color/tshirt-blue-light.png'
import tshirtBrown from '@/presentation/assets/tshirt-color/tshirt-brown.png'
import tshirtCoral from '@/presentation/assets/tshirt-color/tshirt-coral.png'
import tshirtGrayDark from '@/presentation/assets/tshirt-color/tshirt-gray-dark.png'
import tshirtGray from '@/presentation/assets/tshirt-color/tshirt-gray.png'
import tshirtGreen from '@/presentation/assets/tshirt-color/tshirt-green.png'
import tshirtOrange from '@/presentation/assets/tshirt-color/tshirt-orange.png'
import tshirtPink from '@/presentation/assets/tshirt-color/tshirt-pink.png'
import tshirtPurple from '@/presentation/assets/tshirt-color/tshirt-purple.png'
import tshirtRed from '@/presentation/assets/tshirt-color/tshirt-red.png'
import tshirtWhite from '@/presentation/assets/tshirt-color/tshirt-white.png'
import tshirtYellow from '@/presentation/assets/tshirt-color/tshirt-yellow.png'
import React from 'react'
import Styles from './tshirt-color-styles.scss'

interface Props {
  tshirtColor: string
}

const Tshirt = ({ tshirtColor }: Props): any => {
  const tshirtColors = [
    { color: 'black', value: tshirtBlack },
    { color: 'white', value: tshirtWhite },
    { color: 'gray', value: tshirtGray },
    { color: 'grayDark', value: tshirtGrayDark },
    { color: 'blueLight', value: tshirtBlueLight },
    { color: 'blueAqua', value: tshirtBlueAqua },
    { color: 'blueDark', value: tshirtBlueDark },
    { color: 'red', value: tshirtRed },
    { color: 'yellow', value: tshirtYellow },
    { color: 'green', value: tshirtGreen },
    { color: 'pink', value: tshirtPink },
    { color: 'coral', value: tshirtCoral },
    { color: 'purple', value: tshirtPurple },
    { color: 'orange', value: tshirtOrange },
    { color: 'brown', value: tshirtBrown }
  ]

  const tshirt = (): any => {
    for (let j = 0; j < tshirtColors.length; j++) {
      if (tshirtColors[j].color === tshirtColor) {
        return tshirtColors[j].value
      }
    }
  }

  return (<img className={Styles.tshirtImage} src={tshirt()} />

  )
}

export default Tshirt
