import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import CalculatorPage from './pages/CalculatorPage';
import Quote from './pages/Quote';
import './App.css';

export default function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Router exact path="/">
          <Home />
        </Router>
        <Route path="/calc">
          <CalculatorPage />
        </Route>
        <Route path="/quote">
          <Quote />
        </Route>
      </Switch>
    </Router>
  );
}
