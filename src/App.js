import logo from './logo.svg';
import './App.css';
import CategoryList from './Category';

function App() {
  return (
    <section className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <aside>
        <CategoryList />
      </aside>
    </section>
  );
}

export default App;
