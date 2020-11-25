import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component{
  constructor() {
    super();
    this.state = {
      pokemon: []
    };
  }
  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
    .then(response => response.json())
    .then(dataParsing => dataParsing.results)
    .then(data => this.setState({pokemon:data}))
    // .then( allpokemon => this.setState({pokemon: allpokemon}));
  }

  render() {
    return (
      <div className="App">
        {
          this.state.pokemon.map(pokemon => (
             <h1 key = {pokemon.name}> {pokemon.name}</h1>
          ))
        }
      </div>
    );
  }
}

export default App;
