/* eslint-disable no-unused-vars */
import React from 'react';
import { stats } from '../constants';
import styles from '../style';

const Stats = () => {
  return (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-30 mb-2 mt-[100px]`}>
      <h3 className='font-lato font-bold xs:text-[34px] text-[15px] xs:leading-[26px] leading-[21px] text-purple uppercase '>Visualize what Mind the Graph can do for you</h3>
    </section>
  )
}

export default Stats