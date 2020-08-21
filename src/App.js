import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './component/Header';
import About from './component/About'
import Portfolio from './component/Portfolio';
import Home from './component/Home';
import images from './images/MySelf.jpg'

function App() {
  const title = "Kouchner Philip";
  const subheader = "Full Stack Web Developer";
  const img = images;
  const bio = "Currently studying at Berkley Extension as Full-Stack Web Developer.Looking for my new challenge in frontend, backend or Both. I'm a fast learner with excellent background in computers I like to learn new technologies and expand my knowledge in a variety of fields";
  const avatar = "😎";
  return (
    <div className="App" >
      <Router>
        <Header />
        <Switch>
          <Home title={title} subheader={subheader} img={img} bio={bio} avatar={avatar} />
          <Route exact path="/" component={Home} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/about" component={About} />
        </Switch>
      </Router>
    </div >
  )
}

export default App;



