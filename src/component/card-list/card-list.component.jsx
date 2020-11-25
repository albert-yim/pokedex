import React from 'react';
import './card-list.syles.css'

import {Card} from '../card/card.component'

export const CardList = props => {
    
    fetch(props.pokemon.url)
    .then(response => response.json())
    .then(data => console.log(data))

    return (
        <div className='card-list'> 
            {props.pokemon.map(pokemon => (
                <Card pokemon = {pokemon}/>
            ))}
        </div>
    );
}