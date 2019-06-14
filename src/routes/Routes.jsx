import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {About,Pokemon,Home} from '../pages';



export default function Routes() {
  return (
    <Switch>
    <Route exact path='/' component={Home} />
      <Route exact path='/Home' component={Home} />
      {/* <Route path='/About Me' component={About} /> */}
      <Route path='/pokemon' component={Pokemon} />
    </Switch>
  );
}
