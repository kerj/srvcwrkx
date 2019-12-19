import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactPlayer from 'react-player'
import video from './videos/The-One-That-Goes-Behind-the-Scenes_RECUT.mp4'

const App = () => {

  const callApi = async () => {
    const requestInfo = new XMLHttpRequest();
    requestInfo.onreadystatechange = await function() {
      if ( this.readyState === 4 && this.status === 200 ) {
        document.getElementById('test').innerHTML = JSON.stringify(this.responseText);
      }
    };
    
    requestInfo.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
    requestInfo.send();
  }

useEffect(() => {
  callApi()
}, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p id='test'></p>
        <ReactPlayer url={video} playing/>
      </header>
    </div>
  );
}

export default App;
