import React from 'react';
import './card-list.syles.css'

import {Card} from '../card/card.component'

export const CardList = props => (
    <div className = 'card-list'>
        {props.pokemon.map(pokemon => (
            <Card key = {pokemon.id} pokemon = {pokemon}/>
        ))}
    </div>
)