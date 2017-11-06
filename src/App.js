import React, { Component } from 'react';
import GuestBook from './components/guestbook';
import Welcome from './components/welcome';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Welcome />
      <!--  <GuestBook /> -->

      </div>
    );
  }
}

export default App;
