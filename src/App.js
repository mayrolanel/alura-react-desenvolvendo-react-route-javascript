import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<div>Pagina inicial</div>} />
          <Route path='/sobremim' element={<div>Sobre Mim</div>} />
          <Route path='*' element={<div>Página não encontrada</div>} />
        </Routes>
      
      </BrowserRouter>
    
      <div className="App">
        <header className="App-header">
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
        </header>
      </div>
    </>
  );
}

export default App;
