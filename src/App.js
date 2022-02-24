import './App.css';

import Boxes from './components/Boxes';
import Header from './components/Header';
import Footer from './components/Footer';
import TaskForm from './components/TaskForm';
import CreateTaskPopup from './components/CreateTaskPopup';

function App() {
  return (
    
    <div className='container'>

      <Header />

      <div className='box-container'>
        <Boxes title={'Title'} />
      </div>

      <CreateTaskPopup />

      <TaskForm />

      <Footer />

    </div>
  );
}

export default App;
