import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './components/pages/Home';
import './App.css';
import Produtos from './components/pages/Produtos';


function App() {
  return (
   <Router>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/produtos' element={<Produtos/>}/>
     </Routes>
   </Router>
  );
}

export default App;
