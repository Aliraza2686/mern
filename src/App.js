import Home from './components/Home';
import About from './components/About'
import Details from './components/Details';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
          <Route path='/' element={<Home />} />
           <Route path='/about' element={<About />} />
            <Route path='/details/:id' element={<Details />} />
       </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
