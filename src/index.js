import React from "react";
import Header from "./components/Header";
import ReactDOM from "react-dom";

export default class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      pokemon: [],
      Species: [],
      search: "",
      isLoading: false
    };
    this.searchInput = this.searchInput.bind(this);
  }

  searchInput(e) {
    this.setState({
      search: e.target.value
    });
  }
  async componentDidMount() {
    // this.state.isLoading = true have to set isLoading to true to Load the page
    this.setState({ isLoading: true });
    const response = await fetch("https://pokeapi.co/api/v2/pokemon");
    const json = await response.json();
    this.setState({
      pokemon: json.results,
      isLoading: false
    });
    // console.log(this.state.pokemon);
    // const pokemonName = json.results.map(name => {
    //   return name.name;
    // });
    // console.log(pokemonName);
  }
  render() {
    console.log(this.state.isLoading); // working loading
    // console.log(this.state.pokemon); pokemon names

    const filterNames = this.state.pokemon.filter(search => {
      return (
        search.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !==
        -1
      );
    });
    //search filter through pokemon Api
    if (this.state.isLoading) {
      return <p>is Loading..</p>;
    }

    return (
      <div>
        <Header />
        <form>
          <input
            type="text"
            placeholder="Pokemon"
            onChange={this.searchInput}
          />
        </form>
        {filterNames.map(pokemon => {
          return <li> {pokemon.name}</li>;
        })}
        {/* <h1> {this.state.search}</h1>  the updating state*/}
        {/* <h1> {this.state.pokemon[1]}</h1> */}

        {/* {pokemonName.map((pokemon)=> {
  return  <p>{pokemon} </p>
})} */}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
