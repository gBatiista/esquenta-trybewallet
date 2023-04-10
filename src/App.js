import React from 'react';
import { Route, Switch } from 'react-router-dom';

class App extends React.Component() {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/posts" component={ Posts } />
      </Switch>

    );
  }
}

export default App;
