import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import {CardList} from './component/card-list/card-list.component';


class App extends Component{
  constructor() {
    super();
    this.state = {
      pokemon: []
    };
  }

  dataParsing(data) {
    fetch(data.url)
    .then(response => response.json())
    .then(data => {
      this.setState({pokemon: this.state.pokemon.concat({
        name: data.name,
        id: data.id
      })})
    })
  }

  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
    .then(response => response.json())
    .then(dataParsing => dataParsing.results)
    .then(data => data.map(d => this.dataParsing(d))  )
  }

  render() {
    return (
      <div className="App">
        <CardList pokemon = {this.state.pokemon}/>        
      </div>
    );
  }
}

export default App;
