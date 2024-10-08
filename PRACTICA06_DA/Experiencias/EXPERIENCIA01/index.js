import React from 'react';
import ReactDOM from 'react-dom';


function App() {
  return (
    <div>
      <h1>Mi página con enlaces externos</h1>
      <p>Explora estos recursos:</p>
      <ul>
        <li><a href="https://www.google.com" target="_blank" rel="noopener noreferrer">Google</a></li>
        <li><a href="https://www.wikipedia.org" target="_blank" rel="noopener noreferrer">Wikipedia</a></li>
        <li><a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">ReactJS</a></li>
        <li><a href="https://developer.mozilla.org" target="_blank" rel="noopener noreferrer">MDN Web Docs</a></li>
      </ul>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
