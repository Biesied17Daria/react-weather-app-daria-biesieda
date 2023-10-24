import React from 'react';
import './Weather.css';

export default function Weather (){
    return ( 
<div className='Weather'>
<form>
    <div className='row'>
    <div className='col-9'>
    <input 
    type='search' 
    placeholder='Search your city...'
    className='form-control'
    autoFocus='on'
    />
    </div>
    <div className='col-3'>
    <input 
    type='submit'
    value='Search'
    className='btn btn-primary w-100'
    />
    </div>
</div>
</form>
    <h1>
        Lisbon
        </h1>
    <ul>
        <li>
            Monday 3:00
            </li>
            <li>
                Cloudy
                </li>
    </ul>
    <div className='row mt-3' >
        <div className='col-6'>
            <img 
            src='https://static.vecteezy.com/system/resources/previews/005/362/115/original/smiling-cloud-kawaii-character-blue-object-of-sky-symbol-of-cloudy-weather-mascot-of-weather-forecast-cute-cartoon-illustration-vector.jpg'
            alt='Cloudy' 
            />
            <span className='temperature'>6</span>
            <span className='unit'>°С</span>  
        </div>
        <div className='col-6'>
            <ul>
                <li>
                    Precipitation: 15%
                </li>
                <li>
                    Humidity: 13%
                </li>
                <li>
                    Wind: 7 km/h
                </li>
            </ul>
        </div>
    </div>
    </div>
    )
}