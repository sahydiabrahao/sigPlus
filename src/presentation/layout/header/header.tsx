import Styles from './header-styles.scss';
import React from 'react';

const Header: React.FC = () => {
  return (
    <>
      <section id='header' className={Styles.header}>
        <h5>SigPlus</h5>
      </section>
    </>
  );
};

export default Header;
