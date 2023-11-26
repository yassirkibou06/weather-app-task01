import './App.css';
import { useState, useEffect } from 'react';
import LeftSide from './components/LeftSide';
import Nav from './components/Nav';
import ForeCast from './components/ForeCast';
import TodayHighlightsSec from './components/TodayHighlightsSec';
import getFormattedWeatherData from './services/ApiService';

function App() {
  const [query, setQuery] = useState({ q: 'rabat' });
  const [units, setUnits] = useState('metric');
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, units }).then(
        (data) => {
          setWeather(data);
        }
      )
    }
  
    fetchWeather()
  }, [query, units]);

  //console.log(weather)

  return (
    <div className="font-open-sans grid grid-cols-home h-screen">
      {weather && (
        <>
          <LeftSide weather={weather} setQuery={setQuery} />
          <div className="bg-gray-100 px-10 pt-5">
            <Nav weather={weather} setQuery={setQuery} units={units} setUnits={setUnits}/>
            <ForeCast weather={weather} />
            <TodayHighlightsSec weather={weather} />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
