/* eslint-disable no-unused-vars */
import React from 'react'
import styles from '../style';
import { discount, robot, head02, start, head01 } from '../assets'

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col xl:py-[20px] sm:py-[71px]  py-6 sm:px-10`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 ml-[5rem]`}>
        <h1 className='font-lato font-semibold ss:text-[34px] xl:pr-[10rem] sm:pr-[13rem] text-[34px] mb-[20px] ss:leading-[54px] leading-[75px] w-full text-white'>Discover all possibilities of using this powerfull tool and create science figures, posters and infographics.</h1>
        <img src={start} className='cursor-pointer'/>
      </div>
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 mr-[2rem] relative`}>
        <img src={head02} alt='billing' className=' absolute z-[5]  mt-[6rem] m-w-[650px] m-h-[427px] hidden-image'></img>
      </div>
    </section>
  )
}

export default Hero