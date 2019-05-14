import React from 'react';
import Route from './routes/Routes';
import { BrowserRouter } from 'react-router-dom';
import { Navbar,Footer} from './components';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Route />
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
