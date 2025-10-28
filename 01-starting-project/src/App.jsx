import Header from './components/Header/Header';
import CoreConcepts from './components/CoreConcepts';
import Examples from './components/Examples';

// main App component: props, destructuring, spread operator  
function App() {
  return (
    <div>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
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