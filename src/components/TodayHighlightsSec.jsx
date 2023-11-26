import React from 'react';
import { WiHumidity } from "react-icons/wi";
import { FaWind } from "react-icons/fa";
import { BsSunrise } from "react-icons/bs";
import { WiSunset } from "react-icons/wi";
import { MdOutlineWbSunny } from "react-icons/md";
import { formatToLocalTime } from '../services/ApiService';
import { FaSun } from "react-icons/fa";
import { TbSunset2 } from "react-icons/tb";


const TodayHighlightsSec = ({weather: {humidity, speed, sunrise, sunset, timezone, temp_min, temp_max}}) => {
    return (
        <>
            <h2 className='mt-10 font-bold text-xl tracking-wider'>Today's Highlights</h2>
            <div className='my-5 grid grid-cols-2 lg:grid-cols-3 gap-5'>
                {/*** Humidity */}
                <div className='bg-white shadow-sm rounded-xl py-7 px-5 relative'>
                    <h3 className='text-gray-300 mb-3'>Humidity</h3>
                    <h2 className='font-semibold text-3xl'>{`${humidity.toFixed()}%`}</h2>
                    <span className='text-blue-400 absolute bottom-2 right-2'><WiHumidity size={25} /></span>
                </div>
                {/** Wind */}
                <div className='bg-white shadow-sm rounded-xl py-7 px-5 relative'>
                    <h3 className='text-gray-300 mb-3'>Wind</h3>
                    <h2 className='font-semibold text-3xl'>{`${speed} km/h`}</h2>
                    <span className='text-blue-400 absolute bottom-2 right-2'><FaWind size={25} /></span>
                </div>
                {/** Rise */}
                <div className='bg-white shadow-sm rounded-xl py-7 px-5 relative'>
                    <h3 className='text-gray-300 mb-3'>Rise</h3>
                    <div className="flex items-center space-x-3">
                        <FaSun size={50} className='text-yellow-500' />
                        <p className="font-medium text-xl">{formatToLocalTime(sunrise, timezone, "hh:mm a")}</p>
                    </div>
                    <span className='text-yellow-500 absolute bottom-2 right-2'><BsSunrise size={25} /></span>
                </div>
                {/** Set */}
                <div className='bg-white shadow-sm rounded-xl py-7 px-5 relative'>
                    <h3 className='text-gray-300 mb-3'>Set</h3>
                    <div className="flex items-center space-x-3">
                        <TbSunset2 size={50} className='text-orange-500' />
                        <p className="font-medium text-xl">{formatToLocalTime(sunset, timezone, "hh:mm a")}</p>
                    </div>
                    <span className='text-orange-500 absolute bottom-2 right-2'><WiSunset size={25} /></span>
                </div>
                {/** Hight */}
                <div className='bg-white shadow-sm rounded-xl py-7 px-5 relative'>
                    <h3 className='text-gray-300 mb-3'>Hight</h3>
                    <div className="flex items-center space-x-3">
                    <FaSun size={50} className='text-yellow-600' />
                        <p className="font-medium text-xl">{`${temp_max.toFixed()}°`}</p>
                    </div>
                    <span className='text-yellow-400 absolute bottom-2 right-2'><MdOutlineWbSunny size={25} /></span>
                </div>
                {/** Low */}
                <div className='bg-white shadow-sm rounded-xl py-7 px-5 relative'>
                    <h3 className='text-gray-300 mb-3'>Low</h3>
                    <div className="flex items-center space-x-3">
                    <FaSun size={50} className='text-yellow-300' />
                        <p className="font-medium text-xl">{`${temp_min.toFixed()}°`}</p>
                    </div>
                    <span className='text-yellow-300 absolute bottom-2 right-2'><MdOutlineWbSunny size={25} /></span>
                </div>
            </div>
        </>
    )
}

export default TodayHighlightsSec