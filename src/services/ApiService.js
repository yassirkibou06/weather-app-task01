import { DateTime } from "luxon";

const API_KEY = "5b6728f8b334b0ddb7e2f37b1335a29b";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

const getWeatherData = (infoType, searchParams) => {
    const url = new URL(BASE_URL + "/" + infoType);
    url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

    return fetch(url)
    .then((res) => res.json())
};

const formatCurrentWeather = (data) => {
    const {
        coord: { lat, lon },
        main: { temp, feels_like, temp_min, temp_max, humidity },
        name,
        dt,
        sys: { country, sunrise, sunset },
        weather,
        wind: { speed },
        clouds: { all }
    } = data;

    const { main: details, icon } = weather[0];

    return {
        lat,
        lon,
        temp,
        all,
        feels_like,
        temp_min,
        temp_max,
        humidity,
        name,
        dt,
        country,
        sunrise,
        sunset,
        weather,
        speed,
        details,
        icon
    }
};

const formatdForecastWeather = (data) => {
    const { timezone } = data;
    return { timezone };
}


const getFormattedWeatherData = async (searchParams) => {
    const formattedCurrentWeather = await getWeatherData("weather", searchParams)
    .then(formatCurrentWeather);

    const { lat, lon } = formattedCurrentWeather;

    const formattedForecastWeather = await getWeatherData("onecall", {
        lat,
        lon,
        exclude: "current,minutely,alerts",
        units: searchParams.units
    }).then(formatdForecastWeather)

    return { ...formattedCurrentWeather, ...formattedForecastWeather };
}

const formatToLocalTime = (
    secs,
    zone,
    format = "cccc, dd LLL yyyy' | 'hh:mm a"
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

const iconUrlFromCode = (code) => {
    return `http://openweathermap.org/img/wn/${code}@2x.png`
}

export default getFormattedWeatherData;

export { formatToLocalTime, iconUrlFromCode };
