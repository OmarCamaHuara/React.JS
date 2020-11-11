import logo from './logo.svg';
import './App.css';
import Identificacao from './componentes/Identificacao'
import {Footer, Header, Left} from './componentes/Footer'

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
      <Footer dados = { {mes:10, ano:2023} }/>
      <Header palabra = {'exito'}/>
      <Left/>
    </div>
  );
}

export default App;
