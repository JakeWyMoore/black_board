import './App.css';

import Boxes from './components/Boxes';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    
    <div className='container'>

      <Header />

      <div className='box-container'>
        <Boxes title={'Title'} />
      </div>

      <Footer />

    </div>
  );
}

export default App;
