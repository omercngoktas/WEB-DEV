import React from 'react';
import Navbar from './Navbar';
import styles from './Why.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import why from '../images/why.jpeg';

const Who1 = () => {
  return (
    <body>
      <div className={styles.one}>
        <Navbar></Navbar>
        <div className={styles.oneone}>
          <img
            alt=''
            className={styles.vectoro}
            src='https://static.overlay-tech.com/assets/46bd842b-f47f-42ae-a0de-69cf5ecdf6cc.svg'
          />
          <ul></ul>
          <h1>Who is hiding here?</h1>
          <h1>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </h1>
          <FontAwesomeIcon icon='fa-solid fa-coffee' size='6x' />
        </div>
      </div>
      <div className={styles.cont}>
        <h2>About us</h2>
        <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
      </div>
      <div className={styles.two}>
        <div className={styles.twotwo}>
          <h1>
            W&W Corporate USA Since 1937 Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Minima, quod dicta aliquid nemo repellendus
            distinctio minus dolor aperiam suscipit, ea enim accusantium,
            deleniti qui sequi sint nihil modi amet eligendi, quidem animi error
            labore voluptatibus sed. Once upon a time... Qui magnam labore,
            iusto nostrum. Praesentium non, impedit accusantium consequatur
            officia architecto, mollitia placeat aperiam tenetur pariatur
            voluptatibus corrupti vitae deserunt! Nostrum non mollitia deserunt
            ipsam. Sunt quaerat natus cupiditate iure ipsa voluptatibus
            recusandae ratione vitae amet distinctio, voluptas, minus vero
            expedita ea fugit similique sit cumque ad id facere? Ab quas, odio
            neque quis ratione. Natus labore sit esse. Thank to have read this
            part of our fabulous adventure, the best is coming!
          </h1>
          <ul></ul>
          <ul></ul>

          <ul></ul>
          <ul></ul>
          <img src={why} alt='' />
        </div>
      </div>
      <div className={styles.cont1}>
        <div className={styles.cont11}>
          <h2>About us</h2>
          <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
        </div>
      </div>
    </body>
  );
};

export default Who1;
