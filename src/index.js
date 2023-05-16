import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import App03 from './03_components/App03';
import App04 from './04_components/App04';
import App05 from './05_components/App05';
import App06 from './06_components/App06';
import App07 from './07_components/App07';
import App08 from './08_components/App08';
import App09 from './09_components/App09';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <App03 /> */}
    {/* <App04 /> */}
    {/* <App05 /> */}
    {/* <App06 /> */}
    {/* <App07 /> */}
    {/* <App08 /> */}
    <App09 />
  </React.StrictMode>
);
