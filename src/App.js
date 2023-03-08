import React from 'react';
import Urls from './Components/Urls'
import MusicPlayer from './Components/MusicPlayer'
import './App.css';
function App() {
  return (
    <div className="background">
      <div className="grid">
        <div className="left-column">
        </div>
        <div className="middle-column">
          <MusicPlayer />
        </div>
        <div className="right-column">
          <Urls />
        </div>
      </div ></div>
  )
}

export default App;
