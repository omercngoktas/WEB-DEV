import React from 'react';
import styles from './Why.module.scss';
import plus from '../images/plus.png';

const Where = () => {
  return (
    <div className={styles.container}>
      <div className={styles.who}>
        <div>
          <div>
            <div>
              <img
                alt=''
                className={styles.vector}
                src='https://static.overlay-tech.com/assets/5108fc6a-5050-47b0-9fd7-1a91db508aeb.svg'
              />
            </div>
          </div>
          <div>
            <p className={styles.why}>
              <strong className={styles.whyEmphasis0}>.W</strong>
              here?
            </p>
          </div>
        </div>
        <div>
          <p className={styles.askUs}>Locate Us</p>
          <div className={styles.whereTwo}>
            <div className={styles.footer}>
              <h1>Here, just at...</h1>
              <img className={styles.icon} src={plus} alt='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Where;
