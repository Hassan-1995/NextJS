'use client';
import React, { useContext } from 'react'
import GetIcon from './GetIcon';
import { MenuContext } from '@/context/MenuContext';

const MainHeader = () => {

  const {toggle} = useContext(MenuContext)

  return (
    <div className='bg-white flex justify-between items-center px-4 h-12 mb-4'>
        <div>Brand</div>
        <div className='flex justify-center items-center gap-4'>
          <div onClick={toggle} className='lg:hidden'>
              <GetIcon name='HiBars3' className='cursor-pointer'/>
          </div>
          <div>User Area</div>

        </div>
    </div>
  )
}

export default MainHeader