import React from 'react';
import Route from './routes/Routes';
import { BrowserRouter } from 'react-router-dom';
import { Navbar, Footer } from './components';

export default class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
        pokemonList:{},
        pokemonSpecialName:{}
    };
  }
  async componentDidMount() {
      try {

          const response = await fetch('https://pokeapi.co/api/v2/pokemon')
          const data = await response.json()
          console.log(data) // recieves the api data
          const urls = data.results.map(name=> name.url)
          console.log(urls)
          this.setState=({pokemonList:data.results,
        pokemonUrl:await fetch(urls)})


        }
        catch(error) {
            if(error) {
                return `The error you received is ${error}`
            }
        }
    }
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          {/* maybe a component that renders the api with pokemon=this.state.pokemon*/}
          <Route />
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}
