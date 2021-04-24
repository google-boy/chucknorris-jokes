import logo from './logo.svg';
import './App.css';
import Category from './Category';

function App() {
  return (
    <main className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <aside>
        <Category></Category>
      </aside>
    </main>
  );
}

export default App;
