import React from 'react'

const Nav = ({ weather : { name, country }, units, setUnits}) => {
  const handleUnitClick = (e) => {
    const unit = e.currentTarget.name
    if (units !== unit) setUnits(unit)
  }
  return (
    <div className='flex items-center justify-between'>
        <h2 className="font-semibold text-2xl tracking-wider">{`${name}, ${country}`}</h2>
        <div className='flex items-center space-x-4'>
            <button name="metric" onClick={handleUnitClick} className='bg-black  w-9 h-9 p-1 flex items-center justify-center cursor-pointer rounded-full'>
                <span className="text-white text-md font-semibold">°C</span>
            </button>
            <button name="imperial" onClick={handleUnitClick} className='bg-white shadow-sm w-9 h-9 p-1 flex items-center justify-center cursor-pointer rounded-full'>
                <span className="text-black text-md font-semibold">°F</span>
            </button>
        </div>
    </div>
  )
}

export default Nav