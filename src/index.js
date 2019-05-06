import React from "react";
import Header from "./components/Header";
import ReactDOM from "react-dom";

export default class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      pokemon: [],
      Species: []
    };
  }
  async componentDidMount() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon");
    const json = await response.json();
    this.setState({ pokemon: json });
    const pokemonName = json.results.map(name => {
      return name.name;
    });
    console.log(pokemonName);
  }
  render() {
    // const { pokemon } = this.state;

    // const name = pokemon.results.map(name => {
    //   return name
    // })
    // console.log(name)

    return (
      <div>
        <Header />
        <p> Pokemon</p>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
