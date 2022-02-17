import './App.css';

import Boxes from './components/Boxes';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    
    <div className='container'>

      <Header />

      <Boxes title={'Do The Dishes'} />
      <Boxes title={'Eat Food'} />
      <Boxes title={'Wash the dog'} />
      <Boxes title={'Drink Wine'} />

      <Footer />

    </div>
  );
}

export default App;
