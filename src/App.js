import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './component/Header';
import About from './component/About'
import Portfolio from './component/Portfolio';
import Home from './component/Home';


function App() {
  return (
    <div className="App" >
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/about" component={About} />
        </Switch>
      </Router>
    </div >
  )
}

export default App;



