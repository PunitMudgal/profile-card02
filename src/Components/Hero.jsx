import React from 'react';
import './Style.css'

export default function Hero(props) {
  return (
    <div className='card capitalize'>
      <div className='small-card'>
        <img
          className='image'
          src='https://picsum.photos/200'
          alt='not found'
        />
        <h1 className='name'>{props.everything.Name}</h1>
        <p className='mobile-number'>{props.everything.mobno}</p>
        <small className='address'>{props.everything.address}</small>
      </div>
    </div>
  );
}