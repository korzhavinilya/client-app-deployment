import logo from './logo.svg';
import './App.css';
import assert from 'assert';

const { REACT_APP_NODE_ENV, REACT_APP_OTHER_ENV } = process.env;
assert(REACT_APP_NODE_ENV, 'REACT_APP_NODE_ENV env is not set');
assert(REACT_APP_OTHER_ENV, 'REACT_APP_OTHER_ENV env is not set');

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Environment <code>{REACT_APP_NODE_ENV}</code> {REACT_APP_OTHER_ENV}
        </p>
      </header>
    </div>
  );
}

export default App;
