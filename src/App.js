import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './component/Header';
import Home from './component/Home';
import images from './images/ME.jpg'
import Footer from './component/Footer';
import Projects from './component/Projects';
import About from './component/About';


function App() {

  const title = "Kouchner Philip";
  const subheader = "Full Stack Web Developer";
  const img = images;
  const bio = "Currently studying at Berkley Extension as Full-Stack Web Developer.Looking for my new challenge in frontend, backend or Both. I'm a fast learner with excellent background in computers I like to learn new technologies and expand my knowledge in a variety of fields";


  return (
    <div className="App" >
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home title={title} subheader={subheader} img={img} bio={bio} />
          </Route>
          <Route exact path="/React_Portfolio">
            <Home title={title} subheader={subheader} img={img} bio={bio} />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div >
  )
}

export default App;



