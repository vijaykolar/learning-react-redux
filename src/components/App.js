import React, { Component } from 'react';
import './App.css';
// import { selectedSong } from '../actions';
// import Header from './Header';
import SongList from './SongList';
class App extends Component {
  render() {
    return (
      <div className="App">
        <SongList />
      </div>
    );
  }
}

export default App;
