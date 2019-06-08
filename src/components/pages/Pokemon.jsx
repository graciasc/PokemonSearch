import React from 'react'



export default class Pokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      pokemon: [],
      value: ""
    };
    this.search = this.search.bind(this);
  }

  search(e) {
    // this will search the input in the this.state.data
    this.setState({
        value:e.target.value
    })
  }

  async componentDidMount() {
    this.setState({ loading: true });
    const response = await fetch("https://pokeapi.co/api/v2/pokemon");
    const data = await response.json();
    this.setState({ loading: false, pokemon: data.results });
    // console.log(this.state.data);
  }
  render() {
    // console.log(this.state.pokemon);
    // console.log(this.state.isLoading); // working loading
    // console.log(this.state.pokemon); pokemon names

    const filterNames = this.state.pokemon.filter(search => {
      return (
        search.name.toLowerCase().indexOf(this.state.value.toLowerCase()) !==
        -1
      );
    });
    //search filter through pokemon Api
    if (this.state.loading) {
      return <p>is Loading..</p>;
    }
const loading = this.state.loading ? 'loading' : 'Loaded'
    return (
      <div style={{minHeight: "99vh"}}>
          {loading}
        <form>
          <input
            type="text"
            placeholder="Pokemon"
            onChange={this.search}
          />
        </form>
        {filterNames.map(pokemon => {
          return <li> {pokemon.name}</li>;
        })}
      </div>
    );
  }


}
/*
 render() {
    const name = this.state.data.map((poke, i) => (
      <li key={i}> {poke.name}</li>
    ));
    const loading = this.state.loading ? "...Loading" : name;
const filterPokemon = this.state.data.filter(searchedPokemon => searchedPokemon.name.indexOf(this.state.value)!== -1)
// const showName = filterPokemon.map(item =><li>{item.name}</li>)
// console.log(showName)
console.log(this.state.value)
    return (
      <div className="App"style={{minHeight: "99vh"}} >
        <h1>Pokemon Names </h1>
        <form>
          <input
          type='text'
            placeholder="Search List for Pokemon"
            onChange={this.search}
          />
{loading}
        </form>
      </div>
    );
  }
  */
