import React, { Component } from 'react';

import Header from './components/app/Header';
import Footer from './components/app/Footer';

import './assets/styles/main.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;
