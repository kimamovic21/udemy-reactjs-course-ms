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
import App10 from './10_components/App10';
import { AuthContextProvider } from './10_components/store/auth-context';
import App11 from './11_components/App11';
import App12 from './12_components/App12';
import App13 from './13_components/App13';
import App14 from './14_components/App14';
import App15 from './15_components/App15';
import App16 from './16_components/App16';


// Section 1 - 9
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
        {/* <App09 /> */}
        {/* <App11 /> */}
        {/* <App12 /> */}
        {/* <App13 /> */}
        {/* <App14 /> */}
        {/* <App15 /> */}
        <App16 />
  </React.StrictMode> 
);


// Section 10
// const root10 = ReactDOM.createRoot(document.getElementById('root-10'));
// root10.render(
//   <AuthContextProvider>
//     <App10 />
//   </AuthContextProvider>
// );





