import logo from './logo.svg';
import './App.css';
import Identificacao from './componentes/Identificacao'

function ticTac(){
  return new Date().toLocaleTimeString();
}



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <div>
        <Identificacao/>
      </div>
        <p>
          Edit <code>Seu </code>ano 2023.
        </p>
      </header>
    </div>
  );
}

export default App;
