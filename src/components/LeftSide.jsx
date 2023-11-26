import { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { MdOutlineLocationSearching, MdMyLocation } from "react-icons/md";
import { formatToLocalTime, iconUrlFromCode } from '../services/ApiService';



const LeftSide = ({ weather: { dt, name, timezone, country, icon, temp, all }, setQuery }) => {
    const [city, setCity] = useState('');
    const [show, setShow] = useState(false)

    const handleSearchClick = (e) => {
        if (city !== '') {
            setQuery({
                q: city
            })
            setCity('')
        } else {
            setQuery({ q: "rabat" })
        }
    }

    const handleLocationClick = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                let lat = position.coords.latitude;
                let lon = position.coords.longitude;

                setQuery({
                    lat,
                    lon
                })
            })
        }
        setShow(true)
    }

    return (
        <div className="px-7 py-5 bg-gray-100 lg:bg-white">
            <div className="flex items-center justify-between">
                <div className='bg-white lg:bg-gray-100/50 p-2 w-[220px] rounded-3xl flex items-center space-x-2'>
                    <CiSearch onClick={handleSearchClick} size={20} />
                    <input value={city} onChange={(e) => setCity(e.target.value)} className='bg-transparent outline-none w-full placeholder:text-sm placeholder:text-gray-600' type="search" placeholder='Search for places...' />
                </div>
                <div className="bg-white lg:bg-gray-100 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer">
                    {show ? (
                        <MdMyLocation onClick={() => setShow(false)} size={20} className="text-gray-600" />
                    ) : (
                        <MdOutlineLocationSearching onClick={handleLocationClick} size={20} className="text-gray-600" />
                    )}
                </div>
            </div>
            <div className='mt-5 rounded-xl shadow-sm lg:shadow-none px-5 py-2 bg-white text-center'>
                <div className='w-32 h-32 lg:w-48 lg:h-44 mt-4'>
                    <img className='object-cover w-full h-full' src={iconUrlFromCode(icon)} alt="" />
                </div>
                <h2 className='text-7xl font-medium mt-4'>{`${temp.toFixed()}°`}</h2>
                <p className="pl-2 font-medium text-gray-600 text-sm mt-6">{formatToLocalTime(dt, timezone)}</p>
                <div className="border-t border-gray-100 mt-6">
                    <div className='flex items-center space-x-3 mt-3 bg-blue-100 py-1 px-4 rounded-xl w-fit'>
                        <h3 className='font-semibold text-sm'>{`${all}%`}</h3>
                        <p className='text-sm font-semibold'>Mostly Cloudy</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftSide