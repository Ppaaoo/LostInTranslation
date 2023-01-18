import logo from './logo.svg';
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
        <Employee name = "Pao" role="Intern"/> 
        <Employee name = "Philip" role="Intern"/>
        <Employee name = "Nisse" role = {role}/>
        <Employee name = "Guffe"/>
      </>
      )
      : <p>You cannot see the employees</p>}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
