import logo from './logo.svg';
import './App.css';
import CategoryList from './Category';
import RandomQuote from './RandomQuote';

function App() {
  return (
    <section className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="App-content">
        <aside>
          <CategoryList />
        </aside>
        <article>
          <h3>Quote</h3>
          <RandomQuote value="" id="content"/>
        </article>
      </div>
    </section>
  );
}

export default App;
