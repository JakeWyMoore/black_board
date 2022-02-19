import './App.css';

import Boxes from './components/Boxes';
import Header from './components/Header';
import Footer from './components/Footer';
import UserForm from './components/UserForm';

function App() {
  return (
    
    <div className='container'>

      <Header />

      <div className='box-container'>
        <Boxes title={'Title'} />
      </div>

      <UserForm />

      <Footer />

    </div>
  );
}

export default App;
