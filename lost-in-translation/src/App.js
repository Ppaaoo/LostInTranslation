import './App.css';
import Employee from './components/Employee';
import {useState} from 'react';

function App() {
  const [role, setRole] = useState('Master cat');
  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ? (
      <>
      <input type='text' onChange={(e) => {
        setRole(e.target.value);
      }}/>
      <div className='flex flex-wrap justify-center'>
        <Employee name = "Pao" role="CEO" img="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"/> 
        <Employee name = "Philip" role="Intern" img="https://images.pexels.com/photos/35797/carnival-mask-costume-panel.jpg"/>
        <Employee name = "Nisse" role={role} img="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg"/>
        <Employee name = "Guffe" role="Is cat" img="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg"/>
      </div>
      </>
      )
      : <p>You cannot see the employees</p>}
    </div>
  );
}

export default App;
