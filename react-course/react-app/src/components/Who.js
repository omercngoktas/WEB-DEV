import React from 'react';
import styles from './Why.module.scss';
import plus from '../images/plus.png';

const Who = () => {
  return (
    <div className={styles.container}>
      <div className={styles.who}>
        <div>
          <div>
            <div>
              <img
                alt=''
                className={styles.vector}
                src='https://static.overlay-tech.com/assets/46bd842b-f47f-42ae-a0de-69cf5ecdf6cc.svg'
              />
            </div>
          </div>
          <div>
            <p className={styles.why}>
              <strong className={styles.whyEmphasis0}>.W</strong>
              ho?
            </p>
          </div>
        </div>
        <div>
          <p className={styles.askUs}>About Us</p>
        </div>
        <div className={styles.whoTwo}>
          <div className={styles.footer}>
            <h1>Toc Toc Toc!..</h1>
            <img className={styles.icon} src={plus} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Who;
