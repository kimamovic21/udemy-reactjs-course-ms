import React from 'react';
import './App03b.css';
import Header from './Header';
import Concept from './Concept';
import { concepts } from './concepts';

const App03b = () => {
  return (
    <div>
      <Header />
      <ul id="concepts">
        {concepts.map((concept, index) => {
         console.log(concept, index);
         return (
            <Concept 
                key={index}
                image={concept.image}
                title={concept.title}
                description={concept.description}
            />
        )})}
        {/* <Concept 
            image={concepts[0].image}
            title={concepts[0].title}
            description={concepts[0].description}
        /> */}
      </ul>
    </div>
  );
};

export default App03b;
