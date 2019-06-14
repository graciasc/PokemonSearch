import React from 'react';
import Route from './routes/Routes';
import { BrowserRouter } from 'react-router-dom';
import { Navbar, Footer } from './components';

export default class App extends React.Component {
  constructor(props) {
    super();

  }
  render() {


    return (
      <div>
        <BrowserRouter>
          <Navbar />
          {/* maybe a component that renders the api with pokemon=this.state.pokemon*/}
          {/* {name} */}
          <Route />
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}
