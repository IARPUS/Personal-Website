//import React from 'react'
import React, { useState, useRef, useEffect } from 'react';
import './cssStyles/MusicPlayer.css';
import musicFile from './music/BeneathTheMask.mp3';
export default function MusicPLayer() {
  const [unpressedPlay, setPlay] = useState(require('./images/unPressedPlayButton.png'));
  const [unpressedStop, setStop] = useState(require('./images/pressedStopButton.png'));
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(1);
  const [duration, setDuration] = useState(0);
  const audioPlayer = useRef();
  const slider = useRef();
  const audioSlider = useRef();
  useEffect(() => {
    let interval = setInterval(() => {
      setCurrentTime(audioPlayer.current.currentTime);
      slider.current.value = audioPlayer.current.currentTime;
    }, 10);
    return () => { clearInterval(interval) };
  }, [audioPlayer]);
  const handleLoadedData = () => {
    setDuration(audioPlayer.current.duration);
  }
  function start() {
    setPlay(require('./images/pressedPlayButton.png'));
    setStop(require('./images/unpressedStopButton.png'));
    audioPlayer.current.play();
  }
  function stop() {
    setStop(require('./images/pressedStopButton.png'));
    setPlay(require('./images/unPressedPlayButton.png'));
    audioPlayer.current.pause();
  }
  const handleChange = (e) => {
    audioPlayer.current.currentTime = e.target.value;
  }
  const handleChange2 = (e) => {
    setVolume(e.target.value / 100);
    audioPlayer.current.volume = e.target.value / 100;
  }
  let formattedCurrentTime = new Date(currentTime * 1000).toISOString().substr(14, 5);
  let formattedDuration = new Date(duration * 1000).toISOString().substr(14, 5);
  return (
    <div className="player">
      <audio ref={audioPlayer} src={musicFile} onLoadedData={handleLoadedData} loop volume={volume}></audio>
      <div className="timer">
        <div className="current">{formattedCurrentTime}</div>
        <div className="max">{formattedDuration}</div>
      </div>
      <div className="slider-background">
        <input ref={slider} className="my-slider" type="range" id="my-slider" min="0" max={duration} value={currentTime} onInput={handleChange} />
      </div>
      <div className="sound-slider-background">
        <input ref={audioSlider} className="my-sound-slider" type="range" id="my-sound-slider" min="0" max="100" value={volume * 100} onInput={handleChange2} />
      </div>
      <div className="buttons">
        <button className="startButton" onClick={start}><img src={unpressedPlay} className='unPressedPlayButtonImage'></img></button>
        <button className="stopButton" onClick={stop}><img src={unpressedStop} className='unPressedStopButtonImage'></img></button>
        <div className="unPressedNextButton" ></div>
        <div className="unPressedPrevButton" ></div>
      </div>
    </div>
  )
}