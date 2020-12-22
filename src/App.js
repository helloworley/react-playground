import logo from './assets/logo.svg';
import './styles/App.css';
import Contact from './components/authorization-form/Contact';
import ColorChanger from './components/color-changer/ColorChanger';
import { FunFacts } from './components/animal-fun-facts/FunFacts';
import Clock from './components/clock/Clock';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Josh's React Playground</h2>
      </header>
      <ColorChanger />
      <Clock />
      <Contact />
      <FunFacts />
    </div>
  );
}

export default App;
