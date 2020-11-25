import React from 'react';

import './card.styles.css'

export const Card = (props) => (
    <div className = 'card-container'>
    <img
        alt = 'pokemon'
        src = {`https://pokeres.bastionbot.org/images/pokemon/${props.pokemon.id}.png`}
        className = 'card-image'
        
    />
    <h1> {props.pokemon.name}</h1>
    </div>
);
    
