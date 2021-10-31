import React from 'react';
import Card from './Card';
import './Cards.css'


export default function Cards({cities, onClose}) {
  

  if ({cities}){
    return( 
      
      <div className='cardsBox'>
  

          {
            cities.map(city => (
                <Card 
                  key={city.id} 
                  name = {city.name}
                  min = {city.min}
                  max = {city.max}
                  img = {city.img}
                  onClose={() => onClose(city.id)}
                  id = {city.id}
                />
            ))
          }
        </div>
      )
  } else {
    return( 
    
      <div className='cardsBox'>
        Sin Ciudades
      </div>
    )
  }
};