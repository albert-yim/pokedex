import React from 'react';

import './card.styles.css'

export const Card = (props) => (
    <div className = 'card-container'>
        <h1 key = {props.pokemon.name}> {props.pokemon.name}</h1>
    </div>
)