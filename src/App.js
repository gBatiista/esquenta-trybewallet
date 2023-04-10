import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Posts from './pages/Posts';

class App extends React.Component {
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
