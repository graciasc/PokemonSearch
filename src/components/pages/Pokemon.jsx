import React from 'react'



export default class Pokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: [],
      value: ""
    };
    this.search = this.search.bind(this);
  }

  search() {
    // this will search the input in the this.state.data
  }

  async componentDidMount() {
    this.setState({ loading: true });
    const response = await fetch("https://pokeapi.co/api/v2/pokemon");
    const data = await response.json();
    this.setState({ loading: false, data: data.results });
    console.log(this.state.data);
  }

  render() {
    const name = this.state.data.map((poke, i) => (
      <li key={i}> {poke.name}</li>
    ));
    const loading = this.state.loading ? "...Loading" : name;
    return (
      <div className="App"style={{minHeight: "99vh"}} >
        <h1>Pokemon Names </h1>
        <form>
          <input
            value=""
            placeholder="Search List for Pokemon"
            onChange={this.state.search}
          />
          {loading}
        </form>
      </div>
    );
  }
}
