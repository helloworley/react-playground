import logo from './assets/logo.svg';
import './styles/App.css';
import Contact from './components/authorization-form/Contact';
import ColorChanger from './components/color-changer/ColorChanger';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Josh's React Playground</h2>
      </header>
      <ColorChanger />
      <Contact />
    </div>
  );
}

export default App;
