import React, { useState, useEffect } from 'react';
import { WeatherData, SearchOptions } from '../interfaces/interface';
import { Greetings } from '../Greetings/greetings';
import './weather.scss';
import MagnifyingGlass from '../../assets/images/magnifying_glass.png';


export const Weather: React.FC = () => {
    const BASE_URL = 'http://api.openweathermap.org'
    const APIKEY = process.env.REACT_APP_API_KEY;
    const [city, setCity] = useState('');
    const [searchOptions, setSearchOptions] = useState<[]>([]);
    const [weather, setWeather] = useState<WeatherData | null>(null);
    const [errorMessage, setErrorMessage] = useState(String);


    useEffect(() => {
        const storedWeatherData = localStorage.getItem('weather-data');
        if (storedWeatherData) {
            setWeather(JSON.parse(storedWeatherData));
        }
    }, []);


    const citySearch = async () => {
        fetch(`${BASE_URL}/geo/1.0/direct?q=${city}&limit=5&lang=en&appid=${APIKEY}`)
            .then((res) => res.json())
            .then((data) => {
                if (data['cod'] === '400') {
                    setErrorMessage(data['message']);
                    clearSearch();
                }
                else if (Object.keys(data).length === 0) {
                    setErrorMessage(`We can't find this city. Let's try again`);
                    clearSearch();
                }
                else {
                    setSearchOptions(data);
                    setErrorMessage('');
                }

            })
            .catch((e) => { console.log('ERROR: ', e) })

    }

    const getForecast = (lat: number, lon: number) => {
        fetch(
            `${BASE_URL}/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&lang=en&appid=${process.env.REACT_APP_API_KEY}`
        )
            .then((res) => res.json())
            .then((data) => {
                const forecastData = {
                    ...data['city'],
                    list: data['list'].slice(0, 1),
                }
                localStorage.setItem('weather-data', JSON.stringify(forecastData));
                setWeather(forecastData);
            })
            .catch((e) => console.log({ e }))
    }

    const clearSearch = () => {
        setWeather(null);
        localStorage.removeItem('weather-data');
        setCity('');
        setSearchOptions([]);
    }


    return (<>
        {!weather ?
            <>
                <section className={`row`}>
                    <p className={`left-auto`}>Weather Forecast</p>
                </section>
                <section className={`row`}>
                    <section className={`col left-auto`}>
                        <input
                            className='text'
                            type="search"
                            placeholder='City'
                            name="cityName"
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                setCity(e.target.value);
                            }}
                            onKeyDown={(e) => {
                                if (e.key === "Enter")
                                    citySearch();
                            }}
                            value={city}
                            required
                        />
                        <span className={`text row align-center padding-five padding-all search`} onClick={citySearch}>Search</span>
                        {errorMessage ? <div className={`error padding-five padding-tb`}>{errorMessage}</div> : null}
                    </section>
                </section>
                {searchOptions.length > 0 ?
                    <ul className={`row align-center`}>
                        {searchOptions.map((el: SearchOptions, idx: number) => {
                            return (
                                <li key={idx} className={`city padding-twenty padding-lr`}>
                                    <p className={`text`} onClick={() => getForecast(el['lat'], el['lon'])}>
                                        {el['name']}, {el['state'] ? el['state'] : null} {el['country']}
                                    </p>
                                </li>
                            );
                        })}
                    </ul>
                    : null}
            </>
            :
            <>

                {weather['list'].map((el, index) => {
                    let temp = Math.round(el['main']['temp']);
                    return (
                        <div key={index}>
                            <section className={`row align-center padding-twenty padding-top`}>
                                <button className={`flat-button text`} onClick={clearSearch}> clear search</button>
                            </section>

                            <div>
                                {el['weather'].map((subEl, index) => {
                                    return (
                                        <>
                                            <div key={index} className={`row inLine-center`}>
                                                <img
                                                    alt={`weather-icon-${subEl['description']}`}
                                                    src={`http://openweathermap.org/img/wn/${subEl['icon']}@2x.png`}
                                                />
                                                <p>It's {new Date(el['dt_txt']).toLocaleDateString('en-US', { weekday: 'long' })} in {weather['name']}, {weather['country']}.
                                                    The humidity is at {el['main']['humidity']}% and the wind speed is currently {el['wind']['speed']} mph.
                                                    It's  {subEl['description']} at the moment with a temperature around {temp}° <span onClick={() => alert('ddd')}>F</span>. 
                                                </p>

                                            </div>
                                        </>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}

            </>
        }
    </>)
}