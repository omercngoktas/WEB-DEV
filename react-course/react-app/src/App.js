import React from 'react';
import Who from './components/Who';
import When from './components/When';
import Where from './components/Where';
import Why from './components/Why';
import styles from './components/Why.module.scss';
import Who1 from './components/Who1';
import {
  BrowserRouter as Router,
  useHistory,
  Route,
  Link,
  Routes,
} from 'react-router-dom';

const App = () => {
  const handleClick = () => {
    window.location = '/who';
  };
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={
            <div className={styles.container}>
              <div className={styles.item}>
                <button onClick={handleClick} className={styles.whyTwo}>
                  <Who />
                </button>

                <button className={styles.whyTwo}>
                  <When />
                </button>

                <button className={styles.whyTwo}>
                  <Where />
                </button>

                <button className={styles.whyTwo}>
                  <Why />
                </button>
              </div>
            </div>
          }
        ></Route>
        <Route path='/who' element={<Who1 />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
