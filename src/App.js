import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import DetailCharacter from './components/detailCharacters';
import LandingPage from './components/LandingPage';
import Home from './components/Home';


function App() {
  return(
    <BrowserRouter>
    <div className= 'App' >
    <Routes>
      <Route path='/' element={<LandingPage/>} />
      <Route path='/home' element={<Home/>}/> 
      <Route path='/home/:id' element={<DetailCharacter/>} />
    </Routes>
    </div>
    </BrowserRouter>

  )
}

export default App;
