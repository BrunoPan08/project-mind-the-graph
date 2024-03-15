/* eslint-disable no-unused-vars */
import React from 'react';
import { useState } from 'react';
import { close, logomindthegraph, menu, login, signUp } from '../assets';
import { navLinks } from '../constants';

const Navbar = () => {
  const [toggle, settoggle] = useState(false);
  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <img src={logomindthegraph} alt="hoobank" className='w-[135px] h-[45px]'/>
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li key={nav.id} className={`font-lato font-normal cursor-pointer text-white text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} `}>
            <a 
              href={`#${nav.id}`}
            >{nav.title}</a>
          </li>
        ))}
        <img src={login} className='mr-4 ml-5 cursor-pointer'></img>
        <img src={signUp} className='cursor-pointer'></img>
      </ul>
      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img 
          src={toggle ? close : menu} 
          alt='menu' className='w-[28px] h-[28px] object-contain' 
          onClick={() => settoggle((prev) => !prev)}
        ></img>
        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute text-white top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
            <ul className='list-none flex flex-col justify-end items-center flex-1'>
            {navLinks.map((nav, index) => (
              <li key={nav.id} className={`font-lato font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} `}>
                <a 
                  href={`#${nav.id}`}
                >{nav.title}</a>
              </li>
            ))}
            <img src={login} className='mb-4 mt-3 cursor-pointer'></img>
            <img src={signUp} className='mt-2cursor-pointer'></img>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar