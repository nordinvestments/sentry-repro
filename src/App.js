import logo from './logo.svg';
import './App.css';
import axios from 'axios'

function App() {
  const throwError = (errorMessage) => {
    throw new Error(`ERROR: ${errorMessage}`)
  }
  const throwAsyncError = async () => {
    const response = await axios.get('/not/existing/path')

    console.log('response', response)

    throwError('async error!')
  }

  const onClick = async () => {
    throwError('error!')
  }

  const onAsyncClick = () => {
    throwAsyncError()
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={onClick}>Normal error</button>
        <button onClick={onAsyncClick}>Async error</button>
      </header>
    </div>
  );
}

export default App;
