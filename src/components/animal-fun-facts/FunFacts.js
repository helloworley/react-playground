import React from 'react';
import { animals } from './animals';
import '../../styles/FunFacts.css';

const title = '';
let images = [];
const showBackground = true;

const displayFact = e => {
  const animal = e.target.alt;
  const animalInfo = animals[animal];
  const optionIndex = Math.floor(Math.random() * animalInfo.facts.length);
  document.getElementById('fact').innerHTML = animalInfo.facts[optionIndex];
}

for (const animal in animals) {
  images.push(
    <img 
      key={animal}
      className='animal'
      alt={animal}
      src={animals[animal].image}
      onClick={displayFact}
      // aria-label: {animal}
      // role: 'button'
    />
  )
}


export const FunFacts = () => (
  <div className="funfacts">
    <h1>{title === '' ? 'Click an animal for a fun fact' : title}</h1>
    <p id='fact'></p>
    <div className='animals'>
      {images}
    </div>
  </div>
);