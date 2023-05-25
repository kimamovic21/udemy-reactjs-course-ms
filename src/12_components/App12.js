import React, { useState, useCallback } from 'react';
import './App12.css';
import Button from './UI/Button';
import DemoOutput from './Demo/DemoOutput';

const App12 = () => {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  console.log('APP RUNNING');

  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle === true) {
        setShowParagraph((prevShowParagraph) => !prevShowParagraph);
    };
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };

  return (
    <div className='app'>

        <h1>Hi there!</h1>
        <DemoOutput show={showParagraph}/>
        <Button onClick={allowToggleHandler}>Allow Toggling</Button>
        <Button onClick={toggleParagraphHandler}>Show Paragraph!</Button>
        
    </div>
  );
};

export default App12;
