import React from 'react';
import styles from './Why.module.scss';
import plus from '../images/plus.png';

const Why = () => {
  return (
    <div className={styles.container}>
      <div className={styles.who}>
        <div>
          <div>
            <div>
              <img
                alt=''
                className={styles.vector}
                src='https://static.overlay-tech.com/assets/44ab2efe-8ec0-4eac-9a41-871364fb0890.svg'
              />
            </div>
          </div>
          <div>
            <p className={styles.why}>
              <strong className={styles.whyEmphasis0}>.W</strong>
              hy?
            </p>
          </div>
        </div>
        <div>
          <p className={styles.askUs}>Ask Us</p>
          <div className={styles.whyOne}>
            <div className={styles.footer}>
              <h1>Get in Touch ;-)</h1>
              <img className={styles.icon} src={plus} alt='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
