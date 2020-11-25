import React from 'react';

import './card.styles.css'

export const Card = (props) => (
    <div className = 'card-container'>
    <img
        alt = 'pokemon'
        src = {'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png'}
    />
    <h1 key = {props.pokemon.id}> {props.pokemon.name}</h1>
    </div>
)
    
