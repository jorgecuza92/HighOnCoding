import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import Menu from './Menu'
import Header from './Header'
import { WatchKit, Swift } from './Article'

class App extends Component {
  render() {
    return (
      // JSX 
      <div>
        <Menu />
        <Header />
        <WatchKit />
        <Swift />
      </div>
    )
  }
}

export default App;
