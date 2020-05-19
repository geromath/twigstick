import React, { useContext } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { __RouterContext } from 'react-router';

import About from './Components/About';
import Projects from './Components/Projects';
import Home from './Components/Home';
import Games from './Components/Games';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';

import { useTransition, animated } from 'react-spring';

const App = () => {
  const { location } = useContext(__RouterContext);

  const transitions = useTransition(location, (location) => location.pathname, {
    from: { opacity: 0, transform: 'translate(100%, 0)' },
    enter: { opacity: 1, transform: 'translate(0%, 0)' },
    leave: { opacity: 0, transform: 'translate(-100%, 0)' },
  });

  return (
    <>
      <Navbar />
      <main>
        {transitions.map(({ item, props }) => (
          <animated.div key={item.key} style={props}>
            <Switch location={item}>
              <Route exact path='/projects' component={Projects} />
              <Route exact path='/games' component={Games} />
              <Route exact path='/twigstick' component={Home} />
              <Route exact path='/contact' component={Contact} />
              <Route exact path='/about' component={About} />
            </Switch>
          </animated.div>
        ))}
      </main>
    </>
  );
};

export default App;
