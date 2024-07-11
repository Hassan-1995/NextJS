import CustomSelectBox from '@/components/CustomSelectBox'
import React from 'react'

const cities = [
  "Karachi",
  "Islamabad",
  "Lahore",
  "Quetta",
  "Peshawar",
  "Multan",
];

const SelectBoxPage = () => {
  return (
    <div className='bg-white rounded-lg mx-4 p-4'>
        <h1>This is selct box page</h1>
        <br/>
        <CustomSelectBox items={cities} />
    </div>
  )
}

export default SelectBoxPage