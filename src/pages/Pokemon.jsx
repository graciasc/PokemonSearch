import React from 'react';
import { Form, Button, List } from 'semantic-ui-react';

export default class Pokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      pokemon: [],
      value: '',
      result: ''
    };
    this.search = this.search.bind(this);
    this.handleSearchButton = this.handleSearchButton.bind(this);
  }

  search(e) {
    // this will search the input in the this.state.data
    this.setState({
      value: e.target.value
    });
  }

  handleSearchButton(e) {
    e.preventDefault();
    const filterNames = this.state.pokemon.filter(search => {
      return (
        search.name.toLowerCase().indexOf(this.state.value.toLowerCase()) !== -1
      );
    });
    //return a list of the pokemon names into result
    const results = filterNames.map(pokemon => {
      return <List.Item> {pokemon.name}</List.Item>;
    });

    this.setState({
      result: results
    });
  }

  async componentDidMount() {
    this.setState({ loading: true });
    const response = await fetch('https://pokeapi.co/api/v2/pokemon');
    const data = await response.json();
    this.setState({ loading: false, pokemon: data.results });
    // console.log(this.state.data);
  }
  render() {
    // console.log(this.state.pokemon);
    // console.log(this.state.isLoading); // working loading
    // console.log(this.state.pokemon); pokemon names

    //search filter through pokemon Api
    //need to add padding and a functionality for a search button
    const loading = this.state.loading ? 'Loading' : '';
    return (
      <div style={{ minHeight: '99vh', padding: '25px' }}>
        {loading}
        <Form>
          <Form.Field>
            <label style={{ paddingBottom: '25px' }}>
              <h1>Search for your favorite Pokemon!? </h1>
            </label>
            <Form.Input
              width={3}
              type='text'
              placeholder='Pokemon'
              onChange={this.search}
            />
            <Button
              type='submit'
              value='submit'
              style={{ marginTop: '25px' }}
              onClick={this.handleSearchButton}
            >
              Search
            </Button>
          </Form.Field>
        </Form>
        <List>{this.state.result}</List>
      </div>
    );
  }
}
