import React, { useState } from 'react'

export default function PanelComponent ({ btnColor, weatherEntry, setLocation }) {
  const [location, setlocation] = useState()
  function search (e, param) {
    e.preventDefault()
    if (location !== '') {
      setLocation(param)
    }
  }

  return (
    <div className='absolute bottom-0 md:overflow-hidden overflow-y-auto h-[70vh] md:h-[80vh] lg:h-[90vh] w-[100%] lg:w-[30%] xl:w-[38%] lg:rounded-r-xl lg:top-0 lg:right-0 shadow-lg border-solid border-[1px] z-10 py-8 px-6 lg:py-6 lg:px-5 xl:px-10 border-[#ffffff12] backdrop-blur bg-[#6e6e6e40]'>
      <form onSubmit={(e) => search(e, location)} className='mb-10'>
        <div className='border-b-[1px] border-white w-[65%] xl:w-[77%]'>
          <input onChange={(e) => setlocation(e.target.value)} className='bg-transparent border-none w-[100%] focus:outline-none placeholder:text-white text-white text-lg' type='text' placeholder='Search Location' />
        </div>
        <button type='submit' style={{ backgroundColor: `${btnColor}` }} className='absolute top-0 right-0 p-[17px] lg:py-3 lg:px-6 border-none outline-none cursor-pointer text-xl transition ease-in-out duration-[400] text-white hover:text-cyan-400'>
          Search
        </button>
      </form>
      <ul className='pb-4 my-8 border-b-[1px] text-sm border-white text-[#ccc] block'>
        <li className='newyork my-9 cursor-pointer hover:text-white' onClick={(e) => setLocation('New York')}>
          New York
        </li>
        <li className='my-9 cursor-pointer hover:text-white' onClick={(e) => setLocation('California')}>
          California
        </li>
        <li className='my-9 cursor-pointer hover:text-white' onClick={(e) => setLocation('Paris')}>
          Paris
        </li>
        <li className='my-9 cursor-pointer hover:text-white' onClick={(e) => setLocation('Tokyo')}>
          Tokyo
        </li>
      </ul>
      <p className='my-6 text-xl text-white'>Weather Details</p>
      <ul className='pb-4 my-8 text-sm border-b-[1px] border-white text-[#ccc]'>
        <li className='my-6 flex justify-between'>
          <span>Cloudy</span>
          <span>{weatherEntry.current.cloud}%</span>
        </li>
        <li className='my-6 flex justify-between'>
          <span>Humidity</span>
          <span>{weatherEntry.current.humidity}%</span>
        </li>
        <li className='my-6 flex justify-between'>
          <span>Wind</span>
          <span>{weatherEntry.current.wind_kph}km/h</span>
        </li>
      </ul>
    </div>
  )
}
