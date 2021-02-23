// Styling
import './App.css';

// Components
import Login from './components/login'

function App() {
  return (
    <div className="App">
      <nav className="nav">
        <Login />
      </nav>
      <header className="App-header">
        <h1> Friends</h1>

      </header>
    </div>
  );
}

export default App;
