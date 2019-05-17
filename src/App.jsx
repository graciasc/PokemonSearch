import React from 'react';
import Route from './routes/Routes';
import { BrowserRouter } from 'react-router-dom';
import { Navbar, Footer } from './components';

export default class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      
    };
  }
  async componentDidMount() {
const response = await fetch('https://pokeapi.co/api/v2/pokemon')
const data = await response.json()
console.log(data) // recieves the api data

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
