import React from 'react'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Displaytables from './components/displaytables';
import Selection from './components/selection';


function App() {
  return(
    <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Displaytables/>}/>
      <Route path='/Selection' element={<Selection/>}/>
    </Routes>
    </BrowserRouter> 
    </div>
  )
}

export default App;
