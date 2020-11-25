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

    // this.state.temp.map( temp => (
    //   fetch(temp.url)
    //   .then(response => response.json())
    //   .then(data => console.log(data))
    //   // .then(data => this.setState({ 
    //   //   pokemon: [this.state.pokemon, {
    //   //     name: temp.name
    //   //   }], 
    //   // }))
    // ))
    
  }

  render() {
    this.state.pokemon.map(poke => {console.log(poke)})
    return (
      <div className="App">
        hello
          // <CardList pokemon = {this.state.pokemon}/>        
      </div>
    );
  }
}

export default App;
