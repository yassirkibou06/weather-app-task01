import React from 'react'
import { iconUrlFromCode } from '../services/ApiService'


//Forecast does not work because free subscribing does not have the hourly and daily data
const ForeCast = ({weather: {feels_like, icon, details}}) => {
    return (
        <div className='mt-10 grid grid-cols-2 lg:grid-cols-7 gap-2'>
            <div className='bg-white shadow-sm rounded-xl p-2 text-center'>
                <h3 className='font-semibold text-sm mb-2'>{details}</h3>
                <img className='object-cover w-20' src={iconUrlFromCode(icon)} alt="" />
                <p className='font-medium text-gray-500 mt-2'>{`${feels_like.toFixed()}°`}</p>
            </div>
            
        </div>
    )
}

export default ForeCast