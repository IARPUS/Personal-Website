import React from 'react'
import './cssStyles/Urls.css'
import Popup from 'reactjs-popup';
import Resume from './links/Resume.pdf'
export default function Urls() {
  function resumePopUp() {
    window.open(Resume);
  }
  function gitHubPopUp() {
    window.open('https://github.com/IARPUS');
  }
  function linkedInPopUp() {
    window.open('https://www.linkedin.com/in/roy-choi-9a839924a/');
  }
  return (
    <div className="urls">
      <button className="resumeButton" onClick={resumePopUp} title="The Paper (Resume)">
        <img src={require("./images/ResumeButton.png")} className='resumeIcon'>
        </img>
        <p className="img__description1">The Paper (Resume)</p>
      </button>
      <button className="gitHubButton" onClick={gitHubPopUp}>
        <img src={require("./images/githubButton.png")} className='gitHubIcon'>
        </img>
        <p className="img__description2">Cat Coin (Github)</p>
      </button>
      <button className="linkedInButton" onClick={linkedInPopUp}>
        <img src={require("./images/linkedInButton.png")} className='linkedInIcon'>
        </img>
        <p className="img__description3">The Network (LinkedIn)</p>
      </button>
    </div >
  )
}