/* eslint-disable no-unused-vars */
import React from 'react'
import styles from '../style';
import { discount, robot, head02, start, head01 } from '../assets'
import GetStarted from './GetStarted'

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col sm:py-[80px] py-6 sm:px-10`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 ml-[5rem]`}>
        <div className='flex flex-row justify-between items-center w-full '>
        </div>
        <h1 className='font-poppins font-semibold ss:text-[34px] pr-[10rem] text-[34px] mb-[20px] ss:leading-[54px] leading-[75px] w-full text-white'>Discover all possibilities of using this powerfull tool and create science figures, posters and infographics.</h1>
        <img src={start}/>
      </div>
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 mr-[2rem] relative`}>
        <img src={head02} alt='billing' className=' absolute z-[5]  mt-[6rem] m-w-[650px] m-h-[427px]'></img>
        <div className='absolute z-[0] w-[40%] H-[35%] top-0 pink__gradiant'></div>
        <div className='absolute z-[1] w-[80%] H-[80%] rounded-full bottom-40 white__gradiant'></div>
        <div className='absolute z-[0] w-[50%] H-[50%] right-20 bottom-20 blue__gradiant'></div>
      </div>
    </section>
  )
}

export default Hero