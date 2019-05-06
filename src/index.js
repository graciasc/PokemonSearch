import React from "react";
import Header from "./components/Header";
import ReactDOM from "react-dom";

export default class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      pokemon: []
    };
  }
  async componentDidMount() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon");
    const json = await response.json();
    this.setState({ pokemon: json });
  }
  render() {
    const { pokemon } = this.state;
    console.log(pokemon.id);

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
