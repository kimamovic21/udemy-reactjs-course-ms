import { useState } from 'react';
import { CORE_CONCEPTS } from './data';
import { EXAMPLES } from './data';

import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcept';
import TabButton from './components/TabButton';

const App = () => {
  console.log('APP COMPONENT EXECUTING');
  const [ selectedTopic, setSelectedTopic ] = useState();

  const handleSelect = (selectedButton) => {
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  };

  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    tabContent = (
      <div id='tab-content'>
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>{EXAMPLES[selectedTopic].code}</code>
      </pre>
    </div>  
    );
  }

  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => {
              // console.log(conceptItem);
              return (
                  // <CoreConcept key={conceptItem.id} {...conceptItem} />
                  <CoreConcept 
                      key={conceptItem.id}
                      title={conceptItem.title}
                      description={conceptItem.description}
                      image={conceptItem.image}
                  />
              )
            })}
          </ul>
        </section>

        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton 
                isSelected={selectedTopic === 'components'} 
                onSelect={() => handleSelect('components')}
            >
                Components
            </TabButton>
            <TabButton 
                isSelected={selectedTopic === 'jsx'}
                onSelect={() => handleSelect('jsx')}
            >
                JSX
            </TabButton>
            <TabButton 
                isSelected={selectedTopic === 'props'}
                onSelect={() => handleSelect('props')}
            >
                Props
            </TabButton>
            <TabButton 
               isSelected={selectedTopic === 'state'} 
               onSelect={() => handleSelect('state')}
            >
                State
            </TabButton>
          </menu>
            {tabContent}
        </section>
      </main>
    </div>
  );
};

export default App;





// let tabContent = 'Please click a button';

// const handleSelect = (selectedButton) => {
//   // selectedButton => 'components', 'jsx', 'props', 'state'
//   console.log('Hello world - selected');
//   console.log(selectedButton);
//   tabContent = selectedButton;
//   console.log(tabContent);
// };




//  <section id='core-concepts'> 
//   <h2>Core Concepts</h2>
//   <ul>
//     <CoreConcept 
//         title={CORE_CONCEPTS[0].title} 
//         description={CORE_CONCEPTS[0].description}
//         image={CORE_CONCEPTS[0].image}
//     />
//     <CoreConcept {...CORE_CONCEPTS[1]} />
//     <CoreConcept {...CORE_CONCEPTS[2]} />
//     <CoreConcept {...CORE_CONCEPTS[3]} />
//   </ul>
// </section> 