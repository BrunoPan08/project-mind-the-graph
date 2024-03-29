import React from 'react';
import styles from './style';
import {  Navbar, Feature, TitleModal, Advantage, Hero } from './components'

const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={` bg-yellow-gradient box-shadow`}>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar/>
          </div>
        </div>
        <div className={`${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero/>
          </div>
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <TitleModal/>
          <Advantage/>
          <Feature/>
        </div>
      </div>
    </div>
  )
}

export default App