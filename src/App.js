import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './component/Header';
import About from './component/About'
// import Portfolio from './component/Portfolio';
import Home from './component/Home';
import images from './images/MySelf.jpg'
import Footer from './component/Footer';


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
          <Route exact path="/" component={Home} ><Home title={title} subheader={subheader} img={img} bio={bio} avatar={avatar} /></Route>
          {/* <Route exact path="/portfolio" component={Portfolio} /> */}
          <Route exact path="/about" component={About} />
        </Switch>
        <Footer />
      </Router>
    </div >
  )
}

export default App;



