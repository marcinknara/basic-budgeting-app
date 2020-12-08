import logo from './logo.svg';
import './App.css';
import Balance from './Components/Balance'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Balance total={40} />
      </header>
    </div>
  );
}

export default App;
