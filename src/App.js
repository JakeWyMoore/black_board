import './App.css';

import AnotherApp from './components/AnotherApp';

function App() {
  return (

    <div>
      <h1>ToDo List</h1>

      <div className='card'>
        <h2>Clean the Bathroom</h2>
        <button>All Done</button>
      </div>

      <div className='card'>
        <h2>Go to the grocery store</h2>
        <button>All Done</button>
      </div>

      <AnotherApp />

    </div>
  );
}

export default App;
