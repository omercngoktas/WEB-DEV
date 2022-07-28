import React from 'react';
import styles from './Why.module.scss';
import plus from '../images/plus.png';

const When = () => {
  return (
    <div className={styles.container}>
      <div className={styles.who}>
        <div>
          <div>
            <div>
              <img
                alt=''
                className={styles.vector}
                src='https://static.overlay-tech.com/assets/4e917861-ddb0-4030-ae7f-69a16c40c44d.svg'
              />
            </div>
          </div>
          <div>
            <p className={styles.why}>
              <strong className={styles.whyEmphasis0}>.W</strong>
              hen?
            </p>
          </div>
        </div>
        <div>
          <p className={styles.askUs}>Coming Soon</p>
          <div className={styles.whenTwo}>
            <div className={styles.footer}>
              <h1>Join us on December...</h1>
              <img className={styles.icon} src={plus} alt='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default When;
