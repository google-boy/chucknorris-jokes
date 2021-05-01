import logo from './logo.svg';
import './App.css';
import CategoryList from './Category';

function App() {
  return (
    <section className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="App-content">
        <aside>
          <h2>Joke categories</h2>
          <CategoryList />
        </aside>
        <article>Content shown here</article>
      </div>
    </section>
  );
}

export default App;
