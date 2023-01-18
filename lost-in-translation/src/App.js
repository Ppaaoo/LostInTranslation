import logo from './logo.svg';
import './App.css';
import Employee from './components/Employee';

function App() {
  const showEmployees = true
  return (
    <div className="App">
      {showEmployees ? (
      <>
      <input type='text' onChange={(e) => {
        console.log(e.target.value);
      }}/>
        <Employee name = "Pao" role="Intern"/> 
        <Employee name = "Philip" role="Intern"/>
        <Employee name = "Nisse"/>
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
