import { FaCartPlus } from 'react-icons/fa';

import Styles from './shop-card-styles.scss';
import React from 'react';
import { useAppDispatch } from '@/presentation/hooks/hooks';
import { upCounter } from '@/presentation/redux/cart-counter-slice';
import { addCartItem } from '@/presentation/redux/shopping-cart-slice';
import { tshirtUpdateInfo } from '@/presentation/redux/tshirt-slice';

interface Props {
  tshirtColor: string;
  logoName: string;
  fillColor: string;
}

const ShopCard = ({ tshirtColor, logoName, fillColor }: Props): any => {
  const dispatch = useAppDispatch();

  return (
    <div className={Styles.shopCard}>
      <div className={Styles.image}>
        <div
          className={Styles.shopAddCart}
          onClick={() =>
            dispatch(upCounter()) && dispatch(addCartItem({ tshirtColor, logoName, fillColor }))
          }
        >
          <FaCartPlus className={Styles.iconAddCart} />
          <p>Add</p>
        </div>
        <a
          href='/products'
          onClick={() => dispatch(tshirtUpdateInfo({ tshirtColor, logoName, fillColor }))}
        >
          <div className={Styles.tshirtLogo}></div>
        </a>
      </div>
      <div className={Styles.shopLabel}>
        <h6>
          {logoName} T-shirt<span> ({tshirtColor})</span>{' '}
        </h6>
        <h6>$ 49.99</h6>
      </div>
    </div>
  );
};

export default ShopCard;
