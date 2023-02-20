import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home'
import Tour from './Pages/Tour';

function App() {  
  return (
<>
  <Navbar />  
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home /> }></Route>
      <Route path='/:id' element={<Tour /> }></Route>
    </Routes>
  </BrowserRouter>
;

</>

  )
}

export default App;
