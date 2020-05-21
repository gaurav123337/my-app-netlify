import React from 'react';
import './App.css';
import Login from './Component/Login';
import Search from './Component/Search';
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import history from './history';

function App() {
  return (
    <Router history={history}>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/Search" component={Search} />
      </Switch>
      </div>
    </Router>

  );
}

export default App;
