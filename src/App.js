import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import About from './Components/About';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/projects'>PROJECTS</Link>
            </li>
            <li>
              <Link to='/about'>GAMES</Link>
            </li>
            <li>
              <Link to='/twigstick'>HOME</Link>
            </li>
            <li>
              <Link to='/contact'>CONTACT</Link>
            </li>
            <li>
              <Link to='/about'>ABOUT</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path='/projects'>
            <Projects />
          </Route>
          <Route path='/games'>
            <Games />
          </Route>
          <Route path='/twigstick'>
            <Home />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function Projects() {
  return <h2>Projects</h2>;
}

function Games() {
  return <h2>Games</h2>;
}

function Contact() {
  return <h2>Contact</h2>;
}

export default App;
