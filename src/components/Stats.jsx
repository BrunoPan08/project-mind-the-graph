/* eslint-disable no-unused-vars */
import React from 'react';
import { stats } from '../constats';
import styles from '../style';

const Stats = () => {
  return (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-30 mb-6 mt-[100px]`}>
      <h3 className='font-poppins font-bold xs:text-[36px] text-[15px] xs:leading-[26px] leading-[21px] text-purple uppercase '>Visualize what Mind the Graph can do for you</h3>
    </section>
  )
}

export default Stats