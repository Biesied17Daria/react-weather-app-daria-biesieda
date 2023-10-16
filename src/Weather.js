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
    placeholder='Search your city, dattebayo!'
    className='form-control'
    />
    </div>
    <div className='col-3'>
    <input 
    type='submit'
    value='Search'
    className='btn btn-primary'
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
    <div className='row'>
        <div className='col-6'>
            <img 
            src='https://phonoteka.org/uploads/posts/2021-06/1624886766_19-phonoteka_org-p-krasnie-oblaka-akatsuki-oboi-krasivo-19.jpg'
            alt='Cloudy' width={100} />
            6°С
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