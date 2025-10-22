import reactImg from './assets/react-core-concepts.png';
// import componentsImg from './assets/components.png';
import { CORE_CONCEPTS, EXAMPLES } from './data';
import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcept';
import TabButton from './components/TabButton';
import { useState } from 'react';

// main App component: props, destructuring, spread operator  
function App() {
  const [ selectedTopic, setSelectedTopic ] = useState();

  function handleSelect(selectedBtn) {
    // selectedBtn => 'Components', 'JSX', 'Props', 'State'
    setSelectedTopic(selectedBtn);
  }
  console.log('APP COMPONENT RENDERED');

  let tabContent = ( <p>Please select a topic</p> );
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
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
        <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          {CORE_CONCEPTS.map((conceptItem) => (
            <CoreConcept key={conceptItem.title} {...conceptItem} />
          ))}
        </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={selectedTopic === 'components'} /* conditional checks - {true} */
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
}

export default App;



{/* 
  - console.log(`You clicked on ${selectedBtn} tab`);
  - console.log(selectedTopic);

  <TabButton label="Props" /> then in TabButton.jsx use props.label / {label}

  <CoreConcepts
    image={CORE_CONCEPTS[0].image}
    title={CORE_CONCEPTS[0].title}
    description={CORE_CONCEPTS[0].description}
  />
  <CoreConcepts {...CORE_CONCEPTS[1]} />
  <CoreConcepts {...CORE_CONCEPTS[2]} />
  <CoreConcepts {...CORE_CONCEPTS[3]} />

  {!selectedTopic ? ( 
    <p>Please select a topic to see the example.</p> 
  ) : (
    <div id="tab-content">
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>{EXAMPLES[selectedTopic].code}</code>
      </pre>
    </div>
  )}

  - also possible with && operator: 
  {!selectedTopic && ( 
    <p>Please select a topic to see the example.</p> 
  )}

  {selectedTopic && (
    <div id="tab-content">
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>{EXAMPLES[selectedTopic].code}</code>
      </pre>
    </div>
  )}
*/}