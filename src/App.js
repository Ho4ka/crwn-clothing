import React from 'react';
import './App.css';
import  { Route, Switch, Link } from "react-router-dom";

import HomePage from './pages/homepage/homepage.component';

const HatsPage = (props) => (
        <div>
            <h1>HATS PAGE</h1>
            {/*<Link to="/">Main</Link>*/}
            <button onClick={() => { props.history.push("/") }}>Go to </button>
        </div>
    );

function App() {
  return (
    <div>
        <Switch>
            <Route  exact path="/" component={ HomePage }/>
            <Route  path="/hats" component={ HatsPage }/>
        </Switch>
      {/*<HomePage />*/}
    </div>
  );
}

export default App;
